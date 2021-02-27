import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react';
function App() {
  const [tasks, setTasks] = useState([
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
  ])

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleReminder = (id) => {
    console.log(id);
  }
  return (
    <div className="container">
      <Header />
      { tasks.length > 0 ? (
      <Tasks tasks = { tasks } onDelete = { deleteTask } onToggle = { toggleReminder} />
      ):("No task to show"
      )}
    </div>
  );
}

export default App;
