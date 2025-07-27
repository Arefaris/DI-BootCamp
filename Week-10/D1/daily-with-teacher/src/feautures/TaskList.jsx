import TaskRemove from './TaskRemove'
import { useSelector, useDispatch, connect } from 'react-redux'
import { changeStatus } from "./actions";

 function TaskList(props) {
  const tasks = useSelector((state) => state.taskReducer.tasks)

  return (<>
   <h2>List of tasks</h2>
    {
        tasks && tasks.map(item => {
            return (
                <div key={item.id}>
                    <span onClick={()=> dispatch(changeStatus(item.id))}>
                    
                    {item.name} - {item.date} <TaskRemove />
                    </span>
                </div>
            )
        })
    }
  
  </>
   
)}

const mapStateToProps = (state) => {
    return {
        a: state.taskReducer.tasks,

    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        add: (nam)=> {

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (TaskList)