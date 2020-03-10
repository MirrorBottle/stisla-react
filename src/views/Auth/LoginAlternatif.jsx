import React from 'react'
import { Link } from 'react-router-dom';
export default function LoginAlternatif(props) {
    return (
        <section className="section">
            <div className="d-flex flex-wrap align-items-stretch">
                <div className="col-lg-4 col-md-6 col-12 order-lg-1 min-vh-100 order-2 bg-white">
                    <div className="p-4 m-3">
                        <img src={require('assets/img/stisla-fill.svg')} alt="logo" width="80" className="shadow-light rounded-circle mb-5 mt-2" />
                        <h4 className="text-dark font-weight-normal">Welcome to <span className="font-weight-bold">Stisla</span></h4>
                        <p className="text-muted">Before you get started, you must login or register if you don't already have an account.</p>
                        <form method="POST" action="#" className="needs-validation" novalidate="">
                            <div className="form-group">
                                <label for="email">Email</label>
                                <input id="email" type="email" className="form-control" name="email" tabindex="1" required autofocus />
                                <div className="invalid-feedback">
                                    Please fill in your email
                                    </div>
                            </div>
                            <div className="form-group">
                                <div className="d-block">
                                    <label for="password" className="control-label">Password</label>
                                </div>
                                <input id="password" type="password" className="form-control" name="password" tabindex="2" required />
                                <div className="invalid-feedback">
                                    please fill in your password
                                    </div>
                            </div>

                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" name="remember" className="custom-control-input" tabindex="3" id="remember-me" />
                                    <label className="custom-control-label" for="remember-me">Remember Me</label>
                                </div>
                            </div>

                            <div className="form-group text-right">
                                <Link to='/auth/forgot' className="float-left mt-3">
                                    Forgot Password?
                                    </Link>
                                <button type="submit" className="btn btn-primary btn-lg btn-icon icon-right" tabindex="4">
                                    Login
                                    </button>
                            </div>

                            <div className="mt-5 text-center">
                                Don't have an account? <Link to='auth/register'>Create new one</Link>
                            </div>
                        </form>

                        <div className="text-center mt-5 text-small">
                            Copyright &copy; Your Company. Made with <span role='img' aria-label='emoji'>💙</span> by Stisla
                                <div className="mt-2">
                                <Link to="/">Privacy Policy</Link>
                                <div className="bullet"></div>
                                <Link to="/">Terms of Service</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-12 order-lg-2 order-1 min-vh-100 background-walk-y position-relative overlay-gradient-bottom" data-background={require('assets/img/unsplash/login-bg.jpg')}>
                    <img src={require('assets/img/unsplash/login-bg.jpg')} alt="login-bg" style={{ backgroundSize: 'cover', width: '100%', height: '100%', position: 'absolute', top: '0', left: '0' }} />
                    <div className="absolute-bottom-left index-2">
                        <div className="text-light p-5 pb-2">
                            <div className="mb-5 pb-3">
                                <h1 className="mb-2 display-4 font-weight-bold">Good Morning</h1>
                                <h5 className="font-weight-normal text-muted-transparent">Bali, Indonesia</h5>
                            </div>
                            Photo by <Link className="text-light bb" target="_blank" href="https://unsplash.com/photos/a8lTjWJJgLA">Justin Kauffman</Link> on <a class="text-light bb" target="_blank" href="https://unsplash.com">Unsplash</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
