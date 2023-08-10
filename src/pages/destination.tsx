import { useState } from "react"
import Image from "next/image"
import data from "../data.json"

const { destinations } = data

export default function Destination() {
  const [selected, setSelected] = useState<number>(0)

  return (
    <>
      <main className="mx-auto max-w-[375px] sm:max-w-[550px] lg:max-w-none">
        <section className=" flex min-h-min flex-col items-center justify-between px-[7vw] sm:pt-10 lg:mx-auto lg:h-[550px] lg:w-[90vw] lg:flex-row">
          <div className=" h-full lg:w-[45%]">
            <div>
              <h1 className='text-center font-BarlowCondensed text-2xl font-light before:mx-2 before:font-medium before:text-slate-500 before:content-["01_"] lg:m-0 lg:my-4 lg:text-4xl'>
                PICK YOUR DESTINATION
              </h1>
              <Image
                className="animate-rotate mx-auto my-8 h-[250px] w-[250px] object-contain lg:my-12 lg:h-[400px] lg:w-[400px]"
                src={destinations[selected]?.images.png ?? ""}
                width={445}
                height={445}
                quality={100}
                alt={"destination image"}
              />
            </div>
          </div>
          <div className=" flex h-full flex-col items-center justify-center lg:w-[45%] lg:items-start">
            <div className=" my-4 flex cursor-pointer space-x-12 font-BarlowCondensed text-xl font-light lg:text-2xl">
              {destinations.map((item, idx) => (
                <div
                  key={idx}
                  className={`
                ${selected === idx ? "border-opacity-100 text-slate-100" : ""}
                border-b-2 border-slate-400 border-opacity-0 py-2 text-slate-400 transition-all hover:border-slate-200 hover:border-opacity-100 hover:text-slate-100`}
                  onClick={() => setSelected(idx)}
                >
                  {item.name.toUpperCase()}
                </div>
              ))}
            </div>
            <h1 className="my-4 font-Bellefair text-7xl">MOON</h1>
            <div className="mb-4 flex min-h-[150px] flex-col justify-center">
              <p className="text-center font-Barlow font-light tracking-wide sm:mx-4 lg:mx-0 lg:max-w-[400px] lg:text-left">
                {destinations[selected]?.description}
              </p>
            </div>
            <div className="my-4 h-[1px] w-full bg-slate-400/40" />
            <div className=" flex flex-col  justify-evenly text-center sm:w-full sm:flex-row lg:max-w-max lg:justify-start lg:space-x-12 lg:text-left">
              <div className="my-4">
                <div className=" font-Barlow  font-light">AVG. DISTANCE</div>
                <div className="my-2  font-Bellefair text-3xl font-light">
                  {destinations[selected]?.distance.toUpperCase()}
                </div>
              </div>
              <div className="my-4">
                <div className=" font-Barlow  font-light">EST. TRAVEL TIME</div>
                <div className="my-2  font-Bellefair text-3xl font-light">
                  {destinations[selected]?.travel.toUpperCase()}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
