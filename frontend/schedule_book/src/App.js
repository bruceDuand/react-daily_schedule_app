import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/auth'; 

import 'antd/dist/antd.css';

import LoginView from './containers/LoginView'
import SBookListView from './containers/SBookListView'
import SBookDetailView from './containers/SBookDetailView'
import SBookLayout from './containers/SBookLayout'

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <BrowserRouter>
        <SBookLayout {...this.props}>
          <Switch>
            <Route path='/login/' component={LoginView} exact />
            <Route path='/' component={SBookListView} exact />
            <Route path='/:scheduleId/' component={SBookDetailView} exact /> 
          </Switch>
        </SBookLayout>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState() )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
