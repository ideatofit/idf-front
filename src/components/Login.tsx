import Link from 'next/link'
import React, { useState } from 'react'
import style from '../styles/login.module.css'
import { signIn } from 'next-auth/react'

interface State{
  state: 'login' | 'register' 
}

function Login() {
  const [state, setState] = useState<State['state']>('login')
  return (
    <div className={`${style['form-box']}`}>
{ state === 'login' && <form className={`${style['form']}`}>
        <span className={`${style['title']}`}>Sign in</span>
        <span className={`${style['subtitle']}`}>login with your email or your username</span>
        <div className={`${style['form-container']}`}>
          <input type="text" className={`${style['input']}`} placeholder="Full Name" />
          <input type="email" className={`${style['input']}`} placeholder="Email" />
          <input type="password" className={`${style['input']}`} placeholder="Password" />
        </div>
        <button>Sign up</button>
        <button className="flex items-center justify-center w-full px-4 py-2 mt-4 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" onClick={()=>{
          signIn()
        }}>
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path fill="currentColor" d="M23.47 12.64c0-.78-.07-1.53-.2-2.26H12v4.28h6.25c-.25 1.3-.98 2.39-2.04 3.14v2.6h3.3c1.93-1.78 3.05-4.39 3.05-7.76z"></path>
            <path fill="currentColor" d="M12 24c2.76 0 5.17-.9 6.88-2.44l-3.3-2.6c-.91.58-2.08.92-3.58.92-2.76 0-5.11-1.85-5.94-4.34H2.37v2.72c1.72 3.34 5.46 5.58 9.63 5.58z"></path>
            <path fill="currentColor" d="M6.06 14.06c-.14-.4-.22-.83-.22-1.28s.08-.87.22-1.28V8.94H2.37a10.94 10.94 0 0 0 0 6.12l3.69-2.87z"></path>
            <path fill="currentColor" d="M12 4.75c1.5 0 2.83.5 3.89 1.47l2.91-2.91C17.13 1.59 14.72 0 12 0 7.83 0 4.09 2.24 2.37 5.58l3.69 2.87C6.89 6.6 9.24 4.75 12 4.75z"></path>
          </svg>
          <span>Sign in with Google</span>
        </button>

      </form>}
      { state === 'register' &&
              <form className={`${style['form']}`}>
              <span className={`${style['title']}`}>Sign up</span>
              <span className={`${style['subtitle']}`}>Create a free account with your email.</span>
              <div className={`${style['form-container']}`}>
                <input type="text" className={`${style['input']}`} placeholder="Full Name" />
                <input type="email" className={`${style['input']}`} placeholder="Email" />
                <input type="password" className={`${style['input']}`} placeholder="Password" />
              </div>
              <button>Sign up</button>
              <button className="flex items-center justify-center w-full px-4 py-2 mt-4 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" onClick={()=>{
                signIn()
              }}>
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M23.47 12.64c0-.78-.07-1.53-.2-2.26H12v4.28h6.25c-.25 1.3-.98 2.39-2.04 3.14v2.6h3.3c1.93-1.78 3.05-4.39 3.05-7.76z"></path>
                  <path fill="currentColor" d="M12 24c2.76 0 5.17-.9 6.88-2.44l-3.3-2.6c-.91.58-2.08.92-3.58.92-2.76 0-5.11-1.85-5.94-4.34H2.37v2.72c1.72 3.34 5.46 5.58 9.63 5.58z"></path>
                  <path fill="currentColor" d="M6.06 14.06c-.14-.4-.22-.83-.22-1.28s.08-.87.22-1.28V8.94H2.37a10.94 10.94 0 0 0 0 6.12l3.69-2.87z"></path>
                  <path fill="currentColor" d="M12 4.75c1.5 0 2.83.5 3.89 1.47l2.91-2.91C17.13 1.59 14.72 0 12 0 7.83 0 4.09 2.24 2.37 5.58l3.69 2.87C6.89 6.6 9.24 4.75 12 4.75z"></path>
                </svg>
                <span>Sign in with Google</span>
              </button>
      
            </form>
      }
      <div className={`${style['form-section']}`}>
        <p>Don't have an account? <span onClick={()=>{setState('register')}} className='text-Midnight'>click here</span></p>
      </div>
    </div>
  )
}

export default Login