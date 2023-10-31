import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import type {NextAuthOptions} from  'next-auth'
import GithubProvider from 'next-auth/providers/github'

const prisma =  new PrismaClient()

export const authOptions: NextAuthOptions ={
    adapter:PrismaAdapter(prisma),
 providers : [
   GithubProvider({
    clientId: process.env.GITHUB_CLIENT_ID as string,
    clientSecret: process.env.GITHUB_SECRET_ID as string    
   })
 ]
}