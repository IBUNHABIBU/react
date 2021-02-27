import React from 'react'

function AddTask() {
  return (
    <form className='add-form'>
      <div className="form-control">
        <label htmlFor="">Task </label>
        <input type="text" name="" id="" placeholder= 'Add Task'/>
      </div>
      
      <div className="form-control">
        <label htmlFor="">Day and time </label>
        <input type="text" name="" id="" placeholder= 'Add Day and Time'/>
      </div>

      <div className="form-control">
        <label htmlFor="">Set reminder </label>
        <input type="checkbox" name="" id="" />
      </div>
      <input type="submit" value="Save Task"/>
    </form>
  )
}

export default AddTask
