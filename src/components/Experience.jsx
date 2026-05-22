import { MapPin } from "lucide-react";
import { experience } from "../data/siteData.js";
import AnimatedSection from "./AnimatedSection.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function Experience() {
  return (
    <AnimatedSection id="experience">
      <div className="container-shell">
        <SectionHeading eyebrow="Experience" title="Security, hospitality, operations, and customer-facing work.">
          A practical career foundation across regulated environments, guest service, and international
          customer support settings.
        </SectionHeading>

        <div className="mt-10 max-w-5xl sm:mt-12">
          {experience.map((role, index) => {
            return (
              <article
                key={`${role.role}-${role.company}`}
                className="border-t border-white/[0.08] py-7 first:border-t-0 first:pt-0 sm:py-8"
              >
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="text-sm font-medium text-electric">{role.status}</p>
                      {index === 0 ? (
                        <span className="h-1.5 w-1.5 rounded-full bg-electric" aria-hidden="true" />
                      ) : null}
                    </div>
                    <h3 className="mt-3 text-xl font-semibold text-ice sm:text-2xl">{role.role}</h3>
                    <p className="mt-2 text-sm font-medium text-ice/90 sm:text-base">{role.company}</p>
                    <div className="mt-4 inline-flex items-center gap-2 text-sm text-steel">
                      <MapPin size={16} className="text-electric" />
                      {role.location}
                    </div>
                  </div>

                  <ul className="grid grid-cols-1 gap-3">
                    {role.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="flex gap-3 text-sm leading-6 text-steel">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-electric" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
