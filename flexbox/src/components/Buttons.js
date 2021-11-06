<<<<<<< HEAD
import React from 'react';
import './Buttons.css';

const isOperator = val => {
    return !isNaN(val) || val ==='.' || val === '='
}
const Buttons = props => {
    return (
        <div className = { `button-wrapper ${ isOperator(props.children) ? null : "operator" }`} 
         onClick = { () => props.handleClick(props.children) }>
            { props.children }
        </div>
    )
}

export default Buttons
=======
import React from 'react';
import './Buttons.css';

const isOperator = val => {
    return !isNaN(val) || val ==='.' || val === '='
}
const Buttons = props => {
    return (
        <div className = { `button-wrapper ${ isOperator(props.children) ? null : "operator" }`} 
         onClick = { () => props.handleClick(props.children) }>
            { props.children }
        </div>
    )
}

export default Buttons
>>>>>>> 9c553b61de21c417676afb8a054a76c222dbb73e
