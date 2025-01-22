'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ImageGalleryProps {
  images: string[]
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div className="relative">
      <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-full"
          >
            <Image
              src={images[currentIndex] || "/placeholder.svg"}
              alt={`Gallery image ${currentIndex + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Previous Image Button */}
      <button
        onClick={prevImage}
        aria-label="Previous Image"
        className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-md"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Next Image Button */}
      <button
        onClick={nextImage}
        aria-label="Next Image"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-md"
      >
        <ChevronRight size={24} />
      </button>

      {/* Carousel Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to image ${index + 1}`}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
