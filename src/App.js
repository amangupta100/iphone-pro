import './App.css';
import Content from './components/Content';
import Navbar from './components/Navbar';
import './components/Respon.css'
import HashLoader from 'react-spinners/HashLoader'
import { useState,useEffect } from 'react';


function App() {
  const [load,setLoad] = useState(false)
useEffect(()=>{
setLoad(true)
setTimeout(()=>{
setLoad(false)
},5000)
},[])
  return (
    <>
   { 
load? <HashLoader className='mx-[50%] my-[20%]' color="black" size={55} speedMultiplier={0.9}/>:<Content/>
}
   </>
  )}

  export  default App;