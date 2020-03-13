import React from 'react'
import ToasterNotification from './../../components/ToasterNotification.jsx';
export default function Toaster() {
    return (
        <React.Fragment>
            <h2 class="section-title">Toastr</h2>
            <p class="section-lead">
                We use 'iziToast' made by @Dolce. You can check the full documentation <a href="https://izitoast.marcelodolza.com/">here</a>.
            </p>
            <div class="row">
                <div class="col-12 col-sm-6 col-lg-3">
                    <div class="card">
                        <div class="card-body text-center">
                            <div class="mb-2">Info Message</div>
                            <button class="btn btn-primary" id="toastr-1" onClick={() => ToasterNotification()}>Launch</button>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3">
                    <div class="card">
                        <div class="card-body text-center">
                            <div class="mb-2">Success Message</div>
                            <button class="btn btn-primary" id="toastr-2">Launch</button>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3">
                    <div class="card">
                        <div class="card-body text-center">
                            <div class="mb-2">Warning Message</div>
                            <button class="btn btn-primary" id="toastr-3">Launch</button>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3">
                    <div class="card">
                        <div class="card-body text-center">
                            <div class="mb-2">Error Message</div>
                            <button class="btn btn-primary" id="toastr-4">Launch</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-sm-6 col-lg-3">
                    <div class="card">
                        <div class="card-body text-center">
                            <div class="mb-2">Toastr Right Bottom</div>
                            <button class="btn btn-primary" id="toastr-5">Launch</button>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3">
                    <div class="card">
                        <div class="card-body text-center">
                            <div class="mb-2">Toastr Center Bottom</div>
                            <button class="btn btn-primary" id="toastr-6">Launch</button>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3">
                    <div class="card">
                        <div class="card-body text-center">
                            <div class="mb-2">Toastr Left Bottom</div>
                            <button class="btn btn-primary" id="toastr-7">Launch</button>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3">
                    <div class="card">
                        <div class="card-body text-center">
                            <div class="mb-2">Toastr Top Center</div>
                            <button class="btn btn-primary" id="toastr-8">Launch</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
