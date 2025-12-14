"use client";

import React from "react";
import { ModeToggle } from "./mode-toggle";

function Nav() {
  return (
    <nav className="w-full h-20 shadow-xl bg-transparent">
      <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between">
        <div className="text-lg font-semibold">My Portfolio</div>

        <div className="flex items-center space-x-6">
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="text-sm hover:underline"
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("projects")}
            className="text-sm hover:underline"
          >
            Projects
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("skills")}
            className="text-sm hover:underline"
          >
            Skills
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("experience")}
            className="text-sm hover:underline"
          >
            Experience
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="text-sm hover:underline"
          >
            Contact
          </button>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2 bg-black text-white rounded-md text-sm hover:opacity-90"
          >
            Resume
          </a>

          <div className="pl-2">
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}
