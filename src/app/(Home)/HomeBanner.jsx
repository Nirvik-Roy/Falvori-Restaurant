'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const HomeBanner = () => {

  useGSAP(() => {
    const tl = gsap.timeline()
    tl.to('.banner_img_div', {
      height: '120vh',
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
      backgroundPositionY: '100%',
      opacity: '1',
      backgroundSize: 'cover',
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
      y: '-5%',
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
      <div className="falvori_restaurant_head">
        <h1>FLAVORI RESTAURANT</h1>
      </div>
      <div className='banner_wrapper' style={{
        borderTop: '5px solid white',
        height: '100%',

      }}>
        <div className="banner_img_div" ></div>
      </div>
      <h1 >Hello</h1>
    </>
  )
}

export default HomeBanner
