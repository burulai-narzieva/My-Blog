
import { routes } from "../routes";
import "./App.less"
import React, { useEffect, useState } from 'react';
import Home from './Pages/Home/index.jsx'
import Login from './Pages/Login/index.jsx'
import Register from './Pages/Register/index.jsx'
import Profile from './pages/Profile/index.jsx'
import UsersPage from './Pages/UsersPage/index.jsx'
import MainLayouts from './MainLayouts/index.jsx'
import { BrowserRouter, Switch } from "react-router-dom";
import { useSelector } from 'react-redux';


const App = () => {

    const state = useSelector((state) => state)

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(state))
    }, [state.currentUser])
    return <div className="App">
        {/* <div className="container"> */}
            <BrowserRouter >
                <Switch>
                    <MainLayouts path={routes.login} component={Login} />
                    <MainLayouts path={routes.register} component={Register} />
                    <MainLayouts path={routes.profile} component={Profile} />
                    <MainLayouts path={routes.users_page} component={UsersPage} />
                    <MainLayouts path={routes.home} component={Home} />
                </Switch>
            </BrowserRouter>
        </div>
    // </div>;
}
export default App;
