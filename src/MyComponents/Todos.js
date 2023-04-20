import React from 'react'
import { TodoItem } from './TodoItem';

export const Todos = (props) => {
  return (
    <div className='container my-3'>
     <h2 className='text-center my-3'>Todos Component :--- This is rendering from Todos.js </h2><hr />
      <TodoItem todo={props.todos[0]} /><hr />
      <TodoItem todo={props.todos[1]} /><hr />
      <TodoItem todo={props.todos[2]} /><hr />
    </div>
  )
}
