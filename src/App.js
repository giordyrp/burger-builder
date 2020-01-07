import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import asynComponent from './hoc/asynComponent/asynComponent';

import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';

const asynCheckout = asynComponent (() => {
  return import('./containers/Checkout/Checkout');
});

const asynOrders = asynComponent (() => {
  return import('./containers/Orders/Orders');
});

const asynAuth = asynComponent (() => {
  return import('./containers/Auth/Auth');
});
class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignin();
  }

  render(){
    let routes = (
      <Switch>
        <Route path='/auth' component={asynAuth}/>
        <Route path='/' exact component={BurgerBuilder}/>
        <Redirect to=''/>
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path='/checkout' component={asynCheckout}/>
          <Route path='/orders' component={asynOrders}/>
          <Route path='/logout' component={Logout}/>
          <Route path='/' exact component={BurgerBuilder}/>
          <Redirect to=''/>
        </Switch>
      );
    }
    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignin: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
