import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, TrendingUp, Award } from "lucide-react"

type ExperienceLevel = keyof typeof levelColors;

type Experience = {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  level: ExperienceLevel;
};

const experiences: Experience[] = [
  {
    title: "Trainee UI/UX Engineer",
    company: "Atlink Communications lnc",
    period: "2023 - 2024",
    location: "Remote",
    description: "Designed and developed responsive applications with focus on user experience.",
    achievements: [
      "Increased user engagement by 40% through redesigned medical clinic website interface & worked on live projects",
      "Reduced development time by 30% by creating comprehensive design system",
      "Led UX research initiatives that improved user satisfaction scores by 25%",
      "Created animations & graphics for few projects",
      "Mentored 1 junior in few projects",
    ],
    technologies: ["Boostrap", "Adobe creative suite", "Wix", "Sass", "Drupal", "Wordpress"],
    level: "junior",
  },
  {
    title: "UI/UX Developer",
    company: "Freelancing",
    period: "2022 - Present",
    location: "Colombo, Sri Lanka",
    description: "Worked on several freelance projects, delivering high-quality solutions for diverse clients",
    achievements: [
      "Delivered 10+ successful projects with 98% client satisfaction rate",
      "Implemented responsive design patterns that improved mobile usage by 60%",
      "Worked on few research projects"
    ],
    technologies: ["React", "Kotlin", "Figma", "Google sites", "Bootstrap","Framer"],
    level: "junior",
  },

]

const levelColors = {
  senior: "bg-primary/10 text-primary border-primary/20",
  mid: "bg-accent/20 text-accent-foreground border-accent/30",
  junior: "bg-secondary/30 text-secondary-foreground border-secondary/40",
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-manrope text-3xl font-bold text-foreground mb-3">Work Experience</h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-xl mx-auto">
            My professional journey in creating exceptional digital experiences
          </p>
        </div>

        {/* Timeline layout with connecting lines and timeline dots */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10 hidden md:block">
                  <div className="absolute inset-1 bg-primary/20 rounded-full animate-pulse"></div>
                </div>

                {/* Experience card with timeline connection */}
                <div className="md:ml-16">
                  <Card className="group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 border-border/50 hover:border-primary/20 relative">
                    {/* Timeline connector line for mobile */}
                    <div className="absolute -left-4 top-8 w-4 h-0.5 bg-primary/30 md:hidden"></div>

                    <div className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-manrope text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                              {exp.title}
                            </h3>
                            <Badge className={`text-xs px-2 py-1 ${levelColors[exp.level]}`}>{exp.level}</Badge>
                          </div>
                          <p className="text-primary font-semibold text-lg mb-1">{exp.company}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                          </div>
                        </div>

                        {/* Timeline period badge */}
                        <div className="hidden sm:block">
                          <Badge variant="outline" className="bg-primary/5 border-primary/20 text-primary font-medium">
                            {exp.period}
                          </Badge>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Award className="w-4 h-4 text-primary" />
                          <h4 className="font-semibold text-foreground">Key Achievements</h4>
                        </div>
                        <div className="grid gap-2">
                          {exp.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm">
                              <TrendingUp className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                              <span className="text-muted-foreground">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="text-xs px-2 py-1 hover:bg-primary/10 hover:border-primary/30 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center relative">
          <div className="absolute left-8 -top-4 w-4 h-4 bg-primary/20 rounded-full border-4 border-background hidden md:block"></div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/20">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">3+ Years of Professional Growth</span>
          </div>
        </div>
      </div>
    </section>
  )
}
