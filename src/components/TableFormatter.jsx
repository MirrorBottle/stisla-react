import React from 'react';
import { Link } from 'react-router-dom';


// Title Formatter
export const TitleFormatter = (cell, row, rowIndex, formatExtraData) => {
    return (
        <>
            <span>{row.title}</span>
            <div className="table-links" >
                <Link to='/'>View</Link>
                <div className="bullet"></div>
                <Link to='/'>Edit</Link>
                <div className="bullet"></div>
                <Link to='/' className="text-danger">Trash</Link>
            </div>
        </>
    )
}



// Status Formatter
export const StatusFormatter = (cell, row, rowIndex, formatExtraData) => {
    return <div className={`badge text-capitalize badge-${row.status_color}`}>{row.status}</div>
}