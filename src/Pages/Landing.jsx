import Header from "../Components/Header"
import Cards from '../Components/Cards'
import Todocontainer from "../Components/Todocontainer"
import { useLocation } from "react-router-dom"

const Landing=()=>{
    const location=useLocation()
    return(
        <div className="bg-black p-10 min-h-screen">
            <div className="bg-white p-10 rounded-2xl">
                <Header location={location.state.user}/>
                <Cards/>
                <Todocontainer/>
            </div>
        </div>
    )
}
export default Landing