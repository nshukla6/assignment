import React from 'react';
import "./Card.css";

const Card = ({ title, subtitle, percentage, value }) => {
    return (
        <div className="card">
            <div className="card_header">
                <span>{title}</span>
                <span>({subtitle})</span>
            </div>
            <div className="card_body" >
                {percentage}
            </div>
            <div className="card_footer">
                {value}
            </div>
        </div>
    )
}

export default Card
