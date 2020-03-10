import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './assets/css/components.css';
import './assets/css/style.css';
import './assets/css/custom.css';
import AuthLayout from './layouts/AuthLayout';
import AdminLayout from './layouts/AdminLayout';
import LoginAlternatif from './views/Auth/LoginAlternatif';
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/auth/login-2" render={props => <LoginAlternatif {...props} />} />
            <Route path="/admin" render={props => <AdminLayout {...props} />} />
            <Route path="/auth" render={props => <AuthLayout {...props} />} />
            <Redirect from="/" to="/admin/index" />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));
