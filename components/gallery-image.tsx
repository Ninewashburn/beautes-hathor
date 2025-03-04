"use client"

import { useState } from "react"
import Image from "next/image"

interface GalleryImageProps {
  src: string
  alt: string
  width?: number
  height?: number
}

export default function GalleryImage({ src, alt, width = 400, height = 300 }: GalleryImageProps) {
  const [isChecked, setIsChecked] = useState(false)
  const id = `img-${src.replace(/[^a-zA-Z0-9]/g, "")}`

  const handleChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className="relative">
      <input type="checkbox" id={id} className="my-checkbox hidden" checked={isChecked} onChange={handleChange} />
      <label htmlFor={id} className="cursor-pointer">
        <Image
          src={src || "/images/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className={`rounded-lg object-cover w-full h-auto transition-transform ${isChecked ? "scale-150" : ""}`}
        />
      </label>
    </div>
  )
}

