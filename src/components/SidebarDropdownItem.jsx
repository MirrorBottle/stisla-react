import React, { useState, useEffect } from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import { NavItem, NavLink } from 'reactstrap';
import { NavLink as NavLinkRRD } from 'react-router-dom';


function toggle(name, isOpen) {
    let openArrow = document.querySelector(`.ni.ni-bold-down.ml-2#sidebarMenu${name}`);
    openArrow.style.transform = `rotate(${isOpen ? -180 : 0}deg)`;
}
export default function SidebarDropdownItem({ subMenu, name, icon }) {
    const [isOpen, setOpen] = useState(false)
    useEffect(() => {
        subMenu.forEach(({ path, layout }) => {
            if (this.props.location.pathname === layout + path) {
                setOpen(!isOpen);
                toggle(name, isOpen);
            }
        })
    })
    return (
        <React.Fragment>
            <NavItem>
                <NavLink onClick={() => { setOpen(!isOpen); toggle() }} style={{ cursor: 'pointer' }}>
                    <i className={icon} />
                    {name}
                    <span className="ni ni-bold-down ml-2" id={`sidebarMenu${name}`}></span>
                </NavLink>
            </NavItem>
            <Collapse isOpen={isOpen}>
                <Card className="border-0">
                    <CardBody className="py-0 pl-4">{
                        subMenu.map((prop, key) => {
                            return (
                                <NavItem key={key}>
                                    <NavLink
                                        to={prop.layout + prop.path}
                                        tag={NavLinkRRD}
                                        activeClassName="active"
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <i className={prop.icon} />
                                        {prop.name}
                                    </NavLink>
                                </NavItem>
                            )
                        })
                    }</CardBody>
                </Card>
            </Collapse>
        </React.Fragment>
    )
}
