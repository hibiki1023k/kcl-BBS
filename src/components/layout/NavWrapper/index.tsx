import { ReactNode } from 'react'
import { HomeNav } from '../HomeNav'

type NavWrapperProps = {
  children: ReactNode
}

export function NavWrapper({ children }: NavWrapperProps) {
  return (
    <div>
      <HomeNav />
      <div className="h-[calc(100vh-56px)]">{children}</div>
    </div>
  )
}
