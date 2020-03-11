import React from 'react'
import ActivityItem from '../../components/ActivityItem'
import moment from 'moment';

const activities = [
    {
        date: moment('2020-01-01').format('MMMM YYYY'),
        items: [
            {
                activity_id: 1,
                job: 'view',
                time: moment(),
                icon: 'fas fa-circle',
                content: 'Moved the task "Fix some features that are bugs in the master module" from Progress to Finish.',
            },
            {
                activity_id: 2,
                job: 'authentication',
                time: moment().add(3, 'hours'),
                icon: 'fas fa-unlock',
                content: 'Login to the system with ujang@maman.com email and location in Bogor',
            },
            {
                activity_id: 3,
                job: 'backend',
                time: moment().add(8, 'hours'),
                icon: 'fas fa-sign-out-alt',
                content: 'Log out of the system after 6 hours using the system.',
            }
        ]
    },
    {
        date: moment('2019-12-01').format('MMMM YYYY'),
        items: []
    },
    {
        date: moment('2019-12-01').format('MMMM YYYY'),
        items: [{
            activity_id: 1,
            job: 'backend',
            time: moment().add(8, 'hours'),
            icon: 'fas fa-sign-out-alt',
            content: 'Log out of the system after 6 hours using the system.',
        }]
    }
]
const NoDataIndication = () => {
    return <h3 className="text-center">No Activity This Month</h3>
}
export default function Activities() {
    return (
        <React.Fragment>
            {activities.map(activity => (
                <>
                    <h2 className="section-title">{activity.date}</h2>
                    <div className="row">
                        <div className="col-12">
                            <div className="activities">
                                {activity.items.length > 0 ?
                                    activity.items.map(item => <ActivityItem {...item} />) : <NoDataIndication />}
                            </div>
                        </div>
                    </div>
                </>
            ))}
        </React.Fragment>
    )
}
