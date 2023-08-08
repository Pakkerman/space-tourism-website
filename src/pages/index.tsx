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
      <main className="mx-auto max-w-[375px] sm:max-w-[550px] lg:max-w-none">
        <div className=" flex h-[650px] flex-col items-center justify-between px-[7vw] pt-10 lg:mx-auto lg:h-[600px] lg:w-[90vw] lg:flex-row">
          <div className="flex h-full flex-col items-center justify-evenly lg:h-[80%] lg:w-[50%] lg:items-start lg:pr-20">
            <h1 className="text-xl font-light tracking-widest text-slate-400 lg:text-2xl">
              SO, YOU WANT TO TRAVEL TO
            </h1>
            <h1 className="font-Bellefair text-8xl transition-all sm:text-[10rem]">
              SPACE
            </h1>
            <article className="text-center text-lg font-light tracking-wider text-slate-400 lg:text-left">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </article>
          </div>
          <div className="lg:w-[50%]">
            <div className=" mx-auto h-40 w-40 cursor-pointer select-none rounded-full bg-slate-100 transition-all duration-100 hover:bg-black/30 hover:backdrop-blur-md active:border-2 lg:translate-x-[100%] lg:translate-y-[60%] lg:scale-150">
              <h1 className="text-center font-Bellefair text-2xl leading-[10rem] text-slate-700 transition-all duration-100 hover:text-slate-200">
                EXPLORE
              </h1>
            </div>
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
