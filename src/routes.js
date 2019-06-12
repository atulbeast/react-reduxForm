import React from "react";
import { PrivateRoute } from "./privateRoutes";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Route, Switch } from 'react-router-dom';
import loginPage from "./pages/login-page";
import registerPage from "./pages/register-page";
import homePage from "./pages/home-page";
import userPage from "./pages/user-page";
import articlePage from "./pages/article-page";
const MyRoutes = () =>  {
  return (
    <Switch>
        <Route exact path='/'  component={loginPage} />
        <Route exact path='/login'  component={loginPage} />
        <Route exact path='/register'  component={registerPage} />
        <PrivateRoute exact path='/home'  component={homePage} />
        <PrivateRoute exact path='/users'  component={userPage} />
        <PrivateRoute exact path='/articles'  component={articlePage} />
        <PrivateRoute exact path='/users/edit'  component={loginPage} />
        <PrivateRoute exact path='/articles/edit'  component={loginPage} />
        
    </Switch>);
}

export default MyRoutes;