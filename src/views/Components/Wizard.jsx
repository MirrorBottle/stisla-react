import React, { Component } from 'react'
import { WizardSteps } from '../../components/WizardComponent'

export default class Wizard extends Component {
    state = {
        order_status_one: [
            { icon: 'fas fa-tshirt', label: 'Order Placed' },
            {
                icon: 'fas fa-tshirt', label: 'Order Placed', color: 'success', clickEvent: (e) => {
                    console.log(e);
                }
            }
        ]
    }
    render() {
        const { order_status_one } = this.state;
        return (
            <React.Fragment>
                <h2 className="section-title">Wizard</h2>
                <p className="section-lead">The wizard is a component to simplify a process with a step-by-step method.</p>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Order Status</h4>
                            </div>
                            <div className="card-body">
                                <div className="row mt-4">
                                    <div className="col-12 col-lg-8 offset-lg-2">
                                        <WizardSteps steps={order_status_one} />
                                        <div className="wizard-steps">
                                            <div className="wizard-step wizard-step-active">
                                                <div className="wizard-step-icon">
                                                    <i className="fas fa-tshirt"></i>
                                                </div>
                                                <div className="wizard-step-label">
                                                    Order Placed
                                                </div>
                                            </div>
                                            <div className="wizard-step wizard-step-active">
                                                <div className="wizard-step-icon">
                                                    <i className="fas fa-credit-card"></i>
                                                </div>
                                                <div className="wizard-step-label">
                                                    Payment Completed
                                                </div>
                                            </div>
                                            <div className="wizard-step wizard-step-active">
                                                <div className="wizard-step-icon">
                                                    <i className="fas fa-shipping-fast"></i>
                                                </div>
                                                <div className="wizard-step-label">
                                                    Product Shipped
                                                </div>
                                            </div>
                                            <div className="wizard-step wizard-step-success">
                                                <div className="wizard-step-icon">
                                                    <i className="fas fa-check"></i>
                                                </div>
                                                <div className="wizard-step-label">
                                                    Order Completed
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
