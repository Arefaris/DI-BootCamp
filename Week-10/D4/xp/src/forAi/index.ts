// App.tsx
import './App.css'
import Greeting from './Greeting'
import Counter from './Counter'
import UserCard from './UserCard'
import UserList from './UserList'

function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>TypeScript React Exercises</h1>
      
      <section style={{ marginBottom: '30px' }}>
        <h2>Exercise 2: Greeting Component</h2>
        <Greeting name="John Doe" messageCount={5} />
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>Exercise 3: Counter Component</h2>
        <Counter />
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>Exercise 4: UserCard Component</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          <UserCard name="Alice" age={25} role="Developer" />
          <UserCard name="Bob" age={30} />
          <UserCard role="Manager" />
          <UserCard />
        </div>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>Exercise 5: UserList Component</h2>
        <UserList />
      </section>
    </div>
  )
}

export default App

// Greeting.tsx
interface GreetingProps {
  name: string;
  messageCount: number;
}

const Greeting = ({ name, messageCount }: GreetingProps) => {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>You have {messageCount} new messages.</p>
    </div>
  );
};

export default Greeting;

// Counter.tsx
import { useState } from 'react';

type LastAction = 'increment' | 'decrement' | null;

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const [lastAction, setLastAction] = useState<LastAction>(null);

  const increment = (): void => {
    setCount(prev => prev + 1);
    setLastAction('increment');
  };

  const decrement = (): void => {
    setCount(prev => prev - 1);
    setLastAction('decrement');
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      {lastAction && (
        <p>Last action: {lastAction}</p>
      )}
    </div>
  );
};

export default Counter;

// userCard.tsx
interface UserCardProps {
  name?: string;
  age?: number;
  role?: string;
}

const UserCard = ({ name = "Guest", age = 0, role = "User" }: UserCardProps) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', margin: '8px', borderRadius: '8px' }}>
      <h3>User Profile</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Role:</strong> {role}</p>
    </div>
  );
};

export default UserCard;

// UserList.tsx
import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
  };
  address: {
    city: string;
  };
}

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async (): Promise<void> => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: User[] = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading users...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>User List</h2>
      <div style={{ display: 'grid', gap: '16px' }}>
        {users.map((user) => (
          <div 
            key={user.id} 
            style={{ 
              border: '1px solid #ddd', 
              padding: '16px', 
              borderRadius: '8px',
              backgroundColor: '#f9f9f9'
            }}
          >
            <h3>{user.name}</h3>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
            <p><strong>City:</strong> {user.address.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;