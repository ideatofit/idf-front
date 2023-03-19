import Select from '@/components/Select'
import Footer from '@/layouts/Footer'
import Navigation from '@/layouts/Navigation'
import getFooterData, { FooterProps } from '@/lib/footer'
import { useState } from 'react'

interface States {
  weightUnit: 'kg' | 'lb'
}

type Gender = 'Male' | 'Female';
type ExerciseLevel = 'Sedentary' | 'Lightly Active' | 'Moderately Active' | 'Very Active' | 'Extra Active';

function BodyFat(props: {
  footer: FooterProps
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
    if(input <= 0){
      setRepsError('reps cannot be negative give a valid rep value')
    }
    else{
      setRepsError('')
    }
  }

  const handleExerciseInput = (value: string) => {
    if(value !== ''){
      setExercise(value)
      setExercise('')
    } else {
      setExerciseError('select a valid input')
    }
  }

  const calculateOneRepMax = () => {
    if (!isNaN(weight) && !isNaN(reps) && exercise.trim().length > 0) {
      // Calculate one-rep max based on Epley formula
      const oneRepMaxFloat = weight * (1 + reps / 30);
      setOneRepMax(Number(oneRepMaxFloat.toFixed(2)));
    } else {
      setOneRepMax(0);
    }
  }

return (
  <>
    <Navigation />
    <div className='h-screen w-full bg-backgroundColor grid place-items-center text-themeColor'>
      <div className='h-[65vh] max-h-fit w-[80vw] rounded-[2rem] border-2 border-borderColor bg-inherit overflow-hidden'>
        <div className='flex xl:flex-row max-xl:flex-row max-sm:flex-col w-full h-full max-h-fit p-8 gap-8'>
          <div className='xl:w-[60%] max-xl:w-[60%] max-sm:w-full h-full max-h-fit flex flex-col gap-3'>
            <div className='h-full w-full max-h-fit'>
              <h1>1RM Calculator</h1>
            </div>
            <div className='h-[80%] w-full max-h-fit flex gap-3'>
              {/* ---------------------------Exercise------------------------ */}
              <Select placeholder={'Exercise'} options={exerciseOptions} onChange={handleExerciseInput} width={50} error={exerciseError} />
              {/* ---------------------------Exercise------------------------ */}
              {/* ---------------------------Repitions------------------------- */}
              <div className='flex flex-col h-full w-[50%]'>
              <input type="number" placeholder='Reps' onChange={handleRepsInput} className={`w-full min-h-full border-2 rounded-xl text-left ${repsError !== '' ? 'border-red-500' : 'border-white'} pl-4`} />
              {repsError !== '' && <div className='text-red-500 text-[0.7rem]'>{repsError}</div>}
              </div>
              {/* ---------------------------Repitions------------------------- */}
            </div>
            <div className='h-[80%] w-full max-h-fit flex gap-3'>
              {/* ---------------------------weightLifted-------------------- */}
              <div className='flex flex-col min-h-full w-[50%]'>
              <div className='min-h-full w-full flex gap-2'>
                {
                  weightUnit === 'kg' ?
                    <input type="number" placeholder='Weight lifted*' onChange={handleWeightInput} className={`h-full w-[70%] ${weightError === '' ? 'border-white' : 'border-red-800'} border-2 rounded-xl text-left pl-4`} />
                    :
                    <>
                      <input type="number" placeholder='kg'  className='h-full w-[35%] border-white border-2 rounded-xl text-left pl-4' />
                      <input type="number" placeholder='lb'  className='h-full w-[35%] border-white border-2 rounded-xl text-left pl-4' />
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
              <div className=' flex items-center py-3 px-2 justify-between text-black bg-white w-full h-fit rounded-xl'>
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

export default BodyFat