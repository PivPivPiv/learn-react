import React from 'react';
import './TodoListItem';
const TodoListItem = ({label, important = false}) => {
   
   const style = {
       color : important ? 'tomato' : 'black'
   };

    return (
        <span className='TodoListItem' style = {style}> { label } </span>
    );
};

export default TodoListItem;