<<<<<<< HEAD
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

=======
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

>>>>>>> 9c553b61de21c417676afb8a054a76c222dbb73e
