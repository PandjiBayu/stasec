import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Stasec',
  description: 'Your best security partner',
  charset: 'utf-8',
}

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
