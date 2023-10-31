'use client'

import { signIn, signOut } from "next-auth/react"

export function Logout(){
    return(
        <button onClick={() => signOut()}>
            Logout
        </button>
    )
}

export function Login(){
    return(
        <button onClick={() => signIn('github')}>
            Login
        </button>
    )
}


export function MainGithub(){
   return( 
   <button onClick={() => signIn('github')}>
    Login with Github
   </button>
   )
}