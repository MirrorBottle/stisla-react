import React from 'react';
import { Collapse } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';



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
                <li className="nav-item">
                    <Link to="/" onClick={this.toggle} className="nav-link">
                        <i className={icon}></i>
                        <span>{name}</span>
                        <i className="fas fa-chevron-right ml-2 float-right" id={`sidebarMenu${this.props.name}`}></i>
                    </Link>
                    <Collapse isOpen={isOpen}>
                        <ul>
                            {
                                subMenu.map((prop, key) => {
                                    return (
                                        <li key={key} className={`${this.activeRoute(prop.path)}`}>
                                            <Link to={prop.layout + prop.path} className="nav-link">
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