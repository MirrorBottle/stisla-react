import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
function ActivityItem({ activity_id, job, time, icon, content }) {
    return (
        <div class="activity">
            <div class="activity-icon bg-primary text-white shadow-primary">
                <i class={icon}></i>
            </div>
            <div class="activity-detail">
                <div class="mb-2">
                    <span class="text-job text-primary">{moment(time).fromNow(true)}</span>
                    <span class="bullet"></span>
                    <Link to='/' class="text-job">{job}</Link>
                    <div class="float-right dropdown">
                        <a href="#" data-toggle="dropdown"><i class="fas fa-ellipsis-h"></i></a>
                        <div class="dropdown-menu">
                            <div class="dropdown-title">Options</div>
                            <a href="#" class="dropdown-item has-icon"><i class="fas fa-eye"></i> View</a>
                            <a href="#" class="dropdown-item has-icon"><i class="fas fa-list"></i> Detail</a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item has-icon text-danger" data-confirm="Wait, wait, wait...|This action can't be undone. Want to take risks?" data-confirm-text-yes="Yes, IDC"><i class="fas fa-trash-alt"></i> Archive</a>
                        </div>
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