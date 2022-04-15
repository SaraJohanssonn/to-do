import React from 'react'

export default function Todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id)
  }
  
  return (
    <div>
      <label className='container-checkbox'>
        <input className='checkbox' type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
        <span class="checkmark"></span>
        <span >{todo.name}</span>
      </label>
    </div>
  )
}