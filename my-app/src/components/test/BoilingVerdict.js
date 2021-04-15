import React from 'react'

const BoilingVerdict = (props) => {
  if(props.celcious >= 100) {
      return <p style="color: #3843;">The water would boil</p>
  }
    return <p style="color: red;">The water would not boil</p>
}

export default BoilingVerdict
