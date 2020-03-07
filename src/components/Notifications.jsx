import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import moment from 'moment';

// Button for trigerring NotificationMenu
function NotificationButton({ isOpen, setOpen, icon }) {
    return (
        <a href="#" onClick={() => setOpen(!isOpen)} class="nav-link notification-toggle nav-link-lg beep">
            <i className={icon}></i>
        </a>
    )
}
// Notification Item
function NotificationItem({ data }) {
    return (
        <Link to={data.link} className="dropdown-item">
            <div className="dropdown-item-desc">
                <b>{data.title}</b>
                <div className="time">{moment(data.time).fromNow()}</div>
            </div>
        </Link>
    )
}
// Notification Menu
function NotificationMenu({ title, items, className, isOpen }) {
    return (
        <div className={`${className} ${isOpen ? 'show' : null}`}>
            <div className="dropdown-header">{title}</div>
            <div className="dropdown-list-content dropdown-list-icons" style={{ overflowY: 'scroll' }}>
                {items.map(item => {
                    return <NotificationItem data={item} />
                })}
            </div>
            <div className="dropdown-footer text-center">
                <a href="#">View All <i className="fas fa-chevron-right"></i></a>
            </div>
        </div>
    )
}
// Notification Container
function Notification({ icon, items, title }) {
    const [isOpen, setOpen] = useState(false);
    return (
        <li class="dropdown dropdown-list-toggle">
            <NotificationButton isOpen={isOpen} setOpen={setOpen} icon={icon}></NotificationButton>
            <NotificationMenu isOpen={isOpen} items={items} title={title} />
        </li>
    )
}

Notification.propTypes = {
    icon: PropTypes.string,
    items: PropTypes.objectOf({
        title: PropTypes.string,
        time: PropTypes.number,
        link: PropTypes.string
    }),
    title: PropTypes.string
}
NotificationButton.propTypes = {
    icon: PropTypes.string
}
NotificationItem.propTypes = {
    data: PropTypes.objectOf({
        title: PropTypes.string,
        time: PropTypes.number,
        link: PropTypes.string
    })
}

NotificationMenu.propTypes = {
    className: PropTypes.string,
    data: PropTypes.array,
    title: PropTypes.string
}

NotificationButton.defaultProps = {
    icon: 'far fa-bell'
}
NotificationItem.defaultProps = {
    data: {
        title: '',
        time: 0,
        link: '#'
    }
}
NotificationMenu.defaultProps = {
    className: 'dropdown-menu dropdown-list dropdown-menu-right',
    items: [
        {
            title: '',
            time: moment(),
            link: '#'
        }
    ],
    title: 'Notifications'
}

export default Notification;


