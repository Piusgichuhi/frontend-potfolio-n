'use client';

import { motion } from 'framer-motion';

const badges = [
  {
    title: 'AWS Cloud Practitioner',
    categories: ['Database', 'Security', 'Compute'],
    issuer: 'Amazon Web Services',
  },
  {
    title: 'C# Certification',
    categories: ['Exam Completion', 'Certiport'],
    issuer: 'Certiport',
  },
  {
    title: 'Comptia Penetration Testing',
    categories: ['Vulnerability Assessment', 'Exploitation', 'Reporting'],
    issuer: 'CompTIA',
  },
  {
    title: 'ISACA Cybersecurity',
    categories: ['Cybersecurity Fundamentals', 'Risk Management', 'Governance'],
    issuer: 'ISACA',
  },
  {
    title: 'Coming Soon',
    categories: ['More to come...'],
    issuer: 'Ongoing Learning',
  },
];

const badgeVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: 'spring',
    },
  }),
};

export default function StudyLifePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-10">
      <h1 className="text-4xl font-bold mb-10 text-center">📚 My Study Life Cycle</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {badges.map((badge, index) => (
          <motion.div
            key={badge.title}
            className="bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            variants={badgeVariants}
          >
            <h2 className="text-xl font-semibold mb-2">{badge.title}</h2>
            <p className="text-sm text-gray-300 mb-3">Issued by: {badge.issuer}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {badge.categories.map((cat) => (
                <motion.span
                  key={cat}
                  whileHover={{ scale: 1.1, rotate: 1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="bg-indigo-500 text-xs font-medium px-3 py-1 rounded-full cursor-default"
                >
                  {cat}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
