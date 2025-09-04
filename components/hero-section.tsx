"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";
import DarkVeil from "@/components/dark-veil";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-16 md:pt-0">

      {/* Blue ray animation */}
      
      <div className="absolute inset-0 w-full h-full"
        style={{ background: 'radial-gradient(circle at center, #e0f7ff, #ffffff)' }}>
      {/* Aurora Gradient Animation */}
<div className="absolute inset-0 overflow-hidden">
  <div className="aurora"></div>
</div>

      
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-20 right-20 w-32 h-32 border border-primary/20 rounded-full animate-pulse"></div>
          <div
            className="absolute bottom-32 left-16 w-24 h-24 bg-secondary/30 rounded-lg rotate-12 animate-bounce"
            style={{ animationDuration: "3s" }}
          ></div>
          <div
            className="absolute top-1/3 left-1/4 w-16 h-16 border-2 border-accent/30 rounded-full animate-spin"
            style={{ animationDuration: "15s" }}
          ></div>
          <div className="absolute bottom-1/4 right-1/3 w-20 h-20 bg-primary/10 rounded-full animate-pulse delay-1000"></div>

          <div
            className="absolute top-1/2 right-1/4 w-12 h-12 bg-primary/20 rounded-full animate-ping"
            style={{ animationDuration: "2s" }}
          ></div>
          <div
            className="absolute top-3/4 left-1/3 w-8 h-8 border border-secondary/40 rounded-lg animate-bounce delay-500"
            style={{ animationDuration: "2.5s" }}
          ></div>
          <div
            className="absolute top-1/4 right-1/2 w-6 h-6 bg-accent/30 rounded-full animate-pulse delay-700"
            style={{ animationDuration: "3.5s" }}
          ></div>
        </div>

        <div
          className="absolute inset-0 opacity-5 animate-pulse"
          style={{ animationDuration: "6s" }}
        >
          <div
            className="w-full h-full animate-pulse"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
              animationDuration: "8s",
            }}
          ></div>
        </div>

        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full animate-bounce"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + (i % 2)}s`,
              }}
            ></div>
            
          ))}
        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 opacity-10">
          <div
            className="w-full h-full bg-gradient-to-t from-primary/20 to-transparent animate-pulse"
            style={{ animationDuration: "5s" }}
          ></div>
        </div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-primary/20 mb-6">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">
            UI/UX Developer
          </span>
        </div>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-primary/20 mb-6">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">
            AI/ML Research Enthusiastic
          </span>
        </div>

        {/* Main heading - more compact */}
        <h1 className="font-sans text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance text-foreground leading-tight">
          Crafting Intuitive
          <span className="block text-primary">Digital Experiences</span>
        </h1>

        {/* Subheading - more concise */}
        <p className="text-lg md:text-xl mb-8 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Hi, I'm <span className="text-primary font-semibold">Keerthana</span>{" "}
          — transforming complex ideas into user-friendly interfaces that drive
          engagement and deliver results.
        </p>

        {/* Skills highlight - compact */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {[
            "User Research",
            "Interface Design",
            "Frontend Development",
            "AI/ML Research",
            "Graphic & Visual",
            "Analytics",
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-sm bg-secondary/30 text-secondary-foreground rounded-full border border-primary/20"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* CTA buttons - more compact spacing */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <Button
            size="lg"
            className="px-6 py-3 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-6 py-3 text-base font-medium border-primary/30 hover:bg-primary hover:!text-white hover:!border-blue-500 bg-transparent transition-all duration-300"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Let's Collaborate
          </Button>
        </div>

        {/* Quick stats - compact */}
        <div className="flex justify-center gap-8 text-sm text-muted-foreground">
          <div className="text-center">
            <div className="font-semibold text-foreground">3+</div>
            <div>Years Experience</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-foreground">20+</div>
            <div>Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-foreground">100%</div>
            <div>Client Satisfaction</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <ArrowDown className="w-5 h-5 text-primary" />
        </div>
      </div>
    </section>
  );
}
