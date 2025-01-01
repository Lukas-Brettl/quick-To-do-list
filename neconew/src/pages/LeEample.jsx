import { useState, useEffect } from "react";
import MathJax from "react-mathjax"
import "../pagesCss/Example.css"

export default function Example({ data, next }) {

  const [modal, setModal] = useState()
  let result = []
  
  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub]);
    }
  }, []);

  function equal(item){
    try{
      if(item == result[0]){
        console.log("spravne")
        next(4)
      }
      else{
        console.log("spatne")
        setModal(
        <div  className="fixed m-0 w-full h-full bg-slate-400">
            <h2>Správná odpověď:</h2>
            <div>
              {result[1]}
              {result[0]}
            </div>
            <div className="flex gap-9">
              <button>Vysvětlení</button>
              <button onClick={() => next(4)}>Další</button>
            </div>
        </div>)
      }
    }
    catch{
      console.log("meh")
      
    }
    
    

  }

  function write() {
    const entries = Object.entries(data.obsah["Příklad k vyřešení"]);
    let result_ = []
    let i = 0
    let div1 = []
    let div2 = []
    
    for (let [key, value] of entries) {

        switch(value[0]){
        case "zadani":
            result_.push(<h3 key={i}>{value[1]}</h3>)
            break
        case "reseni":
          result.push(value[1])
          result.push(value[2])
          break
        case "odpoved":

          div1.length <2 ? div1.push(value[1]): div2.push(value[1])
          
          if(div1.length == 2 && div2.length == 2){
            result_.push(
              <MathJax.Provider key={i}>
              
                <div>{div1.map((item,index) => <button onClick={() => equal(item)} key={index}><MathJax.Node inline formula={item} /></button>)}</div>
                <div>{div2.map((item,index) => <button onClick={() => equal(item)} key={index}><MathJax.Node inline formula={item} /></button>)}</div>
              
              </MathJax.Provider>)
            
          }
          break  
        case "napoveda":
            result_.push(<div key={i}>
                <button>?</button>
                <div>{value[1]}</div>
            </div>)
            
            break
    
        }
        i++
      
    }
    return result_ 
    
  }
  console.log("example")
  return (
    <div className=" p-12">
      {modal&&modal}
      <h1 className="text-2xl mb-3">{data["téma"]}</h1>

      {write()}

      
    </div>
  );
  }
  