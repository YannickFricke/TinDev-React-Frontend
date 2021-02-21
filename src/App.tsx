import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';

export function App() {
    const userContext = useContext(UserContext);
    const isUserLoggedIn = userContext?.isLoggedIn() ?? false;

    return (
        <Switch>
            {!isUserLoggedIn && (
                <React.Fragment>
                    <Route exact path='/'>
                        <Redirect to='/login' />
                    </Route>
                    <Route exact path='/login'>
                        <Login />
                    </Route>
                    <Route exact path='/register'>
                        <Register />
                    </Route>
                </React.Fragment>
            )}
            {isUserLoggedIn && (
                <React.Fragment>
                    <Route exact path='/'>
                        <Redirect to='/app' />
                    </Route>
                    <Route exact path='/app'>
                        Welcome to TinDev!
                    </Route>
                </React.Fragment>
            )}
        </Switch>
    );
}
