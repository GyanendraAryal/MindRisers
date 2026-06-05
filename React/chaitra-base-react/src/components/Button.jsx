import React from 'react'

function Button(props) {
    let className;
    if (props.size == "small") {
        className = 'cursor-pointer border px-2 py-0.2 m-1'
    } else if (props.size == "medium") {
        className = 'cursor-pointer border px-4 py-5 m-1'
    } else{
        className = 'cursor-pointer border px-5 py-5 m-1'
    }
    return (
        <>
            <button className={className}>{props.label}</button >
        </>
    )
}

export default Button