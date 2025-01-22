'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { colors } from '@/styles/colors'
import { fadeIn } from '@/styles/animations'

interface ReviewFormProps {
  onSubmit: (review: { rating: number; comment: string }) => void
}

export function ReviewForm({ onSubmit }: ReviewFormProps) {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ rating, comment })
    setRating(0)
    setComment('')
  }

  return (
    <motion.form
      variants={fadeIn}
      initial="initial"
      animate="animate"
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.button
              key={star}
              type="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setRating(star)}
              className={`text-2xl ${rating >= star ? 'text-yellow-400' : 'text-gray-300'}`}
            >
              <Star fill={rating >= star ? 'currentColor' : 'none'} />
            </motion.button>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">Comment</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="w-full py-2 px-4 text-white rounded-md shadow-md transition-colors duration-300"
        style={{ backgroundColor: colors.primary }}
      >
        Submit Review
      </motion.button>
    </motion.form>
  )
}

