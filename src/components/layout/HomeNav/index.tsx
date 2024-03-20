import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Home, LogIn } from 'lucide-react'
import ToggleThemeButton from '../ToggleThemeButton'

export function HomeNav() {
  return (
    <nav className="h-14 w-full bg-card border-0 border-b-2 border-gray-300 dark:border-gray-600">
      <div className="mx-auto max-w-[1200px] h-full flex items-center">
        <div className="flex flex-row items-center">
          <Button variant="ghost">
            <Home />
          </Button>
          <ToggleThemeButton className="ml-2" />
        </div>

        <div className="w-full flex justify-center">
          <Input className="h-10 max-w-96" placeholder="投稿を検索" />
        </div>

        <div>
          <Button variant="ghost">
            <LogIn />
          </Button>
        </div>
      </div>
    </nav>
  )
}
