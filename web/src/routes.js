import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Aboutme from './pages/Aboutme';

export default function Router() {
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/home" exact component={Home}/>
            <Route path="/aboutme" component={Aboutme}/>
        </Switch>
        </BrowserRouter>
    );
}