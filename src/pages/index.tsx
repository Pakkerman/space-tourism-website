import Head from "next/head"
import { BG } from "~/components/BG"
import { Footer } from "~/components/Footer"
import { Navbar } from "~/components/Navbar"

export default function Home() {
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
      <Navbar />
      <main className=" mx-auto  min-h-[650px] max-w-[375px]">
        <div className="flex h-[600px] flex-col items-center justify-between px-[7vw] pt-10">
          <h1 className="text-xl font-light tracking-widest text-slate-400">
            SO, YOU WANT TO TRAVEL TO
          </h1>
          <h1 className="font-Bellefair text-8xl">SPACE</h1>
          <article className="text-center text-lg font-light tracking-wider text-slate-400">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </article>
          <div className="h-40 w-40 cursor-pointer rounded-full bg-slate-100 transition-all hover:bg-black/30 hover:backdrop-blur-md">
            <h1 className="text-center font-Bellefair text-2xl leading-[10rem]  text-slate-700 transition-all hover:text-slate-200">
              EXPLORE
            </h1>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
      <BG pageNumber={1} />
    </>
  )
}
