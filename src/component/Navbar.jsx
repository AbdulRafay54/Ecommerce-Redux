import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const selector = useSelector(state => state.Cart.cardsitem);

    const toggleMenu = () => {
        setIsOpen(!isOpen); 
    };

    return (
        <nav className='fixed top-0 left-0 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 shadow-lg z-50'>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-bold'>My E-commerce</h1>

                <div className='hidden md:flex items-center gap-8'>
                    <Link className='transition-colors duration-300 hover:text-gray-200 font-semibold text-lg' to="">
                        Home
                    </Link>
                    <Link className='transition-colors duration-300 hover:text-gray-200 font-semibold text-lg' to="about">
                        About
                    </Link>
                    <Link className='transition-colors duration-300 hover:text-gray-200 font-semibold text-lg' to="contact">
                        Contact
                    </Link>
                    <Link className='transition-colors duration-300 hover:text-gray-200 font-semibold text-lg' to="service">
                        Service
                    </Link>
                </div>

                <button 
                    className="md:hidden text-white p-2 rounded-lg transition-transform transform hover:scale-110 focus:outline-none"
                    onClick={toggleMenu}
                >
                    <img 
                        src={isOpen ? 'https://img.icons8.com/ios-filled/50/FFFFFF/multiply.png' : 'https://img.icons8.com/ios-filled/50/FFFFFF/menu.png'} 
                        alt={isOpen ? "Close Menu" : "Open Menu"} 
                        className="w-6 h-6" 
                    />
                </button>

                <Link to="/cart" className="bg-white text-blue-600 py-2 px-4 rounded-lg transition-transform transform hover:scale-105 shadow-lg font-bold flex items-center">
                    <img 
                        src='https://img.icons8.com/ios-filled/50/000000/shopping-cart.png' 
                        alt="Cart" 
                        className="w-5 h-5 mr-2" 
                    />
                    Cart {selector.length}
                </Link>
            </div>

            {isOpen && (
                <div className='md:hidden flex flex-col mt-2 bg-white rounded-lg shadow-lg p-4'>
                    <Link className='transition-colors duration-300 hover:text-blue-500 font-semibold text-lg' to="">
                        Home
                    </Link>
                    <Link className='transition-colors duration-300 hover:text-blue-500 font-semibold text-lg' to="about">
                        About
                    </Link>
                    <Link className='transition-colors duration-300 hover:text-blue-500 font-semibold text-lg' to="contact">
                        Contact
                    </Link>
                    <Link className='transition-colors duration-300 hover:text-blue-500 font-semibold text-lg' to="service">
                        Service
                    </Link>
                </div>
            )}
        </nav>
    )
}

export default Navbar;
