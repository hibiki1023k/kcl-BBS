import { Announcement, DraftAnnouncement } from '@/backend/entity/Announcement'
import { InvalidDataError, NotFoundError } from '@/backend/entity/Error'
import { Result, Success } from '@/lib/Result'

export const updateAnnouncement = async (
  _draft: DraftAnnouncement,
): Promise<Result<Announcement, InvalidDataError | NotFoundError | Error>> => {
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
