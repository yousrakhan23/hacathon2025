// const products = [
//     {
//       _id: '1',
//       name: 'Premium Headphones',
//       slug: 'premium-headphones',
//       price: 299.99,
//       description: 'High-quality wireless headphones with noise cancellation',
//       category: 'Electronics',
//       image: '/images/headphones.jpg',
//     },
//     {
//       _id: '2',
//       name: 'Smart Watch Pro',
//       slug: 'smart-watch-pro',
//       price: 399.99,
//       description: 'Advanced smartwatch with health monitoring features',
//       category: 'Wearables',
//       image: '/images/smartwatch.jpg',
//     },
//   ]
  
//   export async function getProducts(id?: string | null, category?: string | null) {
//     if (id) {
//       return products.find(p => p._id === id) || null
//     }
  
//     if (category) {
//       return products.filter(p => p.category.toLowerCase() === category.toLowerCase())
//     }
  
//     return products
//   }
  
//   export async function createProduct(productData: any) {
//     const newProduct = {
//       _id: String(products.length + 1),
//       ...productData,
//     }
//     products.push(newProduct)
//     return newProduct
//   }
  
//   export async function updateProduct(id: string, productData: any) {
//     const index = products.findIndex(p => p._id === id)
//     if (index !== -1) {
//       products[index] = { ...products[index], ...productData }
//       return products[index]
//     }
//     throw new Error('Product not found')
//   }
  
//   export async function deleteProduct(id: string) {
//     const index = products.findIndex(p => p._id === id)
//     if (index !== -1) {
//       products.splice(index, 1)
//     } else {
//       throw new Error('Product not found')
//     }
//   }
  
  