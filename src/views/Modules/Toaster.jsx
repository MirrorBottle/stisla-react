import React from 'react'
import ToasterNotification from './../../components/ToasterNotification.jsx';
export default function Toaster() {
    return (
        <React.Fragment>
            <h2 className="section-title">Toaster</h2>
            <p className="section-lead">
                We use 'react-notifications-component' made by @Dolce. You can check the full documentation <a href="https://izitoast.marcelodolza.com/">here</a>.
            </p>
            <div className="row">
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="card">
                        <div className="card-body text-center">
                            <div className="mb-2">Info Message</div>
                            <button className="btn btn-primary" onClick={() => ToasterNotification('Info Message', 'This is an info message', 'info')}>Launch</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="card">
                        <div className="card-body text-center">
                            <div className="mb-2">Success Message</div>
                            <button className="btn btn-primary" onClick={() => ToasterNotification('Success Message', 'This is a success message', 'success')}>Launch</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="card">
                        <div className="card-body text-center">
                            <div className="mb-2">Warning Message</div>
                            <button className="btn btn-primary" onClick={() => ToasterNotification('Waring Message', 'This is an warning message', 'warning')}>Launch</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="card">
                        <div className="card-body text-center">
                            <div className="mb-2">Error Message</div>
                            <button className="btn btn-primary" onClick={() => ToasterNotification('Error Message', 'This is an error message', 'danger')}>Launch</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="card">
                        <div className="card-body text-center">
                            <div className="mb-2">Toaster Bottom Right</div>
                            <button className="btn btn-primary" onClick={() => ToasterNotification('Toaster Bottom Right', 'This notification on bottom right', 'default', 'bottom-right')}>Launch</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="card">
                        <div className="card-body text-center">
                            <div className="mb-2">Toaster Bottom Center</div>
                            <button className="btn btn-primary" onClick={() => ToasterNotification('Toaster Bottom Center', 'This notification on bottom center', 'default', 'bottom-center')}>Launch</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="card">
                        <div className="card-body text-center">
                            <div className="mb-2">Toaster Bottom Left</div>
                            <button className="btn btn-primary" onClick={() => ToasterNotification('Toaster Bottom Left', 'This notification on bottom left', 'default', 'bottom-left')}>Launch</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="card">
                        <div className="card-body text-center">
                            <div className="mb-2">Toaster Top Center</div>
                            <button className="btn btn-primary" onClick={() => ToasterNotification('Toaster Top Center', 'This notification on top center', 'default', 'top-center')}>Launch</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
