import React from 'react'
import data from '../data'


// console.log(data);

function Courses() {
    let domain = "https://mindrisers.com.np";
    return (
        <>
            <h1 className='h-15 text-center mt-6 text-2xl font-semibold'>Featured Items</h1>
            <div className='min-h-screen w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-6 p-4 bg-white'>
                {data.map((item, index) => {
                    return (
                        <div key={index} className='flex flex-col items-center justify-between h-72 w-full max-w-[240px] p-4 rounded-lg shadow-md bg-green-400'>
                            <li className='list-none font-medium text-center order-2'>{item.title}</li>
                            <li className='list-none w-full h-40 flex items-center justify-center overflow-hidden rounded-md bg-white order-1'>
                                <img className='max-h-full max-w-full object-contain' src={`${domain}${item.image}`} alt="items" />
                            </li>
                        </div>
                    )
                })}
            </div>
        </>

    )
}

export default Courses