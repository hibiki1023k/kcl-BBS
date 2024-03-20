import { Hashtag } from './components/HashTag'
import { Time } from './components/Time'
import { AvatarComponent } from './components/Avatar'

type BBSCardProps = {
  content: string
  title: string
  hashtag: string
  time: Date
  avatarUrl: string
}

export function BBSCard({
  time,
  title,
  content,
  hashtag,
  avatarUrl,
}: BBSCardProps) {
  return (
    <div className="flex bg-card rounded-lg p-2 shadow-md w-full border-2">
      <div>
        <AvatarComponent url={avatarUrl} />
      </div>
      <div className="flex-grow ml-2 break-words overflow-hidden">
        <div className="flex flex-row mb-2">
          <p className="text-2xl font-bold">{title}</p>
          <Time time={time} className="flex items-center ml-2 min-w-24" />
        </div>
        <div>
          <p>{content}</p>
        </div>
        <div className="ml-auto w-fit">
          <Hashtag value={hashtag} />
        </div>
      </div>
    </div>
  )
}
