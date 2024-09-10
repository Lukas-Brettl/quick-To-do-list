import Input from "../components/input.jsx"
import Button from "../components/button.jsx"
import "../pagesCss/Login.css"
export default function Login(){
    return(
        <div id="login-div" className="flex flex-col items-center justify-evenly">
           <Input text="Jméno" type="text"/>
           <Button text="Pokračovat"/>
        </div>
    )
}