import React from 'react'
import Notification from 'components/Notifications'
import { Link } from 'react-router-dom'
import {
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media
} from 'reactstrap'
class AdminNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.sidebarToggler = this.sidebarToggler.bind(this);
    }
    sidebarToggler() {
        document.querySelector('body').classList.toggle('sidebar-mini')
    }
    render() {
        return (
            <React.Fragment>
                <div className="navbar-bg"></div>
                <nav className="navbar navbar-expand-lg main-navbar">
                    <form className="form-inline mr-auto">
                        <ul className="navbar-nav mr-3">
                            <li><a href="#" onClick={this.sidebarToggler} className="nav-link nav-link-lg"><i className="fas fa-bars"></i></a></li>
                            <li><a href="#" data-toggle="search" className="nav-link nav-link-lg d-sm-none"><i className="fas fa-search"></i></a></li>
                        </ul>
                        <div className="search-element">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" data-width="250" />
                            <button className="btn" type="submit"><i className="fas fa-search"></i></button>
                            <div className="search-backdrop"></div>
                            <div className="search-result">
                                <div className="search-header">
                                    Histories
                                </div>
                                <div className="search-item">
                                    <a href="#">How to hack NASA using CSS</a>
                                    <a href="#" className="search-close"><i className="fas fa-times"></i></a>
                                </div>
                                <div className="search-item">
                                    <a href="#">Kodinger.com</a>
                                    <a href="#" className="search-close"><i className="fas fa-times"></i></a>
                                </div>
                                <div className="search-item">
                                    <a href="#">#Stisla</a>
                                    <a href="#" className="search-close"><i className="fas fa-times"></i></a>
                                </div>
                                <div className="search-header">
                                    Result
                                </div>
                                <div className="search-item">
                                    <a href="#">
                                        <img className="mr-3 rounded" width="30" src="../assets/img/products/product-3-50.png" alt="product" />
                                        oPhone S9 Limited Edition
                                    </a>
                                </div>
                                <div className="search-item">
                                    <a href="#">
                                        <img className="mr-3 rounded" width="30" src="../assets/img/products/product-2-50.png" alt="product" />
                                        Drone X2 New Gen-7
                                    </a>
                                </div>
                                <div className="search-item">
                                    <a href="#">
                                        <img className="mr-3 rounded" width="30" src="../assets/img/products/product-1-50.png" alt="product" />
                                        Headphone Blitz
                                    </a>
                                </div>
                                <div className="search-header">
                                    Projects
                                </div>
                                <div className="search-item">
                                    <a href="#">
                                        <div className="search-icon bg-danger text-white mr-3">
                                            <i className="fas fa-code"></i>
                                        </div>
                                        Stisla Admin Template
                                    </a>
                                </div>
                                <div className="search-item">
                                    <a href="#">
                                        <div className="search-icon bg-primary text-white mr-3">
                                            <i className="fas fa-laptop"></i>
                                        </div>
                                        Create a new Homepage Design
                                    </a>
                                </div>
                            </div>
                        </div>
                    </form>
                    <ul className="navbar-nav navbar-right">
                        <Notification icon="fas fa-envelope" items={[]} title="Something" />
                        <Notification icon="far fa-bell" items={[]} title="Something" />
                        <UncontrolledDropdown nav>
                            <DropdownToggle className="pr-0" nav>
                                <Media className="align-items-center">
                                    <span className="avatar avatar-sm rounded-circle">
                                        <img
                                            alt="..."
                                            src={require("assets/img/avatar/avatar-1.png")}
                                        />
                                    </span>
                                    <Media className="ml-2 d-none d-lg-block">
                                        <span className="mb-0 text-sm font-weight-bold">
                                            Jessica Jones
                                    </span>
                                    </Media>
                                </Media>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right>
                                <DropdownItem to="/admin/user-profile" tag={Link}>
                                    <i className="fas fa-user mr-2" />
                                    <span>Profile</span>
                                </DropdownItem>
                                <DropdownItem to="/admin/user-profile" tag={Link}>
                                    <i className="fas fa-snowboarding mr-2" />
                                    <span>Activities</span>
                                </DropdownItem>
                                <DropdownItem to="/admin/user-profile" tag={Link}>
                                    <i className="fas fa-cog mr-2" />
                                    <span>Settings</span>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                                    <i className="fas fa-sign-out-alt text-danger mr-2" />
                                    <span className="text-danger">Logout</span>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </ul>
                </nav>
            </React.Fragment>
        )
    }
}
export default AdminNavbar;
