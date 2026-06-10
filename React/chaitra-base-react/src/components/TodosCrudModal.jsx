import React, { useState } from 'react'
import Button from './Button'
import { useEffect } from 'react'

function TodosCrudModal() {

  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState('')

  const [input, setInput] = useState('')
  const [todos, setTodos] = useState(() => {
    const todos = localStorage.getItem('todos')
    return todos ? JSON.parse(todos) : []
  })

  useEffect(() => {
    if (!todos) return
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  //Handling Submit
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input) return
    let newTodo = {
      id: Date.now(),
      title: input,
      isChecked: false
    }

    setTodos(prevTodos => [...prevTodos, newTodo])
    setInput('')
  }

  //Handling Delete
  const handleDelete = (id) => {
    if (!id) return
    setTodos(prevTodos => prevTodos.filter((item) => item.id == id ? item.id !== id : item))
  }

  //Handling Edit
  const handleEdit = (id, currentText) => {
    if (!id || !currentText.trim()) return
    setEditId(id)
    setEditText(currentText)
  }

  //Handling Saving
  const handleSave = (id) => {
    if (!id) return
    setTodos(prevTodos => prevTodos.map((item) => item.id == id ? { ...item, title: editText } : item))
    setEditId(null)
    setEditText('')
  }

  //Handling Checked
  const handleChecked = (id) => {
    if (!id) return
    setTodos(prevTodos => prevTodos.map((item) => item.id == id ? { ...item, isChecked: !item.isChecked } : item))
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className='border' />
        <Button type='submit' size='small' label='Add' />
      </form>


      {todos.map((items) => (
        <div
          key={items.id}
          className='w-150 mt-2 flex items-center justify-between bg-amber-200'
        >
          {editId == items.id ? (
            <>
              <div className='h-screen w-screen flex bg-black/30 items-center justify-center fixed inset-0 z-40' >
                <div className='h-20 flex justify-center z-40 gap-4 items-center w-1/2 bg-amber-300 ' >
                  <input
                    className='border h-12 bg-white w-80'
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <button
                    onClick={() => handleSave(items.id)}
                    className='h-12 cursor-pointer w-18 border bg-amber-500'>Save</button>
                </div>
              </div>
            </>
          ) : (
            <>
              < div className='flex items-center px-2 font-semibold justify-between h-12 w-35 bg-amber-200' >
                <input
                  checked={items.isChecked}
                  onChange={() => handleChecked(items.id)}
                  type="checkbox" />
                <li className={`list-none text-2xl ${items.isChecked ? 'line-through bg-gray-400' : ''}`}>{items.title}</li>
              </div >
              <div className='flex gap-1 px-2'>
                <button
                  onClick={() => handleDelete(items.id)}
                  className='h-6 cursor-pointer w-14 border bg-amber-500'>Delete</button>
                <button
                  onClick={() => handleEdit(items.id, items.title)}
                  className='h-6 cursor-pointer w-14 border bg-amber-500'>Edit</button>
              </div></>
          )}

        </div>
      ))}

    </>
  )
}

export default TodosCrudModal




