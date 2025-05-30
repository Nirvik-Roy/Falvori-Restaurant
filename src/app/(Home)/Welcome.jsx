'use client'

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



const Welcome = () => {

    useGSAP(()=>{
        gsap.fromTo('.welcome_img_wrapper',{
            height:'80%',
            duration:'1'
        },{
            height:'90%',
            scrollTrigger:{
                trigger:'.welcome_whole_wrapper',
                start: 'top 80%',
                end:'top 0%',
                scrub:2,
            
            }
        })
        gsap.fromTo('.welcome_img_wrapper',{
            height:'90%'
        },{
            width:'100%',
            height:'100%',
            duration:'1',
            scrollTrigger:{
                trigger:'.welcome_whole_wrapper',
                start:'top -200px',
                pin:true,
                scrub:2
            }
            
        })
    },[])
  return (
    <>
      <div className='welcome_whole_wrapper'>
        <div className='welcome_img_wrapper'></div>
      </div>

      <div style={{
        height:'500vh'
      }}></div>
    </>
  )
}

export default Welcome
