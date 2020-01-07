import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import { runInThisContext } from 'vm';

class Layout extends Component {

  state = {
    sideDrawer: false
  }

  sideDrawerCloseHandler = () => {
    this.setState({sideDrawer: false})
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {return{ sideDrawer: !prevState.sideDrawer}})
  }



  render() {
    return (
      <Aux>
        <Toolbar 
          drawerToggleClicked={this.sideDrawerToggleHandler}
          isAuthenticated={this.props.isAuthenticated}
        ></Toolbar>
        <SideDrawer 
          open={this.state.sideDrawer} 
          closed={this.sideDrawerCloseHandler}
          isAuthenticated={this.props.isAuthenticated}
        ></SideDrawer>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }

}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

export default connect(mapStateToProps)(Layout);