<<<<<<< HEAD
import React from 'react';
import propTypes from 'prop-types';
const Button = ({color, text, onClick}) => {
 
  return (
   <button 
   onClick={onClick}
   style={{backgroundColor: color}} 
   className="btn">{text}</button>
  )
}

Button.defaultProps = {
  color: 'gray'
}

Button.propTypes = {
  color: propTypes.string,
  text: propTypes.string,
  onClick: propTypes.func
}
export default Button
=======
import React from 'react';
import propTypes from 'prop-types';
const Button = ({color, text, onClick}) => {
 
  return (
   <button 
   onClick={onClick}
   style={{backgroundColor: color}} 
   className="btn">{text}</button>
  )
}

Button.defaultProps = {
  color: 'gray'
}

Button.propTypes = {
  color: propTypes.string,
  text: propTypes.string,
  onClick: propTypes.func
}
export default Button
>>>>>>> 9c553b61de21c417676afb8a054a76c222dbb73e
