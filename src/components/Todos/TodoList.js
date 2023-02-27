
import React from 'react'
import Todo from './Todo'
import styles from './TodoList.module.css'

const TodoList = ({todos, removeTodo, toggleTodo}) => {
  return (
    
    <div className={styles.todoListContainer}>
      {!todos.length &&  <h2>Todolist is empty</h2> }
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} remove={removeTodo} toggle={toggleTodo} />
      })}
    </div>
  )
}

export default TodoList
