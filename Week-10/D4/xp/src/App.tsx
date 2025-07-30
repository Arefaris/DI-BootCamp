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
