import { motion } from 'framer-motion'

interface SkeletonProps {
  width?: string | number
  height?: string | number
  className?: string
}

export function Skeleton({ width = '100%', height = '20px', className = '' }: SkeletonProps) {
  return (
    <motion.div
      className={`bg-gray-200 rounded ${className}`}
      style={{ width, height }}
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

