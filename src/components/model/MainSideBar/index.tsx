import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Plus, X } from 'lucide-react'

export function MainSideBar() {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="h-16 w-full bg-red-200 text-black flex justify-center items-center">
        ロゴとか？
      </div>

      <div className="mt-6 h-fit">
        <div>
          <Label>単語で絞り込む</Label>
          <Input className="mt-1" placeholder="単語を入力" />
        </div>

        <div className="mt-4">
          <Label>ハッシュタグで絞り込む</Label>
          <div className="flex flex-row mt-1 space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                className="flex flex-row items-center bg-blue-400 rounded-md px-2 w-fit"
                key={i}
              >
                <p>{`Tag-${i}`}</p>
                <div className="w-4 h-4 ml-2 rounded-full bg-gray-200 flex justify-center items-center">
                  <X size={12} />
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-2">
            <Plus size={16} />
            タグを追加
          </Button>
        </div>
      </div>

      <div className="mt-auto">
        <div className="h-64 w-full bg-red-200 text-black flex justify-center items-center">
          Calendar
        </div>
      </div>
    </div>
  )
}
