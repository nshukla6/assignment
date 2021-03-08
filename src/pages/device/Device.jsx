import React from 'react';
import PageHeader from '../../components/header/Header';
import Cards from '../../layouts/cards/Cards';
import Bars from '../../layouts/bars/Bars';

import "./Device.css";
import DeviceList from '../../layouts/device-list/DeviceList';


const Device = () => {
    return (
        <div className="device_page" >
            <PageHeader title="Assets(Device) Report by NY Campus" placeholder="NY Campus" />
            <Cards />
            <DeviceList />
            <div className="device_bar">
                <Bars title="Associated Breach Method" />
            </div>
            
            
        </div>
    )
}

export default Device
