import { useState } from "react"
import Image from "next/image"
import data from "../data.json"

const { crew } = data

export default function Crew() {
  const [selected, setSelected] = useState<number>(0)
  return (
    <>
      <main className=" mx-auto max-w-[375px] sm:max-w-[550px] lg:max-w-none">
        <section className=" flex min-h-min flex-col items-center justify-between px-[7vw] sm:pt-10 lg:mx-auto lg:h-[550px] lg:w-[90vw] lg:flex-row">
          <div className=" flex h-full flex-col lg:w-[45%]">
            <h1 className='text-center font-BarlowCondensed text-2xl font-light before:mx-2 before:font-medium before:text-slate-500 before:content-["02_"] lg:m-0 lg:my-4 lg:text-4xl'>
              MEET YOUR CREW
            </h1>
            <div className="flex h-full flex-col justify-evenly">
              <div className=" text-center font-Bellefair lg:text-left">
                <h2 className="my-4 text-2xl text-slate-500">
                  {crew[selected]?.role.toUpperCase()}
                </h2>
                <h2 className="truncate text-4xl">
                  {crew[selected]?.name.toUpperCase()}
                </h2>
              </div>
            </div>
            <div className="my-4 flex min-h-[175px] items-center justify-center lg:justify-start">
              <p className="text-center font-Barlow font-light tracking-wide sm:mx-4 lg:mx-0 lg:max-w-[400px] lg:text-left">
                {crew[selected]?.bio}
              </p>
            </div>
            <div className="my-4 flex cursor-pointer justify-center space-x-12 font-Barlow text-xl font-light lg:text-2xl">
              {crew.map((item, idx) => (
                <button
                  key={idx}
                  className={`
                    ${selected === idx ? "bg-slate-200/80 text-orange-600" : ""}
                    h-10 w-10 rounded-full bg-black/50 text-center font-Barlow font-bold shadow-inner backdrop-blur-md transition-all hover:bg-slate-100 hover:text-orange-600 active:scale-110
                    `}
                  onClick={() => setSelected(idx)}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          </div>
          <div className=" flex h-full flex-col items-center justify-center lg:w-[45%]">
            <Image
              className="h-[400px] object-contain object-bottom"
              src={crew[selected]?.images.png ?? ""}
              width={445}
              height={445}
              quality={100}
              alt={"crew image"}
            />

            <div className="h-[1px] w-full bg-slate-400/40" />
          </div>
        </section>
      </main>
    </>
  )
}
