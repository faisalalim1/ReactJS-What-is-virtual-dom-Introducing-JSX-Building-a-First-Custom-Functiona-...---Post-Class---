// write code for Welcome component here
import React, {Component, useState} from "react";
function Welcome(props){
//     const [data, setData] = useState(
//        {name: props.name}
//     );
    return(
      <React.Fragment>
        <h1>Hey !{props.name}</h1>  
        <h2>Welcome to Newton School.</h2>
       </React.Fragment>
    )
}


export default Welcome
