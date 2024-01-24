import { Announcement } from '@/backend/entity/Announcement'
import {
  AlreadyExistsError,
  InvalidDataError,
  NotFoundError,
} from '@/backend/entity/Error'
import { Result } from '@/lib/Result'

export interface AnnouncementUsecase {
  createAnnouncement(
    _announcement: Announcement,
  ): Promise<
    Result<Announcement, AlreadyExistsError | InvalidDataError | Error>
  >

  getAnnouncement(
    _id: string,
  ): Promise<Result<Announcement, NotFoundError | InvalidDataError | Error>>

  updateAnnouncement(
    _announcement: Announcement,
  ): Promise<Result<Announcement, InvalidDataError | NotFoundError | Error>>

  deleteAnnouncement(
    _id: string,
  ): Promise<Result<true, NotFoundError | InvalidDataError | Error>>

  listAnnouncements(): Promise<Result<Announcement[], Error>>
}
