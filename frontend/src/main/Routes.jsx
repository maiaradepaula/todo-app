import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'
import About from '../about/About'
import Todo from '../todo/Todo'

export default props => (
    <Router history= {hashHistory}>
        <Route path='/todos' component={Todo} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/todos'/>
    </Router>
)