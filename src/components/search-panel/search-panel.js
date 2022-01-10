import React, {Component} from 'react';
import './search-panel.css';

export default class SearchPanel extends Component{

    render(){
        const {onSearchFieldChange} = this.props;

        return ( <div>
                    <input  className='search-input' 
                            placeholder="Поиск" 
                            onChange={ onSearchFieldChange }
                    />
                 
                 </div>
                );

    };
   
};