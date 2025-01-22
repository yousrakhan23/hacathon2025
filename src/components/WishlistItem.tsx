import Image from 'next/image'
import { motion } from 'framer-motion'
import { X, ShoppingCart } from 'lucide-react'
import { fadeIn } from '@/styles/animations'

interface WishlistItemProps {
  id: string
  name: string
  price: number
  imageUrl: string
  onRemove: (id: string) => void
  onAddToCart: (id: string) => void
}

export function WishlistItem({
  id,
  name,
  price,
  imageUrl,
  onRemove,
  onAddToCart
}: WishlistItemProps) {
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
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onAddToCart(id)}
          className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
        >
          <ShoppingCart size={20} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onRemove(id)}
          className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
        >
          <X size={20} />
        </motion.button>
      </div>
    </motion.div>
  )
}

