import React from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const CTA = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 gradient-overlay"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Need Emergency Service?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Don't wait. Call us now for immediate assistance with your RV emergency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {[
            {
              icon: FaPhone,
              title: 'Call Us',
              info: '(123) 456-7890',
              link: 'tel:+1234567890',
              description: '24/7 Emergency Line',
            },
            {
              icon: FaMapMarkerAlt,
              title: 'Service Area',
              info: 'Nationwide',
              link: '#',
              description: 'Available everywhere',
            },
          ].map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 hover:border-primary-gold transition-all duration-300 text-center block"
            >
              <contact.icon className="text-primary-gold text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{contact.title}</h3>
              <p className="text-primary-gold text-lg font-semibold mb-2">{contact.info}</p>
              <p className="text-gray-300 text-sm">{contact.description}</p>
            </motion.a>
          ))}
        </div>

        {/* Main CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <motion.a
            href="tel:+1234567890"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-primary-gold text-black px-12 py-5 rounded-full font-bold text-xl hover:bg-opacity-90 transition-all duration-300 shadow-2xl flex items-center space-x-3 mx-auto"
          >
            <FaPhone />
            <span>Call Now for Emergency Service</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
