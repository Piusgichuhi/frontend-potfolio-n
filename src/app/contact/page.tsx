"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Piusgichuhi",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/pius-gichuhi-873866313/",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/your-username",
    icon: Twitter,
  },
  {
    name: "Email",
    href: "piusgichuhi39@gmail.com",
    icon: Mail,
  },
]

export default function Contact() {
  return (
    <motion.section
      className="flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-4xl font-bold sm:text-5xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Let’s Connect ✨
      </motion.h1>
      <p className="mt-4 max-w-xl text-lg text-muted-foreground">
        Whether it's a project, a question, or just to say hi, feel free to reach out on any of my platforms below.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        {socialLinks.map(({ name, href, icon: Icon }) => (
          <motion.a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 rounded-md border border-muted px-4 py-2 text-sm text-muted-foreground transition-colors duration-300 hover:border-primary"
          >
            <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
            <span className="transition-colors group-hover:text-primary">{name}</span>
          </motion.a>
        ))}
      </div>
    </motion.section>
  )
}
