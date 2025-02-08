import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bbg-[#020d1f] py-20 relative overflow-hidden">
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
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
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
              'Full-Stack Developer',
              2000,
              'Crafting Clean Code',
              2000,
              'App Developer',
              2000,
              'Creating Innovative Solutions',
              2000,
            ]}
            repeat={Infinity}
            wrapper="span"
          />
        </div>

        {/* Social Icons and Resume Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex justify-center gap-6">
            {[
              { Icon: Github, href: 'https://github.com/rakeshsinhaa' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/rakeshsinhaa' },
              { Icon: Mail, href: 'mailto:sinharakesh078@gmail.com' },
            ].map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center hover:bg-blue-500/20 transition-colors"
              >
                <Icon size={24} className="text-blue-300" />
              </motion.a>
            ))}
          </div>

          <motion.a
            href="https://drive.google.com/drive/u/0/my-drive"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-3 bg-blue-500/10 rounded-lg hover:bg-blue-500/20 transition-colors"
          >
            <FileText size={20} className="text-blue-300" />
            <span className="text-blue-300 font-semibold">Resume</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
