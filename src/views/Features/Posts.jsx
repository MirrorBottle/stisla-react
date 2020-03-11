import React, { Component } from 'react'
import Table from 'components/Table.jsx';
import moment from 'moment';
import { TitleFormatter, StatusFormatter } from 'components/TableFormatter.jsx';
export default class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            table_columns: [
                { dataField: 'title', text: 'Title', align: 'left', headerStyle: { width: 300 }, formatter: TitleFormatter },
                { dataField: 'category', text: 'Category' },
                { dataField: 'author', text: 'Author' },
                { dataField: 'created_at', text: 'Created At' },
                { dataField: 'status', text: 'Status', align: 'left', formatter: StatusFormatter },
            ],
            posts: [
                {
                    title: 'Laravel 5 Tutorial: Introduction',
                    category: 'Web Developer, Tutorial',
                    author: 'Rizal Fakhri',
                    created_at: moment().format('YYYY-DD-MM'),
                    status: 'pending',
                    status_color: 'warning'
                },
                {
                    title: 'Laravel 5 Tutorial: Installing',
                    category: 'Web Developer, Tutorial',
                    author: 'Rizal Fakhri',
                    created_at: moment().format('YYYY-DD-MM'),
                    status: 'completed',
                    status_color: 'primary'
                }
            ]
        }
    }
    render() {
        return (
            <React.Fragment>
                <h2 className="section-title">Posts</h2>
                <p className="section-lead">
                    You can manage all posts, such as editing, deleting and more.
                </p>

                <div className="row">
                    <div className="col-12">
                        <div className="card mb-0">
                            <div className="card-body">
                                <ul className="nav nav-pills">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#">All <span className="badge badge-white">5</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Draft <span className="badge badge-primary">1</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Pending <span className="badge badge-primary">1</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Trash <span className="badge badge-primary">0</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row mt-4">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                <h4>All Posts</h4>
                            </div>
                            <div class="card-body">
                                <div class="float-left">
                                    <select class="form-control selectric">
                                        <option>Action For Selected</option>
                                        <option>Move to Draft</option>
                                        <option>Move to Pending</option>
                                        <option>Delete Pemanently</option>
                                    </select>
                                </div>
                                <div class="float-right">
                                    <form>
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="Search" />
                                            <div class="input-group-append">
                                                <button class="btn btn-primary"><i class="fas fa-search"></i></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="clearfix mb-3"></div>
                                <Table columns={this.state.table_columns} data={this.state.posts} />
                            </div>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}
