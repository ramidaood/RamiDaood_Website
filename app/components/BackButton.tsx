'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BackButton() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-6 left-6 z-50"
    >
      <Link href="/">
        <div className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-yellow-400 rounded-lg hover:bg-gray-800 transition-all duration-300 font-semibold shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer">
          <ArrowLeft size={20} />
          <span>Back</span>
        </div>
      </Link>
    </motion.div>
  );
}

