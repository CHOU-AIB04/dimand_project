import React from 'react'
import logo from "../../assets/logo-white.png"
import { FaRegUserCircle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const Header = () => {
  let Style = {
    color : 'red'
  }
  return (
  <header className='h-[90px]  flex flex-col sm:flex-row items-center justify-around rounded-md sh relative'>
    <NavLink to={'/'} className="self-start sm:self-center ml-10 sm:ml-0">
        <img src={logo} alt="pic" className='w-[70px] sm:w-[100px] mix-blend-multiply'/>
    </NavLink>
    <ul className='flex items-center gap-10'>
        <NavLink to={''}  style={((isActive)=>isActive ? Style : null)} className='transition-all duration-300 hover:text-red-500 cursor-pointer'>Acceuil</NavLink>
        <NavLink to={'/annonce'} style={((isActive)=>isActive ? Style : null)} className='transition-all duration-300 hover:text-red-500 cursor-pointer'>Annonces</NavLink>
    </ul>
    <NavLink to={"/ClientDash"} className="absolute right-10 top-3 sm:top-auto">
        <FaRegUserCircle size={32} className='text-red-500'/>
    </NavLink>
  </header>
  )
}

export default Header
