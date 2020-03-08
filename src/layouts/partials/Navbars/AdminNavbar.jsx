import React from 'react'
import Notification from 'components/Notifications'
import { Link } from 'react-router-dom'
import moment from 'moment';
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
        this.sidebarToggler = props.sidebarToggler.bind(this);
    }
    state = {
        histories: [
            { text: 'How to hack NASA using CSS', link: '/' },
            { text: 'Kodinger.com', link: '/' },
            { text: '#stisla', link: '/' }
        ],
        results: [
            { text: 'oPhone S9 Limited Edition', link: '/', img: 'product-3-50.png' },
            { text: 'Drone X2 New Gen-7', link: '/', img: 'product-2-50.png' },
            { text: 'Headphone Blitz', link: '/', img: 'product-1-50.png' },
        ],
        projects: [
            { text: 'Stisla Admin Template', link: '/', icon: 'fas fa-code', background: 'danger' },
            { text: 'Create a new homepage template', link: '/', icon: 'fas fa-laptop', background: 'primary' },
        ],
        notifications: [
            { title: 'something', time: moment(), link: '/' }
        ],
        mails: [

        ]
    }
    render() {
        const { histories, results, projects, notifications } = this.state;
        return (
            <React.Fragment>
                <div className="navbar-bg"></div>
                <nav className="navbar navbar-expand-lg main-navbar">
                    <form className="form-inline mr-auto">
                        <ul className="navbar-nav mr-3">
                            <li>
                                <div onClick={this.sidebarToggler} className="nav-link nav-link-lg">
                                    <i className="fas fa-bars"></i>
                                </div>
                            </li>
                            <li>
                                <button data-toggle="search" className="nav-link nav-link-lg d-sm-none">
                                    <i className="fas fa-search"></i>
                                </button>
                            </li>
                        </ul>
                        <div className="search-element">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" data-width="250" />
                            <button className="btn" type="submit"><i className="fas fa-search"></i></button>
                            <div className="search-backdrop"></div>
                            <div className="search-result">
                                <div className="search-header">
                                    Histories
                                </div>
                                {histories.map(history => (
                                    <div className="search-item" key={Math.random()}>
                                        <Link to={history.link}>{history.text}</Link>
                                        <Link to={history.link} className="search-close"><i className="fas fa-times"></i></Link>
                                    </div>
                                ))}
                                <div className="search-header">
                                    Result
                                </div>
                                {results.map(result => (
                                    <div className="search-item" key={Math.random()}>
                                        <Link to={result.link}>
                                            <img className="mr-3 rounded" width="30" src={require(`assets/img/products/${result.img}`)} alt={result.text} />
                                            {result.text}
                                        </Link>
                                    </div>
                                ))}
                                <div className="search-header">
                                    Projects
                                </div>
                                {projects.map(project => (
                                    <div className="search-item" key={Math.random()}>
                                        <Link to={project.link}>
                                            <div className={`search-icon bg-${project.background} text-white mr-3`}>
                                                <i className={project.icon}></i>
                                            </div>
                                            {project.text}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </form>
                    <ul className="navbar-nav navbar-right">
                        <Notification icon="fas fa-envelope" items={notifications} title="Messages" />
                        <Notification icon="far fa-bell" items={notifications} title="Notifications" />
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
