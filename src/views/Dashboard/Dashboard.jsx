import React, { Component } from 'react'
import { Card, CardHeader, CardBody, Media } from 'reactstrap';
import { NotificationButton, NotificationMenu, NotificationContainer } from 'components/Notifications';
export default class Dashboard extends Component {
    render() {
        return (
            <>
                <Card>
                    <CardHeader>
                        <h4>Recent Activities</h4>
                    </CardHeader>
                    <CardBody>

                        <ul class="list-unstyled list-unstyled-border">
                            <li class="media">
                                <img class="mr-3 rounded-circle" width="50" src="../assets/img/avatar/avatar-1.png" alt="avatar" />
                                <div class="media-body">
                                    <div class="float-right text-primary">Now</div>
                                    <div class="media-title">Farhan A Mujib</div>
                                    <span class="text-small text-muted">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</span>
                                </div>
                            </li>
                        </ul>
                    </CardBody>
                </Card>
            </>
        )
    }
}
