import React from 'react';
import './TodoList.css'
import TodoItem from './TodoItem'

export default function TodoList(props) {
    return (
        <ul>
            {props.todos.map((todo, index) => {
                return <TodoItem 
                todo={todo} 
                key={todo.id} 
                index={index} 
                onChange={props.onToggle}/>
            })}
        </ul>
    )
}