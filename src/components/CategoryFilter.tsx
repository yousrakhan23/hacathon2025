'use client'

interface CategoryFilterProps {
  categories: string[]
  selectedCategory: string | null
  onCategorySelect: (category: string | null) => void
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onCategorySelect,
}: CategoryFilterProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Categories</h3>
      <div className="space-y-2">
        <button
          onClick={() => onCategorySelect(null)}
          className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
            selectedCategory === null
              ? 'bg-blue-500 text-white'
              : 'hover:bg-gray-100'
          }`}
        >
          All Products
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategorySelect(category)}
            className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
              selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'hover:bg-gray-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

