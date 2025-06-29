import React from 'react'
import KeyCard from './KeyCard'

const HeroSection = ({data}) => {
    
    return (
       <>
          <div className='w-screen min-h-[80vh] flex justify-between flex-wrap md:flex-row flex-col-reverse'>
            <div className=' w-full sm:w-1/2  bg-black px-8 flex items-start justify-center flex-col gap-6'>
                <h2 className='capitalize font-bold text-5xl text-start tracking-wide'>{data?.title}</h2>
                {
                    data?.launch_date ?
                     <div className=' px-2min-w-[200px] px-3 font-medium h-[45px] bg-gray-700 rounded-md flex items-center justify-center'>Start from :{data?.launch_date.split("T")[0].split("-").reverse().join("/")}</div>
                : null
                
                }
                {
                    data?.prise ?
                    <div className='text-4xl font-bold'>Fee <span className='text-blue-500'> ₹ {data?.prise}</span></div>
                : null
                
                }
                <div className='bg-blue-500  px-4 text-3xl font-bold py-2 rounded-md'>View Now</div>
            </div>
            <div className='w-screen  sm:w-1/2 h-[50vh] md:min-h-[70vh] sm:h-full flex items-center justify-center'>
                <div className='h-[85%] w-[85%] bg-gray-900 md:h-[50vh] overflow-hidden rounded-md '>
                    <iframe
                        height="100%"
                        width="100%"
                        src={`${data?.youtube_url}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>

         {/* after hero section */}

         {
            data?.heading ?
             <div className='w-screen min-h-[90vh] mt-10  sm:px-7 flex  justify-center flex-col'>
              <span className=' capitalize text-6xl sm:text-8xl  font-bold text-blue-500'>{data?.heading.split(" ")[0]}</span>
              <span className=' capitalize text-6xl sm:text-8xl  font-bold inline-block'>{data?.heading.split(" ").slice(1).join(" ")}</span>
              {
                data?.sub_heading ? 
                 <div className='text-4xl sm:text-5xl text-gray-500 text-center mt-5'>{data?.sub_heading}...</div> 
                 : null
              }
         </div> : null
         }

        {
            data?.key_heading ? <div className='px-7'>
            <div className='capitalize text-6xl sm:text-6xl  ml-3 mb-12'>{data?.key_heading}<span className='text-blue-500'>...</span></div>
               {
                 data?.key_points?.map((point,index)=>{
                     return <KeyCard index={index} point={point} key={index}/>
                 })
               }
         </div> : null
         
        }
       </>
    )
}

export default HeroSection