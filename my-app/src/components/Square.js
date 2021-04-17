// import React, { Component } from "react";

// class Square extends React.Component {
  
//   render() {
//     return (
//       <button className="square" onClick ={()=>
//           this.props.onClick()
//        }>
//         { this.props.value }
//       </button>
//     );
//   }
// }

//   export default Square;
import React from 'react'

const Square = () => {
  return (
    <div>
      <button className="square" onClick ={()=>
          this.props.onClick()
       }>
        { this.props.value }
      </button>
    </div>
  )
}

export default Square
