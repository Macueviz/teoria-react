import React, {useEffect, useState} from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class'
import TaskForm from '../pure/forms/taskForm';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {
    
    const defaultTask1 = new Task('Example', 'Default Description', true, LEVELS.NORMAL)
    const defaultTask2 = new Task('Example', 'Default Description', false, LEVELS.URGENT)
    const defaultTask3 = new Task('Example', 'Default Description', false, LEVELS.BLOCKING)
    

    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('Task State has been modified')
        setInterval(()=>  {
            setLoading(false)
    }, 2000)
        return () => {
            console.log('TaskList is going to unmount...')
        };
    }, [tasks]);
    
    function taskCompleted(task) {
        console.log('tarea completada', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];  //VAR temporal con todas las tareas que tenemos hasta ahora (factor de propag "...")
        tempTasks[index].completed = ! tempTasks[index].completed; //De todas las tareas, cogemos la que está en Index
        setTasks(tempTasks);
    }

    function removeTask(task) {
        console.log('Remove this task', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index, 1); //Elimina la tarea seleccionada
        setTasks(tempTasks);
    }

    function addTask(task) {
        console.log('Remove this task', task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }
    
    const Table = () => {
        return(
            <table>
                <thead>
                    <tr>
                        <th scope='col'> Title</th>
                        <th scope='col'> Description</th>
                        <th scope='col'> Priority</th>
                        <th scope='col'> Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => {
                        return (
                            <TaskComponent
                                key= {index}
                                task={task}
                                completed={taskCompleted}
                                remove={removeTask}>

                            </TaskComponent>
                        )
                    })}
                </tbody>
            </table>
        )
    }

    let tasksTable = tasks.length > 0 ? <Table></Table> : 'There are no tasks, please create one'
    
    const loadingStyle = {
        color: 'grey',
        fontWeigth: 'bold',
        fontSize: '25px'
    }

    
    return (
        <div className='col-12'>
            <div className='card'>
                {/*Card Header (title) */}
                <div className='card-header p-3'>
                    <h5>
                        Tu tarea:
                    </h5>
                </div>
                {/*Card Body (content) */}
                <div className='card-body' data-mdb-perfect-scrollbar='true' style= { {position: 'relative', height: '400px'} }>
                    {loading ? (<p style={{loadingStyle}}>Loading tasks...</p>) : tasksTable}
                </div>
            </div>
            <TaskForm add={addTask} length={tasks.length} ></TaskForm>
        <div>
        </div>
        </div>
    );
};

export default TaskListComponent;
