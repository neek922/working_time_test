import {onMounted, ref} from "vue";


export function useTimeWorkState() {

    let info = ref([])


    const fetching = async () => {
        // const host = axios.create({
        //     baseURL: process.env.REACT_APP_API_URL
        // })
        // const response = await host.get('api/info');
        // const data = response.data;
        const data = [{
            days: [{
                label: 'нд',
                number: 0,
                checked: false,
                name: 'checkedA',
                disabled: false,
            }, {
                label: 'сб',
                number: 1,
                checked: false,
                name: 'checkedB',
                disabled: false,
            }, {
                label: 'птн',
                number: 2,
                checked: false,
                name: 'checkedC',
                disabled: false,
            }, {
                label: 'чт',
                number: 3,
                checked: false,
                name: 'checkedD',
                disabled: false,
            }, {
                label: 'ср',
                number: 4,
                checked: false,
                name: 'checkedE',
                disabled: false,
            }, {
                label: 'вт',
                number: 5,
                checked: false,
                name: 'checkedF',
                disabled: false,
            }, {
                label: 'пн',
                number: 6,
                checked: false,
                name: 'checkedG',
                disabled: false,
            }],
            hours: {
                time_from: '09:00',
                time_to: '12:00',
            },
            time_toFieldErrMessage: '',
            time_toFieldError: false,
            time_fromFieldErrMessage: '',
            time_fromFieldError: false,
        }, {
            days: [{
                label: 'нд',
                number: 0,
                checked: false,
                name: 'checkedA',
                disabled: false,
            }, {
                label: 'сб',
                number: 1,
                checked: false,
                name: 'checkedB',
                disabled: false,
            }, {
                label: 'птн',
                number: 2,
                checked: false,
                name: 'checkedC',
                disabled: false,
            }, {
                label: 'чт',
                number: 3,
                checked: false,
                name: 'checkedD',
                disabled: false,
            }, {
                label: 'ср',
                number: 4,
                checked: false,
                name: 'checkedE',
                disabled: false,
            }, {
                label: 'вт',
                number: 5,
                checked: false,
                name: 'checkedF',
                disabled: false,
            }, {
                label: 'пн',
                number: 6,
                checked: false,
                name: 'checkedG',
                disabled: false,
            }],
            hours: {
                time_from: '09:00',
                time_to: '12:00',
            },
            time_toFieldErrMessage: '',
            time_toFieldError: false,
            time_fromFieldErrMessage: '',
            time_fromFieldError: false,
        }, ]
        info.value = [...data]


    }
    onMounted(fetching)

    return {
        info
    }


}