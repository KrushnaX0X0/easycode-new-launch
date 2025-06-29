"use client"
import React, { useRef, useState } from 'react'
import { gsap } from 'gsap'


const KeyCard = ({index,point}) => {

   const boxref = useRef(null)
   const [isCardOpen,setIsCardOpen] = useState(false)


   const handelOpning = () => {
    gsap.to(boxref.current, {
      minHeight: "300px",
      duration: 0.5,
      ease: "power2.out",
      color: "white",
      display: "block",
    });
  };


   const handelClosing = () => {
     gsap.to(boxref.current, {
      height: "0px",
        duration: 0.5,
        color: "black",
        display: "none",
        ease: "power2.out",
    });
   }

   const toggleCard = () => {
    if(!isCardOpen){
      handelOpning()
      setIsCardOpen(true)
    }else{
      handelClosing()
      setIsCardOpen(false)
    }
   }


  return (
    <>
      <div className='min-h-[90px] border-t-[1px] border-t-white mb-10 mt-2 px-5 text-3xl flex items-center justify-between'>
        <span className='text-xl sm:text-4xl'><span>{index+1}. </span>{point?.point_name}</span>
        <span className='text-blue-500 text-2xl cursor-pointer' onClick={()=>toggleCard()} >
          <span className='text-xl sm:text-2xl'>more</span>
          <i className={`${isCardOpen ? "ri-arrow-up-line" : "ri-arrow-down-line"}`}></i>
        </span>
      </div>
      <div className=' key-points-box hidden' ref={boxref}>
        {point?.point_description}
      </div>
    </>
  );
};

export default KeyCard;
