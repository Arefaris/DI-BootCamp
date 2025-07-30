import React from "react";
import type { ReactNode } from "react"
import type { Book } from "../Types";

type ListProps<T> = {
    items: T[],
}

export const List = <T extends object>({ items }: ListProps<T>) => {

    const renderItem = (item: T | Book) => {
        if ("id" in item && "title" in item && "author" in item){
             return (
            <div key={item.id}>
                <div>{item.title}</div>
                <div>{item.author}</div>
            </div>)

        } else{
            return <div>Unknow Type</div>
        }
       
    }

    return (<div>
        {items.map((item, index)=> {
            return <div key={index}>
                        {renderItem(item)}
                    </div>
        })}
        
    </div>
    )
 }
