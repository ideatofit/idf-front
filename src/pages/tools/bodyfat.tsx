import Select from '@/components/Select'
import Footer from '@/layouts/Footer'
import Navigation from '@/layouts/Navigation'
import getFooterData, { FooterProps } from '@/lib/footer'
import { useState } from 'react'

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
}) {

  // states handling input elements state
  const [heightUnit, setHeightUnit] = useState<States['heightUnit']>('cm')
  const [neckCircumferenceUnit, setNeckCircumferenceUnit] = useState<States['neckCircumference']>('cm')

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
  const [heightError, setHeightError] = useState('')
  const [waistError, setWaistError] = useState('')
  const [neckCircumferenceError, setNeckCircumferenceError] = useState('')

  // options
  const genderOptions = ['Male', 'Female']
  const heightOptions = ['cm', 'ft/in']

  // handlers
  const handleGenderChange = (value: string) => {
    setGender(value === 'Male' ? 'Male' : 'Female');
  };
  
  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const heightValue = Number(e.target.value);
    console.log('heightValue: ' + heightValue)
    if (heightValue >= 0   && heightValue <= 220) {
      setHeight(heightValue);
      setHeightError('');
      console.log('mai chal gya')
    } else {
      setHeightError('Height must be between 120cm and 220cm');
    }
  };
  
  const handleWaistChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const waistValue = Number(e.target.value);
    if (waistValue >= 40 && waistValue <= 200) {
      setWaist(waistValue);
      setWaistError('');
    } else {
      setWaistError('Waist circumference must be between 40cm and 200cm');
    }
  };
  
  const handleNeckCircumferenceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const neckValue = Number(e.target.value);
    if (neckValue >= 20 && neckValue <= 60) {
      setNeckCircumference(neckValue);
      setNeckCircumferenceError('');
    } else {
      setNeckCircumferenceError('Neck circumference must be between 20cm and 60cm');
    }
  };

  //validators
  type Gender = 'Male' | 'Female';

  type ExerciseLevel = 'Sedentary' | 'Lightly Active' | 'Moderately Active' | 'Very Active' | 'Extra Active';

 async function calculateBodyFatPercentage(){
  
  const circumference = waist * 2.54 - neckCircumference;
  const bodyFatPercentage = parseFloat((495 / (1.0324 - 0.19077 * Math.log10(circumference - 450 / height) + 0.15456 * Math.log10(height)) - 450).toFixed(2));
  
  setBodyFat(bodyFatPercentage); 
  
  }



  return (
    <>
      <Navigation />
      <div className='h-screen w-full bg-backgroundColor grid place-items-center text-themeColor'>
        <div className='h-[65vh] max-h-fit w-[80vw] rounded-[2rem] border-2 border-borderColor bg-inherit overflow-hidden'>
          <div className='flex xl:flex-row max-xl:flex-row max-sm:flex-col w-full h-full max-h-fit p-8 gap-8'>
            <div className='xl:w-[60%] max-xl:w-[60%] max-sm:w-full h-full max-h-fit flex flex-col gap-3'>
              <div className='h-full w-full max-h-fit'>
                <h1>BMR Calculator</h1>
              </div>
              <div className='h-[80%] w-full max-h-fit flex gap-3'>
                {/* ---------------------------Gender------------------------ */}
                <Select placeholder={'Geder*'} options={genderOptions} onChange={handleGenderChange} width={50} error={genderError} />
                {/* ---------------------------Gender------------------------ */}
                {/* ---------------------------waist------------------------- */}
                <input type="number" placeholder='waist*' onChange={handleWaistChange} className={`w-[50%] border-white border-2 rounded-xl text-left ${waistError !== '' ? 'border-red-500' : ''} pl-4`} />

                {/* ---------------------------waist------------------------- */}
              </div>
              <div className='h-[80%] w-full max-h-fit flex gap-3'>
                {/* ---------------------------Height-------------------- */}
                <div className='h-full w-[50%] flex gap-2'>
                  {
                    heightUnit === 'cm' ?
                      <input type="number" placeholder='cm' onChange={handleHeightChange} className='h-full w-[70%] border-white border-2 rounded-xl text-left pl-4' />
                      :
                      <>
                        <input type="number" placeholder='ft' onChange={(e: any) => setFt(e.target.value)} className='h-full w-[35%] border-white border-2 rounded-xl text-left pl-4' />
                        <input type="number" placeholder='in' onChange={(e: any) => setInch(e.target.value)} className='h-full w-[35%] border-white border-2 rounded-xl text-left pl-4' />
                      </>
                  }
                  <Select placeholder={'cm'} options={heightOptions} onChange={(value) => setHeightUnit(value === 'cm' ? 'cm' : 'ft/in')} width={25} error={heightError} />
                </div>
                {heightError !== '' && <div className='text-red-500 text-[0.7rem]'>{waistError}</div>}
                {/* ---------------------------Height-------------------------- */}
                {/* ---------------------------neck circumference-------------------- */}
                <div className='h-full w-[50%] flex gap-2'>
                  {
                    heightUnit === 'cm' ?
                      <input type="number" placeholder='cm' onChange={handleNeckCircumferenceChange} className='h-full w-[70%] border-white border-2 rounded-xl text-left pl-4' />
                      :
                      <>
                        <input type="number" placeholder='ft' onChange={(e: any) => setFt(e.target.value)} className='h-full w-[35%] border-white border-2 rounded-xl text-left pl-4' />
                        <input type="number" placeholder='in' onChange={(e: any) => setInch(e.target.value)} className='h-full w-[35%] border-white border-2 rounded-xl text-left pl-4' />
                      </>
                  }
                  <Select placeholder={'cm'} options={heightOptions} onChange={(value) => setHeightUnit(value === 'cm' ? 'cm' : 'ft/in')} width={25} error={heightError} />
                </div>
                {heightError !== '' && <div className='text-red-500 text-[0.7rem]'>{waistError}</div>}
                {/* ---------------------------neck circumference-------------------------- */}
              </div>
              {waistError !== '' && <div className='text-red-500 text-[0.7rem]'>{waistError}</div>}
              <div className='h-full w-full max-h-fit flex gap-3'>
                <div className='h-full w-full bg-themeColor rounded-xl flex justify-between items-center p-3 text-black'>
                  <div className='font-[400] text-[1.2rem]'>Let&apos;s calculate it</div>
                  <button type='button' className='px-4 py-2 rounded-md bg-white font-[600]' onClick={calculateBodyFatPercentage}>Calculate</button>
                </div>
              </div>
            </div>
            <div className='xl:w-[40%] max-xl:w-[40%] max-sm:w-full h-full max-h-fit flex flex-col border-2 border-borderColor rounded-xl p-3'>
              <div className='h-full w-full max-h-fit '>
                <h6>Fill the required details and your results will appear here!</h6>
                <h4>Your BMR is</h4>
                <div className=' flex items-center py-3 px-2 justify-between text-black bg-white w-full h-fit rounded-xl'>
                  <div className={`${bodyFat !== 0 && 'font-bold text-[1.1rem]'}`}>{bodyFat === 0 ? 'Your result will appear here' : Math.round(bodyFat) + '%'}</div>
                  <div className='font-bold'>Kcal</div>
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