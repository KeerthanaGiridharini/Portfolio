import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Send,
  MessageCircle,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4" />
            Let's Connect
          </div>
          <h2 className="font-manrope text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'd love to hear from you! Whether you have a project in mind or
            just want to chat about design.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information - Compact Cards */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="font-manrope text-xl font-bold text-foreground mb-4">
              Quick Contact
            </h3>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-colors">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground text-sm">
                      Email
                    </p>
                    <p className="text-muted-foreground text-sm">
                      kgiridharini@gmail.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-colors">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground text-sm">
                      Phone
                    </p>
                    <p className="text-muted-foreground text-sm">
                      +94 766353739
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-colors">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground text-sm">
                      Location
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Moratuwa,Sri Lanka
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="pt-4">
              <h4 className="font-semibold text-foreground mb-3 text-sm">
                Follow Me
              </h4>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/keerthana-giridharini/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/KeerthanaGiridharini"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <Card className="bg-card/30 backdrop-blur-sm border-border/50 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="font-manrope text-xl flex items-center gap-2">
                  <Send className="w-5 h-5 text-primary" />
                  Send Me a Message
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  I'll get back to you within 24 hours!
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Name *
                    </label>
                    <Input
                      placeholder="Your name"
                      className="bg-input border-border focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Email *
                    </label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-input border-border focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <Input
                    placeholder="What's this about?"
                    className="bg-input border-border focus:border-primary focus:ring-primary/20"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Message *
                  </label>
                  <Textarea
                    placeholder="Tell me about your project or just say hello!"
                    rows={4}
                    className="bg-input border-border focus:border-primary focus:ring-primary/20 resize-none"
                  />
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 transition-all duration-300 hover:scale-[1.02] flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>

                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Usually responds within 24 hours
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-12 p-6 bg-primary/5 rounded-2xl border border-primary/10">
          <h3 className="font-manrope text-lg font-bold text-foreground mb-2">
            Ready to Start Your Project?
          </h3>
          <p className="text-muted-foreground text-sm mb-4">
            Let's discuss how we can bring your ideas to life with exceptional
            design.
          </p>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            Schedule a Call
          </Button>
        </div>
      </div>
    </section>
  );
}
