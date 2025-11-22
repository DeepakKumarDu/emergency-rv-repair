// Video Configuration
// Add your 3 video URLs here

export const videos = {
  // Video 1: Hero Section Background Video (Homepage)
  hero: {
    src: 'https://videos.pexels.com/video-files/3045163/3045163-hd_1920_1080_30fps.mp4', // Replace with your video URL
    poster: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    fallback: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  },
  
  // Video 2: Features Section Video
  features: {
    src: 'https://videos.pexels.com/video-files/2491284/2491284-hd_1920_1080_25fps.mp4', // Replace with your video URL
    poster: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  },
  
  // Video 3: Services/Why Choose Us Section Video
  services: {
    src: 'https://videos.pexels.com/video-files/3045163/3045163-hd_1920_1080_30fps.mp4', // Replace with your video URL
    poster: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  }
}

// Alternative video sources for fallback
export const videoFallbacks = {
  hero: [
    'https://videos.pexels.com/video-files/3045163/3045163-hd_1920_1080_30fps.mp4',
    'https://videos.pexels.com/video-files/2491284/2491284-hd_1920_1080_25fps.mp4'
  ],
  features: [
    'https://videos.pexels.com/video-files/2491284/2491284-hd_1920_1080_25fps.mp4'
  ],
  services: [
    'https://videos.pexels.com/video-files/3045163/3045163-hd_1920_1080_30fps.mp4'
  ]
}
