import "../styles/globals.css"
import type { AppProps } from 'next/app'



//font used by the whole page
import { Poppins } from '@next/font/google'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})



export default function App({ Component, pageProps }: AppProps) {


  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  )
}
