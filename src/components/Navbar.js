import React from 'react'
import './Respon.css'
import {motion} from 'framer-motion'

export default function Navbar() {
  return (
    <div>
      <div className="nav">
      <img width="20" height="20" className='logo' src="https://img.icons8.com/ios-glyphs/30/mac-os.png" alt="mac-os"/>

      <div className="part2">
        <a href=".am">Store</a>
        <a href=".am">Mac</a>
        <a href=".am">iPad</a>
        <a href=".am">iphone</a>
        <a href=".am">Watch</a>
        <a href=".am">AirPods</a>
        <a href=".am">TV & Home</a>
        <a href=".am">Entertainment</a>
        <a href=".am">Accessories</a>
        <a href=".am">Support</a>
      </div>

      <div className="part3">
      <img width="19" height="12" src="https://img.icons8.com/material-rounded/24/search.png" alt="search"/>
      <img width="19" height="12" src="https://img.icons8.com/ios/50/shopping-bag.png" alt="shopping-bag"/>

      <div className="hmb" onClick={()=>{
        let cont = document.querySelector(".hmb-cont")
        let hmb_cl = document.querySelector(".hmb-cl")
        cont.classList.toggle("visi")
      }}>
        <div className="line"></div>
        <div className="line"></div>



        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.8}} className="hmb-cont visi">
        <a href="#" onClick={()=>{
          let store_pro = document.querySelector(".store-p")
          store_pro.classList.toggle("store-p-vis")
          console.log("clicked")
        }}>Store</a>
        
       
        <a href="#">Mac</a>
        <a href="#">iPad</a>
        <a href="#">iphone</a>
        <a href="#">Watch</a>
        <a href="#">AirPods</a>
        <a href="#">TV & Home</a>
        <a href="#">Entertainment</a>
        <a href="#">Accessories</a>
        <a href="#">Support</a>
      </motion.div>

      </div>

    

      </div>

      </div>
    </div>
  )
}
