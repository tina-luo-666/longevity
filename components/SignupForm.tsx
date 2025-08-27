"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, Loader2, Users, Shield, AlertCircle } from "lucide-react";
import { AGE_RANGES, INTEREST_OPTIONS } from "@/lib/constants";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { submitSignup, checkEmailExists } from "@/lib/supabase";

const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  location: z.string().min(2, "Please enter your suburb/city"),
  ageRange: z.string().optional(),
  interestedIn: z.string().min(1, "Please select your interest"),
});

type SignupFormData = z.infer<typeof signupSchema>;

export default function SignupForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Check if email already exists
      const emailExists = await checkEmailExists(data.email);
      if (emailExists) {
        setSubmitError(
          "This email is already registered. Please use a different email address."
        );
        setIsSubmitting(false);
        return;
      }

      // Submit the signup data to Supabase
      const result = await submitSignup({
        name: data.name,
        email: data.email,
        location: data.location,
        age_range: data.ageRange || undefined,
        interested_in: data.interestedIn,
      });

      if (result.success) {
        setIsSubmitted(true);
        reset();
        console.log("Signup successful:", result.data);
      } else {
        setSubmitError(
          result.error || "An unexpected error occurred. Please try again."
        );
      }
    } catch (error) {
      console.error("Signup error:", error);
      setSubmitError(
        "Something went wrong. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section
        id="signup"
        className="py-20 bg-gradient-to-br from-primary-500 via-primary-600 to-sage-500"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center"
            >
              <CheckCircle className="w-10 h-10 text-white" />
            </motion.div>

            <h3 className="text-3xl font-bold font-seasons text-charcoal mb-4">
              Welcome to the Future of Health!
            </h3>
            <p className="text-lg text-medium-gray mb-8">
              Thank you for joining our early access program. We&rsquo;ll be in touch
              soon with next steps.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsSubmitted(false);
                setSubmitError(null);
              }}
              className="btn-primary"
            >
              Submit Another Response
            </motion.button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="signup"
      className="py-20 bg-gradient-to-br from-primary-500 via-primary-600 to-sage-500"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2
            variants={staggerItem}
            className="text-4xl md:text-5xl font-bold font-seasons text-white mb-6"
          >
            Join the waitlist
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Get early access and (optional) invite to a short research
            interview. We&rsquo;ll only email you about launch and pilot availability.
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Error Display */}
            {submitError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/20 border border-red-400/30 rounded-lg p-4 flex items-center space-x-3"
              >
                <AlertCircle className="w-5 h-5 text-red-300 flex-shrink-0" />
                <p className="text-red-200 text-sm">{submitError}</p>
              </motion.div>
            )}
            {/* Name */}
            <motion.div variants={staggerItem}>
              <label
                htmlFor="name"
                className="block text-white font-medium mb-2"
              >
                Name *
              </label>
              <input
                {...register("name")}
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-300">
                  {errors.name.message}
                </p>
              )}
            </motion.div>

            {/* Email */}
            <motion.div variants={staggerItem}>
              <label
                htmlFor="email"
                className="block text-white font-medium mb-2"
              >
                Email Address *
              </label>
              <input
                {...register("email")}
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-300">
                  {errors.email.message}
                </p>
              )}
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Location */}
              <motion.div variants={staggerItem}>
                <label
                  htmlFor="location"
                  className="block text-white font-medium mb-2"
                >
                  Suburb/City *
                </label>
                <input
                  {...register("location")}
                  type="text"
                  id="location"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your suburb or city"
                />
                {errors.location && (
                  <p className="mt-1 text-sm text-red-300">
                    {errors.location.message}
                  </p>
                )}
              </motion.div>

              {/* Age Range */}
              <motion.div variants={staggerItem}>
                <label
                  htmlFor="ageRange"
                  className="block text-white font-medium mb-2"
                >
                  Age band (optional)
                </label>
                <select
                  {...register("ageRange")}
                  id="ageRange"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
                >
                  <option value="" className="text-gray-700">
                    Select your age range
                  </option>
                  {AGE_RANGES.map((range) => (
                    <option key={range} value={range} className="text-gray-700">
                      {range}
                    </option>
                  ))}
                </select>
                {errors.ageRange && (
                  <p className="mt-1 text-sm text-red-300">
                    {errors.ageRange.message}
                  </p>
                )}
              </motion.div>
            </div>

            {/* Interested In */}
            <motion.div variants={staggerItem}>
              <label
                htmlFor="interestedIn"
                className="block text-white font-medium mb-2"
              >
                Interested in: *
              </label>
              <select
                {...register("interestedIn")}
                id="interestedIn"
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
              >
                <option value="" className="text-gray-700">
                  Select your interest
                </option>
                {INTEREST_OPTIONS.map((option) => (
                  <option key={option} value={option} className="text-gray-700">
                    {option}
                  </option>
                ))}
              </select>
              {errors.interestedIn && (
                <p className="mt-1 text-sm text-red-300">
                  {errors.interestedIn.message}
                </p>
              )}
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={staggerItem} className="pt-4">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full bg-white text-primary-600 font-bold py-4 px-8 rounded-lg text-lg shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <span>Join the waitlist</span>
                )}
              </motion.button>
            </motion.div>

            {/* Privacy Text */}
            <motion.p
              variants={staggerItem}
              className="text-center text-white/70 text-sm flex items-center justify-center space-x-2"
            >
              <Shield className="w-4 h-4" />
              <span>We never sell your data. Unsubscribe anytime.</span>
            </motion.p>
          </form>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="mt-12 text-center"
        >
          <motion.div
            variants={staggerItem}
            className="inline-flex items-center space-x-2 text-white/80"
          >
            <Users className="w-5 h-5" />
            <span className="font-medium">
              Join 500+ early members already on the waitlist
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
