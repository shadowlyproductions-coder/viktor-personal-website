import { Globe2, ShieldCheck, TrendingUp } from "lucide-react";
import AnimatedSection from "./AnimatedSection.jsx";
import SectionHeading from "./SectionHeading.jsx";

const qualities = [
  {
    title: "Calm Under Pressure",
    icon: ShieldCheck,
    text: "Comfortable in structured environments where safety, clear thinking, and procedure matter.",
  },
  {
    title: "International Service",
    icon: Globe2,
    text: "Experienced with passengers, guests, customers, and colleagues across multicultural settings.",
  },
  {
    title: "Continuous Improvement",
    icon: TrendingUp,
    text: "Training discipline and professional development shape a steady, reliable work style.",
  },
];

export default function About() {
  return (
    <AnimatedSection id="about" className="relative border-y border-white/[0.06] bg-[#141311]">
      <div className="container-shell grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
        <SectionHeading eyebrow="About" title="Professional, steady, and built for demanding environments.">
          I have a background in airport security and hospitality - roles that demand composure,
          sharp communication, and consistent professionalism. I work well under pressure and hold
          myself to a high standard in everything I do.
        </SectionHeading>

        <div className="grid grid-cols-1 gap-4">
          {qualities.map((quality) => {
            const Icon = quality.icon;
            return (
              <article key={quality.title} className="rounded-lg border border-white/[0.08] bg-white/[0.025] p-5 transition hover:border-electric/30 sm:p-6">
                <div className="flex gap-3 sm:gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg text-electric sm:h-11 sm:w-11">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-ice sm:text-lg">{quality.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-steel sm:text-base">{quality.text}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
