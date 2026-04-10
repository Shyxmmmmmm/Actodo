import { Route,Link } from "react-router-dom"
import Landing from "./Landing"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
const Login=(props)=>{

    const navigate=useNavigate()
    const list=props.list 
    const setlist=props.setlist

    const [ip1,setip1]=useState('')
    const [ip2,setip2]=useState('')
    const [ruser,setruser]=useState(true)

    const funcip1=(event)=>{
        setip1(event.target.value)
    }

    const funcip2=(event)=>{
        setip2(event.target.value)
    }

    const funcbtn=()=>{
        var temp=false
        list.forEach((items)=>{
            if (items.username==ip1 && items.password==ip2){
                navigate('/landing',{state:{user:ip1}})
                temp=true
            }
        })
        if (temp===false){
            setruser(false)
        }
        
    }

    return(
        <div className="min-h-screen bg-black p-10">
            <div className="bg-white p-10 rounded-2xl">
                <h1 className="font-bold text-2xl mb-3">Hey Hi!!</h1>
                {
                    ruser?<p>I help you manage your activity After your Login :)</p>:<p className="text-red-700">please Signup First!!</p>
                }
                
                <div className="my-5">
                <input value={ip1} onChange={funcip1} type="text" placeholder="Username" className="border border-black rounded p-1 my-2" /><br />
                <input value={ip2} onChange={funcip2} type="text" placeholder="Password" className="border border-black rounded p-1 my-2" /><br />              
                </div>
                <button onClick={funcbtn} className="p-1 rounded text-white bg-[#FBA305] hover:scale-125 duration-500 hover:bg-yellow-700">Login</button>

                <p className="mt-2">Don't have an account ? <Link to={'/signup'} className="underline text-blue-500">Signup</Link></p>
            </div>



        </div>
    )
}
export default Login

