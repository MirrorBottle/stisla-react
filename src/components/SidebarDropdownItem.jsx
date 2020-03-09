import React, { useState, useEffect } from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import { NavItem, NavLink } from 'reactstrap';
import { NavLink as NavLinkRRD, Link, withRouter } from 'react-router-dom';


function toggle(name, isOpen) {
    let openArrow = document.querySelector(`.fas.fa-arrow-down.ml-2#sidebarMenu${name}`);
    openArrow.style.transform = `rotate(${isOpen ? -180 : 0}deg)`;
}
class SidebarDropdownItem extends React.Component {
    state = {
        isOpen: false
    }
    constructor(props) {
        super(props);
        this.activeRoute = props.activeRoute.bind(this);
        this.toggle = this.toggle.bind(this);
    }
    toggle = (e = null) => {
        e && e.preventDefault();
        this.setState({ isOpen: !this.state.isOpen }, () => {
            let openArrow = document.querySelector(`.fas.fa-chevron-right.ml-2#sidebarMenu${this.props.name}`);
            openArrow.style.transform = `rotate(${this.state.isOpen ? 90 : 0}deg)`;
        });
    };
    componentDidMount() {
        this.props.subMenu.forEach(({ path, layout }) => {
            if (this.props.location.pathname === layout + path) {
                this.toggle()
            }
        })
    }
    render() {
        const { isOpen } = this.state;
        const { name, icon, subMenu } = this.props;
        return (
            <React.Fragment>
                <li className="nav-item dropdown">
                    <Link to="/" onClick={this.toggle} class="nav-link d-flex justify-content-between">
                        <div>
                            <i class={icon}></i>
                            {name}
                        </div>
                        <i className="fas fa-chevron-right ml-2 float-right" id={`sidebarMenu${this.props.name}`}></i>
                    </Link>
                    <Collapse isOpen={isOpen}>
                        <ul>
                            {
                                subMenu.map((prop, key) => {
                                    return (
                                        <li key={key} className={this.activeRoute(prop.path)}>
                                            <Link to='/' className="nav-link">
                                                <i className={prop.icon}></i>
                                                <span>{prop.name}</span>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </Collapse>
                </li>
            </React.Fragment>
        )
    }
}
export default withRouter(SidebarDropdownItem);