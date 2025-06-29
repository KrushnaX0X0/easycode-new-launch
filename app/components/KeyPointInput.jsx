
"use client"
import React from 'react'
import AppInput from './AppInput'

const KeyPointInput = ({input_placeholder,
  text_placeholder,
  value,
  key_number,
  setKey_number}) => {

const removeKeyPoint =()=>{
    const updateKeyPoints = key_number.filter(iteam => iteam != value) 
    setKey_number(updateKeyPoints)
}
  return (
    <div className='relative my-3.5'>
        <span className=' z-10 absolute bottom-[-25px] right-0 text-red-400 cursor-pointer text-xl hover:text-red-600' onClick={()=>removeKeyPoint()}> <i className="ri-delete-bin-7-fill"></i></span>
   <AppInput 
  inputValue="key Point"
  placeholder={input_placeholder}
  value={key_value.point_name}
  onChange={(e) => setkey_value(...point_name,e.target.value)}
/>
        <textarea 
         placeholder={text_placeholder}
          value={key_value.point_description}
           onChange={(e) => setkey_value(...point_description,e.target.value)}
           className="border mt-4 w-[30vw] border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 text-white">
           </textarea>
    </div>
  )
}

export default KeyPointInput 