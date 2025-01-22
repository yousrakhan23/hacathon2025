// 'use client'

// import { useState, useEffect } from 'react'
// import { ProductCard } from './ProductCard'
// import { SearchBar } from './SearchBar'
// import { CategoryFilter } from './CategoryFilter'
// import { Pagination } from './Pagination'

// interface Product {
//   _id: string
//   name: string
//   price: number
//   description: string
//   slug: string
//   imageUrl: string
//   category: string
// }

// interface ProductGridProps {
//   initialProducts: Product[]
//   categories: string[]
// }

// export function ProductGrid({ initialProducts, categories }: ProductGridProps) {
//   // const [products, setProducts] = useState(initialProducts)
//   const [filteredProducts, setFilteredProducts] = useState(initialProducts)
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
//   const [searchQuery, setSearchQuery] = useState('')
//   const [currentPage, setCurrentPage] = useState(1)
//   const productsPerPage = 9

//   useEffect(() => {
//     let result = products

//     if (selectedCategory) {
//       result = result.filter(product => product.category === selectedCategory)
//     }

//     if (searchQuery) {
//       result = result.filter(product => 
//         product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         product.description.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     }

//     setFilteredProducts(result)
//     setCurrentPage(1)
//   }, [selectedCategory, searchQuery, products])

//   const handleSearch = (query: string) => {
//     setSearchQuery(query)
//   }

//   const handleCategorySelect = (category: string | null) => {
//     setSelectedCategory(category)
//   }

//   const indexOfLastProduct = currentPage * productsPerPage
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage
//   const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

//   return (
//     <div>
//       <div className="mb-6">
//         <SearchBar onSearch={handleSearch} />
//       </div>
//       <div className="flex flex-col lg:flex-row gap-8">
//         <aside className="w-full lg:w-1/4">
//           <CategoryFilter
//             categories={categories}
//             selectedCategory={selectedCategory}
//             onCategorySelect={handleCategorySelect}
//           />
//         </aside>
//         <div className="w-full lg:w-3/4">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {currentProducts.map((product) => (
//               <ProductCard
//                 key={product._id}
//                 {...product}
//               />
//             ))}
//           </div>
//           {filteredProducts.length > productsPerPage && (
//             <div className="mt-8">
//               <Pagination
//                 currentPage={currentPage}
//                 totalPages={Math.ceil(filteredProducts.length / productsPerPage)}
//                 onPageChange={paginate}
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// 'use client';

// import { useState, useEffect } from 'react';
// import { ProductCard } from './ProductCard';
// import { SearchBar } from './SearchBar';
// import { CategoryFilter } from './CategoryFilter';
// import { Pagination } from './Pagination';

// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   description: string;
//   slug: string;
//   imageUrl: string;
//   category: string;
// }

// interface ProductGridProps {
//   initialProducts: Product[];
//   categories: string[];
// }

// export function ProductGrid({ initialProducts, categories }: ProductGridProps) {
//   const [products, setProducts] = useState(initialProducts); // Uncommented and used
//   const [filteredProducts, setFilteredProducts] = useState(initialProducts);
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 9;

//   useEffect(() => {
//     let result = products; // Use the defined products state

//     if (selectedCategory) {
//       result = result.filter((product: Product) => product.category === selectedCategory); // Typed 'product'
//     }

//     if (searchQuery) {
//       result = result.filter((product: Product) =>
//         product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         product.description.toLowerCase().includes(searchQuery.toLowerCase())
//       ); // Typed 'product'
//     }

//     setFilteredProducts(result);
//     setCurrentPage(1);
//   }, [selectedCategory, searchQuery, products]); // Properly referenced dependency

//   const handleSearch = (query: string) => {
//     setSearchQuery(query);
//   };

//   const handleCategorySelect = (category: string | null) => {
//     setSelectedCategory(category);
//   };

//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   return (
//     <div>
//       <div className="mb-6">
//         <SearchBar onSearch={handleSearch} />
//       </div>
//       <div className="flex flex-col lg:flex-row gap-8">
//         <aside className="w-full lg:w-1/4">
//           <CategoryFilter
//             categories={categories}
//             selectedCategory={selectedCategory}
//             onCategorySelect={handleCategorySelect}
//           />
//         </aside>
//         <div className="w-full lg:w-3/4">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {currentProducts.map((product) => (
//               <ProductCard key={product._id} {...product} />
//             ))}
//           </div>
//           {filteredProducts.length > productsPerPage && (
//             <div className="mt-8">
//               <Pagination
//                 currentPage={currentPage}
//                 totalPages={Math.ceil(filteredProducts.length / productsPerPage)}
//                 onPageChange={paginate}
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
'use client';

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
    let result = initialProducts; // Use the initialProducts prop

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
