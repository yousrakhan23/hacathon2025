'use client';

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [placeholder, setPlaceholder] = useState("Search products...");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (query) onSearch(query);
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [query, onSearch]);

  useEffect(() => {
    const placeholders = [
      "Search for electronics...",
      "Find your favorite gadgets...",
      "Search products by name...",
    ];
    let index = 0;

    const interval = setInterval(() => {
      setPlaceholder(placeholders[index]);
      index = (index + 1) % placeholders.length;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.form
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full max-w-xl mx-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-2 pl-10 pr-20 text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <button
        type="button"
        onClick={() => setQuery("")}
        className="absolute right-14 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
      >
        ✕
      </button>
      <button
        type="submit"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 text-white bg-[#FF6B6B] rounded-md hover:bg-[#FF5252] transition-colors"
      >
        Search
      </button>
    </motion.form>
  );
}

