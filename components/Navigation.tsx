"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAVIGATION_ITEMS, COMPANY_INFO } from "@/lib/constants";
import { navbarSlide } from "@/lib/animations";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <motion.nav
      {...navbarSlide}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass shadow-2xl border-b border-neutral-600/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => scrollToSection("#hero")}
              className={`text-2xl md:text-3xl font-bold font-seasons transition-colors ${
                isScrolled
                  ? "text-neutral-100 hover:text-sage-400"
                  : "text-primary-100 hover:text-sage-300"
              }`}
            >
              {COMPANY_INFO.name}
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.type === "button" ? (
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="bg-sage-500 hover:bg-sage-400 text-white font-medium py-2 px-6 rounded-xl text-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-sage-400/20"
                  >
                    {item.name}
                  </button>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`text-sm font-medium transition-colors ${
                      isScrolled
                        ? "text-neutral-200 hover:text-sage-400"
                        : "text-primary-200 hover:text-sage-300"
                    }`}
                  >
                    {item.name}
                  </button>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-xl transition-colors ${
                isScrolled
                  ? "text-neutral-200 hover:text-sage-400"
                  : "text-primary-200 hover:text-sage-300"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden glass rounded-2xl mt-2 border border-neutral-600/30"
        >
          <div className="px-4 py-4 space-y-4">
            {NAVIGATION_ITEMS.map((item) => (
              <motion.div
                key={item.name}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {item.type === "button" ? (
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="bg-sage-500 hover:bg-sage-400 text-white font-medium py-3 px-6 rounded-xl w-full text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-sage-400/20"
                  >
                    {item.name}
                  </button>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left text-neutral-200 hover:text-sage-400 font-medium py-2 transition-colors"
                  >
                    {item.name}
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
