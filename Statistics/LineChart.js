
import React, { useEffect } from 'react';
import ReactApexChart from 'react-apexcharts'
import Chart from "react-apexcharts";
import { useSelector,useDispatch } from 'react-redux';
import moment from 'moment';
import { actions } from '../../Redux/actions/Action';

export default function LineChart() {
    debugger
    const currentDate = moment().format("MM/DD/YYYY");
    const arr = useSelector(state => state.staticDetailsReducer.weekArr);
    const dispatch = useDispatch();
    let dateBeforeWeek = moment().subtract(1, 'week').format('MM/DD/YYYY').split("/");
    let dateBeforeDay = moment().subtract(1, 'day').format('MM/DD/YYYY');
    console.log(dateBeforeDay);
    console.log(dateBeforeWeek);
    const dayClicked = useSelector(state => state.staticDetailsReducer.dayIsClicked)
    const monthClicked = useSelector(state => state.staticDetailsReducer.monthIsClicked)
    const weekClicked = useSelector(state => state.staticDetailsReducer.weekIsClicked)
    console.log("day", dayClicked);
    console.log("month", monthClicked);
    console.log("week", weekClicked);
    const UpdatedData = useSelector(state => state.staticDetailsReducer);
    for (let index = 0; index < arr.length; index++) {
        const date = moment().subtract(index, 'day').format('DD/MM/YYYY');
        arr[index] = date;     
    }
    dispatch(actions.setweekArr(arr));
    console.log(arr);
    const state = {
        monthOption: {
            chart: {

                type: 'area',
                stacked: false,

                zoom: {
                    enabled: false
                },
            },
            tooltip: {
                shared: true
            },
            stroke: {
                curve: 'smooth',
            },
            dataLabels: {
                enabled: false
            },
            colors: ['rgb(247, 181, 0)', 'rgb(1, 220, 209)', 'rgb(103, 114, 222)', 'rgb(253, 81, 219)'],
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May',
                    'Jun', 'jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            },

            legend: {
                horizontalAlign: "left",
                offsetX: 40
            }
        },

        dayOption: {
            chart: {

                type: 'area',
                stacked: false,
                height: 350,
                zoom: {
                    enabled: false
                },
            },
            tooltip: {
                shared: true
            },
            stroke: {
                curve: 'smooth',
            },
            dataLabels: {
                enabled: false
            },
            colors: ['rgb(247, 181, 0)', 'rgb(1, 220, 209)', 'rgb(103, 114, 222)', 'rgb(253, 81, 219)'],
            xaxis: {
                categories: [currentDate],
            },

            legend: {
                horizontalAlign: "left",
                offsetX: 40
            }
        },
        weekOption: {
            chart: {

                type: 'area',
                stacked: false,
                height: 350,
                zoom: {
                    enabled: false
                },
            },
            tooltip: {
                shared: true
            },
            stroke: {
                curve: 'smooth',
            },
            dataLabels: {
                enabled: false
            },
            colors: ['rgb(247, 181, 0)', 'rgb(1, 220, 209)', 'rgb(103, 114, 222)', 'rgb(253, 81, 219)'],
            xaxis: {
                categories: [arr[0], arr[1],arr[2], arr[3],arr[4],arr[5],arr[6]],
            },
        },
        daySeries: [

            {
                name: "Viewers",
                data: [UpdatedData.dayViewers]
            },
            {
                name: "Clicks",
                data: [UpdatedData.dayClicks]
            },

            {
                name: "Leads",
                data: [UpdatedData.dayLeads]
            },
            {
                name: "Calls",
                data: [UpdatedData.dayCalls]
            }

        ],
        weekSeries: [

            {
                name: "Viewers",
                data: [UpdatedData.weekViewers[0], UpdatedData.weekViewers[1], UpdatedData.weekViewers[2], UpdatedData.weekViewers[3], UpdatedData.weekViewers[4], UpdatedData.weekViewers[5], UpdatedData.weekViewers[6]]
            },
            {
                name: "Clicks",
                data: [UpdatedData.weekClicks[0], UpdatedData.weekClicks[1], UpdatedData.weekClicks[2], UpdatedData.weekClicks[3], UpdatedData.weekClicks[4], UpdatedData.weekClicks[5], UpdatedData.weekClicks[6]]
            },

            {
                name: "Leads",
                data: [UpdatedData.weekLeads[0], UpdatedData.weekLeads[1], UpdatedData.weekLeads[2], UpdatedData.weekLeads[3], UpdatedData.weekLeads[4], UpdatedData.weekLeads[5], UpdatedData.weekLeads[6]]
            },
            {
                name: "Calls",
                data: [UpdatedData.weekCalls[0], UpdatedData.weekCalls[1], UpdatedData.weekCalls[2], UpdatedData.weekCalls[3], UpdatedData.weekCalls[4], UpdatedData.weekCalls[5], UpdatedData.weekCalls[6]]
            }

        ],
        monthSeries: [

            {
                name: "Viewers",
                data: [UpdatedData.monthViewers[0], UpdatedData.monthViewers[1], UpdatedData.monthViewers[2], UpdatedData.monthViewers[3], UpdatedData.monthViewers[4], UpdatedData.monthViewers[5], UpdatedData.monthViewers[6], UpdatedData.monthViewers[7], UpdatedData.monthViewers[8], UpdatedData.monthViewers[9], UpdatedData.monthViewers[10], UpdatedData.monthViewers[11]]
            },
            {
                name: "Clicks",
                data: [UpdatedData.monthClicks[0], UpdatedData.monthClicks[1], UpdatedData.monthClicks[2], UpdatedData.monthClicks[3], UpdatedData.monthClicks[4], UpdatedData.monthClicks[5], UpdatedData.monthClicks[6], UpdatedData.monthClicks[7], UpdatedData.monthClicks[8], UpdatedData.monthClicks[9], UpdatedData.monthClicks[10], UpdatedData.monthClicks[11]]
            },

            {
                name: "Leads",
                data: [UpdatedData.monthLeads[0], UpdatedData.monthLeads[1], UpdatedData.monthLeads[2], UpdatedData.monthLeads[3], UpdatedData.monthLeads[4], UpdatedData.monthLeads[5], UpdatedData.monthLeads[6], UpdatedData.monthLeads[7], UpdatedData.monthLeads[8], UpdatedData.monthLeads[9], UpdatedData.monthLeads[10], UpdatedData.monthLeads[11]]
            },
            {
                name: "Calls",
                data: [UpdatedData.monthCalls[0], UpdatedData.monthCalls[1], UpdatedData.monthCalls[2], UpdatedData.monthCalls[3], UpdatedData.monthCalls[4], UpdatedData.monthCalls[5], UpdatedData.monthCalls[6], UpdatedData.monthCalls[7], UpdatedData.monthCalls[8], UpdatedData.monthCalls[9], UpdatedData.monthCalls[10], UpdatedData.monthCalls[11]]
            }

        ],
    }
    return (
        <>
            {weekClicked ?
                < ReactApexChart options={state.weekOption} series={state.weekSeries} type="area" />
                : monthClicked ? < ReactApexChart options={state.monthOption} series={state.monthSeries} type="area" /> :
                    < ReactApexChart options={state.dayOption} series={state.daySeries} type="area" />}
        </>
    );
}