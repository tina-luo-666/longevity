"use client";

import { motion } from "framer-motion";
import { Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialIcons = [
    { name: "Twitter", icon: Twitter, href: COMPANY_INFO.social.twitter },
    { name: "LinkedIn", icon: Linkedin, href: COMPANY_INFO.social.linkedin },
    { name: "Instagram", icon: Instagram, href: COMPANY_INFO.social.instagram },
  ];

  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "How it Works", href: "#solution" },
        { name: "Health Tests", href: "#tests" },
        { name: "Pricing", href: "#pricing" },
        { name: "Early Access", href: "#signup" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Contact", href: "#contact" },
        { name: "Blog", href: "/blog" },
        { name: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "FAQ", href: "#faq" },
        { name: "Help Center", href: "/help" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
  ];

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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
          >
            {/* Logo and description */}
            <motion.div variants={staggerItem} className="lg:col-span-2">
              <motion.h3
                whileHover={{ scale: 1.05 }}
                className="text-3xl font-bold text-primary-400 mb-4 cursor-pointer"
                onClick={scrollToTop}
              >
                {COMPANY_INFO.name}
              </motion.h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
                Evidence-based preventative health monitoring delivered to your
                home. Take control of your health trajectory.
              </p>

              {/* Email */}
              <div className="mb-6">
                <p className="text-gray-400 text-sm mb-1">Get in touch</p>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-primary-400 hover:text-primary-300 font-medium transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              {/* Social links */}
              <div className="flex space-x-4">
                {socialIcons.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-all duration-300 group"
                    >
                      <IconComponent className="w-5 h-5 text-white group-hover:text-white" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Footer links */}
            {footerLinks.map((section, index) => (
              <motion.div
                key={section.title}
                variants={staggerItem}
                className="space-y-4"
              >
                <h4 className="text-lg font-semibold text-white mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <motion.button
                        onClick={() => handleLinkClick(link.href)}
                        whileHover={{ x: 4 }}
                        className="text-gray-400 hover:text-primary-400 transition-colors text-left"
                      >
                        {link.name}
                      </motion.button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
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
