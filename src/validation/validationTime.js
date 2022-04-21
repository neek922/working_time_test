import React from 'react';
import Store from "../Components/Store";
import setErrEmptyField from "../Components/function/setErrEmptyField";


const validationTime = () => {
    const currentState = Store().getState().workTime;
    const currentStateFlag = Store().getState().flags;
    let allList = [];
    let bool = '';

    if(currentState.data){
        currentState.data.forEach((item, index) => {
            const flagListText = [];
            if(item.hours.time_from.length !== 5 || item.hours.time_to.length !== 5){
                flagListText.push(false)
            }
            const fromH = +item.hours.time_from.substring(0, 2);
            const fromM = +item.hours.time_from.substring(3);
            const toH = +item.hours.time_to.substring(0, 2);
            const toM = +item.hours.time_to.substring(3);

            if(fromH > toH){
                flagListText.push(false)
            }
            if(fromH === toH){
                if(fromM > toM){
                    flagListText.push(false)
                }
            }
            allList =  [...allList, ...flagListText];
            if (flagListText.includes(false)){
                setErrEmptyField(true, index, 'time_to', "Не коректні дані")
                setErrEmptyField(true, index, 'time_from', "Не коректні дані")

            }   else {
                setErrEmptyField(false, index, 'time_to')
                setErrEmptyField(false, index, 'time_from')
            }
        })

        Store().dispatch({
            type: 'flags',
            payload: () => {
                (allList.includes(false)) ? bool = false : bool = true;
                currentStateFlag.validationText = bool;
                return { ...currentStateFlag };
            }
        });
    }
}

export default validationTime;
