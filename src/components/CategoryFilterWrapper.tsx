'use client';

interface CategoryFilterWrapperProps {
  categories: string[];
}

export function CategoryFilterWrapper({ categories }: CategoryFilterWrapperProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-4">Filter by Category</h3>
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li key={index}>
            <button className="text-blue-500 hover:underline">{category}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

