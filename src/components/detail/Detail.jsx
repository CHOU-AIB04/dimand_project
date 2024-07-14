import React, { useContext, useState } from 'react'
import moto from '../../assets/suzuki1.png'
import { UserData } from '../../context/UserInfo'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'

const Detail = () => {
  let navigate = useNavigate()
  let {AllAnnounces,setAllAnnounces,islogged,PersonalInfo,count,setcount} = useContext(UserData)
  let houses = JSON.parse(window.localStorage.getItem("houses"))
  const [data,setdata] = useState(houses)
  let id = window.localStorage.getItem("id")
  let [ID,setID] = useState(id)
  const moto_data = data.filter((moto)=> moto.moto_Id === parseInt(ID))
  const Suggestion = [data[0],data[1],data[2]]

  const HandleMsg = ()=>{
    if (islogged) {
      let msg = document.getElementById("msg").value
      if (msg === "") {
        toast.error('poser votre offer!!')
      }else{
        const moto_Id = moto_data[0].moto_Id
        const annouce_maker = moto_data[0].user_id
        const user_id = PersonalInfo[0].Id
        if (annouce_maker !== user_id) {
          const Form = new FormData()
          Form.append("annouce_maker",annouce_maker)
          Form.append("user_id",user_id)
          Form.append("moto_Id",moto_Id)
          Form.append("msg",msg)
          axios.post("http://localhost/MY_PROJECTS/diamand/Offer.php",Form).then((res)=>{
            if (res.data) {
              toast.success("votre offre est envoyer")
              setcount(count === 1 ? 0 : 1)
              navigate("/")
            }else{
              toast.error("offre deja envoyer")
            }
          })
        } else {
          toast.error("tu ne peux pas envovez une offre a toi meme")
        }

      }
    }else{
      navigate("/auth")
    }

  }
  return (
  <>
   <section className='mt-10 mb-10 w-[90%]  grid grid-cols-1 md:grid-cols-2 relative left-1/2 -translate-x-1/2 place-items-center'>
    <div className='self-start'>
      <img src={`http://localhost/MY_PROJECTS/diamand/assets/${moto_data[0].Picture}`} alt="moto" />
      </div>
    <div className=' h-full flex flex-col justify-evenly w-full gap-7'>
      <h1 className='font-bold text-[25px] text-yellow-600'>{moto_data[0].Nom}</h1>
      {/* <p></p> */}
      <p className='font-bold'>{moto_data[0].Description}</p>
      <p className='text-gray-400'>model {moto_data[0].Model}</p>
      <h2 className='text-[20px] font-bold'>{moto_data[0].Price} Mad</h2>
      <div className='flex flex-col gap-5 w-full'>
        <textarea name="" id="msg" className='w-full min-h-[100px] max-h-[150px] focus:outline-none sh rounded-md pt-2 pl-2'></textarea>
        <button className='h-10 w-44 rounded-md bg-white text-yellow-600 cursor-pointer sh transition-all duration-500 hover:bg-yellow-600 hover:text-white' onClick={HandleMsg}>make offer</button>
        </div>
    </div>
   </section>
   <h1 className='mt-32 text-center font-bold text-[40px] relative aft'>Suggestion</h1>
   {/* adittional product section */}
   <section className='w-[90%] relative left-1/2 -translate-x-1/2  mt-10 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center'>
   {
    Suggestion.map((mot)=>{
      return(
        <nav className='h-[500px] w-[350px] flex flex-col sh rounded-md'>
          <div>
            <img src={`http://localhost/MY_PROJECTS/diamand/assets/${mot.Picture}`} alt="moto" className="transition-all duration-500 hover:scale-110 cursor-pointer"/>
          </div>
          <div className='flex flex-col gap-3 items-center'>
            <h1 className='font-bold text-[25px] text-yellow-600'>{mot.Nom}</h1>
            <p className='line-clamp-3'>{mot.Description}</p>
            <h2 className='font-bold text-[20px]'>{mot.Price}$</h2>
            <button className="w-[150px] h-8 sh rounded-md transition-all duration-500 hover:bg-yellow-600 hover:text-white" onClick={()=>{window.localStorage.setItem("id",mot.moto_Id),setID(mot.moto_Id),scrollTo({top:0,behavior:"smooth"})}}>Offrer</button>
          </div>
        </nav>
      )
    })
   }
    

   </section>
  </>
  )
}

export default Detail
