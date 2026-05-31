import React from 'react'
import { data } from '../data'

const { blogs } = data
console.log(blogs);


function Blogs() {
    let domain = "https://mindrisers.com.np";

    return (
        <>
            <h1 className='h-15 text-center font-semibod mt-6 text-2xl'>Blogs</h1>
            <div className='h-full mb-6 w-full gap-4 justify-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {blogs.map((item, index) => {
                    return (
                        <div key={index} className='h-full bg-amber-500 gap-2 w-60'>
                            <li className='list-none text-center font-medium'>{item.title}</li>
                            <li className='list-none text-center font-medium'><img src={`${domain}${item.image}`} alt='blogs' /></li>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Blogs