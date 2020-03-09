/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';
import Login from './views/Auth/Login.jsx';
import Register from './views/Auth/Register';
import Dashboard from './views/Dashboard/Dashboard';
var routes = [
    {
        path: "/index",
        name: "Dashboard",
        icon: "fas fa-tachometer-alt",
        component: props => <Dashboard {...props} />,
        layout: "/admin",
        isActive: true,
        roles: ['admin'],
        homepageFor: 'admin'
    },
    {
        path: "/blank",
        name: "Blank",
        icon: "fas fa-tachometer-alt",
        component: props => <Dashboard {...props} />,
        layout: "/admin",
        isActive: true,
        roles: ['admin'],
        subMenu: [
            {
                path: "/blank",
                name: "Blank",
                icon: "fas fa-tachometer-alt",
                component: props => <Dashboard {...props} />,
                layout: "/admin",
                isActive: true,
                roles: ['admin'],
            }
        ]
    },
    {
        path: "/login",
        name: "Login",
        icon: "ni ni-key-25 text-info",
        component: Login,
        layout: "/auth",
        isActive: false,
        roles: ['admin']
    },
    {
        path: "/register",
        name: "Register",
        icon: "ni ni-circle-08 text-pink",
        component: Register,
        layout: "/auth",
        isActive: false,
        roles: ['admin']
    }
];
export default routes;
