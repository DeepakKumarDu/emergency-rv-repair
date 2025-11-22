import React from 'react'
import { motion } from 'framer-motion'
import { FaWrench, FaBolt, FaCar, FaBatteryFull, FaWater, FaFan } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: FaWrench,
      title: 'Engine Repair',
      description: 'Complete engine diagnostics and repair services for all RV types.',
    },
    {
      icon: FaBolt,
      title: 'Electrical Systems',
      description: 'Expert electrical troubleshooting and repair for your motorhome.',
    },
    {
      icon: FaCar,
      title: 'Tire Service',
      description: 'Emergency tire replacement and repair services on the road.',
    },
    {
      icon: FaBatteryFull,
      title: 'Battery Service',
      description: 'Battery testing, replacement, and charging services.',
    },
    {
      icon: FaWater,
      title: 'Plumbing Repair',
      description: 'Fix leaks, clogs, and water system issues quickly and efficiently.',
    },
    {
      icon: FaFan,
      title: 'HVAC Service',
      description: 'Air conditioning and heating system repair and maintenance.',
    },
  ]

  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive emergency repair services for all your RV needs, available 24/7.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 border border-gray-700 hover:border-primary-gold transition-all duration-300 group"
            >
              <div className="text-primary-gold text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Need Something Else?
            </h3>
            <p className="text-gray-300 mb-6">
              We handle all types of RV emergencies. If you don't see your specific issue listed, 
              give us a call - we're here to help with any emergency repair need.
            </p>
            <motion.a
              href="tel:+1234567890"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-primary-gold text-black px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300"
            >
              Call for Emergency Service
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
