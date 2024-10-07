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
        <head>
          <meta charSet="utf-8" />
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <link rel="icon" href="/favicon-1.png" type="image/x-icon" />
        </head>
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
