import React, {useEffect, useState} from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task';


const TaskListComponent = () => {
    
    const defaultTask = new Task('Example', 'Default Description', false, LEVELS.NORMAL)

    const [tasks, setTasks] = useState({defaultTask});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('Task State has been modified')
        setLoading(false);
        return () => {
            console.log('TaskList is going to unmount...')
        };
    }, [tasks]);
    
    const changeCompleted = (id) => {
        console.log('Cambiar estado de una tarea');
    }
    
    return (
        <div>
            <div>
                <h1 >
                Tu tarea:
                </h1>
            </div>
            <TaskComponent task = { defaultTask }></TaskComponent>
        </div>
    );
};



export default TaskListComponent;
