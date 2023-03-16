import Footer from '@/layouts/Footer'
import Navigation from '@/layouts/Navigation'
import getFooterData, { FooterProps } from '@/lib/footer'
import React from 'react'

function Bmr(props: {
  footer: FooterProps
}) {
  return (
    <>
      <Navigation />
      <div className='min-h-screen bg-backgroundColor xl:p-36 max-xl:p-36 text-themeColor'>
        <div className='flex flex-row h-screen w-full border-borderColor border-2 rounded-[1.5rem] p-12 pt-8'>
          <div className='flex-[50%] flex-col'>
            <h1 className='text-[3.8rem]'>Bmr Calculator</h1>
            <div className='flex flex-row'>
              <div className='flex-[50%]'>
                <div className="relative inline-block w-40">
                  <select className="block appearance-none w-full bg-themeColor text-gray-700 border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:border-blue-500">
                    <option>*Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fill-rule="evenodd" d="M17.293 6.293a1 1 0 00-1.414 0L10 12.586 4.707 7.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l5-5a1 1 0 000-1.414z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className='flex-[50%]'></div>
            </div>
            <div className='flex flex-row'>
              <div className='flex-[50%]'>
                <div className="flex flex-col">
                  <label htmlFor="height" className="mb-2 text-gray-700">Height*</label>
                  <div className="relative inline-block w-40">
                    <select
                      className="block appearance-none w-full bg-themeColor text-gray-700 border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
                      name="height-unit"
                      id="height-unit"
                    >
                      <option value="cm">cm</option>
                      <option value="ftin">ft/in</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fill-rule="evenodd" d="M17.293 6.293a1 1 0 00-1.414 0L10 12.586 4.707 7.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l5-5a1 1 0 000-1.414z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex mt-2">
                    <input
                      type="number"
                      name="height-cm"
                      id="height-cm"
                      placeholder="Height*"
                      className="w-full bg-white border border-gray-300 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                    />
                    <div className="w-2"></div>
                    <div className="flex items-center">
                      <input
                        type="number"
                        name="height-ft"
                        id="height-ft"
                        placeholder="ft"
                        className="w-20 bg-white border border-gray-300 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                      />
                      <input
                        type="number"
                        name="height-in"
                        id="height-in"
                        placeholder="in"
                        className="w-20 bg-white border border-gray-300 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex-[50%]'></div>
            </div>
            <div className='flex flex-row'>
              <div className='flex-[50%]'></div>
              <div className='flex-[50%]'></div>
            </div>
            <div>
              <div className='flex justify-between'></div>
            </div>
          </div>
          <div className='flex-[50%] flex-col'></div>
        </div>
      </div>
      <Footer footer={props['footer']} />
    </>
  )
}

export async function getStaticProps() {
  const footer = await getFooterData()
  return {
    props: {
      footer
    }
  }
}

export default Bmr