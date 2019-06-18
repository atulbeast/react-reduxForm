import React from "react";
import { PrivateRoute } from "./privateRoutes";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Route, Switch } from 'react-router-dom';
import loginPage from "./pages/login-page";
import registerPage from "./pages/register-page";
import homePage from "./pages/home-page";
import userPage from "./pages/user-page";
import articlePage from "./pages/article-page";
import ArticleFormPage from "./pages/article-form-page";
import LifeCyclePage from "./pages/life-cycle";
const MyRoutes = () =>  {
  return (
    <Switch>
        <Route exact path='/'  component={loginPage} />
        <Route exact path='/login'  component={loginPage} />
        <Route exact path='/register'  component={registerPage} />
        <Route exact path='/life-cycle'  component={LifeCyclePage} />
        <PrivateRoute exact path='/home'  component={homePage} />
        <PrivateRoute exact path='/users'  component={userPage} />
        <PrivateRoute exact path='/articles'  component={articlePage} />
        <PrivateRoute exact path='/article/add'  component={ArticleFormPage} />
        
        <PrivateRoute exact path='/article/edit/:id'  component={ArticleFormPage} />
    </Switch>);
}

export default MyRoutes;