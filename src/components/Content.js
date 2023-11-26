import React, { useLayoutEffect, useRef} from 'react'
import {motion} from "framer-motion"
import './Respon.css'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls} from '@react-three/drei'
import { Model } from '../assets/3d/Scene'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { useF} from 'react';
import phone from '../assets/images/iphone-hand-83782827.png'
import { Swiper,SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Content() {
  const SectionRef = useRef()
  const el = SectionRef.current;
gsap.registerPlugin(ScrollTrigger)


useLayoutEffect(()=>{
let tl = gsap.timeline({
  scrollTrigger:{
    trigger:el,start:"top+=50 top",scrub:true,
  }
})
tl.to(".d3-cont",{
  top:"178%",right:"88%",scale:0.96,zIndex:-1,
})

},[])
  return (
    <div className=''>
      
     <div className="page1">
    
     <div className="t-cont">
        <h1 className="new">New</h1>
        <h1 className="brand">iphone 14 Pro</h1>
        <h1 className="feature">Big and Bigger .</h1>
        <p className='text-lg'>From $41.62/mo. for 24 mo. or $999 before trade-in</p>

        <div className="btn">
          <a href="#" className='buy'>Buy</a>
          <a href="#" className='learn'>Learn More</a>
        </div>

         

     </div>

<motion.div initial={{opacity:0}} whileInView={{opacity:1}}  transition={{duration:2.5}} 
className="d3-cont" ref={SectionRef}>
<Canvas camera={{fov:14}} >
  <ambientLight intensity={12}/>
  <directionalLight position={[1,0,0]}/>
  <Model/>
  <Environment preset='sunset'/>
  <OrbitControls enableZoom={false} enableDamping={true}/>
</Canvas>

</motion.div>
    
</div>

<div className="page2">

<div className="t-cont">
  <h1 className='system'>New Sound System</h1>
  <h1 className="base">Feel The Base.</h1>
  <p className="rupee">
  From $41.62/mo. for 24 mo. or $999 before trade-in
  </p>
  <div className="btn">
    <a href="#" className='buy'>Buy</a>
    <a href="#" className='learn'>Learn More</a>
        </div>
</div>

</div>

<div className="page3">

<div className="t-cont">
  <h1 className='text-lg text-slate-400'>New</h1>
  <h1 className="base">Brilliant.</h1>
  <p className="para text-xl text-white">
  A display that's up to 2x brighter in the sun.
  
  </p>
  <div className="btn">
    <a href="#" className='text-sm text-white bg-blue-500 px-6 py-2 rounded-3xl'>Try me!</a>
        </div>

</div>

<div className="img-cont">
  <img src={phone} alt="" />
</div>

</div>

<div className="page4">
<Swiper slidesPerView={3}>
  <SwiperSlide></SwiperSlide>
  <h1 className='text-2xl text-red-400'>amaanan</h1>
</Swiper>
</div>

</div>
  )
}
