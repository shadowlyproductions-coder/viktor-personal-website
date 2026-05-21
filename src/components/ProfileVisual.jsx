import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { profilePillars } from "../data/siteData.js";
import GlobalNetworkVisual from "./GlobalNetworkVisual.jsx";

export default function ProfileVisual() {
  return (
    <motion.div
      className="relative mx-auto min-w-0 w-full max-w-lg lg:ml-auto"
      initial={false}
    >
      <div className="glass-card relative overflow-hidden rounded-lg p-5 sm:p-8">
        <div className="flex items-start justify-between gap-4 sm:gap-6">
          <div>
            <p className="eyebrow">Profile</p>
            <h3 className="mt-3 text-xl font-semibold leading-tight text-ice sm:text-3xl">
              Calm presence. Strong standards.
            </h3>
            <p className="mt-4 text-sm leading-7 text-steel sm:text-base">
              Security, service, and discipline brought together in a clear professional profile.
            </p>
          </div>
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-electric/30 text-electric sm:h-12 sm:w-12">
            <Shield size={22} />
          </div>
        </div>

        <GlobalNetworkVisual />

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {profilePillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.label} className="rounded-lg border border-white/[0.08] p-3 sm:p-4">
                <Icon className="text-electric" size={18} />
                <p className="mt-3 text-sm font-medium text-ice">{pillar.label}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-white/[0.08] p-3 sm:p-4">
            <p className="text-sm text-steel">Languages</p>
            <p className="mt-1 text-sm font-medium text-ice sm:text-base">English / Croatian / Macedonian</p>
          </div>
          <div className="rounded-lg border border-white/[0.08] p-3 sm:p-4">
            <p className="text-sm text-steel">Focus</p>
            <p className="mt-1 text-sm font-medium text-ice sm:text-base">Security & Hospitality</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
