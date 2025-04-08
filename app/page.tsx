"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Check,
  ChevronRight,
  Menu,
  X,
  Moon,
  Sun,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Users,
  BarChart,
  Layers,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "next-themes";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-hot-toast";

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTheme("light");
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const features = [
    {
      title: "Fee Management",
      description: "Automate student fee tracking, collections, and receipts.",
      icon: <Zap className="size-5" />,
    },
    {
      title: "Role-Based Access",
      description:
        "Generate real-time reports on collections, dues, and department-wise breakdowns.",
      icon: <Users className="size-5" />,
    },
    {
      title: "Smart Analytics",
      description:
        "Work together seamlessly with integrated communication tools.",
      icon: <BarChart className="size-5" />,
    },
    {
      title: "Campus Store Management",
      description:
        "Track sales of stationery, books, and uniforms — with category-based inventory.",
      icon: <Shield className="size-5" />,
    },
    {
      title: "Secure Ledger System",
      description:
        "Maintain transparent and secure financial records with activity logs.",
      icon: <Layers className="size-5" />,
    },
    {
      title: "Support & Training",
      description:
        "We assist every step of the way with training, onboarding, and chat support.",
      icon: <Star className="size-5" />,
    },
  ];

  return (
    <div className="flex min-h-[100dvh] flex-col">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${
          isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <Image
              src="/logo-website.png"
              alt="Campus Ledger Logo"
              width={150}
              height={50}
            />
          </div>
          <nav className="hidden md:flex gap-8">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              FAQ
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </Link>
          </nav>
          <div className="hidden md:flex gap-4 items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {mounted && theme === "dark" ? (
                <Sun className="size-[18px]" />
              ) : (
                <Moon className="size-[18px]" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Link href={"/prebook"}>
              <Button className="rounded-full">
                Pre Book Now
                <ChevronRight className="ml-1 size-4" />
              </Button>
            </Link>
          </div>
          <div className="flex items-center gap-4 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {mounted && theme === "dark" ? (
                <Sun className="size-[18px]" />
              ) : (
                <Moon className="size-[18px]" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
          >
            <div className="container py-4 flex flex-col gap-4">
              <Link
                href="#features"
                className="py-2 text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="py-2 text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#faq"
                className="py-2 text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="#contact"
                className="py-2 text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col gap-2 pt-2 border-t">
                <Link href={"/prebook"}>
                  <Button className="rounded-full">
                    Pre-Book Now
                    <ChevronRight className="ml-1 size-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 overflow-hidden">
          <div className="container px-4 md:px-6 relative">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <Badge
                className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium"
                variant="secondary"
              >
                Launching Soon
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                Simplify Campus Finance with Campus Ledger
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                The all-in-one platform built for educational institutions to
                manage student accounts, fees, and finances with unmatched ease.
                Automate, monitor, and manage — all in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={"/prebook"}>
                  <Button
                    size="lg"
                    className="rounded-full h-12 px-8 text-base"
                  >
                    Pre-Book Now
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </Link>
                <Link
                  href="/documentation"
                  className="rounded-full h-12 px-8 text-base"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full h-12 px-8 text-base"
                  >
                    Read Documentation
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-5xl"
            >
              <div className="rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20">
                <Image
                  src="/dashboard.jpg"
                  width={1280}
                  height={720}
                  alt="SaaSify dashboard"
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
              <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge
                className="rounded-full px-4 py-1.5 text-sm font-medium"
                variant="secondary"
              >
                Features
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Everything You Need to Manage Campus Finances
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Campus Ledger provides powerful tools to simplify and streamline
                campus account management, from student fees to store sales.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {features.map((feature, i) => (
                <motion.div key={i} variants={item}>
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <Badge
                className="rounded-full px-4 py-1.5 text-sm font-medium"
                variant="secondary"
              >
                How It Works
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Simple Process, Powerful Results
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Get started in minutes and see the difference our platform can
                make for your Institution.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0"></div>

              {[
                {
                  step: "01",
                  title: "Create Account",
                  description:
                    "Sign up for your simplified account management software",
                },
                {
                  step: "02",
                  title: "Configure Workspace",
                  description:
                    "Customize your playgrond with custom accounts and students",
                },
                {
                  step: "03",
                  title: "Start Managing",
                  description:
                    "Track fees, manage inventory, and get insightful reports — instantly.",
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative z-10 flex flex-col items-center text-center space-y-4"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-xl font-bold shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="pricing"
          className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge
                className="rounded-full px-4 py-1.5 text-sm font-medium"
                variant="secondary"
              >
                Pricing
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Simple, Transparent Pricing
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Choose the plan that fits your institution. No hidden fees, no
                surprises.
              </p>
            </motion.div>

            <div className="mx-auto max-w-5xl">
              <Tabs defaultValue="monthly" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList className="rounded-full p-1">
                    <TabsTrigger value="monthly" className="rounded-full px-6">
                      Annually
                    </TabsTrigger>
                    <TabsTrigger value="annually" className="rounded-full px-6">
                      Biennially (Save 30%)
                    </TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="monthly">
                  <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                    {[
                      {
                        name: "Basic Plan",
                        price: "₹7,999",
                        description:
                          "Perfect for small institutions starting digital.",
                        features: [
                          "Manage up to 500 students",
                          "Student account & fee tracking",
                          "Receipts & due alerts",
                          "Role-based admin access",
                          "Email support",
                        ],
                        cta: "Book Now",
                      },
                      {
                        name: "Professional Plan",
                        price: "₹9,499",
                        description:
                          "For growing campuses needing full control.",
                        features: [
                          "All Basic Plan features",
                          "Manage up to 2,000 students",
                          "Store / Stationery Management",
                          "Category-based items",
                          "Linked purchase history per student",
                          "Advanced reports & analytics",
                        ],
                        cta: "Book Now",
                        popular: true,
                      },
                      {
                        name: "Included in All Plans",
                        price: "",
                        description: "",
                        features: [
                          "Role-based login system",
                          "Secure cloud-hosted system",
                          "Auto backups & updates",
                          "Staff login & access control",
                        ],
                        cta: "Book Now",
                      },
                    ].map((plan, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      >
                        <Card
                          className={`relative overflow-hidden h-full ${
                            plan.popular
                              ? "border-primary shadow-lg"
                              : "border-border/40 shadow-md"
                          } bg-gradient-to-b from-background to-muted/10 backdrop-blur`}
                        >
                          {plan.popular && (
                            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                              Most Popular
                            </div>
                          )}
                          <CardContent className="p-6 flex flex-col h-full">
                            <h3 className="text-2xl font-bold">{plan.name}</h3>
                            <div className="flex items-baseline mt-4">
                              <span className="text-4xl font-bold">
                                {plan.price}
                              </span>
                              <span className="text-muted-foreground ml-1">
                                {plan.price === "" ? "" : "/Annually"}
                              </span>
                            </div>
                            <p className="text-muted-foreground mt-2">
                              {plan.description}
                            </p>
                            <ul className="space-y-3 my-6 flex-grow">
                              {plan.features.map((feature, j) => (
                                <li key={j} className="flex items-center">
                                  <Check className="mr-2 size-4 text-primary" />
                                  <span>{feature}</span>
                                </li>
                              ))}

                            {/* learn more li */}
                              {
                                plan.name !== "Included in All Plans" && (
                                  <li className="flex items-center">
                                <Link
                                  href={`plans/${
                                    plan.name === 'Basic Plan' ? 'basic' : 'professional'
                                  }`}      
                                  className="text-primary underline"
                                >
                                  Learn more
                                </Link>
                              </li>
                                )
                              }

                            </ul>
                            <Link href={"/prebook"}>
                              <Button
                                className={`w-full mt-auto rounded-full ${
                                  plan.popular
                                    ? "bg-primary hover:bg-primary/90"
                                    : "bg-muted hover:bg-muted/80"
                                }`}
                                variant={plan.popular ? "default" : "outline"}
                              >
                                {plan.cta}
                              </Button>
                            </Link>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="annually">
                  <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                    {[
                      {
                        name: "Basic Plan",
                        price: "₹5,599",
                        description:
                          "Perfect for small institutions starting digital.",
                        features: [
                          "Manage up to 500 students",
                          "Student account & fee tracking",
                          "Receipts & due alerts",
                          "Role-based admin access",
                          "Email support",
                        ],
                        cta: "Book Now",
                      },
                      {
                        name: "Professional Plan",
                        price: "₹6,649",
                        description:
                          "For growing campuses needing full control.",
                        features: [
                          "All Basic Plan features",
                          "Manage up to 2,000 students",
                          "Store / Stationery Management",
                          "Category-based items",
                          "Linked purchase history per student",
                          "Advanced reports & analytics",
                        ],
                        cta: "Book Now",
                        popular: true,
                      },
                      {
                        name: "Included in All Plans",
                        price: "",
                        description: "",
                        features: [
                          "Role-based login system",
                          "Secure cloud-hosted system",
                          "Auto backups & updates",
                          "Staff login & access control",
                        ],
                        cta: "Book Now",
                      },
                    ].map((plan, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      >
                        <Card
                          className={`relative overflow-hidden h-full ${
                            plan.popular
                              ? "border-primary shadow-lg"
                              : "border-border/40 shadow-md"
                          } bg-gradient-to-b from-background to-muted/10 backdrop-blur`}
                        >
                          {plan.popular && (
                            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                              Most Popular
                            </div>
                          )}
                          <CardContent className="p-6 flex flex-col h-full">
                            <h3 className="text-2xl font-bold">{plan.name}</h3>
                            <div className="flex items-baseline mt-4">
                              <span className="text-4xl font-bold">
                                {plan.price}
                              </span>
                              <span className="text-muted-foreground ml-1">
                                {plan.price === "" ? "" : "/Annually"}
                              </span>
                            </div>
                            <p className="text-muted-foreground mt-2">
                              {plan.description}
                            </p>
                            <ul className="space-y-3 my-6 flex-grow">
                              {plan.features.map((feature, j) => (
                                <li key={j} className="flex items-center">
                                  <Check className="mr-2 size-4 text-primary" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                            <Link href={"/prebook"}>
                              <Button
                                className={`w-full mt-auto rounded-full ${
                                  plan.popular
                                    ? "bg-primary hover:bg-primary/90"
                                    : "bg-muted hover:bg-muted/80"
                                }`}
                                variant={plan.popular ? "default" : "outline"}
                              >
                                {plan.cta}
                              </Button>
                            </Link>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge
                className="rounded-full px-4 py-1.5 text-sm font-medium"
                variant="secondary"
              >
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Find answers to common questions about our platform.
              </p>
            </motion.div>

            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "Can I upgrade my plan later?",
                    answer:
                      "Yes, you can upgrade your plan at any time. Our team will assist you in migrating your data and enabling new features based on your upgraded plan.",
                  },
                  {
                    question:
                      "Is there a limit to how many students I can add?",
                    answer:
                      "Yes, each plan comes with specific student limits. The Basic Plan allows up to 500 students, and the Professional Plan allows up to 2000 students.",
                  },
                  {
                    question:
                      "Is Campus Store Management available in all plans?",
                    answer:
                      "No, the Campus Store & Stationery Management module is exclusively available in the Professional Plan.",
                  },
                  {
                    question:
                      "Do you offer discounts for nonprofits or educational institutions?",
                    answer:
                      "We already offer highly subsidized pricing tailored for educational institutions. For further assistance, feel free to contact our team.",
                  },
                  {
                    question: "How secure is my data?",
                    answer:
                      "All data is encrypted both in transit and at rest. We implement industry-standard security practices and conduct regular backups to ensure safety and compliance.",
                  },
                  {
                    question: "What kind of support do you offer?",
                    answer:
                      "We offer support through email and WhatsApp. All plans include email support, while the Professional Plan offers priority response. Contact us at info@campusledger.live or WhatsApp us at +91 6238964074 or Call us at +91 9745384033.",
                  },
                  {
                    question: "What payment methods do you accept?",
                    answer:
                      "We accept UPI, debit/credit cards, net banking, and bank transfers. Please contact us for custom payment options or invoicing.",
                  },
                  {
                    question:
                      "Can the platform be customized for our institution?",
                    answer:
                      "Yes, light customizations are available in the Professional Plan. For larger needs, reach out to us to discuss feasibility and scope.",
                  },
                  {
                    question:
                      "What happens if my institution exceeds the student or user limit?",
                    answer:
                      "You’ll be notified when you're nearing your plan’s limit. Our team can help you upgrade or optimize based on your requirements.",
                  },
                  {
                    question: "Is internet required to use the platform?",
                    answer:
                      "Yes, CampusLedger is a cloud-based platform and requires a stable internet connection for best performance.",
                  },
                ].map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <AccordionItem
                      value={`item-${i}`}
                      className="border-b border-border/40 py-2"
                    >
                      <AccordionTrigger className="text-left font-medium hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section
          id="contact"
          className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge
                className="rounded-full px-4 py-1.5 text-sm font-medium"
                variant="secondary"
              >
                Contact Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Get in Touch
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Have questions? We're here to help. Send us a message and we'll
                get back to you as soon as possible.
              </p>
            </motion.div>

            <div className="mx-auto max-w-3xl">
              <Card className="border-border/40 shadow-md bg-gradient-to-b from-background to-muted/10 backdrop-blur">
                <CardContent className="p-6 md:p-8">
                  <form
                    id="contactForm"
                    onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(
                        e.target as HTMLFormElement
                      );
                      const formObject = Object.fromEntries(formData);

                      // Replace with your Google Apps Script Web App URL
                      // const scriptURL = "";

                      // fetch(scriptURL, {
                      //   method: "POST",
                      //   body: JSON.stringify(formObject),
                      //   headers: {
                      //     "Content-Type": "application/json",
                      //   },
                      // })
                      //   .then((response) => {
                      //     const formElement =
                      //       document.getElementById("contactForm");
                      //     if (formElement) {
                      //       (formElement as HTMLFormElement).reset();
                      //     }
                      //     // Show success toast notification
                      //     toast.success("Thank you! Your message has been sent successfully.");
                      //   })
                      //   .catch((error) => {
                      //     console.error("Error!", error.message);
                      //     // Show error toast notification
                      //     toast.error("Something went wrong. Please try again later.");
                      //   });
                    }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your email"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="How can we help?"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us more about your inquiry..."
                        className="min-h-32"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full rounded-full">
                      Send Message
                      <ArrowRight className="ml-2 size-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="size-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                  <Mail className="size-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">Email</h3>
                <p className="text-muted-foreground">info@campusledger.live</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-center"
              >
                <div className="size-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                  <Phone className="size-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">Phone</h3>
                <p className="text-muted-foreground">+91 9745384033</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col items-center"
              >
                <div className="size-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                  <MessageSquare className="size-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">WhatsApp</h3>
                <p className="text-muted-foreground">+91 6238964074</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-6 text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Ready to Simplify Your Campus Accounts?
              </h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                Join institutions that are already managing fees, inventory, and
                reports smarter with Campus Ledger.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link href={"/prebook"}>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="rounded-full h-12 px-8 text-base"
                  >
                    Pre Book Now
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </Link>

                <Link href="/documentation" className="">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full h-12 px-8 text-base bg-transparent border-white text-white hover:bg-white/10"
                  >
                    Read Documentation
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-primary-foreground/80 mt-4">
                Make the switch to Campus Ledger today and experience the
                difference.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background/95 backdrop-blur-sm">
        <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold">
                <Image
                  src="/logo-website.png"
                  alt="Campus Ledger Logo"
                  width={150}
                  height={50}
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Making Campus Finance Simple, Transparent, and Secure.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#features"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/documentation"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Guides
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/about-us"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="terms-of-service"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border/40 pt-8">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} CampusLedger. All rights
              reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="/privacy-policy"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
