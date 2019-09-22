import React, { Component } from 'react';
import Header from './scenes/header';
import Footer from './scenes/footer';
import Audit from './components/audit/container';
import Home from './scenes/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Mani



export default class extends Component {
  render() {
    return (
      <Router>
        <div>

          <Header />
          <Switch>
            <Route exact path="/"  component={Home} />
            <Route  path="/audit"  component={Audit} />
          </Switch>
          <Footer />

        </div>
      </Router>
    )
  }
}


