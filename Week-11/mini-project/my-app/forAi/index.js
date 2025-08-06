//backend/app.js
const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.json({ message: 'Collaborative Storytelling API is running!' });
});

app.use('/', authRoutes);
app.use('/stories', storyRoutes);
app.use('/contributors', contributorRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

//backend/models/User.js
export class User {
    static async create({ username, email, password }) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const [user] = await db('users')
            .insert({ username, email, password: hashedPassword })
            .returning(['id', 'username', 'email', 'created_at']);
        return user;
    }

    static async findByEmail(email) {
        const user = await db('users').where({ email }).first();
        return user;
    }

    static async findById(id) {
        const user = await db('users')
            .where({ id })
            .select('id', 'username', 'email', 'created_at')
            .first();
        return user;
    }

    static async validatePassword(plainPassword, hashedPassword) {
        return await bcrypt.compare(plainPassword, hashedPassword);
    }
}

//backend/models/Story.js
export class Story {
    static async create({ title, content, authorId }) {
        const [story] = await db('stories')
            .insert({ title, content, author_id: authorId })
            .returning(['id', 'title', 'content', 'author_id', 'created_at', 'updated_at']);
        return story;
    }

    static async findAll() {
        const stories = await db('stories')
            .join('users', 'stories.author_id', 'users.id')
            .select(
                'stories.id', 'stories.title', 'stories.content',
                'stories.created_at', 'stories.updated_at',
                'users.username as author_name', 'users.id as author_id'
            )
            .orderBy('stories.created_at', 'desc');
        return stories;
    }

    static async update(id, { title, content }) {
        const [story] = await db('stories')
            .where({ id })
            .update({ title, content, updated_at: db.fn.now() })
            .returning(['id', 'title', 'content', 'author_id', 'updated_at']);
        return story;
    }

    static async delete(id) {
        const result = await db('stories').where({ id }).del();
        return result > 0;
    }

    static async isAuthorOrContributor(storyId, userId) {
        const story = await db('stories').where({ id: storyId }).first();
        if (!story) return false;
        if (story.author_id === userId) return true;
        
        const contributor = await db('contributors')
            .where({ story_id: storyId, user_id: userId })
            .first();
        return !!contributor;
    }
}

//backend/middlewares/auth.js
export const authenticateToken = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access token required' });
    }

    try {
        const decoded = jwt.verify(token, process.env.ACCES_TOKEN_SECRET);
        const user = await User.findById(decoded.userId);
        
        if (!user) {
            return res.status(401).json({ message: 'Invalid token' });
        }

        req.user = user;
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
};

export const generateToken = (userId) => {
    return jwt.sign({ userId }, process.env.ACCES_TOKEN_SECRET, { expiresIn: '24h' });
};

//backend/controllers/authController.js
export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: 'Username, email, and password are required' });
        }

        const existingUser = await User.findByEmail(email);
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }

        const user = await User.create({ username, email, password });
        res.status(201).json({ 
            message: 'User registered successfully',
            user: { id: user.id, username: user.username, email: user.email }
        });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const user = await User.findByEmail(email);
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const isValidPassword = await User.validatePassword(password, user.password);
        if (!isValidPassword) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const token = generateToken(user.id);
        res.json({ 
            message: 'Login successful',
            token,
            user: { id: user.id, username: user.username, email: user.email }
        });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

