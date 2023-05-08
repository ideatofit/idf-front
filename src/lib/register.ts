import { signIn } from "next-auth/react"
import login from "./login"

type UserDetails = {
    email: string
    password: string
}

export default async function register({
    email, password
}: UserDetails){

    try{
    // first check if the user exists
    const userExists = await login({email, password})

    if(userExists){
        alert('User already exists')
        return null
    }

    // if user doesn't exist, then register them. 
    // we are using the server api to register the user. 
    // the server api is located at https://server.ideatofit.com/api/auth/register
    // the server api is a POST request. 
    // the server api accepts the following body:
    // {
    //     "identifier": "email",
    //     "password": "password"
    // }
    const postUserData = await fetch('https://server.ideatofit.com/api/auth/register', {
        method: "POST",
        body: JSON.stringify({identifier: email, password}),
        headers:{
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    })

    if(postUserData.ok){
        const isSignedInSuccessfully = await signIn('credentials', {
            email: email,
            password: password,
        })
        if(isSignedInSuccessfully){
            return true
        }
    }
} catch (err) {
    return null
}
}