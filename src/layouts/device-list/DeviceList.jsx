import React from 'react';
import "./DeviceList.css";
import kebab from "../../components/svg/kebab.svg";
import rightArrow from "../../components/svg/arrow-right.svg";
import PageHeader from '../../components/header/Header';
import RolesTags from '../../components/roles-tags/RolesTags';


const headers = ["Device", "Mac Address", "User", "Role & Tags", "Risk", "Breach Likelihood", "Impact"]

const devices = [

    { device:"DESKTOP-321", mac: "123.324.4234.4", name:"Swathi Chinthapalli", comp:"comp", risk:34, breach:88, impact:0.2},
    { device:"DESKTOP-321", mac: "123.324.4234.4", name:"Burij Pithawala", comp:"comp", risk:34, breach:88, impact:0.2},
    { device:"DESKTOP-321", mac: "123.324.4234.4", name:"Shivam Mandalam", comp:"comp", risk:34, breach:88, impact:0.2},
    { device:"DESKTOP-321", mac: "123.324.4234.4", name:"Sobhan Dutta", comp:"comp", risk:34, breach:88, impact:0.2},
    { device:"DESKTOP-321", mac: "123.324.4234.4", name:"John Doe", comp:"comp", risk:34, breach:88, impact:0.2},
]

const DeviceList = () => {
    return (
        <div className="device_list">
            <PageHeader title="Device List" placeholder="Desktops" />
            <div className="device_list_grid">
                {
                    headers.map(header => <div key={header} className="col device">{header}</div>)
                }
                {
                    devices.map(device => (
                        <React.Fragment key={device.name}>
                            <div className="col device1">
                                <img src={rightArrow} alt="arrow"/>
                                <div>{device.device}</div>
                            </div>
                            <div className="col device1">{device.mac}</div>
                            <div className="col device1">{device.name}</div>
                            <div className="col"> <RolesTags /> </div>
                            <div className="col device1 risk">{device.risk}</div>
                            <div className="col device1 breach">{device.breach}</div>
                            <div className="col device1 impact">
                                <div >{device.impact}</div>
                                <img src={kebab} alt="kebab" />
                            </div>
                            
                        </React.Fragment>
                    ))
                }
            </div>
        </div>

    )
}

export default DeviceList
