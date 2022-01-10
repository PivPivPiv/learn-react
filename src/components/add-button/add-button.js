import React, {Component} from 'react';

import './add-button.css';

export default class AddButton extends Component {

    state = {
        label: ''
    };
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddItem(this.state.label)

        this.setState({
            label: ''
        });
    };

    render (){
        return (
            <form className='add-button-div '
                    onSubmit={this.onSubmit}
            >
                
                <input  type="text"
                        className='form-contol'
                        onChange={ this.onLabelChange }
                        placeholder="What needs to be done"
                        value={this.state.label}
                />
                 
                <button 
                    
                    className ='btn btn-outline-secondary btn-sm add-button'
                   
                > 
                    Add Item
                </button>
            </form>
        );
    };
};

