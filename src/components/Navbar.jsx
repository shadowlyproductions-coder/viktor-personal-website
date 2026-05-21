import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "../data/siteData.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.08] bg-midnight/90 shadow-lg shadow-black/20 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="container-shell flex h-16 items-center justify-between sm:h-20">
        <a href="#home" className="group flex items-center gap-3" aria-label="Go to home">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/[0.12] bg-white/[0.04] text-sm font-semibold text-electric sm:h-10 sm:w-10">
            VS
          </span>
          <span className="hidden text-sm font-medium text-ice sm:block">
            Viktor Stojanoski
          </span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-steel transition hover:text-ice"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/[0.1] bg-white/[0.04] text-ice sm:h-11 sm:w-11 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open ? (
        <div className="container-shell pb-5 lg:hidden">
          <div className="glass-card rounded-lg p-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-steel transition hover:bg-white/[0.05] hover:text-ice"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
