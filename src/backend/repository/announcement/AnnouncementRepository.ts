import { AnnouncementRepository } from './interface'
import { createAnnouncement } from './mysql/create/createAnnouncement'
import { deleteAnnouncement } from './mysql/delete/deleteAnnouncement'
import { getAnnouncement } from './mysql/get/getAnnouncement'
import { updateAnnouncement } from './mysql/update/updateAnnouncement'
import { listAnnouncements } from './mysql/list/listAnnouncement'

const createAnnouncementRepository = (): AnnouncementRepository => {
  return {
    createAnnouncement,
    getAnnouncement,
    updateAnnouncement,
    deleteAnnouncement,
    listAnnouncements,
  }
}

export const getAnnouncementRepository = () => {
  return createAnnouncementRepository()
}
