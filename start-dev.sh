#!/bin/bash

# Longivity Development Server Startup Script
echo "🚀 Starting Longivity Development Server..."
echo "📍 Current directory: $(pwd)"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "📥 Please install Node.js from: https://nodejs.org"
    echo "💡 Download the LTS version and restart your terminal after installation"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not available!"
    echo "📥 Please install Node.js from: https://nodejs.org"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install dependencies"
        exit 1
    fi
    echo "✅ Dependencies installed successfully!"
    echo ""
fi

# Check if font files exist
echo "🔍 Checking font files..."
if [ -f "public/fonts/the-seasons/TheSeasons-Regular.ttf" ]; then
    echo "✅ TheSeasons-Regular.ttf found"
else
    echo "⚠️  TheSeasons-Regular.ttf not found"
fi

if [ -f "public/fonts/the-seasons/TheSeasons-Bold.ttf" ]; then
    echo "✅ TheSeasons-Bold.ttf found"
else
    echo "⚠️  TheSeasons-Bold.ttf not found"
fi

if [ -f "public/fonts/the-seasons/TheSeasons-Light.ttf" ]; then
    echo "✅ TheSeasons-Light.ttf found"
else
    echo "⚠️  TheSeasons-Light.ttf not found"
fi

# Check if video file exists
if [ -f "public/videos/trees.mp4" ]; then
    echo "✅ Video background (trees.mp4) found"
else
    echo "⚠️  Video background (trees.mp4) not found"
fi

echo ""
echo "🎨 Your custom fonts and video background are ready!"
echo "🌐 Starting development server..."
echo "📱 Your site will be available at: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Start the development server
npm run dev

