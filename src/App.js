
import React, {useState} from 'react'
import { isEmpty } from 'lodash'
import shortid from 'shortid'


function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  /*Valida que el text tenga valores, no esté vacío*/
  const addTask = (e) => {
    e.preventDefault()
    if(isEmpty(task)){
      console.log("Task Empty")
      return
    }
    
    const newTask = {
      id: shortid.generate(),
      name: task
    }
    setTasks([...tasks, newTask])
    setTask("")
  }

  return (
    <div className= "container mt-5">
      <h1>Tasks</h1>
      <hr/>
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Task List</h4>
          <ul className="list-group">
          {
            tasks.map((task) => (
              <li className="list-group-item" key={task.id}>
                  <span className="lead">{task.name}</span>
                  <button className="btn btn-danger btn-sm float-right mx-2">Delete</button>
                  <button className="btn btn-warning btn-sm float-right">Edit</button>
              </li>
            ))    

          }

          </ul>          
        </div>
        <div className="col-4">
          <h4 className="text-center">Form</h4>
          <form onSubmit={addTask}>
            <input
              type="text"
              className="form-control mb2"
              placeholder="Enter Task..."
              onChange={(text)=>setTask(text.target.value)} /*Lleva al setTask el valor del text*/
              value={task}/*Lee el valor en task y lo pone en el value del botón*/
            />
            <button className="btn btn-dark btn-block" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App;
