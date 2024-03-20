import { Announcement } from '@/backend/entity/Announcement'
import { Result, Success } from '@/lib/Result'
import withConnection from '../driver/withConnection'

export const listAnnouncements = async (
  _page: number,
): Promise<Result<Announcement[], Error>> => {
  return withConnection(async (_connection) => {
    // const result: any[] = await connection.query(listAnnouncementsQuery())

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
  })
}
