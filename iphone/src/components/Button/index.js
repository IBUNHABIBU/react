import React from 'react'
import './buttons.css'
const Button = ( { children, type, onButtonClick} )=> {
    return (
        <div  className= {`button  ${ children === "0" ? "zero" : null } ${ type || ""}` } onClick = { onButtonClick(children) }>
            { children }
        </div>
    )
}

export default Button
