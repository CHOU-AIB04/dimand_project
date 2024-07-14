import { useEffect, useState } from 'react'
import {Routes,Route, useNavigate, useLocation} from "react-router-dom"
import Header from './components/header/Header'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Annonce from './components/annonce/Annonce'
import Auth from './components/auth/Auth'
import toast, {Toaster} from "react-hot-toast"
import { Authcontext, UserData } from './context/UserInfo'
import axios from "axios"
import CryptoJS from 'crypto-js';
import Detail from './components/detail/Detail'
import Main from './components/userdash/main/Main'
import AddProduct from './components/userdash/add/AddProduct'
import AllProduct from './components/userdash/all/AllProduct'
import Offer from './components/userdash/offers/Offer'
import Response from './components/userdash/response/Responses'

function App() {
  let [islogged,setislogged] = useState(false)
  const navigate = useNavigate()
  // this function for decrypte an id comming from the database to be able to store it
  // Function to encrypt the ID

  const secretKey = "12AZ34ER56TY"
  const encryptId = (id, secretKey) => {
  const encrypted = CryptoJS.AES.encrypt(id,secretKey).toString();
  return encrypted;
  };

  // function for decypte the id from session storage

  const decryptId = (encrypted,secretKey) => {
    const decrypted = CryptoJS.AES.decrypt(encrypted, secretKey).toString(CryptoJS.enc.Utf8);
    return decrypted;
  };
  // here i neec i use effect throught i need to do an axios api with get methode to get all user data using his id from session storage
  // first i need to create a usestate for updating his value to reexecute the useeffect again
  let [count,setcount] = useState(0)
  let currentpath = useLocation()
                        // let's create 4 usestate for all user info 

  /**----------the fisrt usestate  for personal user info   */
  let [PersonalInfo,setPersonalInfo] = useState([]);

  /**----------the second usestate  for user Annoucement  */
  let [UserAnoucement,setUserAnoucement] = useState([]);

    /**----------the third usestate  for user Offer  */
  let [UserOffer,setUserOffer] = useState([]);

  
    /**----------the fourth usestate  for Client response  */
    let [ClientResponse,setClientResponse] = useState([]);
                      // create usestate to get allannoucement from database
  let [AllAnnounces,setAllAnnounces] = useState(()=>{
    const Data = window.localStorage.getItem("moto");
    return Data ? JSON.parse(Data) : []
  })
    // this variable for storing data comming from database to do filter
    const [Filter,setFilter] = useState([]);
  useEffect(() => {
    if (window.sessionStorage.getItem("token")) {
      const Id = window.sessionStorage.getItem("token");
      try {
        const Iddecryte = decryptId(Id, secretKey);
        axios.get(`http://localhost/MY_PROJECTS/diamand/auth?id=${Iddecryte}`).then((res) => {
          if (res.data !== false) {
            console.log(res.data)
            setPersonalInfo(res.data[0])
            setUserAnoucement(res.data[1])
            setUserOffer(res.data[2])
            setClientResponse(res.data[3])
            setislogged(true)
           
          } else {
            window.sessionStorage.removeItem("token");
            navigate("/auth");
            
          }
        });
      } catch (error) {
        console.error("Error decrypting ID:", error);
        // Handle decryption error, e.g., log the error or show a message to the user
      }
    }
    axios.get("http://localhost/MY_PROJECTS/diamand/Annoucement.php").then((res)=>{
      setAllAnnounces(res.data)
      setFilter(res.data)
      window.localStorage.setItem("houses",JSON.stringify(res.data))
    })

  }, [count]);
  

  // this specificpath variable for display the header and footer conponenets if the current not exist in the specificpath variable 
  const specificpath = ["/auth","/ClientDash","/ClientDash/Allannouce","/ClientDash/AllOffers","/ClientDash/Response","/ClientDash/AddAnnouce"]

  useEffect(()=>{
    const securepath = ["/ClientDash","/ClientDash/Allannouce","/ClientDash/AllOffers","/ClientDash/Response","/ClientDash/AddAnnouce"]
    if (securepath.includes(currentpath.pathname) && window.sessionStorage.length === 0) {
      navigate("/auth")
      toast.error("entrer votre compte")
    }else if(securepath.includes(currentpath.pathname) && window.sessionStorage.length !== 0){
      const decryptid = decryptId(window.sessionStorage.getItem("token"),secretKey)
      if (decryptid === "") {
        navigate("/auth")
        toast.error("il'ya un error !! entrer votre compte")
      }
     
    }
  },[currentpath.pathname])
   // this function for ocnfirming that all field are not empty in a specific
   const Formconfirmation = (formData)=>{
    let check = 0
      Object.keys(formData).map((input)=>{
          let current = formData[input]
          if (current === "") {
              toast.error(`the ${input} field is required`)
          }else{
              check++
          }
      })
    return check
  }
// this function for handling change for inputs field
  const Handlechange = (event,setFormData,FormData)=>{
    let {tagName,name,value}  = event.target
    // handle the input type 
    if (tagName === "INPUT") {
      let {type} = event.target
      if (type !== "file") {
        setFormData({...FormData,[name]:value}) 
      }else{
          let {files} = event.target
          setFormData({...FormData,[name]:files[0]})
      }
    }else{
      setFormData({...FormData,[name]:value})
    }
  }
  // this useState is for switching between log in and sign up in the Auth component

  let [switchform, setswitchform] = useState(0);
  return (
    <>
    <Authcontext.Provider value={{Formconfirmation,Handlechange,switchform,setswitchform}}>
    <UserData.Provider value={{PersonalInfo,setPersonalInfo,UserAnoucement,setUserAnoucement,UserOffer,setUserOffer,ClientResponse,setClientResponse,encryptId,decryptId,secretKey,count,setcount,islogged,setislogged,AllAnnounces,setAllAnnounces,Filter}}>
      <Toaster position='top-right'/>
      {
        !specificpath.includes(currentpath.pathname) ? <Header /> : <></>
      }
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/annonce' element={<Annonce/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/Details' element={<Detail/>}/>
        <Route path='/ClientDash' element={<Main />}>
          <Route index  element={<AddProduct />}/>
          <Route path='Allannouce' element={<AllProduct/>}/>
          <Route path='AllOffers' element={<Offer/>}/>
          <Route path='Response' element={<Response/>}/>
        </Route>
      </Routes>
      {
        !specificpath.includes(currentpath.pathname) ? <Footer /> : <></>
      }
    </UserData.Provider>
    </Authcontext.Provider>
   </>
  )
}

export default App
