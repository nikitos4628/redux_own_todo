import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from './store';

function App() {
  return (
    <div className="App">
		<AddTodo/>
		<TodoList/>
    </div>
  );
}

const AddTodo = () => {
	const dispatch = useDispatch()
	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(addTodo(e.target.title.value))
		e.target.reset()
	}

	return(
		<form onSubmit={handleSubmit}>
			<input type='text' name='title' placeholder='Name your own to do'/>
			<input type='submit' value='Add your own to do'/>
		</form>
	)
}

const TodoList = () => {
	const dispatch = useDispatch()
	const todos = useSelector(state => state)

	return(
		<ul>
			{todos.map((e) => (
				<li key={e.id}>
					<input type='checkbox' checked={e.checked} onChange={() => dispatch(toggleTodo(e.id))}/>
					{e.title}
					<button onClick={() => dispatch(deleteTodo(e.id))}>
						delete
					</button>
				</li>
			))}
		</ul>
	)
}

export default App;