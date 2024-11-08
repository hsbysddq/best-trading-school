"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Nav = () => {
  const [navbar, setNavbar] = useState(false)
  return (
    <div>
      <nav className="w-screen bg-slate-900 opacity-70 fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl lg:items-center lg:flex lg:px-8">
          <div>
            <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
              {/* LOGO */}
              <Link href="/" className="">
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={100}
                  height={100}
                  className="w-32 h-auto md:w-36 lg:w-40 focus:border-none active:border-none ml-8 mt-[-28px]"
                />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="lg:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.png" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/burger-bar.png"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-2 mt-8 lg:block lg:pb-0 lg:mt-0 ${
                navbar ? "p-12 xl:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen lg:h-auto items-center justify-center lg:flex mt-3">
                <li className="pb-6 py-2 px-6 border-b-2 lg:border-b-0">
                  <Link
                    href="#projects"
                    onClick={() => setNavbar(!navbar)}
                    className="text-base text-white text-center font-semibold no-underline"
                  >
                    HOME
                  </Link>
                </li>
                <li className="pb-6 py-2 px-6 border-b-2 lg:border-b-0">
                  <Link
                    href="#projects"
                    onClick={() => setNavbar(!navbar)}
                    className="text-base text-white text-center font-semibold no-underline"
                  >
                    ABOUT
                  </Link>
                </li>
                <li className="pb-6 py-2 px-6 border-b-2 lg:border-b-0">
                  <Link
                    href="#projects"
                    onClick={() => setNavbar(!navbar)}
                    className="text-base text-white text-center font-semibold no-underline"
                  >
                    TRADING VIEW
                  </Link>
                </li>
                <li className="pb-6 py-2 px-6 border-b-2 lg:border-b-0">
                  <Link
                    href="#projects"
                    onClick={() => setNavbar(!navbar)}
                    className="text-base text-white text-center font-semibold no-underline"
                  >
                    FOREX CALENDER
                  </Link>
                </li>
                <li className="pb-6 py-2 px-6 border-b-2 lg:border-b-0">
                  <Link
                    href="#projects"
                    onClick={() => setNavbar(!navbar)}
                    className="text-base text-white text-center font-semibold no-underline"
                  >
                    RUNNING PRICE
                  </Link>
                </li>
                <li className="pb-6 py-2 px-6 border-b-2 lg:border-b-0">
                  <Link
                    href="#projects"
                    onClick={() => setNavbar(!navbar)}
                    className="text-base text-white text-center font-semibold no-underline"
                  >
                    BLOG
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
