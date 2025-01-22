import { motion } from 'framer-motion'
import { colors } from '@/styles/colors'
import { fadeIn } from '@/styles/animations'

interface Product {
  id: string
  name: string
  price: number
  features: string[]
}

interface ProductComparisonProps {
  products: Product[]
}

export function ProductComparison({ products }: ProductComparisonProps) {
  const allFeatures = Array.from(new Set(products.flatMap(p => p.features)))

  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      animate="animate"
      className="overflow-x-auto"
    >
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Feature</th>
            {products.map(product => (
              <th key={product.id} className="p-2 border">{product.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border font-semibold">Price</td>
            {products.map(product => (
              <td key={product.id} className="p-2 border text-center" style={{ color: colors.accent }}>
                ${product.price.toFixed(2)}
              </td>
            ))}
          </tr>
          {allFeatures.map(feature => (
            <tr key={feature}>
              <td className="p-2 border">{feature}</td>
              {products.map(product => (
                <td key={product.id} className="p-2 border text-center">
                  {product.features.includes(feature) ? '✓' : '✗'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  )
}

