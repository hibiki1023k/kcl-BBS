import { BBSCard } from '@/components/BBSCard'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function Page() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="bg-red-500 col-start-1 col-span-2 h-[80vh]"></div>
      <div className="bg-blue-500 col-start-3 col-span-7 h-[80vh] ">
        <ScrollArea className="h-[100vh] p-2">
          <div className="m-2">
            <BBSCard
              time={new Date()}
              name="hoge"
              content="contentcontentcontent"
              hashtag="学内のイベント"
              avatarUrl="https://github.com/shadcn.png"
            />
          </div>
          <div className="m-2">
            <BBSCard
              time={new Date()}
              name="hoge"
              content="content"
              hashtag="学内のイベント"
              avatarUrl="https://github.com/shadcn.png"
            />
          </div>
          <div className="m-2">
            <BBSCard
              time={new Date()}
              name="hoge"
              content="content"
              hashtag="学内のイベント"
              avatarUrl="https://github.com/shadcn.png"
            />
          </div>
          <div className="m-2">
            <BBSCard
              time={new Date()}
              name="hoge"
              content="content"
              hashtag="学内のイベント"
              avatarUrl="https://github.com/shadcn.png"
            />
          </div>
          <div className="m-2">
            <BBSCard
              time={new Date()}
              name="hoge"
              content="content"
              hashtag="学内のイベント"
              avatarUrl="https://github.com/shadcn.png"
            />
          </div>
          <div className="m-2">
            <BBSCard
              time={new Date()}
              name="hoge"
              content="content"
              hashtag="学内のイベント"
              avatarUrl="https://github.com/shadcn.png"
            />
          </div>
          <div className="m-2">
            <BBSCard
              time={new Date()}
              name="hoge"
              content="content"
              hashtag="学内のイベント"
              avatarUrl="https://github.com/shadcn.png"
            />
          </div>
          <div className="m-2">
            <BBSCard
              time={new Date()}
              name="hoge"
              content="content"
              hashtag="学内のイベント"
              avatarUrl="https://github.com/shadcn.png"
            />
          </div>{' '}
          <div className="m-2">
            <BBSCard
              time={new Date()}
              name="hoge"
              content="content"
              hashtag="学内のイベント"
              avatarUrl="https://github.com/shadcn.png"
            />
          </div>
          <div className="m-2">
            <BBSCard
              time={new Date()}
              name="hoge"
              content="content"
              hashtag="学内のイベント"
              avatarUrl="https://github.com/shadcn.png"
            />
          </div>
          <div className="m-2">
            <BBSCard
              time={new Date()}
              name="hoge"
              content="content"
              hashtag="学内のイベント"
              avatarUrl="https://github.com/shadcn.png"
            />
          </div>
          <div className="m-2">
            <BBSCard
              time={new Date()}
              name="hoge"
              content="content"
              hashtag="学内のイベント"
              avatarUrl="https://github.com/shadcn.png"
            />
          </div>
        </ScrollArea>
      </div>
      <div className="bg-purple-500 col-start-10 col-span-3 h-[80vh]">3</div>
    </div>
    // <div className="h-[100vh]">
    //   <div className="w-[300px] mx-auto pt-10">
    //     <BBSCard
    //       time={new Date()}
    //       name="hoge"
    //       content="content"
    //       hashtag="学内のイベント"
    //       avatarUrl="https://github.com/shadcn.png"
    //     />
    //   </div>
    // </div>
  )
}
