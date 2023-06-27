import Image from 'next/image'
import googleIcon from '../../public/google.png'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import registerUser from '@/lib/register'
import { useRouter } from 'next/router'


function Login() {
    const [register, setRegister] = useState(false)
    const [seePassword, setSeePassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()


    const emailLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result = await signIn('credentials', {
          email,
          password,
          callbackUrl: '/'
        });
        if (result?.error) {
          alert('something went wrong')
        } else {
            router.replace('/')
        }
    }

    const emailRegister = async (e: React.FormEvent<HTMLFormElement>) => {
       e.preventDefault()
       const register = await registerUser({ email, password })
       if(register){
        router.replace('/')
       }
    }
    return (
        <>
            <video src="/intro.mp4" className='blur-sm h-screen min-w-full object-cover z-0' autoPlay muted loop />
            <section className="absolute bg-transparent opacity-95 top-0 h-screen w-full z-30 flex items-center justify-center">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
                                {register ? 'Register your account' : 'Sign in to your account'}                            
                                </h1>
                            <form className="space-y-4 md:space-y-6" action="#" onSubmit={register ? emailRegister : emailLogin}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400text-white focus:ring-blue-500 focus:border-blue-500 text-white" placeholder="name@gmail.com" required onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setEmail(e.target.value)}/>
                                </div>
                                <div className='relative z-10'>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                                    <input type={seePassword ? 'text' : 'password'} name="password" id="password" placeholder="••••••••" className="relative z-10 border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 select-none" required onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setPassword(e.target.value)}/>
                                    <FontAwesomeIcon icon={faEye} className='absolute h-4 w-4 bottom-3 right-2 cursor-pointer z-50 text-white' onMouseDown={()=> setSeePassword(true)} onMouseUp={()=> setSeePassword(false)} onMouseLeave={()=> setSeePassword(false)}/>
                                </div>
                                <div className="flex items-center justify-between">
                                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline text-primary-500">Forgot password?</a>
                                </div>
                                <div className='flex flex-col items-center justify-center gap-3'>
                                    <button type="submit" className="w-64 h-12 text-white bg-slate-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">{register ? 'SignUp' : 'SignIn'}</button>
                                    <button type="button" className="flex gap-2 w-64 h-12 text-white bg-slate-900 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2" onClick={() => signIn('google', { callbackUrl: `${window.location.origin}` })}>
                                        <Image src={googleIcon} alt="google" width={30} height={30} />
                                        Sign in with Google
                                    </button>
                                </div>
                                {!register ? <p className="text-sm font-light text-gray-400">
                                    Don’t have an account yet? <span className="font-medium text-primary-600 hover:underline text-primary-500 text-sky-600 cursor-pointer" onClick={() => setRegister(true)}>Sign up</span>
                                </p> : <p className="text-sm font-light text-gray-400">
                                    Already have an account? <span className="font-medium text-primary-600 hover:underline text-primary-500 text-sky-600 cursor-pointer" onClick={() => setRegister(false)}>Login</span>
                                </p>}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login