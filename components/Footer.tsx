"use client";

import React from "react";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/yourusername",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/yourprofile",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:medhani.dev@gmail.com",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-letters">
              Medhani Premathilaka
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Computer Science undergraduate passionate about DevOps, cloud
              technologies, and building scalable systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(link.href)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-slate-400 hover:text-letters transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={
                      social.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="w-10 h-10 rounded-full bg-slate-800 hover:bg-letters flex items-center justify-center transition-colors group"
                    aria-label={social.name}
                  >
                    <Icon
                      size={20}
                      className="text-slate-400 group-hover:text-white transition-colors"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} Medhani Premathilaka. All rights reserved.
            </p>

            {/* Built With */}
            <p className="text-slate-500 text-xs flex items-center gap-1">
              Built with{" "}
              <Heart size={14} className="text-red-500 fill-red-500" /> using
              Next.js & Tailwind CSS
            </p>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-letters transition-colors group"
            >
              Back to top
              <ArrowUp
                size={16}
                className="group-hover:-translate-y-0.5 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
