import Landing from "./Pages/Landing"
import Login from "./Pages/Login"
import Signup from './Pages/Signup'
import { BrowserRouter, Route,Routes } from "react-router-dom"
import { useState } from "react"
const App = () => {
    const [list, setlist] = useState(
        [
            {
                username: 'shyam',
                password: '123'
            }
        ]
    )
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login list={list} setlist={setlist} />}></Route>
                <Route path="/signup" element={<Signup list={list} setlist={setlist} />}></Route>
                <Route path="/landing" element={<Landing />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App