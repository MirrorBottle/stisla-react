import React, { Component } from 'react'
import { Line } from 'rc-progress';
import { Link } from 'react-router-dom'
import moment from 'moment';
import { Editor } from '@tinymce/tinymce-react';
import {
    dashboard_card_icons,
    dashboard_recent_activites,
    dashboard_referrals,
    dashboard_products
} from 'data';

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            card_icons: dashboard_card_icons,
            recent_activities: dashboard_recent_activites,
            referrals: dashboard_referrals,
            products: dashboard_products
        }
        this.handleEditorChange = this.handleEditorChange.bind(this);
    }
    getTotalCustomers(products) {
        const customers = products.map(product => product.customer);
        const total = customers.filter((a, b) => customers.indexOf(a) === b).length
        return total;
    }
    getTotalCost(products) {
        const costs = products.map(product => product.cost);
        const total = costs.reduce((acc, item) => (acc += item), 0);
        return total
    }
    handleEditorChange(content, editor) {
        console.log('Content was updated:', content);
    }
    render() {
        const { card_icons, recent_activities, referrals, products } = this.state;
        return (
            <React.Fragment>
                <div className="row">
                    {card_icons.map(card => (
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="card card-statistic-1">
                                <div className={`card-icon bg-${card.background}`}>
                                    <i className={card.icon}></i>
                                </div>
                                <div className="card-wrap">
                                    <div className="card-header">
                                        <h4>{card.title}</h4>
                                    </div>
                                    <div className="card-body">
                                        {card.value}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>

                <div class="row">
                    <div class="col-lg-8 col-md-12 col-12 col-sm-12">
                        <div class="card">
                            <div class="card-header">
                                <h4>Statistics</h4>
                                <div class="card-header-action">
                                    <div class="btn-group">
                                        <Link to="/" class="btn btn-primary">Week</Link>
                                        <Link to="/" class="btn">Month</Link>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <canvas id="myChart" height="182"></canvas>
                                <div class="statistic-details mt-sm-4">
                                    <div class="statistic-details-item">
                                        <span class="text-muted"><span class="text-primary"><i class="fas fa-caret-up"></i></span> 7%</span>
                                        <div class="detail-value">$243</div>
                                        <div class="detail-name">Today's Sales</div>
                                    </div>
                                    <div class="statistic-details-item">
                                        <span class="text-muted"><span class="text-danger"><i class="fas fa-caret-down"></i></span> 23%</span>
                                        <div class="detail-value">$2,902</div>
                                        <div class="detail-name">This Week's Sales</div>
                                    </div>
                                    <div class="statistic-details-item">
                                        <span class="text-muted"><span class="text-primary"><i class="fas fa-caret-up"></i></span>9%</span>
                                        <div class="detail-value">$12,821</div>
                                        <div class="detail-name">This Month's Sales</div>
                                    </div>
                                    <div class="statistic-details-item">
                                        <span class="text-muted"><span class="text-primary"><i class="fas fa-caret-up"></i></span> 19%</span>
                                        <div class="detail-value">$92,142</div>
                                        <div class="detail-name">This Year's Sales</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 col-12 col-sm-12">
                        <div class="card">
                            <div class="card-header">
                                <h4>Recent Activities</h4>
                            </div>
                            <div class="card-body">
                                <ul class="list-unstyled list-unstyled-border">
                                    {recent_activities.map(recent => (
                                        <li class="media">
                                            <img class="mr-3 rounded-circle" width="50" src={require(`assets/img/avatar/${recent.image}`)} alt="avatar" />
                                            <div class="media-body">
                                                <div class="float-right text-primary">{moment(recent.time).fromNow(true)}</div>
                                                <div class="media-title">{recent.title}</div>
                                                <span class="text-small text-muted">{recent.context}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <div class="text-center pt-1 pb-1">
                                    <Link to="/" class="btn btn-primary btn-lg btn-round">
                                        View All
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-6 col-md-12 col-12 col-sm-12">
                        <div class="card">
                            <div class="card-body pt-2 pb-2">
                                <div id="myWeather">Please wait</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-12 col-sm-12">
                        <div class="card">
                            <div class="card-header">
                                <h4>Authors</h4>
                            </div>
                            <div class="card-body">
                                <div class="row pb-2">
                                    <div class="col-6 col-sm-3 col-lg-3 mb-4 mb-md-0">
                                        <div class="avatar-item mb-0">
                                            <img alt="authors" src={require('assets/img/avatar/avatar-5.png')} class="img-fluid" data-toggle="tooltip" title="Alfa Zulkarnain" />
                                            <div class="avatar-badge" title="Editor" data-toggle="tooltip"><i class="fas fa-wrench"></i></div>
                                        </div>
                                    </div>
                                    <div class="col-6 col-sm-3 col-lg-3 mb-4 mb-md-0">
                                        <div class="avatar-item mb-0">
                                            <img alt="authors" src={require('assets/img/avatar/avatar-4.png')} class="img-fluid" data-toggle="tooltip" title="Egi Ferdian" />
                                            <div class="avatar-badge" title="Admin" data-toggle="tooltip"><i class="fas fa-cog"></i></div>
                                        </div>
                                    </div>
                                    <div class="col-6 col-sm-3 col-lg-3 mb-4 mb-md-0">
                                        <div class="avatar-item mb-0">
                                            <img alt="authors" src={require('assets/img/avatar/avatar-1.png')} class="img-fluid" data-toggle="tooltip" title="Jaka Ramadhan" />
                                            <div class="avatar-badge" title="Author" data-toggle="tooltip"><i class="fas fa-pencil-alt"></i></div>
                                        </div>
                                    </div>
                                    <div class="col-6 col-sm-3 col-lg-3 mb-4 mb-md-0">
                                        <div class="avatar-item mb-0">
                                            <img alt="authors" src={require('assets/img/avatar/avatar-2.png')} class="img-fluid" data-toggle="tooltip" title="Ryan" />
                                            <div class="avatar-badge" title="Admin" data-toggle="tooltip"><i class="fas fa-cog"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-6 col-md-6 col-12">
                        <div class="card">
                            <div class="card-header">
                                <h4>Referral URL</h4>
                            </div>
                            <div class="card-body">
                                {referrals.map(referral => (
                                    <div class="mb-4">
                                        <div class="text-small float-right font-weight-bold text-muted">{referral.value} / 2500</div>
                                        <div class="font-weight-bold mb-1">{referral.title}</div>
                                        <Line percent={Math.floor(referral.value / 2500 * 100)} strokeWidth="2" strokeColor={('color' in referral) ? referral.color : '#6563DE'} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <h4>Popular Browser</h4>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col text-center">
                                        <div class="browser browser-chrome"></div>
                                        <div class="mt-2 font-weight-bold">Chrome</div>
                                        <div class="text-muted text-small"><span class="text-primary"><i class="fas fa-caret-up"></i></span> 48%</div>
                                    </div>
                                    <div class="col text-center">
                                        <div class="browser browser-firefox"></div>
                                        <div class="mt-2 font-weight-bold">Firefox</div>
                                        <div class="text-muted text-small"><span class="text-primary"><i class="fas fa-caret-up"></i></span> 26%</div>
                                    </div>
                                    <div class="col text-center">
                                        <div class="browser browser-safari"></div>
                                        <div class="mt-2 font-weight-bold">Safari</div>
                                        <div class="text-muted text-small"><span class="text-danger"><i class="fas fa-caret-down"></i></span> 14%</div>
                                    </div>
                                    <div class="col text-center">
                                        <div class="browser browser-opera"></div>
                                        <div class="mt-2 font-weight-bold">Opera</div>
                                        <div class="text-muted text-small">7%</div>
                                    </div>
                                    <div class="col text-center">
                                        <div class="browser browser-internet-explorer"></div>
                                        <div class="mt-2 font-weight-bold">IE</div>
                                        <div class="text-muted text-small"><span class="text-primary"><i class="fas fa-caret-up"></i></span> 5%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mt-sm-5 mt-md-0">
                            <div class="card-header">
                                <h4>Visitors</h4>
                            </div>
                            <div class="card-body">
                                <div id="visitorMap"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-12">
                        <div class="card">
                            <div class="card-header">
                                <h4>This Week Stats</h4>
                                <div class="card-header-action">
                                    <div class="dropdown">
                                        <a href="#" class="dropdown-toggle btn btn-primary" data-toggle="dropdown">Filter</a>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a href="#" class="dropdown-item has-icon"><i class="far fa-circle"></i> Electronic</a>
                                            <a href="#" class="dropdown-item has-icon"><i class="far fa-circle"></i> T-shirt</a>
                                            <a href="#" class="dropdown-item has-icon"><i class="far fa-circle"></i> Hat</a>
                                            <div class="dropdown-divider"></div>
                                            <a href="#" class="dropdown-item">View All</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="summary">
                                    <div class="summary-info">
                                        <h4>${this.getTotalCost(products)}</h4>
                                        <div class="text-muted">Sold {products.length} items on {this.getTotalCustomers(products)} customers</div>
                                        <div class="d-block mt-2">
                                            <Link href="#">View All</Link>
                                        </div>
                                    </div>
                                    <div class="summary-item">
                                        <h6>Item List <span class="text-muted">({products.length} Items)</span></h6>
                                        <ul class="list-unstyled list-unstyled-border">
                                            {products.map(product => (
                                                <li class="media">
                                                    <Link href="#">
                                                        <img class="mr-3 rounded" width="50" src={require(`assets/img/products/${product.image}`)} alt="product" />
                                                    </Link>
                                                    <div class="media-body">
                                                        <div class="media-right">${product.cost}</div>
                                                        <div class="media-title"><Link to="#">{product.name}</Link></div>
                                                        <div class="text-muted text-small">by <Link href="#">{product.customer}</Link> <div class="bullet"></div> {moment(product.time).format('dddd')}</div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <h4 class="d-inline">Tasks</h4>
                                <div class="card-header-action">
                                    <Link to="/" class="btn btn-primary">View All</Link>
                                </div>
                            </div>
                            <div class="card-body">
                                <ul class="list-unstyled list-unstyled-border">
                                    <li class="media">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="cbx-1" />
                                            <label class="custom-control-label" for="cbx-1"></label>
                                        </div>
                                        <img class="mr-3 rounded-circle" width="50" src="../assets/img/avatar/avatar-4.png" alt="avatar" />
                                        <div class="media-body">
                                            <div class="badge badge-pill badge-danger mb-1 float-right">Not Finished</div>
                                            <h6 class="media-title"><Link to='/'>Redesign header</Link></h6>
                                            <div class="text-small text-muted">Alfa Zulkarnain <div class="bullet"></div> <span class="text-primary">Now</span></div>
                                        </div>
                                    </li>
                                    <li class="media">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="cbx-2" checked="" />
                                            <label class="custom-control-label" for="cbx-2"></label>
                                        </div>
                                        <img class="mr-3 rounded-circle" width="50" src="../assets/img/avatar/avatar-5.png" alt="avatar" />
                                        <div class="media-body">
                                            <div class="badge badge-pill badge-primary mb-1 float-right">Completed</div>
                                            <h6 class="media-title"><Link to='/'>Add a new component</Link></h6>
                                            <div class="text-small text-muted">Serj Tankian <div class="bullet"></div> 4 Min</div>
                                        </div>
                                    </li>
                                    <li class="media">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="cbx-3" />
                                            <label class="custom-control-label" for="cbx-3"></label>
                                        </div>
                                        <img class="mr-3 rounded-circle" width="50" src="../assets/img/avatar/avatar-2.png" alt="avatar" />
                                        <div class="media-body">
                                            <div class="badge badge-pill badge-warning mb-1 float-right">Progress</div>
                                            <h6 class="media-title"><Link to='/'>Fix modal window</Link></h6>
                                            <div class="text-small text-muted">Ujang Maman <div class="bullet"></div> 8 Min</div>
                                        </div>
                                    </li>
                                    <li class="media">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="cbx-4" />
                                            <label class="custom-control-label" for="cbx-4"></label>
                                        </div>
                                        <img class="mr-3 rounded-circle" width="50" src="../assets/img/avatar/avatar-1.png" alt="avatar" />
                                        <div class="media-body">
                                            <div class="badge badge-pill badge-danger mb-1 float-right">Not Finished</div>
                                            <h6 class="media-title"><Link to='/'>Remove unwanted classes</Link></h6>
                                            <div class="text-small text-muted">Farhan A Mujib <div class="bullet"></div> 21 Min</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-5 col-md-12 col-12 col-sm-12">
                        <form method="post" class="needs-validation" novalidate="">
                            <div class="card">
                                <div class="card-header">
                                    <h4>Quick Draft</h4>
                                </div>
                                <div class="card-body pb-0">
                                    <div class="form-group">
                                        <label>Title</label>
                                        <input type="text" name="title" class="form-control" required />
                                        <div class="invalid-feedback">
                                            Please fill in the title
                                    </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Content</label>
                                        <Editor
                                            initialValue="<p>This is the initial content of the editor</p>"
                                            init={{
                                                height: 300,
                                                menubar: false,
                                                plugins: [
                                                    'advlist autolink lists link image charmap print preview anchor',
                                                    'searchreplace visualblocks code fullscreen',
                                                    'insertdatetime media table paste code help wordcount'
                                                ],
                                                toolbar:
                                                    'undo redo | formatselect | bold italic backcolor | \
                                                    alignleft aligncenter alignright alignjustify | \
                                                    bullist numlist outdent indent | removeformat | help'
                                            }}
                                            onEditorChange={this.handleEditorChange}
                                        />
                                    </div>
                                </div>
                                <div class="card-footer pt-0">
                                    <button class="btn btn-primary">Save Draft</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-7 col-md-12 col-12 col-sm-12">
                        <div class="card">
                            <div class="card-header">
                                <h4>Latest Posts</h4>
                                <div class="card-header-action">
                                    <Link to="/" class="btn btn-primary">View All</Link>
                                </div>
                            </div>
                            <div class="card-body p-0">
                                <div class="table-responsive">
                                    <table class="table table-striped mb-0">
                                        <thead>
                                            <tr>
                                                <th>Title</th>
                                                <th>Author</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    Introduction Laravel 5
                                                    <div class="table-links">
                                                        in <a href="#">Web Development</a>
                                                        <div class="bullet"></div>
                                                        <a href="#">View</a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#" class="font-weight-600"><img src="../assets/img/avatar/avatar-1.png" alt="avatar" width="30" class="rounded-circle mr-1" /> Bagus Dwi Cahya</a>
                                                </td>
                                                <td>
                                                    <a class="btn btn-primary btn-action mr-1" data-toggle="tooltip" title="Edit"><i class="fas fa-pencil-alt"></i></a>
                                                    <a class="btn btn-danger btn-action" data-toggle="tooltip" title="Delete" data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?" data-confirm-yes="alert('Deleted')"><i class="fas fa-trash"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Laravel 5 Tutorial - Installation
                            <div class="table-links">
                                                        in <a href="#">Web Development</a>
                                                        <div class="bullet"></div>
                                                        <a href="#">View</a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#" class="font-weight-600"><img src="../assets/img/avatar/avatar-1.png" alt="avatar" width="30" class="rounded-circle mr-1" /> Bagus Dwi Cahya</a>
                                                </td>
                                                <td>
                                                    <a class="btn btn-primary btn-action mr-1" data-toggle="tooltip" title="Edit"><i class="fas fa-pencil-alt"></i></a>
                                                    <a class="btn btn-danger btn-action" data-toggle="tooltip" title="Delete" data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?" data-confirm-yes="alert('Deleted')"><i class="fas fa-trash"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Laravel 5 Tutorial - MVC
                            <div class="table-links">
                                                        in <a href="#">Web Development</a>
                                                        <div class="bullet"></div>
                                                        <a href="#">View</a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#" class="font-weight-600"><img src="../assets/img/avatar/avatar-1.png" alt="avatar" width="30" class="rounded-circle mr-1" /> Bagus Dwi Cahya</a>
                                                </td>
                                                <td>
                                                    <a class="btn btn-primary btn-action mr-1" data-toggle="tooltip" title="Edit"><i class="fas fa-pencil-alt"></i></a>
                                                    <a class="btn btn-danger btn-action" data-toggle="tooltip" title="Delete" data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?" data-confirm-yes="alert('Deleted')"><i class="fas fa-trash"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Laravel 5 Tutorial - Migration
                            <div class="table-links">
                                                        in <a href="#">Web Development</a>
                                                        <div class="bullet"></div>
                                                        <a href="#">View</a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#" class="font-weight-600"><img src="../assets/img/avatar/avatar-1.png" alt="avatar" width="30" class="rounded-circle mr-1" /> Bagus Dwi Cahya</a>
                                                </td>
                                                <td>
                                                    <a class="btn btn-primary btn-action mr-1" data-toggle="tooltip" title="Edit"><i class="fas fa-pencil-alt"></i></a>
                                                    <a class="btn btn-danger btn-action" data-toggle="tooltip" title="Delete" data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?" data-confirm-yes="alert('Deleted')"><i class="fas fa-trash"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Laravel 5 Tutorial - Deploy
                            <div class="table-links">
                                                        in <a href="#">Web Development</a>
                                                        <div class="bullet"></div>
                                                        <a href="#">View</a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#" class="font-weight-600"><img src="../assets/img/avatar/avatar-1.png" alt="avatar" width="30" class="rounded-circle mr-1" /> Bagus Dwi Cahya</a>
                                                </td>
                                                <td>
                                                    <a class="btn btn-primary btn-action mr-1" data-toggle="tooltip" title="Edit"><i class="fas fa-pencil-alt"></i></a>
                                                    <a class="btn btn-danger btn-action" data-toggle="tooltip" title="Delete" data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?" data-confirm-yes="alert('Deleted')"><i class="fas fa-trash"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Laravel 5 Tutorial - Closing
                            <div class="table-links">
                                                        in <a href="#">Web Development</a>
                                                        <div class="bullet"></div>
                                                        <a href="#">View</a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#" class="font-weight-600"><img src="../assets/img/avatar/avatar-1.png" alt="avatar" width="30" class="rounded-circle mr-1" /> Bagus Dwi Cahya</a>
                                                </td>
                                                <td>
                                                    <a class="btn btn-primary btn-action mr-1" data-toggle="tooltip" title="Edit"><i class="fas fa-pencil-alt"></i></a>
                                                    <a class="btn btn-danger btn-action" data-toggle="tooltip" title="Delete" data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?" data-confirm-yes="alert('Deleted')"><i class="fas fa-trash"></i></a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
