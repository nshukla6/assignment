import React from 'react';
import "./AssetHeatmap.css";

const AssetHeatmap = ({ title }) => {
    const cols = ["", "Cloud/s", "DataCenter", "Remote Users", "Campus", "Branch", "More"];
    const userRow = [
        { id: 1, color: "#cce7e8", radius: 1 },
        { id: 2, color: "#e07b39", radius: 1 },
        { id: 3, color: "#cce7e8", radius: 1 },
        { id: 4, color: "#edb06b", radius: 1 },
        { id: 5, color: "#edb06b", radius: 2 },
        { id: 6, color: "#cce7e8", radius: 1 }
    ];
    const appsRow = [
        { id: 1, color: "#e07b39", radius: 1 },
        { id: 2, color: "#cce7e8", radius: 2},
        { id: 3, color: "#cce7e8", radius: .8 },
        { id: 4, color: "#edb06b", radius: 1 },
        { id: 5, color: "#e07b39", radius: 1 },
        { id: 6, color: "#edb06b", radius: 1 }
    ];
    const devicesRow = [
        { id: 1, color: "#edb06b", radius: 1.3 },
        { id: 2, color: "#edb06b", radius: 1 },
        { id: 3, color: "#e07b39", radius: 1 },
        { id: 4, color: "#e07b39", radius: 1 },
        { id: 5, color: "#edb06b", radius: 0.8 },
        { id: 6, color: "#cce7e8", radius: 2 }
    ];
    const dataRow = [
        { id: 1, color: "#e07b39", radius: 1 },
        { id: 2, color: "#cce7e8", radius: 1 },
        { id: 3, color: "#cce7e8", radius: 1 },
        { id: 4, color: "#edb06b", radius: 1 },
        { id: 5, color: "#edb06b", radius: 2 },
        { id: 6, color: "#cce7e8", radius: 1 }
    ];
    const moreRow = [
        { id: 1, color: "#e07b39", radius: 2 },
        { id: 2, color: "#cce7e8", radius: 1 },
        { id: 3, color: "#e07b39", radius: 1 },
        { id: 4, color: "#cce7e8", radius: 1 },
        { id: 5, color: "#edb06b", radius: 1.2 },
        { id: 6, color: "#e07b39", radius: 1 }
    ];

    return (
        <div className="asset_heatmap">
            <div className="asset_heatmap_title">{title}</div>
            <div className="asset_heatmap_grid">

                {
                    cols.map(col => <div key={col} className="col header">{col}</div>)
                }
                <div className="col">Users</div>
                {
                    userRow.map(user =>
                        <div className="col users"
                            key={user.id}>
                            <div style={{
                                height: `${25 * user.radius}px`,
                                width: `${25 * user.radius}px`,
                                backgroundColor: `${user.color}`,
                                borderRadius: "100%",
                            }}
                            >

                            </div>
                        </div>)
                }

                <div className="col">Apps</div>
                {
                    appsRow.map(app =>
                        <div className="col apps"
                            key={app.id}>
                            <div style={{
                                height: `${25 * app.radius}px`,
                                width: `${25 * app.radius}px`,
                                backgroundColor: `${app.color}`,
                                borderRadius: "100%",
                            }}
                            >

                            </div>
                        </div>)
                }

                <div className="col">Devices</div>
                {
                    devicesRow.map(device =>
                        <div className="col users"
                            key={device.id}>
                            <div style={{
                                height: `${25 * device.radius}px`,
                                width: `${25 * device.radius}px`,
                                backgroundColor: `${device.color}`,
                                borderRadius: "100%",
                            }}
                            >

                            </div>
                        </div>)
                }


                <div className="col">Devices</div>
                {
                    dataRow.map(data =>
                        <div className="col users"
                            key={data.id}>
                            <div style={{
                                height: `${25 * data.radius}px`,
                                width: `${25 * data.radius}px`,
                                backgroundColor: `${data.color}`,
                                borderRadius: "100%",
                            }}
                            >

                            </div>
                        </div>)
                }

                <div className="col">more</div>
                {
                    moreRow.map(more =>
                        <div className="col users"
                            key={more.id}>
                            <div style={{
                                height: `${25 * more.radius}px`,
                                width: `${25 * more.radius}px`,
                                backgroundColor: `${more.color}`,
                                borderRadius: "100%",
                            }}
                            >

                            </div>
                        </div>)
                }

            </div>
        </div>
    )
}

export default AssetHeatmap
