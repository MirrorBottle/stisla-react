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

                <div className="row mt-4">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>All Posts</h4>
                            </div>
                            <div className="card-body">
                                <div className="float-left">
                                    <select className="form-control selectric">
                                        <option>Action For Selected</option>
                                        <option>Move to Draft</option>
                                        <option>Move to Pending</option>
                                        <option>Delete Pemanently</option>
                                    </select>
                                </div>
                                <div className="float-right">
                                    <form>
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search" />
                                            <div className="input-group-append">
                                                <button className="btn btn-primary"><i className="fas fa-search"></i></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="clearfix mb-3"></div>
                                <Table columns={this.state.table_columns} data={this.state.posts} />
                            </div>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}
