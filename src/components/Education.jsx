import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, BookOpen } from 'lucide-react';

export default function Education() {
  const education = [
    {
      icon: GraduationCap,
      title: 'Bachelor\'s Degree',
      institution: 'Rungta College of Engineering and Technology, Bhilai (CG) ',
      year: '2022-2026',
      description: 'B.Tech in Computer Science Core Development',
    },
    {
      icon: School,
      title: 'Higher Secondary School',
      institution: 'ST. Michael Higher Secondary School, Kanker (CG)',
      year: '2020-21',
      description: 'Graduated with honors in Mathematics',
    },
    {
      icon: BookOpen,
      title: 'Online Certifications',
      institution: 'Various Platforms',
      description: 'Continuous learning through online courses and certifications',
    },
  ];

  return (
    <section id="education" className="min-h-screen bbg-[#020d1f] py-20">
      <div className="container mx-auto px-4 pt-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-cyan-400"
        >
          Education
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white border border-cyan-500/20 hover:border-cyan-500 transition-all group"
            >
              <item.icon className="w-12 h-12 mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              <motion.h3 c
              lassName="text-xl font-bold mb-2">{item.title}</motion.h3>
              <p className="text-cyan-300 mb-2">{item.institution}</p>
              <p className="text-gray-400 mb-4">{item.year}</p>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}