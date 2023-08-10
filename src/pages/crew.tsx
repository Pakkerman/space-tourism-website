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
            <h1 className='text-center font-BarlowCondensed text-2xl font-light before:mx-2 before:font-medium before:text-slate-500 before:content-["02_"] lg:m-0 lg:my-4  lg:text-4xl'>
              MEET YOUR CREW
            </h1>
            <div className=" flex h-full flex-col justify-evenly ">
              <div className="my-4 text-center font-Bellefair lg:mt-12 lg:text-left">
                <h2 className="my-2 text-2xl text-slate-500">
                  {crew[selected]?.role.toUpperCase()}
                </h2>
                <h2 className="my-4 text-4xl">
                  {crew[selected]?.name.toUpperCase()}
                </h2>
              </div>
              <div className="flex min-h-[120px] flex-col justify-center">
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
          </div>
          <div className=" flex h-full flex-col items-center justify-center lg:w-[45%] lg:items-start">
            <Image
              className="mx-auto mt-8 h-[250px] w-[250px] object-contain lg:h-[400px] lg:w-[400px]"
              src={crew[selected]?.images.png ?? ""}
              width={445}
              height={445}
              quality={100}
              alt={"destination image"}
            />

            <div className="h-[1px] w-full bg-slate-400/40" />
            {/* <div className=" flex flex-col  justify-evenly text-center sm:w-full sm:flex-row lg:max-w-max lg:justify-start lg:space-x-12 lg:text-left">
              <div className="my-4">
                <div className=" font-Barlow  font-light">AVG. DISTANCE</div>
                <div className="my-2  font-Bellefair text-3xl font-light">
                  {crew[selected]?.distance.toUpperCase()}
                </div>
              </div>
              <div className="my-4">
                <div className=" font-Barlow  font-light">EST. TRAVEL TIME</div>
                <div className="my-2  font-Bellefair text-3xl font-light">
                  {crew[selected]?.travel.toUpperCase()}
                </div>
              </div>
            </div> */}
          </div>
        </section>
      </main>
    </>
  )
}
