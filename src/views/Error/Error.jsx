import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import routes from 'routes.js'
export default class Error extends Component {
    state = {
        status: '',
        message: ''
    }
    getData(routes) {
        return routes.map((prop, key) => {
            if ('layout' in prop && prop.layout === '/error') {
                this.setState({
                    status: prop.status,
                    message: prop.message
                })
            }
            else if ('subMenu' in prop) {
                return prop.subMenu.map((prop, key) => {
                    if (this.props.location.pathname.indexOf(prop.path) > -1) {
                        console.log(prop)
                        this.setState({
                            status: prop.status,
                            message: prop.message
                        }, () => console.log(this.state))
                    }
                });
            }
            return null;
        });
    };
    componentDidMount() {
        this.getData(routes)
    }
    render() {
        const { status, message } = this.state;
        return (
            <div>
                {status !== '' ?
                    <section class="section">
                        <div class="container mt-5">
                            <div class="page-error">
                                <div class="page-inner">
                                    <h1>{status}</h1>
                                    <div class="page-description">
                                        {message}
                                    </div>
                                    <div class="page-search">
                                        <form>
                                            <div class="form-group floating-addon floating-addon-not-append">
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text">
                                                            <i class="fas fa-search"></i>
                                                        </div>
                                                    </div>
                                                    <input type="text" class="form-control" placeholder="Search" />
                                                    <div class="input-group-append">
                                                        <button class="btn btn-primary btn-lg">
                                                            Search
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        <div class="mt-3">
                                            <a href="index.html">Back to Home</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="simple-footer mt-5">
                                Copyright &copy; Stisla 2018
                            </div>
                        </div>
                    </section>
                    : this.getData(routes)}
            </div>
        )
    }
}

