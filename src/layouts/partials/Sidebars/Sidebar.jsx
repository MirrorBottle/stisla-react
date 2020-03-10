import React from 'react'
import { Link, withRouter } from "react-router-dom";
import SidebarDropdownItem from 'components/SidebarDropdownItem';
import routes from 'routes.js';
class Sidebar extends React.Component {
    state = {
        isOpen: false
    }
    constructor(props) {
        super(props);
        this.sidebarToggler = props.sidebarToggler.bind(this);
        this.activeRoute.bind(this);
    }
    // verifies if routeName is the one active (in browser input)
    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }
    createLinks = routes => {
        return routes.map((prop, key) => {
            if ('subMenu' in prop) {
                return <SidebarDropdownItem activeRoute={this.activeRoute} key={key} {...prop} />;
            }
            if (prop.isActive) {
                return (
                    <li key={key} className={`nav-item ${this.activeRoute(prop.path)}`}>
                        <Link to={prop.layout + prop.path} className="nav-link" style={{ marginLeft: '-3px' }}>
                            <i className={`${prop.icon} ml--4`}></i>
                            <span>{prop.name}</span>
                        </Link>
                    </li>
                );
            }
        });
    };
    render() {
        return (
            <div className="main-sidebar" style={{ overflowY: 'scroll' }}>
                <aside id="sidebar-wrapper">
                    <div className="sidebar-brand">
                        <a href="index.html">Stisla</a>
                        <div className="float-right pr-3 d-lg-none d-md-none d-sm-block">
                            <button className="btn btn-primary" onClick={this.sidebarToggler}><i className="fas fa-times"></i></button>
                        </div>
                    </div>
                    <div className="sidebar-brand sidebar-brand-sm">
                        <a href="index.html">St</a>
                    </div>
                    <ul className="sidebar-menu">
                        {this.createLinks(routes)}
                        <li><a className="nav-link" href="credits.html"><i className="fas fa-pencil-ruler"></i> <span>Credits</span></a></li>
                    </ul>
                    <div className="mt-4 mb-4 p-3 hide-sidebar-mini">
                        <a href="https://getstisla.com/docs" className="btn btn-primary btn-lg btn-block btn-icon-split">
                            <i className="fas fa-rocket"></i> Documentation
                    </a>
                    </div>
                </aside>
            </div>
        )
    }
}
export default withRouter(Sidebar)
