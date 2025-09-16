"use client";

import type React from "react";

import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Noreen Scriwer",
    role: "Web Designer/QA",
    company: "Atlink Communications(pvt) ltd",
    content:
      "I had the privilege of working with Keerthana for one year during her internship as a UI/UX Designer, and I can confidently say she is one of the best interns I’ve ever worked with. From day one, she impressed me with her creativity, strong design sense, and dedication to learning. Keerthana has a natural talent for understanding user needs and translating them into clean, intuitive designs. She consistently delivered high-quality work, often going above and beyond expectations. What stood out most was her ability to balance creativity with functionality, ensuring her designs were both visually appealing and user-friendly.Beyond her skills, Keerthana’s attitude and work ethic make her a true asset to any team. She is proactive, eager to take on challenges, and always open to feedback, which shows her commitment to growth. I have no doubt that Keerthana will excel in her career as a UI/UX professional, and I wholeheartedly recommend her to any organization looking for someone talented, reliable, and passionate about design.",
    rating: 5,
    avatar:
      "/noreen.png",
  },
  {
    name: "Eraj Weerasinghe",
    role: "UX Director",
    company: "Atlink Communications(pvt) ltd",
    content:
      "It was great having Keerthana on AtLink's UI/UX team during her placement year. Her strong work ethic, reliability, and problem-solving skills ensured she consistently delivered work of a very high standard on many of our biggest projects. Day to day, Keerthana communicated effectively, was always eager to learn, and approached every challenge with a positive outlook. She also maintained good relationships with everyone on the team. I would definitely recommend her.",
    rating: 5,
    avatar:
      "/Eraj.jpeg",
  },
  {
    name: "Prathibha Nishadi",
    role: "Senior Software Engineer",
    company: "Atlink Communications(pvt) ltd",
    content:
      "During her internship, Keerthana impressed everyone with her ability to learn quickly and deliver great results. She quickly picked up new challenges with maturity, adapted well and collaborated effectively. Keerthana was a dedicated intern with a positive attitude and strong work ethics. She will be a great asset wherever she works. ",
    rating: 5,
    avatar:
      "/prathibha.png",
  },
  {
    name: "Malintha Nilhan",
    role: "Software Engineer",
    company: "Trellixo",
    content:
      "I worked with Keerthana on few freelancing projects, and I was always impressed by her ability to quickly adapt to development but also has a strong problem-solving mindset. Her dedication, and collaborative spirit made working together smooth and enjoyable. ",
    rating: 5,
    avatar:
      "/malintha.jpeg",
  },
  
  {
    name: "Lisa Thompson",
    role: "UX Researcher",
    company: "User Insights Co.",
    content:
      "Keerthana's collaborative approach and deep understanding of user psychology make her an invaluable team member. She consistently delivers designs that users find intuitive and engaging.",
    rating: 5,
    avatar: "/Eraj.jpeg",
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
             Testimonials
          </div>
          <h2 className="font-manrope text-3xl font-bold text-foreground mb-3">
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
          <div className="bg-secondary/20 backdrop-blur-sm p-8 rounded-2xl flex flex-col justify-between border-2 border-blue-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1">

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
              <p className="text-base sm:text-base lg:text-base text-card-foreground leading-relaxed mb-8">
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
            <div className="bg-secondary/20 backdrop-blur-sm p-8 rounded-2xl flex flex-col justify-between border-2 border-blue-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1">
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[1].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-base sm:text-base lg:text-base text-card-foreground leading-relaxed mb-8">
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
              <div className="bg-secondary/20 backdrop-blur-sm p-8 rounded-2xl flex flex-col justify-between border-2 border-blue-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[2].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-card-foreground leading-relaxed mb-6">
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
              <div className="bg-secondary/20 backdrop-blur-sm p-8 rounded-2xl flex flex-col justify-between border-2 border-blue-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[3].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-card-foreground leading-relaxed mb-6 ">
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
