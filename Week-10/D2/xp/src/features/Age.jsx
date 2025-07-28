import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {increaseAgeAsync, decreaseAgeAsync} from "../features/ageSlice"
export default function Age() {
  const age = useSelector((state) => state.ageReducer.age)
  const loading = useSelector((state) => state.ageReducer.loading)
  const dispatch = useDispatch()
  
  return (<>
      
      <h2>Age: {age}</h2>
      <button onClick={() => dispatch(increaseAgeAsync())}>Increase</button>
      <button onClick={()=> dispatch(decreaseAgeAsync())}>Decrease</button>
      <div>
            {loading === "loading" ? <i className="fas fa-spinner fa-spin"></i> : ""}
      </div>
      
    </>
    
  )
}
