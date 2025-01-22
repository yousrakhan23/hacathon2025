'use client';
// // 'use client'

// // import { useState, useEffect } from 'react';
// // import { ProductCard } from '@/components/ProductCard';

// // interface Product {
// //   _id: string;
// //   name: string;
// //   price: number;
// //   // Add other product properties here
// // }

// // interface ProductGridProps {
// //   initialProducts: Product[];
// // }

// // export function ProductGrid({ initialProducts }: ProductGridProps) {
// //   // const [products, setProducts] = useState<Product[]>(initialProducts);
// //   const [error, setError] = useState<string | null>(null);

// //   useEffect(() => {
// //     if (!Array.isArray(products)) {
// //       setError('Invalid product data.');
// //     }
// //   }, [products]);

// //   if (error) {
// //     return (
// //       <div className="col-span-full text-center py-10 text-red-500">
// //         {error}
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //       {products.length > 0 ? (
// //         products.map((product) => (
// //           <ProductCard key={product._id} {...product} />
// //         ))
// //       ) : (
// //         <div className="col-span-full text-center py-10 text-gray-500">
// //           No products found.
// //         </div>
// //       )}
// //     </div>
// //   );
// // }


// import { useState, useEffect } from 'react';
// import { ProductCard } from '@/components/ProductCard';

// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   // Add other product properties here
// }

// interface ProductGridProps {
//   initialProducts: Product[];
// }

// export function ProductGrid({ initialProducts }: ProductGridProps) {
//   const [products, setProducts] = useState<Product[]>(initialProducts); // Use the initialProducts prop
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (!Array.isArray(products)) {
//       setError('Invalid product data.');
//     } else {
//       setError(null); // Clear the error if products is valid
//     }
//   }, [products]);

//   if (error) {
//     return (
//       <div className="col-span-full text-center py-10 text-red-500">
//         {error}
//       </div>
//     );
//   }

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {products.length > 0 ? (
//         products.map((product) => (
//           <ProductCard key={product._id} {...product} />
//         ))
//       ) : (
//         <div className="col-span-full text-center py-10 text-gray-500">
//           No products found.
//         </div>
//       )}
//     </div>
//   );


// }
// 'use client';
// 'use client';

import { useState, useEffect } from 'react';
import { ProductCard } from './ProductCard';
import { SearchBar } from './SearchBar';
import { CategoryFilter } from './CategoryFilter';
import { Pagination } from './Pagination';

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  slug: string;
  imageUrl: string;
  category: string;
}

interface ProductGridProps {
  initialProducts: Product[];
  categories: string[];
}

export function ProductGrid({ initialProducts, categories }: ProductGridProps) {
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  useEffect(() => {
    let result = initialProducts;

    if (selectedCategory) {
      result = result.filter((product: Product) => product.category === selectedCategory);
    }

    if (searchQuery) {
      result = result.filter((product: Product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(result);
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, initialProducts]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="mb-6">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="w-full lg:w-1/4">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
          />
        </aside>
        <div className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map((product) => (
              <ProductCard key={product._id} {...product} />
            ))}
          </div>
          {filteredProducts.length > productsPerPage && (
            <div className="mt-8">
              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(filteredProducts.length / productsPerPage)}
                onPageChange={paginate}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
