import { legacy_createStore } from "redux";

const reducer = (state = [], action) => {
	switch(action.type) {
		case 'ADD_TODO': {
			return [
				...state,
				{
					id: Date.now() + Math.random(),
					title: action.title,
					completed: false
				}
			]
		}
		case 'DELETE_TODO': {
			return state.filter(e => e.id !== action.id)
		}
		case 'TOGGLE_TODO': {
			return state.map(e => e.id === action.id ? {...e, completed: !e.completed} : e)
		}
		default: {
			return state
		}
	}
}

export const addTodo = (title) => ({
	type: 'ADD_TODO',
	title
})

export const deleteTodo = (id) => ({
	type: 'DELETE_TODO',
	id
})

export const toggleTodo = (id) => ({
	type: 'TOGGLE_TODO',
	id
})

export const store = legacy_createStore(reducer)