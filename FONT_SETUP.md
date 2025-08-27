# The Seasons Font Setup

## Overview

The project has been configured to use "The Seasons" font from Canva as the primary typeface, replacing Inter.

## Required Font Files

You need to add the following font files to `/public/fonts/the-seasons/`:

### Required Files:

- `TheSeasons-Light.ttf` (weight: 300)
- `TheSeasons-Light.woff` (weight: 300) - optional, for better web performance
- `TheSeasons-Light.woff2` (weight: 300) - optional, for best web performance

- `TheSeasons-Regular.ttf` (weight: 400)
- `TheSeasons-Regular.woff` (weight: 400) - optional
- `TheSeasons-Regular.woff2` (weight: 400) - optional

- `TheSeasons-Bold.ttf` (weight: 700)
- `TheSeasons-Bold.woff` (weight: 700) - optional
- `TheSeasons-Bold.woff2` (weight: 700) - optional

## How to Get The Seasons Font

### From Canva:

1. Go to Canva and create a design
2. Add text and select "The Seasons" font
3. Download your design as a PDF or image
4. Use a font extraction tool or contact Canva support for font files

### Alternative Sources:

- Download from [Y2K Fonts](https://y2kfonts.com/the-seasons-font/) (free version)
- Search for "The Seasons font download" on font websites
- Purchase from the original font creator

## Font Usage in Components

### Current Implementation:

- **Body text**: Uses The Seasons as primary font with Inter fallback
- **All major headlines**: Use `font-seasons` class for The Seasons specifically
- **Components updated**: Hero, Navigation logo, Problem section, Solution section, FAQ, Test Categories, and Signup form headings all use The Seasons font

### Available Tailwind Classes:

- `font-sans` - The Seasons, Inter, system fonts
- `font-heading` - Same as font-sans (The Seasons primary)
- `font-seasons` - The Seasons with serif fallback

## Font Weights Available:

- `font-light` (300) - Light weight
- `font-normal` (400) - Regular weight
- `font-bold` (700) - Bold weight

## Fallback Behavior

If The Seasons font files are not found, the site will gracefully fall back to:

1. Inter (Google Font)
2. System UI fonts
3. Default sans-serif fonts

## Testing

After adding the font files, you should see:

- The main headline using The Seasons font
- All text throughout the site using The Seasons as primary font
- Proper fallback to Inter if The Seasons fails to load

## File Structure

```
public/
├── fonts/
│   └── the-seasons/
│       ├── TheSeasons-Light.ttf
│       ├── TheSeasons-Light.woff
│       ├── TheSeasons-Light.woff2
│       ├── TheSeasons-Regular.ttf
│       ├── TheSeasons-Regular.woff
│       ├── TheSeasons-Regular.woff2
│       ├── TheSeasons-Bold.ttf
│       ├── TheSeasons-Bold.woff
│       └── TheSeasons-Bold.woff2
```
