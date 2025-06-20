import { Code2, Database, Palette, Server } from 'lucide-react';
import React from 'react'
import { Card, CardContent } from './ui/card';

const SkillsSection = () => {
    const skills = [
    {
      name: "React",
      level: 95,
      icon: <Code2 className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "TypeScript",
      level: 90,
      icon: <Code2 className="w-6 h-6" />,
      color: "from-blue-600 to-blue-400",
    },
    {
      name: "Next.js",
      level: 88,
      icon: <Server className="w-6 h-6" />,
      color: "from-gray-600 to-gray-400",
    },
    {
      name: "Node.js",
      level: 85,
      icon: <Server className="w-6 h-6" />,
      color: "from-green-500 to-green-400",
    },
    {
      name: "Tailwind CSS",
      level: 92,
      icon: <Palette className="w-6 h-6" />,
      color: "from-teal-500 to-cyan-400",
    },
    {
      name: "Prisma",
      level: 80,
      icon: <Database className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
    },
  ];

 
  return (
    <div>
       <section id="skills" className="relative py-20 px-6 bg-gray-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`p-2 rounded-lg bg-gradient-to-r ${skill.color}`}
                      >
                        {skill.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        {skill.name}
                      </h3>
                    </div>
                    <span className="text-purple-400 font-bold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out group-hover:animate-pulse`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default SkillsSection
