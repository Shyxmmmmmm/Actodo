import { Route, Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
const Login = (props) => {
    const navigate=useNavigate()
    const list = props.list
    const setlist = props.setlist

    const [ip1, setip1] = useState('')
    const [ip2, setip2] = useState('')

    const funcip1=(event)=>{
        setip1(event.target.value)
    }

    const funcip2=(event)=>{
        setip2(event.target.value)
    }

    const funcadd=()=>{
        setlist([...list,{username:ip1,password:ip2}])
        navigate('/')
    }

    return (
        <div className="min-h-screen bg-black p-10">
            <div className="bg-white p-10 rounded-2xl">
                <h1 className="font-bold text-2xl mb-3">Hey Hi!!</h1>
                <p>Sign up here:)</p>
                <div className="my-5">
                    <input value={ip1} onChange={funcip1} type="text" placeholder="Username" className="border border-black rounded p-1 my-2" /><br />
                    <input value={ip2} onChange={funcip2} type="text" placeholder="Password" className="border border-black rounded p-1 my-2" /><br />
                    <input type="text" placeholder="Confirm password" className="border border-black rounded p-1 mt-2" />


                </div>
                <button onClick={funcadd} className="p-1 rounded text-white bg-[#FBA305] hover:scale-125 duration-500 hover:bg-yellow-700">Signup</button>

                <p className="mt-2">Don't have an account ? <Link to={'/'} className="underline text-blue-500">Login</Link></p>
            </div>



        </div>
    )
}
export default Login