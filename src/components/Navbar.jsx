import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';


/* import { navLinks } from '../constants'; */
import { logo, menu, close } from '../assets';

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/" className="flex font-bold shadow-md rounded-lg w-10 items-center justify-center h-10 bg-white">
        <p className='blue-gradient_text'>mL</p>

      </NavLink>
      
      <nav className='flex text-lg gap-7 font-medium'>
      <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500':'text-white'}>
          Projects
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500':'text-white'}>
          About
        </NavLink>

        
      </nav>
    </header>
  )
}

export default Navbar