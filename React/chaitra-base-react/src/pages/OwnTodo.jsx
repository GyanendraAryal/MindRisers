import React, { useState, useEffect } from 'react'
import ModalTodo from '../components/ModalTodo'
import axios from 'axios'

export default function OwnTodo() {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')
    const [editId, setEditId] = useState(null)
    const [editText, setEditText] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const [selectedTodo, setSelectedTodo] = useState(null)


    const fetchTodo = async () => {
        try {
            await axios.get('http://localhost:3000/api/todo')
                .then((res) => {
                    setTodos(res.data)
                    console.log(res.data)
                })
            // console.log(res);
        } catch (error) {
            console.log("Couldn't connect to api: ", error);
        }
    }

    useEffect(() => {
        fetchTodo()
    }, [])

    const onAddHandler = async () => {
        if (!input.trim()) return
        const newTodo = { id: Date.now(), title: input, isChecked: false }

        try {
            const res = await axios.post('http://localhost:3000/api/todo', newTodo)
            // if (res.data.success) {
            //     setTodos(prevTodos => [...prevTodos, newTodo])
            //     setInput('')
            // }
            setInput('')
            fetchTodo()

        } catch (error) {
            console.log("Error has occured", error);
        }

    }
    const onDeleteHandler = (id) => {
        if (!id) return
        axios.delete('http://localhost:3000/api/todo', { data: { id: id } })
            .then((res) => {
                if (res.data && res.data.success) {
                    fetchTodo()
                }
            })
            .catch((error) => console.log('Error: ', error)
            )
        // if (!id) return
        // setTodos(prevTodos => prevTodos.filter((todo) => todo.id !== id))
    }
    const onEditHandler = (newTodo) => {
        if (!newTodo.id && !newTodo.title) return
        setSelectedTodo(newTodo)
        setEditId(newTodo.id)
        setEditText(newTodo.title)
        setOpenModal(true)
    }
    const handleSave = (id) => {
        if (!id || !editText.trim()) return

        axios.put('http://localhost:3000/api/todo', { id: id, title: editText })
            .then((res) => {
                if (res.data && res.data.success) {
                    fetchTodo()
                    setEditId(null)
                    setEditText('')
                    setOpenModal(false)
                }
            })
            .catch((error) => console.log("Error: ", error)
            )
    }
    const checkedHandler = (todoItem) => {
        if (!todoItem.id) return
        axios.put('http://localhost:3000/api/todo',
            { id: todoItem.id, title: todoItem.title, isChecked: !todoItem.isChecked })
            .then((res) => {
                if (res.data && res.data.success) {
                    fetchTodo()
                }
            })
            .catch((error) => console.log("Error: ", error)
            )

    }

    return (
        <div
            className='h-screen flex flex-col items-center gap-2 mt-2 w-screen bg-white'>
            <h1 className='text-6xl font-bold text-center'>OwnTodo</h1>
            <div className='flex justify-center items-center px-1 gap-1 h-20'>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='Enter todo' className='border rounded' />
                <button
                    className='px-1 bg-blue-500 py-1 h-8 w-15 rounded cursor-pointer text-white hover:text-black'
                    onClick={onAddHandler} >Add</button>
            </div>

            {
                todos.map((todo) => (
                    <ul
                        className='flex py-1 items-center rounded px-1 w-100 h-10 justify-between bg-amber-100'
                        key={todo.id}>
                        <div className=' flex gap-1'>
                            <input
                                id={todo.id}
                                // value={todo.isChecked}
                                checked={todo.isChecked}
                                onChange={() => checkedHandler(todo)}
                                className='cursor-pointer'
                                type="checkbox" />
                            <li
                            // className='h-20 w-70 bg-amber-200'
                            ><label className='cursor-pointer' htmlFor={todo.id}>{todo.title}</label>
                            </li>
                        </div>
                        {/* Buttons */}
                        <div className='flex gap-2'>
                            <button
                                className='px-1 bg-blue-500 py-1 rounded cursor-pointer text-white hover:text-black'
                                onClick={() => onDeleteHandler(todo.id)} >Delete</button>
                            <button
                                className='px-1 bg-blue-500 py-1 rounded cursor-pointer text-white hover:text-black'
                                onClick={() => onEditHandler(todo)} >Edit</button>
                            {/* onEditHandler(todo) */}
                        </div>
                    </ul>
                ))}

            {openModal && <ModalTodo
                handleSave={handleSave}
                editText={editText}
                setEditText={setEditText}
                item={selectedTodo}
                handleChecked={checkedHandler}
                setOpenModal={setOpenModal}
            />}
        </div>



    )
}
