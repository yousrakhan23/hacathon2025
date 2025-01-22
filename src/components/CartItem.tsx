import Image from 'next/image'
import { motion } from 'framer-motion'
import { Trash2 } from 'lucide-react'

import { fadeIn } from '@/styles/animations'

interface CartItemProps {
  id: string
  name: string
  price: number
  quantity: number
  imageUrl: string
  onRemove: (id: string) => void
  onUpdateQuantity: (id: string, quantity: number) => void
}

export function CartItem({
  id,
  name,
  price,
  quantity,
  imageUrl,
  onRemove,
  onUpdateQuantity
}: CartItemProps) {
  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      animate="animate"
      className="flex items-center space-x-4 py-4 border-b border-gray-200"
    >
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt={name}
        width={80}
        height={80}
        className="rounded-md object-cover"
      />
      <div className="flex-grow">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">${price.toFixed(2)}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onUpdateQuantity(id, Math.max(1, quantity - 1))}
          className="px-2 py-1 bg-gray-200 rounded-md"
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => onUpdateQuantity(id, quantity + 1)}
          className="px-2 py-1 bg-gray-200 rounded-md"
        >
          +
        </button>
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onRemove(id)}
        className="text-red-500 hover:text-red-600 transition-colors"
      >
        <Trash2 size={20} />
      </motion.button>
    </motion.div>
  )
}

