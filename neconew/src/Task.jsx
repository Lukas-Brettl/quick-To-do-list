import "./App.css"
import "./App.jsx"
import { useEffect, useState, useRef } from "react"
export default function Task(props,{onButtonClick, findIndex}){
    const [taskImportance, setTaskImportance] = useState("normal")
    const [show, setShow] = useState(false)
    const importance = {
        "important": "#bf3032",
        "unusual": "#ebb136",
        "normal": "#b0b0b0",
        "chill": "#96ba3c"

    }

    const buttonRef = useRef(null)
    
    useEffect(()=>{
        if(buttonRef.current){
            buttonRef.current.style.background = importance[taskImportance]
        }
        
    },[taskImportance])


    function buttonClick(){
        setShow(!show)
        if(props.count>1){
            return onButtonClick
            findIndex(props.count -1)
        }
    }

    return(

        <div draggable
        onDrag={()=>console.log("lll")} className="flex mb-2 items-center justify-start">
            <span className="text-lg font-semibold text-gray-400 mr-4 flex justify-center items-center">{props.num}</span>
            <div id="task" className="text-white rounded-md h-12 text-xl pl-1.5 flex justify-start items-center w-80">
                
                <button ref={buttonRef} id="importance_button"  onClick={buttonClick} className="text-black font-semibold text-base rounded-3xl h-8 w-20 flex justify-center items-center p-1.5 mr-3" >{taskImportance}</button>
                <ul id="importance_list" className=" shadow-lg rounded-lg  w-48 absolute" style={{"display": show ? "block": "none"}}>
                    <li onClick={() => {setTaskImportance("important")
                        setShow(!show)
                    }} className="mb-3 flex items-center hover:bg-slate-600 w-full p-3 h-11 rounded-tr-lg rounded-tl-lg">important</li>
                    <li onClick={() => {setTaskImportance("unusual")
                        setShow(!show)
                    }} className="mb-3 flex items-center hover:bg-slate-600 w-full p-3 h-11 ">unusual</li>
                    <li onClick={() => {setTaskImportance("normal")
                        setShow(!show)
                    }} className="mb-3 flex items-center hover:bg-slate-600 w-full p-3 h-11 ">normal</li>
                    <li onClick={() => {setTaskImportance("chill")
                        setShow(!show)
                    }} className=" flex items-center hover:bg-slate-600 w-full p-3 h-11 rounded-br-lg rounded-bl-lg">chill</li>
                </ul>
        
                <span className="mr-2">
                    {props.text}    
                </span>   
            </div>
        </div>
        
        
    )
}