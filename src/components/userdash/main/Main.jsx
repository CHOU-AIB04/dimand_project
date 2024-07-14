import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Main = () => {
    const LogOut = ()=>{
        window.sessionStorage.removeItem("token")   
    }
  return (
    <>
    <header className='h-20 sh flex items-center justify-around'>
        <h1 className='font-bold text-[22px] md:text-[25px] textsh'><span className='text-yellow-600'>Client</span>Dash</h1>
        <div className='space-x-3'>
            <Link to={"/"}><button className='w-24 h-8 md:w-44 md:h-11 bg-yellow-600 text-white transition-all duration-500 hover:text-yellow-600 hover:bg-white sh' onClick={LogOut}>Log Out</button></Link>
            <Link to={"/"}><button className='w-24 h-8 md:w-44 md:h-11 bg-white text-yellow-600 transition-all duration-500 hover:text-white hover:bg-yellow-600 sh'>Home</button></Link>
        </div>
    </header>
    <section className='h-10 grid grid-cols-4 place-items-center'>
        <NavLink to={"/ClientDash"} className='border border-yellow-600 w-full h-12 insh flex justify-center items-center font-bold text-yellow-600' >Add</NavLink>
        <NavLink to={"/ClientDash/Allannouce"} className='border border-yellow-600 w-full h-12 insh flex justify-center items-center font-bold text-yellow-600' >All</NavLink>
        <NavLink to={"/ClientDash/AllOffers"} className='border border-yellow-600 w-full h-12 insh flex justify-center items-center font-bold text-yellow-600' >Offers</NavLink>
        <NavLink to={"/ClientDash/Response"} className='border border-yellow-600 w-full h-12 insh flex justify-center items-center font-bold text-yellow-600' >Response</NavLink>
    </section>
    <Outlet />
    </>
  )
}

export default Main
