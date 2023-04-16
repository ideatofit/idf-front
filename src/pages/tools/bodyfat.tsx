import Select from '@/components/Select'
import Tools from '@/components/Tools'
import Footer from '@/layouts/Footer'
import Navigation from '@/layouts/Navigation'
import getFooterData, { FooterProps } from '@/lib/footer'
import { useState } from 'react'
import bmr from '../../../public/bmr.png'
import rep from '../../../public/1rep.png'
import Head from 'next/head'
import Gotaquestion from '@/components/Gotaquestion'
import { getkeywords } from '@/lib/keywords'

interface States {
  heightUnit: 'cm' | 'ft/in'
  neckCircumference: 'cm' | 'in'
  gender: 'Male' | 'Female'
  exercise: 'Sedentary' | 'Lightly Active' | 'Moderately Active' | 'Very Active' | 'Extra Active'
}

type Gender = 'Male' | 'Female';
type ExerciseLevel = 'Sedentary' | 'Lightly Active' | 'Moderately Active' | 'Very Active' | 'Extra Active';

function BodyFat(props: {
  footer: FooterProps
  keywords: string[]
}) {

  // states handling input elements state
  const [heightUnit, setHeightUnit] = useState<States['heightUnit']>('cm')

  // states handling input elements output values
  const [gender, setGender] = useState<States['gender']>('Male')
  const [height, setHeight] = useState(0)
  const [neckCircumference, setNeckCircumference] = useState(0)
  const [ft, setFt] = useState(0)
  const [inch, setInch] = useState(0)
  const [waist, setWaist] = useState(0)
  const [bodyFat, setBodyFat] = useState(0)

  // error states managing messages
  const [genderError, setGenderError] = useState('')
  const [exerciseError, setExerciseError] = useState('')

  // options
  const genderOptions = ['Male', 'Female']
  const heightOptions = ['cm', 'ft/in']

  // handlers
  const handleGenderChange = (value: string) => {
    setGender(value === 'Male' ? 'Male' : 'Female');
    if(gender !== 'Male' && gender !== 'Female'){
      setGenderError('Choose a valid value')
    }
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const heightValue = Number(e.target.value);
      setHeight(heightValue);
  };

  const handleWaistChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const waistValue = Number(e.target.value);
      setWaist(waistValue);
  };

  const handleNeckCircumferenceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const neckValue = Number(e.target.value);
      setNeckCircumference(neckValue);
  };


  async function calculateBodyFatPercentage() {

    const circumference = waist * 2.54 - neckCircumference;
    const bodyFatPercentage = parseFloat((495 / (1.0324 - 0.19077 * Math.log10(circumference - 450 / height) + 0.15456 * Math.log10(height)) - 450).toFixed(2));

    setBodyFat(bodyFatPercentage);

  }

  // convert ft and inch to cm
  function convertToCm(e: React.ChangeEvent<HTMLInputElement>) {
    const placeholder: string = e.target.placeholder
    const value: number = Number(e.target.value)
    let centimeters: number = 0;
    // to avoid the delay of states instead of states we are using fresh values using switch statement
    switch (placeholder) {
      case 'ft':
        setFt(value)
        centimeters = ((value * 30.48) + (inch * 2.54))
        break;

      case 'in':
        setInch(value)
        centimeters = ((ft * 30.48) + (value * 2.54))
        break;
    }
    setHeight(Math.round(centimeters))
    return centimeters
  }



  return (
    <>
      <Head>
        <title>Ideaotift - bodyfat calculator</title>
        <meta name="description" content="Ideaotift provides you with the latest health and fitness tips, workout plans, diet plans, and expert advice to help you achieve your fitness goals. Get fit, stay healthy, and live a better life with Ideaotift." />
        <meta name="keywords" content={`Ideaotift, fitness, health, workout, diet, expert advice, Healthy living tips, ${props.keywords.join(", ").toLocaleLowerCase()}`} />
        <meta name="author" content="deepak sahu" />
      </Head>
      <Navigation />
      <div className='min-h-screen max-h-fit w-full bg-backgroundColor grid place-items-center text-themeColor pt-24'>
        <div className='max-sm:min-h-[100vh] h-[65vh] max-h-fit max-sm:min-w-[90vw] w-[80vw] rounded-[2rem] border-2 border-borderColor bg-inherit overflow-hidden'>
          <div className='flex xl:flex-row max-xl:flex-row max-sm:flex-col w-full h-full max-h-fit p-8 gap-8'>
            <form onSubmit={calculateBodyFatPercentage} className='xl:w-[60%] max-xl:w-[60%] max-sm:w-full h-full max-h-fit flex flex-col gap-3'>
              <div className='h-full w-full max-h-fit'>
                <h1>BodyFat Calculator</h1>
              </div>
              <div className='max-sm:min-h-[10rem] h-[80%] w-full max-h-fit flex max-sm:flex-col gap-3'>
                <Select placeholder={'Geder*'} options={genderOptions} onChange={handleGenderChange} width={50} error={genderError} />
                <input type="number" placeholder='waist*' onChange={handleWaistChange} className={`h-full max-sm:w-full w-[50%] border-white border-2 rounded-xl text-left pl-4`} required min={40} max={200}/>

              </div>
              <div className='max-sm:min-h-[10rem] h-[80%] w-full max-h-fit flex max-sm:flex-col gap-3'>
                <div className='h-full max-sm:min-w-full w-[50%] flex gap-2'>
                  {
                    heightUnit === 'cm' ?
                      <input type="number" placeholder='Height' onChange={handleHeightChange} className={`h-full max-sm:min-w-[70%] w-[70%] border-white border-2 rounded-xl text invalid:border-red-500`} required min={0} max={220}/>
                      :
                      <>
                        <input type="number" placeholder='ft' onChange={convertToCm} className={`h-full w-[35%] border-white border-2 rounded-xl text invalid:border-red-500`} required min={1} max={12}/>
                        <input type="number" placeholder='in' onChange={convertToCm} className={`h-full w-[35%] border-white border-2 rounded-xl text invalid:border-red-500`} required min={0} max={100}/>
                      </>
                  }
                  <Select placeholder={'cm'} options={heightOptions} onChange={(value) => setHeightUnit(value === 'cm' ? 'cm' : 'ft/in')} width={25} error={''} />
                </div>
                <div className='h-full max-sm:min-w-full w-[50%] flex gap-2'>
                  <input type="number" placeholder='neck circumference' onChange={handleNeckCircumferenceChange} className={`h-full max-sm:min-w-[100%] w-[100%] border-white border-2 rounded-xl text-left pl-4 invalid:border-red-500`} required min={20} max={60}/>
                </div>
              </div>
              <div className='h-full w-full max-h-fit flex gap-3'>
                <div className='h-full w-full bg-themeColor rounded-xl flex justify-between items-center p-3 text-black'>
                  <div className='font-[400] text-[1.2rem]'>Let&apos;s calculate it</div>
                  <button type='submit' className='px-4 py-2 rounded-md bg-white font-[600]'>Calculate</button>
                </div>
              </div>
            </form>
            <div className='xl:w-[40%] max-xl:w-[40%] max-sm:w-full h-full max-h-fit flex flex-col border-2 border-borderColor rounded-xl p-3'>
              <div className='h-full w-full max-h-fit '>
                <h6>Fill the required details and your results will appear here!</h6>
                <h4>Your BMR is</h4>
                <div className=' flex items-center py-3 px-3 justify-between text-black bg-white w-full h-fit rounded-xl'>
                  <div className={`${bodyFat !== 0 && 'font-bold text-[1.1rem]'}`}>{bodyFat === 0 ? 'Your result will appear here' : Math.round(bodyFat) + '%'}</div>
                  <div className='font-bold'>Kcal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex max-sm:flex-col max-sm:items-center max-sm:gap-3 justify-around p-4'>
          <Tools img={bmr} alt={'bmr'} title={'BMR Calculator'} description={'Your basal metabolic rate (BMR) is the number of calories your body needs to sustain itself if you do absolutely nothing all day.'} slug={'bmr'} initial={undefined} whileInView={undefined} transition={undefined} animation={undefined} />
          <Tools img={rep} alt={'1rep'} title={'1 Rep Max Calculator'} description={'1 Rep Max (1RM) is the maximum weight that can be lifted in a specific exercise in 1 repetition. This determines your strength level for that exercise.'} slug={'onerep'} initial={undefined} whileInView={undefined} transition={undefined} animation={undefined} />
        </div>
      </div>
      <Gotaquestion />
      <Footer footer={props['footer']} />
    </>
  )
}

export async function getStaticProps() {
  // const footer = await getFooterData()
  // const keywords = await getkeywords()
  const [footer, keywords] = await Promise.all([
    getFooterData(), getkeywords()
  ])
  return {
    props: {
      footer, keywords
    }
  }
}

export default BodyFat