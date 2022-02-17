import './App.css';
import React, { Component } from 'react';
import Navbar from './Component/Navbar';
import News from './Component/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default class App extends Component {
  pagesize = 6;
  apiKey="002ffc7d9c3d40a39827afcaf2a2ed88"
  
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.Progress}

          />
          <Switch>
            <Route exact path="/"><News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pagesize} country='in' category='general' /></Route>
            <Route exact path="/business"><News setProgress={this.setProgress} apiKey={this.apiKey} key="bininess" pageSize={this.pagesize} country='in' category='business' /></Route>
            <Route exact path="/entertainment"><News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pagesize} country='in' category='entertainment' /></Route>
            <Route exact path="/general"><News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pagesize} country='in' category='general' /></Route>
            <Route exact path="/health"><News setProgress={this.setProgress} apiKey={this.apiKey}  key="health" pageSize={this.pagesize} country='in' category='health' /></Route>
            <Route exact path="/science"><News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pagesize} country='in' category='science' /></Route>
            <Route exact path="/sports"><News setProgress={this.setProgress} apiKey={this.apiKey}  key="sports" pageSize={this.pagesize} country='in' category='sports' /></Route>
            <Route exact path="/technology"><News setProgress={this.setProgress} apiKey={this.apiKey}  key="technology" pageSize={this.pagesize} country='in' category='technology' /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}



