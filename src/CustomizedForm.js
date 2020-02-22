import React from 'react';
import CartSummary from './CartSummary';

class CustomizedForm extends React.Component{
    render(){
        return(
            <main>
            <form className="main__form">
              <h2>Customize your laptop</h2>
              {this.props.features}
            </form>
            <CartSummary 
              key = {this.props.id}
              summary = {this.props.summary}
              total = {this.props.total}
            />
          </main>
        )
    }
}

export default CustomizedForm;