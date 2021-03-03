
import produce from 'immer';
import createReducer, { sumData } from "./reducerUtils";
import moment from 'moment';
const initialState = {
    dataStatic: [],
    listCategory: [],
    sumStatic: {
        viewer: 0,
        contactOptions: 0,
        submitioms: 0
    },
    dayIsClicked: false,
    monthIsClicked: false,
    weekIsClicked: false,
    dayViewers: 0,
    dayClicks: 0,
    dayLeads: 0,
    dayCalls: 0,
    weekViewers: [0, 0, 0, 0, 0, 0, 0],
    weekClicks: [0, 0, 0, 0, 0, 0, 0],
    weekLeads: [0, 0, 0, 0, 0, 0, 0],
    weekCalls: [0, 0, 0, 0, 0, 0, 0],
    monthViewers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    monthClicks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    monthLeads: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    monthCalls: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    weekArr: ["", "", "", "", "", "", ""],
}

const staticData = {

    setweekArr(state, action) {
        debugger;
        state.weekArr = action.payload;
    },

    setStaticData(state, action) {
        state.dataStatic = action.payload;
        state.sumStatic.viewer = sumData(state.dataStatic.viewers);
        state.sumStatic.contactOptions = sumData(state.dataStatic.contactOptions);
        state.sumStatic.submitioms = sumData(state.dataStatic.submitioms);
    },

    setSumStatic(state, action) {
        state.sumStatic.viewer = sumData(action.payload.viewers);
        state.sumStatic.contactOptions = sumData(action.payload.contactOptions);
        state.sumStatic.submitioms = sumData(action.payload.submitioms);
    },
    setDayIsClicked(state = initialState, action) {
        debugger
        state.dayIsClicked = action.payload;

    },
    setMonthIsClicked(state = initialState, action) {
        debugger
        state.monthIsClicked = action.payload;

    },
    setWeekIsClicked(state = initialState, action) {
        debugger
        state.weekIsClicked = action.payload;

    },
    setMonthAmount(state = initialState, action) {
        debugger
        const viewersArr = [...state.monthViewers];
        const clicksArr = [...state.monthClicks];
        const leadsArr = [...state.monthLeads];
        const callsArr = [...state.monthCalls];
        if (state.dataStatic.viewers) {
            state.dataStatic.viewers.map(data => {
                if (data.date[3] === '0') {
                    console.log(data.date[4]);
                    viewersArr[data.date[4] - 1] += data.amount;
                }
                else {
                    let m = data.date[3];
                    m = m * 10;
                    m += data.date[4];
                    console.log(m);
                    viewersArr[data.date[m] - 1] = data.amount;
                }
            })
        }

        if (state.dataStatic.contactOptions) {
            state.dataStatic.contactOptions.map(data => {
                if (data.date[3] === '0') {
                    console.log(data.date[4]);
                    clicksArr[data.date[4] - 1] += data.amount;
                }
                else {
                    let m = data.date[3];
                    m = m * 10;
                    m += data.date[4];
                    console.log(m);
                    clicksArr[data.date[m] - 1] = data.amount;
                }
            })
        }

        if (state.dataStatic.submitioms) {
            state.dataStatic.submitioms.map(data => {
                if (data.date[3] === '0') {
                    console.log(data.date[4]);
                    leadsArr[data.date[4] - 1] += data.amount;
                }
                else {
                    let m = data.date[3];
                    m = m * 10;
                    m += data.date[4];
                    console.log(m);
                    leadsArr[data.date[m] - 1] = data.amount;
                }
            })
        }
        state.monthViewers = [...viewersArr];
        state.monthClicks = [...clicksArr];
        state.monthLeads = [...leadsArr];
        console.log(viewersArr);

        console.log(state.dataStatic.viewers);
    },
    setWeekAmount(state = initialState, action) {
        debugger
        const weekViewersArr = [...state.weekViewers];
        const weekClicksArr=[...state.weekClicks];
        const weekLeadsArr=[...state.weekLeads];
        if(state.dataStatic.viewers){
            state.dataStatic.viewers.map(data => {
                for (let index = 0; index < state.weekArr.length; index++) {
                    if (data.date === state.weekArr[index]) {
                        weekViewersArr[index] += data.amount;
                    }
                }
            })
        }
        if(state.dataStatic.contactOptions){
            state.dataStatic.contactOptions.map(data => {
                for (let index = 0; index < state.weekArr.length; index++) {
                    if (data.date === state.weekArr[index]) {
                        weekClicksArr[index] += data.amount;
                    }
                }
            })
        }
        if(state.dataStatic.submitioms){
            state.dataStatic.submitioms.map(data => {
                for (let index = 0; index < state.weekArr.length; index++) {
                    if (data.date === state.weekArr[index]) {
                        weekLeadsArr[index] += data.amount;
                    }
                }
            })
        }
        
        state.weekViewers = [...weekViewersArr];
        state.weekClicks=[...weekClicksArr];
        state.weekLeads=[...weekLeadsArr];
    },
    setDayAmount(state = initialState, action) {
        debugger
        let currentDate = moment().format("MM/DD/YYYY");
        if(state.dataStatic.viewers){
            state.dataStatic.viewers.map(data => {
                if (data.date === currentDate) {
                    state.dayViewers=data.amount;
                }
            })
        }
        if(state.dataStatic.contactOptions){
            state.dataStatic.contactOptions.map(data => {
                if (data.date === currentDate) {
                    state.dayClicks=data.amount;
                }
            })
        }
        if(state.dataStatic.submitioms){
            state.dataStatic.submitioms.map(data => {
                if (data.date === currentDate) {
                    state.dayLeads=data.amount;
                }
            })
        }
    },
};

export default produce((state, action) => createReducer(state, action, staticData), initialState);

