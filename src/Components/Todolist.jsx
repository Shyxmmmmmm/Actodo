import { useState } from "react"
import Todoitems from "./Todoitems"

const Todolist = (props) => {

    const list=props.list
    const setlist=props.setlist
    

    const funcdel=(id)=>{
        const temp=list.filter((items)=>{
            if (items.id===id){
                return false
            }
            else{
                return true
            }
        })
        setlist(temp)
    }

    return (
        <div className="flex-grow bg-[#BEB4EB] p-5 rounded">
            <h1 className="font-bold text-2xl">Today's Activity</h1>
            {
                list.map((items,index)=>{
                    return <Todoitems key={index} index={index} items={items} funcdel={funcdel} />
                })
            }
        </div>
    )
}
export default Todolist