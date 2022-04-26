import axios from 'axios';
import Store from '../Store';
import handleAddLine from "./handleAddLine";

const onMount = async () => {
    const host = axios.create({
        baseURL: process.env.REACT_APP_API_URL
    })
    const response = await host.get('api/info');
    const data = response.data;
    const state = Store().getState().workTime;

    // const data = [
    //     {
    //         days: [0, 1],
    //         hours:{
    //             time_from: '09:00',
    //             time_to: '12:00',
    //         },
    //     }, {
    //         days: [2, 3],
    //         hours:{
    //             time_from: '09:00',
    //             time_to: '12:00',
    //         },
    //     }
    // ]


    if(data){
        let template = [];
        if(data.length > 1){


            data.forEach((item, index) => {
                if(index !== 0){
                    template = [ ...template, ...item.days ]
                }
            })
        }

        const list = [{
            days: [{
                label: 'нд',
                number: 0,
                checked: !!(data[0].days.includes(0)),
                name: 'checkedA',
                disabled: !!(template.includes(0)),
            }, {
                label: 'сб',
                number: 1,
                checked: !!(data[0].days.includes(1)),
                name: 'checkedB',
                disabled: !!(template.includes(1)),
            }, {
                label: 'птн',
                number: 2,
                checked: !!(data[0].days.includes(2)),
                name: 'checkedC',
                disabled: !!(template.includes(2)),
            }, {
                label: 'чт',
                number: 3,
                checked: !!(data[0].days.includes(3)),
                name: 'checkedD',
                disabled: !!(template.includes(3)),
            }, {
                label: 'ср',
                number: 4,
                checked: !!(data[0].days.includes(4)),
                name: 'checkedE',
                disabled: !!(template.includes(4)),
            }, {
                label: 'вт',
                number: 5,
                checked: !!(data[0].days.includes(5)),
                name: 'checkedF',
                disabled: !!(template.includes(5)),
            }, {
                label: 'пн',
                number: 6,
                checked: !!(data[0].days.includes(6)),
                name: 'checkedG',
                disabled: !!(template.includes(6)),
            }],
            hours: {
                time_from: data[0].hours.time_from,
                time_to: data[0].hours.time_to,
            },
            time_toFieldErrMessage: '',
            time_toFieldError: false,
            time_fromFieldErrMessage: '',
            time_fromFieldError: false,
        },]

        Store().dispatch({
            type: 'workTime',
            payload: () => {
                state.data = [ ...list ]
                return { ...state };
            }
        });

        data.forEach((el, index) => {
            if(index !== 0){
                handleAddLine(el);

            }
        })
    }

};

export default onMount;