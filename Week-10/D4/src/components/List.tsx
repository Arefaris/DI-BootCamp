import type { ReactElement } from "react"

type ListProps<T> = {
    items: T[]
}

const List = <T,>({items}: ListProps<T>): ReactElement => {
    return (
        <>
        <h2>List of Generic Items</h2>
        {
            items && items.map((item, indx)=> {
                return <div key={indx}>{item as ReactElement}</div>
            })
        }
        </>
    )
    
}

export default List