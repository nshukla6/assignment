import React from 'react'
import Rectangle from '../../../components/rect/Rectangle';
import "./DeploymentHeatmap.css";
import cloud from "../../../components/svg/cloud.svg";
import users from "../../../components/svg/users.svg";
import building from "../../../components/svg/building.svg";
import keyboard from "../../../components/svg/keyboard.svg";

const DeploymentHeatmap = ({ title }) => {
    return (
        <div className="heatmap_deployment">
            <div className="heatmap_title">{title}</div>
            <div className="heatmap_deployment_body">
                <div className="center_risk">Risks</div>
                <div className="heatmap_deployment_grid">
                    <Rectangle src={cloud} color="white" backgroundColor="#873e23" likelihood="75" impact="45K" risk="56k" />
                    <Rectangle src={building} color="red" backgroundColor="#eeeee4" likelihood="75" impact="45K" risk="56k" />
                    <Rectangle src={users} color="red" backgroundColor="#eeeee4" likelihood="75" impact="45K" risk="56k" />
                    <Rectangle src={keyboard} color="white" backgroundColor="#eab676" likelihood="75" impact="45K" risk="56k" />
                </div>
            </div>
        </div>
    )
}

export default DeploymentHeatmap
