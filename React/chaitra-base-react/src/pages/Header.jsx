import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <header className="bg-slate-900 text-white shadow-md">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="text-xl font-extrabold tracking-tight cursor-pointer">
                    MyWebsite
                </div>
                <nav>
                    <ul className="flex items-center gap-6 font-medium">
                        <li>
                            <NavLink
                                to='/'
                                className={({ isActive }) => `hover:text-orange-500 ${isActive ? 'text-orange-500' : ''}`}
                            >Home</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/about'
                                className={({ isActive }) => `hover:text-orange-500 ${isActive ? 'text-orange-500' : ''}`}
                            >About</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/contact'
                                className={({ isActive }) => `hover:text-orange-500 ${isActive ? 'text-orange-500' : ''}`}
                            >Contact</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/owntodo'
                                className={({ isActive }) => `hover:text-orange-500 ${isActive ? 'text-orange-500' : ''}`}
                            >Owntodo</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
