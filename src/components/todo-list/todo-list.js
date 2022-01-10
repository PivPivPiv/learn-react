import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleted, onToggleDone, onToggleImportant }) => {

    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;

    
    let classNames = 'list-group-item';
        if (itemProps.display === false) {
            classNames += ' d-none'
        };

    return (        
        <li key = {id} className={classNames}>
            <TodoListItem 
                { ...itemProps }
                onDeleted = { () => onDeleted (id) } 
                onToggleDone = { () => onToggleDone (id) }
                onToggleImportant = { () => onToggleImportant(id) } 
            />
        </li>
        ); 
    }); 

    
    return (
       <ul className="list-group todo-list">
           {elements}
        </ul> 
        
    );
};



export default TodoList;