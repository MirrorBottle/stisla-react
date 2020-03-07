import React from 'react'
import Logo from 'assets/img/stisla-fill.svg'
export default function AuthHeader() {
    return (
        <>
            <div className="login-brand">
                <img src={Logo} alt="logo" width="100" class="shadow-light rounded-circle" />
            </div>
        </>
    )
}
