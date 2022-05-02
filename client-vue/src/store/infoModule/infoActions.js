
export const infoActions = {
    validationTime({state, commit}){
        let allList = [];
        let bool = '';

        if(state.data){
            state.data.forEach((item, index) => {

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
                    commit('setErrEmptyField', {bool: true, index, title: 'time_to', text: "Не коректні дані"})
                    commit('setErrEmptyField', {bool: true, index, title: 'time_from', text: "Не коректні дані"})
                }   else {
                    commit('setErrEmptyField', {bool: false, index, title: 'time_to'})
                    commit('setErrEmptyField', {bool: false, index, title: 'time_from'})
                }
            })
            allList.includes(false) ? bool = false : bool = true;
            commit('setValidationText', bool)
        }
    },
    validationNewLine({state, commit, dispatch}){
        dispatch('validationTime')
        const lastLane = state.totalCount;
        const listChecked = [];

        state.data[lastLane].days.forEach(item => {
            if(item.checked){
                listChecked.push(true)
            }
        })

        if(state.validationText && (listChecked.includes(true))){
            commit('addLine')
        }
    },
    validationForm({state, dispatch, commit}){
        const allList = [];

        state.data.forEach((item, index) => {
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
        dispatch('validationTime')
        commit('setValidationLine', bool)
    },
    getInformation({state, dispatch}){
        dispatch('validationForm')
        const working_times = [];
        if(state.data){
            state.data.forEach((item) => {
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
        if (state.validationLine && state.validationText){
            console.log(working_times)
        }
    },
    async fetchInfo({state, commit}) {
        try {
            const host = axios.create({
                baseURL: process.env.REACT_APP_API_URL
            })
            const response = await host.get('api/info');
            const data = response.data;

            if (data) {
                let template = [];
                if (data.length > 1) {

                    data.forEach((item, index) => {
                        if (index !== 0) {
                            template = [...template, ...item.days]
                        }
                    })
                }

                const list = [{
                    days: [{
                        label: 'нд',
                        number: 0,
                        checked: !!(data[0].days.includes(0)),
                        name: 'checkedA',
                        disabled: !!(template.includes(0)),
                    }, {
                        label: 'сб',
                        number: 1,
                        checked: !!(data[0].days.includes(1)),
                        name: 'checkedB',
                        disabled: !!(template.includes(1)),
                    }, {
                        label: 'птн',
                        number: 2,
                        checked: !!(data[0].days.includes(2)),
                        name: 'checkedC',
                        disabled: !!(template.includes(2)),
                    }, {
                        label: 'чт',
                        number: 3,
                        checked: !!(data[0].days.includes(3)),
                        name: 'checkedD',
                        disabled: !!(template.includes(3)),
                    }, {
                        label: 'ср',
                        number: 4,
                        checked: !!(data[0].days.includes(4)),
                        name: 'checkedE',
                        disabled: !!(template.includes(4)),
                    }, {
                        label: 'вт',
                        number: 5,
                        checked: !!(data[0].days.includes(5)),
                        name: 'checkedF',
                        disabled: !!(template.includes(5)),
                    }, {
                        label: 'пн',
                        number: 6,
                        checked: !!(data[0].days.includes(6)),
                        name: 'checkedG',
                        disabled: !!(template.includes(6)),
                    }],
                    hours: {
                        time_from: data[0].hours.time_from,
                        time_to: data[0].hours.time_to,
                    },
                    time_toFieldErrMessage: '',
                    time_toFieldError: false,
                    time_fromFieldErrMessage: '',
                    time_fromFieldError: false,
                },]
                commit('setData', list)

                data.forEach((el, index) => {
                    if (index !== 0) {
                        commit('addLine', el)
                    }
                })
            }
        } catch (e){
            console.log(e)
        }
    }
}