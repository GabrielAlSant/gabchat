

import Image from 'next/image'
import { MainGithub } from './components/Buttons'
import { getServerSession } from 'next-auth/next'
import { authOptions } from './lib/auth'
import { redirect } from 'next/navigation'

export default async function Home() {
  const session = await getServerSession(authOptions)

  if (session){
    redirect('/chat')
  } 
  return (
    <div style={{marginTop:'20vh'}}>
      <div className='divchat'>
        <h1>Welcome to GabChat</h1>
        <MainGithub />
    </div>
    </div>
  )
}
