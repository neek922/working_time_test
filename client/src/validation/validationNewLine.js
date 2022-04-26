import React from 'react';
import Store from "../Components/Store";
import validationTime from "./validationTime";
import handleAddLine from "../Components/function/handleAddLine";



const validationNewLine = () => {
    validationTime()
    const currentState = Store().getState().workTime;
    const currentStateFlag = Store().getState().flags;
    const lastLane = currentState.totalCount;
    const listChecked = [];

    currentState.data[lastLane].days.forEach(item => {
        if(item.checked){
            listChecked.push(true)
        }
    })

    if(currentStateFlag.validationText && (listChecked.includes(true))){
        handleAddLine()
    }
}

export default validationNewLine;
