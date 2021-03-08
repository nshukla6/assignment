import React from 'react'
import PageHeader from '../../components/header/Header';
import Bars from '../../layouts/bars/Bars';
import Cards from '../../layouts/cards/Cards';
import AssetHeatmap from '../../layouts/heatmap/assets/AssetHeatmap';
import DeploymentHeatmap from '../../layouts/heatmap/deployment/DeploymentHeatmap';
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <div className="dashboard-page" >
            <PageHeader title="Dashboard for Angel Bank" placeholder="type a word to search..." />
            <Cards />
            <AssetHeatmap title="Heatmap by Assets/Location" />
            <div className="dashboard_layer2">
                <DeploymentHeatmap title="Heatmap by deployment center" />
                <Bars title="Associated Breach Method" />
            </div>
            
        </div>
    )
}

export default Dashboard
