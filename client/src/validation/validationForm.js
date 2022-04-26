import React from 'react';
import Store from "../Components/Store";
import validationTime from "./validationTime";


const validationForm = () => {
    const currentState = Store().getState().workTime;
    const currentStateFlag = Store().getState().flags;

    const allList = [];

    currentState.data.forEach((item, index) => {
        const list = [];
        item.days.forEach((it, ind) => {
            if(it.checked){
                list.push(ind)
            }
        })
        if(list.length === 0){
            allList.push(index)
        }
    })
    let bool = (allList.length <= 0)
    validationTime();

    Store().dispatch({
        type: 'flags',
        payload: () => {
            currentStateFlag.validationLine = bool;
            return { ...currentStateFlag };
        }
    });

}

export default validationForm;

