import React from 'react'
import logo from "../../assets/logo.png"
import { FaRegUserCircle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
  <header className=' md:h-[90px]  flex flex-col sm:flex-row items-center justify-around rounded-md sh relative'>
    <NavLink to={'/'} className="self-start w-[150px] sm:w-[250px]  sm:self-center ml-10 sm:ml-0">
        <img src={logo} alt="pic" className='w-[190px] sm:w-[250px]'/>
    </NavLink>
    <ul className='flex items-center ml-7 md:ml-0 gap-10'>
        <NavLink to={''}  className='transition-all duration-300 hover:text-yellow-600 cursor-pointer'>Acceuil</NavLink>
        <NavLink to={'/annonce'}  className='transition-all duration-300 hover:text-yellow-600 cursor-pointer'>Annonces</NavLink>
    </ul>
    <NavLink to={"/ClientDash"} className="absolute right-10 top-7 sm:top-auto">
        <FaRegUserCircle size={32} className='text-yellow-600'/>
    </NavLink>
  </header>
  )
}

export default Header
