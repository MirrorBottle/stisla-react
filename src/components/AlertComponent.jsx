import React from 'react'
import PropTypes from 'prop-types';


function dismiss(e) {
    e.target.parentNode.style.display = 'none';
}
function AlertComponent({ message, color, title, icon, dismissable }) {
    return (
        <div onClick={dismissable === true && dismiss}>
            <div className={`alert alert-${color} ${icon ? 'alert-has-icon' : ''}`} style={dismissable === true && { cursor: 'pointer' }} >
                {icon && (
                    <div className="alert-icon">
                        <i className={icon}></i>
                    </div>
                )}
                <div className="alert-body">
                    {title && <div className="alert-title">{title}</div>}
                    {message}
                </div>
            </div>
        </div>
    )
}
AlertComponent.propTypes = {
    message: PropTypes.string.isRequired,
    color: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.string,
    dismissable: PropTypes.bool
}
AlertComponent.defaultProps = {
    color: 'primary',
    dismissable: true,
}

export default AlertComponent;
