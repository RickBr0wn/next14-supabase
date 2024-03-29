'use client'

import { CheckIcon, Cross2Icon, Pencil1Icon } from '@radix-ui/react-icons'
import { type Dispatch, type SetStateAction, useState } from 'react'
import { cn } from '~/lib/utils'
import { Input } from './ui/input'
import { Button } from './ui/button'

export type EditableValueProps = {
  value: string
  fn: Dispatch<SetStateAction<string>>
}

export default function EditableValue({ value, fn }: EditableValueProps) {
  const [isEditable, setIsEditable] = useState<boolean>(false)
  const [editedValue, setEditedValue] = useState<string>(value)

  const handleEdit = () => {
    fn(editedValue)
    setIsEditable(false)
  }

  return (
    <div className={cn('', isEditable ? 'text-green-400' : '')}>
      {isEditable ? (
        <div className="flex items-center gap-2">
          <Input
            type="text"
            value={editedValue}
            onChange={e => setEditedValue(e.target.value)}
          />
          <Button variant={'ghost'} className="border" onClick={handleEdit}>
            <CheckIcon />
          </Button>
          <Button
            variant={'ghost'}
            className="border text-red-500"
            onClick={() => setIsEditable(false)}
          >
            <Cross2Icon />
          </Button>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Button
            variant={'ghost'}
            className="border cursor-pointer opacity-25 hover:opacity-100 transition-all"
            onClick={() => setIsEditable(true)}
          >
            <Pencil1Icon />
          </Button>
          <p>{value}</p>
        </div>
      )}
    </div>
  )
}

// Path: components/editable-value.tsx
// Created at: 22:45:03 - 29/03/2024
// Language: Typescript
// Framework: React/Next.js
