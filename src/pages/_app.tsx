import { type AppType } from "next/dist/shared/lib/utils"
import Head from "next/head"
import { BG } from "~/components/BG"
import FontProvider from "~/components/FontProvider"
import { Navbar } from "~/components/Navbar"
import "~/styles/globals.css"

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Space Tourism Website</title>
        <meta
          name="description"
          content="A Space Tourism Build with Create T3 App"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <FontProvider>
        <Navbar />
        <Component {...pageProps} />
      </FontProvider>
      <BG />
    </>
  )
}

export default MyApp
