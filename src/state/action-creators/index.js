export const increment = (value) => {
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