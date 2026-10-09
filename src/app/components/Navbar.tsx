import React, { useState, useEffect } from "react";
import { Menu, X, CalendarCheck } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom"; 

interface NavbarLink {
  label?: string;
  href: string;
  isPage: boolean;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Robust Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (scrollPos > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { capture: true, passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll, { capture: true });
    };
  }, []);

  // Global Hash Listener for smooth cross-page scrolling
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);

  const links: NavbarLink[] = [
    { label: "Home", href: "/", isPage: true }, 
    { label: "About", href: "/about", isPage: true },
    { label: "Features", href: "/#features", isPage: false },
    { label: "How It Works", href: "/#how-it-works", isPage: false },
    { label: "For Salons", href: "/#for-salons", isPage: false },
    { label: "Contact", href: "/contact", isPage: true },
  ];

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>, 
    link: NavbarLink
  ) => {
    setOpen(false); 

    if (!link.isPage) {
      e.preventDefault();
      const targetId = link.href.replace("/#", "");

      if (location.pathname === "/") {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        navigate(link.href);
      }
    } else {
      if (link.href === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.scrollTo(0, 0); 
      }
    }
  };

  return (
    <nav
      style={{
        backgroundColor: scrolled ? "#ffffff" : "transparent",
        boxShadow: scrolled ? "0 4px 20px rgba(0, 0, 0, 0.08)" : "none",
        borderBottom: scrolled ? "1px solid #f3f4f6" : "1px solid transparent",
      }}
      className="fixed top-0 left-0 right-0 z-[9999] transition-all duration-300"
    >
      <div className="w-full max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          
          {/* Logo (Compact for Mobile) */}
          <Link 
            to="/" 
            onClick={(e) => handleLinkClick(e, { href: "/", isPage: true })} 
            className="flex items-center gap-2 sm:gap-3 cursor-pointer no-underline"
          >
            <img
              src="/logo.png"
              alt="DigiSaloon Logo"
              className="w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
            />
            <div className="flex flex-col font-sans">
              <span className="text-base sm:text-xl leading-none font-extrabold text-[#111827]">
                Digi<span className="text-[#991B1B]">Saloon</span>
              </span>
              <span className="text-[8px] sm:text-[10px] tracking-[2px] sm:tracking-[3px] uppercase text-[#6B7280] font-medium mt-0.5">
                Luxury Your Aspire
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 font-sans">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.href}
                onClick={(e) => handleLinkClick(e, l)}
                className="text-sm font-medium text-[#374151] hover:text-[#991B1B] transition-colors duration-200 no-underline"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3 font-sans">
            <a
              href="https://app.digisaloon.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#991B1B] hover:bg-[#7f1616] text-white text-sm font-semibold shadow-md shadow-[#991B1B]/20 transition-all duration-200 active:scale-95 no-underline"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book Now</span>
            </a>
          </div>

          {/* Mobile Right Action Area (Book Now + Menu Button) */}
          <div className="md:hidden flex items-center gap-2 font-sans">
            <a
              href="https://app.digisaloon.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#991B1B] text-white text-xs font-semibold shadow-sm no-underline active:scale-95"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Book Now</span>
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="p-1.5 rounded-lg text-[#991B1B]"
              aria-label="Toggle navigation menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 py-5 space-y-3 font-sans">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.href}
                onClick={(e) => handleLinkClick(e, l)}
                className="block text-base py-2 font-medium text-[#374151] no-underline border-b border-gray-50"
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-2">
              <a
                href="https://app.digisaloon.in/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#991B1B] text-white text-sm font-semibold text-center no-underline"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book Now</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}