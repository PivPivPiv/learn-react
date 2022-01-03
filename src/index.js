import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';

const App = () => {

const todoData = [
{ label : "Build React App", important : false, id: 1 },
{ label : "Drink Coffe", important : true, id: 2 },
{ label : "Take a lunch", important : false, id: 3 },
];

    return ( 
        <div> 
            <AppHeader/> 
            <SearchPanel/>
            <TodoList todos = {todoData}/> 
        </div> 
        );
};    
    

ReactDOM.render(<App/>, document.getElementById('root'));