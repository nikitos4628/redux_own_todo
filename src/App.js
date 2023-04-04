import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from './store';

function App() {
  return (
    <div className="App">
      <AddTodos/>
		<TodoList/>
    </div>
  );
}

const AddTodos = () => {
	const dispatch = useDispatch()

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(addTodo(e.target.title.value))
		e.target.reset()
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type='text' name='title' placeholder='Name your to do'/>
			<input type='submit' value='Add your to do'/>
		</form>
	)
}

const TodoList = () => {
	const todos = useSelector(s => s)
	const dispatch = useDispatch()
	const content = todos.map((e) => (
		<li key={e.id}>
			<input
				type='checkbox'
				checked={e.completed}
				onChange={() => dispatch(toggleTodo(e.id))}
			/>
			{e.title}
			<button
				onClick={() => dispatch(deleteTodo(e.id))}
			>
				delete
			</button>
		</li>
	))

	return (
		<ul>
			{content}
		</ul>
	)
}

export default App;
