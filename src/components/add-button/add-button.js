import React, {Component} from 'react';

import './add-button.css';

export default class AddButton extends Component {

    render (){
        return (
            <div className='add-button-div'>
                <button 
                    type ='button'
                    className ='btn btn-outline-secondary btn-sm add-button'
                    onClick = {() => this.props.onAddItem('Hello world')}
                > 
                    Add Item
                </button>
            </div>
        );
    };
};

