import { useState } from 'react'
import './App.css';
import TodoList from './components/Todos/TodoList';
import TodoForm from './components/Todos/TodoForm';
import TodosActions from './components/Todos/TodosActions';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [todos, setTodos] = useState([])
  
  function addTodoHandler(text) {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    }
    setTodos([...todos, newTodo])
  }

  function deleteTodoHandler(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  function toggleTodoHandler(id) {
    setTodos(todos.map((todo) => {
      return todo.id === id 
      ? {...todo, isCompleted: !todo.isCompleted}
      : {...todo}
    }))
  }

  function resetTodosHandler() {
    setTodos([])
  }

  function deleteCompletedTodosHandler() {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  const completedTodoCount = todos.filter((todo) => todo.isCompleted).length


  return (
    <div className="App">
    <h1>Todo App</h1>
     <TodoForm addTodo={addTodoHandler} />
     {!!todos.length > 0 && <TodosActions resetTodos={resetTodosHandler} deleteCompletedTodos={deleteCompletedTodosHandler} completedTodosExist={!!completedTodoCount}/>  }
     <TodoList todos={todos} removeTodo={deleteTodoHandler}  toggleTodo={toggleTodoHandler} />
     {completedTodoCount > 0 && <h2>{`You have completed ${completedTodoCount} ${completedTodoCount > 1 ? 'todos' : 'todo' } `}</h2>}
    </div>
  );
}

export default App;
