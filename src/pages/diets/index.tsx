import Checkbox from '@/components/Checkbox'
import Footer from '@/layouts/Footer'
import Navigation from '@/layouts/Navigation'
import getFooterData, { FooterProps } from '@/lib/footer'
import { Public_Sans } from '@next/font/google'

const publicsans = Public_Sans({weight: '800', subsets:['latin']})

function Index(props: {
  footer: FooterProps
}) {
  return (
    <div className='h-screen w-full bg-backgroundColor text-themeColor'>
      <Navigation />
      <div className='h-fit w-full bg-inherit grid place-items-center py-24 px-8'>
        <div className='h-fit w-[80%] flex flex-col gap-4 items-center rounded-xl bg-MidnightOcean border-2 border-borderColor p-8'>
          <div className='w-full h-16 flex flex-row justify-between items-center '>
            <div className='min-h-[1.7rem] min-w-[1.7rem] rounded-full bg-themeColor text-black grid place-items-center'>1</div>
            <div className='border-2 border-borderColor w-[14%] max-sm:w-[11%]'></div>
            <div className='min-h-[1.7rem] min-w-[1.7rem] rounded-full bg-themeColor text-black grid place-items-center opacity-70'>2</div>
            <div className='border-2 border-borderColor w-[14%] max-sm:w-[11%]'></div>
            <div className='min-h-[1.7rem] min-w-[1.7rem] rounded-full bg-themeColor text-black grid place-items-center opacity-70'>3</div>
            <div className='border-2 border-borderColor w-[14%] max-sm:w-[11%]'></div>
            <div className='min-h-[1.7rem] min-w-[1.7rem] rounded-full bg-themeColor text-black grid place-items-center opacity-70'>4</div>
            <div className='border-2 border-borderColor w-[14%] max-sm:w-[11%]'></div>
            <div className='min-h-[1.7rem] min-w-[1.7rem] rounded-full bg-themeColor text-black grid place-items-center opacity-70'>5</div>
            <div className='border-2 border-borderColor w-[14%] max-sm:w-[11%]'></div>
            <div className='min-h-[1.7rem] min-w-[1.7rem] rounded-full bg-themeColor text-black grid place-items-center opacity-70'>6</div>
          </div>
          <div className='h-fit w-[70%] rounded-xl p-12 flex flex-col items-start justify-center bg-Midnight border-2 border-[#DFE3E8]'>
            <span className={`${publicsans.className}`}>step 1 of 6</span>
            <h1 className={`${publicsans.className} text-[3.2rem]`}>what is your fitness goal?</h1>
            <p>This will help us understand your fitness needs better</p>
            <div className='flex flex-col gap-4 w-full h-fit'>
              <p>Choose any one</p>
              <Checkbox/>
              <Checkbox/>
              <Checkbox/>
              <Checkbox/>
              <Checkbox/>
              <Checkbox/>
            </div>
          </div>   
          <div className='w-[70%] h-fit flex flex-row justify-between'>
          <button className='bg-[#1D202C] h-12 w-24 rounded-lg'>&larr; Back</button>
          <button className='bg-[#1D202C] h-12 w-24 rounded-lg'>Next &rarr;</button>
        </div>    
        </div>
      </div>
      <Footer footer={props['footer']} />
    </div>
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

export default Index