import React from 'react';

import TodoListItem from './TodoListItem';
import './TodoList.css';

const TodoList = ({ todos }) => {

    const elements = todos.map((item) => {
    return (        
        <li key = {item.id} className='list-group-item'>
            <TodoListItem 
            label = {item.label}
            important = {item.important}/>
        </li>
        ); 
    }); 

    
    return (
       <ul className="list-group TodoList">
           {elements};
        </ul> 
        
    );
};



export default TodoList;