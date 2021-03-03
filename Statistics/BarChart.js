import React, { useEffect } from 'react';
import ReactApexChart from 'react-apexcharts'
import Chart from "react-apexcharts";
import { useSelector } from 'react-redux';
import SimpleMap from './SimpleMap';

export default function BarChart() {
    const state = {
        op1: {
            chart: {
                zoom: { enabled: false },
                height: 350,
                type: "line",
                stacked: false
            },
            dataLabels: {
                enabled: false
            },
            colors: [' rgb(247, 181, 0)', 'rgb(1, 220, 209)', 'rgb(103, 114, 222)', 'rgb(253, 81, 219)'],

            stroke: {
                width: [5, 5, 5, 5]
            },
            xaxis: {
                categories: ['Jan', 'feb', 'marth', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dic'],
            },
            yaxis: [
                {
                    axisTicks: {
                        show: true
                    },
                    axisBorder: {
                        show: true,
                    },
                    // labels: {
                    //     style: {
                    //         colors: "#FF1654"
                    //     }
                    // },

                },

            ],
            //the plase of labels
            legend: {
                horizontalAlign: "left",
                offsetX: 40
            }
        },
        series: [

            {
                // leaderStatic:{sumProjects:0,sumTasks:0,sumPapers:0,sumContacts:0},
                name: "",
                // data:[{x: "2019-01-03", y: UpdatedData.leaderStatic.sumProjects}, {x: "2019-01-04", y: 18}]
                data: [30,
                40,
                10,
                40]


            },

        ],
        options:
        {
            colors: ['rgb(1, 220, 209)', 'rgb(103, 114, 222)', 'rgb(253, 81, 219)', ' rgb(247, 181, 0)'],


            chart: {
                type: 'line',
                zoom: {
                    enabled: false
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: [5, 7, 5],
                curve: 'straight',
                dashArray: [0, 8, 5]
            },
            legend: {
                tooltipHoverFormatter: function (val, opts) {
                    return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
                }
            },
            xaxis: {


                categories: [' contacts', ' papers', 'projects ', 'tasks'],


            },
            tooltip: {
                y: [
                    {
                        title: {
                            formatter: function (val) {
                                return val;
                            }
                        }
                    },
                    {
                        title: {
                            formatter: function (val) {
                                return val + " per session"
                            }
                        }
                    },
                ]
            },
        },


    }
    return (
        <div className="container" >
            <div className="col col-6">
                <ReactApexChart options={state.options} series={state.series} type="bar" width="420" />
            </div>
        </div>
    );
}