import "../componenstCss/input.css"
import { useState, useEffect } from "react"
export default function Input(props){
    const [inputText, setInputText] = useState("")

    useEffect(()=>{
        localStorage.setItem("jmeno", inputText)
    }, [inputText])
    return(
    <div id="input-div">
        
        <input onChange={(e)=> setInputText(e.target.value)} value={inputText} id="input-component" type={props.type}></input>
        <label id="input-component-label">{props.text}</label>
    </div>)
}