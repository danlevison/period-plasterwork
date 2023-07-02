import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../app/styles/globals.css"
import { Raleway } from 'next/font/google'


const raleway = Raleway({ 
  subsets: ['latin'],
  variable: "--font-raleway"
})

export const metadata = {
  title: 'Period Plasterwork',
  description: 'Fibrous plaster specialist',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} font-raleway`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
