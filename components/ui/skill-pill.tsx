import React from "react";

type Variant = "pro" | "intermediate" | "inprogress" | "beginner";

const variantClasses: Record<Variant, string> = {
  pro: "bg-green-100 text-green-800 dark:text-green-100 dark:bg-green-900/80",
  intermediate: "bg-yellow-100 text-yellow-800 ",
  inprogress: "bg-sky-100 text-sky-800 dark:bg-sky-900/30",
  beginner: "bg-red-100 text-red-800  dark:text-red-200 dark:bg-red-900/70",
};

export default function SkillPill({
  children,
  variant = "intermediate",
}: {
  children: React.ReactNode;
  variant?: Variant;
}) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${variantClasses[variant]}`}
    >
      {children}
    </span>
  );
}
