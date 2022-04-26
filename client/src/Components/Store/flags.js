export const initialState = () => ({
    validationText: false,
    validationNewLine: false,
    validationLine: true,
});

const flags = (currentState = initialState(), action) => {
    return (action.type === 'flags')
        ? action.payload()
        : currentState;

};

export	default flags;