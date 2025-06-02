'use client'

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



const Welcome = () => {

  useGSAP(() => {
    gsap.fromTo('.welcome_img_wrapper', {
      height: '80%',
      duration: '1'
    }, {
      height: '100%',
      scrollTrigger: {
        trigger: '.welcome_whole_wrapper',
        start: 'top 80%',
        end: 'top 0%',
        scrub: 2,

      }
    })
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.welcome_whole_wrapper',
        start: 'top -10px',
        pin: true,
        scrub: 4,
      }
    })
    tl.fromTo('.welcome_img_wrapper', {
      height: '100%'
    }, {
      width: '100%',
      height: '100%',
      duration: '1',

    })

    // tl.to('.welcome_img_wrapper', {
    //   scale: 1.10,
    //   scrollTrigger: {
    //     scrub: 5,
    //   }
    // },)


    tl.to('.welcome_white_div',{
      y:0,
      
    })
    
    tl.to('.welcome_text_wrapper',{
     top:'-1650px',
    },

    )

  }, [])
  return (
    <>
      <div className='welcome_whole_wrapper' style={{
        position:'relative'
      }}>
        <div className='welcome_img_wrapper'>

        </div>

                  <div className='welcome_text_wrapper'>
                  <p>
 The atmosphere of romantic Venice reigns in our cozy restaurant, where every dish
            is prepared by hand and with special passion. Just like in old cafes on the narrow streets of a charming city. The chefs skillfully combine fresh and selected ingredients and deliver them to your table with love.
            We work to ensure that you enjoy the dolce vita and the vibrant flavors of Italy
                  </p>
           </div>

            <div className='welcome_white_div'>
              <p>
Welcome to our sophisticated restaurant in the heart of Venice</p>


<h6>Enjoy stunning views of the beautiful city's historic architecture with a
 glass of fine wine and delicate salami prepared by the world's best chef
</h6>
            </div>
      </div>

      <div style={{
        height: '500vh'
      }}></div>
    </>
  )
}

export default Welcome
