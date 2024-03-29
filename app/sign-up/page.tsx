'use client'

import { type ChangeEvent, useState } from 'react'
import { Button } from '~/components/ui/button'
import { Card, CardTitle, CardDescription } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Credentials } from '../log-in/page'
import { supabase } from '~/lib/supabase'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Page() {
  const [credentials, setCredentials] = useState<Credentials>({
    email: '',
    password: '',
  })

  const router = useRouter()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCredentials((prev: Credentials) => ({ ...prev, [name]: value }))
  }

  const handleSignUp = async () => {
    console.log('** ~/app/sign-in/page.tsx', { credentials })
    // TODO: Add loading functionality
    try {
      let { data, error } = await supabase.auth.signUp({
        email: credentials.email,
        password: credentials.password,
      })
      console.log('** ~/app/sign-in/page.tsx', { data })
      console.log('** ~/app/sign-in/page.tsx', { error })
      setCredentials({ email: '', password: '' })

      if (data) router.push('/')
    } catch (error) {
      // TODO: Improve error handling.
      console.log('** ~/app/sign-in/page.tsx', { error })
    }
  }

  return (
    <main>
      <Card className="py-10 px-6 flex flex-col gap-4">
        <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
        <CardDescription>
          <Label htmlFor="email">Email</Label>
          <Input name="email" type="email" onChange={handleChange} />
          <Label id="password">Password</Label>
          <Input name="password" type="password" onChange={handleChange} />
        </CardDescription>
        <Button onClick={handleSignUp} className="uppercase mt-4">
          Sign up
        </Button>
        <Link
          href={'/log-in'}
          className="text-xs text-slate-400 cursor-pointer"
        >
          Already have an account?
        </Link>
      </Card>
    </main>
  )
}

// Path: app/signup/page.tsx
// Created at: 18:45:44 - 26/03/2024
// Language: Typescript
// Framework: React/Next.js
