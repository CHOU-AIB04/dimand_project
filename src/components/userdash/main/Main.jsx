import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Main = () => {
    const LogOut = ()=>{
        window.sessionStorage.removeItem("token")   
    }
  return (
    <>
    <header className='h-20 sh flex items-center justify-around'>
        <h1 className='font-bold text-[22px] md:text-[25px] textsh'><span className='text-red-800'>Client</span>Dash</h1>
        <div className='space-x-3'>
            <Link to={"/"}><button className='w-24 h-8 md:w-44 md:h-11 bg-red-800 text-white transition-all duration-500 hover:text-red-800 hover:bg-white sh' onClick={LogOut}>Log Out</button></Link>
            <Link to={"/"}><button className='w-24 h-8 md:w-44 md:h-11 bg-white text-red-800 transition-all duration-500 hover:text-white hover:bg-red-800 sh'>Home</button></Link>
        </div>
    </header>
    <section className='h-10 grid grid-cols-4 place-items-center'>
        <NavLink to={"/ClientDash"} className='border border-red-700 w-full h-12 insh flex justify-center items-center font-bold text-red-800' >Add</NavLink>
        <NavLink to={"/ClientDash/Allannouce"} className='border border-red-700 w-full h-12 insh flex justify-center items-center font-bold text-red-800' >All</NavLink>
        <NavLink to={"/ClientDash/AllOffers"} className='border border-red-700 w-full h-12 insh flex justify-center items-center font-bold text-red-800' >Offers</NavLink>
        <NavLink to={"/ClientDash/Response"} className='border border-red-700 w-full h-12 insh flex justify-center items-center font-bold text-red-800' >Response</NavLink>
    </section>
    <Outlet />
    </>
  )
}

export default Main
