
import React from 'react'
import styles from './Todo.module.css'
import { RiTodoFill, RiDeleteBin2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa"


const Todo = ({todo, remove, toggle}) => {


  return  (
    <div className={`${styles.todo} ${todo.isCompleted ? styles.completedTodo : ''}`}>
      <RiTodoFill className={styles.todoIcons}/> 
      <div onDoubleClick={() => remove(todo.id)} className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin2Line className={styles.deleteIcon} onClick={() => remove(todo.id)}/>
      <FaCheck className={styles.checkIcon} onClick={() => toggle(todo.id)}/>
    </div>
  )
}

export default Todo

