import Image, { type StaticImageData } from "next/image"
import { useRouter } from "next/router"

import homeMobile from "../../public/assets/home/background-home-mobile.jpg"
import homeTablet from "../../public/assets/home/background-home-tablet.jpg"
import homeDesktop from "../../public/assets/home/background-home-desktop.jpg"
import destinationMobile from "../../public/assets/destination/background-destination-mobile.jpg"
import destinationTablet from "../../public/assets/destination/background-destination-tablet.jpg"
import destinationDesktop from "../../public/assets/destination/background-destination-desktop.jpg"
import crewMobile from "../../public/assets/crew/background-crew-mobile.jpg"
import crewTablet from "../../public/assets/crew/background-crew-tablet.jpg"
import crewDesktop from "../../public/assets/crew/background-crew-desktop.jpg"
import technologyMobile from "../../public/assets/technology/background-technology-mobile.jpg"
import technologyTablet from "../../public/assets/technology/background-technology-tablet.jpg"
import technologyDesktop from "../../public/assets/technology/background-technology-desktop.jpg"

const img: Record<string, StaticImageData> = {
  homeMobile: homeMobile,
  homeTablet: homeTablet,
  homeDesktop: homeDesktop,
  destinationMobile: destinationMobile,
  destinationTablet: destinationTablet,
  destinationDeskto: destinationDesktop,
  crewMobile: crewMobile,
  crewTablet: crewTablet,
  crewDesktop: crewDesktop,
  technologyMobile: technologyMobile,
  technologyTablet: technologyTablet,
  technologyDesktop: technologyDesktop,
}

export const BG = () => {
  let { pathname } = useRouter()
  pathname = pathname.slice(1)

  return (
    <div className="fixed left-0 top-0 z-[-100] bg-black transition-all">
      <Image
        className="h-screen w-screen object-cover object-center sm:hidden"
        src={img[`${pathname}Mobile`]!}
        quality={100}
        alt="background image"
      />
      <Image
        className="hidden h-screen w-screen object-cover sm:block lg:hidden"
        src={img[`${pathname}Tablet`]!}
        quality={100}
        alt="background image"
      />
      <Image
        className="hidden h-screen w-screen object-cover object-center lg:block"
        src={img[`${pathname}Desktop`]!}
        quality={100}
        alt="background image"
      />
    </div>
  )
}
