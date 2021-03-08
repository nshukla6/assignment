import React from 'react';
import "./RiskInsightCard.css";
import star from "../svg/star-fill.svg"

const RiskInsightCard = ({ text, symbol, arrow , assets}) => {
    return (
        <div className="risk_insight_card">
            <div className="risk_insight_card_body">
                <img src={symbol} className="symbol" alt="symbol" />
                <div className="risk_text">{text}</div>
                <img src={arrow} className="arrow" alt="arrow" />
            </div>
            <div className="risk_insight_card_footer">
                <div className="assets">{assets} assets</div>
                <img src={star} className="star" alt="star" />
            </div>
            
        </div>
    )
}

export default RiskInsightCard
