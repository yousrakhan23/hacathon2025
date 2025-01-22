'use client';

import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  _id: string;
  name: string;
  price: number;
  description: string;
  slug: string;
  imageUrl: string;
  category: string;
}

export function ProductCard({
  _id,
  name,
  price,
  description,
  slug,
  imageUrl,
  category,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform">
      <Link href={`/product/${slug}`}>
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover"
            priority
          />
        </div>
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-blue-500 font-medium mb-2">{category}</p>
        <p className="text-gray-700 mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-gray-900">${price.toFixed(2)}</span>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => console.log('Add to cart:', _id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
