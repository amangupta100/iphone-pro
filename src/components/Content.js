import React, { useLayoutEffect, useRef} from 'react'
import {motion} from "framer-motion"
import './Respon.css'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls} from '@react-three/drei'
import { Model } from '../assets/3d/Scene'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import phone from '../assets/images/iphone-hand-83782827.png'
import Navbar from './Navbar'


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

      
      <Navbar/>
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
    <a href="#" className='try'>Try me!</a>
        </div>

</div>

  <img src={phone} alt="" />

</div>

<div className="page4">
<p className="cont">
*Instant savings, otherwise referred to as instant cashback, is available with the purchase of an eligible product for qualifying HDFC Bank Credit Cards and EasyEMI Credit Cards only. Minimum transaction value of ₹10001.00 applies. <label htmlFor="" className='click'>Click here</label> to see instant savings amounts and eligible devices. Instant savings is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card-issuing bank. Total transaction value is calculated after any trade-in credit or eligible discount applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant savings being recalculated, and any refund may be adjusted to account for instant savings clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice.<br/> <label htmlFor="" className='click'>Additional terms apply.</label>. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant savings.<br/><br/>
‡No Cost EMI is available with the purchase of an <label htmlFor="" className='click'>eligible product</label> made using eligible cards on 3- or 6-month tenures from most leading banks. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your bank, subject to your bank’s terms and conditions. Minimum order spend applies as per your card-issuing bank threshold. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card-issuing bank. Offer may be revised or withdrawn at any time without any prior notice. <label htmlFor="" className='click'>Additional terms apply.</label><br /><br />
Representative example: Based on a 6-month tenure. ₹79900.00 total cost includes 15% p.a. and No Cost EMI savings of ₹3380.00, paid over 6 months as six monthly payments of ₹13317.00. <br /><br />
A subscription is required for Apple TV+.
</p>

<div className="footer">
 
<div className="p" id='p-1'>
  <h3 className='ht'>Shop and Learn <label htmlFor="" className='add' >+</label> </h3><hr className="cont" />
  <a href="">Store</a>
  <a href="">Mac</a>
  <a href="">iPad</a>
  <a href="">iPhone</a>
  <a href="">Watch</a>
  <a href="">AirPods</a>
  <a href="">TV & Home</a>
  <a href="">AirTag</a>
  <a href="">Accessories</a>
  <a href="">Gift Cards</a>

<div className="shop_cont shop_cont_vis">
<a href="">Store</a>
<a href="">Mac</a>
<a href="">iPad</a>
<a href="">iPhone</a>
</div>
</div>


<div className="p" id='p-2'>
<h3 className='ht'>Account <label htmlFor="" className='add'>+</label> </h3><hr className="cont" />
  <a href="">Manage Your Apple ID</a>
  <a href="">Apple Store Account</a>
  <a href="">iCloud.com</a>

</div>
<div className="p" id='p-3'>
<h3 className='ht'>Apple Store <label htmlFor="" className='add'>+</label> </h3><hr className="cont" />
  <a href="">Find a Store</a>
  <a href="">Genius Bar</a>
  <a href="">Today at Apple</a>
  <a href="">Apple Camp</a>
  <a href="">Apple TradeIn</a>
  <a href="">Ways to Buy</a>
  <a href="">Recycling Programme</a>
  <a href="">Order Status</a>
  <a href="">Shopping Help</a>

</div>
<div className="p" id='p-4'>
<h3 className='ht'>For Business <label htmlFor="" className='add'>+</label> </h3><hr className="cont" />
  <a href="">Apple Business</a>
  <a href="">Shop for Business</a>

</div>
<div className="p" id='p-5'>
<h3 className='ht'>Apple Values <label htmlFor="" className='add' onClick={()=>{
  console.log("AMan")
}}>+</label> </h3><hr className="cont" />
  <a href="">Accessibility</a>
  <a href="">Eduacation</a>
  <a href="">Environment</a>
  <a href="">Privacy</a>
  <a href="">Supplier Responsiblity</a>

</div>

</div>

<p className='more_'>
More ways to shop: <label htmlFor="" className='click'>Find an Apple Store</label> or <label htmlFor="" className='click'>other retailer</label> near you. Or call 000800 040 1966.
</p>
<h1 className="designed">Designed by Aman Gupta</h1>

</div>

</div>
  )
}
