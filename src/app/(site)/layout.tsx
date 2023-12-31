import { Footer, Navbar, Banner } from '@/components'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import AuthProvider from '@/components/providers/AuthProvider'
import QueryProvider from '@/components/providers/QueryProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { ModalProvider } from '@/components/providers/ModalProvider'
import ChatWidget from '@/components/chat/ChatWidget'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RavenDelivery',
  description: 'RavenDelivery app demo created by RavenHolmDev',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <QueryProvider>
            <ModalProvider>
              <div>
                <Banner />
                <Navbar />
                {children}
                <ChatWidget/>
                <Footer/>
                <ToastContainer position="top-center" theme="dark" autoClose={2000} draggable/>
              </div>
            </ModalProvider>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
