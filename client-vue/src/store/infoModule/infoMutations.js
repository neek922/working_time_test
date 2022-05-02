
export const infoMutations = {
    setTotalCount(state, totalCount){
        state.totalCount = totalCount
    },
    setValueTime(state, value){
        state.data[value.index].hours[value.name] = value.value
    },
    setChecked(state, {e, index}){
        state.data[index].days[+e.target.name].checked = e.target.checked
        state.data.forEach((item, indexItem) => {
            if(index !== indexItem) {
                item.days[+e.target.name].disabled = e.target.checked;
            }
        })
    },
    addLine(state, el = ""){
        const lineDays = state.data
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
        state.data.push({
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
            time_fromFieldError: false
        },)
        state.totalCount +=1;
    },
    setErrEmptyField(state, {bool, index, title, text = ""}){
        state.data[index][title + 'FieldError'] = bool;
        state.data[index][title + 'FieldErrMessage'] = text;
    },
    setValidationText(state, validationText){
        state.validationText = validationText
    },
    setValidationLine(state, validationLine){
        state.validationLine = validationLine
    },
    setData(state, data){
        state.data = data
    },
}