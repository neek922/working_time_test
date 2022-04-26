import React from 'react';
import Store from "../Store";
import validationForm from "../../validation/validationForm";

const HandlerGetInformation = () => {
    validationForm();
    const stateWorkTime = Store().getState().workTime.data;
    const flags = Store().getState().flags;
    const working_times = [];
    if(stateWorkTime){
        stateWorkTime.forEach((item) => {
            let days = [];
            item.days.forEach((it) => {
                if(it.checked){
                    days.push(it.number)
                }
            })
            working_times.push({
                days: [...days],
                hours: { ...item.hours }
            },)
        })

    }

    if (flags.validationLine && flags.validationText){
        console.log(working_times)
    }

};

export default HandlerGetInformation;