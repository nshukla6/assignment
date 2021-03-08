import React from 'react'
import PageHeader from '../../components/header/Header'
import Cards from '../../layouts/cards/Cards';
import LineChart from '../../layouts/chart/LineChart';
import "./Risk.css";

const Risk = () => {
    return (
        <div className="risk_page">
            <PageHeader title="Risk Trends" placeholder="NY Campus" />
            <Cards />
            <LineChart />
            
        </div>
    )
}

export default Risk
