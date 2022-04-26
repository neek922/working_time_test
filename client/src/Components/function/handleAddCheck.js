import Store from '../Store';
import React from 'react';

const handleAddCheck = (e, index) =>  {
    const currentState = Store().getState().workTime;

    Store().dispatch({
        type: 'workTime',
        payload: () => {
            currentState.data[index].days[+e.target.name].checked = e.target.checked;
            currentState.data.forEach((item, indexItem) => {
                if(index !== indexItem) {
                    item.days[+e.target.name].disabled = e.target.checked;
                }

            })


            currentState.data = [ ...currentState.data ];
            return { ...currentState };
        }
    });
}

export default handleAddCheck;