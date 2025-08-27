#!/bin/bash

echo "🔍 Longivity Project Setup Check"
echo "================================"
echo ""

# Check Node.js
echo "📋 Checking Node.js installation..."
if command -v node &> /dev/null; then
    echo "✅ Node.js is installed: $(node --version)"
    if command -v npm &> /dev/null; then
        echo "✅ npm is available: $(npm --version)"
    else
        echo "❌ npm is not available"
    fi
else
    echo "❌ Node.js is not installed"
    echo "   📥 Install from: https://nodejs.org"
fi
echo ""

# Check project files
echo "📁 Checking project structure..."
[ -f "package.json" ] && echo "✅ package.json exists" || echo "❌ package.json missing"
[ -f "next.config.js" ] && echo "✅ next.config.js exists" || echo "❌ next.config.js missing"
[ -f "tailwind.config.ts" ] && echo "✅ tailwind.config.ts exists" || echo "❌ tailwind.config.ts missing"
echo ""

# Check font files
echo "🎨 Checking The Seasons font files..."
[ -f "public/fonts/the-seasons/TheSeasons-Regular.ttf" ] && echo "✅ TheSeasons-Regular.ttf" || echo "❌ TheSeasons-Regular.ttf missing"
[ -f "public/fonts/the-seasons/TheSeasons-Bold.ttf" ] && echo "✅ TheSeasons-Bold.ttf" || echo "❌ TheSeasons-Bold.ttf missing"
[ -f "public/fonts/the-seasons/TheSeasons-Light.ttf" ] && echo "✅ TheSeasons-Light.ttf" || echo "❌ TheSeasons-Light.ttf missing"
echo ""

# Check video files
echo "🎬 Checking video background..."
[ -f "public/videos/trees.mp4" ] && echo "✅ trees.mp4 video background" || echo "❌ trees.mp4 missing"
echo ""

# Check dependencies
echo "📦 Checking dependencies..."
if [ -d "node_modules" ]; then
    echo "✅ node_modules folder exists"
else
    echo "⚠️  node_modules not found (will install when running npm install)"
fi
echo ""

# Final status
echo "🚀 Setup Status Summary:"
echo "========================"

if command -v node &> /dev/null; then
    echo "✅ Ready to run development server!"
    echo ""
    echo "🎯 Next steps:"
    echo "   1. Run: ./start-dev.sh"
    echo "   2. Open: http://localhost:3000"
    echo "   3. Enjoy your custom fonts and video background!"
else
    echo "❌ Install Node.js first, then run: ./start-dev.sh"
    echo ""
    echo "🎯 Next steps:"
    echo "   1. Install Node.js from: https://nodejs.org"
    echo "   2. Restart your terminal"
    echo "   3. Run: ./start-dev.sh"
fi
echo ""
