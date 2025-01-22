import { motion } from 'framer-motion'
import { colors } from '@/styles/colors'

interface ProgressBarProps {
  progress: number
  label?: string
}

export function ProgressBar({ progress, label }: ProgressBarProps) {
  return (
    <div className="w-full">
      {label && <div className="text-sm font-medium text-gray-700 mb-1">{label}</div>}
      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
          className="h-full rounded-full"
          style={{ backgroundColor: colors.primary }}
        />
      </div>
      <div className="text-right text-sm font-medium text-gray-500 mt-1">{progress}%</div>
    </div>
  )
}

