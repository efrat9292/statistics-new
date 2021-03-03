
import React, { useEffect } from 'react';
import ReactApexChart from 'react-apexcharts'
import Chart from "react-apexcharts";
import { useSelector } from 'react-redux';
import GoogleMapReact from 'google-map-react';

export default function SimpleMap() {
    const AnyReactComponent = ({ text }) => <div className="mark">{text}</div>;
    let ip = useSelector(state => state.card.currentCard.ips)
    debugger;
    console.log("ip from " + ip)
    const defaultProps = {
        center: {
            lat: 32,
            lng: 34
        },
        zoom: 11
    };
    return (
        <div className="mapSize">
            <GoogleMapReact
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <marker></marker>
                {ip?ip.map((item, index) => (
                    <AnyReactComponent
                        lat={item.ll[0]}
                        lng={item.ll[1]}
                        text="*"
                    />
                )):""}
            </GoogleMapReact>
        </div>
    );
}
