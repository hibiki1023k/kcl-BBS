import { Announcement } from '@/backend/entity/Announcement'
import { Result, Success } from '@/lib/Result'

export const listAnnouncements = async (): Promise<
  Result<Announcement[], Error>
> => {
  return new Success([
    {
      id: 'dummy',
      user: {
        id: 'dummy',
        name: 'dummy',
        avatar: 'dummy',
      },
      title: 'Dummy Title',
      content: 'Dummy Content',
      tag: 'dummy',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ])
}
