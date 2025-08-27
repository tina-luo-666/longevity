"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import TestCategories from "@/components/TestCategories";
import SignupForm from "@/components/SignupForm";

import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <TestCategories />
      <SignupForm />
      <ContactForm />
      <Footer />
    </main>
  );
}
