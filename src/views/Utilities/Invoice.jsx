import React, { Component } from 'react'
import moment from 'moment';
import Table from './../../components/Table.jsx';
import { utilities_invoice as data } from 'data.js';
import 'moment/locale/id';
export default class Invoice extends Component {
    render() {
        const subtotal = data.order_items.map(item => item.price * item.quantity).reduce((acc, item) => (acc += item), 0).toFixed(2);
        return (
            <div className="invoice">
                <div className="invoice-print">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="invoice-title">
                                <h2>Invoice</h2>
                                <div className="invoice-number">Order #{data.order_id}</div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-md-6">
                                    <address>
                                        <strong>Billed To:</strong><br />
                                        {data.billed.name}<br />
                                        {data.billed.address.split(', ')[0]}<br />
                                        {data.billed.address.split(', ')[1]}<br />
                                        {data.billed.address.split(', ')[2]}, {data.billed.address.split(', ')[3]}
                                    </address>
                                </div>
                                <div className="col-md-6 text-md-right">
                                    <address>
                                        <strong>Shipped To:</strong><br />
                                        {data.shipped.name}<br />
                                        {data.shipped.address.split(', ')[0]}<br />
                                        {data.shipped.address.split(', ')[1]}<br />
                                        {data.shipped.address.split(', ')[2]}, {data.shipped.address.split(', ')[3]}
                                    </address>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <address>
                                        <strong>Payment Method:</strong><br />
                                        Visa ending **** 4242<br />
                                        ujang@maman.com
                                    </address>
                                </div>
                                <div className="col-md-6 text-md-right">
                                    <address>
                                        <strong>Order Date:</strong><br />
                                        {moment(data.date).locale('id').format('MMMM DD, YYYY')}<br /><br />
                                    </address>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-12">
                            <div className="section-title">Order Summary</div>
                            <p className="section-lead">All items here cannot be deleted.</p>
                            <div className="table-responsive">
                                <Table withoutPagination columns={data.order_columns} data={data.order_items} />
                            </div>
                            <div className="row mt-4">
                                <div className="col-lg-8">
                                    <div className="section-title">Payment Method</div>
                                    <p className="section-lead">The payment method that we provide is to make it easier for you to pay invoices.</p>
                                    <div className="d-flex">
                                        <div className="mr-2 bg-visa" style={{ height: '38px', width: '61px' }}></div>
                                        <div className="mr-2 bg-jcb" style={{ height: '38px', width: '61px' }}></div>
                                        <div className="mr-2 bg-mastercard" style={{ height: '38px', width: '61px' }}></div>
                                        <div className="bg-paypal" style={{ height: '38px', width: '61px' }}></div>
                                    </div>
                                </div>
                                <div className="col-lg-4 text-right">
                                    <div className="invoice-detail-item">
                                        <div className="invoice-detail-name">Subtotal</div>
                                        <div className="invoice-detail-value">${subtotal}</div>
                                    </div>
                                    <div className="invoice-detail-item">
                                        <div className="invoice-detail-name">Shipping</div>
                                        <div className="invoice-detail-value">${data.shipping_fee}</div>
                                    </div>
                                    <hr className="mt-2 mb-2" />
                                    <div className="invoice-detail-item">
                                        <div className="invoice-detail-name">Total</div>
                                        <div className="invoice-detail-value invoice-detail-value-lg">${(+subtotal + data.shipping_fee).toFixed(2)}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="text-md-right">
                    <div className="float-lg-left mb-lg-0 mb-3">
                        <button className="btn btn-primary btn-icon icon-left mr-2"><i className="fas fa-credit-card"></i> Process Payment</button>
                        <button className="btn btn-danger btn-icon icon-left"><i className="fas fa-times"></i> Cancel</button>
                    </div>
                    <button className="btn btn-warning btn-icon icon-left"><i className="fas fa-print"></i> Print</button>
                </div>
            </div>
        )
    }
}
