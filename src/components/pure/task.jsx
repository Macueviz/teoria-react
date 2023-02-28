import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import '../../styles/task.scss'
import { LEVELS } from '../../models/levels.enum';

const TaskComponent = ({task, completed, remove}) => {

    useEffect(() => {
        console.log('Created task')
        return () => {
            console.log(`Task: ${task.name} is going to unmount`);
        };
    }, [task]);


    function taskLevelBadge(){
        switch (task.level) {
            case LEVELS.NORMAL:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'> {task.level} </span>
                    </h6>
                )
            case LEVELS.URGENT:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'> {task.level} </span>
                    </h6>
                )
            case LEVELS.BLOCKING:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'> {task.level} </span>
                    </h6>
                )
        
            default:
                break;
        }
    }

    function taskIconCompleted() {
        if(task.completed) {
            return( <i onClick={() => completed(task)} className='bi-toggle-on task-action' style={{color: 'green', fontWeight: 'bold'}}> </i> )
        }else {
            return( <i onClick={() => completed(task)} className='bi-toggle-off task-action' style={{color: 'grey'}}> </i> )
        }
    }

    const taskCompleted = {
        color: 'grey',
        textDecoration: 'line-through'
    }

    const taskPending = {
        color: 'tomato',
        fontWeight: 'bold'
    }
    return (

        <tr className='fw-normal' style={task.completed ? taskCompleted : taskPending}>
            <th>
                <span className='ms-2'> {task.name} </span>
            </th>
            <td className='align-midddle'>
                <span> {task.description} </span>
            </td>
            <td className='align-midddle'>
                {/*Execution of function to return badge element*/}
                {taskLevelBadge()}
            </td>
            <td className='align-midddle'>
                    {/*Execution of function to return icon depending
                    on completion*/}
                {taskIconCompleted()}

                    {/*ACCION COMPLETADA MEDIANTE OPERAROR TERNARIO*/}
                {/* { task.completed ?
                (<i className='bi-toggle-on' style={{color: 'green', fontWeight: 'bold'}}> </i>) 
                : (<i className='bi-toggle-off' style={{color: 'grey'}}> </i>) } */}

                <i onClick={() => remove(task)} className='bi-trash task-action' style={{color: 'tomato', fontSize: '20px'}}> </i>    
            </td>
        </tr>

    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    completed: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;
