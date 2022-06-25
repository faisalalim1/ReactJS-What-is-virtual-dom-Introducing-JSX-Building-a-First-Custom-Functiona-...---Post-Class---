import react,{component,useState} from "react";


const Welcome = ({name})=>{
    let hey = 'Hey ! ${name}';
    let greetingMessage = 'Welcome to Newton School.';
    return(
        <div className="main">
            <h1>{hey}</h1>
            <h2>{greetingMessage}</h2>
        </div>
    )
}

export default Welcome
