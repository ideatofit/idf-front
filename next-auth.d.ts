import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user:{
      id: number
      jwt: string
      name: string
      email: string
      image: string
    }
  }
}