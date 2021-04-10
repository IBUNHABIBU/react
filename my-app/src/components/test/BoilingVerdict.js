import React from 'react'

const BoilingVerdict = (props) => {
   if( props.celcious >= 100) {
       return <p>The water would boil</p>
   }
   return <p>The water will not boil</p>
}

export default BoilingVerdict
