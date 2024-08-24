import React, { useCallback } from 'react'
import { useState} from 'react'
import './App.css'
import Task from "./Task.jsx"
export default function App() {
  const [text, setText] = useState("")
  const [tasks, setTasks] = useState([])
  const [childButton, setChildButton] = useState(false)
  function addTask(){
    if(text){
      setTasks([...tasks, text])
      setText("")
    }

  }

  const handleButton = useCallback(() =>{
    console.log("lll")
    setChildButton(true)
    console.log(childButton)
  }, [childButton])

  const findIndex = (index) =>{
    console.log(index)
  }
  return (
    <>
    <nav className='p-4 pl-7'>
      <h1 className='text-4xl font-semibold text-white'>To-do List</h1>
    </nav>
    <section className='flex flex-col justify-center items-center mt-16'>
      <div className=' w-full h-12 flex justify-center items-center'>
        <span className=' flex rounded-lg w-2/5 h-12 justify-between items-center' id="span_input">
          <input className='w-4/5 text-white text-xl pl-4' id="input" value={text} onChange={(e) => setText(e.target.value)} placeholder='Write a task'></input>
          <button id="add_button" onClick={() => addTask()} className='flex items-center w-auto p-1 rounded-lg font-medium h-auto text-lg text-white  mr-1'>add task</button>
        </span>
        <img className='w-8 h-8 ml-1 cursor-pointer' onClick={()=> setText("")} src="../icons8-trash-48.png"></img>
      </div>
      <div id="tasks" className='mt-24'>
        <div id="list"> {/*the reason why I haven't used the ol list is because it doesn't work and I don't know why*/}
          {tasks.map((task, index) => <Task key={index} text={task} num={index + 1} count={tasks.length} onButtonClick={handleButton} findIndex={findIndex}/>)}
        </div>
      </div>
    </section>
    <footer>

    </footer>
    </>
  )
}