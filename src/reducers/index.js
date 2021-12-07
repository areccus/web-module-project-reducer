import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR, MEM } from './../actions';

export const initialState = {
    // Set initial state to 1 because the multiplication doesn't work with 0. 
    total: 1,
    operation: "+",
    memory: 0
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_ONE):
            return({
                ...state,
                total: state.total + 1
            });

        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });

        case(CLEAR): 
        return ({
            ...state,
            total: 1
        });

        case(MEM):
        return ({
            ...state, memory: state.total
        })
            
        default:
            return state;
    }
}

export default reducer;