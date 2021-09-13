import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Button} from "./Components/Button/Button";
import {Input} from "./Components/Input/Input";
import {RedColouredH1} from "./Components/RedColouredH1/RedColouredH1";
import { decrement_date, increment_date } from "./Redux-Store/DateCounterStore/actions";
import { decrement_one, increment_one } from "./Redux-Store/NumberCounterStore/actions";

const NumberCounter = () => {
    const dispatch = useDispatch();
    const number = useSelector((state) => state.CounterReducer.value)
    return (
        <>
            <RedColouredH1 number={number}></RedColouredH1>
            <Button displayText="Inc" onClick={() => dispatch(increment_one)}></Button>
            <Button displayText="Dec" onClick={() => dispatch(decrement_one)}></Button>
        </>
    )
}
const DateCounter = () => {
    const dispatch = useDispatch();
    const [s, sets] = useState(0);
    const date = useSelector((state) => state.DateCounterReducer.date)
    return (<>
        <RedColouredH1 number={new Date(date).toDateString()}></RedColouredH1>
        <Input value={s} onChange={({ target: { value } }) => sets(value)} />
        <Button displayText="Inc" onClick={() => dispatch(increment_date(s))}></Button>
        <Button displayText="Dec" onClick={() => dispatch(decrement_date(s))}></Button>
    </>)
}
const App = () => {

    return (
        <>
            <DateCounter />
            <NumberCounter />
        </>
    )
}

export default App