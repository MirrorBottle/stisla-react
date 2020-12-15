import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'assets/css/custom.css'

const { SearchBar } = Search;

const remoteTable = (props) => {
    const NoDataIndication = () => (
        <div className="m-3" style={{ color: '#b2b2b2' }}>
            <p className="text-center">Tidak ada data...</p>
        </div>
    );

    return (
        <ToolkitProvider
            keyField="id"
            data={props.data || ""}
            columns={props.columns}
            search
        >
            {
                tableProps => {
                    console.log(tableProps)
                    return (
                        <React.Fragment>
                            <div className="float-right">
                                <form>
                                    <div className="input-group">
                                        <SearchBar {...tableProps.searchProps} />
                                    </div>
                                </form>
                            </div>
                            <div className="clearfix mb-3"></div>
                            <BootstrapTable
                                {...tableProps.baseProps}
                                hover
                                bootstrap4
                                className="table-flush"
                                headerClasses="thead-light"
                                wrapperClasses="table-responsive"
                                bordered={false}
                                loading={props.isLoaded}
                                noDataIndication={() => <NoDataIndication />}
                                pagination={paginationFactory()}
                            />
                        </React.Fragment>

                    )
                }
            }
        </ToolkitProvider>
    )
}

export default remoteTable;