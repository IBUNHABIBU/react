import React from 'react'
import './buttons.css'
const Button = ( { children, type, onButtonClick} )=> {
    return (
        <div  className= {`button  ${ children === "0" ? "zero" : null } ${ type || ""}` } onClick = { onButtonClick(children) }>
            { children }
        </div>
    )
}

export default Button


var insert = function(intervals, newInterval) {
    let targetIndex = 0
    let start = 0
    let end = intervals.length - 1
    while (start <= end) {
      const middle = Math.floor((start + end) / 2)
      if (intervals[middle][0] >= newInterval[0]) {
        end = middle - 1
      } else {
        start = middle + 1
      }
    }
  
    targetIndex = start
    intervals.splice(targetIndex, 0, newInterval)
    let i = targetIndex
    while (i < intervals.length) {
      if (i > 0 && isOverlap(intervals[i - 1], intervals[i])) {
        intervals.splice(i - 1, 2, mergeTwo(intervals[i - 1], intervals[i]))
      } else {
        i += 1
      }
    }
    return intervals
};
