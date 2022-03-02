import { createStore } from "redux";


const initialState = {
    tasks: []
}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_TODO":
            console.log(state);
            return {
                ...state,
                tasks: [...state.tasks, {
                    id: state.tasks.length + 1,
                    title: action.payload,
                    completed: false
                }]
            }
        case "TOGGLE_TODO":
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.payload) {
                        return {
                            ...task,
                            completed: !task.completed
                        }
                    }
                    return task;
                })
            }
        
        case "DELETE_TODO":
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        
        case "EDIT_TODO":
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.payload.id) {
                        return {
                            ...task,
                            title: action.payload.title
                        }
                    }
                    return task;
                })
            }
        
        case "SET_TODO":
            return{
                ...state,
                tasks: action.payload
            }

        default:
        return state;
    }
};

export const store = createStore(reducer);