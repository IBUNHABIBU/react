import React from 'react';
import propTypes from 'prop-types';
const Button = ({color, text}) => {
  return <button style={{backgroundColor: color}} className="btn">{text}</button>
}

Button.defaultProps = {
  color: 'gray'
}

Button.propTypes = {
  color: propTypes.string,
  text: propTypes.string
}
export default Button
