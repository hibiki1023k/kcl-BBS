import { BBSCardList } from '@/components/BBSCardList'
import { MainSideBar } from '@/components/model/MainSideBar'

export default function Page() {
  return (
    <div className="max-w-[1400px] h-full mx-auto">
      <div className="flex flex-row h-full">
        <div className="w-[300px] h-full p-2 pt-4">
          <MainSideBar />
        </div>
        <div className="flex-grow h-full">
          <BBSCardList />
        </div>
      </div>
    </div>
  )
}
