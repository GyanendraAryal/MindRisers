import React from 'react'
import { todos } from '../data/todos'
import Button from './Button'
function Todo() {
    return (
        <>
            <table className='w-full border text-center' >
                <thead>
                    <tr>
                        <th className='border-2 bg-blue-500'>Todos</th>
                        <th className='border-2 bg-blue-500'>Status</th>
                        <th className='border-2 bg-blue-500'>Settings</th>

                    </tr>
                </thead>
                <tbody>
                    {todos.map((item) => {
                        return <tr key={item.id}>
                            <td className={`border-2`}>{item.todo}</td>
                            <td className={`border-2`}><span className={` p-1 text-sm m-0.1 ${item.completed ? "bg-green-500" : "bg-red-500"}`}>{item.completed ? "Completed" : "Pending"}</span></td>
                            <td className='border-2 flex items-center justify-center'><Button label="edit" size="small" /><Button label="delete" size="small" /></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Todo