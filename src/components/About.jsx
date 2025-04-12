import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Palette } from 'lucide-react';

export default function About() {
  const interests = [
    { icon: Code, title: 'Full-Stack Devloment', description: 'Full-stack development with modern technologies' },
    { icon: Database, title: 'App Developer', description: 'Creating innovative apps for seamless user experiences and business solutions' },
    { icon: Palette, title: 'UI/UX Design', description: 'Creating beautiful and intuitive user interfaces' },
  ];

  return (
    <section id="about" className="min-h-screen bg-[#020d1f] py-20 relative overflow-hidden">
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

      <div className="container mx-auto px-4 pt-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-effect rounded-2xl p-8 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <img
              src="profile.jpg"
              alt="Profile"
              className="w-32 h-32 rounded-2xl mx-auto mb-6 border-2 border-cyan-500/50 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="space-y-4 relative z-10">
            <p className="flex items-center gap-2">
                <span className="text-cyan-400">Name:</span>
                <span className="text-gray-300"> Rakesh Sinha </span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-cyan-400">Birthday:</span>
                <span className="text-gray-300"> 14/May/2003 </span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-cyan-400">Location:</span>
                <span className="text-gray-300">Bhilai, Chhattisgarh, India</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-cyan-400">Email:</span>
                <span className="text-gray-300">sinharakesh078@gmail.com</span>
              </p>
              {/* <p className="flex items-center gap-2">
                <span className="text-cyan-400">Phone:</span>
                <span className="text-gray-300"> +91 9329953980</span>
              </p> */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a passionate developer with expertise in building modern web applications.
              My journey in technology started with a curiosity about how things work,
              which evolved into a career in software development.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I specialize in creating responsive, user-friendly applications using
              cutting-edge technologies. My goal is to build software that not only
              works flawlessly but also provides an exceptional user experience.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500">
            What I Do
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotateY: 10 }}
                className="glass-effect rounded-2xl p-8 text-white border border-cyan-500/20 hover:border-cyan-500 transition-all relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <interest.icon className="w-12 h-12 mb-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-400">
                  {interest.title}
                </h4>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {interest.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}