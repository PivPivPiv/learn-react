import React, {Component} from 'react';

import './add-button.css';

export default class AddButton extends Component {

    render (){
        return (
            <form className='add-button-div '>
                <input  type="text"
                        className='form-contol'
                        onChange={this.onLabelChange}
                        placeholder="What needs to be done"
                />
                 
                <button 
                    type ='button'
                    className ='btn btn-outline-secondary btn-sm add-button'
                    onClick = {() => this.props.onAddItem('Hello world')}
                > 
                    Add Item
                </button>
            </form>
        );
    };
};

