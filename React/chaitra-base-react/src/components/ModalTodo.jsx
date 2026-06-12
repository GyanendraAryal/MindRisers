import React, { useState } from 'react'

function ModalTodo({ handleSave, editText, setEditText, items, isChecked, handleChecked }) {
    const [openModal, setOpenModal] = useState(true)

    const handleModal = () => {
        setOpenModal(prev => !prev)
    }
    return (
        <>
            {openModal ? (
                <>
                    <div
                        onClick={handleModal}
                        className='h-screen w-full fixed top-0 left-0 bg-black/50'></div>
                    <div className='flex flex-col rounded justify-center m-auto items-center gap-2 h-[40%] w-[50%] bg-amber-300 fixed inset-0'>
                        <button
                            onClick={handleModal}
                            className='cursor-pointer border border-blue-500 rounded h-6 w-6 absolute top-4 right-4 hover:text-white hover:bg-black/80'>X</button>
                        <div className='flex gap-2'>
                            <input
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                className='bg-white border h-8 w-70' />
                            <button
                                onClick={() => handleSave(items.id)}
                                className='cursor-pointer border h-8 w-14 '>Save</button>
                        </div>
                        <div className='flex gap-2 h-8 w-70 bg-amber-200 px-2'>
                            <input
                                checked={items.isChecked}
                                onChange={() => handleChecked(items.id)}
                                type="checkbox" />
                            <li className={`list-none text-2xl ${items.isChecked ? 'line-through bg-gray-400' : ''}`}>{items.title}</li>
                        </div>
                    </div></>
            ) : ''}
        </>
    )
}

export default ModalTodo