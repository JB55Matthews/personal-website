import { motion } from "framer-motion"
import { useState } from "react"
import { useMediaQuery } from "../hooks/useMediaQuery"

export default function NavBar() {
  const [toggled, setToggled] = useState(false)
  const matches = useMediaQuery("(min-width: 1280px)")

  return ( 
    <nav className="relative flex justify-between items-center mx-8 pt-12 pb-6 font-medium md:mx-16 lg:mx-32">
      <svg
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        width="250"
        height={4}
        viewBox="0 0 250 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2 2L600 2" stroke="black" strokeLinecap="round"/>
      </svg>

      <h1>
        <a href="/personal-website/#about">Profile pic</a>
      </h1>

      <h1 className="absolute left-1/2 -translate-x-1/2">
        <a href="/personal-website">Jason Matthews</a>
      </h1>

      {matches ? (
      <div className="flex gap-12">
        <a href="/personal-website"> Home </a>
        <a href="/personal-website/#projects"> Projects </a>
      </div>
      ) : (
      <div 
        onClick={() => setToggled((prevToggle) => !prevToggle)}
        className="space-y-1.5 cursor-pointer z-50"
      >
        <motion.span 
          animate = {{ rotateZ: toggled ? 45 : 0, y: toggled ? 8: 0}}
          className="block h-0.5 w-8 bg-black"
        ></motion.span>
        <motion.span 
          animate = {{ width: toggled ? 0: 24}}
          className="block h-0.5 w-6 bg-black"
        ></motion.span><motion.span 
          animate = {{ rotateZ: toggled ? -45 : 0, y: toggled ? -8: 0, width: toggled ? 32: 16}}
          className="block h-0.5 w-4 bg-black"
        ></motion.span>
      </div>
      )}

      {toggled && !matches &&(
        <motion.div 
          animate={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: 25}}
          className="fixed flex bg-slate-100 bottom-0 left-0 w-full h-screen items-center justify-center"
        >
          <div className="flex flex-col gap-24 text-lg">
            <a href="/personal-website"> Home </a>
            <a href="/personal-website/#projects" onClick={() => setToggled(false)}> Projects </a>
          </div>
        </motion.div>
      )}  

    </nav>
  )
}