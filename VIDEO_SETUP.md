# 🎥 Video Setup Guide

## 3 Videos Ki Jarurat Hai:

1. **Hero Section (Homepage)** - Background video
2. **Features Section** - Service video
3. **Why Choose Us Section** - Experience video

## Video URLs Kaise Add Karein:

### Step 1: Video File Ko Upload Karein

Aap apne videos ko upload kar sakte hain:
- **GitHub** (repo mein `/public/videos/` folder mein)
- **Cloud Storage** (Google Drive, Dropbox, etc.)
- **Video Hosting** (YouTube, Vimeo, etc.)
- **CDN** (Cloudflare, AWS S3, etc.)

### Step 2: Video URLs Add Karein

File open karein: `src/config/videos.js`

Aur apne 3 video URLs add karein:

```javascript
export const videos = {
  // Video 1: Homepage Hero Section
  hero: {
    src: 'YOUR_VIDEO_1_URL_HERE', // MP4 format
    poster: 'YOUR_POSTER_IMAGE_URL', // Optional: Video ka thumbnail
    fallback: 'YOUR_FALLBACK_IMAGE_URL' // Agar video load na ho
  },
  
  // Video 2: Features Section
  features: {
    src: 'YOUR_VIDEO_2_URL_HERE',
    poster: 'YOUR_POSTER_IMAGE_URL'
  },
  
  // Video 3: Why Choose Us Section
  services: {
    src: 'YOUR_VIDEO_3_URL_HERE',
    poster: 'YOUR_POSTER_IMAGE_URL'
  }
}
```

## Video Requirements:

✅ **Format**: MP4 (recommended)
✅ **Resolution**: 1920x1080 (Full HD) ya better
✅ **Duration**: 30 seconds se 2 minutes tak (loop ke liye)
✅ **Size**: Compress karein (5-10 MB se kam)
✅ **Codec**: H.264 (best compatibility)

## Example URLs:

```javascript
// Agar aapke videos public folder mein hain:
hero: {
  src: '/videos/hero-video.mp4',
  poster: '/images/hero-poster.jpg'
}

// Agar cloud storage se:
hero: {
  src: 'https://your-cdn.com/videos/hero-video.mp4',
  poster: 'https://your-cdn.com/images/hero-poster.jpg'
}

// Agar YouTube se (embed):
// Note: YouTube videos ke liye iframe use karna padega
```

## Quick Setup:

1. Apne 3 videos ko ready karein
2. Unhe upload karein (GitHub, Cloud, etc.)
3. `src/config/videos.js` file mein URLs add karein
4. Save karein aur test karein

## Video Optimization Tips:

- **Compress videos**: HandBrake ya FFmpeg use karein
- **Use CDN**: Fast loading ke liye
- **Add poster images**: Loading time improve karne ke liye
- **Test on mobile**: Mobile devices par bhi check karein

## Current Setup:

Abhi placeholder videos use ho rahe hain. Aap apne videos add karne ke baad unhe replace kar sakte hain.
