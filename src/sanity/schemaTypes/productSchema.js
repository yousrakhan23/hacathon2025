export type Product = {
    _id: string
    _createdAt: string
    name: string
    slug: string
    price: number
    description: string
    category: {
      _ref: string
      _type: string
    }
    image: {
      asset: {
        url: string
      }
    }
  }
  
  