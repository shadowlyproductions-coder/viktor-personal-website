import { brandStats } from "../data/siteData.js";
import AnimatedSection from "./AnimatedSection.jsx";

export default function PersonalBrand() {
  return (
    <AnimatedSection id="brand" className="relative">
      <div className="container-shell">
        <div className="grid grid-cols-1 gap-8 border-y border-white/[0.08] py-10 sm:gap-10 sm:py-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
          <div>
            <p className="eyebrow">Personal Brand</p>
            <h2 className="mt-4 text-[1.7rem] font-semibold leading-tight text-ice sm:text-5xl">
              Built Through Discipline
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-steel sm:mt-6 sm:text-lg sm:leading-8">
              My background in strength training and calisthenics has shaped how I work. I value
              consistency, preparation, and controlled execution. Whether handling passengers,
              guests, or operational procedures, the mindset is the same: stay calm, follow the
              process, perform with focus.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {brandStats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-white/[0.08] p-4 sm:p-5">
                <p className="text-sm text-steel">{stat.label}</p>
                <p className="mt-2 text-lg font-semibold text-ice sm:text-xl">{stat.value}</p>
              </div>
            ))}
            <div className="rounded-lg border border-electric/25 bg-electric/5 p-4 sm:col-span-2 sm:p-5">
              <p className="text-sm font-medium text-electric">Professional Translation</p>
              <p className="mt-3 text-sm leading-7 text-ice/90 sm:text-base">
                What the gym teaches, the workplace proves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
