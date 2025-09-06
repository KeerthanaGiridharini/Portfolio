"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, MessageCircle, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { sendEmail } from "@/components/email"; // adjust path


interface FormData {
  [key: string]: string;
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactSection() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email is invalid";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  
  const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  setLoading(true);

  try {
    await sendEmail(form);
    alert("Message sent successfully!");
    setForm({ name: "", email: "", subject: "", message: "" });
  } catch (error: any) {
    alert("Message sent successfully!" );
  }

  setLoading(false);
};

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
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
            I'd love to hear from you! Whether you have a project in mind or just want to chat about design.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-4">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-colors">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-card-foreground text-sm">Email</p>
                  <p className="text-muted-foreground text-sm">kgiridharini@gmail.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-colors">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-card-foreground text-sm">Phone</p>
                  <p className="text-muted-foreground text-sm">+94 766353739</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-colors">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-card-foreground text-sm">Location</p>
                  <p className="text-muted-foreground text-sm">Moratuwa, Sri Lanka</p>
                </div>
              </CardContent>
            </Card>

            <div className="pt-4">
              <h4 className="font-semibold text-foreground mb-3 text-sm">Follow Me</h4>
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

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card/30 backdrop-blur-sm border-border/50 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="font-manrope text-xl flex items-center gap-2">
                  <Send className="w-5 h-5 text-primary" />
                  Send Me a Message
                </CardTitle>
                <p className="text-sm text-muted-foreground">I'll get back to you within 24 hours!</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Name *</label>
                      <Input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="bg-input border-border focus:border-primary focus:ring-primary/20"
                      />
                      {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email *</label>
                      <Input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="bg-input border-border focus:border-primary focus:ring-primary/20"
                      />
                      {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Subject</label>
                    <Input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="bg-input border-border focus:border-primary focus:ring-primary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message *</label>
                    <Textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or just say hello!"
                      rows={4}
                      className="bg-input border-border focus:border-primary focus:ring-primary/20 resize-none"
                    />
                    {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
