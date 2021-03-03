import Header from './components/Header'
import Tasks from './components/Tasks'
import  AddTask  from "./components/AddTask";
import { useState, useEffect } from 'react';
function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([])

 useEffect(() => {
   const getTasks = async () => {
     const taskFromServer = await fetchTasks();
     setTasks(taskFromServer);
   }
    getTasks();
  }, [] )

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    // console.log(data);
    // data.forEach(element => {
    //   console.log(element.id)
    //   console.log(element.text)
    // });
    return data
  }

  const fetchTask = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    // console.log(data);
    // data.forEach(element => {
    //   console.log(element.id)
    //   console.log(element.text)
    // });
    return data
  }

  const deleteTask = async id => {
    await fetch(`http://localhost:5000/tasks/${id}`
    ,{
      method: 'DELETE'
    });
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method:'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updateTask)
    })
    const data = await res.json();
    setTasks(tasks.map(task => task.id === id ? { ...task, reminder: !data.reminder} : task))
  }
  const addTask = async (task) => {
  //  const id = Math.floor(Math.random()*1000) + 1;
  //  const newTask = { id, ...task};
  //  setTasks([...tasks, newTask])
    const res = await fetch('http://localhost:5000/tasks',{
      method: 'POST',
      headers: {
        "Content-type": 'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await res.json();
    setTasks([...tasks, data])
  }
  return (
    <div className="container">
      <Header onAdd = { () => setShowAddTask(!showAddTask)} showAdd = { showAddTask } />
      { showAddTask && <AddTask onAdd = { addTask } /> }
      { tasks.length > 0 ? (
      <Tasks tasks = { tasks } onDelete = { deleteTask } onToggle = { toggleReminder} />
      ):("No task to show"
      )}
    </div>
  );
}

export default App;
