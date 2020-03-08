import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import AdminNavbar from './partials/Navbars/AdminNavbar';
import AdminFooter from './partials/Footers/AdminFooter';
import Sidebar from './partials/Sidebars/Sidebar';
import routes from "routes.js";

export default class AdminLayout extends Component {
    constructor(props) {
        super(props);
        this.getRoutes = this.getRoutes.bind(this);
        this.getBrandText = this.getBrandText.bind(this);
        this.sidebarToggler = this.sidebarToggler.bind(this);
    }
    sidebarToggler() {
        const body = document.querySelector('body');
        if (document.documentElement.clientWidth < 768) {
            if (body.classList.contains('sidebar-show')) {
                body.classList.remove('sidebar-show');
                body.classList.add('sidebar-gone');
            } else {
                body.classList.remove('sidebar-gone');
                body.classList.add('sidebar-show');
            }
        } else {
            body.classList.remove('sidebar-gone');
            body.classList.remove('sidebar-show');
            body.classList.toggle('sidebar-mini')
        }
    }
    getRoutes(routes) {
        return routes.map((prop, key) => {
            if (prop.layout === "/admin") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        component={prop.component}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };
    getBrandText(path) {
        for (let i = 0; i < routes.length; i++) {
            if (
                this.props.location.pathname.indexOf(
                    routes[i].layout + routes[i].path
                ) !== -1
            ) {
                return routes[i].name;
            }
        }
        return "Brand";
    }
    render() {
        return (
            <React.Fragment>
                <AdminNavbar sidebarToggler={this.sidebarToggler} />
                <Sidebar sidebarToggler={this.sidebarToggler} />
                <div className="main-content">
                    <section className="section">
                        <div className="section-header">
                            <h1>{this.getBrandText(this.props.location.pathname)}</h1>
                        </div>
                    </section>
                    <div className="section-body">
                        <Switch>{this.getRoutes(routes)}</Switch>
                    </div>
                </div>
                <AdminFooter />
            </React.Fragment>
        )
    }
}

