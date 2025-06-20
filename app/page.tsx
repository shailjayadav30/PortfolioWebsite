"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import emailjs from "@emailjs/browser"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  Code2,
  Palette,
  Server,
  Send,
  ArrowRight,
  Download,
  Eye,
  Star,
  Zap,
  Target,
  Heart,
  Database,
} from "lucide-react";
import cricketimage from "../public/image/cricket.png";
import blogimage from "../public/image/blogimage.png";
import foodorder from "../public/image/foodorder.png"
import Image from "next/image";
export default function DarkPortfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
const serviceId=process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
const publickey=process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
const templateId=process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
 
console.log(serviceId)
console.log(publickey)
console.log(templateId)


const templateparams={
  from_name:formData.name,
  from_email:formData.email,
  to_name:"shailja yadav",
  message:formData.message
}
emailjs.send(serviceId,templateId,templateparams,publickey).then(
  (response)=>{
    console.log("Email send successfully!",response)
    setFormData({ name: "", email: "", message: "" });
  })
  .catch((error)=>{
    console.error("Error sending email",error)
  })
  };

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {"<Dev />"}
            </div>
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-all duration-300 hover:text-purple-400 ${
                      activeSection === section
                        ? "text-purple-400"
                        : "text-gray-300"
                    }`}
                  >
                    {section}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6"
      >
        <div
          className={`container mx-auto max-w-6xl text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Shailja yadav
            </h1>
            <div className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
              <span className="inline-block animate-bounce">Full Stack</span>{" "}
              <span className="inline-block animate-bounce delay-100">
                Developer
              </span>
            </div>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Crafting digital experiences that blend cutting-edge technology
              with intuitive design. Passionate about creating solutions that
              make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 group"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a
                href="https://drive.google.com/file/d/19TaMQfm0hj9ovFuubZjbEgN2rBIagybj/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transform hover:scale-105 transition-all duration-300"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
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

      {/* Skills Section */}
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

      {/* Projects Section */}
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

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-6 bg-gray-800/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let us Work Together
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Have a project in mind? Let us discuss how we can bring your ideas
              to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-purple-400" />
                  Send Message
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Fill out the form and I will get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-300 p-2">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-gray-700 border-gray-600 text-white focus:border-purple-400"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-300 p-2">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-gray-700 border-gray-600 text-white focus:border-purple-400"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-gray-300 p-2">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-gray-700 border-gray-600 text-white focus:border-purple-400"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Target className="w-5 h-5 mr-2 text-purple-400" />
                    Get In Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-colors">
                    <Mail className="w-6 h-6 text-purple-400" />
                    <a href="mailto:shailjayadav7275@gmail.com">
                      <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-gray-400"></p>
                    </div>
                    </a>
                  </div>
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-colors">
                    <Target className="w-6 h-6 text-purple-400" />
                    <div>
                      <p className="text-white font-medium">Location</p>
                      <p className="text-gray-400">India </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Connect With Me</CardTitle>
                  <CardDescription className="text-gray-400">
                    Follow me on social media for updates and insights
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {[
                      {
                        icon: Github,
                        href: "https://github.com/shailjayadav30",
                        color: "hover:text-gray-400",
                      },
                      {
                        icon: Linkedin,
                        href: "https://www.linkedin.com/in/shailja-yadav-643853252/",
                        color: "hover:text-blue-400",
                      },
                      {
                        icon: Twitter,
                        href: "https://x.com/Shailja5911",
                        color: "hover:text-blue-400",
                      },
                      {
                        icon: Mail,
                        href: "mailto:shailjayadav7275@gmail.com",
                        color: "hover:text-purple-400",
                      },
                    ].map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="icon"
                        className={`border-gray-600 text-gray-400 ${social.color} transform hover:scale-110 transition-all duration-300`}
                        asChild
                      >
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <social.icon className="w-5 h-5" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

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
