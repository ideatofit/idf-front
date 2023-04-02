import Select from '@/components/Select'
import Tools from '@/components/Tools'
import Footer from '@/layouts/Footer'
import Navigation from '@/layouts/Navigation'
import getFooterData, { FooterProps } from '@/lib/footer'
import { useState } from 'react'
import bmr from '../../../public/bmr.png'
import bodyFat from '../../../public/bodyFat.png'
import Head from 'next/head'
import Gotaquestion from '@/components/Gotaquestion'
import { getkeywords } from '@/lib/keywords'

interface States {
  weightUnit: 'kg' | 'lb'
}

type Gender = 'Male' | 'Female';

function OneRep(props: {
  footer: FooterProps
  keywords: string[]
}) {

  const [weightUnit, setWeightUnit] = useState<States['weightUnit']>('kg')

  const [weight, setWeight] = useState(0);
  const [reps, setReps] = useState(0);
  const [exercise, setExercise] = useState('');
  const [weightError, setWeightError] = useState('');
  const [repsError, setRepsError] = useState('');
  const [exerciseError, setExerciseError] = useState('');
  const [oneRepMax, setOneRepMax] = useState(0);

  const exerciseOptions = ['Squat', 'Bench Press', 'Deadlift'];
  const weightUnitOptions = ['kg', 'lb'];

  const handleWeightInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = Number(event.target.value)
    // Check that input is a positive number
    if (input > 0) {
      setWeight(input);
      setWeightError('');
    } else {
      setWeightError('Please enter a valid weight.');
    }
  }

  const handleRepsInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = Number(event.target.value)
    // Check that input is a positive integer
    if (input > 0) {
      setReps(input)
      setRepsError('')
    }
    else {
      setRepsError('reps cannot be negative give a valid rep value')
    }
  }

  const handleExerciseInput = (value: string) => {
    if (value.length > 0) {
      setExercise(value)
      setExerciseError('')
    } else {
      setExerciseError('select a value')
    }
  }

  const convertToKg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue: number = Number(e.target.value)
    setWeight(Number((inputValue * 0.454).toFixed(2)))
  }

  const calculateOneRepMax = () => {
    if (weight && reps && exercise.trim().length > 0) {
      // Calculate one-rep max based on Epley formula
      const oneRepMaxFloat = weight * (1 + reps / 30);
      setOneRepMax(Number(oneRepMaxFloat.toFixed(2)));
    } else {
      setOneRepMax(0);
    }
  }

  return (
    <>
    <Head>
    <title>Ideaotift - onerep calculator</title>
        <meta name="description" content="Ideaotift provides A One Rep Max (1RM) calculator that is a fitness tool that estimates the maximum amount of weight an individual can lift for a single repetition in a particular exercise" />
        <meta name="keywords" content={`Ideaotift, fitness, health, workout, diet, expert advice, Healthy living tips, ${props.keywords.join(", ")} `}/>
        <meta name="author" content="deepak sahu" />
    </Head>
      <Navigation />
      <div className='min-h-screen max-h-fit w-full bg-backgroundColor grid place-items-center text-themeColor pt-24'>
        <div className='max-xl:h-[65vh] xl:h-[65vh] max-sm:min-h-[90vh] max-h-fit max-sm:min-w-[90vw] w-[80vw] rounded-[2rem] border-2 border-borderColor bg-inherit overflow-hidden'>
          <div className='flex xl:flex-row max-xl:flex-row max-sm:flex-col w-full h-full max-h-fit p-8 gap-8'>
            <div className='xl:w-[60%] max-xl:w-[60%] max-sm:w-full h-full max-h-fit flex flex-col gap-3'>
              <div className='h-full w-full max-h-fit'>
                <h1>1RM Calculator</h1>
              </div>
              <div className='max-sm:min-h-[10rem] h-[80%] w-full max-h-fit flex max-sm:flex-col gap-3'>
                {/* ---------------------------Exercise------------------------ */}
                <Select placeholder={'Exercise'} options={exerciseOptions} onChange={handleExerciseInput} width={50} error={exerciseError} />
                {/* ---------------------------Exercise------------------------ */}
                {/* ---------------------------Repitions------------------------- */}
                <div className='flex flex-col h-full max-sm:min-w-full w-[50%]'>
                  <input type="number" placeholder='Reps' onChange={handleRepsInput} className={`w-full min-h-full border-2 rounded-xl text-left ${repsError !== '' ? 'border-red-500' : 'border-white'} pl-4`} />
                  {repsError !== '' && <div className='text-red-500 text-[0.7rem]'>{repsError}</div>}
                </div>
                {/* ---------------------------Repitions------------------------- */}
              </div>
              <div className='max-sm:min-h-[5rem] h-[80%] w-full max-h-fit flex gap-3'>
                {/* ---------------------------weightLifted-------------------- */}
                <div className='flex flex-col min-h-full max-sm:w-full w-[50%]'>
                  <div className='min-h-full w-full flex gap-2'>
                    {
                      weightUnit === 'kg' ?
                        <input type="number" placeholder='Weight lifted*' onChange={handleWeightInput} className={`h-full max-sm:min-w-[70%] w-[70%] ${weightError === '' ? 'border-white' : 'border-red-800'} border-2 rounded-xl text-left pl-4`} />
                        :
                        <>
                          <input type="number" placeholder='lb' className='h-full max-sm:min-w-[70%] w-[70%] border-white border-2 rounded-xl text-left pl-4' onChange={convertToKg} />
                        </>
                    }
                    <Select placeholder={'Kg'} options={weightUnitOptions} onChange={(value) => setWeightUnit(value === 'kg' ? 'kg' : 'lb')} width={25} error={''} />
                  </div>
                  {weightError !== '' && <div className='text-red-500 text-[0.7rem]'>{weightError}</div>}
                </div>
                {/* ---------------------------weightLifted-------------------------- */}

              </div>
              <div className='h-full w-full max-h-fit flex gap-3'>
                <div className='h-full w-full bg-themeColor rounded-xl flex justify-between items-center p-3 text-black'>
                  <div className='font-[400] text-[1.2rem]'>Let&apos;s calculate it</div>
                  <button type='button' className='px-4 py-2 rounded-md bg-white font-[600]' onClick={calculateOneRepMax}>Calculate</button>
                </div>
              </div>
            </div>
            <div className='xl:w-[40%] max-xl:w-[40%] max-sm:w-full h-full max-h-fit flex flex-col border-2 border-borderColor rounded-xl p-3'>
              <div className='h-full w-full max-h-fit flex flex-col gap-2'>
                <h6>Fill the required details and your results will appear here!</h6>
                <h4>Your 1RM is</h4>
                <div className=' flex items-center py-3 px-3 justify-between text-black bg-white w-full h-fit rounded-xl'>
                  <div className={`${oneRepMax !== 0 && 'font-bold text-[1.1rem]'}`}>{oneRepMax === 0 ? 'Your result will appear here' : oneRepMax}</div>
                  <div className='font-bold'>Kg</div>
                </div>
                <div>
                  1 Repetition Maximum (1RM for short) is the maximum weight that you can lift in a single repetition of an exercise. This value determines your strength levels for a particular exercise.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex max-sm:flex-col max-sm:items-center max-sm:gap-3 justify-around p-4'>
          <Tools img={bmr} alt={'bmr'} title={'BMR Calculator'} description={'Your basal metabolic rate (BMR) is the number of calories your body needs to sustain itself if you do absolutely nothing all day.'} slug={'bmr'} initial={undefined} whileInView={undefined} transition={undefined} animation={undefined} />
          <Tools img={bodyFat} alt={'body fat'} title={'Body Fat % Calculator'} description={'Body fat percentage is a key indicator of good health. A high body fat % might put you at a greater risk of lifestyle diseases.'} slug={'bodyfat'} initial={undefined} whileInView={undefined} transition={undefined} animation={undefined} />      </div>
      </div>
      <Gotaquestion/>
      <Footer footer={props['footer']} />
    </>
  )
}

export async function getStaticProps() {
  const footer = await getFooterData()
  const keywords = await getkeywords()
  return {
    props: {
      footer, keywords
    }
  }
}

export default OneRep