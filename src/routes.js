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
// Auth
import Login from './views/Auth/Login.jsx';
import Register from './views/Auth/Register';
import ResetPassword from './views/Auth/ResetPassword.jsx';
import ForgotPassword from './views/Auth/ForgotPassword.jsx';

// Dashboard
import Dashboard from './views/Dashboard/Dashboard';
var routes = [
    {
        path: "/",
        name: "Dashboard",
        icon: "fas fa-fire",
        layout: "/",
        isActive: true,
        roles: ['admin'],
        homepageFor: 'admin',
        subMenu: [
            {
                path: "/index",
                name: "General Dashboard",
                component: props => <Dashboard {...props} />,
                layout: "/admin",
                isActive: true,
                roles: ['admin'],
                homepageFor: 'admin',
            },
            {
                path: "/ecommerce",
                name: "Ecommerce Dashboard",
                component: props => <Dashboard {...props} />,
                layout: "/admin",
                isActive: true,
                roles: ['admin'],
            }
        ]
    },
    {
        path: "/",
        name: "Layout",
        icon: "fas fa-columns",
        component: props => <Dashboard {...props} />,
        layout: "/",
        isActive: true,
        roles: ['admin'],
        homepageFor: 'admin',
        subMenu: [
            {
                path: "/default-layout",
                name: "Default Layout",
                component: props => <Dashboard {...props} />,
                layout: "/admin",
                isActive: true,
                roles: ['admin'],
                homepageFor: 'admin',
            },
            {
                path: "/transparent-sidebar",
                name: "Transparent Sidebar",
                component: props => <Dashboard {...props} />,
                layout: "/admin",
                isActive: true,
                roles: ['admin'],
            },
            {
                path: "/top-navigation",
                name: "Top Navigation",
                component: props => <Dashboard {...props} />,
                layout: "/admin",
                isActive: true,
                roles: ['admin'],
            }
        ]
    },
    {
        path: "/blank",
        name: "Blank Page",
        icon: "far fa-square",
        component: props => <Dashboard {...props} />,
        layout: "/admin",
        isActive: true,
        roles: ['admin']
    },
    {
        path: "/",
        name: "Bootstrap",
        icon: "fas fa-th",
        component: props => <Dashboard {...props} />,
        layout: "/",
        isActive: true,
        roles: ['admin'],
        homepageFor: 'admin',
        subMenu: [
            {
                path: "/alert",
                name: "Alert",
                component: props => <Dashboard {...props} />,
                layout: "/admin",
                isActive: true,
                roles: ['admin'],
                homepageFor: 'admin',
            },
            {
                path: "/badge",
                name: "Badge",
                component: props => <Dashboard {...props} />,
                layout: "/admin",
                isActive: true,
                roles: ['admin'],
            },
            {
                path: "/breadcrumb",
                name: "Breadcrumb",
                component: props => <Dashboard {...props} />,
                layout: "/admin",
                isActive: true,
                roles: ['admin'],
            },
            {
                path: "/buttons",
                name: "Buttons",
                component: props => <Dashboard {...props} />,
                layout: "/admin",
                isActive: true,
                roles: ['admin'],
            },
            {
                path: "/card",
                name: "Card",
                component: props => <Dashboard {...props} />,
                layout: "/admin",
                isActive: true,
                roles: ['admin'],
            },
            {
                path: "/carousel",
                name: "Carousel",
                component: props => <Dashboard {...props} />,
                layout: "/admin",
                isActive: true,
                roles: ['admin'],
            },
            {
                path: "/collapse",
                name: "Collapse",
                component: props => <Dashboard {...props} />,
                layout: "/admin",
                isActive: true,
                roles: ['admin'],
            },
            {
                path: "/dropdown",
                name: "Dropdown",
                component: props => <Dashboard {...props} />,
                layout: "/admin",
                isActive: true,
                roles: ['admin'],
            },
            {
                path: "/form",
                name: "Form",
                component: props => <Dashboard {...props} />,
                layout: "/admin",
                isActive: true,
                roles: ['admin'],
            },
            {
                path: "/list-group",
                name: "List Group",
                component: props => <Dashboard {...props} />,
                layout: "/admin",
                isActive: true,
                roles: ['admin'],
            },
            {
                path: "/media-object",
                name: "Media Object",
                component: props => <Dashboard {...props} />,
                layout: "/admin",
                isActive: true,
                roles: ['admin'],
            },
            {
                path: "/modal",
                name: "Modal",
                component: props => <Dashboard {...props} />,
                layout: "/admin",
                isActive: true,
                roles: ['admin'],
            },
            {
                path: "/nav",
                name: "Nav",
                component: props => <Dashboard {...props} />,
                layout: "/admin",
                isActive: true,
                roles: ['admin'],
            },
            {
                path: "/navbar",
                name: "Navbar",
                component: props => <Dashboard {...props} />,
                layout: "/admin",
                isActive: true,
                roles: ['admin'],
            },
            {
                path: "/pagination",
                name: "Pagination",
                component: props => <Dashboard {...props} />,
                layout: "/admin",
                isActive: true,
                roles: ['admin'],
            },
            {
                path: "/popover",
                name: "Popover",
                component: props => <Dashboard {...props} />,
                layout: "/admin",
                isActive: true,
                roles: ['admin'],
            },
            {
                path: "/progress",
                name: "Progress",
                component: props => <Dashboard {...props} />,
                layout: "/admin",
                isActive: true,
                roles: ['admin'],
            },
            {
                path: "/table",
                name: "Table",
                component: props => <Dashboard {...props} />,
                layout: "/admin",
                isActive: true,
                roles: ['admin'],
            },
            {
                path: "/tooltip",
                name: "Tooltip",
                component: props => <Dashboard {...props} />,
                layout: "/admin",
                isActive: true,
                roles: ['admin'],
            },
            {
                path: "/typhography",
                name: "Typhography",
                component: props => <Dashboard {...props} />,
                layout: "/admin",
                isActive: true,
                roles: ['admin'],
            },
        ]
    },
    {
        path: "/",
        name: "Auth",
        icon: "far fa-user",
        layout: "/",
        isActive: true,
        roles: ['admin'],
        subMenu: [
            {
                path: "/forgot",
                name: "Forgot Password",
                component: ForgotPassword,
                layout: "/auth",
                isActive: true,
            },
            {
                path: "/login",
                name: "Login",
                component: Login,
                layout: "/auth",
                isActive: true,
            },
            {
                path: "/register",
                name: "Register",
                component: Register,
                layout: "/auth",
                isActive: false,
            },
            {
                path: "/reset",
                name: "Reset Password",
                component: ResetPassword,
                layout: "/auth",
                isActive: false,
            }
        ]
    },
    {
        path: "/",
        name: "Error",
        icon: "fas fa-exclamation",
        layout: "/",
        isActive: true,
        subMenu: [
            {
                path: "/503",
                name: "503",
                message: 'Be right back.',
                status: '503',
                layout: "/error",
                isActive: true,
            },
            {
                path: "/404",
                name: "404",
                message: 'The page you were looking for could not be found.',
                status: '404',
                layout: "/error",
                isActive: true,
            },
            {
                path: "/500",
                name: "500",
                message: 'Whoopps, something went wrong.',
                status: '500',
                layout: "/error",
                isActive: true,
            },
            {
                path: "/403",
                name: "403",
                message: 'You do not have access to this page.',
                status: '403',
                layout: "/error",
                isActive: true,
            },
        ]
    },
];
export default routes;
