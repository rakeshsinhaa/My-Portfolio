import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Globe, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  const contactCards = [
    {
      title: 'Email & Phone',
      icon: Mail,
      items: [
        { icon: Mail, text: 'sinharakesh078@gmail.com', link: 'mailto:sinharakesh078@gmail.com' },
        { icon: Phone, text: '+91 9329953980' }
      ]
    },
    {
      title: 'Social Profiles',
      icon: Globe,
      items: [
        { icon: Github, text: 'Github', link: 'https://github.com/rakeshsinhaa' },
        { icon: Linkedin, text: 'LinkedIn', link: 'https://www.linkedin.com/in/rakeshsinhaa' },
      ]
    },
    {
      title: 'Location',
      icon: Globe,
      items: [
        { text: 'Bhilai, Chhattisgarh, India' },
        { text: 'Available for Remote Work' }
      ]
    }
  ];

  return (
    <section id="contact" className="min-h-screen bbg-[#020d1f] py-20">
      <div className="container mx-auto px-4 pt-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600"
        >
          Contact
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contactCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-cyan-900/30 to-black/30 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/20"
            >
              <card.icon className="w-12 h-12 mb-6 text-cyan-400" />
              <h3 className="text-xl font-bold mb-4 text-white">{card.title}</h3>
              <div className="space-y-4">
                {card.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-3">
                    {item.icon && <item.icon className="w-5 h-5 text-cyan-400" />}
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-cyan-400 transition-colors"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-gray-300">{item.text}</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}