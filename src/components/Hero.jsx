import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaClock, FaMapMarkerAlt, FaPlay, FaPause } from 'react-icons/fa'

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(true)
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

  // Handle video load error
  useEffect(() => {
    const video = videoRef.current
    if (video) {
      const handleError = () => {
        const fallback = document.getElementById('video-fallback')
        if (fallback) {
          fallback.style.display = 'block'
        }
      }
      video.addEventListener('error', handleError)
      return () => video.removeEventListener('error', handleError)
    }
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          onError={(e) => {
            // Fallback to background image if video fails to load
            e.target.style.display = 'none'
          }}
        >
          {/* Primary video source - Road/Highway video */}
          <source src="https://videos.pexels.com/video-files/3045163/3045163-hd_1920_1080_30fps.mp4" type="video/mp4" />
          {/* Alternative video sources */}
          <source src="https://videos.pexels.com/video-files/2491284/2491284-hd_1920_1080_25fps.mp4" type="video/mp4" />
          <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
        </video>
        {/* Fallback background image if video doesn't load */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
            display: 'none'
          }}
          id="video-fallback"
        ></div>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Video Play/Pause Control */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        onClick={toggleVideo}
        className="absolute top-24 right-8 z-20 bg-white/10 backdrop-blur-md rounded-full p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        {isPlaying ? (
          <FaPause className="text-white text-xl" />
        ) : (
          <FaPlay className="text-white text-xl ml-1" />
        )}
      </motion.button>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 text-shadow leading-tight tracking-tight"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800 }}
          >
            EXPLORE THE ROAD AHEAD
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-lg md:text-xl text-gray-200 mb-12 max-w-4xl mx-auto text-shadow leading-relaxed"
          >
            Emergency RV Repair provides premier 24/7 roadside assistance for your luxury motorhome. 
            When you're on the road and need immediate help, we're here with professional, reliable, 
            and fast emergency repair services.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              onClick={toggleVideo}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-10 py-4 rounded-none font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center space-x-3 shadow-2xl uppercase tracking-wider"
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
              <span>{isPlaying ? 'Pause Video' : 'Watch The Video'}</span>
            </motion.button>
            <motion.a
              href="tel:+1234567890"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-10 py-4 rounded-none font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wider"
            >
              Call Now
            </motion.a>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.a
          href="#why-choose-us"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white cursor-pointer group"
        >
          <span className="text-sm mb-2 opacity-70 group-hover:opacity-100 transition-opacity">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center group-hover:border-white transition-colors"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2 group-hover:bg-white transition-colors"
            />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Hero
