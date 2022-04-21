import Store from '../Store';
import React from 'react';

const handleAddLine = () =>  {
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
                        checked: false,
                        name: 'checkedA',
                        disabled: (template[0]) ? template[0] : false,
                    }, {
                        label: 'сб',
                        number: 1,
                        checked: false,
                        name: 'checkedB',
                        disabled: (template[1]) ? template[1] : false,
                    }, {
                        label: 'птн',
                        number: 2,
                        checked: false,
                        name: 'checkedC',
                        disabled: (template[2]) ? template[2] : false,
                    }, {
                        label: 'чт',
                        number: 3,
                        checked: false,
                        name: 'checkedD',
                        disabled: (template[3]) ? template[3] : false,
                    }, {
                        label: 'ср',
                        number: 4,
                        checked: false,
                        name: 'checkedE',
                        disabled: (template[4]) ? template[4] : false,
                    }, {
                        label: 'вт',
                        number: 5,
                        checked: false,
                        name: 'checkedF',
                        disabled: (template[5]) ? template[5] : false,
                    }, {
                        label: 'пн',
                        number: 6,
                        checked: false,
                        name: 'checkedG',
                        disabled: (template[6]) ? template[6] : false,
                    }],
                    hours: {
                        time_from: '',
                        time_to: '',
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