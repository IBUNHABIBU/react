import React from 'react'
import { useState } from 'react';
function AddTask() {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState('false');
  return (
    <form className='add-form'>
      <div className="form-control">
        <label htmlFor="">Task </label>
        <input type="text" name="" id="" placeholder= 'Add Task' value= {text} 
        onChange = { (e) => setText(e.target.value) }/>
      </div>
      
      <div className="form-control">
        <label htmlFor="">Day and time </label>
        <input type="text" name="" id="" placeholder= 'Add Day and Time' value= {day} 
        onChange = { (e) => setDay(e.target.value) }/>
      </div>

      <div className="form-control form-control-check">
        <label htmlFor="">Set reminder </label>
        <input type="checkbox" name="" id="" value= {reminder} 
        onChange = { (e) => setReminder(e.target.value) }/>
      </div>
      <input className = "btn btn-block" type="submit" value="Save Task"/>
    </form>
  )
}

export default AddTask
