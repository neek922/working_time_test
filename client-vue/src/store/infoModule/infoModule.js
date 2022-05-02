import {infoGetters} from "@/store/infoModule/infoGetters";
import {infoMutations} from "@/store/infoModule/infoMutations";
import {infoActions} from "@/store/infoModule/infoActions";

export const infoModule = {
    state: () => ({
        totalCount: 0,
        validationText: false,
        validationNewLine: false,
        validationLine: true,
        data: [{
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
    }),
    getters: {
        ...infoGetters
    },
    mutations: {
        ...infoMutations
    },
    actions: {
        ...infoActions
    },
    namespaced: true
}