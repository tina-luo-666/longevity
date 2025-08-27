"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (question: string) => {
    setOpenItems((prev) =>
      prev.includes(question)
        ? prev.filter((item) => item !== question)
        : [...prev, question]
    );
  };

  const isOpen = (question: string) => openItems.includes(question);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={staggerItem}
            className="text-4xl md:text-5xl font-bold font-seasons text-charcoal mb-6"
          >
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-sage-500">
              Questions
            </span>
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-xl text-medium-gray max-w-2xl mx-auto"
          >
            Everything you need to know about our preventative health platform.
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="space-y-4"
        >
          {FAQ_ITEMS.map((item, index) => (
            <motion.div
              key={item.question}
              variants={staggerItem}
              className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <motion.button
                onClick={() => toggleItem(item.question)}
                whileHover={{ backgroundColor: "rgba(13, 148, 136, 0.02)" }}
                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset transition-colors"
              >
                <span className="text-lg font-semibold text-charcoal pr-4">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: isOpen(item.question) ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex-shrink-0"
                >
                  {isOpen(item.question) ? (
                    <Minus className="w-5 h-5 text-primary-500" />
                  ) : (
                    <Plus className="w-5 h-5 text-primary-500" />
                  )}
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {isOpen(item.question) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <motion.p
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-medium-gray leading-relaxed"
                      >
                        {item.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional help section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="mt-16 text-center"
        >
          <motion.div
            variants={staggerItem}
            className="bg-gradient-to-br from-sage-100 to-primary-50 rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold text-charcoal mb-4">
              Still have questions?
            </h3>
            <p className="text-medium-gray mb-6 max-w-2xl mx-auto">
              Our team is here to help you understand how our platform can
              support your health journey. Get in touch for personalized
              answers.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="btn-primary"
            >
              Contact Our Team
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
