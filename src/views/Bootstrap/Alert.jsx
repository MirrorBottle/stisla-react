import React from 'react'
import AlertComponent from '../../components/AlertComponent'

export default function Alert() {
    return (
        <React.Fragment>
            <h2 className="section-title">Alerts</h2>
            <p className="section-lead">
                Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
            </p>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                    <div className="card">
                        <div className="card-header">
                            <h4>Default</h4>
                        </div>
                        <div className="card-body">
                            <AlertComponent message="This is a primary alert" />
                            <AlertComponent message="This is a success alert" color="success" />
                            <AlertComponent message="This is a danger alert" color="danger" />
                            <AlertComponent message="This is a warning alert" color="warning" />
                            <AlertComponent message="This is a info alert" color="info" />
                            <AlertComponent message="This is a light alert" color="light" />
                            <AlertComponent message="This is a dark alert" color="dark" />
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h4>Icon</h4>
                        </div>
                        <div className="card-body">
                            <AlertComponent message="This is a primary alert" title="Primary" icon="far fa-lightbulb" />
                            <AlertComponent message="This is a success alert" color="success" title="Success" icon="far fa-lightbulb" />
                            <AlertComponent message="This is a danger alert" color="danger" title="Danger" icon="far fa-lightbulb" />
                            <AlertComponent message="This is a warning alert" color="warning" title="Warning" icon="far fa-lightbulb" />
                            <AlertComponent message="This is a info alert" color="info" title="Info" icon="far fa-lightbulb" />
                            <AlertComponent message="This is a light alert" color="light" title="Light" icon="far fa-lightbulb" />
                            <AlertComponent message="This is a dark alert" color="dark" title="Dark" icon="far fa-lightbulb" />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                    <div className="card">
                        <div className="card-header">
                            <h4>Title</h4>
                        </div>
                        <div className="card-body">
                            <AlertComponent message="This is a primary alert" title="Primary" />
                            <AlertComponent message="This is a success alert" color="success" title="Success" />
                            <AlertComponent message="This is a danger alert" color="danger" title="Danger" />
                            <AlertComponent message="This is a warning alert" color="warning" title="Warning" />
                            <AlertComponent message="This is a info alert" color="info" title="Info" />
                            <AlertComponent message="This is a light alert" color="light" title="Light" />
                            <AlertComponent message="This is a dark alert" color="dark" title="Dark" />
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h4>Dismissable</h4>
                        </div>
                        <div className="card-body">
                            <AlertComponent message="This is a primary alert" />
                            <AlertComponent message="This is a success alert" color="success" />
                            <AlertComponent message="This is a danger alert" color="danger" />
                            <AlertComponent message="This is a warning alert" color="warning" />
                            <AlertComponent message="This is a info alert" color="info" />
                            <AlertComponent message="This is a light alert" color="light" />
                            <AlertComponent message="This is a dark alert" color="dark" />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
