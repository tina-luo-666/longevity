# Video Background Assets

## Required Files

To complete the video background setup, you'll need to add the following files to your project:

### Video Files

- `/public/videos/hero-background.mp4` - Main video file (recommended: MP4 format, H.264 codec)
- `/public/videos/hero-background.webm` - Optional WebM format for better browser compatibility

### Poster Image

- `/public/images/hero-poster.jpg` - Fallback poster image shown while video loads

## Video Specifications

For optimal performance and compatibility:

- **Duration**: 10-30 seconds (will loop seamlessly)
- **Resolution**: 1920x1080 (Full HD) minimum
- **Aspect Ratio**: 16:9 recommended
- **File Size**: Keep under 5MB for good loading performance
- **Format**: MP4 (H.264 codec) and WebM for best browser support
- **Audio**: None required (video is muted)

## Content Suggestions

The video background should complement the healthcare/longevity theme:

- Abstract medical/health imagery
- Gentle particle animations
- Soft, flowing movements
- Nature scenes (cells, DNA, flowing water)
- Abstract geometric patterns
- Subtle color schemes matching the sage/primary color palette

## Fallback Behavior

The component gracefully handles:

- Video loading failures
- Browsers that don't support autoplay
- Users with reduced motion preferences
- Missing video files

When videos fail to load, the component falls back to the existing gradient background.

