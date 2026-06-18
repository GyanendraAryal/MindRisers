
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Product from './Product'

export default function ProductsListApi() {
    const [product, setProduct] = useState([])
    // const [item, setItem] = useState("")
    const [searchInput, setSearchInput] = useState("")
    const [perPage, setPerPage] = useState(30)
    
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/search?q=${searchInput}&limit=${perPage}`)
            .then((res) => {
                console.log(res.data.products)
                setProduct(res.data.products)
            })
    }, [searchInput, perPage])

    useEffect(() => {
        console.log(searchInput);
    }, [searchInput])

    return (
        <>
            <div className='flex w-80 gap-2 m-auto justify-start items-center p-2'>
                <input
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className='border w-70' />
                <select
                    value={perPage}
                    onChange={(e) => setPerPage(e.target.value)}>
                    <option>5</option>
                    <option>10</option>
                    <option>15</option>
                    <option>20</option>
                    <option>25</option>
                    <option>30</option>
                </select>

            </div>
            <div className='gap-x-1 place-items-center px-1 mt-2 lg:grid gap-1 grid-cols-3'>
                {product.map((item, index) => (
                    <Product
                        key={index}
                        title={item.title}
                        description={item.description}
                        rating={item.rating}
                        price={item.price}
                        imageUrl={item.images}
                        imageAlt='No Internet'
                        buttonText="Buy Now"
                    />
                    // <ul key={item.id}>
                    //     <li>{item.title}</li>
                    // </ul>

                ))}
            </div>

        </>
    )
}