import { motion } from 'framer-motion'
import { colors } from '@/styles/colors'
import { fadeIn } from '@/styles/animations'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      animate="animate"
      className="flex justify-center items-center space-x-2 mt-8"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors duration-300"
      >
        Previous
      </motion.button>
      <div className="flex space-x-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <motion.button
            key={page}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onPageChange(page)}
            className={`px-4 py-2 border rounded-md transition-colors duration-300 ${
              currentPage === page
                ? 'text-white'
                : 'hover:bg-gray-50'
            }`}
            style={{ backgroundColor: currentPage === page ? colors.primary : 'transparent' }}
          >
            {page}
          </motion.button>
        ))}
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors duration-300"
      >
        Next
      </motion.button>
    </motion.div>
  )
}

