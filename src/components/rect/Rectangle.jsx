import React from 'react';
import "./Rectangle.css";

const Rectangle = ({ likelihood, impact, risk, color, backgroundColor, src }) => {
    return (
        <div className="rectangle_outer" style={{ backgroundColor: `${backgroundColor}`, padding: "20px", width: "250px" }}>
            <img src={src} alt="icon" />
            <div className="rectangle" >
                <div className="rectangle_title">
                    <span className="title_header">Likelihood</span>
                    <span className="title_value" style={{ color: `${color}` }}>{likelihood} %</span>
                </div>
                <div className="rectangle_title">
                    <span className="title_header">Impact</span>
                    <span className="title_value" style={{ color: `${color}` }}>{impact} units</span>
                </div>
                <div className="rectangle_title">
                    <span className="title_header">Risk</span>
                    <span className="title_value" style={{ color: `${color}` }}>{risk} units</span>
                </div>
            </div>
        </div>

    )
}

export default Rectangle
