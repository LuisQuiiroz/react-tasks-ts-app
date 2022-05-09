import React, { useState } from 'react';
import Task from './components/Task';

type FormElement = React.FormEvent<HTMLFormElement>;
type Mouse = React.MouseEventHandler<HTMLButtonElement>;

interface InterfaceTask {
  name: string;
  done: boolean;
}

function App(): JSX.Element {

  const [newTask, setNewTask] = useState<string>('');
  const [tasks, setTasks] = useState<InterfaceTask[]>([]);

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    if (newTask === '') return
    addTask(newTask);
    setNewTask('');
  }

  // Añade la tarea a la lsita de tareas
  const addTask = (name: string) => {
    const newTasks: InterfaceTask[] = [...tasks, { name, done: false }]
    setTasks(newTasks);
  }

  // cambia la tarea true/false
  const ToggleDoneTask = (i: number) => {
    const newTasks: InterfaceTask[] = [...tasks];
    newTasks[i].done = !newTasks[i].done;
    setTasks(newTasks);
  }

  // Elimina la tarea
  const RemoveTask = (i: number) => {
    const newTasks: InterfaceTask[] = [...tasks];
    newTasks.splice(i, 1);
    setTasks(newTasks);
  }

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card body">
              <form onSubmit={handleSubmit}>
                <div className="form-group p-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="New Task"
                    onChange={e => setNewTask(e.target.value)}
                    value={newTask}
                    autoFocus
                  />
                  <button className="btn btn-success col-12 mt-2">Save</button>
                </div>
              </form>
            </div>
          </div>
          <Task
            tasks={tasks}
            ToggleDoneTask={ToggleDoneTask}
            RemoveTask={RemoveTask}
          ></Task>
          {/* {
          tasks.map( (task: InterfaceTask, i: number) => {
            return (
              <div className='card card-body text-white bg-primary mt-2' key={i}>
                <a onClick={() => ToggleDoneTask(i)} > 
                  <h4
                    style={{ textDecoration : task.done ? 'line-through' : ''}}
                    className=' '> 
                    { task.name } 
                  </h4>
                </a>
                <div>
                <button 
                  type="button" 
                  className='btn btn-success'
                  onClick={() => ToggleDoneTask(i)}>
                    { task.done ? 'Desmarcar' : 'Completado'}</button>
                <button 
                  type="button" 
                  className='btn btn-danger '
                  onClick={() => RemoveTask(i)}>Borrar</button>
                </div>
              </div>
            )
          })
        } */}
        </div>
      </div>
    </div>
  );
}

export default App;
