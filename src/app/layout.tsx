import { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Cek Resi',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
