import Store from '../Store';
import React from 'react';

const setErrEmptyField = (bool, index, title, text = "") =>  {
    const currentState = Store().getState().workTime;

    Store().dispatch({
        type: 'workTime',
        payload: () => {
            currentState.data[index][title + 'FieldError'] = bool;
            currentState.data[index][title + 'FieldErrMessage'] = text;
            currentState.data = [ ...currentState.data ];
            return { ...currentState };
        }

    });
}

export default setErrEmptyField;