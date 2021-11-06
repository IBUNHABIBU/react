<<<<<<< HEAD

import React from 'react'

const Square = (props) => {
  return (
    <div>
      <button className="square" onClick ={()=>
          props.onClick()
       }>
        { props.value }
      </button>
    </div>
  )
}

export default Square
=======

import React from 'react'

const Square = (props) => {
  return (
    <div>
      <button className="square" onClick ={()=>
          props.onClick()
       }>
        { props.value }
      </button>
    </div>
  )
}

export default Square
>>>>>>> 9c553b61de21c417676afb8a054a76c222dbb73e
