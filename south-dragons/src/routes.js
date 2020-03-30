import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './components/pages/Login';
import DragonList from './components/pages/DragonList';
import DragonProfile from './components/pages/DragonProfile';
import NewDragon from './components/pages/NewDragon';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/list" exact component={DragonList} />
                <Route path="/profile/:id" exact component={DragonProfile} />
                <Route path="/register" exact component={NewDragon} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
