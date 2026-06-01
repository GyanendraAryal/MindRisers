import React from 'react'

function BasicBlogs() {
    let description =
        "Lorem ipsum dolor sit amet consectsequi quas fugit incidunt.";

    let domain = "https://mindrisers.com.np";
    return (
        <>
            {blogs.map((element, index) => (
                <div className="div" key={index}>
                    <span>{element.title}</span>
                    <span><img height={100} src={domain + element.image} alt="logo" /></span>
                </div>
            ))}
        </>
    )
}

export default BasicBlogs