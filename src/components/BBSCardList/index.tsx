import { cn } from '@/lib/utils'
import { BBSCard } from '../BBSCard'
import { ScrollArea } from '../ui/scroll-area'
import { Announcement } from '@/backend/entity/Announcement'
import { getAnnouncementUsecase } from '@/backend/usecase/announcement/AnnouncementUsecase'

const getAnnouncements = async (): Promise<Announcement[] | null> => {
  const usecase = getAnnouncementUsecase()
  const result = await usecase.listAnnouncements()

  if (result.isFailure()) {
    return null
  }

  return result.value
}

type BBSCardListProps = {
  className?: string
}

export async function BBSCardList({ className }: BBSCardListProps) {
  const announcements = await getAnnouncements()

  if (announcements === null) {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-foreground">一覧の取得に失敗しました</p>
      </div>
    )
  }

  return (
    <ScrollArea className={cn(className)}>
      {announcements.map((obj, i) => (
        <div className="m-2 mt-4" key={i}>
          <BBSCard
            time={obj.createdAt}
            title={obj.title}
            content={obj.content}
            hashtag={obj.tag}
            avatarUrl={obj.user.avatar}
          />
        </div>
      ))}
    </ScrollArea>
  )
}
