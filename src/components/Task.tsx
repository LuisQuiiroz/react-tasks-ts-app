import React, { FunctionComponent } from 'react';
interface ITaskProps {
  tasks: {
    name: string;
    done: boolean;
  }[],
  ToggleDoneTask: (i: number) => void,
  RemoveTask: (i: number) => void
}
const Task: FunctionComponent<ITaskProps> = ({ tasks, ToggleDoneTask, RemoveTask }) => {
  return (
    <div>
      {
        tasks.map((task, i: number) => {
          return (
            <div className='card card-body text-white bg-primary mt-2' key={i}>
              <a onClick={() => ToggleDoneTask(i)} >
                <h4
                  style={{ textDecoration: task.done ? 'line-through' : '' }}
                  className=' '>
                  {task.name}
                </h4>
              </a>
              <div>
                <button
                  type="button"
                  className='btn btn-success'
                  onClick={() => ToggleDoneTask(i)}>
                  {task.done ? 'Desmarcar' : 'Completado'}</button>
                <button
                  type="button"
                  className='btn btn-danger '
                  onClick={() => RemoveTask(i)}>Borrar</button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
};

export default Task;
