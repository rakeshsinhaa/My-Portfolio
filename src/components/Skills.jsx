import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, PenTool as Tool, Users } from 'lucide-react';

export default function Skills() {
  const skills = {
    frontend: [
      { name: 'React', gif: 'https://media.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif' },
      { name: 'JavaScript', gif: 'https://media.giphy.com/media/ln7z2eWriiQAllfVcn/giphy.gif' },
      // { name: 'TypeScript', gif: 'https://media.giphy.com/media/QVJjJ7dtzJkWCs7TpP/giphy.gif' },
      { name: 'HTML/CSS', gif: 'https://media.giphy.com/media/XAxylRMCdpbEWUAvr8/giphy.gif' },
      { name: 'Tailwind', gif: 'https://media.giphy.com/media/vi9ob0h5bKmUU/giphy.gif' }
    ],
    backend: [
      { name: 'Node.js', gif: 'https://media.giphy.com/media/kdFc8fubgS31b8DsVu/giphy.gif' },
      { name: 'Python', gif: 'https://media.giphy.com/media/LMt9638dO8dftAjtco/giphy.gif' },
      { name: 'MongoDB', gif: 'https://media.giphy.com/media/tAjb5pyCEBhEb8jWxC/giphy.gif' },
      // { name: 'PostgreSQL', gif: 'https://media.giphy.com/media/vISmwpBJUNYzukTnVx/giphy.gif' }
    ],
    tools: [
      { name: 'Git', gif: 'https://media.giphy.com/media/kH1DBkPNyZPOk0BxrM/giphy.gif' },
      // { name: 'Docker', gif: 'https://media.giphy.com/media/lcG3qwtTKSNI2i5vst/giphy.gif' },
      { name: 'VS Code', gif: 'https://media.giphy.com/media/SS8CV2rQdlYNLtBCiF/giphy.gif' },
      // { name: 'AWS', gif: 'https://media.giphy.com/media/YN6LN8wDkTSBq/giphy.gif' }
    ]
  };

  const categories = [
    { id: 'frontend', label: 'Frontend', icon: Code },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'tools', label: 'Tools', icon: Tool }
  ];

  return (
    <section id="skills" className="min-h-screen bbg-[#020d1f] py-20">
      <div className="container mx-auto px-4 pt-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600"
        >
          Skills & Technologies
        </motion.h2>

        {categories.map((category) => (
          <div key={category.id} className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <category.icon className="w-8 h-8 text-cyan-400" />
              <h3 className="text-2xl font-bold text-white">{category.label}</h3>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {skills[category.id].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="skill-card h-48"
                >
                  <div className="skill-card-inner">
                    <div className="skill-card-front bg-gradient-to-br from-cyan-900/30 to-black/30 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/20 flex flex-col items-center justify-center">
                      <h4 className="text-xl font-bold text-white mb-4">{skill.name}</h4>
                      <img
                        src={skill.gif}
                        alt={skill.name}
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                    <div className="skill-card-back bg-gradient-to-br from-cyan-900/30 to-black/30 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/20 flex items-center justify-center">
                      <img
                        src={skill.gif}
                        alt={skill.name}
                        className="w-24 h-24 object-contain"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}