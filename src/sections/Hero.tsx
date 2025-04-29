"use client"

import { useRef, useEffect } from 'react';
import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import greenImage from '@/assets/images/grain.jpg';
import { motion, useInView, useAnimation, stagger } from 'framer-motion';
import StarIcon from '@/assets/icons/star.svg';

export const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  const particlesRef = useRef<HTMLDivElement>(null);

  // Create floating particles
  useEffect(() => {
    if (!particlesRef.current) return;

    const particleCount = 30;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full bg-emerald-400/20 pointer-events-none';
      
      // Random properties
      const size = Math.random() * 4 + 1;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 10 + 10;
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.opacity = '0';
      
      // Animate each particle
      particle.animate([
        { opacity: 0, transform: 'translateY(0)' },
        { opacity: 0.5, offset: 0.1 },
        { opacity: 0.8, offset: 0.5 },
        { opacity: 0, transform: `translateY(-${Math.random() * 100 + 50}px)` }
      ], {
        duration: duration * 1000,
        delay: delay * 1000,
        iterations: Infinity,
        easing: 'cubic-bezier(0.4, 0, 0.6, 1)'
      });

      particlesRef.current.appendChild(particle);
    }

    return () => {
      particles.forEach(p => p.remove());
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const slideIn = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    }
  };

  const textGlow = {
    hidden: { textShadow: '0 0 0px rgba(110, 231, 183, 0)' },
    visible: {
      textShadow: [
        '0 0 0px rgba(110, 231, 183, 0)',
        '0 0 10px rgba(110, 231, 183, 0.3)',
        '0 0 0px rgba(110, 231, 183, 0)'
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatDelay: 2
      }
    }
  };

  return (
    <motion.section 
      ref={ref}
      initial="hidden"
      animate={mainControls}
      variants={container}
      className='w-full h-full relative py-32 pt-12 md:py-48 lg:py-60 lg:pt-24 isolate overflow-hidden'
    >
      {/* Animated background elements */}
     
      
      {/* CSS for background animation */}
      <style jsx>{`
        @keyframes pan {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }
      `}</style>
      
      {/* Floating particles */}
      <div ref={particlesRef} className="absolute inset-0 -z-20 overflow-hidden" />
      
      {/* Glowing border */}
      <motion.div 
        className='absolute inset-0 border-2 border-emerald-200/5 rounded-full top-0.5 left-0.5 -translate-x-0.5 -translate-y-0.5 shadow-[0_0_80px_inset] shadow-emerald-300/5 pointer-events-none'
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          boxShadow: [
            '0 0 80px inset rgba(110, 231, 183, 0.05)',
            '0 0 100px inset rgba(110, 231, 183, 0.1)',
            '0 0 80px inset rgba(110, 231, 183, 0.05)'
          ]
        }}
        transition={{ 
          duration: 1, 
          ease: "easeOut",
          boxShadow: {
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }
        }}
      />

      <div className='container'>
        <motion.div 
          className='flex flex-col items-center'
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Memoji Avatar */}
          <motion.div 
            className='relative'
            variants={item}
          >
            <motion.div
              initial={{ scale: 0.8, rotate: -10 }}
              animate={{ 
                scale: 1, 
                rotate: 0,
                y: [0, -5, 0]
              }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <Image
                className='size-24 md:size-28 rounded-full border border-white/10 hover:border-emerald-300/30 transition-all duration-300'
                src={memojiImage}
                alt='Person peeking on a laptop'
                width={112}
                height={112}
                priority
              />
            </motion.div>
            
            {/* Availability badge */}
            <motion.div 
              className='absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center rounded-full gap-2 whitespace-nowrap hover:shadow-lg hover:shadow-emerald-400/10 transition-all duration-300'
              variants={item}
              whileHover={{ scale: 1.05 }}
            >
              <span className='relative flex size-2.5'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75' />
                <span className='relative inline-flex rounded-full size-2.5 bg-green-500' />
              </span>
              <span className='text-sm font-medium'>Available for new projects</span>
            </motion.div>
          </motion.div>

          {/* Headline */}
          <motion.div 
            className='max-w-2xl mx-auto mt-12'
            variants={container}
          >
            <motion.h1 
              className='font-serif text-4xl text-center md:text-5xl lg:text-6xl font-medium tracking-tight'
              variants={slideIn}
            >
              Building <motion.span 
                className='text-green-300'
                variants={textGlow}
              >Exceptional</motion.span>{' '}
              <motion.span 
                className='text-green-300'
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  textShadow: [
                    '0 0 0px rgba(110, 231, 183, 0)',
                    '0 0 15px rgba(110, 231, 183, 0.5)',
                    '0 0 0px rgba(110, 231, 183, 0)'
                  ]
                }}
                transition={{ 
                  delay: 0.5, 
                  duration: 1,
                  textShadow: {
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 1
                  }
                }}
              >User Experiences</motion.span>
            </motion.h1>
            
            <motion.p 
              className='mt-6 text-center text-white/60 text-lg leading-relaxed max-w-lg mx-auto'
              variants={item}
            >
              I specialize in <motion.span 
                className='text-emerald-300 font-medium'
                animate={{
                  scale: [1, 1.05, 1],
                  textShadow: [
                    '0 0 0px rgba(110, 231, 183, 0)',
                    '0 0 8px rgba(110, 231, 183, 0.5)',
                    '0 0 0px rgba(110, 231, 183, 0)'
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >transforming</motion.span> designs into functional, high-performing web applications.
              Let &apos s discuss your next project.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className='flex flex-col sm:flex-row justify-center items-center mt-12 gap-4'
            variants={container}
          >
            <motion.button 
              className='inline-flex items-center gap-2 border border-white/15 hover:border-emerald-300/30 px-6 h-12 rounded-xl transition-all duration-200 group relative overflow-hidden'
              variants={item}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 15px rgba(110, 231, 183, 0.2)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className='font-semibold relative z-10'>Explore My Work</span>
              <motion.div
                animate={{
                  y: [0, 5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className='relative z-10'
              >
                <ArrowDown className='size-4' />
              </motion.div>
              {/* Button shine effect */}
              <motion.div
                className='absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent opacity-0'
                animate={{
                  left: ['-100%', '100%'],
                  opacity: [0, 0.4, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              />
            </motion.button>

            <motion.button 
              className='inline-flex items-center gap-2 border border-transparent bg-white hover:bg-white/90 text-gray-900 h-12 px-6 rounded-xl font-semibold transition-all duration-200 group relative overflow-hidden'
              variants={item}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
                className='relative z-10'
              >
                🤚
              </motion.span>
              <span className='relative z-10'>Get in Touch</span>
              {/* Button shine effect */}
              <motion.div
                className='absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0'
                animate={{
                  left: ['-100%', '100%'],
                  opacity: [0, 0.4, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 4
                }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}