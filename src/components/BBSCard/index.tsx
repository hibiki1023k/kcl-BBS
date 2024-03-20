import { Hashtag } from './components/HashTag'
import { Time } from './components/Time'
import { AvatarComponent } from './components/Avatar'

type BBSCardProps = {
  content: string
  name: string
  hashtag: string
  time: Date
  avatarUrl: string
}

export function BBSCard({
  time,
  name,
  content,
  hashtag,
  avatarUrl,
}: BBSCardProps) {
  return (
    <div className="flex bg-card rounded-lg p-2 shadow-md w-full">
      <div>
        <AvatarComponent url={avatarUrl} />
      </div>
      <div className="flex-grow ml-2 break-words overflow-hidden">
        <p className="text-2xl font-bold">{name}</p>
        <Time time={time} className="flex items-center ml-2" />
        <div>
          <p>{content.repeat(10)}</p>
        </div>
        <div className="ml-auto w-fit">
          <Hashtag value={hashtag} />
        </div>
      </div>
    </div>
  )
}
