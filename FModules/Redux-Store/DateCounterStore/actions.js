const INCREMENT_DATE="INCREMENT_DATE"
const DECREMENT_DATE="DECREMENT_DATE"

export const increment_date=(payload)=>({type:INCREMENT_DATE,payload})
export const decrement_date=(payload)=>({type:DECREMENT_DATE,payload})