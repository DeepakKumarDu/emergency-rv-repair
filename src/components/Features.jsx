import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaPlay, FaPause } from 'react-icons/fa'
import { videos } from '../config/videos'

const Features = () => {
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef(null)

  // Auto-play video when component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Video play error:', err)
      })
    }
  }, [])

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
      title: 'Fast Response Time',
      description: 'Average response time of 30-60 minutes to your location.',
    },
    {
      title: 'Mobile Service Units',
      description: 'Fully equipped service trucks come to you wherever you are.',
    },
    {
      title: 'Luxury RV Specialists',
      description: 'Specialized knowledge in high-end motorhome systems and components.',
    },
    {
      title: 'Transparent Pricing',
      description: 'No hidden fees. Clear, upfront pricing before any work begins.',
    },
  ]

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Emergency RV Repair Difference
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            What sets us apart in the industry
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-primary-gold/50 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-gold/20 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary-gold rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <div className="relative rounded-lg overflow-hidden border border-white/10 max-w-4xl mx-auto group">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster={videos.services.poster}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={videos.services.src} type="video/mp4" />
            </video>
            {/* Play/Pause Control Button (only on hover) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
              <h3 className="text-white text-xl font-semibold">Watch Our Service in Action</h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
