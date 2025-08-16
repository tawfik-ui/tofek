import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'موقع تحميل الملفات والبرامج',
  description: 'موقع آمن وموثوق لتحميل البرامج والملفات المختلفة',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-gray-50 min-h-screen">
        {children}
      </body>
    </html>
  )
}