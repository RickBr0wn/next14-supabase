'use client'

import { PersonIcon } from '@radix-ui/react-icons'
import { Button } from './button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from 'next/link'

export default function Avatar() {
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleLogOut = async () => {
    const { error } = await supabase.auth.signOut()

    if (error) console.log('** ~/avatar.tsx', { error })

    router.push('/log-in')
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <PersonIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem>
          <Link href={'/account-settings'}>Account Settings</Link>
        </DropdownMenuItem>
        <hr />
        <DropdownMenuItem onClick={handleLogOut}>Log Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

// Path: components/ui/avatar.tsx
// Created at: 17:12:23 - 27/03/2024
// Language: Typescript
// Framework: React/Next.js
