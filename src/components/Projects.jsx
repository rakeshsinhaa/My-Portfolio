import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Smart Doctor Appointment System',
      description: 'A full-featured smart, efficient platform for booking and managing doctor appointments online',
      image: "/doctor.jpg",
      technologies: ['React.js', 'TypeScript', 'Node.js', 'MongoDB'],
      github: 'https://github.com/rakeshsinhaa/Smart-Doctor-Appointment',
      demo: 'https://example.com',
      fullDescription: 'An advanced healthcare platform built with React and Node.js. Features include user authentication, doctor management, appointment booking, and real-time notifications.',
    },
    {
      title: 'Script Story',
      description: 'AI-powered web page that generates full scripts and visuals from basic story ideas.',
      image: "/story-script.jpg",
      technologies: ['React.js', 'Python', 'FastAPI'],
      github: 'https://github.com/rakeshsinhaa/Script-Project',
      demo: 'https://script-story.vercel.app/',
      fullDescription: 'An AI-powered web application that converts basic story ideas into detailed scripts and visuals, helping creators quickly develop stories and concepts efficiently.',
    },
    {
      title: 'Pet Adoption & Donation',
      description: 'A unified platform where users can adopt pets, surrender (donate) pets, and post new pet listings with ease.',
      image: '/pet.jpg',
      technologies: [ 'React.js', 'MongoDB', 'Express.js', 'FastAPI'],
      github: 'https://github.com/rakeshsinhaa/Pet-Adoption-System',
      demo: 'https://example.com',
      fullDescription: 'Full-stack system that enables users to browse pets, learn about their needs, and submit adoption requests. Integrated Gemini AI to help adopters understand pet requirements, behavior, and care instructions for better decision-making ',
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-[#020d1f] py-20">
      <div className="container mx-auto px-4 pt-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-cyan-400"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-3  gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden border border-cyan-500/20 hover:border-cyan-500 transition-all cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-cyan-500/20 rounded-full text-cyan-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gray-900 rounded-lg p-6 max-w-2xl w-full relative"
                onClick={e => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                  <X  size={24} />
                </button>

                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />

                <h3 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h3>
                <p className="text-gray-300 mb-6">{selectedProject.fullDescription}</p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-cyan-500/20 rounded-full text-cyan-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white transition-colors"
                  >
                    <Github size={20} />
                    View Code
                  </a>
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}