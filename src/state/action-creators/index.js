export const increment = (value) => {
    console.log(value);
    return (dispatch) => {
        dispatch({
            type: 'INC',
            payload: value
        })
    }
}

export const decrement = (value) => {
    return (dispatch) => {
        dispatch({
            type: 'DEC',
            payload: value
        })
    }
}