'use client'

import { motion } from 'framer-motion'
import { AlertCircle, Home } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <AlertCircle className="w-20 h-20 text-electric-cyan mx-auto mb-6" />
          
          <h1 className="text-8xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-white">
            404
          </h1>
          
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          
          <p className="text-xl text-gray-400 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-electric-cyan text-black font-semibold rounded-lg hover:bg-electric-cyan/90 transition-all hover:scale-105"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </main>
  )
}

