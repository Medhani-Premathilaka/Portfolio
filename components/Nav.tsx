"use client";

import React, { useState, useEffect } from "react";
import { ModeToggle } from "./mode-toggle";
import { Menu, X, Download } from "lucide-react";

const navItems = [
  { name: "Home", id: "home" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-25 p-5  transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6  lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl font-bold italic text-letters hover:opacity-80 transition-opacity"
          >
            Hi , there ! 👋
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? "text-letters bg-letters/20"
                    : "text-foreground hover:text-letters hover:bg-accent"
                }`}
              >
                {item.name}
              </button>
            ))}

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              download
              className="ml-2 px-4 py-2 bg-letters text-white rounded-lg text-sm font-medium hover:opacity-90 transition-all hover:scale-105 flex items-center gap-2"
            >
              <Download size={16} />
              Resume
            </a>

            {/* Theme Toggle */}
            <div className="ml-2">
              <ModeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 bg-background/95 backdrop-blur-md border-t">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? "text-letters bg-letters/10"
                  : "text-foreground hover:bg-accent hover:text-letters"
              }`}
            >
              {item.name}
            </button>
          ))}
          <a
            href="/resume.pdf"
            download
            className="block w-full px-4 py-3 bg-letters text-white rounded-lg text-sm font-medium text-center hover:opacity-90 transition-opacity"
          >
            <span className="flex items-center justify-center gap-2">
              <Download size={16} />
              Download Resume
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
