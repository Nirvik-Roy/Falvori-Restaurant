'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const HomeBanner = () => {

  useGSAP(() => {
    const tl = gsap.timeline()
    tl.to('.banner_img_div', {
      height: '170vh',
      duration: '1',
      ease: 'power3.in',
      opacity: '1'
    })

    tl.to('.banner_img_div', {
      width: '100%',
      duration: '1',
      ease: 'power3.inOut',
      opacity: '1'
    },)

    tl.fromTo('.banner_img_div', {
      opacity: '0',
    }, {
      duration: '1',
      backgroundPositionY: '-200px',
      opacity: '1',
      backgroundSize: 'cover'

    })





    tl.to('.falvori_restaurant_head h1', {
      y: 0,
      duration: '1',

    }, '-=1')
    tl.from('.navbar_container', {
      y: '50',
      duration: '0.5'
    }, '-=1')

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.banner_img_div',
        start: 'top 60%',
        end: 'bottom bottom',
      }
    })
    tl2.to('.banner_wrapper', {
      y: '-20%',
      width: '100%',
      duration: '1',
      scrollTrigger: {
        trigger: '.banner_img_div',
        start: 'top 60%',
        end: 'bottom top',
        scrub: 2,
      }
    })



  }, [])
  return (
    <>
      <div style={{
      
        zIndex: '9'
      }}>
        <div className='empty_div'></div>
        <div className="falvori_restaurant_head" >
          <h1>FLAVORI RESTAURANT</h1>
        </div>
        <div style={{
          background: '#f5f5f5',
          height: '90vh'
        }}>
          <div className='banner_wrapper' >
            <div style={{
              borderTop: '5px solid #f5f5f5',
            }} className="banner_img_div"></div>
          </div>
        </div>


      </div>


    </>
  )
}

export default HomeBanner
