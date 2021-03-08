import React from 'react';
import "./Bar.css";

const Bar = ({ title, value }) => {
    return (
        <div className="breach" >
            <div className="bar title">{title}</div>
            <div className="bar value" style={{width:`${value}%`}}>{value}K Units</div>
            <div className="bar" style={{width:`${100-value}%`}}></div>
        </div>
    )
}

export default Bar
