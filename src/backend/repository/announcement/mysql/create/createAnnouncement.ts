import { Announcement, DraftAnnouncement } from '@/backend/entity/Announcement'
import { AlreadyExistsError, InvalidDataError } from '@/backend/entity/Error'
import { Result, Success } from '@/lib/Result'

export const createAnnouncement = async (
  _data: DraftAnnouncement,
): Promise<
  Result<Announcement, AlreadyExistsError | InvalidDataError | Error>
> => {
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
