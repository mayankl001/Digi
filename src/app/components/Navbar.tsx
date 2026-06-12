import { useState, useEffect } from "react";
import { Menu, X, Scissors } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "For Salons", href: "#for-salons" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(250,250,250,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(153,27,27,0.1)" : "none",
        boxShadow: scrolled ? "0 2px 32px rgba(153,27,27,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #991B1B 0%, #B91C1C 100%)" }}
            >
              <Scissors className="w-4.5 h-4.5 text-white" strokeWidth={2} />
            </div>
            <span
              className="text-xl tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, color: "#111827" }}
            >
              Digi<span style={{ color: "#991B1B" }}>Saloon</span>
            </span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm transition-colors duration-200"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, color: "#374151" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#991B1B")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#374151")}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#partner"
              className="text-sm px-4 py-2 rounded-full border transition-all duration-200"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                borderColor: "#991B1B",
                color: "#991B1B",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#991B1B";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#991B1B";
              }}
            >
              Partner With Us
            </a>
            <a
              href="#waitlist"
              className="text-sm px-5 py-2 rounded-full text-white transition-all duration-200"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                background: "linear-gradient(135deg, #991B1B 0%, #B91C1C 100%)",
                boxShadow: "0 4px 14px rgba(153,27,27,0.3)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-1px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              Join Waitlist
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg"
            style={{ color: "#991B1B" }}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="md:hidden"
          style={{
            background: "rgba(250,250,250,0.98)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(153,27,27,0.1)",
          }}
        >
          <div className="px-4 py-6 space-y-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-base py-2"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, color: "#374151" }}
              >
                {l.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="#waitlist"
                onClick={() => setOpen(false)}
                className="text-center text-sm px-5 py-3 rounded-full text-white"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  background: "linear-gradient(135deg, #991B1B 0%, #B91C1C 100%)",
                }}
              >
                Join Waitlist
              </a>
              <a
                href="#partner"
                onClick={() => setOpen(false)}
                className="text-center text-sm px-5 py-3 rounded-full border"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  borderColor: "#991B1B",
                  color: "#991B1B",
                }}
              >
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
