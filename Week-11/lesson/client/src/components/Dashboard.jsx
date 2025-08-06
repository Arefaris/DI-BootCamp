import {useEffect, useState} from 'react'
import axios from 'axios'
export default function Dashboard() {
  const [users, setUsers] = useState()
  const BASE_URL = import.meta.env.VITE_BASE_URL

  const getAllusers = async ()=> {
        try {
            const response = await axios.get(`${BASE_URL}/api/user/all`, {
                withCredentials: true
            })
            setUsers(response.data)
        } catch(error){
            console.log(error)
        }
  }

  useEffect(()=>{
    getAllusers()
  }, [])

  return (
    <div>
         {
            users && users.map((item) => {
                return <div key={item.id}>{item.email}</div>
                
            })
        }

    </div>
   
  )
}
