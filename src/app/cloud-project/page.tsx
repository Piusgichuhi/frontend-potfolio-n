"use client"

import { motion } from "framer-motion"
import { GithubIcon, ExternalLinkIcon } from "lucide-react"

const projects = [
  {
    title: "AI Assistant",
    description: "A smart assistant built using GPT-4 and Next.js.",
    link: "https://yourdomain.com/ai-assistant",
    github: "https://github.com/yourgithub/ai-assistant",
  },
  {
    title: "Cloud Dashboard",
    description: "Interactive cloud dashboard for project management.",
    link: "https://yourdomain.com/cloud-dashboard",
    github: "https://github.com/yourgithub/cloud-dashboard",
  },
  {
    title: "Portfolio Site",
    description: "Personal portfolio built with Next.js and Tailwind CSS.",
    link: "https://yourdomain.com",
    github: "https://github.com/yourgithub/portfolio",
  },
]

export default function CloudProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-10"
        >
          ☁️ Cloud Projects Showcase
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/10 p-6 rounded-lg shadow-lg hover:shadow-xl backdrop-blur-md border border-white/20 transition hover:scale-[1.02]"
            >
              <h3 className="text-xl font-semibold mb-2 text-white hover:text-blue-300 transition">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-400 hover:text-blue-200 text-sm"
                >
                  <ExternalLinkIcon className="w-4 h-4" />
                  Visit
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-400 hover:text-white text-sm"
                >
                  <GithubIcon className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
