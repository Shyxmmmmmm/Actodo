const Cards=()=>{
    return(
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-10 my-5">
            <div className="bg-[#8272DA] p-5 rounded">
                <h1 className="text-center font-bold text-xl">23</h1>
                <p className="text-center">Chennai</p>
            </div>
            <div className="bg-[#FC6662] p-5 rounded">
                <h1 className="text-center font-bold text-xl">20 December</h1>
                <p className="text-center">14:03:24</p>
            </div>
            <div className="bg-[#FEA201] p-5 rounded">
                <h1 className="text-center font-bold text-xl">Build Using</h1>
                <p className="text-center">React Vite</p>
            </div>
        </div>
    )
}
export default Cards