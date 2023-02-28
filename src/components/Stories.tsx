import React from 'react'
import Image from 'next/image'
import quote from '../../public/quote.svg'

function Stories(props:{
  stories:{
    stories: []
  }
}) {
  return (
    <>
    {
      props.stories['stories'].map((data, i)=>{
        return(
          <div className='bg-[#232631] xl:min-h-[60vh] max-sm:h-[90vh] max-sm:max-h-[40vh] max-sm:min-w-[100vw] max-w-[45vw] w-[45vw]  flex items-center justify-center rounded-[1.5rem] border-borderColor border-2' key={i}>
          <div className='h-fit w-[90%] p-4 rounded-xl flex flex-col'>
            <div className='flex-[33%] justify-start max-md:pt-3 pl-16'>
              <Image src={quote} alt="quote svg"/>
            </div>
            <div className='flex-[33%] text-left px-16 py-4'>
              {data['text']}
            </div>
            <div className='flex-[33%] text-left pl-16'>
              {data['name']}
            </div>
          </div>
        </div>
        )
      })
    }
    </>
  )
}

export default Stories