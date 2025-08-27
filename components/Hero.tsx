"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";
import VideoBackground from "./VideoBackground";

export default function Hero() {
  const scrollToSignup = () => {
    const element = document.querySelector("#signup");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToNext = () => {
    const element = document.querySelector("#problem");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient"
    >
      {/* Video Background */}
      <VideoBackground
        videoSrc="/videos/trees.mp4"
        posterSrc="/images/hero-poster.jpg"
        overlayOpacity={0.7}
      />

      {/* Enhanced Animated Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-20 z-10">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.4) 0%, transparent 60%),
              radial-gradient(circle at 80% 20%, rgba(148, 163, 184, 0.3) 0%, transparent 60%),
              radial-gradient(circle at 40% 80%, rgba(34, 197, 94, 0.3) 0%, transparent 60%)
            `,
            backgroundSize: "600% 600%",
          }}
        />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 z-20">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-sage-500/20 to-sage-600/20 rounded-3xl blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-2/3 right-1/4 w-24 h-24 bg-gradient-to-br from-primary-400/20 to-primary-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-gradient-to-br from-sage-400/15 to-primary-400/15 rounded-2xl blur-2xl"
        />
      </div>

      {/* Subtle particle effect */}
      <div className="absolute inset-0 z-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
            className="absolute w-2 h-2 bg-sage-400/40 rounded-full blur-sm"
            style={{
              left: `${20 + i * 15}%`,
              top: `${60 + i * 5}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-8"
        >
          {/* Main Headline */}
          <motion.h1
            variants={staggerItem}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-seasons text-primary-50 leading-tight tracking-tight"
          >
            Prevent problems before they start.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage-400 to-sage-300">
              At home.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={staggerItem}
            className="text-xl md:text-2xl text-primary-200 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Clinically-governed, in-home preventative checks for adults 45–84.
            Functional tests, clear next steps, ongoing tracking.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <motion.button
              onClick={scrollToSignup}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(34, 197, 94, 0.2)",
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-sage-500 hover:bg-sage-400 text-white font-medium py-4 px-8 rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 border border-sage-400/20"
            >
              Join the waitlist
            </motion.button>

            <motion.button
              onClick={scrollToSignup}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glass border border-primary-300/30 text-primary-100 hover:text-white font-medium py-4 px-8 rounded-xl text-lg hover:bg-primary-600/20 transition-all duration-300"
            >
              I'm open to a 15-min research chat
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div variants={staggerItem} className="pt-12">
            <motion.button
              onClick={scrollToNext}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-primary-400 hover:text-primary-300 transition-colors"
            >
              <ArrowDown className="w-6 h-6 mx-auto" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient divider */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-900 to-transparent"></div>
    </section>
  );
}
