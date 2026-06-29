import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; 

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "/", isPage: true }, 
    { label: "About", href: "/about", isPage: true },
    { label: "Features", href: "/#features", isPage: false },
    { label: "How It Works", href: "/#how-it-works", isPage: false },
    { label: "For Salons", href: "/#for-salons", isPage: false },
    { label: "Contact", href: "/contact", isPage: true },
  ];

  // Full pages (/about, /contact) par click hone par top par bhejne ke liye
  const handlePageClick = () => {
    window.scrollTo(0, 0); // Yeh instant screen ko upar phenk dega
    setOpen(false); // Mobile menu close karne ke liye
  };

  // Sirf Home page par smooth scroll dene ke liye
  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

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
          <Link 
            to="/" 
            onClick={handleHomeClick} 
            className="flex items-center gap-3 cursor-pointer" 
            style={{ textDecoration: 'none' }}
          >
            <img
              src="/logo.png"
              alt="DigiSaloon Logo"
              className="w-12 h-12 md:w-14 md:h-14 object-contain"
            />
            <div className="flex flex-col">
              <span
                className="text-xl leading-none"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  color: "#111827",
                }}
              >
                Digi<span style={{ color: "#991B1B" }}>Saloon</span>
              </span>
              <span
                className="text-[10px] tracking-[3px] uppercase"
                style={{
                  color: "#6B7280",
                  fontWeight: 500,
                }}
              >
                Luxury You Aspire
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) =>
              l.isPage ? (
                <Link
                  key={l.label}
                  to={l.href}
                  onClick={l.href === "/" ? handleHomeClick : handlePageClick} // 👈 FIXED: /about aur /contact pe handlePageClick chalega
                  className="text-sm transition-colors duration-200"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, color: "#374151", textDecoration: 'none' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#991B1B")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#374151")}
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm transition-colors duration-200"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, color: "#374151", textDecoration: 'none' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#991B1B")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#374151")}
                >
                  {l.label}
                </a>
              )
            )}
          </div>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <div
              className="hidden lg:flex items-center px-3 py-1 rounded-full"
              style={{
                background: "rgba(153,27,27,0.08)",
                color: "#991B1B",
                fontSize: "12px",
                fontWeight: 600,
              }}
            >
              🚀 Launching Soon
            </div>
            
            <a
              href="/#waitlist"
              className="text-sm px-5 py-2 rounded-full text-white transition-all duration-200"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                background: "linear-gradient(135deg, #991B1B 0%, #B91C1C 100%)",
                boxShadow: "0 4px 14px rgba(153,27,27,0.3)",
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-1px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              Get Early Access 
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
            {links.map((l) =>
              l.isPage ? (
                <Link
                  key={l.label}
                  to={l.href}
                  onClick={l.href === "/" ? handleHomeClick : handlePageClick} // 👈 FIXED: Mobile me bhi top par scroll hoga
                  className="block text-base py-2"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, color: "#374151", textDecoration: 'none' }}
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-base py-2"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, color: "#374151", textDecoration: 'none' }}
                >
                  {l.label}
                </a>
              )
            )}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="/#waitlist"
                onClick={() => setOpen(false)}
                className="text-center text-sm px-5 py-3 rounded-full text-white"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #991B1B 0%, #B91C1C 100%)",
                  textDecoration: 'none'
                }}
              >
                Get Early Access 
              </a>
              <a
                href="/#waitlist" 
                onClick={() => setOpen(false)}
                className="text-center text-sm px-5 py-3 rounded-full border"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  borderColor: "#991B1B",
                  color: "#991B1B",
                  textDecoration: 'none'
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