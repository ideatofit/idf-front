import React from 'react'

function Statistics() {
  return (
    <section className='w-full bg-backgroundColor text-themeColor px-[20%]'>
      <div className='flex flex-col text-center'>
        <h1 className='text-5xl my-2'>Home to the software teams</h1>
        <p className='font-light text-gray-400 my-2'>Meet your developers where they already are. GitHub is home to over 40 million developers and the world’s largest open source community.</p>
      </div>
      <div className='flex w-full justify-around my-4'>
        <div className='text-center p-8 bg-gray-700 rounded-xl h-1/2 w-1/2 mx-2 shadow-md shadow-gray-400'>
          <dl>
            <dt className='text-4xl font-bold text-white'>54M+</dt>
            <dd className='my-2 text-gray-400'>Happy Customer&apos;s</dd>
          </dl>
        </div>
        <div className='text-center p-8 bg-gray-700 rounded-xl h-1/2 w-1/2 mx-2 shadow-md shadow-gray-400'>
          <dl>
            <dt className='text-4xl font-bold text-white'>54M+</dt>
            <dd className='my-2 text-gray-400'>Satisfied Customer&apos;s</dd>
          </dl>
        </div>
        <div className='text-center p-8 bg-gray-700 rounded-xl h-1/2 w-1/2 mx-2 shadow-md shadow-gray-400'>
          <dl>
            <dt className='text-4xl font-bold text-white'>54M+</dt>
            <dd className='my-2 text-gray-400'>shivam&apos;s</dd>
          </dl>
        </div>
      </div>
    </section>
  )
}

export default Statistics