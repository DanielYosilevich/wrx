import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './pages/AboutPage'
import Home from './pages/HomePage'

const routes = (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
    </Switch>
);

export default routes;