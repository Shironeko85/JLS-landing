
"use client"

import React, { useState, useEffect } from "react"
import { motion } from "motion/react"
const menuVariants = {
  initial: {
    x: 150,
    y: -50,
    opacity: 0,
    scale: 0.7
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 3,
      ease: "easeInOut",
      staggerChildren: 1,
    },
  },
};

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <header className={`absolute fixed w-screen h-18 flex items-center px-4 z-30 transition-all duration-300 ${scroll ? 'bg-rose-950/80 backdrop-blur-sm' : 'bg-rose-950'}`}>
        <div className="flex items-center">
          <div className="w-8 h-8 flex justify-center items-center rounded-full bg-neutral-400">
            <img className="h-6 w-6" src="/img/Triforce.png" alt="logo" />
          </div>
          <motion.div
          className="nav-text text-white text-lg ml-3">HyperTech</motion.div>
        </div>

        <motion.nav
          variants={menuVariants}
          initial="initial"
          animate="animate" 
          className="hTitle" className="ml-auto flex items-center">
          {/* Desktop links */}
          <ul className="hidden md:flex gap-6 text-white mr-4">
            <motion.div
            variants={menuVariants}
            className="p-2 flex items-center rounded bg-white/5 hover:bg-white/20 cursor-pointer">
              <a>Inicio</a>
            </motion.div>
            <motion.div
            variants={menuVariants}
            className="p-2 flex items-center rounded bg-white/5 hover:bg-white/20 cursor-pointer">
              <a>Servicios</a>
            </motion.div>
            <motion.div
            variants={menuVariants}
            className="p-2 flex items-center rounded bg-white/5 hover:bg-white/20 cursor-pointer">
              <a>Quienes somos</a>
            </motion.div>
            <motion.div
            variants={menuVariants}
            className="p-2 flex items-center rounded bg-white/5 hover:bg-white/20 cursor-pointer">
              <a>Contacto</a>
            </motion.div>
          </ul>

          {/* Hamburger button */}
          <button
            aria-label="Abrir menú"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded bg-white/5 hover:bg-white/20 text-white transition-colors duration-200 mr-3 cursor-pointer"
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
        </motion.nav>

        {/* Mobile dropdown */}
        <div
          aria-hidden={!open}
          className={`absolute right-4 top-20 z-40 rounded shadow-md w-44 py-2 md:hidden transform transition-all duration-200 origin-top-right mr-3 ${
            open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
          } bg-rose-950`}
        >
          <a onClick={() => setOpen(false)} className="block px-4 py-2 hover:bg-white/20 text-white" href="#">Inicio</a>
          <a onClick={() => setOpen(false)} className="block px-4 py-2 hover:bg-white/20 text-white" href="#">Servicios</a>
          <a onClick={() => setOpen(false)} className="block px-4 py-2 hover:bg-white/20 text-white" href="#">Quienes somos</a>
          <a onClick={() => setOpen(false)} className="block px-4 py-2 hover:bg-white/20 text-white" href="#">Contacto</a>
        </div>
      </header>
    </>
  )
}

export default Navbar
