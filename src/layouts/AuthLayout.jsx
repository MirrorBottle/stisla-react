import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import AuthHeader from 'layouts/partials/Headers/AuthHeader';
import AuthFooter from 'layouts/partials/Footers/AuthFooter';
import routes from 'routes.js';
export default class AuthLayout extends Component {
    constructor(props) {
        super(props);
        this.getRoutes = this.getRoutes.bind(this);
    }
    getRoutes(routes) {
        return routes.map((prop, key) => {
            if (prop.layout === "/auth") {
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
    render() {
        return (
            <>
                <div className="section">
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                                <AuthHeader />
                            </div>
                            <Switch>{this.getRoutes(routes)}</Switch>
                            <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                                <AuthFooter />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

