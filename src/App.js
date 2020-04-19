import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Course from './Course'
import BinaryCourse from './Binary/BinaryCourse'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact={true} component={Home}/>
                    <Route path='/courses' exact={true} component={Course}/>
                    <Route path='/courses/binary' exact={true} component={BinaryCourse}/>
                </Switch>
            </Router>
        )
    }
}

export default App;