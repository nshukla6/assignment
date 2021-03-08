import React from 'react'
import Card from '../../components/card/Card';
import "./Cards.css";

const Cards = () => {
    return (
        <div className="dashboard_card">
            <Card title="Risk Score" subtitle="Assets" percentage="54%" value="232k/500k"  />
            <Card title="Risk Score" subtitle="Users" percentage="34%" value="289k/500k"  />
            <Card title="Risk Score" subtitle="Apps" percentage="21%" value="380k/500k"  />
            <Card title="Risk Score" subtitle="Devices" percentage="62%" value="210k/500k"  />
            <Card title="Risk Score" subtitle="Devices" percentage="59%" value="232k/500k"  />
        </div>
    )
}

export default Cards
