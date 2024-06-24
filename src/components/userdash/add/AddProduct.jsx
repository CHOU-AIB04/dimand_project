import React, { useContext, useState } from 'react'
import { Authcontext, UserData } from '../../../context/UserInfo'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
  let navigate = useNavigate()
  let {Formconfirmation,Handlechange} = useContext(Authcontext)
  let {PersonalInfo,count,setcount} = useContext(UserData)
  const [FormAdd,setFormAdd] = useState({
    nom : "",
    model : "",
    prix : "",
    file : "",
    description : ""
  })
  const Change = (event)=>{
    Handlechange(event,setFormAdd,FormAdd)
  }
  const Annouce = (event)=>{
    event.preventDefault()
   if (Formconfirmation(FormAdd) === 5) {
    const Data = new FormData()
    Data.append("nom",FormAdd.nom)
    Data.append("model",FormAdd.model)
    Data.append("prix",parseInt(FormAdd.prix))
    Data.append("file",FormAdd.file)
    Data.append("description",FormAdd.description)
    Data.append("Id",PersonalInfo[0].Id)
    axios.post("http://localhost/MY_PROJECTS/moto_project/AddAnnoucement.php",Data).then((res)=>{
      console.log(res.data)
      toast.success("Votre Annonce est Public")
      navigate("/ClientDash/Allannouce")
      setcount(count === 0 ? 1 : 0)
    })
   }
  }
  return (
   <>
  <h1 className='text-center font-bold text-red-800 text-[30px] mt-10'>Ajouter Une Annonce</h1>
    <form className='mt-10 relative left-1/2 -translate-x-1/2 w-[90%] space-y-5' onSubmit={Annouce}>
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <div className='flex flex-col gap-2 w-full md:w-[40%]'>
          <label htmlFor="" className='font-bold'>Nom</label>
          <input type="text" name="nom" placeholder='Nom' id="" className='h-9 rounded-md border border-red-800 bg-transparent sh focus:outline-none pl-2' onChange={Change}/>
        </div>
        <div className='flex flex-col gap-2 w-full md:w-[40%]'>
          <label htmlFor=""  className='font-bold'>Model</label>
          <input type="text" name="model" id="" className='h-9 rounded-md border border-red-800 bg-transparent sh focus:outline-none pl-2' onChange={Change}/>
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <div className='flex flex-col gap-2 w-full md:w-[40%]'>
          <label htmlFor=""  className='font-bold'>Prix</label>
          <input type={"number"} name="prix" id="" placeholder='En DH' className='h-9 rounded-md border border-red-800 bg-transparent sh focus:outline-none pl-2' onChange={Change}/>
        </div>
        <div className='flex flex-col gap-2 w-full md:w-[40%]'>
          <label htmlFor=""  className='font-bold'>Photo</label>
          <input type={"file"} name="file" id=""  onChange={Change}/>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
          <label htmlFor="" className='font-bold'>Description</label>
          <textarea name="description" id="" className='min-h-24 max-h-34 w-full rounded-md border border-red-800 bg-transparent sh focus:outline-none pl-2' onChange={Change}></textarea>
      </div>
      <button className='w-44 h-11 rounded-md  insh cursor-pointer bg-white text-red-800 transition-all duration-500 hover:bg-red-700 hover:text-white'>Annoncer</button>
    </form>  
   </>
  )
}

export default AddProduct
