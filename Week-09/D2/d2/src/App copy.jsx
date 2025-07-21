import './App.css'
import Parent from './component/Parent'
import Child from './component/Child'
import Counter from "./component/Counter"
import ErrorBoundry from './Helpers/ErrorBoundry'

function App() {

  return (
    <>
      <h2>Children / Error Boundary / Routering </h2>
       <Counter />
      <Parent admin="123">
        {/* <Child /> */}
        <h2>Admin panel</h2>
        </Parent>
        <ErrorBoundry message="something went wrong on counter">
          <Counter />
        </ErrorBoundry>
        
    </>
  )
}

export default App
