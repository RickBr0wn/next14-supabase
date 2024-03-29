'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, type ChangeEvent } from 'react'
import { Button } from '~/components/ui/button'
import { Card, CardDescription, CardTitle } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { supabase } from '~/lib/supabase'

export type Credentials = {
  email: string
  password: string
}

export default function LoginPage() {
  const [credentials, setCredentials] = useState<Credentials>({
    email: '',
    password: '',
  })

  const router = useRouter()

  const [buttonText, setButtonText] = useState<'log in' | 'loading'>('log in')

  const handleLogin = async () => {
    // TODO: Add loading functionality
    setButtonText('loading')
    try {
      let { data, error } = await supabase.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password,
      })
      // TODO: Improve error handling.
      console.log('** ~/app/log-in/page.tsx', { data })
      console.log('** ~/app/log-in/page.tsx', { error })

      if (data) router.push('/')
    } catch (error) {
      console.log('** ~/app/log-in/page.tsx', { error })
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCredentials((prev: Credentials) => ({ ...prev, [name]: value }))
  }

  return (
    <main>
      <Card className="py-10 px-6 flex flex-col gap-4">
        <CardTitle className="text-2xl font-bold">Log In</CardTitle>
        <CardDescription>
          <Label htmlFor="email">Email</Label>
          <Input name="email" id="email" type="email" onChange={handleChange} />
          <Label id="password">Password</Label>
          <Input
            name="password"
            id="password"
            type="password"
            onChange={handleChange}
          />
        </CardDescription>
        {/* TODO: Add loading functionality */}
        <Button onClick={handleLogin} className="uppercase mt-4">
          {buttonText}
        </Button>
        <Link
          href={'/sign-up'}
          className="text-xs text-slate-400 cursor-pointer"
        >
          Don&apos;t have an account?
        </Link>
      </Card>
    </main>
  )
}

// Path: app/login/page.tsx
// Created at: 18:37:17 - 26/03/2024
// Language: Typescript
// Framework: React/Next.js
