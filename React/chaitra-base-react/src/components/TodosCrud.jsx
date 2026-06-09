import React, { useEffect, useState } from 'react'
import Button from './Button'

function TodosCrud() {

  const handleSubmmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    const newTodo = {
      id: Date.now(),
      title: input
    }
    setTodos(prevTodos => [...prevTodos, newTodo])
    setInput('')
  }

  const handleDelete = (id) => {
    if (!id) return
    setTodos(prevTodos => prevTodos.filter((todo) => todo.id !== id))
  }

  const [input, setInput] = useState('')
  const [todos, setTodos] = useState(() => {
    const work = localStorage.getItem('todos')
    return work ? JSON.parse(work) : []
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  return (
    <>
      <form onSubmit={handleSubmmit}>
        <input
          className='border'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type='submit' size='small' label='Add' />
      </form>
      <ul>
        {todos.map((todo) => (
          <div key={todo.id} className='flex justify-between items-center mt-1 bg-amber-200 h-6 w-60'>
            <li>{todo.title}</li>
            <button className='h-6 px-2 cursor-pointer border' onClick={() => handleDelete(todo.id)}>Delete</button>
          </div>
        ))}
      </ul>
    </>
  )
}

export default TodosCrud