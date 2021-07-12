import React, { useState } from 'react'

const Counter = () => {
    
  const [counter, setcounter] = useState(0);
    return (
        <div>
             <h1>This is counter app</h1>
            <div id="counter-value">{counter}</div>
            <button id="increment-btn" onClick = { () => { setcounter(counter + 1 ) }}>increment</button>
            <button id="decrement-btn" onClick = { () => { setcounter(counter - 1 ) }}>decrement</button>
        </div>
    )
}

export default Counter
