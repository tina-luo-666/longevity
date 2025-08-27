"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, Loader2, Mail, MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Contact form data:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();

    // Auto-hide success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-off-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={staggerItem}
            className="text-4xl md:text-5xl font-bold text-charcoal mb-6"
          >
            Questions?
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-xl text-medium-gray max-w-2xl mx-auto"
          >
            Our team is here to help you understand how our platform can support
            your health journey.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={staggerItem}>
              <h3 className="text-2xl font-bold text-charcoal mb-6">
                Get in Touch
              </h3>
              <p className="text-medium-gray text-lg leading-relaxed mb-8">
                We'd love to hear from you. Send us a message and we'll respond
                as soon as possible. Our team typically responds within 24
                hours.
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="space-y-6">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-1">Email Us</h4>
                  <p className="text-medium-gray">{COMPANY_INFO.email}</p>
                  <p className="text-sm text-medium-gray mt-1">
                    We'll get back to you within 24 hours
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-sage-500 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-1">
                    Live Chat
                  </h4>
                  <p className="text-medium-gray">Coming soon</p>
                  <p className="text-sm text-medium-gray mt-1">
                    Real-time support for urgent questions
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Response time */}
            <motion.div
              variants={staggerItem}
              className="bg-gradient-to-br from-primary-50 to-sage-50 rounded-lg p-6 border border-primary-100"
            >
              <h4 className="font-semibold text-charcoal mb-2">
                Quick Response Time
              </h4>
              <p className="text-medium-gray text-sm">
                Our dedicated support team typically responds to inquiries
                within 24 hours during business days. For urgent medical
                questions, please consult your healthcare provider.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center"
                >
                  <CheckCircle className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-charcoal mb-2">
                  Message Sent!
                </h3>
                <p className="text-medium-gray">
                  Thank you for reaching out. We'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <motion.div variants={staggerItem}>
                  <label
                    htmlFor="name"
                    className="block text-charcoal font-medium mb-2"
                  >
                    Name *
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.name.message}
                    </p>
                  )}
                </motion.div>

                <motion.div variants={staggerItem}>
                  <label
                    htmlFor="email"
                    className="block text-charcoal font-medium mb-2"
                  >
                    Email *
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </motion.div>

                <motion.div variants={staggerItem}>
                  <label
                    htmlFor="message"
                    className="block text-charcoal font-medium mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    {...register("message")}
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="How can we help you?"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.message.message}
                    </p>
                  )}
                </motion.div>

                <motion.div variants={staggerItem}>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
