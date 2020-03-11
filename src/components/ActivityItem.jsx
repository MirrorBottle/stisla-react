import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import moment from 'moment';
function ActivityItem({ activity_id, job, time, icon, content }) {
    return (
        <div className="activity">
            <div className="activity-icon bg-primary text-white shadow-primary">
                <i className={icon}></i>
            </div>
            <div className="activity-detail">
                <div className="mb-2">
                    <span className="text-job text-primary">{moment(time).fromNow(true)}</span>
                    <span className="bullet"></span>
                    <Link to='/' className="text-job">{job}</Link>
                    <div className="float-right dropdown">
                        <UncontrolledDropdown>
                            <DropdownToggle className="btn-icon btn-primary">
                                <i className="fas fa-ellipsis-h"></i>
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem header>Options</DropdownItem>
                                <DropdownItem>
                                    <Link to="/" className="text-decoration-none text-dark"><i className="fas fa-eye"></i> View</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link to="/" className="text-decoration-none text-dark"><i className="fas fa-list"></i> Detail</Link>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <Link to="/" className="text-danger text-decoration-none" data-confirm="Wait, wait, wait...|This action can't be undone. Want to take risks?" data-confirm-text-yes="Yes, IDC"><i class="fas fa-trash-alt"></i> Archive</Link>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                </div>
                <p>{content}</p>
            </div>
        </div>
    )
}
ActivityItem.propTypes = {
    activity_id: PropTypes.number,
    job: PropTypes.string,
    time: PropTypes.instanceOf(moment),
    icon: PropTypes.string,
    content: PropTypes.string
}
ActivityItem.defaultProps = {
    activity_id: Math.random(),
    job: '',
    time: moment(),
    icon: 'fas fa-circle',
    content: ''
}
export default ActivityItem;