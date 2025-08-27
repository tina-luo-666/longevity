"use client";

import { motion } from "framer-motion";
import {
  Home,
  TrendingUp,
  Target,
  ArrowRight,
  User,
  ArrowUp,
  Shield,
  Lock,
  Users,
} from "lucide-react";
import { SOLUTION_STEPS, FEATURE_BULLETS, TRUST_ITEMS } from "@/lib/constants";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const iconMap = {
  Home: Home,
  TrendingUp: TrendingUp,
  Target: Target,
  User: User,
  ArrowUp: ArrowUp,
  Shield: Shield,
  Lock: Lock,
  Users: Users,
};

export default function SolutionSection() {
  return (
    <section id="solution" className="py-24 bg-neutral-800">
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
            Prevention,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage-400 to-sage-600">
              Simplified
            </span>
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-xl md:text-2xl text-neutral-300 max-w-4xl mx-auto font-light leading-relaxed"
          >
            Take control of your health trajectory with our comprehensive,
            evidence-based approach to preventative care.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid lg:grid-cols-3 gap-12 lg:gap-8"
          >
            {SOLUTION_STEPS.map((step, index) => {
              const IconComponent = iconMap[step.icon as keyof typeof iconMap];

              return (
                <motion.div
                  key={step.step}
                  variants={staggerItem}
                  className="relative group"
                >
                  {/* Mobile connection line */}
                  {index < SOLUTION_STEPS.length - 1 && (
                    <div className="lg:hidden absolute left-8 top-20 w-0.5 h-12 bg-gradient-to-b from-sage-500 to-sage-400"></div>
                  )}

                  <div className="text-center lg:text-center">
                    {/* Step number and icon */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-sage-500 to-sage-600 rounded-2xl mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300"
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {step.step}
                      </div>
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-neutral-100 mb-4 group-hover:text-sage-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-neutral-300 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Learn more link */}
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center text-sage-400 font-semibold hover:text-sage-300 transition-colors"
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Additional Features */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="mt-24"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {FEATURE_BULLETS.slice(3).map((feature, index) => {
              const IconComponent =
                iconMap[feature.icon as keyof typeof iconMap];

              return (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="flex items-start space-x-4 p-6 modern-card hover:bg-neutral-700/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-sage-500 to-sage-600 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-100 mb-2 text-lg">
                      {feature.title}
                    </h4>
                    <p className="text-neutral-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Trust & Reassurance */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="mt-24 modern-card p-8 md:p-12"
        >
          <motion.div variants={staggerItem} className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-4 tracking-tight">
              Trust & Security
            </h3>
            <p className="text-neutral-300 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
              Your health data is protected and your care is guided by clinical
              excellence.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {TRUST_ITEMS.map((item, index) => {
              const IconComponent = iconMap[item.icon as keyof typeof iconMap];

              return (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="text-center p-6 bg-neutral-700/30 rounded-xl border border-neutral-600/30"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-sage-500 to-sage-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-neutral-100 mb-2 text-lg">
                    {item.title}
                  </h4>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
