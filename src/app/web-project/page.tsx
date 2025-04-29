"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "#",
    image: darkSaasLandingPage,
  },
  // ... other projects

  {
    company: "Acme Corp",
    year: "2022",
    title: "light Saas Landing",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "#",
    image: lightSaasLandingPage,
  },
  // other project 

  {
    company: "Acme Corp",
    year: "2022",
    title: "ai Startup Landing  Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "#",
    image: aiStartupLandingPage,
  },


];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ProjectsSection = () => {
  return (
    <section className="py-20 px-4">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {/* Header with animations */}
        <motion.p 
          className="text-lg mb-4 text-gray-600"
          variants={fadeIn}
        >
          Below are some of the projects I &apos ve worked on.
        </motion.p>
        
        <motion.h2 
          className="text-4xl font-bold mb-4"
          variants={fadeIn}
        >
          Featured Projects
        </motion.h2>
        
        <motion.p 
          className="text-xl mb-12 text-gray-600"
          variants={fadeIn}
        >
          See how I transformed concepts into engaging digital experiences
        </motion.p>

        {/* Projects grid with animations */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {portfolioProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white text-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="h-48 relative mb-4 overflow-hidden rounded-lg">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-500 mb-4">{project.company} • {project.year}</p>
              <ul className="space-y-2 mb-4">
                {project.results.map((result, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {result.title}
                  </li>
                ))}
              </ul>
              <Link 
                href={project.link} 
                className="text-blue-500 hover:underline"
                target="_blank"
              >
                View Project →
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Animated button to dashboard */}
        <motion.div
          variants={fadeIn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            href="/dashboard" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors"
          >
            {/* Go to Dashboard */}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;