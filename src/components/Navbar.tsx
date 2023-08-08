const Logo = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
      <g fill="none" fill-rule="evenodd">
        <circle cx="24" cy="24" r="24" fill="#FFF" />
        <path
          fill="#0B0D17"
          d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
        />
      </g>
    </svg>
  )
}

const Hamburger = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
      <g fill="#D0D6F9" fill-rule="evenodd">
        <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
      </g>
    </svg>
  )
}

export const Navbar = () => {
  return (
    <nav className="flex h-20 w-[100vw] items-center justify-between lg:h-36 ">
      <div className="p-6">
        <Logo />
      </div>
      <div className="p-6 md:hidden">
        <Hamburger />
      </div>
      <div className="hidden h-20 items-center space-x-8 bg-slate-600/20 px-12 text-slate-200 backdrop-blur-lg md:flex lg:w-[55%]">
        <div className="font-Barlow font-light">
          <span className="hidden px-2 font-medium lg:inline">00</span>HOME
        </div>
        <div className="font-Barlow font-light">
          <span className="hidden px-2 font-medium lg:inline">01</span>
          DESTINATION
        </div>
        <div className="font-Barlow font-light">
          <span className="hidden px-2 font-medium lg:inline">02</span>CREW
        </div>
        <div className="font-Barlow font-light">
          <span className="hidden px-2 font-medium lg:inline">03</span>
          TECHNOLOGY
        </div>
      </div>
    </nav>
  )
}
