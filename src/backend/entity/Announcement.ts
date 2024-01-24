import { User } from './User'

export type Announcement = {
  id: string
  user: User
  title: string
  content: string
  tag: string // This can be string[] in the future.
  createdAt: Date
  updatedAt?: Date
  // anonymous: boolean
}

export type DraftAnnouncement = Omit<
  Announcement,
  'id' | 'createdAt' | 'updatedAt'
> &
  Partial<Pick<Announcement, 'id'>>
