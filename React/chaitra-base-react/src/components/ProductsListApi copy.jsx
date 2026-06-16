
import React, { useState } from 'react'
import axios from 'axios'

export default function ProductsListApi() {
    const [product, setProduct] = useState([])
    const [item, setItem] = useState('')
    const [searchInput, setSearchInput] = useState(0)

    const fetchApi = async () => {
        try {
            const res = await axios.get("https://dummyjson.com/products")
            // res.then((data)=> {return data})
            // console.log(res.data.products)
            const data = res.data.products
            // console.log(res.data.products[0].id)
            // data.map((item) => {
            //     console.log(item.id)
            //     console.log(item.title)
            //     console.log(item.description)
            // }
            // )
            // return data
            setProduct(prev => res.data.products)
        }
        catch (error) {
            console.error("Error: ", error)
        }
    }

    //Query:- /search?q=Essence Mascara Lash Princess

    const handleSearch = async (item) => {
        if (!item.trim()) return
        try {
            const res = await axios.get(`https://dummyjson.com/products/search?q=${item}`)
            // console.log(res.data.products);
            // console.log(item);
            setSearchInput(res.data.products)

            console.log(searchInput[0].id);


            // data.then((data) => {
            //     console.log(data)
            //     setSearch(data)
            // }
            // )
            // console.log(data)

        } catch (error) {
            console.log("Error: ", error);

        }
    }

    // useEffect(() => {
    //     const res = await axios.get(`https://dummyjson.com/products/search?q=${item}`)
    //     // console.log(res.data.products);
    //     // console.log(item);
    //     setSearchInput(res.data.products)
    // }, [searchInput])


    // try {
    //     const res = await axios.get(`https://dummyjson.com/products/search?q=${item}`)
    //     // console.log(res.data.products);
    //     // console.log(item);
    //     setSearchInput(res.data.products)

    //     console.log(searchInput[0].id);


    //     // data.then((data) => {
    //     //     console.log(data)
    //     //     setSearch(data)
    //     // }
    //     // )
    //     // console.log(data)

    // } catch (error) {
    //     console.log("Error: ", error);

    // }

    // const searchItem = (item) => {
    //     product.find((item) => {

    //     })
    // }

    // console.log(data);

    // console.log(product.products[0]);

    return (
        <>
            <div>
                <div className='flex w-80 bg-amber-300 gap-2 justify-start items-center p-2 flex-col'>
                    <input
                        value={item}
                        onChange={(e) => setItem(e.target.value)}
                        className='border w-70' />
                    <button
                        onClick={() => handleSearch(item)}
                        className='h=6 w-50'
                    >Search</button>
                    {searchInput && <p>Search items deail is:
                        {searchInput[0].id}
                        <br />
                        {searchInput[0].title}
                        <br />
                        {searchInput[0].description}


                    </p>}
                    <button
                        className='h-9 cursor-pointer w-20 border bg-amber-300 text-center'
                        onClick={fetchApi}
                    >Click</button>
                </div>

                {/* <h3>Searched item is: {
                    product.filter((item) => {
                        item.first_name === search ? `${search}` : "Not found!"
                    })}</h3> */}



                {/* {product.map((item) => (

                    <ul key={item.id}>
                        <li>{item.id}</li>
                        <li>{item.title}</li>
                    </ul>

                ))} */}
            </div>

        </>
    )
}