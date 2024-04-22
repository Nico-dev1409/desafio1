import { useState } from 'react'
import "./Componente.css"

const Componente = (props) =>{
    const [tasks, setTasks] = useState([]); //array de tareas const tasks = [];
    const [newTask, setNewTask] = useState(""); //newTask = useState() = input.value
        //[nombre variable, funcion para cambiar valor de variable] useState("valor de la variable newTask") 
    const [messageError, setMessage] = useState(false);
        const handleInputChange = (e) =>{
        setNewTask(e.target.value);
    };
    const handleAddTask = () =>{
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask("");
            setMessage(false);
        }else{
            setMessage(true);
        }; 
    };
    const handleDeleteTask = (i) =>{
        const updateTasks = [...tasks]; //accedo a los elementos de tasks y los almaceno en updateTasks
        updateTasks.splice(i, 1); //elimino el indice que paso en el parámetro
        setTasks(updateTasks); //actualizo tasks 
    };
    return(
        <>
        <main className='container-title'>
        <h1>{props.title}</h1>
        <span>{props.message}</span>
        </main>
        <section className='container-principal'>
            <input type="text" id="taskInput" placeholder='Escriba la tarea por hacer...' value={newTask} onChange={handleInputChange}/>
            <button onClick={handleAddTask}>
            <svg className='submit' fill="currentColor" viewBox="0 0 16 16">
  <path d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1z"/>
  <path d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708z"/>
</svg>
            </button>
        </section>
        <div className='error-container'>
        <strong>{messageError ? "La tarea no puede quedar vacía" : ""}</strong>
        </div>
        {/*contenedor de tareas*/}
        <section className='container-task'>
            <p>{props.message2}</p>
            <hr/>
            <ul className='list-tasks'>
                {tasks.map((task, i) =>(
                <li key={i}>
                    {task}
                    <button onClick={()=> {handleDeleteTask(i)}}> 
                    <svg fill="currentColor" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                    </svg>
                    </button>
                </li>
                ))}
            </ul>
        </section>
        </>
    );
    
}

export default Componente;