import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'

import COSummary from '../../components/Order/COSummary/COSummary';
import ContactData from './ContactData/ContactData';

 class Checkout extends Component {



  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  

  render() {
    return (
      <div>
        <COSummary 
          ingredients={this.props.ings}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
          />
          <Route 
            path={this.props.match.path + '/contact-data'}
            component={ContactData}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients
  }
}

export default  connect(mapStateToProps)(Checkout);
