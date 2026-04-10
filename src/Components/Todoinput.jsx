import { useState } from "react"

const Todoinput = (props) => {
    const [input,setinput]=useState('')
    const list=props.list
    const setlist=props.setlist

    const funcinput=(event)=>{
        setinput(event.target.value)
    }

    const funcclick=()=>{
        setlist([...list,{id:list.length+1,content:input}])

        setTimeout(() => {
            setinput('')
        }, 1);
    }

    return (
        <div className="flex flex-col gap-5">
            <h1 className="font-bold text-xl">Manage Activities</h1>
            <div className="flex gap-2">
                <input value={input} onChange={funcinput} type="text" placeholder="Next Activity..." className="border rounded border-black p-1" />
                <button onClick={funcclick} className="bg-black p-1 text-white cursor-pointer">ADD</button>
            </div>
        </div>
    )
}
export default Todoinput