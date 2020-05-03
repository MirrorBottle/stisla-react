import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'assets/css/custom.css'
import PropTypes from 'prop-types';

const remoteTable = (props) => {
    const NoDataIndication = () => (
        <div className="m-3" style={{ color: '#b2b2b2' }}>
            <p className="text-center">Tidak ada data...</p>
        </div>
    );
    const handleClick = () => {
        props.data = props.data[0]
    }
    return (
        <div className="row">
            <div className="col-12 d-flex justify-content-end mb-3">
                <button className="btn btn-primary" onClick={handleClick}>Search</button>
            </div>
            <div className="col-12">
                <BootstrapTable
                    hover
                    bootstrap4
                    keyField='id'
                    data={props.data || []}
                    columns={props.columns}
                    className="table-flush"
                    headerClasses="thead-light"
                    wrapperClasses="table-responsive"
                    bordered={false}
                    loading={props.isLoaded}
                    noDataIndication={() => <NoDataIndication />}
                    pagination={!props.withoutPagination && paginationFactory({
                        page: Math.ceil((props.data ? props.data.length : 1) / 5),
                        sizePerPage: 5,
                        totalSize: (props.data ? props.data.length : 1),
                        sizePerPageList: [{
                            text: '5', value: 5
                        }, {
                            text: '10', value: 10
                        }, {
                            text: '20', value: 20
                        }, {
                            text: 'Tampilkan Semua', value: (props.data ? props.data.length : 0)
                        }]
                    })}
                    filter={filterFactory()}
                />
            </div>
        </div>
    )
}
remoteTable.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    withoutPagination: PropTypes.bool,
}

remoteTable.defaultProps = {
    withoutPagination: false
}
export default remoteTable;