<<<<<<< HEAD
import React from 'react'
import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggle }) => {

  return (
    <>
      { 
      tasks.map( (task, index) => ( 
      <Task key = { index } task= {task} onDelete = { onDelete } onToggle = {onToggle}/>
       )
      )
      }
    </>
  )
}

export default Tasks
=======
import React from 'react'
import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggle }) => {

  return (
    <>
      { 
      tasks.map( (task, index) => ( 
      <Task key = { index } task= {task} onDelete = { onDelete } onToggle = {onToggle}/>
       )
      )
      }
    </>
  )
}

export default Tasks
>>>>>>> 9c553b61de21c417676afb8a054a76c222dbb73e
