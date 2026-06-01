import React from 'react'
import { todos } from '../data/todos'
function Todo() {
    return (
        <>
            <table className='w-full border text-center' >
                <thead>
                    <tr>
                        <th className='border-2'>Todos</th>
                        <th className='border-2'>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((item) => {
                        return <tr key={item.id}>
                            <td className='border-2'>{item.todo}</td>
                            <td className='border-2'>{item.completed ? "Completed" : "Pending"}</td>
                        </tr>

                    })}
                </tbody>
            </table>
        </>
    )
}

export default Todo