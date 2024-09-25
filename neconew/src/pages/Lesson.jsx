import Teorie from "./LeTeorie.jsx"
import ShowExample from "./LeShowExample.jsx";
import Example from "./LeEample.jsx";
import { useEffect, useState } from "react";
export default function Lesson(props){
    const tema_objekt = JSON.parse(props.tema)
    const item = JSON.parse(props.item)
    const [data, setData] = useState(null)
    const [pagesIndex, setPagesIndex] = useState(0)
    const pages = [<Teorie next={next} data={data}/>, <ShowExample next={next} data={data}/>, <Example next={next} data={data}/>]

    useEffect(() => {
        import(`../math_e/${tema_objekt.conditions[item][0]}.json`)
          .then((module) => {
            setData(module.default);
          })
          .catch((err) => {
            console.error("Error loading JSON file:", err);
          });
      }, [tema_objekt.conditions[item][0]]);
    
      if (!data) return <div>Loading...</div>;

      function next(index){
        index && setPagesIndex(index)
        return pages[pagesIndex]
      }
    return(
        <> 
           
           
            {next()}
        </>
       
    )
}