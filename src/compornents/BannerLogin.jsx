import React from 'react'
import '../styles/bannerLogin.css'
import logo from '../assets/logo.svg'
function BannerLogin() {
  return (
    <div className=' banner-login container mx-auto '> 
        <div className='banner-login  flex flex-row items-center  justify-center  '>
            <img 
             src={logo} 
             alt="logo TechChat" 
             
             /> 
            <div className='logo-name relative right-11 top-6   '>
                <h1 className='font-bold'> <span>Tech</span>Chat</h1>
            </div>

        </div>

    </div>
  )
}

export default BannerLogin