'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { colors } from '@/styles/colors'

interface TooltipProps {
  content: string
  children: React.ReactNode
}

export function Tooltip({ content, children }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute z-10 px-3 py-2 text-sm text-white rounded shadow-md"
            style={{ backgroundColor: colors.primary }}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

