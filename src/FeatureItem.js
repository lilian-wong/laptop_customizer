import React from 'react';
import {USCurrencyFormat} from './USCurrencyFormat';

class FeatureItem extends React.Component{
    render(){
        return(
            <div key={this.props.id} className="feature__item">
                <input
                type="radio"
                id={this.props.id}
                className="feature__option"
                name={this.props.name}
                checked={this.props.item.name === this.props.selectedName}
                onChange={this.props.onChange}
                />
                <label htmlFor={this.props.id} className="feature__label">
                {this.props.item.name} ({USCurrencyFormat.format(this.props.item.cost)})
            </label>
          </div>
        
        )
    }
}

export default FeatureItem;
