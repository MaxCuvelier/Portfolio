import React from "react";
import { FaReact, FaCss3Alt, FaHtml5, FaJsSquare } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiSass, SiGoogleanalytics } from "react-icons/si";

export const skillIcons: Record<string, React.ReactNode> = {
  html: <FaHtml5 className="text-orange-500 w-10 h-10" />,
  css: <FaCss3Alt className="text-blue-500 w-10 h-10" />,
  javascript: <FaJsSquare className="text-yellow-400 w-10 h-10" />,
  react: <FaReact className="text-cyan-400 w-10 h-10" />,
  nextjs: <SiNextdotjs className="text-black w-10 h-10" />,
  tailwind: <SiTailwindcss className="text-sky-400 w-10 h-10" />,
};

export const miniSkillIcons: Record<string, React.ReactNode> = {
  html: <FaHtml5 className="text-orange-500 w-5 h-5" />,
  css: <FaCss3Alt className="text-blue-500 w-5 h-5" />,
  javascript: <FaJsSquare className="text-yellow-400 w-5 h-5" />,
  react: <FaReact className="text-cyan-400 w-5 h-5" />,
  nextjs: <SiNextdotjs className="text-black w-5 h-5" />,
  tailwind: <SiTailwindcss className="text-sky-400 w-5 h-5" />,
  sass: <SiSass className="text-pink-400 w-5 h-5" />,
  seo: <SiGoogleanalytics className="text-green-500 w-5 h-5" />
};