import { useEffect, useState } from "react";

export default function Teorie({ data, next }) {

  const [splitData, setSplitData] = useState(null)


  function write() {
    const entries = Object.entries(data.obsah.Teorie);
    let result = []
    let other = []
    let i = 0
    for (let [key, value] of entries) {
      

    

        if(key == "odkazy"){
         
          result.push(value[0].map((item, index) => <a className="m-4 cursor-pointer" onClick={()=>{
            setSplitData(other[index])}} key={index}>{item}</a>))
          
          const entries2 =Object.entries(data.obsah.Teorie["odkazy"][value.length -1])
          for (let [key2, value2] of entries2){
            
            const entries3 = Object.entries(value2)
            let pomArray = []
            pomArray.push(<h2 className="font-bold" key={i}>{key2}</h2>)
            i++
            for(let [key3, value3] of entries3){
              switch(value3[0]){
                case "popis":
                
                  pomArray.push(<h3 key={i}>{value3[1]}</h3>)
                  break
                case "cap2":
                  pomArray.push(<h2 key={i}>{key3}</h2>)
                  break
                case "cap3":
                  pomArray.push(<div key={i}>
                      <h2>{key3}</h2>
                      <h2>{value3[1]}</h2>
                  </div>)
                  
                  break
          
               }
               i++
            }
            
            pomArray.push(<button className="text-4xl bg-red-700" key={`button-${i}`} onClick={ () => setSplitData(null)}>Zpátky</button>)
            other.push(pomArray)
          } 

        }
        
        else{
          switch(value[0]){
            case "popis":
              result.push(<h3 key={i}>{value[1]}</h3>)
              break
            case "cap2":
              result.push(<h2 key={i}>{key}</h2>)
              break
            case "cap3":
              result.push(<div key={i}>
                  <h2>{key}</h2>
                  <h2>{value[1]}</h2>
              </div>)
              
              break
      
        }}
        i++
      
    }
    return result 
    
  }
  
  return (
    <div className="p-12">
      <h1 className="text-2xl mb-3">{data["téma"]}</h1>

      {splitData ? splitData:write()}
      <button onClick={()=>{next(1)}}>Splněno</button>
      <button onClick={()=>{next(1)}}>Další</button>
    </div>
  );
}
