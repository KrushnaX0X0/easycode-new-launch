"use client"
import { useState } from "react"
import AppInput from "../components/AppInput"
import KeyPointInput from "../components/KeyPointInput"
import SubmitButton from "../components/SubmitButton"

function Page() {
  const [key_number, setKey_number] = useState([])
  

  const [data ,setdata] = useState({
    title:"",
    youtube_url:"",
    heading:"",
    sub_heading:"",
    launch_date:"",
    key_heading:"",
    prise :"",
    key_points:"",
    
  })

  console.log(data)

  const adddata = async () => {
  try {
      const response = await fetch("http://localhost:3000/api/newlaunch",{
         method: "POST",
    },)
     
  } catch (error) {
    
  }
      
    
  }

  const addKeyInput = () => {
    const randomId = Math.floor(Math.random() * 10000)
    setKey_number([...key_number, randomId])
  }

  const handleChange = (field, value) => {
  setdata((prev) => ({
    ...prev,
    [field]: value
  }))
}

  return (
    <div className="min-h-screen w-full flex justify-center items-center px-4 py-10">
      <div className="w-full max-w-5xl  shadow-lg rounded-xl p-6">
        <div className="flex flex-col md:flex-row gap-6">
          
          {/* Left Column */}
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <AppInput
             inputValue="Add Title"
              placeholder="Enter the title"  
               value={data.title}
              onChange={(e) => handleChange("title", e.target.value)} 
               />
            <AppInput 
            inputValue="YouTube URL" 
            placeholder="Enter YouTube URL" 
            value={data.youtube_url}
            onChange={(e)=>handleChange("youtube_url",e.target.value)}
            />
            <AppInput inputValue="Heading"
             placeholder="Enter Heading"
             value={data.heading}
            onChange={(e)=>handleChange("heading",e.target.value)}
              />
            <AppInput
             inputValue="Sub Heading" 
             placeholder="Enter sub heading" 
            value={data.sub_heading}
            onChange={(e)=>handleChange("sub_heading",e.target.value)}
             />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <AppInput
             inputValue="Price"
              placeholder="Enter Price"
              value={data.prise}
              onChange={(e)=>handleChange("prise",e.target.value)}
              />
            <AppInput
             inputValue="Launch Date"
              placeholder="Enter Launch Date"
              value={data.launch_date}
              onChange={(e)=>handleChange("launch_date",e.target.value)}
               />
            <AppInput
             inputValue="Key Heading"
              placeholder="Key Heading" 
              value={data.key_heading}
              onChange={(e)=>handleChange("key_heading",e.target.value)}
              />
          </div>
        </div>

        {/* Key Points Section */}
        <div className="mt-6 text-gray-700">
          <span className="block mb-2 font-medium">Add Multiple Key Points</span>

          <div className="flex flex-col gap-3">
            {key_number.map((value, index) => (
              <KeyPointInput
                key={index}
                input_placeholder="Enter key point"
                text_placeholder="Enter key description"
                key_number={key_number}
                setKey_number={setKey_number}                
              />
            ))}
          </div>

          <button
            className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
            onClick={addKeyInput}
          >
            Add
          </button>
        </div>

        {/* Submit Button */}
        <div className="mt-6 w-40">
          <SubmitButton value="Submit" />
        </div>
      </div>
    </div>
  )
}

export default Page
