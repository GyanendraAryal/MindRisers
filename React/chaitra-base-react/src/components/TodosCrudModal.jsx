import React, { useState, useEffect } from 'react'
import Button from './Button'
import Modal from './Modal'

function TodosCrudModal() {
  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState('')
  const [input, setInput] = useState('')

  const [todos, setTodos] = useState(() => {
    const res = localStorage.getItem('todos')
    return res ? JSON.parse(res) : []
  })

  //Saving in localstorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // Handling Submit
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const newTodo = {
      id: Date.now(),
      title: input.trim(),
      isChecked: false
    }
    setTodos(prevTodos => [...prevTodos, newTodo])
    setInput('')
  }

  // Handling Delete
  const handleDelete = (id) => {
    if (!id) return
    setTodos(prevTodos => prevTodos.filter((todo) => todo.id !== id))
  }

  // Handling Edit
  const handleEdit = (id, currentText) => {
    if (!id || !currentText.trim()) return
    setEditId(id)
    setEditText(currentText)
  }

  // Handling Saving
  const handleSave = (id) => {
    if (!id) return
    setTodos(prevTodos => prevTodos.map((todo) => todo.id === id ? { ...todo, title: editText.trim() } : todo))
    setEditId(null)
    setEditText('')
  }

  // Handling Checked
  const handleChecked = (id) => {
    if (!id) return
    setTodos(prevTodos => prevTodos.map((todo) => todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          required
          onChange={(e) => setInput(e.target.value)}
          className='border'
        />
        <Button type='submit' size='small' label='Add' />
      </form>

      {todos.map((item) => (
        <div
          key={item.id}
          className='w-150 mt-2 flex items-center justify-between bg-amber-200'
        >
          <div className='flex items-center px-2 font-semibold justify-between h-12 w-35 bg-amber-200' >
            <input
              checked={item.isChecked}
              onChange={() => handleChecked(item.id)}
              type="checkbox"
            />
            <li className={`list-none text-2xl ${item.isChecked ? 'line-through bg-gray-400' : ''}`}>
              {item.title}
            </li>
          </div>
          <div className='flex gap-1 px-2'>
            <button
              onClick={() => handleDelete(item.id)}
              className='h-6 cursor-pointer w-14 border bg-amber-500'>Delete</button>
            <button
              onClick={() => handleEdit(item.id, item.title)}
              className='h-6 cursor-pointer w-14 border bg-amber-500'>Edit</button>
          </div>
        </div>
      ))}

      {editId !== null && (
        <Modal
          value={editText}
          id={editId}
          handleSave={handleSave}
          setEditText={setEditText}
          onClose={() => setEditId(null)} // UX Recommendation: Give your modal a way to close without saving
        />
      )}
    </>
  )
}

export default TodosCrudModal
