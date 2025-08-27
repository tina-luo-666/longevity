"use client";

import { motion } from "framer-motion";
import { Clock, Puzzle, DollarSign } from "lucide-react";
import { PROBLEM_CARDS } from "@/lib/constants";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const iconMap = {
  Clock: Clock,
  Puzzle: Puzzle,
  DollarSign: DollarSign,
};

export default function ProblemSection() {
  return (
    <section id="problem" className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.h2
            variants={staggerItem}
            className="text-4xl md:text-6xl font-bold font-seasons text-neutral-100 mb-8 tracking-tight"
          >
            Healthcare is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">
              Reactive
            </span>
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-xl md:text-2xl text-neutral-300 max-w-4xl mx-auto font-light leading-relaxed"
          >
            Traditional healthcare focuses on treating disease rather than
            preventing it, leaving people in the dark about their health
            trajectory.
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {PROBLEM_CARDS.map((card, index) => {
            const IconComponent = iconMap[card.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={card.title}
                variants={staggerItem}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="group"
              >
                <div className="modern-card p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 h-full group-hover:scale-[1.02]">
                  <div className="text-center">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl mb-6 group-hover:shadow-lg transition-all duration-300"
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-neutral-100 mb-4 group-hover:text-accent-400 transition-colors">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-neutral-300 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional statistics row */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "80%", label: "of diseases are preventable" },
            { number: "10+", label: "years to get symptoms" },
            { number: "$3.8T", label: "healthcare spending annually" },
            { number: "6-8", label: "doctors to see specialists" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="text-center glass p-6 rounded-2xl"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="text-3xl md:text-5xl font-bold text-accent-400 mb-3"
              >
                {stat.number}
              </motion.div>
              <div className="text-neutral-300 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
