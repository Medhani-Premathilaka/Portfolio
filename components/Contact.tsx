"use client";

import React from "react";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Send,
  ExternalLink,
} from "lucide-react";

function Contact() {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "mpremathilaka1@gmail.com",
      href: "mailto:mpremathilaka1@gmail.com",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "medhani-premathilaka",
      href: "https://www.linkedin.com/in/medhani-premathilaka",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@Medhani-Premathilaka",
      href: "https://github.com/Medhani-Premathilaka",
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gampaha, Sri Lanka",
      href: null,
      color: "from-green-500 to-emerald-600",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-letters mb-4">
          Let&apos;s Connect
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          I&apos;m actively seeking Software Engineering internship
          opportunities with a focus on DevOps. Whether you have a question or
          just want to say hi, I&apos;ll get back to you!
        </p>
      </div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {contactLinks.map((contact, index) => {
          const Icon = contact.icon;
          const isClickable = contact.href !== null;

          const CardContent = (
            <>
              <div
                className={`w-16 h-16 rounded-2xl bg-linear-to-br ${contact.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className="text-white" size={28} />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">
                  {contact.label}
                </p>
                <p className="text-lg font-medium text-slate-800 group-hover:text-letters transition-colors">
                  {contact.value}
                </p>
              </div>
              {isClickable && (
                <ExternalLink
                  className="absolute top-4 right-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  size={20}
                />
              )}
            </>
          );

          if (isClickable) {
            return (
              <a
                key={index}
                href={contact.href!}
                target={contact.href!.startsWith("http") ? "_blank" : undefined}
                rel={
                  contact.href!.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group relative bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-letters/30"
              >
                {CardContent}
              </a>
            );
          }

          return (
            <div
              key={index}
              className="group relative bg-white p-6 rounded-2xl shadow-md border border-slate-100"
            >
              {CardContent}
            </div>
          );
        })}
      </div>

      {/* CTA Section */}
      <div className="bg-linear-to-br from-letters/5 to-letters/10 rounded-3xl p-8 md:p-12 text-center border border-letters/20">
        <Send className="mx-auto mb-4 text-letters" size={48} />
        <h3 className="text-2xl font-bold text-slate-800 mb-3">
          Ready to Start a Conversation?
        </h3>
        <p className="text-slate-600 mb-6 max-w-xl mx-auto">
          Drop me an email and I&apos;ll respond as soon as possible. I&apos;m
          always excited to discuss new opportunities and collaborations!
        </p>
        <a
          href="mailto:mpremathilaka1@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 bg-letters text-white rounded-full font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg"
        >
          <Mail size={20} />
          Send Me an Email
        </a>
      </div>

      {/* Optional: Social Links Row */}
      <div className="mt-12 text-center">
        <p className="text-sm text-slate-500 mb-4">Or find me on</p>
        <div className="flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/medhani-premathilaka"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-slate-100 hover:bg-letters/10 flex items-center justify-center transition-colors group"
          >
            <Linkedin
              className="text-slate-600 group-hover:text-letters transition-colors"
              size={20}
            />
          </a>
          <a
            href="https://github.com/Medhani-Premathilaka"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-slate-100 hover:bg-letters/10 flex items-center justify-center transition-colors group"
          >
            <Github
              className="text-slate-600 group-hover:text-letters transition-colors"
              size={20}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
