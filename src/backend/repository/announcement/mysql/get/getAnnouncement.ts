import { Announcement } from '@/backend/entity/Announcement'
import { InvalidDataError, NotFoundError } from '@/backend/entity/Error'
import { Result, Success } from '@/lib/Result'

export const getAnnouncement = async (
  _id: string,
): Promise<Result<Announcement, NotFoundError | InvalidDataError | Error>> => {
  return new Success({
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
  })
}
