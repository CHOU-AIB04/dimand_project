import React, { useContext } from 'react'
import moto from '../../assets/suzuki1.png'
import { Link, useNavigate } from 'react-router-dom'
import { UserData } from '../../context/UserInfo'
const Annonce = () => {
  let navigate = useNavigate()
  let {AllAnnounces} = useContext(UserData)
  return (
    <>
    {
      AllAnnounces.length !== 0 ?
        <section className='w-[90%] relative left-1/2 -translate-x-1/2  mt-10 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center'>
          {
            AllAnnounces.map((annouce)=>{
              return(
                <nav className='h-[500px] w-[350px] flex flex-col insh rounded-md' key={annouce.moto_Id}>
                  <Link to={"/Details"} onClick={()=>{window.localStorage.setItem("id",annouce.moto_Id),scrollTo({top:0,behavior:"smooth"})}}>
                    <img src={`http://localhost/MY_PROJECTS/diamand/assets/${annouce.Picture}`} alt="moto" className="transition-all duration-500 hover:scale-110 cursor-pointer"/>
                  </Link>
                  <div className='flex flex-col gap-3 items-center'>
                    <h1 className='font-bold text-[25px] text-yellow-600'>{annouce.Nom}</h1>
                    <p className='line-clamp-3'>{annouce.Description}</p>
                    <h2 className='font-bold text-[20px]'>{annouce.Price} DH</h2>
                    <Link to={"/Details"} className="w-[150px] h-8 sh rounded-md transition-all duration-500 hover:bg-yellow-600 hover:text-white flex justify-center items-center" onClick={()=>{window.localStorage.setItem("id",annouce.moto_Id),scrollTo({top:0,behavior:"smooth"})}}>Offrer</Link>
                  </div>  
                </nav>
              )
            })
          }
        
         </section> : <h1 className='mt-10 text-center font-bold text-yellow-600 textsh'>Il'ya aucune Annonce  pour l'instant</h1>
    }
    </>
    
  
  )
}

export default Annonce
