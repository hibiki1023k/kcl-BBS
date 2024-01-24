import { InvalidDataError, NotFoundError } from '@/backend/entity/Error'
import { Result, Success } from '@/lib/Result'

export const deleteAnnouncement = async (
  _id: string,
): Promise<Result<true, NotFoundError | InvalidDataError | Error>> => {
  return new Success(true)
}
