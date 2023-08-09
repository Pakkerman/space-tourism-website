import Image from "next/image"
import { useRouter } from "next/router"

export const BG = () => {
  let { pathname } = useRouter()
  pathname = pathname.slice(1)

  return (
    <div className="fixed left-0 top-0 z-[-100] bg-black transition-all">
      <Image
        className="h-screen w-screen object-cover object-center sm:hidden"
        src={`/assets/${pathname}/background-${pathname}-mobile.jpg`}
        width={375}
        height={710}
        alt="background image"
      />
      <Image
        className="hidden h-screen w-screen object-cover  object-center sm:block lg:hidden"
        src={`/assets/${pathname}/background-${pathname}-tablet.jpg`}
        width={768}
        height={1024}
        alt="background image"
      />
      <Image
        className="hidden h-screen w-screen object-cover  object-center  lg:block"
        src={`/assets/${pathname}/background-${pathname}-desktop.jpg`}
        height={900}
        width={1440}
        alt="background image"
      />
    </div>
  )
}
