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
        term: '',
        filter: 'all',
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

    search = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) => { 
             return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;

        });

    };

    onSearchFieldChange = (term) => {
        this.setState( {term}); 
    };

    onFilterChange = (filter) => {
        this.setState( {filter}); 
    };
    
    filter(items, filter) {
        switch(filter){
            case'all':
                return items;
            case 'active':
                return items.filter( (item) => !item.done);
            case 'done':
                return items.filter( (item) => item.done);
            default:
                return items;
        }
    }

    render() {
        const { todoData, term, filter } = this.state;
        
        const visibleItems = this.filter(
            this.search(todoData, term), filter);
        

        const doneCount = todoData.filter( (el) => el.done === true).length;
        const todoCount = todoData.length - doneCount; 

        return ( 
            <div className='app-main '> 
                <AppHeader toDo = {todoCount} done = {doneCount} /> 
                <div className='search-and-filter'>
                    <SearchPanel 
                   onSearchChange={this.onSearchFieldChange}
                    />
                    <ItemStatusFilter 
                    filter={filter}
                    onFilterChange={this.onFilterChange}
                    />
                </div>
                <TodoList 
                    todos={visibleItems}
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
