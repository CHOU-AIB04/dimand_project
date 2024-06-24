import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import moto from "../../../assets/suzuki1.png"
import { UserData } from '../../../context/UserInfo'
import axios from 'axios'
import toast from 'react-hot-toast'

const Offer = () => {
  let {UserOffer,setUserOffer,setcount,count} = useContext(UserData)
  console.log(UserOffer)
  const Accepted = (moto_id,user_id,offer_maker)=>{
  console.log(`moto_id : ${moto_id} , user_id : ${user_id} , annouce_maker : ${offer_maker}`)
    axios.get(`http://localhost/MY_PROJECTS/moto_project/Offer.php?res=${1}&moto_id=${moto_id}&user_id=${user_id}&offer_maker=${offer_maker}`).then((res)=>{
      if (res.data) {
        toast.success("Offre Accepter !!")
        setcount(count === 0 ? 1 :0 )
      }
    })
  }
  const Refused = (moto_id,user_id,offer_maker)=>{
    axios.get(`http://localhost/MY_PROJECTS/moto_project/Offer.php?res=${2}&moto_id=${moto_id}&user_id=${user_id}&offer_maker=${offer_maker}`).then((res)=>{
      if (res.data) {
        toast.success("Offre Refuser !!")
        setcount(count === 0 ? 1 :0 )
      }
    })
  }
  return (
    <>
    {
      UserOffer.length !== 0 ?
      <section className='w-[90%] relative left-1/2 -translate-x-1/2  mt-10 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center'>
        {
          UserOffer.map((offer)=>{
            return(
            
                <nav className='h-[550px] w-[350px] flex flex-col insh rounded-md' key={offer.Id}>
                  <Link to={"/Details"}>
                    <img src={`http://localhost/MY_PROJECTS/moto_project/assets/${offer.Picture}`} alt="moto" className="transition-all duration-500 hover:scale-110 cursor-pointer"/>
                  </Link>
                  <div className='flex flex-col gap-3 items-center'>
                    <h1 className='font-bold text-[17px] text-red-500'>FROM : <span className='text-black'>{offer.Full_name}</span></h1>
                    <p className='font-bold '>Offer : </p>
                    <p className='text-sm text-center'>{offer.Offer}</p>
                    {
                      offer.Accepted === 0 ? 
                      <div className='flex justify-around items-center w-full gap-5'>
                        <button  className="w-[120px] cursor-pointer h-11 grsh rounded-md transition-all duration-500 hover:bg-green-500 hover:text-white flex justify-center items-center" onClick={()=>Accepted(offer.Moto_Id,offer.user_id,offer.Offer_maker_id)}>Accepter</button>
                        <button  className="w-[120px] cursor-pointer h-11 sh rounded-md transition-all duration-500 hover:bg-red-500 hover:text-white flex justify-center items-center" onClick={()=>Refused(offer.Moto_Id,offer.user_id,offer.Offer_maker_id)}>Refuser</button>
                      </div> 
                      : offer.Accepted === 1 
                      ? <div>
                          <p className='font-bold '>Information Sur <span className='text-red-800'>{offer.Full_name}</span> </p>
                          <p className='font-bold '>Email : <span className='text-red-800'>{offer.Email}</span></p>
                          <p className='font-bold '>Phone : <span className='text-red-800'>{offer.Phone}</span></p>
                        </div> 
                      : <button  className="w-[120px] h-11 insh rounded-md flex justify-center items-center">Refuser</button>
                    }
                  </div>
                </nav>
            )
          })
        }
       
      </section>  :<h1 className='mt-10 text-center font-bold text-red-800 textsh'>Il'ya aucune Offer pour l'instant</h1>
    }
    </>
    
    
  )
}

export default Offer
