import Teorie from "./LeTeorie.jsx"
import ShowExample from "./LeShowExample.jsx";
import Example from "./LeEample.jsx";
import Chytak from "./LeChytak.jsx";
import Explain from "./Explain.jsx";
import { useEffect, useState } from "react";
export default function Lesson(props){
    const tema_objekt = JSON.parse(props.tema)
    const item = JSON.parse(props.item)
    const [data, setData] = useState(null)
    const [pagesIndex, setPagesIndex] = useState(1)
    const [indexExplain, setIndexExplain] = useState(0)
   

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
    

      function next(index, indexExplain){
        index> -2 && setPagesIndex(index)
        indexExplain && setIndexExplain(indexExplain)
      }
      const pages = [<Explain data={data} indexExplain={indexExplain} next={next} />, <Teorie next={next} data={data}/>, <ShowExample next={next} data={data}/>, <Example next={next} data={data}/>, <Chytak next={next} data={data}/>]
      console.log("lesson")
    return(

        <> 
            {pages[pagesIndex]}
        </>
       
    )
}