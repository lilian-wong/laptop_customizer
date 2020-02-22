import React from 'react';

class CartSummary extends React.Component{
    render(){
        return(
          <section className="main__summary" key = {this.props.id}>
            <h2>Your cart</h2>
            {this.props.summary}
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {this.props.total}
              </div>
            </div>
          </section>            
        )
    }
}

export default CartSummary;
