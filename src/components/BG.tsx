import Image from "next/image"
import { useRouter } from "next/router"

// import homeMobile from "../../public/assets/home/background-home-mobile.jpg"
// import homeTablet from "../../public/assets/home/background-home-tablet.jpg"
// import homeDesktop from "../../public/assets/home/background-home-desktop.jpg"

export const BG = () => {
  let { pathname } = useRouter()
  pathname = pathname.slice(1)

  return (
    <div className="fixed left-0 top-0 z-[-100] bg-black transition-all">
      <Image
        className="h-screen w-screen object-cover object-center sm:hidden"
        src={`/assets/${pathname}/background-${pathname}-mobile.jpg`}
        // src={homeMobile}
        width={375}
        height={710}
        // placeholder="blur"
        quality={100}
        loading="eager"
        alt="background image"
      />
      <Image
        className="hidden h-screen w-screen object-cover sm:block lg:hidden"
        src={`/assets/${pathname}/background-${pathname}-tablet.jpg`}
        // src={homeTablet}
        width={768}
        height={1024}
        // placeholder="blur"
        loading="eager"
        quality={100}
        alt="background image"
      />
      <Image
        className="hidden h-screen w-screen object-cover object-center lg:block"
        src={`/assets/${pathname}/background-${pathname}-desktop.jpg`}
        // src={homeDesktop}
        height={900}
        width={1440}
        // placeholder="blur"
        loading="eager"
        quality={100}
        alt="background image"
      />
    </div>
  )
}
