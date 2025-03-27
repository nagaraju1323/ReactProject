"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Building2, GraduationCap, Users, BookOpen, Phone } from "lucide-react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-primary py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Branding Section */}
            <div className="flex items-center gap-4">
              <GraduationCap className="h-10 w-10 text-primary-foreground" />
              <div>
                <h1 className="text-2xl font-bold text-primary-foreground">
                  Sri Vasavi Engineering College
                </h1>
                <p className="text-sm text-primary-foreground/80">
                  Excellence in Education
                </p>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="menu-bar hidden md:flex items-right">
              {["Home", "About", "Academic Calendar", "Online Payments", "Contact"].map(
                (item, index) => (
                  <div
                    key={index}
                    className={`menu-item px-4 ${
                      index < 4 ? "border-r border-black" : ""
                    }`}
                  >
                    <Button variant="ghost" className="hover:bg-primary-foreground/10">
                      {item}
                    </Button>
                  </div>
                )
              )}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px]">
        <div className="absolute inset-0">
          <img
            src="https://media.getmyuni.com/azure/college-images-test/sri-vasavi-engineering-college-svec-tadepalligudam/2c8c943a70a94d059bc97ba5ffdb71db.jpeg"
            alt="College Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h2 className="text-5xl font-bold mb-4">
              Welcome to Sri Vasavi Engineering College
            </h2>
            <p className="text-xl mb-8">
              Empowering minds, shaping futures. Join us in our pursuit of academic excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Building2 className="h-12 w-12 text-primary mb-4" />,
                title: "Modern Campus",
                description:
                  "State-of-the-art facilities and infrastructure for optimal learning environment.",
              },
              {
                icon: <Users className="h-12 w-12 text-secondary mb-4" />,
                title: "Expert Faculty",
                description:
                  "Experienced professors dedicated to student success and growth.",
              },
              {
                icon: <BookOpen className="h-12 w-12 text-primary mb-4" />,
                title: "Quality Education",
                description:
                  "Comprehensive curriculum designed for academic excellence.",
              },
            ].map((feature, index) => (
              <Card key={index} className={`border-t-4 border-t-primary`}>
                <CardContent className="pt-6">
                  {feature.icon}
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News & Events Carousel */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Latest News & Events</h2>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {[
                {
                  title: "TECH EUPHORIA 2K25",
                  description:
                    "Join us for the National level Techno Cultural Symposium featuring workshops, competitions, and guest lectures.",
                },
                {
                  title: "Annual Sports Meet 2025",
                  description:
                    "Showcase your athletic spirit in various sports events with participants from across the nation.",
                },
                {
                  title: "Innovation Day 2025",
                  description:
                    "Explore groundbreaking projects at our annual exhibition featuring student and faculty showcases.",
                },
              ].map((event, index) => (
                <CarouselItem key={index}>
                  <Card className="border border-black">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <p className="text-muted-foreground">{event.description}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Footer */}
<footer className="bg-primary text-primary-foreground py-12">
  <div className="container mx-auto px-4">
    <div className="flex justify-between items-start">
      {/* Contact Us Section */}
      <div className="w-1/2">
        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
        <div className="flex items-center gap-2 mb-2">
          <Phone className="h-4 w-4" />
          <span>Tel: +91-8818-284355 / 284344 / 284544</span>
        </div>
        <p>Email: principal@srivasaviengg.ac.in</p>
        <p>Sri Vasavi Engineering College, Pedatadepalli,
            Tadepalligudem-534101, 
          Andhra Pradesh.</p>
      </div>

      {/* Follow Us Section */}
      <div className="flex flex-col items-end text-right">
        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
        <div className="flex gap-1">
          {[
            {
              
              href: "https://www.facebook.com/svecfriends/",
              icon: <FaFacebook size={30} style={{ color: "#4267B2" }} />,
            },
            {

              href: "https://www.linkedin.com/school/sri-vasavi/",
              icon: <FaLinkedin size={30} style={{ color: "#0A66C2" }} />,
            },
            {
              
              href: "https://www.instagram.com/sves_official_info/",
              icon: <FaInstagram size={30} style={{ color: "#E1306C" }} />,
            },
          ].map((social, index) => (
            <Link
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-gray-500"
            >
              {social.icon}
              <span className="text-lg font-medium">{social.platform}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center bg-gray-900">
  <p className="text-sm text-white">&copy; 2025 Sri Vasavi College. All rights reserved.</p>
</div>

  </div>
</footer>

    </main>
  );
}
