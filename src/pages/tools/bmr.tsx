import Select from '@/components/Select'
import Footer from '@/layouts/Footer'
import Navigation from '@/layouts/Navigation'
import getFooterData, { FooterProps } from '@/lib/footer'
import { useState } from 'react'

interface States {
  heightUnit: 'cm' | 'ft/in'
  gender: 'Male' | 'Female'
  exercise: 'Sedentary' | 'Lightly Active' | 'Moderately Active' | 'Very Active' | 'Extra Active'
}

type Gender = 'Male' | 'Female';
type ExerciseLevel = 'Sedentary' | 'Lightly Active' | 'Moderately Active' | 'Very Active' | 'Extra Active';

function Bmr(props: {
  footer: FooterProps
}) {

  // states handling input elements state
  const [heightUnit, setHeightUnit] = useState<States['heightUnit']>('cm')

  // states handling input elements output values
  const [gender, setGender] = useState<States['gender']>('Male')
  const [exercise, setExercise] = useState<States['exercise']>('Sedentary')
  const [height, setHeight] = useState(0)
  const [ft, setFt] = useState(0)
  const [inch, setInch] = useState(0)
  const [weight, setWeight] = useState(0)
  const [age, setAge] = useState(0)
  const [bodyFatPercentage, setBodyFatPercentage] = useState(0)
  const [tdee, setTdee] = useState(0)
  const [bmr, setBmr] = useState(0)

  // error states managing messages
  const [genderError, setGenderError] = useState('')
  const [exerciseError, setExerciseError] = useState('')
  const [heightError, setHeightError] = useState('')
  const [weightError, setWeightError] = useState('')
  const [ageError, setAgeError] = useState('')
  const [bodyFatError, setBodyFatError] = useState('')

  // options
  const genderOptions = ['Male', 'Female']
  const exerciseOptions = ['Sedentary', 'Lightly Active', 'Moderately Active', 'Very Active']
  const heightOptions = ['cm', 'ft/in']

  // handlers
  const handleGenderChange = (value: string) => {
    setGender(value === 'Male' ? 'Male' : 'Female');
  };

  const handleExerciseChange = (value: string) => {
    //@ts-ignore
    setExercise(value)
    //@ts-check
  };

  const handleHeightChange = (e: any) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e: any) => {
    setWeight(e.target.value);
  };

  const handleAgeChange = (e: any) => {
    setAge(e.target.value);
  };

  const handleBodyFatPercentageChange = (e: any) => {
    setBodyFatPercentage(e.target.value);
  };

  //validators
  type Gender = 'Male' | 'Female';

  type ExerciseLevel = 'Sedentary' | 'Lightly Active' | 'Moderately Active' | 'Very Active' | 'Extra Active';

  function validateInputs(gender: Gender, exercise: ExerciseLevel, height: number, weight: number, age: number, bodyFatPercentage: number): boolean {
    let valid = true;

    // Validate gender
    if (gender !== 'Male' && gender !== 'Female') {
      setGenderError('Please select a valid gender');
      valid = false;
    } else {
      setGenderError('');
    }

    // Validate exercise level
    if (exercise !== 'Sedentary' && exercise !== 'Lightly Active' && exercise !== 'Moderately Active' && exercise !== 'Very Active' && exercise !== 'Extra Active') {
      setExerciseError('Please select a valid exercise level');
      valid = false;
    } else {
      setExerciseError('');
    }

    // Validate height
    if (height <= 0) {
      setHeightError('Please enter a valid height. Height must be greater than 0.');
      valid = false;
    } else if (height > 300) {
      setHeightError('Please enter a valid height. Height cannot be greater than 300 cm.');
      valid = false;
    } else {
      setHeightError('');
    }

    // Validate weight
    if (weight < 0) {
      setWeightError('Please enter a valid weight. Weight must be greater than 0.');
      valid = false;
    }
     if (weight > 500) {
      setWeightError('Please enter a valid weight. Weight cannot be greater than 500 kg.');
      valid = false;
    } 
    if(weight > 0 && weight < 500){
      setWeightError('');
    }

    // Validate age
    if (age <= 0) {
      setAgeError('Please enter a valid age. Age must be greater than 0.');
      valid = false;
    } else if (age > 150) {
      setAgeError('Please enter a valid age. Age cannot be greater than 150 years.');
      valid = false;
    } else {
      setAgeError('');
    }

    // Validate body fat percentage
    if (bodyFatPercentage < 0) {
      setBodyFatError('Please enter a valid body fat percentage. Body fat percentage cannot be negative.');
      valid = false;
    } else if (bodyFatPercentage > 100) {
      setBodyFatError('Please enter a valid body fat percentage. Body fat percentage cannot be greater than 100%.');
      valid = false;
    } else {
      setBodyFatError('');
    }

    return valid;
  }


  // calculate the bmr
  function calculateBMRAndTDEE(gender: Gender, exercise: ExerciseLevel, height: number, weight: number, age: number, bodyFatPercentage: number): { BMR: number, TDEE: number } {
    let BMR: number, TDEE: number;

    // Calculate BMR
    if (gender === 'Male') {
      BMR = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      BMR = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    // Calculate TDEE based on exercise level
    switch (exercise) {
      case 'Sedentary':
        TDEE = BMR * 1.2;
        break;
      case 'Lightly Active':
        TDEE = BMR * 1.375;
        break;
      case 'Moderately Active':
        TDEE = BMR * 1.55;
        break;
      case 'Very Active':
        TDEE = BMR * 1.725;
        break;
      case 'Extra Active':
        TDEE = BMR * 1.9;
        break;
      default:
        throw new Error('Invalid exercise level');
    }

    // Adjust TDEE based on body fat percentage
    TDEE = TDEE - (TDEE * (bodyFatPercentage / 100));
    console.log({ BMR, TDEE })
    return { BMR, TDEE };
  }

  const handleCalculate = async () => {
    const valid = validateInputs(gender, exercise, height, weight, age, bodyFatPercentage)
    if(!valid){
      return
    }
    let { BMR, TDEE } = calculateBMRAndTDEE(gender, exercise, height, weight, age, bodyFatPercentage)
    setBmr(BMR)
    setTdee(TDEE)
  }

  // converter
  function convertToCm(feet: number, inches: number) {
    const centimeters = (feet * 30.48) + (inches * 2.54);
    return centimeters;
  }

  return (
    <>
      <Navigation />
      <div className='h-screen w-full bg-backgroundColor grid place-items-center text-themeColor'>
        <div className='h-[80vh] max-h-fit w-[80vw] rounded-[2rem] border-2 border-borderColor bg-inherit overflow-hidden'>
          <div className='flex xl:flex-row max-xl:flex-row max-sm:flex-col w-full h-full max-h-fit p-8 gap-8'>
            <div className='xl:w-[60%] max-xl:w-[60%] max-sm:w-full h-full max-h-fit flex flex-col gap-3'>
              <div className='h-full w-full max-h-fit'>
                <h1>BMR Calculator</h1>
              </div>
              <div className='h-[80%] w-full max-h-fit flex gap-3'>
                {/* ---------------------------Gender------------------------ */}
                <Select placeholder={'Geder*'} options={genderOptions} onChange={handleGenderChange} width={50} error={genderError} />
                {/* ---------------------------Gender------------------------ */}

                {/* ---------------------------Exercise----------------------- */}
                <Select placeholder={''} options={exerciseOptions} onChange={handleExerciseChange} width={50} error={exerciseError} />
                {/* ---------------------------Exercise--------------------- */}
              </div>
              <div className='h-[80%] w-full max-h-fit flex gap-3'>
                {/* ---------------------------Height-------------------- */}
                <div className='h-full w-[50%] flex gap-2'>
                  {
                    heightUnit === 'cm' ?
                      <input type="number" placeholder='cm' onChange={handleHeightChange} className='h-full w-[70%] border-white border-2 rounded-xl text-left pl-4' />
                      :
                      <>
                        <input type="number" placeholder='ft' onChange={(e: any)=>setFt(e.target.value)} className='h-full w-[35%] border-white border-2 rounded-xl text-left pl-4' />
                        <input type="number" placeholder='in' onChange={(e: any)=>setInch(e.target.value)} className='h-full w-[35%] border-white border-2 rounded-xl text-left pl-4' />
                      </>
                  }
                  <Select placeholder={'cm'} options={heightOptions} onChange={(value) => setHeightUnit(value === 'cm' ? 'cm' : 'ft/in')} width={25} error={heightError} />
                </div>
                  {heightError !== '' && <div className='text-red-500 text-[0.7rem]'>{weightError}</div>}
                {/* ---------------------------Height-------------------------- */}

                {/* ---------------------------Weight------------------------- */}
                <input type="number" placeholder='Weight*' onChange={handleWeightChange} className={`w-[50%] border-white border-2 rounded-xl text-left ${weightError !== '' ? 'border-red-500' : ''} pl-4`} />

                {/* ---------------------------Weight------------------------- */}
              </div>
                {weightError !== '' && <div className='text-red-500 text-[0.7rem]'>{weightError}</div>}
              <div className='h-[80%] w-full max-h-fit flex gap-3'>
                {/* ---------------------------Age-------------------------- */}
                <input type="number" placeholder='Age' onChange={handleAgeChange} className='w-[50%] border-white border-2 rounded-xl text-left pl-4' />
                {ageError !== '' && <div className='text-red-500 text-[0.7rem]'>{ageError}</div>}
                {/* ---------------------------Age-------------------------- */}

                {/* ---------------------------BodyFatPercentage-------------------------- */}
                <input type="number" placeholder='BodyFatPercentage' onChange={handleBodyFatPercentageChange} className='w-[50%] border-white border-2 rounded-xl text-left pl-4' />
                {/* ---------------------------BodyFatPercentage-------------------------- */}
              </div>
                {bodyFatError !== '' && <div className='text-red-500 text-[0.7rem]'>{bodyFatError}</div>}
              <div className='h-full w-full max-h-fit flex gap-3'>
                <div className='h-full w-full bg-themeColor rounded-xl flex justify-between items-center p-3 text-black'>
                  <div className='font-[400] text-[1.2rem]'>Let&apos;s calculate it</div>
                  <button type='button' className='px-4 py-2 rounded-md bg-white font-[600]' onClick={handleCalculate}>Calculate</button>
                </div>
              </div>
            </div>
            <div className='xl:w-[40%] max-xl:w-[40%] max-sm:w-full h-full max-h-fit flex flex-col border-2 border-borderColor rounded-xl p-3'>
              <div className='h-full w-full max-h-fit '>
                <h6>Fill the required details and your results will appear here!</h6>
                <h4>Your BMR is</h4>
                <div className=' flex items-center py-3 px-2 justify-between text-black bg-white w-full h-fit rounded-xl'>
                  <div className={`${bmr !== 0 && 'font-bold text-[1.1rem]'}`}>{bmr === 0 ? 'Your result will appear here' : Math.round(bmr)}</div>
                  <div className='font-bold'>Kcal</div>
                </div>
              </div>
              <div className='h-full w-full flex items-center text-left text-[0.9rem]'>
                BMR is your Basal Metabolic Rate i.e. if you did absolutely nothing all day, it is the number of calories your body would use to sustain life.
              </div>
              <div className='h-full w-full max-h-fit '>
                <div className='h-full w-full max-h-fit flex flex-col gap-1'>
                  <h4>Your TDEE is</h4>
                  <div className=' flex items-center py-3 px-2 justify-between text-black bg-white w-full h-fit rounded-xl'>
                    <div className={`${tdee !== 0 && 'font-bold text-[1.1rem]'}`}>{ tdee === 0 ? 'Your result will appear here': Math.round(tdee)}</div>
                    <div className='font-bold'>Kcal</div>
                  </div>
                  <div>TDEE is your Total Daily Energy Expenditure. It is BMR plus the number of calories burnt through activity.</div>
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

export default Bmr