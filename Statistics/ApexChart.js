
import React from 'react';
import ReactApexChart from 'react-apexcharts'
import { useSelector } from 'react-redux'
export default function ApexChart() {
    debugger
    const UpdatedData = useSelector(state => state.staticDetailsReducer);
    console.log(UpdatedData.dataStatic);
    const state = {
        series: [{
            name: " ",
            data: [UpdatedData.sumStatic.viewer,
            UpdatedData.sumStatic.contactOptions,
            UpdatedData.sumStatic.submitioms,
            UpdatedData.dataStatic[3]?UpdatedData.dataStatic[3].summary:"0"]
        }],
        options: {
            grid: {
                show: true,
                borderColor: '#90A4AE',
                strokeDashArray: 0,
                position: 'back',
                xaxis: {
                    lines: {
                        show: false
                    }
                },
                yaxis: {
                    lines: {
                        show: false
                    }
                },
                row: {
                    colors: undefined,
                    opacity: 0.5
                },
                column: {
                    colors: undefined,
                    opacity: 0.5
                },
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
            },
            chart: {
                type: 'bar',
            },
            colors: ['rgb(247, 181, 0)', 'rgb(1, 220, 209)', 'rgb(103, 114, 222)', 'rgb(253, 81, 219)'],
            plotOptions: {
                bar: {
                    borderRadius: 6,
                    columnWidth: '50%',
                    distributed: true,
                }
            },
            labels: [' Viewers', ' Clicks', 'Leads ', 'Calls'],
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            },
            xaxis: {

                labels: {
                    style: {
                        fontSize: '12px'
                    }
                }
            }
        },
    };

    return (
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="bar" />
        </div>
    );
}

