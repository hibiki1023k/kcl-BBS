import { Inter as FontSans } from 'next/font/google'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import { ReactNode } from 'react'
import './global.css'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

type Props = {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ja-JP">
      <body className={cn(fontSans.variable)}>
        <ThemeProvider
          attribute="class"
          forcedTheme="light"
          disableTransitionOnChange
        >
          <div>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
