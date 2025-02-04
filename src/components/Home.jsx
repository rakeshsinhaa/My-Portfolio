import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[#020d1f] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-cyan-400"
              style={{
                width: '2px',
                height: `${Math.random() * 20 + 10}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.5,
                boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative"
        >
          <div className="relative w-40 h-40 mx-auto">
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <img
              src="profile.jpg"
              alt="Profile"
              className="absolute inset-2 rounded-full object-cover border-4 border-white"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500"
        >
          Rakesh Sinha
        </motion.h1>

        <div className="text-2xl md:text-3xl text-cyan-300 mb-8 h-[40px] font-light">
          <TypeAnimation
            sequence={[
              "Full-Stack Developer",
              2000,
              "Crafting Clean Code",
              2000,
              "App Developer",
              2000,
              "Creating Innovative Solutions",
              2000,
            ]}
            repeat={Infinity}
            wrapper="span"
          />
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center space-x-6"
        >
          {[
            { Icon: Github, href: 'https://github.com/rakeshsinhaa', color: 'from-cyan-400 to-cyan-400' },
            { Icon: Linkedin, href: 'https://www.linkedin.com/in/rakeshsinhaa', color: 'from-cyan-400 to-cyan-500' },
            { Icon: Mail, href: 'mailto:sinharakesh078@gmail.com', color: 'from-cyan-500 to-cyan-500' },
            { Icon: Code2, href: '#projects', color: 'from-cyan-500 to-cyan-400' },
          ].map(({ Icon, href, color }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className={`w-14 h-14 rounded-xl glass-effect flex items-center justify-center bg-gradient-to-r ${color} hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300`}
            >
              <Icon size={24} className="text-white" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
