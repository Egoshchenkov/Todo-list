import React, { useContext } from 'react';
import './TodoItem.css'
import Context from '../context';

export default function TodoItem(props) {
    const classes =[];
    const {removeTodo} = useContext(Context);

    if (props.todo.completed) {
        classes.push('done')
    }
    return (
        <li>
            <span className={classes.join(' ')}>
                <input type='checkbox' checked={props.todo.completed} onChange={() => props.onChange(props.todo.id)}/>
                <strong>
                {props.index + 1}
                </strong>
                &nbsp;
                {props.todo.tittle}
            </span>
            <button onClick={() => removeTodo(props.todo.id)}>&times;</button>
        </li>)
}