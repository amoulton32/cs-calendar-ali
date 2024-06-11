import React from 'react';
import './CalCell.css'

function CalCell(props) {
    return (
        <div className={`cell-block ${props.className}`}>{props.children}</div>
    );
}

export default CalCell;
