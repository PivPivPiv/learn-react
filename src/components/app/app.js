import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list/';
import AddButton from '../add-button';

import './app.css';

export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem("Build React App"),
            this.createTodoItem("Drink Coffe"),
            this.createTodoItem("Take a lunch"),
            ],
    }; 
    
    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++,
        };
    };

    deleteItem = (id) => {
        this.setState( ({ todoData }) => {
            const idx = todoData.findIndex( (el) => el.id === id);
            
            const arr1 = todoData.slice(0, idx);
            const arr2 = todoData.slice(idx + 1);

            const newArr = [...arr1, ...arr2]; 
            
            return {
                todoData: newArr  
            };
        });
    };

    addItem = (text) => {
        
        const newObj = this.createTodoItem(text);

        this.setState( ({ todoData }) => {
           const newArr = [...todoData, newObj];
            
           return{
               todoData: newArr
           };
        } );
    };

    toggleImportant  = (id) => {
        console.log('Toggle important', id);
    };

    toggleDone = (id) => {
        this.setState( ({ todoData })=> {
            const idx = todoData.findIndex( (el) => el.id === id);

            const oldItem = todoData[idx];
            const newItem = {...oldItem, done: !oldItem.done};

            const newArray = [
                ...todoData.slice(0, idx),
                newItem,
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            };
        });
    };

    render() {
        return ( 
            <div className='app-main'> 
                <AppHeader /> 
                <div className='search-and-filter'>
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList 
                    todos = {this.state.todoData}
                    onDeleted = { this.deleteItem }
                    onToggleDone = { this.toggleDone }
                    onToggleImportant = { this.toggleImportant}
                /> 
                <AddButton 
                    onAddItem = { this.addItem }
                />
            </div> 
        );
    };
};    
