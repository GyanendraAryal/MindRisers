import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(10)
    const Increment = () => {
        setCount(count + 1)
        console.log("Clicked Increment");

    }
    const Decrement = () => {
        if(count == 0) return
        setCount(count - 1)
        console.log("Clicked Decrement");

    }

    return (
        <>
            <h3 className='text-2xl font-semibold'>{count}</h3>
            <button onClick={Increment} className='h-8 py-2 mx-2 px-6 bg-slate-600 text-white'>Increment</button>
            <button onClick={Decrement} className='h-8 py-2 mx-2 px-6 bg-slate-600 text-white'>Decrement</button>
        </>
    )
}

export default Counter