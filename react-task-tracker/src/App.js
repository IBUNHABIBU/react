<<<<<<< HEAD
import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import  AddTask  from "./components/AddTask";
import  About  from "./components/About";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
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
    <Router>
    <div className="container">
      <Header onAdd = { () => setShowAddTask(!showAddTask)} showAdd = { showAddTask } />
     
      <Route path = "/" exact render = {(props)=> (
          <>
 { showAddTask && <AddTask onAdd = { addTask } /> }
      { tasks.length > 0 ? (
      <Tasks tasks = { tasks } onDelete = { deleteTask } onToggle = { toggleReminder} />
      ):("No task to show"
      )}
          </>
      )}/>
      <Route path = '/about' component= { About }/>
    <Footer/>

    </div>
    </Router>
  );
  
}

export default App;
=======
import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import  AddTask  from "./components/AddTask";
import  About  from "./components/About";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
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
    <Router>
    <div className="container">
      <Header onAdd = { () => setShowAddTask(!showAddTask)} showAdd = { showAddTask } />
     
      <Route path = "/" exact render = {(props)=> (
          <>
 { showAddTask && <AddTask onAdd = { addTask } /> }
      { tasks.length > 0 ? (
      <Tasks tasks = { tasks } onDelete = { deleteTask } onToggle = { toggleReminder} />
      ):("No task to show"
      )}
          </>
      )}/>
      <Route path = '/about' component= { About }/>
    <Footer/>

    </div>
    </Router>
  );
  
}

export default App;
>>>>>>> 9c553b61de21c417676afb8a054a76c222dbb73e
