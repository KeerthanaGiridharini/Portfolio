"use client";

import type React from "react";

import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechFlow Solutions",
    content:
      "Keerthana is an exceptional UI/UX developer who consistently delivers outstanding results. Her attention to detail and user-centric approach has significantly improved our product's user experience.",
    rating: 5,
    avatar:
      "https://i.pinimg.com/736x/6f/a3/6a/6fa36aa2c367da06b2a4c8ae1cf9ee02.jpg",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    company: "Digital Innovations Inc.",
    content:
      "Working with Keerthana was a game-changer for our startup. She transformed our complex ideas into intuitive, beautiful interfaces that our users absolutely love. Highly recommended!",
    rating: 5,
    avatar:
      "https://i.pinimg.com/736x/89/4e/16/894e16749bb2800527958cf7813b998e.jpg",
  },
  {
    name: "Emily Rodriguez",
    role: "Design Director",
    company: "Creative Agency",
    content:
      "Keerthana brings the perfect blend of design expertise and technical skills. Her ability to bridge the gap between design and development is truly remarkable.",
    rating: 5,
    avatar:
      "https://i.pinimg.com/736x/5a/ac/66/5aac6619a8b81993b10be58fbded3951.jpg",
  },
  {
    name: "David Kumar",
    role: "Founder",
    company: "StartupHub",
    content:
      "From day one, Keerthana showed incredible dedication and skill. She not only met our expectations but exceeded them with innovative solutions and flawless execution.",
    rating: 5,
    avatar:
      "https://i.pinimg.com/736x/d9/7f/aa/d97faa4ca82603ea39b68b534f63b89a.jpg",
  },
  {
    name: "Lisa Thompson",
    role: "UX Researcher",
    company: "User Insights Co.",
    content:
      "Keerthana's collaborative approach and deep understanding of user psychology make her an invaluable team member. She consistently delivers designs that users find intuitive and engaging.",
    rating: 5,
    avatar: "/professional-headshot-of-lisa-thompson.png",
  },
  {
    name: "Alex Martinez",
    role: "Frontend Lead",
    company: "WebTech Solutions",
    content:
      "As a developer, I appreciate how Keerthana creates designs that are not only beautiful but also technically feasible. Her code is clean, efficient, and maintainable.",
    rating: 5,
    avatar: "/professional-headshot-of-alex-martinez.png",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(199,238,255,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,119,192,0.05),transparent_50%)]"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Client Testimonials
          </div>
          <h2 className="font-manrope text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
            Trusted by Amazing Teams
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8 text-pretty">
            Collaborating with talented professionals and innovative companies
            to create exceptional user experiences that drive results and
            delight users.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-6xl mx-auto">
          {/* Large Left Card */}
          <div className="bg-card/90 backdrop-blur-sm p-8 rounded-2xl flex flex-col justify-between border border-border/50 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
            <div className="mb-8">
              {/* Company Logo Placeholder */}
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-primary" />
                </div>
              </div>
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[0].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-base sm:text-lg lg:text-xl text-card-foreground leading-relaxed mb-8 italic">
                "{testimonials[0].content}"
              </p>
            </div>
            <div className="flex items-center">
              <img
                src={testimonials[0].avatar || "/placeholder.svg"}
                alt={testimonials[0].name}
                className="w-12 h-12 rounded-full object-cover mr-4"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  (e.target as HTMLImageElement).onerror = null;
                  (e.target as HTMLImageElement).src =
                    "/placeholder.svg?height=48&width=48";
                }}
              />
              <div>
                <p className="font-semibold text-card-foreground">
                  {testimonials[0].name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[0].role} at {testimonials[0].company}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column for Testimonials */}
          <div className="flex flex-col gap-6">
            {/* Large Right Card */}
            <div className="bg-card/90 backdrop-blur-sm p-8 rounded-2xl flex flex-col justify-between border border-border/50 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[1].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-base sm:text-lg lg:text-xl text-card-foreground leading-relaxed mb-8 italic">
                "{testimonials[1].content}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonials[1].avatar || "/placeholder.svg"}
                  alt={testimonials[1].name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  onError={(
                    e: React.SyntheticEvent<HTMLImageElement, Event>
                  ) => {
                    (e.target as HTMLImageElement).onerror = null;
                    (e.target as HTMLImageElement).src =
                      "/placeholder.svg?height=48&width=48";
                  }}
                />
                <div>
                  <p className="font-semibold text-card-foreground">
                    {testimonials[1].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[1].role} at {testimonials[1].company}
                  </p>
                </div>
              </div>
            </div>

            {/* Small Cards Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Small Card 1 */}
              <div className="bg-card/90 backdrop-blur-sm p-6 rounded-2xl flex flex-col justify-between border border-border/50 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[2].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-card-foreground leading-relaxed mb-6 italic">
                  "{testimonials[2].content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonials[2].avatar || "/placeholder.svg"}
                    alt={testimonials[2].name}
                    className="w-10 h-10 rounded-full object-cover mr-3"
                    onError={(
                      e: React.SyntheticEvent<HTMLImageElement, Event>
                    ) => {
                      (e.target as HTMLImageElement).onerror = null;
                      (e.target as HTMLImageElement).src =
                        "/placeholder.svg?height=40&width=40";
                    }}
                  />
                  <div>
                    <p className="font-semibold text-card-foreground">
                      {testimonials[2].name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[2].role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Small Card 2 */}
              <div className="bg-card/90 backdrop-blur-sm p-6 rounded-2xl flex flex-col justify-between border border-border/50 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[3].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-card-foreground leading-relaxed mb-6 italic">
                  "{testimonials[3].content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonials[3].avatar || "/placeholder.svg"}
                    alt={testimonials[3].name}
                    className="w-10 h-10 rounded-full object-cover mr-3"
                    onError={(
                      e: React.SyntheticEvent<HTMLImageElement, Event>
                    ) => {
                      (e.target as HTMLImageElement).onerror = null;
                      (e.target as HTMLImageElement).src =
                        "/placeholder.svg?height=40&width=40";
                    }}
                  />
                  <div>
                    <p className="font-semibold text-card-foreground">
                      {testimonials[3].name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[3].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
