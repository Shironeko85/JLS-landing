
"use client"

import React, { useEffect, useState } from "react"

const Hero = ({ images = ["/img/hero-1.jpeg", "/img/hero-2.jpg", "/img/hero-3.jpg"], alt = "Equipo trabajando" }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(id)
  }, [images.length])

  return (
    <>
      <div className="h-screen w-screen flex relative overflow-hidden">
        {images.map((src, idx) => (
          <img
            key={src + idx}
            src={src}
            alt={alt}
            className={`absolute inset-0 w-screen h-screen object-cover transition-opacity duration-1000 ease-in-out ${idx === currentIndex ? "opacity-100" : "opacity-0"}`}
          />
        ))}

        <h1 className="absolute bottom-8 right-7 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-bold">La solución tecnológica a tu medida</h1>
      </div>
    </>
  )
}

export default Hero
