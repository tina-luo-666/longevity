"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    // For external links, they would navigate normally
  };

  return (
    <footer className="bg-charcoal text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-sage-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="flex justify-center"
          >
            {/* Logo only */}
            <motion.div variants={staggerItem} className="text-center">
              <motion.h3
                whileHover={{ scale: 1.05 }}
                className="text-3xl font-bold text-primary-400 cursor-pointer"
                onClick={scrollToTop}
              >
                {COMPANY_INFO.name}
              </motion.h3>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="border-t border-white/10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.div
                variants={staggerItem}
                className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6"
              >
                <p className="text-gray-400 text-sm">
                  © {currentYear} {COMPANY_INFO.name}. All rights reserved.
                </p>
                <div className="flex space-x-6">
                  <button
                    onClick={() => handleLinkClick("/privacy")}
                    className="text-gray-400 hover:text-primary-400 text-sm transition-colors"
                  >
                    Privacy Policy
                  </button>
                  <button
                    onClick={() => handleLinkClick("/terms")}
                    className="text-gray-400 hover:text-primary-400 text-sm transition-colors"
                  >
                    Terms of Service
                  </button>
                </div>
              </motion.div>

              {/* Back to top button */}
              <motion.button
                variants={staggerItem}
                onClick={scrollToTop}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors group"
              >
                <span className="text-sm font-medium">Back to top</span>
                <ArrowUp className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
