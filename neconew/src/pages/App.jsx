import "../pagesCss/App.css"
import Login from "./Login.jsx"
import Mainapp from "./Mainapp.jsx"
import Lesson from "./Lesson.jsx"
import { useState } from "react"

export default function App(){

  const [data, setData] = useState(undefined)

  function start(item, tema){
    setData({item, tema})
  
  }

  const logged = localStorage.getItem("jmeno") == null ||  localStorage.getItem("jmeno") == "" ?
    <div id="main-login-div" className="flex justify-center items-center w-full h-full absolute">
      <Login/>
    </div>
  : <Mainapp start={start}/> 
  return(
    <div>
      
      {data? <Lesson item={data.item} tema={data.tema}/>: logged }

    </div>
  )
}