import React, { useState, useRef, useEffect } from 'react'
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';
import bild1 from './image/p1.jpg'
import bild from './image/brick.webp'


const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([ ])
  const todoNameRef = useRef()

  
 
  useEffect(() => {
  const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])
 
  function toggleTodo(id) {
  const newTodos = [...todos]
  const todo = newTodos.find(todo => todo.id === id)
  todo.complete = !todo.complete
  setTodos(newTodos)

  }

  function handleAddTodo(e) {
     const name = todoNameRef.current.value
     if (name === '') return
     setTodos(prevTodos => {
       return [...prevTodos, { id: uuidv4(), name: name, complete: false}]

     })
     todoNameRef.current.value = null 
  }

   
  function handleClearTodos() {
     const newTodos = todos.filter(todo => !todo.complete)  
      setTodos(newTodos)
    }


    
    

  return (
    <>
    <div  styles={{ backgroundImage:`url(${bild})` }}></div>
    <div  styles={{ backgroundImage:`url(${bild1})` }}>
      <div className="container">
        <h1 className='header'>Här är dina to-do</h1> 
          
        <div style={{"marginLeft": "50px"}}>
          <TodoList todos={todos} toggleTodo={toggleTodo} />
          <input ref={todoNameRef} type="text" />{' '}
          <button className='btn' onClick ={handleAddTodo}>Lägg till</button> {' '}
          <button className='btn' onClick={handleClearTodos}>Ta bort</button>
          <p> {todos.filter(todo => !todo.complete).length} task kvar att göra.</p>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default App;
