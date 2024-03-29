import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    return NextResponse.redirect(new URL('/log-in', req.url))
  }

  if (session) console.log('** middleware.ts -> ', session.user.email)

  return res
}

// any route placed in the matcher is excluded from running middleware
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|log-in|sign-up).*)'],
}

// Path: middleware.ts
// Created at: 16:15:14 - 26/03/2024
// Language: Typescript
// Framework: React/Next.js
