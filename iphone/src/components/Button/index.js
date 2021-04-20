import React from 'react'
import './buttons.css'
const Button = ( { children, type, onButtonClick} )=> {
    return (
        <div onClick = { onButtonClick } className= {`button  ${ children === "0" ? "zero" : null } ${ type || ""}` }>
            { children }
        </div>
    )
}

export default Button
