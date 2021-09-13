export const CounterReducer=(state = {value:0}, action)=> {
    switch (action.type) {
      case 'INCREMENT_ONE':
        return {...state,value:state.value+1}
    case 'DECREMENT_ONE':
        return {...state,value:state.value-1}
      default:
        return state
    }
  }