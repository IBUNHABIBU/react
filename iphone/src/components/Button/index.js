import React from 'react'
import './buttons.css'
const Button = ( { children, type } )=> {
    return (
        <div className= {`button  ${ children === "0" ? "zero" : null } ${ type || ""}` }>
            { children }
        </div>
    )
}

export default Button
