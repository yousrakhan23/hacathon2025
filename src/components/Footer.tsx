'use client';
import Link from "next/link"
export function Footer() {
  return (
    <footer className="bg-white mt-12 border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#ff6b6b]">About Us</h3>
            <p className="text-black">
              We are a media mart dedicated to bringing you the best products
              from around the world.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#ff6b6b]">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-black hover:text-[#ff6b6b]">Home</Link></li>
              <li><Link href="/products" className="text-black hover:text-[#ff6b6b]">Products</Link></li>
              <li><Link href="/about" className="text-black hover:text-[#ff6b6b]">About</Link></li>
              <li><Link href="/contact" className="text-black hover:text-[#ff6b6b]">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#ff6b6b]">Contact Us</h3>
            <p className="text-gray-600">Pakistan Karachi </p>
            <p className="text-gray-600">Email: webandmediaagency007@gmail.com</p>
            <p className="text-gray-600">Phone: +92 345 2615 590</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-[#ff6b6b]">&copy; 2025 Media Mart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
