"use client"
import React, { useEffect, useState } from 'react'
import HeroSection from './components/HeroSection'
import axios from 'axios'
import Navbar from './components/Navbar'

function page() {

   const [latestData, setLaunchData] = useState()

   const loadLaunchData = async () => {
      try {
         let result = await axios("/api/newlaunch");
         
         if(result){
            setLaunchData(result.data?.data?.reverse()[0])
         }
        
      } catch (error) {
        
      }
   }

   console.log(latestData)


   useEffect(()=>{
     loadLaunchData()
   },[])

  return (
    <div>
      <Navbar/>
      <HeroSection data={latestData}/>
    </div>
  )
}

export default page