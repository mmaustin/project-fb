import { Inter } from 'next/font/google';
import './globals.css';
//import Navbar from '@/components/Navbar';
import { ClerkProvider } from '@clerk/nextjs'


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Novel Ideas',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {/* <Navbar /> */}
          {/* <main className="max-w-6xl mx-auto"> */}
          {children}
          {/* </main> */}
        </body>
      </html>
    </ClerkProvider>
  )
};
