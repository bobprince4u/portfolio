"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Palette,
  Smartphone,
  Globe,
  Server,
  ChevronRight,
  Download,
  Moon,
  Sun,
  Home,
  Briefcase,
  MessageSquare,
  Twitter,
  Instagram,
  Youtube,
  ArrowUp,
  Sparkles,
  Zap,
  Star,
  User,
  Target,
  BookOpen,
  Award,
  TrendingUp,
} from "lucide-react";
import { useTheme } from "next-themes";

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const { theme, setTheme } = useTheme();

  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Check visibility for animations
      const sections = {
        hero: heroRef.current,
        about: aboutRef.current,
        skills: skillsRef.current,
        projects: projectsRef.current,
        experience: experienceRef.current,
        contact: contactRef.current,
      };

      Object.entries(sections).forEach(([key, ref]) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const isInView =
            rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
          setIsVisible((prev) => ({ ...prev, [key]: isInView }));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleContactClick = (type: string) => {
    switch (type) {
      case "email":
        toast.success("Email copied to clipboard! princewill9711@gmail.com");
        navigator.clipboard.writeText("princewill9711@gmail.com");
        break;
      case "github":
        toast.success("Opening GitHub profile...");
        window.open("https://github.com", "_blank");
        break;
      case "linkedin":
        toast.success("Opening LinkedIn profile...");
        window.open("https://linkedin.com", "_blank");
        break;
      case "resume":
        toast.success("Resume download started!");
        break;
      default:
        toast.success("Thank you for your interest!");
    }
  };

  const skills = {
    frontend: [
      { name: "React.js", level: 75, icon: Code },
      { name: "TypeScript", level: 40, icon: Code },
      { name: "Tailwind CSS", level: 88, icon: Palette },
      { name: "JavaScript", level: 85, icon: Code },
      { name: "Responsive Design", level: 92, icon: Smartphone },
      { name: "Web Performance", level: 80, icon: Globe },
    ],
    backend: [
      { name: "Node.js", level: 50, icon: Server },
      { name: "Express.js", level: 60, icon: Server },
      { name: "MongoDB", level: 60, icon: Database },
      { name: "REST APIs", level: 75, icon: Code },
      { name: "Authentication", level: 65, icon: Server },
      { name: "Deployment", level: 70, icon: Globe },
      { name: "AWS3", level: 65, icon: Globe },
    ],
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      frontend: true,
      backend: true,
      link: "#",
      github: "#",
    },
    {
      title: "Luxury Short-let Website",
      description:
        "A modern full-stack luxury shortlet, mid and longlet rental platform with property listings, image uploads (via AWS S3), and a secure admin dashboard for property management.",
      tech: [
        "React.js",
        "Express.js",
        "JavaScript",
        "Tailwind CSS",
        "MongoDb",
        "AWS3",
      ],
      frontend: true,
      backend: true,
      link: "#",
      github: "#https://github.com/bobprince4u/grace-court",
    },
    {
      title: "Do-not-buy",
      description:
        "do-not-buy is a web and iOS application designed to help users in Nigeria verify the safety of purchasing used smartphones by checking if the device is listed as stolen.... Served as frontend developer and API integration specialist. Consumed RESTful APIs and integrated backend services with frontend interface, Collaborated with backend team to ensure seamless data flow and Implemented responsive design patterns for optimal user experience",
      tech: ["HTML", "JavaScript", "CSS", "Python", "SQLite3"],
      frontend: true,
      backend: true,
      link: "#https://do-not-buy.vercel.app/",
      github: "#https://github.com/Odewale-Emmanuel/do-not-buy",
    },
    {
      title: "Hospital Dashboard | Technical Assessment",
      description:
        "Built responsive healthcare dashboard with real-time data visualization and intuitive UI for healthcare professionals",
      tech: ["React", "JavaScript", "Tailwind CSS", "GraphQl", ""],
      frontend: true,
      backend: false,
      link: "#",
      github: "#",
    },
  ];

  const experience = [
    {
      title: "IT Support Executive",
      company: "DM Holdings.",
      period: "2024 - Present",
      description:
        "Lead frontend development for enterprise applications using React and Next.js. Improved application performance by 40% through optimization.",
      type: "IT",
    },
    {
      title: "ICT/Data Processing Teacher",
      company: "Digital Agency",
      period: "2021 - 2022",
      description:
        "Designed and delivered comprehensive curriculum on computer applications and data processing, Provided technical support and troubleshooting assistance to faculty and students, Maintained computer laboratory infrastructure and managed IT resources and Mentored students in programming fundamentals and digital literacy.",
      type: "ICT",
    },
    {
      title: "Computer Teacher (NYSC Service Year)",
      company: "Faan Staff Secondary School | Kano, Nigeria",
      period: "June 2022 – May 2023",
      description:
        "Taught computer basics and advanced IT concepts to secondary school students, Maintained and troubleshot IT infrastructure and laboratory equipment, Developed practical exercises to enhance student understanding of technology and Supported school-wide technology initiatives and digital transformation efforts.",
      type: "",
    },
    {
      title: "IT Personnel",
      company: "Gateway Computer Institutes | Kano, Nigeria",
      period: "October 2016 – January 2018",
      description:
        "Analyzed user requirements and implemented tailored computer-based solutions, Provided comprehensive IT support and technical troubleshooting, Trained users on software applications and computer systems and Maintained hardware and software inventory.",
      type: "IT",
    },
  ];
  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 text-foreground relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 dark:bg-yellow-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50 transition-all duration-300 ${
          scrollY > 50 ? "py-2 shadow-lg" : "py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Princewill
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection(heroRef)}
              className="hover:text-primary transition-colors"
            >
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection(aboutRef)}
              className="hover:text-primary transition-colors"
            >
              <User className="h-4 w-4 mr-2" />
              About
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection(projectsRef)}
              className="hover:text-primary transition-colors"
            >
              <Briefcase className="h-4 w-4 mr-2" />
              Projects
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection(contactRef)}
              className="hover:text-primary transition-colors"
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Contact
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:bg-primary/10 transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 hover:bg-primary hover:text-primary-foreground transition-all"
              onClick={() => handleContactClick("resume")}
            >
              <Download className="h-4 w-4" />
              Resume
            </Button>
          </div>
        </div>
      </nav>

      {/* Scroll to Top Button */}
      {scrollY > 300 && (
        <Button
          variant="outline"
          size="icon"
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 rounded-full shadow-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 animate-bounce"
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      )}

      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`pt-32 pb-20 px-4 relative z-10 transition-all duration-1000 ${
          isVisible.hero
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 p-1 animate-pulse shadow-2xl">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center backdrop-blur-sm">
                <Code className="w-16 h-16 text-primary animate-pulse" />
              </div>
            </div>
            <div className="relative">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                  Princewill
                </span>
              </h1>
              <div className="absolute -top-2 -right-2 hidden md:block">
                <Sparkles className="w-8 h-8 text-yellow-500 animate-spin" />
              </div>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 flex items-center justify-center gap-2">
              Full Stack Developer
              <Zap className="w-5 h-5 text-yellow-500 animate-pulse" />
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Passionate software developer with 3 years of frontend expertise
              and growing backend skills. I create beautiful, functional web
              applications that deliver exceptional user experiences.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="gap-2 bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                onClick={() => handleContactClick("email")}
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                onClick={() => handleContactClick("github")}
              >
                <Github className="h-4 w-4" />
                GitHub
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                onClick={() => handleContactClick("linkedin")}
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section
        ref={aboutRef}
        className={`py-20 px-4 relative z-10 transition-all duration-1000 ${
          isVisible.about
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <User className="w-5 h-5 text-primary" />
              <p className="text-lg">Get to know me better</p>
              <User className="w-5 h-5 text-primary" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Professional Bio */}
            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 border-primary/20">
              <CardHeader className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardTitle className="flex items-center gap-2 relative z-10">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Professional Bio
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm a passionate software developer with a keen eye for detail
                  and a love for creating elegant, user-friendly applications.
                  My journey in tech began with a curiosity about how things
                  work on the web, which evolved into a dedicated career focused
                  on frontend development.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I thrive on solving complex problems and turning ideas into
                  reality through clean, efficient code. My approach combines
                  technical expertise with creative problem-solving, ensuring
                  that every project I work on is both functional and delightful
                  to use.
                </p>
              </CardContent>
            </Card>

            {/* Career Goals */}
            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 border-primary/20">
              <CardHeader className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardTitle className="flex items-center gap-2 relative z-10">
                  <Target className="h-5 w-5 text-primary" />
                  Career Goals
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Currently, I'm focused on transitioning from frontend
                  specialist to a well-rounded full-stack developer. I'm
                  actively expanding my backend skills to complement my strong
                  frontend foundation, with the goal of becoming proficient in
                  end-to-end application development.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My ambition is to lead development teams and architect
                  scalable, innovative solutions that make a meaningful impact.
                  I'm particularly interested in modern web technologies, cloud
                  architecture, and building applications that solve real-world
                  problems.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Experience Summary */}
          <Card className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Experience Summary
                <TrendingUp className="h-5 w-5 text-primary" />
              </CardTitle>
              <CardDescription>
                A comprehensive overview of my technical expertise and
                professional growth
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Frontend Experience */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Palette className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary">
                      Frontend Development
                    </h3>
                    <Badge
                      variant="secondary"
                      className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0"
                    >
                      3 Years
                    </Badge>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Code className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">React & JavaScript</p>
                        <p className="text-sm text-muted-foreground">
                          Expert in building modern, responsive web applications
                          with React ecosystem
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Palette className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Tailwind CSS & Styling</p>
                        <p className="text-sm text-muted-foreground">
                          Creating beautiful, responsive designs with modern CSS
                          frameworks
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Smartphone className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Swiper.js & Mobile-First</p>
                        <p className="text-sm text-muted-foreground">
                          Building smooth, touch-friendly interfaces and
                          responsive components
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Globe className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">AWS S3 & Cloud Services</p>
                        <p className="text-sm text-muted-foreground">
                          Deploying and managing static assets with cloud
                          infrastructure
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Backend Experience */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                      <Server className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary">
                      Backend Development
                    </h3>
                    <Badge
                      variant="secondary"
                      className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0"
                    >
                      6 Months
                    </Badge>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Server className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Node.js & Express</p>
                        <p className="text-sm text-muted-foreground">
                          Building RESTful APIs and server-side applications
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Database className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">MongoDB & Databases</p>
                        <p className="text-sm text-muted-foreground">
                          Designing and managing database schemas and data flow
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Globe className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">API Development</p>
                        <p className="text-sm text-muted-foreground">
                          Creating scalable APIs and integrating third-party
                          services
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Zap className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Authentication & Security</p>
                        <p className="text-sm text-muted-foreground">
                          Implementing secure user authentication and data
                          protection
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fullstack Transition Highlight */}
              <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-lg border border-primary/20">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold text-primary">
                    Fullstack Transition Journey
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  I'm currently in an exciting phase of my career, actively
                  bridging my strong frontend expertise with growing backend
                  capabilities. This transition allows me to take complete
                  ownership of projects, from database design to user interface,
                  ensuring seamless integration and optimal user experiences. My
                  goal is to become a versatile full-stack developer who can
                  architect and deliver comprehensive web solutions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section
        ref={skillsRef}
        className={`py-20 px-4 relative z-10 transition-all duration-1000 ${
          isVisible.skills
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Star className="w-5 h-5 text-yellow-500" />
              <p className="text-lg">Mastering modern web technologies</p>
              <Star className="w-5 h-5 text-yellow-500" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Frontend Skills */}
            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 border-primary/20">
              <CardHeader className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardTitle className="flex items-center gap-2 relative z-10">
                  <Palette className="h-5 w-5 text-primary" />
                  Frontend Development
                  <Badge
                    variant="secondary"
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0"
                  >
                    3 Years
                  </Badge>
                </CardTitle>
                <CardDescription className="relative z-10">
                  Expert in modern frontend technologies and responsive design
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                {skills.frontend.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="space-y-2"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium flex items-center gap-2">
                        <skill.icon className="h-4 w-4 text-primary" />
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-primary to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                        style={{
                          width: isVisible.skills ? `${skill.level}%` : "0%",
                        }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Backend Skills */}
            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 border-primary/20">
              <CardHeader className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardTitle className="flex items-center gap-2 relative z-10">
                  <Server className="h-5 w-5 text-primary" />
                  Backend Development
                  <Badge
                    variant="secondary"
                    className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0"
                  >
                    6 Months
                  </Badge>
                </CardTitle>
                <CardDescription className="relative z-10">
                  Growing expertise in backend technologies and database
                  management
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                {skills.backend.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="space-y-2"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium flex items-center gap-2">
                        <skill.icon className="h-4 w-4 text-primary" />
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-primary to-green-600 h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                        style={{
                          width: isVisible.skills ? `${skill.level}%` : "0%",
                        }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        ref={projectsRef}
        className={`py-20 px-4 relative z-10 transition-all duration-1000 ${
          isVisible.projects
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Zap className="w-5 h-5 text-yellow-500" />
              <p className="text-lg">Showcasing my best work</p>
              <Zap className="w-5 h-5 text-yellow-500" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800/50 dark:to-blue-900/20 border-primary/20 overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="group-hover:text-primary transition-colors flex items-center gap-2">
                        {project.title}
                        <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </CardTitle>
                      <CardDescription className="mt-2 leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col gap-1">
                      {project.frontend && (
                        <Badge
                          variant="outline"
                          className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-700"
                        >
                          Frontend
                        </Badge>
                      )}
                      {project.backend && (
                        <Badge
                          variant="outline"
                          className="text-xs bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-700"
                        ></Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-gradient-to-r from-primary/10 to-purple-500/10 border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Live Demo
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-1 hover:bg-primary/10 transition-all duration-300"
                    >
                      <Github className="h-3 w-3" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section
        ref={experienceRef}
        className={`py-20 px-4 relative z-10 transition-all duration-1000 ${
          isVisible.experience
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Star className="w-5 h-5 text-yellow-500" />
              <p className="text-lg">My professional journey</p>
              <Star className="w-5 h-5 text-yellow-500" />
            </div>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 pb-8 border-l-2 border-primary/20 last:border-0 transition-all duration-700 hover:border-primary/40"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-r from-primary to-purple-600 rounded-full -translate-x-1/2 shadow-lg"></div>
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800/50 dark:to-blue-900/20 p-6 rounded-lg border border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-primary">
                        {exp.title}
                      </h3>
                      <p className="text-primary/80 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge
                        variant={
                          exp.type === "frontend" ? "default" : "secondary"
                        }
                        className="bg-gradient-to-r from-primary to-purple-600 text-white border-0"
                      >
                        {exp.type === "frontend" ? "Frontend" : "Backend"}
                      </Badge>
                      <p className="text-sm text-muted-foreground mt-1">
                        {exp.period}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        className={`py-20 px-4 relative z-10 transition-all duration-1000 ${
          isVisible.contact
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Mail className="w-5 h-5 text-primary" />
              <p className="text-lg">
                I'm always interested in hearing about new opportunities
              </p>
              <Mail className="w-5 h-5 text-primary" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800/50 dark:to-blue-900/20 p-8 rounded-2xl border border-primary/20 shadow-xl">
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="gap-2 bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                onClick={() => handleContactClick("email")}
              >
                <Mail className="h-4 w-4" />
                princewill9711@gmail.com
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                onClick={() => handleContactClick("github")}
              >
                <Github className="h-4 w-4" />
                GitHub
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                onClick={() => handleContactClick("linkedin")}
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="border-t bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900/20 py-12 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Quick Links
              </h3>
              <div className="space-y-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-2 hover:bg-primary/10 transition-colors"
                  onClick={() => scrollToSection(heroRef)}
                >
                  <Home className="h-4 w-4" />
                  Home
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-2 hover:bg-primary/10 transition-colors"
                  onClick={() => scrollToSection(aboutRef)}
                >
                  <User className="h-4 w-4" />
                  About
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-2 hover:bg-primary/10 transition-colors"
                  onClick={() => scrollToSection(projectsRef)}
                >
                  <Briefcase className="h-4 w-4" />
                  Projects
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-2 hover:bg-primary/10 transition-colors"
                  onClick={() => scrollToSection(contactRef)}
                >
                  <MessageSquare className="h-4 w-4" />
                  Contact
                </Button>
              </div>
            </div>

            {/* Social Icons */}
            <div>
              <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Connect With Me
              </h3>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  onClick={() => handleContactClick("github")}
                >
                  <Github className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  onClick={() => handleContactClick("linkedin")}
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  onClick={() =>
                    toast.info("Twitter profile coming soon!", {
                      description: "Follow me for tech updates!",
                    })
                  }
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  onClick={() =>
                    toast.info("Instagram profile coming soon!", {
                      description: "Behind the scenes content!",
                    })
                  }
                >
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  onClick={() =>
                    toast.info("YouTube channel coming soon!", {
                      description: "Tech tutorials and content!",
                    })
                  }
                >
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Get In Touch
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  princewill9711@gmail.com
                </p>
                <p className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-primary" />
                  Available for freelance work
                </p>
              </div>
            </div>
          </div>

          <Separator className="mb-6" />

          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 Princewill. Built with
              <span className="text-primary font-semibold"> Next.js</span>,
              <span className="text-primary font-semibold"> TypeScript</span>,
              and
              <span className="text-primary font-semibold"> Tailwind CSS</span>.
            </p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <Sparkles className="h-4 w-4 text-yellow-500" />
              <span className="text-sm text-muted-foreground">
                Crafted with passion and creativity
              </span>
              <Sparkles className="h-4 w-4 text-yellow-500" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
