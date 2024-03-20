import { BBSCard } from '@/components/BBSCard'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function Page() {
  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="bg-red-300 col-start-1 col-span-2 h-[100vh]">1</div>
      <div className="bg-blue-300 col-start-3 col-span-7 h-[100vh] ">
        <ScrollArea className="h-[100vh] p-2">
          {[...Array(10)].map((_, i) => (
            <div className="m-2" key={i}>
              <BBSCard
                time={new Date()}
                name="hoge"
                content="content "
                hashtag="学内のイベント"
                avatarUrl="https://github.com/shadcn.png"
              />
            </div>
          ))}
        </ScrollArea>
      </div>
      <div className="bg-purple-300 col-start-10 col-span-3 h-[100vh]">3</div>
    </div>
  )
}
