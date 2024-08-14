"use client"
import React from 'react'
import { signIn } from 'next-auth/react'
const page = () => {
  return (
    
    <div>
        <button onClick={()=>signIn()}>Sign in</button>
    </div>
  )
}

export default page
