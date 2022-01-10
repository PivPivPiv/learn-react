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
        searchValue: '',
    }; 
    
    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++,
            display: true,
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

    toggleProperty = (arr, id, propName) => {
        
            const idx = arr.findIndex( (el) => el.id === id);

            const oldItem = arr[idx];
            const newItem = {...oldItem, 
                    [propName]: !oldItem[propName]};

            return  [
                    ...arr.slice(0, idx),
                    newItem,
                    ...arr.slice(idx + 1)
                ];
            
           
            
    };

    onToggleImportant  = (id) => {
        this.setState( ({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    };

    onToggleDone = (id) => {
        this.setState( ({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
    };

    getSearchValue = (e) => {
        this.setState( ({searchValue})=> {
            return {
                searchValue: e.target.value
            
            };
            
        });
        console.log(this.state.searchValue);

    };
    
    searchFilter = () => {
        // 1. получить значение поля Search
        // 2. взять label конкретного элемента
        // 3. выяснить есть ли search в элементе setState (todoData{display}) = Search.includes(label)
        // 4. установить значение свойства display 
    };

    render() {
        const {todoData} = this.state;
        const doneCount = todoData.filter( (el) => el.done === true).length;
        const todoCount = todoData.length - doneCount; 
        return ( 
            <div className='app-main '> 
                <AppHeader toDo = {todoCount} done = {doneCount} /> 
                <div className='search-and-filter'>
                    <SearchPanel 
                    onSearchFieldChange={ this.getSearchValue }
                    />
                    <ItemStatusFilter />
                </div>
                <TodoList 
                    todos={this.state.todoData}
                    onDeleted={ this.deleteItem }
                    onToggleDone={ this.onToggleDone }
                    onToggleImportant={ this.onToggleImportant}
                /> 
                <AddButton 
                    onAddItem = { this.addItem }
                />
            </div> 
        );
    };
};    
