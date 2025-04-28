'use client';

import { motion } from 'framer-motion';

export default function WorldAssistantPage() {
  return (
    <main className="h-screen  from-zinc-900 to-gray-800 text-white p-10 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl font-bold mb-4"
        >
          🌍 Word Assistant
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-gray-400"
        >
          This page is currently under development. Exciting things are coming soon!
        </motion.p>
      </motion.div>
    </main>
  );
}
