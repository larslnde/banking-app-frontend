import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import CreateAccount from '../components/CreateAccount';
import Login from '../components/Login';
import NewApplication from '../components/NewApplication';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Login} exact={true}/>
                <Route path="/create" component={CreateAccount} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/new-application" component={NewApplication} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;