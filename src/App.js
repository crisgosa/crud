
import React, {useState} from 'react'
import { isEmpty, size } from 'lodash'
import shortid, { isValid } from 'shortid'


function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [id, setId] = useState("")
  const [error, setError] = useState(null)

  const validForm = () =>{
    let isValid = true
    setError(null)
    if(isEmpty(task)){
      setError("You need add a task")
      isValid = false
    }    
    return isValid
  }

  /*Valida que el text tenga valores, no esté vacío*/
  const addTask = (e) => {
    e.preventDefault()
    if(!validForm()){
      return
    }
    const newTask = {
      id: shortid.generate(),
      name: task
    }
    setTasks([...tasks, newTask])
    setTask("")
  }

  /*Método para guardar una tarea editada */
  const saveTask = (e) => {
    e.preventDefault()
    if(!validForm()){
      return
    }
    const editedTasks = tasks.map(item => item.id === id ? {id, name: task} : item)
    setTasks(editedTasks)
    setEditMode(false)
    setTask("")
    setId("")
  }

  /*Método para eliminar tareas, guarda todas las tareas que no tengan el id que se desea eliminar y llena nuevamente el vector de tareas*/
  const deleteTask = (id) => {
    const filteredTasks = tasks.filter(task => task.id !== id)
    setTasks(filteredTasks)
  }

  /*Activar el formulario editar */
  const editTask = (theTask) => {
    setTask(theTask.name)
    setEditMode(true)
    setId(theTask.id)
  }

  return (
    <div className= "container mt-5">
      <h1>Tasks</h1>
      <hr/>
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Tasks List</h4>
            {              
              size(tasks) == 0 ?(
                <li className="list-group-item">You haven't pending tasks</li>
              ) : (
                <ul className="list-group">
                  {
                    tasks.map((task) => (
                      <li className="list-group-item" key={task.id}>
                          <span className="lead">{task.name}</span>
                          <button 
                          className="btn btn-danger btn-sm float-right mx-2"
                          onClick = {() => deleteTask(task.id)}
                          >Delete                  
                          </button>

                          <button 
                          className="btn btn-warning btn-sm float-right"
                          onClick = {() => editTask(task)}
                          >Edit
                          
                          </button>
                      </li>
                    ))
                  }
                </ul>                
              )
            }
        </div>
        <div className="col-4">
          <h4 className="text-center">{editMode ? "Edit Task" : "Add Task"}</h4>
          <form onSubmit={editMode ? saveTask : addTask}>
            {error && <span className="text-danger">{error}</span>}
            <input
              type="text"
              className="form-control mb2"
              placeholder="Enter Task..."
              onChange={(text)=>setTask(text.target.value)} /*Lleva al setTask el valor del text*/
              value={task}/*Lee el valor en task y lo pone en el value del botón*/
            />
            <button className= {editMode ? "btn btn-warning btn-block" : "btn btn-dark btn-block"} type="submit">
            {editMode? "Save" : "Add"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App;
