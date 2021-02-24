import React from 'react'
const tasks = [
  {
  id:1,
  text: 'Doctors Appointment',
  day: "Feb 5th at 2:30pm",
  remainder: true,
  },
  {
    id:2,
    text: 'Playing golf',
    day: "Feb 21 at 10:00",
    remainder: true,
  },
  {
    id:3,
    text: 'Eating Ugali',
    day: "March 5th at 2:30pm",
    remainder: true,
  },
  {
    id:4,
    text: 'Food shopping',
    day: "Feb 16th at 21:30pm",
    remainder: true,
 },

]
function Task() {
  return (
    <>
      { 
      tasks.map( (task) => ( <h1>{task.text}</h1> )
      )
      }
    </>
  )
}

export default Task
