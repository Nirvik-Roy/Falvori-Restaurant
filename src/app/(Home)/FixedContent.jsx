import React from 'react'

const FixedContent = () => {
  return (
    <>
      <div style={{
        height:'100vh',
        backgroundColor:'#171717',
        position:'fixed',
        top:'0',
        left:'0',
        width:'100%',
        zIndex:-1,
      }}>
    <div className='empty_div2' style={{
        height:'150px'
    }}></div>
        <div className="falvori_restaurant_head" style={{
            background:'transparent'
        }}>
        <h1 style={{
            color:'#f5f5f5'
        }}>FLAVORI RESTAURANT</h1>
      </div>
      </div>
    </> 
  )
}

export default FixedContent
