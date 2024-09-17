

export default function List(props){
    


    return(
        <ul className=" overflow-y-scroll overflow-x-hidden h-72 border">
            {props.tema.temata.map((item, index) => <li className="p-2 m-2 rounded-sm w-64 border cursor-pointer" key={index} onClick={() => {props.select(item)
                props.setIsList(true)
            }}>{item}</li>)}
        </ul>
    )
}