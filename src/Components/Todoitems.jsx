const Todoitems = (props) => {
    return (
        <div>
            <p className="flex justify-between ">{props.index + 1}. {props.items.content} <button onClick={() => { props.funcdel(props.items.id) }} className="cursor-pointer text-red-600">Delete</button></p>
        </div>
    )
}
export default Todoitems