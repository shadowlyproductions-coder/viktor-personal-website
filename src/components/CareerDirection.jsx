import AnimatedSection from "./AnimatedSection.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function CareerDirection() {
  return (
    <AnimatedSection id="direction" className="border-y border-white/[0.06] bg-[#141311]">
      <div className="container-shell">
        <SectionHeading eyebrow="Direction" title="Where I Am Going">
          I'm building toward roles where the work is real - environments that demand reliability,
          clear communication, and the ability to stay composed when things move fast or get
          complicated. Whether that's in security operations, aviation, hospitality, or international
          customer-facing work, the setting matters less to me than the standard. I want to be
          somewhere that takes those things seriously, and where I can grow without being tied to one
          place or one industry forever.
        </SectionHeading>
      </div>
    </AnimatedSection>
  );
}
