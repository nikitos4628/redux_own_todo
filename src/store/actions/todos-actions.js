import {ADD_TODO, TOGGLE_TODO, DELETE_TODO} from '../constants/todos-const';

export const addTodo = (title) => ({
	type: ADD_TODO,
	title
})

export const deleteTodo = (id) => ({
	type: DELETE_TODO,
	id
})

export const toggleTodo = (id) => ({
	type: TOGGLE_TODO,
	id
})