//backend/controllers/storyController.js
export const getAllStories = async (req, res) => {
    try {
        const stories = await Story.findAll();
        res.json(stories);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const createStory = async (req, res) => {
    try {
        const { title, content } = req.body;
        const authorId = req.user.id;

        if (!title || !content) {
            return res.status(400).json({ message: 'Title and content are required' });
        }

        const story = await Story.create({ title, content, authorId });
        res.status(201).json({ message: 'Story created successfully', story });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const updateStory = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        const userId = req.user.id;

        if (!title || !content) {
            return res.status(400).json({ message: 'Title and content are required' });
        }

        const canEdit = await Story.isAuthorOrContributor(id, userId);
        if (!canEdit) {
            return res.status(403).json({ message: 'You are not authorized to edit this story' });
        }

        const story = await Story.update(id, { title, content });
        if (!story) {
            return res.status(404).json({ message: 'Story not found' });
        }

        res.json({ message: 'Story updated successfully', story });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const deleteStory = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;

        const isAuthor = await Story.isAuthor(id, userId);
        if (!isAuthor) {
            return res.status(403).json({ message: 'Only the author can delete this story' });
        }

        const deleted = await Story.delete(id);
        if (!deleted) {
            return res.status(404).json({ message: 'Story not found' });
        }

        res.json({ message: 'Story deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

//backend/routes/auth.js
const router = express.Router();
router.post('/register', register);
router.post('/login', login);

//backend/routes/stories.js
const router = express.Router();
router.get('/', authenticateToken, getAllStories);
router.post('/', authenticateToken, createStory);
router.patch('/:id', authenticateToken, updateStory);
router.delete('/:id', authenticateToken, deleteStory);

//frontend/src/App.tsx
export const App = () => {
  const dispatch = useAppDispatch()
  const { user, isAuthenticated } = useAppSelector(selectAuth)

  const handleLogin = (token: string, userData: any) => {
    dispatch(loginSuccess({ token, user: userData }))
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>📚 Collaborative Stories</h1>
        {user && (
          <div className="user-info">
            Welcome, {user.username}!
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </div>
        )}
      </header>
      
      <main className="app-main">
        {!isAuthenticated ? (
          <Auth onLogin={handleLogin} />
        ) : (
          <Stories />
        )}
      </main>
    </div>
  )
}

//frontend/src/features/auth/authSlice.ts
const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem('token'),
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null,
    isAuthenticated: !!localStorage.getItem('token')
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token
      state.user = action.payload.user
      state.isAuthenticated = true
      localStorage.setItem('token', action.payload.token)
      localStorage.setItem('user', JSON.stringify(action.payload.user))
    },
    logout: (state) => {
      state.token = null
      state.user = null
      state.isAuthenticated = false
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    }
  },
  selectors: {
    selectAuth: (state) => state,
    selectToken: (state) => state.token,
    selectUser: (state) => state.user,
    selectIsAuthenticated: (state) => state.isAuthenticated
  }
})

//frontend/src/features/stories/storiesSlice.ts
const storiesSlice = createSlice({
  name: "stories",
  initialState: {
    stories: [],
    loading: false,
    error: null
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    setStories: (state, action) => {
      state.stories = action.payload
      state.loading = false
      state.error = null
    },
    addStory: (state, action) => {
      state.stories.unshift(action.payload)
    },
    updateStory: (state, action) => {
      const index = state.stories.findIndex(story => story.id === action.payload.id)
      if (index !== -1) {
        state.stories[index] = action.payload
      }
    },
    removeStory: (state, action) => {
      state.stories = state.stories.filter(story => story.id !== action.payload)
    }
  }
})

//frontend/src/components/Auth.tsx
const Auth = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '', email: '', password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      let result;
      if (isLogin) {
        result = await api.login(formData.email, formData.password);
      } else {
        result = await api.register(formData.username, formData.email, formData.password);
        if (result.message === 'User registered successfully') {
          result = await api.login(formData.email, formData.password);
        }
      }

      if (result.token) {
        onLogin(result.token, result.user);
      } else {
        setError(result.message || 'Authentication failed');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>{isLogin ? 'Login' : 'Register'}</h2>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})}
                required={!isLogin}
              />
            </div>
          )}
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
          </div>
          
          <button type="submit" disabled={loading} className="submit-btn">
            {loading ? 'Please wait...' : (isLogin ? 'Login' : 'Register')}
          </button>
        </form>
        
        <p className="auth-toggle">
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <button onClick={() => setIsLogin(!isLogin)} className="toggle-btn">
            {isLogin ? 'Register' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

//frontend/src/components/Stories.tsx
const Stories = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(selectToken);
  const user = useAppSelector(selectUser);
  const stories = useAppSelector(selectStories);
  const loading = useAppSelector(selectStoriesLoading);

  const [showForm, setShowForm] = useState(false);
  const [editingStory, setEditingStory] = useState(null);
  const [formData, setFormData] = useState({ title: '', content: '' });

  useEffect(() => {
    loadStories();
  }, []);

  const loadStories = async () => {
    if (!token) return;
    dispatch(setLoading(true));
    try {
      const storiesData = await api.getStories(token);
      dispatch(setStories(storiesData));
    } catch (err) {
      dispatch(setError('Failed to load stories'));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) return;
    
    dispatch(setLoading(true));

    try {
      let result;
      if (editingStory) {
        result = await api.updateStory(token, editingStory.id, formData.title, formData.content);
        if (result.story) {
          dispatch(updateStory({
            id: editingStory.id,
            title: formData.title,
            content: formData.content,
            author_name: editingStory.author_name,
            author_id: editingStory.author_id,
            created_at: editingStory.created_at
          }));
        }
      } else {
        result = await api.createStory(token, formData.title, formData.content);
        if (result.story && user) {
          dispatch(addStory({
            ...result.story,
            author_name: user.username,
            author_id: user.id
          }));
        }
      }
      
      setFormData({ title: '', content: '' });
      setShowForm(false);
      setEditingStory(null);
    } catch (err) {
      dispatch(setError('Failed to save story'));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleDelete = async (storyId) => {
    if (!token || !confirm('Are you sure you want to delete this story?')) return;
    
    try {
      await api.deleteStory(token, storyId);
      dispatch(removeStory(storyId));
    } catch (err) {
      dispatch(setError('Failed to delete story'));
    }
  };

  const canEditStory = (story) => {
    return user && story.author_id === user.id;
  };

  return (
    <div className="stories-container">
      <div className="stories-header">
        <h2>All Stories</h2>
        <button
          onClick={() => {
            setShowForm(!showForm);
            setEditingStory(null);
            setFormData({ title: '', content: '' });
          }}
          className="new-story-btn"
        >
          {showForm ? 'Cancel' : '+ New Story'}
        </button>
      </div>

      {showForm && (
        <div className="story-form">
          <h3>{editingStory ? 'Edit Story' : 'Create New Story'}</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="title"
                placeholder="Story title"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="content"
                placeholder="Write your story..."
                value={formData.content}
                onChange={(e) => setFormData({...formData, content: e.target.value})}
                rows={6}
                required
              />
            </div>
            <button type="submit" disabled={loading} className="save-btn">
              {loading ? 'Saving...' : (editingStory ? 'Update' : 'Create')}
            </button>
          </form>
        </div>
      )}

      <div className="stories-list">
        {stories.map(story => (
          <div key={story.id} className="story-card">
            <div className="story-header">
              <h3>{story.title}</h3>
              <div className="story-meta">
                <span>by {story.author_name}</span>
                <span>{new Date(story.created_at).toLocaleDateString()}</span>
              </div>
            </div>
            
            <div className="story-content">
              <p>{story.content}</p>
            </div>
            
            {canEditStory(story) && (
              <div className="story-actions">
                <button onClick={() => {
                  setEditingStory(story);
                  setFormData({ title: story.title, content: story.content });
                  setShowForm(true);
                }} className="edit-btn">
                  Edit
                </button>
                <button onClick={() => handleDelete(story.id)} className="delete-btn">
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

//frontend/src/services/api.ts
const API_BASE = 'http://localhost:5001';

export const api = {
  register: async (username, email, password) => {
    const response = await fetch(`${API_BASE}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password })
    });
    return response.json();
  },

  login: async (email, password) => {
    const response = await fetch(`${API_BASE}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    return response.json();
  },

  getStories: async (token) => {
    const response = await fetch(`${API_BASE}/stories`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return response.json();
  },

  createStory: async (token, title, content) => {
    const response = await fetch(`${API_BASE}/stories`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ title, content })
    });
    return response.json();
  },

  updateStory: async (token, id, title, content) => {
    const response = await fetch(`${API_BASE}/stories/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ title, content })
    });
    return response.json();
  },

  deleteStory: async (token, id) => {
    const response = await fetch(`${API_BASE}/stories/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return response.json();
  }
};
