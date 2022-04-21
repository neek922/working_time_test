import Store from '../Store';
import React from 'react';

const handleAddTime = (value, title, index) =>  {
    const currentState = Store().getState().workTime;

    Store().dispatch({
        type: 'workTime',
        payload: () => {
            currentState.data[index].hours[title] = value;
            currentState.data = [ ...currentState.data ];
            return { ...currentState };
        }

    });
}

export default handleAddTime;