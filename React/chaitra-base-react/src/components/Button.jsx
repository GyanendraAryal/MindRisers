import React from 'react'

function Button({ size, setOpen, rounded:rounded, label, ...rest }) {
    let className;
    if (size == "small") {
        className = `cursor-pointer rounded-${rounded} border  px-2 py-0.2 m-1`
    } else if (size == "medium") {
        className = `cursor-pointer rounded-${rounded} border px-4 py-5 m-1`
    } else {
        className = `cursor-pointer rounded-${rounded} border px-5 py-5 m-1`
    }
    return (
        <>
            <button onClick={() => {
                setOpen((prev)=> !prev)
                
            }} className={className}>{label}</button >
        </>
    )
}

export default Button