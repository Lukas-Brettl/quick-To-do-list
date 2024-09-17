import Teorie from "./LessonTeorie.jsx"

export default function Lesson(props){
    const tema_objekt = JSON.parse(props.tema)
    const item = JSON.parse(props.item)

    return(
        <> 
           
           
            <Teorie jsonFileName={tema_objekt.conditions[item][0]}/>
        </>
       
    )
}