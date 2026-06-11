import React, { useState } from 'react'
import Button from './Button'

function Modal() {
    const [open, setOpen] = useState(true)
    return (
        <>
            {open ?  (
            <div className='h-screen w-screen bg-black/50 flex justify-center items-center'>
            <div className='h-50 rounded-xl w-3/4 bg-amber-300'>
                        <Button onClick={() => {
                            setOpen(prev => !prev)
                }} size="small" rounded="xl" label="Close" />
            </div>
        </div>
            ) : (
                    <button onClick={() => {
                        setOpen(!prev)
                    }}>Open Modal</button>
            )}
        </>
    )
}

export default Modal