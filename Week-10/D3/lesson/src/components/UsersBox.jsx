import { useEffect } from 'react'

import {
    useUSersSelector,
    useFetchUsers,
    useSelectWriter
} from "./hooks"

export default function UsersBox() {
    const users = useUSersSelector()
    const callFetchUsers = useFetchUsers()
    const callSelectWriter = useSelectWriter()

    useEffect(()=>{
        callFetchUsers()
    }, [])
    return (
        <>
            <h2>Writers</h2>
            <select onChange={(e) => callSelectWriter(e.target.value)}>
                <option value={-1}>Select a writer</option>
                {
                    users && users.map(item => {
                        return(
                            <option key={item.id} value={item.id}>{item.name}</option>
                        )
                    })
                }
            </select>
        </>

    )
}
