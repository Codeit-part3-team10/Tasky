import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import DashboardProvider from "@/contexts/DashboardProvider";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
 
  return(
    <DashboardProvider>
      {getLayout(<Component {...pageProps} />)}
    </DashboardProvider>
  )
}
