"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Building2, GraduationCap, Users, BookOpen, Phone } from "lucide-react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

// Define the type for each social object
interface Social {
  href: string;
  icon: React.ReactNode;  // This allows JSX elements like icons to be used
  platform: string;  // Platform name (Facebook, LinkedIn, Instagram)
}

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
                    className={`menu-item px-4 ${index < 4 ? "border-r border-black" : ""}`}
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
              <p>Sri Vasavi Engineering College, Pedatadepalli, Tadepalligudem-534101, Andhra Pradesh.</p>
            </div>

            {/* Follow Us Section */}
            <div className="flex flex-col items-end text-right">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-1">
                {[
                  {
                    href: "https://www.facebook.com/svecfriends/",
                    icon: <FaFacebook size={30} style={{ color: "#4267B2" }} />,
                    platform: "Facebook",  // Add the platform name here
                  },
                  {
                    href: "https://www.linkedin.com/school/sri-vasavi/",
                    icon: <FaLinkedin size={30} style={{ color: "#0A66C2" }} />,
                    platform: "LinkedIn",  // Add the platform name here
                  },
                  {
                    href: "https://www.instagram.com/sves_official_info/",
                    icon: <FaInstagram size={30} style={{ color: "#E1306C" }} />,
                    platform: "Instagram",  // Add the platform name here
                  },
                ].map((social: Social, index: number) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-gray-500"
                  >
                    {social.icon}
                    <span className="text-lg font-medium">{social.platform}</span>  {/* This will now work */}
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
