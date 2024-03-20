import { Announcement, DraftAnnouncement } from '@/backend/entity/Announcement'
import {
  AlreadyExistsError,
  InvalidDataError,
  NotFoundError,
} from '@/backend/entity/Error'
import { Result } from '@/lib/Result'

export interface AnnouncementRepository {
  getAnnouncement(
    _id: string,
  ): Promise<Result<Announcement, NotFoundError | InvalidDataError | Error>>

  createAnnouncement(
    _draft: DraftAnnouncement,
  ): Promise<
    Result<Announcement, AlreadyExistsError | InvalidDataError | Error>
  >

  updateAnnouncement(
    _draft: DraftAnnouncement,
  ): Promise<Result<Announcement, InvalidDataError | NotFoundError | Error>>

  deleteAnnouncement(
    _id: string,
  ): Promise<Result<true, NotFoundError | InvalidDataError | Error>>

  listAnnouncements(_page: number): Promise<Result<Announcement[], Error>>
}
