import EditableValue from '~/components/editable-value'
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '~/components/ui/card'

export default function Page() {
  return (
    <div>
      <Card className="py-10 px-6">
        <CardTitle className="text-2xl font-bold">Settings ⚙️</CardTitle>
        <CardDescription className="mb-8">
          You should only see this page when logged in!
        </CardDescription>
        <CardContent>
          <EditableValue />
        </CardContent>
      </Card>
    </div>
  )
}

// Path: app/account-settings/page.tsx
// Created at: 22:41:35 - 29/03/2024
// Language: Typescript
// Framework: React/Next.js
