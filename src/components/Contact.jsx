import { Mail, MapPin, Phone } from "lucide-react";
import { personalInfo } from "../data/siteData.js";
import AnimatedSection from "./AnimatedSection.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function Contact() {
  return (
    <AnimatedSection id="contact">
      <div className="container-shell">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div>
            <SectionHeading eyebrow="Contact" title="Let's Connect">
              Open to roles in security, hospitality, customer support, and operations. If the work
              demands focus and professionalism, I'm interested.
            </SectionHeading>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <a
              href="mailto:stojanoskiv24@gmail.com?subject=Website%20Contact"
              className="flex items-center gap-3 rounded-lg border border-white/[0.08] p-4 transition hover:border-electric/30 sm:gap-4 sm:p-5"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg text-electric sm:h-12 sm:w-12">
                <Mail size={22} />
              </span>
              <div className="min-w-0">
                <p className="text-sm text-steel">Email</p>
                <p className="break-words text-sm font-medium text-ice sm:text-base">{personalInfo.email}</p>
              </div>
            </a>

            <a
              href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 rounded-lg border border-white/[0.08] p-4 transition hover:border-electric/30 sm:gap-4 sm:p-5"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg text-electric sm:h-12 sm:w-12">
                <Phone size={22} />
              </span>
              <div className="min-w-0">
                <p className="text-sm text-steel">Phone</p>
                <p className="text-sm font-medium text-ice sm:text-base">{personalInfo.phone}</p>
              </div>
            </a>

            <div className="flex items-center gap-3 rounded-lg border border-white/[0.08] p-4 sm:gap-4 sm:p-5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg text-electric sm:h-12 sm:w-12">
                <MapPin size={22} />
              </span>
              <div className="min-w-0">
                <p className="text-sm text-steel">Location</p>
                <p className="text-sm font-medium text-ice sm:text-base">{personalInfo.location}</p>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-12 border-t border-white/[0.08] pt-6 text-center text-xs leading-6 text-steel/60 sm:mt-16 sm:pt-8 sm:text-sm">
          <p>(c) 2026 Viktor Stojanoski. Professional personal brand website.</p>
        </footer>
      </div>
    </AnimatedSection>
  );
}
