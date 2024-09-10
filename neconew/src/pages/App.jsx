import "../pagesCss/App.css"
import Login from "./Login.jsx"
import Mainapp from "./Mainapp.jsx"
export default function App(){
  return(
    <div>
      
      {localStorage.getItem("jmeno") == null ||  localStorage.getItem("jmeno") == "" ?
        <div id="main-login-div" className="flex justify-center items-center w-full h-full absolute">
          <Login/>
        </div>
      : <Mainapp/> } 

    </div>
  )
}