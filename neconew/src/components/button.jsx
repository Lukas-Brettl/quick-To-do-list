import "../componenstCss/button.css"
export default function Button(props){

    return(
        <button id="button-component" onClick={() => localStorage.getItem("jmeno") == null ||  localStorage.getItem("jmeno") == "" ? window.alert("Vyplňte kolonku se jménem"): window.location.reload()}>{props.text}</button>
    )
}