// import React from 'react';
// import { motion } from 'framer-motion';
// import { Briefcase } from 'lucide-react';

// export default function Experience() {
//   const experiences = [
//     {
//       title: 'Senior Software Engineer',
//       company: 'Tech Corp',
//       period: '2020 - Present',
//       description: 'Leading development of enterprise applications using modern technologies.',
//       technologies: ['React', 'Node.js', 'AWS'],
//     },
//     {
//       title: 'Software Developer',
//       company: 'Digital Solutions Inc',
//       period: '2017 - 2020',
//       description: 'Developed and maintained web applications for various clients.',
//       technologies: ['Angular', 'Python', 'Docker'],
//     },
//     {
//       title: 'Junior Developer',
//       company: 'StartUp Hub',
//       period: '2015 - 2017',
//       description: 'Worked on frontend development and UI/UX improvements.',
//       technologies: ['JavaScript', 'HTML/CSS', 'PHP'],
//     },
//   ];

//   return (
//     <section id="experience" className="min-h-screen bg-gradient-to-b from-black via-purple-900/20 to-black py-20">
//       <div className="container mx-auto px-4 pt-16">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-4xl font-bold text-center mb-12 text-white"
//         >
//           Experience
//         </motion.h2>

//         <div className="relative">
//           {/* Timeline line */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-500/20" />

//           {experiences.map((experience, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//               className={`relative mb-12 ${
//                 index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
//               } md:w-1/2 ${index % 2 === 0 ? 'md:ml-0' : 'md:ml-auto'}`}
//             >
//               {/* Timeline dot */}
//               <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-purple-500 rounded-full" />
              
//               <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-purple-500/20 hover:border-purple-500 transition-all">
//                 <Briefcase className="w-8 h-8 text-purple-400 mb-4" />
//                 <h3 className="text-xl font-bold text-white mb-2">{experience.title}</h3>
//                 <p className="text-purple-300 mb-2">{experience.company}</p>
//                 <p className="text-gray-400 mb-4">{experience.period}</p>
//                 <p className="text-gray-300 mb-4">{experience.description}</p>
//                 <div className="flex flex-wrap gap-2">
//                   {experience.technologies.map((tech, techIndex) => (
//                     <span
//                       key={techIndex}
//                       className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }