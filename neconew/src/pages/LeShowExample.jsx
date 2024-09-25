
export default function ShowExample({ data, next }) {

  function write() {
    const entries = Object.entries(data.obsah["Příklad k ukázce"]);
    let result = []
    let i = 0
    for (let [key, value] of entries) {

        switch(value[0]){
        case "zadani":
            result.push(<h3 key={i}>{value[1]}</h3>)
            break
        case "vzorec":
          result.push(<div key={i}>
            <h2>{key}</h2>
            <h2>{value[1]}</h2>
        </div>)
            break
        case "cap3":
            result.push(<div key={i}>
                <h2>{key}</h2>
                <h2>{value[1]}</h2>
            </div>)
            
            break
    
        }
        i++
      
    }
    return result 
    
  }
  
  return (
    <div className="p-12">
      <h1 className="text-2xl mb-3">{data["téma"]}</h1>

      {write()}
      <button onClick={()=>{next(2)}}>Splněno</button>
      <button onClick={()=>{next(2)}}>Další</button>
    </div>
  );
}
