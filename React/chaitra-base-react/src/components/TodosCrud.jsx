import React, { useState, useEffect } from 'react'
import Button from './Button'
import ModalTodo from './ModalTodo'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function TodosCrud() {

  const { handleSubmit, register, watch, formState: { errors, isSubmitting } } = useForm()
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
  const onSubmit = () => {
    // e.preventDefault();
    if (!input) return
    let newTodo = {
      id: Date.now(),
      title: input,
      isChecked: false
    }

    setTodos(prevTodos => [...prevTodos, newTodo])
    setInput('')
    toast.success("Todo added sucessfully")
  }

  //Handling Error
  const onError = (formErrors) => {
    Object.values(formErrors).forEach((error) => {
      if (error) {
        toast.error(error.message)
      }
    })
  }

  //Handling Delete
  const handleDelete = (id) => {
    if (!id) return
    setTodos(prevTodos => prevTodos.filter((item) => item.id == id ? item.id !== id : item))
    toast.warning("Todo Deleted")
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
    toast.info("Todo edited sucessfully")
  }

  //Handling Checked
  const handleChecked = (id) => {
    if (!id) return
    setTodos(prevTodos => prevTodos.map((item) => item.id == id ? { ...item, isChecked: !item.isChecked } : item))
  }


  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

      <form
        className='flex rounded justify-center py-2 h-14 w-[50%] m-auto bg-green-200 px-2'
        onSubmit={handleSubmit(onSubmit, onError)}>
        <input
          placeholder='Add your todo...'
          {...register('todo', {
            required: "Todo is required!!",
            minLength: { value: 3, message: "Must be atleast 3 characters" }
          })}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className='border' />
        <Button type='submit' size='small' label='Add' />
      </form>


      {todos.map((items) => (
        <div
          key={items.id}
          className='w-150 mt-2 m-auto flex items-center justify-between bg-amber-200'
        >
          {editId == items.id ? (
            <>
              <ModalTodo editText={editText} handleChecked={handleChecked} handleSave={handleSave} setEditText={setEditText} items={items} />
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

export default TodosCrud















// <input
//                 className='border h-5 bg-white w-40'
//                 value={editText}
//                 onChange={(e) => setEditText(e.target.value)}
//               />
//               <button
//                 onClick={() => handleSave(items.id)}
//                 className='h-6 cursor-pointer w-14 border bg-amber-500'>Save</button>