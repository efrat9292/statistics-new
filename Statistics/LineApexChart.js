import React from 'react';
import moment from 'moment';
import ReactApexChart from 'react-apexcharts'
import { useSelector } from 'react-redux'
export default function LineApexChart() {
    const UpdatedData = useSelector(state => state.staticDetailsReducer);
    const dayClicked = useSelector(state => state.staticDetailsReducer.dayIsClicked)
    const monthClicked = useSelector(state => state.staticDetailsReducer.monthIsClicked)
    const weekClicked = useSelector(state => state.staticDetailsReducer.weekIsClicked)
    console.log("day", dayClicked);
    console.log("month", monthClicked);
    console.log("week", weekClicked);
    const state = {
        series: [

            {
                name: "Viewers",
                data: [UpdatedData.viewers[1], UpdatedData.viewers[2], UpdatedData.viewers[3], UpdatedData.viewers[4], UpdatedData.viewers[5], UpdatedData.viewers[6], UpdatedData.viewers[7], UpdatedData.viewers[8], UpdatedData.viewers[9], UpdatedData.viewers[10], UpdatedData.viewers[11], UpdatedData.viewers[12]]
            },
            {
                name: "Clicks",
                data: [UpdatedData.clicks[1], UpdatedData.clicks[2], UpdatedData.clicks[3], UpdatedData.clicks[4], UpdatedData.clicks[5], UpdatedData.clicks[6], UpdatedData.clicks[7], UpdatedData.clicks[8], UpdatedData.clicks[9], UpdatedData.clicks[10], UpdatedData.clicks[11], UpdatedData.clicks[12]]
            },

            {
                name: "Leads",
                data: [UpdatedData.leads[1], UpdatedData.leads[2], UpdatedData.leads[3], UpdatedData.leads[4], UpdatedData.leads[5], UpdatedData.leads[6], UpdatedData.leads[7], UpdatedData.leads[8], UpdatedData.leads[9], UpdatedData.leads[10], UpdatedData.leads[11], UpdatedData.leads[12]]
            },
            {
                name: "Calls",
                data: [UpdatedData.calls[1], UpdatedData.calls[2], UpdatedData.calls[3], UpdatedData.calls[4], UpdatedData.calls[5], UpdatedData.calls[6], UpdatedData.calls[7], UpdatedData.calls[8], UpdatedData.calls[9], UpdatedData.calls[10], UpdatedData.calls[11], UpdatedData.calls[12]]
            }

        ],
        monthOption: {
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
                    // opacity: 0.5
                },
                column: {
                    colors: undefined,
                    // opacity: 0.5
                },
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
            },
            chart: {
                background: '#fff',
                height: 350,
                // type: 'area'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                // lineCap: 'butt',
                width: 3,
            },

            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May',
                    'Jun', 'jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            },
            legend: {

            },


            fill: {
                colors: undefined,
                opacity: 0.9,
                type: 'gradient',
                gradient: {
                    shade: 'light',
                    type: "diagonal1",


                },
            },

            markers: {
                size: 0,
                hover: {
                    sizeOffset: 6
                }
            },

        },
        weekOption: {
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
                    // opacity: 0.5
                },
                column: {
                    colors: undefined,
                    // opacity: 0.5
                },
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
            },
            chart: {
                background: '#fff',
                height: 350,
                // type: 'area'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                // lineCap: 'butt',
                width: 3,
            },

            xaxis: {
                categories: ['sun', 'mon', 'tues', 'wed', 'thurs',
                'fri', 'satur'],
            },
            legend: {

            },


            fill: {
                colors: undefined,
                opacity: 0.9,
                type: 'gradient',
                gradient: {
                    shade: 'light',
                    type: "diagonal1",


                },
            },

            markers: {
                size: 0,
                hover: {
                    sizeOffset: 6
                }
            },

        },
        dayOption: {
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
                    // opacity: 0.5
                },
                column: {
                    colors: undefined,
                    // opacity: 0.5
                },
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
            },
            chart: {
                background: '#fff',
                height: 350,
                // type: 'area'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                // lineCap: 'butt',
                width: 3,
            },

            xaxis: {
                categories: ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'],
            },
            legend: {

            },


            fill: {
                colors: undefined,
                opacity: 0.9,
                type: 'gradient',
                gradient: {
                    shade: 'light',
                    type: "diagonal1",


                },
            },

            markers: {
                size: 0,
                hover: {
                    sizeOffset: 6
                }
            },

        },
    };
    return (
        <>
            {weekClicked ?
                <ReactApexChart options={state.weekOption} series={state.series} type="line" />
                : monthClicked ?  <ReactApexChart options={state.monthOption} series={state.series} type="line" /> :
                    dayClicked ?  <ReactApexChart options={state.dayOption} series={state.series} type="line" />: ""}
        </>
    );
}