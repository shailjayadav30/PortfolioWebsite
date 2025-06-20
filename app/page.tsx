"use client";

import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";
import SkillsSection from "@/components/SkillsSection";
import { Heart } from "lucide-react";
import React, { useState } from "react";

export default function DarkPortfolio() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <HeroSection setActiveSection={setActiveSection} />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-gray-400">
            © 2024 Shailja Yadav. Crafted with{" "}
            <Heart className="w-4 h-4 inline text-pink-400" />
          </p>
        </div>
      </footer>
    </div>
  );
}
