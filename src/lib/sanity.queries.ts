import { client } from "@/sanity/lib/client"
import { unstable_noStore as noStore } from 'next/cache'

export async function getProducts() {
  noStore()
  return client.fetch(`
    *[_type == "product"] {
      _id,
      name,
      price,
      description,
      "slug": slug.current,
      "imageUrl": image.asset->url,
      category
    }
  `)
}

