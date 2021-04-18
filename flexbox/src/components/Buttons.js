import React from 'react';
import './Buttons.css';

const isOperator = val => {
    return !isNaN(val) || val ==='.' || val === '='
}
const Buttons = props => {
    return (
        <div>
            { props.children }
        </div>
    )
}

export default Buttons
