import { Github, Linkedin, Mail, Send, Target, Twitter, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Label } from "@radix-ui/react-label"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { useState } from "react"
import emailjs from "@emailjs/browser"



const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
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

  return (
    <div>
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

    </div>
  )
}

export default ContactSection
