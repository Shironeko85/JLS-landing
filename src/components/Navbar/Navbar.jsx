
"use client"

import React, { useState } from "react"
import { motion } from "motion/react"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="absolute fixed w-screen bg-rose-950 h-20 flex items-center px-4 z-30">
        <div className="flex items-center">
          <div className="w-8 h-8 flex justify-center items-center rounded-full bg-neutral-400">
            <img className="h-6 w-6" src="/img/Triforce.png" alt="logo" />
          </div>
          <div className="text-white text-lg font-centrifuge ml-2">Triforce Solutions</div>
        </div>

        <nav className="ml-auto flex items-center">
          {/* Desktop links */}
          <ul className="hidden md:flex gap-6 text-white mr-4">
            <motion.div
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.1,
              },
            }}
            className="p-2 flex items-center rounded-full bg-white/5 hover:bg-white/20 cursor-pointer">
              <li>Inicio</li>
            </motion.div>
            <motion.div
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.1,
              },
            }}
            className="p-2 flex items-center rounded-full bg-white/5 hover:bg-white/20 cursor-pointer">
              <li>Servicios</li>
            </motion.div>
            <motion.div
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.1,
              },
            }}
            className="p-2 flex items-center rounded-full bg-white/5 hover:bg-white/20 cursor-pointer">
              <li>Quienes somos</li>
            </motion.div>
            <motion.div
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.1,
              },
            }}
            className="p-2 flex items-center rounded-full bg-white/5 hover:bg-white/20 cursor-pointer">
              <li>Contacto</li>
            </motion.div>
          </ul>

          {/* Hamburger button */}
          <button
            aria-label="Abrir menú"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded bg-white/10 text-white transition-colors duration-200"
          >
            <svg
              className={`w-6 h-6 transform transition-transform duration-300 ${open ? 'rotate-90 scale-95' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </nav>

        {/* Mobile dropdown */}
        <div
          aria-hidden={!open}
          className={`absolute right-4 top-20 z-40 rounded shadow-md w-44 py-2 md:hidden transform transition-all duration-200 origin-top-right ${
            open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
          } bg-rose-950`}
        >
          <a onClick={() => setOpen(false)} className="block px-4 py-2 hover:bg-gray-100 text-white" href="#">Inicio</a>
          <a onClick={() => setOpen(false)} className="block px-4 py-2 hover:bg-gray-100 text-white" href="#">Servicios</a>
          <a onClick={() => setOpen(false)} className="block px-4 py-2 hover:bg-gray-100 text-white" href="#">Quienes somos</a>
          <a onClick={() => setOpen(false)} className="block px-4 py-2 hover:bg-gray-100 text-white" href="#">Contacto</a>
        </div>
      </header>
    </>
  )
}

export default Navbar