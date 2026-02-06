'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors">
            Padmium
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="#liquidity" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Liquidity
            </Link>
            <Link href="#rewards" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Rewards
            </Link>
            <Link href="#ecosystem" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Ecosystem
            </Link>
            <Link href="#onramps" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Onramps
            </Link>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
