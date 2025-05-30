
'use client'

import HomeBanner from "./HomeBanner"
import './Home.css'
import FixedContent from "./FixedContent"
import Welcome from "./Welcome"
import { useEffect } from "react"



const Page = () => {
  useEffect(()=>{
    window.scrollTo({top:'0',behavior:"instant"})
  },[])
  return (
    <>
      <FixedContent />
      <HomeBanner />
      <Welcome/>
      </>
  )
}

export default Page
