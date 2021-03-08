import React from 'react';
import "./Header.css";

const PageHeader = ({ title, placeholder }) => {
    return (
        <div className="page_header">
            <div className="page_title">{title}</div>
            <input className="page_input" placeholder={placeholder} />
        </div>
    )
}

export default PageHeader
