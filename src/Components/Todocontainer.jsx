import Todoinput from './Todoinput'
import Todolist from './Todolist'
import { useState } from 'react'
const Todocontainer = () => {
    const [list,setlist]=useState([
        {
            id:1,
            content:"wake up early"
        },
        {
            id:2,
            content:"drink water"
        }
    ])
    return (
        <div className="flex flex-wrap gap-5">
            <Todoinput list={list} setlist={setlist}/>

            <Todolist list={list} setlist={setlist}/>
        </div>
    )

}
export default Todocontainer