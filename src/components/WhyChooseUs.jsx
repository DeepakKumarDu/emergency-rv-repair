import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaTools, FaAward, FaUsers, FaShieldAlt, FaPlay, FaPause } from 'react-icons/fa'
import { videos } from '../config/videos'

const WhyChooseUs = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play().catch(err => {
          console.log('Video play error:', err)
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

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

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 mb-16"
        >
          <div className="relative rounded-lg overflow-hidden border border-white/10 max-w-5xl mx-auto group">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster={videos.services.poster}
              loop
              muted
              playsInline
            >
              <source src={videos.services.src} type="video/mp4" />
            </video>
            {/* Play/Pause Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
              <motion.button
                onClick={toggleVideo}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white/20 backdrop-blur-md rounded-full p-6 border-2 border-white/30 hover:bg-white/30 transition-all duration-300"
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                {isPlaying ? (
                  <FaPause className="text-white text-3xl" />
                ) : (
                  <FaPlay className="text-white text-3xl ml-1" />
                )}
              </motion.button>
            </div>
            {/* Video Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-white text-xl font-semibold mb-2">The Emergency RV Repair Experience</h3>
              <p className="text-gray-300 text-sm">See why thousands trust us for their luxury motorhome needs</p>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
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
