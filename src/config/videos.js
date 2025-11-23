// Video Configuration
// Local videos from public/videos folder
// Vite serves public folder files at root, so /videos/ works in both dev and production

export const videos = {
  // Video 1: Hero Section Background Video (Homepage) - First Page
  hero: {
    src: '/videos/hero-video.mp4', // 2881486-uhd_3840_2160_30fps.mp4
    poster: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    fallback: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  },
  
  // Video 2: Features Section Video - Second Video
  features: {
    src: '/videos/features-video.mp4', // 6520273-uhd_3840_2160_24fps.mp4
    poster: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  },
  
  // Video 3: Services/Why Choose Us Section Video - Third Video
  services: {
    src: '/videos/services-video.mp4', // 8943550-hd_1920_1080_25fps.mp4
    poster: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  }
}

// Alternative video sources for fallback (if needed)
export const videoFallbacks = {
  hero: [
    '/videos/hero-video.mp4'
  ],
  features: [
    '/videos/features-video.mp4'
  ],
  services: [
    '/videos/services-video.mp4'
  ]
}
