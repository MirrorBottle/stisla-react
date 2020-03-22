import React from 'react'
import PropTypes from 'prop-types';
function WizardSteps({ steps }) {
    return (
        <div className="wizard-steps">
            {steps.map(({ label, icon, key = Math.random(), color = 'active', withIcon = true, clickEvent }) => (
                <div key={key} className={`wizard-step wizard-step-${color}`} style={clickEvent && { cursor: 'pointer' }} onClick={clickEvent ? clickEvent : null}>
                    {withIcon && (
                        <div className="wizard-step-icon">
                            <i className={icon}></i>
                        </div>
                    )}
                    <div className="wizard-step-label">
                        {label}
                    </div>
                </div>
            ))}
        </div>
    )
}

WizardSteps.propType = {
    steps: PropTypes.arrayOf({
        label: PropTypes.string,
        icon: PropTypes.string,
        key: PropTypes.number,
        color: PropTypes.string,
        withIcon: PropTypes.bool,
        clickEvent: PropTypes.func
    })
}


function WizardContents() {
    return (
        <div></div>
    )
}

function UncontrolledWizard() {
    return (
        <div></div>
    )
}

export {
    WizardSteps,
    WizardContents,
    UncontrolledWizard
}
