
export const infoGetters = {
    daysState: (state) => (index) => {
        return state.data[index].days
    },
    dataState(state) {
        return state.data
    },
    totalCountState(state) {
        return state.totalCount
    },
    validationTextState(state) {
        return state.validationText
    },
    validationNewLineState(state) {
        return state.validationNewLine
    },
    validationLineState(state) {
        return state.validationLine
    },
    valueState: (state) => (index, name) => {
        return state.data[index].hours[name]
    },
    fieldErrState: (state) => (index, name) => {
        return state.data[index][name + 'FieldError']
    },
    fieldErrMessState: (state) => (index, name) => {
        return state.data[index][name + 'FieldErrMessage']
    },
}