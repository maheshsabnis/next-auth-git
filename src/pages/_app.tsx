import '@/styles/globals.css'
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HeaderStatusBar from './headerstatusbar';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return  (
    <SessionProvider
     session={pageProps.session}>
      <HeaderStatusBar/>
        <Component {...pageProps} />
    </SessionProvider>

  )
     
}
