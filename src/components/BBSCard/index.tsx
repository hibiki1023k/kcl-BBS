import { Hashtag } from "./components/HashTag"
import { Time } from "./components/Time"

type BBSCardProps = {
    content: string
    name: string
    hashtag: string
    time: Date
}

export function BBSCard ({time, name, content, hashtag}: BBSCardProps){
    return (
        <div className="flex bg-card rounded-lg p-2 shadow-md w-full">
            <div>
                {/* {アイコンのダミー} */}
                <div className="h-[30px] w-[30px] bg-red-300"></div>
            </div>
            <div className="ml-2 w-full">
                <div className="flex flex-row">
                    <p className="text-2xl font-bold">{name}</p>
                    <Time time={time} className="flex items-center ml-2"/>
                </div>
                <div>
                    <p className="break-words">{content}{content}{content}{content}{content}{content}{content}{content}</p>
                </div>
                <div className="ml-auto w-fit">
                    <Hashtag value={hashtag} />
                </div>
            </div>
        </div>
    )
}