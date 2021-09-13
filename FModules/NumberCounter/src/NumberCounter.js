import React from 'react';
import { useDispatch, useSelector } from "react-redux"
import Button from "./Components/Button";
import RedColouredH1 from "./Components/RedColouredH1";
export const NumberCounter = () => {
    const dispatch = useDispatch();
    // const dispatch = ()=>{}
    const number = useSelector((state) => state.CounterReducer.value)
    return (
        <>
            <RedColouredH1 number={3}></RedColouredH1>
            <Button displayText="Inc" onClick={() => dispatch(increment_one)}></Button>
            <Button displayText="Dec" onClick={() => dispatch(decrement_one)}></Button>
        </>
    )
}

export default NumberCounter;