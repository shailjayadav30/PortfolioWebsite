import { Code2 } from 'lucide-react'
import React from 'react'

const AboutSection = () => {
  return (
    <div>
       <section id="about" className="relative py-20 px-16 pr-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                I’m a full-stack developer with a strong foundation in building
                web applications. My journey started with a deep interest in how
                websites and apps work, which led me to build personal projects,
                contribute to open-source, and continually expand my skills
                through hands-on learning and experimentation. I’m eager to
                apply what I’ve learned to real-world challenges and grow as a
                developer in a professional setting.
              </p>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
                <div className="w-64 h-64 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <Code2 className="w-32 h-32 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutSection
