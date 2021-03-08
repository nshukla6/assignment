import React from 'react'
import Bar from '../../components/bar/Bar';
import "./Bars.css";

const Bars = ({title}) => {
    return (
        <div className="bars_container">
            <div className="bars_title">{title}</div>
            <div>
                <Bar title="Password" value="23" />
                <Bar title="Unpatched Assets" value="45" />
                <Bar title="Phising" value="56" />
                <Bar title="Poor Encryption" value="56" />
            </div>
        </div>
    )
}

export default Bars
