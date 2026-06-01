import React from 'react'
import { data } from '../data/data'

const { courses } = data
// console.log(courses);

function Courses() {
    let domain = "https://mindrisers.com.np";

    return (
        <>
            <h1 className='h-15 text-center mt-6 text-2xl font-semibold'>Featured</h1>
            <div className='h-full justify-items-center gap-4 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {courses.map((item, index) => {

                    return item.featured ? (<div key={index} className='flex flex-col text-white items-center justify-evenly h-72 w-full max-w-60 rounded-lg shadow-md bg-green-500'>
                        <ul>
                            <li className='list-none font-medium text-center'>{item.title}</li>
                            <li className='list-none font-medium text-center'><img src={`${domain}${item.image}`} alt="item" /></li>
                            <li><span>{item.featured ? "Featured: Yes" : "Featured: No"} </span></li>
                        </ul>
                    </div>) : null
                    // <div key={index} className='flex flex-col text-white item-center justify-evenly h-72 w-full max-w-60 rounded-lg shadow-md bg-green-500'>
                    //     <li className='list-none font-medium text-center'>{item.title}</li>
                    //     <li className='list-none font-medium text-center'><img src={`${item.featured ? `${domain}${item.image}` : ''}`} alt="item" /></li>
                    //     <li><span>{item.featured ? "Featured: Yes" : "Featured: No"} </span></li>
                    // </div>
                })}
            </div>
            <h1 className='h-15 text-center mt-6 text-2xl font-semibold'>Others</h1>
            <div className='h-full justify-items-center gap-4 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {courses.map((item, index) => {

                    return !item.featured ? (<div key={index} className='flex flex-col text-white items-center justify-evenly h-72 w-full max-w-60 rounded-lg shadow-md bg-green-500'>
                        <ul>
                            <li className='list-none font-medium text-center'>{item.title}</li>
                            <li className='list-none font-medium text-center'><img src={`${domain}${item.image}`} alt="item" /></li>
                            <li><span>{item.featured ? "Featured: Yes" : "Featured: No"} </span></li>
                        </ul>
                    </div>) : null
                    // <div key={index} className='flex flex-col text-white item-center justify-evenly h-72 w-full max-w-60 rounded-lg shadow-md bg-green-500'>
                    //     <li className='list-none font-medium text-center'>{item.title}</li>
                    //     <li className='list-none font-medium text-center'><img src={`${item.featured ? `${domain}${item.image}` : ''}`} alt="item" /></li>
                    //     <li><span>{item.featured ? "Featured: Yes" : "Featured: No"} </span></li>
                    // </div>
                })}
            </div>
        </>

    )
}

export default Courses