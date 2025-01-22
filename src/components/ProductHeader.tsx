'use client'

import { SearchBar } from './SearchBar'

export function ProductHeader() {
  const handleSearch = (query: string) => {
    console.log(query)
  }

  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4 lg:mb-0">Our Products</h1>
      <SearchBar onSearch={handleSearch} />
    </div>
  )
}

