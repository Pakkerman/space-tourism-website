import Image from "next/image"

import { useState } from "react"
import data from "../data.json"

const { destinations } = data

// For TailwindCSS output to stylesheet
const CONTENT: Array<string> = [
  "before:content-['01']",
  "before:content-['02']",
  "before:content-['03']",
  "before:content-['04']",
]

export default function Destination() {
  const [selected, setSelected] = useState<number>(0)
  if (!destinations[selected])
    return <div className="text-center">Somthing went wrong</div>

  const { name } = destinations[selected]!

  return (
    <>
      <main className="mx-auto flex h-[650px] max-w-[375px] flex-col items-center justify-between">
        <div>
          <h1
            className={`text-center font-BarlowCondensed text-2xl font-light before:px-2 before:font-medium before:text-slate-500 ${CONTENT[selected]}
            }']`}
          >
            PICK YOUR DESTINATION
          </h1>

          <Image
            className="scale-75"
            src={destinations[selected]?.images.png ?? ""}
            width={445}
            height={445}
            alt={"destination image"}
          />
        </div>
        <div className="flex">
          <div>Moon</div>
          <div>Mars</div>
          <div>Europa</div>
          <div>Titan</div>
        </div>
        <h1 className="text-7xl">MOON</h1>
        <article className="">{destinations[selected]?.description}</article>
        <div className="h-[1px] w-full bg-slate-400/60" />
        <div className="flex flex-col sm:flex-row">
          <div>
            <div>Avg. distance</div>
            <div> {destinations[selected]?.distance}</div>
          </div>
          <div>
            <div>Est. travel time</div>
            <div>{destinations[selected]?.travel}</div>
          </div>
        </div>
      </main>
    </>
  )
}
