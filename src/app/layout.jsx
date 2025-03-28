import NavBar from "@/src/components/NavBar"
import {Roboto} from "next/font/google"
import "./global.css"

export const metadata = {
  title: 'My Next.js',
  description: 'Generated by Gustavo Jimenez',
}

const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"]
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={roboto.className} > 
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
