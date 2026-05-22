import { skillGroups } from "../data/siteData.js";
import AnimatedSection from "./AnimatedSection.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="border-y border-white/[0.06] bg-carbon/90">
      <div className="container-shell">
        <SectionHeading eyebrow="Skills" title="One foot in security. One in service.">
          Discipline from security work, people skills from hospitality. I know how to handle
          pressure and how to deal with people - usually at the same time.
        </SectionHeading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <article key={group.title} className="rounded-lg border border-white/[0.08] bg-white/[0.025] p-5 transition hover:border-electric/30 sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg text-electric">
                    <Icon size={23} />
                  </span>
                  <h3 className="text-lg font-semibold text-ice">{group.title}</h3>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/[0.08] px-3 py-2 text-xs text-steel sm:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
