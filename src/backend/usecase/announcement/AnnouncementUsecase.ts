import { AnnouncementUsecase } from './interface'
import { Announcement } from '@/backend/entity/Announcement'
import { Success } from '@/lib/Result'

// TODO: Uncomment this when all repository implementations are done
// const createAnnouncementUsecase = (
//   repo: AnnouncementRepository,
// ): AnnouncementUsecase => {
//   return {
//     createAnnouncement: repo.createAnnouncement,
//     getAnnouncement: repo.getAnnouncement,
//     updateAnnouncement: repo.updateAnnouncement,
//     deleteAnnouncement: repo.deleteAnnouncement,
//     listAnnouncements: repo.listAnnouncements,
//   }
// }

const dummyAnnouncement: Announcement = {
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
}

const dummyUsecase = (): AnnouncementUsecase => {
  return {
    createAnnouncement: () => Promise.resolve(new Success(dummyAnnouncement)),
    getAnnouncement: () => Promise.resolve(new Success(dummyAnnouncement)),
    updateAnnouncement: () => Promise.resolve(new Success(dummyAnnouncement)),
    deleteAnnouncement: () => Promise.resolve(new Success(true)),
    listAnnouncements: () =>
      Promise.resolve(
        new Success([dummyAnnouncement, dummyAnnouncement, dummyAnnouncement]),
      ),
  }
}

export const getAnnouncementUsecase = () => {
  return dummyUsecase()

  // TODO: Uncomment this when all repository implementations are done
  // const repository: AnnouncementRepository = getAnnouncementRepository()
  // return createAnnouncementUsecase(repository)
}
