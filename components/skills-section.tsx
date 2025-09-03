import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Palette,
  Code,
  Figma,
  Search,
  Layers,
  Smartphone,
  Monitor,
  Users,
  Zap,
  Target,
  Brush,
  Database,
} from "lucide-react"

const technicalSkills = [
  { name: "React", level: 90, icon: Code, color: "bg-blue-100 text-blue-700" },
  { name: "Java", level: 85, icon: Code, color: "bg-indigo-100 text-indigo-700" },
  { name: "Sass", level: 88, icon: Brush, color: "bg-cyan-100 text-cyan-700" },
  { name: "Python", level: 80, icon: Code, color: "bg-green-100 text-green-700" },
  { name: "Boostrap", level: 80, icon: Code, color: "bg-orange-100 text-orange-700" },
]

const designSkills = [
  { name: "UI/UX Design", level: 95, icon: Palette, color: "bg-pink-100 text-pink-700" },
  { name: "Figma & Adobe XD", level: 92, icon: Figma, color: "bg-purple-100 text-purple-700" },
  { name: "User Research", level: 80, icon: Search, color: "bg-orange-100 text-orange-700" },
  { name: "AI website Builder", level: 88, icon: Layers, color: "bg-teal-100 text-teal-700" },
  { name: "Midjourney & Dalle ", level: 80, icon: Database, color: "bg-green-100 text-green-700" },
]

const tools = [
  "Figma",
  "Adobe Creative Suite",
  "Sketch",
  "Tensorflow",
  "Keras",
  "React",
  "Vscode",
  "Bootstrap",
  "Git",
  "Canva",
  "Excel",
]

const specializations = [
  { icon: Smartphone, title: "Mobile First", desc: "Responsive design" },
  { icon: Monitor, title: "Web Apps", desc: "Complex interfaces" },
  { icon: Users, title: "User Research", desc: "Data-driven design" },
  { icon: Zap, title: "Performance", desc: "Optimized experiences" },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-manrope text-3xl font-bold text-foreground mb-3">Skills & Expertise</h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Comprehensive toolkit for creating exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="font-manrope text-xl font-semibold text-foreground flex items-center gap-2">
              <Code className="w-5 h-5 text-primary" />
              Technical Skills
            </h3>
            <div className="space-y-3">
              {technicalSkills.map((skill, index) => {
                const IconComponent = skill.icon
                return (
                  <Card
                    key={index}
                    className="p-4 hover:shadow-md transition-all duration-300 hover:scale-[1.02] bg-card border-border"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${skill.color}`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="font-medium text-card-foreground text-sm">{skill.name}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {skill.level}%
                      </Badge>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-manrope text-xl font-semibold text-foreground flex items-center gap-2">
              <Palette className="w-5 h-5 text-primary" />
              Design Skills
            </h3>
            <div className="space-y-3">
              {designSkills.map((skill, index) => {
                const IconComponent = skill.icon
                return (
                  <Card
                    key={index}
                    className="p-4 hover:shadow-md transition-all duration-300 hover:scale-[1.02] bg-card border-border"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${skill.color}`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="font-medium text-card-foreground text-sm">{skill.name}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {skill.level}%
                      </Badge>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>

          <div className="space-y-6">
            {/* Specializations */}
            <div>
              <h3 className="font-manrope text-xl font-semibold text-foreground flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-primary" />
                Specializations
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {specializations.map((spec, index) => {
                  const IconComponent = spec.icon
                  return (
                    <Card
                      key={index}
                      className="p-3 text-center hover:shadow-md transition-all duration-300 hover:scale-[1.02] bg-card border-border"
                    >
                      <IconComponent className="w-6 h-6 text-primary mx-auto mb-2" />
                      <h4 className="font-medium text-card-foreground text-sm mb-1">{spec.title}</h4>
                      <p className="text-xs text-muted-foreground">{spec.desc}</p>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="font-manrope text-xl font-semibold text-foreground mb-4">
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="px-3 py-1 hover:bg-secondary hover:text-secondary-foreground transition-colors cursor-default"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
