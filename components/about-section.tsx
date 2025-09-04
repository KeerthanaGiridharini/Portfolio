"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Quote,
  Download,
  ExternalLink,
  Award,
  Users,
  Coffee,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-base font-medium text-primary">
              Get to know me
            </span>
          </div>
          <h2 className="font-manrope text-3xl font-bold text-foreground mb-3">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            {/* Profile Image with enhanced styling */}
            <div className="relative group">
              <div className="aspect-square max-w-md mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/20 to-primary/5 p-2">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-secondary/30 to-primary/20 p-6">
                  <img
                    src="/my.png"
                    alt="Keerthana - UI/UX Developer"
                    className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-3 rounded-2xl shadow-lg border-4 border-background">
                <Award className="w-6 h-6 mb-1" />
                <div className="text-lg font-bold">3+</div>
                <div className="text-lg">Years</div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground p-3 rounded-2xl shadow-lg border-4 border-background">
                <Users className="w-6 h-6 mb-1" />
                <div className="text-lg font-bold">20+</div>
                <div className="text-lg">Projects</div>
              </div>
            </div>

            <Card className="p-6 bg-gradient-to-br from-secondary/10 to-primary/5 border-secondary/20">
              <div className="flex items-start gap-4">
                <Quote className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <blockquote className="text-base font-medium text-foreground mb-2 italic">
                    "Great design isn't just about aesthetics—it's about solving
                    real problems and making people's lives easier."
                  </blockquote>
                  <cite className="text-base text-muted-foreground">
                    — My Design Philosophy
                  </cite>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-8 text-base ">
            <div className="space-y-6">
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                <p className="text-base text-foreground font-medium">
                  I am a motivated and enthusiastic software engineering first
                  class graduate with a strong foundation in programming,
                  problem-solving, and modern technologies. My academic and
                  project experience has allowed me to design intelligent
                  applications, work with AI-driven solutions, and create
                  user-centered systems.
                </p>
                <p className="text-base">
                  I am committed to continuous learning and professional growth,
                  with the ambition to contribute to innovative projects that
                  combine technical precision with real-world impact.
                </p>
              </div>

              <div className="space-y-3 ">
  <h3 className="text-lg font-semibold text-foreground">
    Core Expertise
  </h3>
  <div className="flex flex-wrap justify-left gap-3">
    {[
      "UI/UX Design",
      "Frontend Development",
      "XAI",
      "Deep Learning",
      "Machine Learning",
      "React",
      "Bootstrap",
      "Adobe Creative Suite",
      "Analytics"
    ].map((skill) => (
      <Badge
        key={skill}
        variant="secondary"
        className="px-2.5 py-0.5 bg-secondary/20 text-secondary-foreground hover:bg-secondary/30 transition-colors text-xs"
      >
        {skill}
      </Badge>
    ))}
  </div>
</div>

            </div>

            <div className="grid grid-cols-3 gap-4">
              <Card className="p-4 text-center bg-gradient-to-br from-primary/5 to-secondary/10 border-primary/20 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-1">20+</div>
                <div className="text-lg text-muted-foreground">Projects</div>
              </Card>
              <Card className="p-4 text-center bg-gradient-to-br from-secondary/10 to-primary/5 border-secondary/20 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-1">10+</div>
                <div className="text-lg text-muted-foreground">
                  Happy Clients
                </div>
              </Card>
              <Card className="p-4 text-center bg-gradient-to-br from-primary/5 to-secondary/10 border-primary/20 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-1">100+</div>
                <div className="text-lg text-muted-foreground">
                  Coffee Lover
                </div>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 ">
  <Button
    className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 text-base"
    onClick={() => {
      const link = document.createElement("a");
      link.href = "/cv/CV.pdf";
      link.download = "Keerthana_Giridharini_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }}
  >
    <Download className="w-4 h-4 mr-2" />
    Download Resume
  </Button>
  <Button
    variant="outline"
    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-5 py-2.5 rounded-lg font-medium transition-all duration-300 bg-transparent text-base"
  >
    <ExternalLink className="w-4 h-4 mr-2" />
    Get In Touch
  </Button>
</div>

          </div>
        </div>
      </div>
    </section>
  );
}
