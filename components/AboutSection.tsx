import { Code2 } from "lucide-react";
import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-6 sm:px-10 md:px-16 bg-gray-900 text-white"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              I’m a full-stack developer with a strong foundation in building web applications. 
              My journey started with a deep interest in how websites and apps work, which led me 
              to build personal projects, contribute to open-source, and continuously grow my skills 
              through hands-on learning. I’m eager to take on real-world challenges and grow as a 
              developer in a professional setting.
            </p>
          </div>

          {/* Icon Visual */}
          <div className="flex justify-center md:justify-end">
            <div className="relative group transition-transform duration-500 hover:scale-105">
              <div className="w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg shadow-pink-500/30">
                  <Code2 className="w-28 h-28 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
