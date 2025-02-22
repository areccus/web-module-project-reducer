export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR = "CLEAR"
export const MEM = "MEM"

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperator = (operator) => {
    return({type: CHANGE_OPERATION, payload:operator})
}

export const clear = () => {
    return({type: CLEAR})
}

export const mem = () => {
    return({type: MEM})
}