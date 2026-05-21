import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { highlights, personalInfo } from "../data/siteData.js";
import ProfileVisual from "./ProfileVisual.jsx";

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pb-14 pt-24 sm:pb-20 sm:pt-32 lg:pt-36">
      <div className="absolute inset-0 bg-subtle-warm" />
      <div className="container-shell relative grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
        <motion.div className="min-w-0" initial={false} animate="visible" variants={stagger}>
          <motion.p variants={item} className="eyebrow">
            📍 Zagreb, Croatia
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-5 max-w-4xl break-words text-4xl font-semibold leading-tight text-ice sm:text-6xl lg:text-7xl"
          >
            Viktor Stojanoski
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-5 max-w-3xl break-words text-lg font-medium leading-7 text-[#d9d2c9] sm:mt-6 sm:text-2xl sm:leading-8"
          >
            Airport Security & Hospitality Professional — Customer Focused
          </motion.p>
          <motion.p
            variants={item}
            className="mt-6 max-w-2xl break-words text-sm leading-7 text-steel sm:mt-7 sm:text-lg sm:leading-8"
          >
            I have a background in airport security and hospitality — roles that demand composure,
            sharp communication, and consistent professionalism. I work well under pressure and hold
            myself to a high standard in everything I do.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <a
              href="#experience"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-electric px-6 py-3 text-sm font-semibold text-midnight transition hover:bg-[#d4a370] sm:w-auto"
            >
              View Experience
              <ArrowDown size={18} />
            </a>
            <a
              href="mailto:stojanoskiv24@gmail.com?subject=Website%20Contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/[0.12] px-6 py-3 text-sm font-semibold text-ice transition hover:border-electric/50 hover:bg-white/[0.04] sm:w-auto"
            >
              Contact Me
              <Mail size={18} />
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2">
            {highlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={highlight.label}
                  className="flex items-center gap-3 rounded-lg border border-white/[0.08] bg-white/[0.025] px-4 py-3"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-electric">
                    <Icon size={18} />
                  </span>
                  <span className="text-sm font-medium text-[#d9d2c9]">{highlight.label}</span>
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        <ProfileVisual />
      </div>
    </section>
  );
}
