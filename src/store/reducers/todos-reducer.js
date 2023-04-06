import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "../constants/todos-const"

export const todos = (state = [], action) => {
	switch(action.type) {
		case ADD_TODO: {
			return [
				...state,
				{
					id: Date.now(),
					title: action.title,
					completed: false
				}
			]
		}
		case DELETE_TODO: {
			return state.filter(e => e.id !== action.id)
		}
		case TOGGLE_TODO: {
			return state.map(e => e.id === action.id 
				? {...e, completed: !e.completed}
				: e)
		}
		default: {
			return state
		}
	}
}