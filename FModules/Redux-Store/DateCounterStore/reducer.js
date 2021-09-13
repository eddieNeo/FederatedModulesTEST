export const DateCounterReducer = (state = { date: Date.now() }, action) => {
    const ms = 3600 * 60 * 24 * 100
    const load = parseInt(action.payload)
    switch (action.type) {
        case 'INCREMENT_DATE':
            return { ...state, date: state.date + load * ms };
        case 'DECREMENT_DATE':
            return { ...state, date: state.date - load * ms };
        default:
            return state
    }
}