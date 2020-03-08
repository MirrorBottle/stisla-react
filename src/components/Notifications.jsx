import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import moment from 'moment';

// Button for trigerring NotificationMenu
function NotificationButton({ isOpen, setOpen, icon }) {
    return (
        <div style={{ cursor: 'pointer' }} onClick={() => setOpen(!isOpen)} className="nav-link notification-toggle nav-link-lg beep">
            <i className={icon}></i>
        </div>
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
function NotificationMenu({ title, items, className, isOpen, viewAllLink }) {
    return (
        <div className={`${className} ${isOpen ? 'show' : null}`}>
            <div className="dropdown-header">{title}</div>
            <div className="dropdown-list-content dropdown-list-icons">
                {items.map(item => {
                    return <NotificationItem key={Math.random()} data={item} />
                })}
            </div>
            {viewAllLink && <div className="dropdown-footer text-center">
                <Link to={viewAllLink}>View All <i className="fas fa-chevron-right"></i></Link>
            </div>}
        </div>
    )
}
// Notification Container
function Notification({ icon, items, title, viewAllLink }) {
    const [isOpen, setOpen] = useState(false);
    return (
        <li className="dropdown dropdown-list-toggle">
            <NotificationButton isOpen={isOpen} setOpen={setOpen} icon={icon} />
            <NotificationMenu viewAllLink={viewAllLink} isOpen={isOpen} items={items} title={title} />
        </li>
    )
}

Notification.propTypes = {
    icon: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        time: PropTypes.instanceOf(moment),
        link: PropTypes.string
    })),
    title: PropTypes.string
}
NotificationButton.propTypes = {
    icon: PropTypes.string
}
NotificationItem.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        time: PropTypes.instanceOf(moment),
        link: PropTypes.string
    })
}

NotificationMenu.propTypes = {
    className: PropTypes.string,
    data: PropTypes.array,
    title: PropTypes.string
}

Notification.defaultProps = {
    viewAllLink: null,
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


