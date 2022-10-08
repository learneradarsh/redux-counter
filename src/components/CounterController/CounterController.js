import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";


const CounterController = () => {
    const dispatch = useDispatch();
    // const actions = bindActionCreators(actionCreators, dispatch);
    return <div>
    <button type="button" onClick={() =>  dispatch(actionCreators.increment(10))}>+</button>
    Controller
    <button type="button" onClick={() =>  dispatch(actionCreators.decrement(10))}>-</button>
    </div>
}

export default CounterController;