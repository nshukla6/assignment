import React from 'react'
import RiskInsightCard from '../../components/risk-insight-card/RiskInsightCard';
import chat from "../../components/svg/circle.svg";
import arrow from "../../components/svg/arrow-down.svg";
import key from "../../components/svg/key.svg";

import "./RiskInsights.css";

const RiskInsights = () => {
    return (
        <div className="risk_insights">
            <div className="risk_insights_heading">Top Risk Insights</div>
            <div className="risk_insights_cards">
                <RiskInsightCard assets="123" symbol={chat} arrow={arrow} text="Unpatched and vulnerable OS running on user assets"  />
                <RiskInsightCard assets="13" symbol={key} arrow={arrow} text="Unpatched and vulnerable OS running on user assets"  />
                <RiskInsightCard assets="123" symbol={chat} arrow={arrow} text="Unpatched and vulnerable OS running on user assets"  />
                <RiskInsightCard assets="123" symbol={chat} arrow={arrow} text="Unpatched and vulnerable OS running on user assets"  />
                <RiskInsightCard assets="123" symbol={chat} arrow={arrow} text="Unpatched and vulnerable OS running on user assets"  />
            </div>
            
        </div>
    )
}

export default RiskInsights
