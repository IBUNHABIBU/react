import React from 'react'
import { useState } from 'react';
function AddTask({ onAdd }) {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState('false');

  const onSubmit = (e) => {
    e.preventDefault();
    if(!text){
      alert('Please add task')
      return;
    }
    onAdd({text, day, reminder})
    setText();
    setDay();
    setReminder(false)
  }
  return (
    <form className='add-form' onSubmit = { onSubmit }>
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
        checked = { reminder }
        onChange = { (e) => setReminder(e.currentTarget.checked) }/>
      </div>
      <input className = "btn btn-block" type="submit" value="Save Task"/>
    </form>
  )
}

export default AddTask
