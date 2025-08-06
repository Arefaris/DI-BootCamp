import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { selectToken, selectUser } from '../features/auth/authSlice';
import { 
  selectStories, 
  selectStoriesLoading, 
  selectStoriesError,
  setLoading,
  setError,
  setStories,
  addStory,
  updateStory,
  removeStory
} from '../features/stories/storiesSlice';
import { api } from '../services/api';

const Stories = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(selectToken);
  const user = useAppSelector(selectUser);
  const stories = useAppSelector(selectStories);
  const loading = useAppSelector(selectStoriesLoading);
  const storeError = useAppSelector(selectStoriesError);
  const [showForm, setShowForm] = useState(false);
  const [editingStory, setEditingStory] = useState<any>(null);
  const [formData, setFormData] = useState({ title: '', content: '' });
  const [error, setLocalError] = useState('');
  const [showContributors, setShowContributors] = useState<number | null>(null);
  const [contributors, setContributors] = useState<any[]>([]);

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
      setLocalError('Failed to load stories');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;
    
    dispatch(setLoading(true));
    setLocalError('');

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
      setLocalError('Failed to save story');
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleEdit = (story: any) => {
    setEditingStory(story);
    setFormData({ title: story.title, content: story.content });
    setShowForm(true);
  };

  const handleDelete = async (storyId: number) => {
    if (!token || !confirm('Are you sure you want to delete this story?')) return;
    
    try {
      await api.deleteStory(token, storyId);
      dispatch(removeStory(storyId));
    } catch (err) {
      dispatch(setError('Failed to delete story'));
      setLocalError('Failed to delete story');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const canEditStory = (story: any) => {
    return user && story.author_id === user.id;
  };

  const loadContributors = async (storyId: number) => {
    if (!token) return;
    
    try {
      const contributorsData = await api.getContributors(token, storyId);
      setContributors(contributorsData);
    } catch (err) {
      setLocalError('Failed to load contributors');
    }
  };

  const toggleContributors = (storyId: number) => {
    if (showContributors === storyId) {
      setShowContributors(null);
      setContributors([]);
    } else {
      setShowContributors(storyId);
      loadContributors(storyId);
    }
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

      {(error || storeError) && <div className="error-message">{error || storeError}</div>}

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
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="content"
                placeholder="Write your story..."
                value={formData.content}
                onChange={handleChange}
                rows={6}
                required
              />
            </div>
            <div className="form-actions">
              <button type="submit" disabled={loading} className="save-btn">
                {loading ? 'Saving...' : (editingStory ? 'Update' : 'Create')}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setEditingStory(null);
                  setFormData({ title: '', content: '' });
                }}
                className="cancel-btn"
              >
                Cancel
              </button>
            </div>
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
            
            <div className="story-actions">
              <button 
                onClick={() => toggleContributors(story.id)} 
                className="contributors-btn"
              >
                {showContributors === story.id ? 'Hide' : 'Show'} Contributors
              </button>
              
              {canEditStory(story) && (
                <>
                  <button onClick={() => handleEdit(story)} className="edit-btn">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(story.id)} className="delete-btn">
                    Delete
                  </button>
                </>
              )}
            </div>

            {showContributors === story.id && (
              <div className="contributors-section">
                <h4>Contributors:</h4>
                {contributors.length > 0 ? (
                  <ul className="contributors-list">
                    {contributors.map(contributor => (
                      <li key={contributor.id}>
                        {contributor.username} ({contributor.email})
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No contributors yet.</p>
                )}
              </div>
            )}
          </div>
        ))}
        
        {stories.length === 0 && (
          <div className="no-stories">
            <p>No stories yet. Create the first one!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stories;