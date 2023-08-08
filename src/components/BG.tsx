import Image from "next/image"

type BGProps = {
  pageNumber: number
}
const PAGE: Record<number, string> = {
  1: "home",
  2: "destination",
  3: "crew",
  4: "technology",
}

export const BG = ({ pageNumber = 1 }: BGProps) => {
  const pageName = PAGE[pageNumber]

  return (
    <div className="fixed left-0 top-0 z-[-100] bg-black transition-all">
      <Image
        className="h-screen w-screen object-cover object-center md:hidden"
        src={`/assets/${pageName}/background-${pageName}-mobile.jpg`}
        width={375}
        height={710}
        alt="background image"
      />
      <Image
        className="hidden h-screen w-screen object-cover  object-center md:block lg:hidden"
        src={`/assets/${pageName}/background-${pageName}-tablet.jpg`}
        width={768}
        height={1024}
        alt="background image"
      />
      <Image
        className="hidden h-screen w-screen object-cover  object-center  lg:block"
        src={`/assets/${pageName}/background-${pageName}-desktop.jpg`}
        height={900}
        width={1440}
        alt="background image"
      />
    </div>
  )
}
