import { Card, CardDescription, CardTitle } from '~/components/ui/card'

export type View = {
  name: string
}

export default function Home() {
  return (
    <main>
      <Card className="py-10 px-6">
        <CardTitle className="text-2xl font-bold">Authenticated 🔐</CardTitle>
        <CardDescription className="mb-8">
          You should only see this page when logged in!
        </CardDescription>
      </Card>
    </main>
  )
}

// Path: app/page.tsx
// Language: Typescript
// Framework: React/Next.js
