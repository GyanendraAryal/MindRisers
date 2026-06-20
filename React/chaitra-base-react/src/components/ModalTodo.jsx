import React from 'react'

function ModalTodo({
    handleSave,
    setEditText,
    editText,
    item,
    handleChecked,
    setOpenModal
}) {

    if (!item) return null

    return (
        <>
            <div
                onClick={() => setOpenModal(false)}
                className='h-screen w-full fixed top-0 left-0 bg-black/50'></div>

            <div className='flex flex-col rounded justify-center m-auto items-center gap-2 h-[40%] w-[50%] bg-amber-300 fixed inset-0'>
                <button
                    onClick={() => setOpenModal(false)}
                    className='cursor-pointer border border-blue-500 rounded h-6 w-6 absolute top-4 right-4 hover:text-white hover:bg-black/80'>
                    X
                </button>

                <div className='flex gap-2'>
                    <input
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className='bg-white border h-8 w-70'
                    />

                    <button
                        onClick={() => handleSave(item.id)}
                        className='cursor-pointer border h-8 w-14'>
                        Save
                    </button>
                </div>

                <div className='flex gap-2 h-8 w-70 bg-amber-200 px-2'>
                    <input
                        checked={item.isChecked}
                        onChange={() => handleChecked(item)}
                        type="checkbox"
                    />

                    <li
                        className={`list-none text-2xl ${
                            item.isChecked
                                ? 'line-through bg-gray-400'
                                : ''
                        }`}>
                        {item.title}
                    </li>
                </div>
            </div>
        </>
    )
}

export default ModalTodo