import React, { useState } from 'react'

const HookCounter = () => {
 const init = 0
 const [count, setCount] = useState(init);
 return (
  <div>
   <h1>Counter with prev state</h1>
   <p>count : {count}</p>
   <button onClick={() => setCount(count+1)}>increment</button>
   <button onClick={() => setCount(init) }>Reset</button>
  </div>
 )
}

export default HookCounter
