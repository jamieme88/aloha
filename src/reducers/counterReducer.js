const initialState = {
    value: '',
}

const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GENERATE':
            return {
                ...state,
                value: state.value + action.value
            }
        case 'CHANGETEXT':
            return {
                ...state,
                value: state.value + action.value
            }
        default: 
            return state;
        }
    }

export default counterReducer;
