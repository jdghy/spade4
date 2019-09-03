import { AuditActionTypes } from './constants';



const initialState = {
    todos: []
}

const audit = (state = initialState, action) => {
    switch (action.type) {
        case AuditActionTypes.SHOW_ALL:
            return {
                ...state,
                todos: []
            }
        default:
            return state
    }
}

export default audit;