import Store from '../Store';
import React from 'react';

const handleAddLine = (el = "") =>  {
    const currentState = Store().getState().workTime;
    const lineDays = currentState.data
    const template = {};
    if(lineDays){
        lineDays.forEach((item, index) => {
            item.days.forEach((it, ind) => {
               if (it.checked){
                    template[ind] = it.checked;
                }
            })
        })
    }

    Store().dispatch({
        type: 'workTime',
        payload: () => {
            currentState.data.push(
                {
                    days: [{
                        label: 'нд',
                        number: 0,
                        checked: !!((el) && el.days.includes(0)),
                        name: 'checkedA',
                        disabled: !!(template[0]),
                    }, {
                        label: 'сб',
                        number: 1,
                        checked: !!((el) && el.days.includes(1)),
                        name: 'checkedB',
                        disabled: !!(template[1]),
                    }, {
                        label: 'птн',
                        number: 2,
                        checked: !!((el) && el.days.includes(2)),
                        name: 'checkedC',
                        disabled: !!(template[2]),
                    }, {
                        label: 'чт',
                        number: 3,
                        checked: !!((el) && el.days.includes(3)),
                        name: 'checkedD',
                        disabled: !!(template[3]),
                    }, {
                        label: 'ср',
                        number: 4,
                        checked: !!((el) && el.days.includes(4)),
                        name: 'checkedE',
                        disabled: !!(template[4]),
                    }, {
                        label: 'вт',
                        number: 5,
                        checked: !!((el) && el.days.includes(5)),
                        name: 'checkedF',
                        disabled: !!(template[5]),
                    }, {
                        label: 'пн',
                        number: 6,
                        checked: !!((el) && el.days.includes(6)),
                        name: 'checkedG',
                        disabled: !!(template[6]),
                    }],
                    hours: {
                        time_from: ((el) && (el.hours.time_from)) ? el.hours.time_from : '',
                        time_to: ((el) && (el.hours.time_to)) ? el.hours.time_to : '',
                    },
                    time_toFieldErrMessage: '',
                    time_toFieldError: false,
                    time_fromFieldErrMessage: '',
                    time_fromFieldError: false,
                },
            );
            currentState.totalCount +=1;
            currentState.data = [ ...currentState.data ];
            return { ...currentState };
        }

    });
}

export default handleAddLine;