import { Html, Head, Main, NextScript } from 'next/document';
import { SessionProvider } from 'next-auth/react';
import HeaderStatusBar from './headerstatusbar'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
       {/* <SessionProvider>  */}
      {/* <HeaderStatusBar/> */}
        <Main />
        <NextScript />
        {/* </SessionProvider> */}
      </body>
    </Html>
  )
}
