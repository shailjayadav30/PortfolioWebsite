import React from 'react'
import { Card } from './ui/card';
import Image from "next/image";
import cricketimage from "../public/image/cricket.png";
import blogimage from "../public/image/blogimage.png";
import foodorder from "../public/image/foodorder.png"
import { Button } from './ui/button';
import {  ExternalLink, Eye, Github, Star } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

 const projects = [
    {
      title: " Cricket Website",
      description:
        "A dynamic web application built for cricket enthusiasts, featuring user authentication (login and signup), a responsive design, and a contact form for user interaction. The site provides a foundation for showcasing match updates, team info, or cricket-related content, with a focus on smooth navigation and user engagement.",
      image: cricketimage,
      technologies: [
        "React",
        "Typescript",
        "Mongodb",
        "Tailwindcss",
        "Express js",
      ],
      githubUrl: "https://github.com/shailjayadav30/Cricket-website",
      liveUrl: "https://cricket-website-tan.vercel.app/",
      featured: true,
    },
    {
      title: "Vibetrails",
      description:
        "A full-featured blog website that allows users to create, edit, and manage posts using a built-in Markdown text editor. The editor supports text formatting, image embedding, and code blocks, making it ideal for technical or content-heavy blogging. The app includes user authentication (login and signup), and supports full CRUD operations for blog management. Designed with a focus on usability and flexibility, the platform provides a seamless writing and reading experience.",
      image: blogimage,
      technologies: [
        "Nextjs",
        "Typescript",
        "Prisma",
        "Express",
        "Tailwindccss",
      ],
      githubUrl: "https://github.com/shailjayadav30/BlogVista",
      liveUrl: "https://vibetrails.vercel.app/",
      featured: true,
    },
    {
      title: "Food Ordering Website",
      description:
        "Foodie is a user-friendly web application that allows customers to browse restaurants, explore menus, and place food orders online. The platform includes features like user authentication (login/signup), cart management, order tracking, and responsive design for both desktop and mobile users. Designed to streamline the food ordering experience, Foodie is ideal for local restaurants or multi-vendor food delivery services.",
      image: foodorder,
      technologies: [
        "React",
        "Typescript",
        "Expressjs",
        "MongoDB",
        "Tailwindcss",
      ],
      githubUrl: "https://github.com/shailjayadav30/food-website",
      liveUrl: "https://food-website-frontend-tau.vercel.app/login",
      featured: true,
    },
  ];
const ProjectSection = () => {
  return (
    <div>
      <section id="projects" className="relative py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              A collection of projects that showcase my skills and passion for
              development
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-[1.02] group ${
                  project.featured ? "lg:p-8" : ""
                }`}
              >
                <div
                  className={`grid ${
                    project.featured ? "lg:grid-cols-2" : "md:grid-cols-2"
                  } gap-8 items-center`}
                >
                  <div
                    className={
                      project.featured && index % 2 === 1 ? "lg:order-2" : ""
                    }
                  >
                    <div className="relative overflow-hidden rounded-lg">
                      <Image
                        height={200}
                        width={200}
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full  object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                        <div className="flex space-x-4">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-white text-white hover:bg-white hover:text-gray-900"
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            Preview
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-white text-white hover:bg-white hover:text-gray-900"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      {project.featured && (
                        <Star className="w-5 h-5 text-yellow-400" />
                      )}
                      <h3 className="text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="border-purple-400 text-purple-400"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-4 pt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-white"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectSection
