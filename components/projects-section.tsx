import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star, Calendar, Users } from "lucide-react";

const projects = [
  {
    title:
      "Cholecheck - XAI Based Gallbladder Disease Detection & Classification",
    description:
      "A deep learning–based multi-class classification system for diagnosing gallbladder diseases using ultrasound images with XAI",
    image: "/fyp1.png",
    technologies: ["React", "Deep learning", "XAI", "Flask"],
    liveUrl: "https://github.com/KeerthanaGiridharini/Cholecheck.github.io",
    githubUrl: "https://github.com/KeerthanaGiridharini/Cholecheck.github.io",
    featured: true,
    category: "Web Application",

    highlights: [
      "Real-time Analytics",
      "Inventory Management",
      "User Insights",
    ],
  },
  {
    title: "Ethical Eye - Deepfake Detection Mobile Application",
    description:
      "An AI-powered application designed to detect and prevent deepfake content using advanced machine learning techniques.",
    image: "/ethical.png",
    technologies: ["Flutter", "Deep learning", "GANs"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "Mobile Application",

    highlights: ["Appointment Scheduling", "Medical Records", "Telemedicine"],
  },
  {
    title: "Tourism Guide in Sri Lanka & Booking System",
    description:
      "A web application for exploring Sri Lanka with integrated tour planning and booking features.",
    image: "/travel.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://github.com/KeerthanaGiridharini/Pixel",
    githubUrl: "https://github.com/KeerthanaGiridharini/Pixel",
    featured: true,
    category: "Web Application",
    highlights: ["Budget Tracking", "Investment Analysis", "Goal Setting"],
  },
  {
    title: "iExam - Online Examination Monitoring System",
    description:
      "An online examination monitoring system with real-time proctoring, secure login, and warning alerts.",
    image: "/exam.png",
    technologies: ["React", "Firebase", "Machinelearning"],
    liveUrl: "https://github.com/Aparna-Indeewari/DreamEpicWeb",
    githubUrl: "https://github.com/Aparna-Indeewari/DreamEpicWeb",
    featured: false,
    category: "Web Application",
    duration: "5 months",
    team: "5 members",
    highlights: ["Course Management", "Progress Tracking"],
  },
  {
    title: "Foodie - Meal Preparation & Recipe App",
    description:
      "A meal preparation app that retrieves recipe data from an API and stores it in a database for easy access and planning.",
    image: "/meal.png",
    technologies: ["Kotlin", "Photoshop"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Mobile Application",
    duration: "6 months",
    team: "7 members",
    highlights: ["Advanced Search Filters", "Virtual Tours"],
  },
  {
    title: "Dice Roller - Mobile Game Application",
    description:
      "An interactive dice roller game where a human competes against the computer for the highest score.",
    image: "/dice.png",
    technologies: ["Kotlin", "Photoshop"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Mobile Application",
    duration: "4 months",
    team: "4 members",
    highlights: ["Engagement Metrics", "Content Scheduling"],
  },
  {
    title: "COCO (Vetrinary Care Application)",
    description:
      "A team work done within 24h, providing easy access to veterinary care services, pet health tracking, and appointment bookings",
    image: "/coco.png",
    technologies: ["Figma", "Photoshop", "UI/UX", "User Research"],
    liveUrl:
      "https://www.figma.com/design/VWlrjtoL5VjFL9vn9j1TJ2/COCO-APP---Codefest?node-id=102-2&t=5CeJvtKV0HsYGYk0-1",
    githubUrl:
      "https://www.figma.com/design/VWlrjtoL5VjFL9vn9j1TJ2/COCO-APP---Codefest?node-id=102-2&t=5CeJvtKV0HsYGYk0-1",
    featured: true,
    category: "UI/UX Design",

    highlights: [
      "Real-time Analytics",
      "Inventory Management",
      "User Insights",
    ],
  },

  {
    title: "Goods Transport Application",
    description:
      "A design solution for efficient and safe transportation of goods and logistics.",
    image: "/transport.png",
    technologies: ["Figma", "Photoshop", "UI/UX", "User Research"],
    liveUrl:
      "https://www.figma.com/design/3yIC0k8Zqd9JlWPhgPcVMZ/Transportation-App?node-id=0-1&t=VYhfo9AJLNoYH5bW-1",
    githubUrl:
      "https://www.figma.com/design/3yIC0k8Zqd9JlWPhgPcVMZ/Transportation-App?node-id=0-1&t=VYhfo9AJLNoYH5bW-1",
    featured: true,
    category: "UI/UX Design",

    highlights: [
      "Real-time Analytics",
      "Inventory Management",
      "User Insights",
    ],
  },

  {
    title: "Spark (E-bike Mobile Application)",
    description:
      "A team work done within 24h, innovative electric bike designed for eco-friendly, efficient, and smart urban commuting",
    image: "/spark.png",
    technologies: ["Figma", "Photoshop", "UI/UX", "User Research"],
    liveUrl:
      "https://www.figma.com/design/0kQybsVQWELG18I7CAy8em/Spark?node-id=7-3183&t=2OeAg4ByncbuPfPk-1",
    githubUrl:
      "https://www.figma.com/design/0kQybsVQWELG18I7CAy8em/Spark?node-id=7-3183&t=2OeAg4ByncbuPfPk-1",
    featured: true,
    category: "UI/UX Design",

    highlights: [
      "Real-time Analytics",
      "Inventory Management",
      "User Insights",
    ],
  },
];

export default function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            Featured Work
          </div>
          <h2 className="font-manrope text-3xl font-bold text-foreground mb-3">
            Featured Projects & Designs
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A curated selection of my recent work showcasing development
            expertise and design thinking
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden bg-card border-border hover:border-primary/30 relative"
            >
              <div className="absolute top-4 left-4 z-10">
                <Badge
                  variant="secondary"
                  className="bg-primary/90 text-primary-foreground text-xs font-medium"
                >
                  {project.category}
                </Badge>
              </div>

              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex gap-3"></div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-manrope text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed text-sm line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="text-xs px-2 py-1 bg-secondary/50 text-secondary-foreground border-secondary"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge
                      variant="outline"
                      className="text-xs px-2 py-1 bg-muted text-muted-foreground"
                    >
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>

                <div className="space-y-1">
                  <div className="flex flex-wrap gap-1">
                    <Button
                      size="sm"
                      variant="outline"
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 has-[>svg]:px-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-xl font-medium transition-all duration-300 bg-transparent"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-3 h-3 mr-1" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-px bg-border"></div>
              <h3 className="font-manrope text-2xl font-bold text-foreground">
                Other Notable Projects
              </h3>
              <div className="w-8 h-px bg-border"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 bg-card border-border hover:border-primary/20"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge
                      variant="secondary"
                      className="text-xs bg-card/90 text-card-foreground"
                    >
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-4">
                  <h4 className="font-manrope font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="text-xs px-2 py-0.5 bg-secondary/30 text-secondary-foreground border-secondary/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 text-xs h-8 hover:bg-primary hover:text-primary-foreground hover:border-primary bg-transparent"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-3 h-3 mr-1" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
