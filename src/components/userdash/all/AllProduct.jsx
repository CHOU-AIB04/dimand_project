import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import moto from "../../../assets/suzuki1.png"
import { UserData } from '../../../context/UserInfo'
import axios from 'axios'
import toast from 'react-hot-toast'
const AllProduct = () => {
  let {UserAnoucement,count,setcount} = useContext(UserData)
  console.log(UserAnoucement)
  const Delete = (id)=>{
    axios.get(`http://localhost/MY_PROJECTS/moto_project/AddAnnoucement.php?Id=${id}`).then((res)=>{
      toast.success("votre annonce est supprimer")
      setcount(count === 1 ? 0 : 1)
    })
  }
  return (
    <>
      {
        UserAnoucement.length !== 0 ? 
        <section className='w-[90%] relative left-1/2 -translate-x-1/2  mt-10 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center'>
          {
            UserAnoucement.map((motor)=>{
              return(
                <nav className='h-[550px] w-[350px] flex flex-col sh rounded-md' key={motor.moto_Id}>
                  <Link to={"/Details"}>
                    <img src={`http://localhost/MY_PROJECTS/moto_project/assets/${motor.Picture}`} alt="moto" className="transition-all duration-500 hover:scale-110 cursor-pointer"/>
                  </Link>
                  <div className='flex flex-col gap-3 items-center'>
                    <h1 className='font-bold text-[30px] text-red-500'>{motor.Nom}</h1>
                    <p className='font-bold'>Model : <span>{motor.Model}</span></p>
                    <p className='line-clamp-3'>{motor.Description}</p>
                    <h2 className='font-bold text-[20px]'>{motor.Price} $</h2>
                    <button  className="w-[150px] h-11 insh rounded-md transition-all duration-500 hover:bg-red-500 hover:text-white flex justify-center items-center" onClick={()=>Delete(motor.moto_Id)}>Supprimer</button>
                  </div>
                </nav>
              )
            })
          }
        </section>
        : <h1 className='mt-10 text-center font-bold text-red-800 textsh'>Il'ya aucune annoncement pour l'instant</h1>
      }
    </>
    
  )
}

export default AllProduct
