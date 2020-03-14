import React from 'react'
import { UserCardOne, UserCardTwo, Users } from '../../components/UserComponents'
import { components_users as users } from 'data.js';

const follow = id => {
    alert(id)
}
export default function User() {
    return (
        <React.Fragment>
            <h2 className="section-title">Users</h2>
            <p className="section-lead">Components relating to users, lists of users and so on.</p>
            <div className="row">
                <div className="col-12 col-sm-12 col-lg-7">
                    <UserCardOne {...users.user_card_one} followAction={follow} />
                    <Users {...users.users} />
                </div>
                <div className="col-12 col-sm-12 col-lg-5">
                    <UserCardTwo {...users.user_card_two} />
                </div>
            </div>
        </React.Fragment>
    )
}
