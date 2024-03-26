import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    return NextResponse.rewrite(new URL('/login', req.url))
  }

  return res
}

// any route placed in the matcher is excluded from running middleware
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}

// Path: middleware.ts
// Created at: 16:15:14 - 26/03/2024
// Language: Typescript
// Framework: React/Next.js
