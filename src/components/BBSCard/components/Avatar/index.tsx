'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

type Props = {
  url: string
}

export function AvatarComponent({ url }: Props) {
  return (
    <Avatar>
      <AvatarImage src={url} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
