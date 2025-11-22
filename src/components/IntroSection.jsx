import React from 'react'
import { motion } from 'framer-motion'

const IntroSection = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
          >
            What Makes Emergency RV Repair The Ultimate Experience
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6"
          >
            Generation after generation, we have proven that industry-leading service, reliability, 
            and quality can only come from one place: <span className="text-primary-gold font-semibold">Experience</span>.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            We have built our legacy on the lessons we've learned about quality, constant improvement, 
            safety and reliability. We have designed for the future while refining what's brought us 
            to where we are today. This is what inspires us to set new standards of excellence.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-primary-gold font-semibold mt-8"
          >
            And it's what guides us as we look to the road ahead.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default IntroSection
