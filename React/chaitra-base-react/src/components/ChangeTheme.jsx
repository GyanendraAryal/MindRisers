import React, { useState } from 'react'

function ChangeTheme() {
    const [theme, setTheme] = useState('light')

    // const setLightTheme = () => {
    //     setTheme('light')
    // }

    // const setDarkTheme = () => {
    //     setTheme('dark')
    // }

    const handleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }

    return (

        <>
            <div className={`h-screen w-full ${theme == 'light' ? 'bg-amber-100 text-black' : 'bg-black text-white'}`}>
                {/* <button
                    onClick={setDarkTheme}
                    className='px-2 text-white bg-black py-1'>Dark Theme</button>
                <button
                    onClick={setLightTheme}
                    className='px-2 bg-amber-100 py-1'>LightTheme</button> */}
                <button
                    onClick={handleTheme}
                    className={`px-2 cursor-pointer ${theme === 'light' ? 'text-black bg-white' : 'text-white bg-black'}`}>{theme === 'light' ? 'Dark Theme' : 'Light Theme'}</button>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio velit ipsam?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio velit ipsam?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio velit ipsam?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio velit ipsam?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio velit ipsam?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio velit ipsam?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio velit ipsam?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio velit ipsam?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio velit ipsam?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio velit ipsam?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio velit ipsam?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio velit ipsam?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio velit ipsam?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio velit ipsam?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio velit ipsam?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio velit ipsam?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio velit ipsam?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio velit ipsam?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio velit ipsam?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio velit ipsam?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio velit ipsam?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio velit ipsam?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio velit ipsam?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio velit ipsam?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio velit ipsam?
                </p>
            </div>
        </>
    )
}

export default ChangeTheme