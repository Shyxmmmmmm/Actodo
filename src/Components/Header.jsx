const Header =(props)=>{
    return(
        <div >
            <h1 className="font-bold text-2xl">Hello {props.location}!!</h1>
            <p>I help you manage your activities :)</p>
        </div>
    )
}
export default Header