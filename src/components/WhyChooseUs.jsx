import React from 'react'
import { motion } from 'framer-motion'
import { FaTools, FaAward, FaUsers, FaShieldAlt } from 'react-icons/fa'

const WhyChooseUs = () => {
  const features = [
    {
      icon: FaTools,
      title: 'Expert Technicians',
      description: 'Certified professionals with years of experience in luxury RV repair and maintenance.',
    },
    {
      icon: FaAward,
      title: 'Premium Quality',
      description: 'We use only the highest quality parts and materials for your luxury motorhome.',
    },
    {
      icon: FaUsers,
      title: 'Trusted Service',
      description: 'Thousands of satisfied customers rely on us for their emergency RV repair needs.',
    },
    {
      icon: FaShieldAlt,
      title: 'Fully Insured',
      description: 'Comprehensive insurance coverage for your peace of mind on every service call.',
    },
  ]

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the difference of working with the industry's most trusted emergency RV repair service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-primary-gold/50 transition-all duration-300"
            >
              <div className="text-primary-gold text-4xl mb-4">
                <feature.icon />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '10K+', label: 'Happy Customers' },
            { number: '24/7', label: 'Available' },
            { number: '50+', label: 'Expert Technicians' },
            { number: '15+', label: 'Years Experience' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary-gold mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
