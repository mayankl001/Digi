import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom"; 

// 1. Link Object ke liye explicit type definition
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

  // Scroll check logic
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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

  // 2. FIXED: Parameters ko explicitly type de diya taaki ts(7006) error clear ho jaye
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-[#FAFAFA]/92 backdrop-blur-[16px] border-b border-[#991B1B]/10 shadow-[0_2px_32px_rgba(153,27,27,0.06)]" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <Link 
            to="/" 
            onClick={(e) => handleLinkClick(e, { href: "/", isPage: true })} 
            className="flex items-center gap-3 cursor-pointer no-underline"
          >
            <img
              src="/logo.png"
              alt="DigiSaloon Logo"
              className="w-12 h-12 md:w-14 md:h-14 object-contain"
            />
            <div className="flex flex-col font-sans">
              <span className="text-xl leading-none font-extrabold text-[#111827]">
                Digi<span className="text-[#991B1B]">Saloon</span>
              </span>
              <span className="text-[10px] tracking-[3px] uppercase text-[#6B7280] font-medium mt-1">
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

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-3 font-sans">
            <div className="hidden lg:flex items-center px-3 py-1 rounded-full bg-[#991B1B]/10 text-[#991B1B] text-xs font-semibold">
              🚀 Launching Soon
            </div>
            
            <Link
              to="/#waitlist"
              onClick={(e) => handleLinkClick(e, { href: "/#waitlist", isPage: false })}
              className="text-sm px-5 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-[#991B1B] to-[#B91C1C] shadow-[0_4px_14px_rgba(153,27,27,0.3)] hover:-translateY-[1px] transition-all duration-200 no-underline"
            >
              Get Early Access 
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-[#991B1B]"
            aria-label="Toggle navigation menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-[#FAFAFA]/98 backdrop-blur-[20px] border-t border-[#991B1B]/10">
          <div className="px-4 py-6 space-y-4 font-sans">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.href}
                onClick={(e) => handleLinkClick(e, l)}
                className="block text-base py-2 font-medium text-[#374151] no-underline"
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Link
                to="/#waitlist"
                onClick={(e) => handleLinkClick(e, { href: "/#waitlist", isPage: false })}
                className="text-center text-sm px-5 py-3 rounded-full text-white font-bold bg-gradient-to-r from-[#991B1B] to-[#B91C1C] no-underline"
              >
                Get Early Access 
              </Link>
              <Link
                to="/#waitlist" 
                onClick={(e) => handleLinkClick(e, { href: "/#waitlist", isPage: false })}
                className="text-center text-sm px-5 py-3 rounded-full border border-[#991B1B] text-[#991B1B] font-semibold no-underline"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}