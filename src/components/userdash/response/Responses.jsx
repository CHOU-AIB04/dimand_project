import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import moto from "../../../assets/suzuki1.png"
import { UserData } from '../../../context/UserInfo'
const Response = () => {
  let {ClientResponse,setClientResponse} = useContext(UserData)
  console.log(ClientResponse)
  return (
   <>
    {
      ClientResponse.length !== 0 ? 
      <section className='w-[90%] relative left-1/2 -translate-x-1/2  mt-10 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center'>
      {
        ClientResponse.map((res)=>{
          return(
            <nav className='h-[550px] w-[350px] flex flex-col insh rounded-md'>
              <Link to={"/Details"}>
                <img src={`http://localhost/MY_PROJECTS/moto_project/assets/${res.Picture}`} alt="moto" className="transition-all duration-500 hover:scale-110 cursor-pointer"/>
              </Link>
              <div className='flex flex-col gap-3 items-center'>
                <p className='font-bold '>Votre Offer : </p>
                <p className='text-sm text-center'>{res.Offer}</p>
                {
                  res.Accepted === 1 ? 
                  <button  className="w-[120px] h-11 sh rounded-md  bg-green-500 text-white flex justify-center items-center cursor-default">Accepter</button>
                  : res.Accepted === 2
                  ?  <button  className="w-[120px] h-11 sh rounded-md  bg-red-500 text-white flex justify-center items-center cursor-default">Refuser</button>
                  :  <button  className="w-[120px] h-11 sh rounded-md  bg-orange-500 text-white flex justify-center items-center cursor-default">en Progress</button>
                }
              </div>
            </nav>
          )
        })
      }
     </section> : <h1 className='mt-10 text-center font-bold text-red-800 textsh'>Il'ya aucune Reponse pour l'instant</h1>
    }
   </>
  )
}

export default Response
