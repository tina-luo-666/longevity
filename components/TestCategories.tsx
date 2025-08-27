"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Wind, Dumbbell, Activity, Brain, Eye } from "lucide-react";
import { TEST_CATEGORIES } from "@/lib/constants";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const iconMap = {
  Heart: Heart,
  Wind: Wind,
  Dumbbell: Dumbbell,
  Activity: Activity,
  Brain: Brain,
  Eye: Eye,
};

export default function TestCategories() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <section className="py-20 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Complete{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-sage-500">
              Health Picture
            </span>
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-xl text-medium-gray max-w-3xl mx-auto"
          >
            Our comprehensive assessment covers six key health domains, giving
            you unprecedented insight into your wellbeing.
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {TEST_CATEGORIES.map((category, index) => {
            const IconComponent =
              iconMap[category.icon as keyof typeof iconMap];
            const isHovered = hoveredCategory === category.title;

            return (
              <motion.div
                key={category.title}
                variants={staggerItem}
                onMouseEnter={() => setHoveredCategory(category.title)}
                onMouseLeave={() => setHoveredCategory(null)}
                whileHover={{ y: -12 }}
                className="group cursor-pointer"
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full overflow-hidden">
                  {/* Background gradient that appears on hover */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: isHovered ? 0.1 : 0,
                      scale: isHovered ? 1.2 : 0.8,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-br from-primary-500 to-sage-500 rounded-2xl"
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-sage-500 rounded-xl mb-6 group-hover:shadow-lg transition-all duration-300"
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-charcoal mb-4 group-hover:text-primary-600 transition-colors">
                      {category.title}
                    </h3>

                    {/* Tests list */}
                    <AnimatePresence>
                      {isHovered ? (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-2"
                        >
                          {category.tests.map((test, testIndex) => (
                            <motion.div
                              key={testIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: testIndex * 0.1 }}
                              className="flex items-center space-x-2 text-sm text-medium-gray"
                            >
                              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"></div>
                              <span>{test}</span>
                            </motion.div>
                          ))}
                        </motion.div>
                      ) : (
                        <motion.p
                          initial={{ opacity: 1 }}
                          animate={{ opacity: 1 }}
                          className="text-medium-gray"
                        >
                          {category.tests.length} comprehensive tests
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Hover indicator */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: isHovered ? "100%" : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary-500 to-sage-500"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
