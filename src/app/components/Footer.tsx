import { Scissors, Instagram, Twitter, Facebook, Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom"; // 👈 React Router Link import kiya

export function Footer() {
  return (
    <footer
      className="py-12 lg:py-16"
      style={{ background: "#111827", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          
          {/* 1. Brand & Logo Section */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 w-fit hover:opacity-90 transition-opacity" style={{ textDecoration: 'none' }}>
              <img
                src="/logo.png"
                alt="DigiSaloon Logo"
                className="w-8 h-8 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold text-white m-0">
                  Digi<span className="text-red-500">Saloon</span>
                </h3>
                <p className="text-xs text-gray-400 tracking-[3px] uppercase m-0">
                  Luxury You Aspire
                </p>
              </div>
            </Link>
            
            <p
              className="max-w-xs mb-6 mt-4"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "rgba(255,255,255,0.5)",
                fontSize: "0.875rem",
                lineHeight: 1.7,
              }}
            >
              DigiSaloon is a smart salon booking platform helping users discover, compare and book trusted salons with transparent pricing and real-time availability.
            </p>

            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full mt-2 mb-5"
              style={{
                background: "rgba(34,197,94,0.15)",
                color: "#22C55E",
                fontSize: "12px",
                fontWeight: 600,
              }}
            >
              🟢 Launching Soon in Ranchi
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              {[
                { icon: Instagram, href: "https://www.instagram.com/digisaloonn?igsh=MWlkYmdodXU0eGh0OQ==" },
                { icon: Twitter, href: "https://x.com/Digiisaloon" },
                { icon: Facebook, href: "https://www.facebook.com/share/1BB96mdqzT/?mibextid=wwXIfr" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/digi-saloon/" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.5)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#991B1B";
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)";
                  }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            <p className="mt-4 text-sm" style={{ color: "#9CA3AF" }}>
              🚀 150+ Users • 50+ Salon Partners Joined
            </p>
          </div>

          {/* 2. Company Links (FIXED WITH CLIENT-SIDE ROUTING) */}
          <div>
            <p
              className="mb-4 text-xs uppercase tracking-widest"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: "rgba(255,255,255,0.3)" }}
            >
              Company
            </p>
            <ul className="space-y-3 p-0 list-none">
              {[
                { label: "About", link: "/about", isPage: true },
                { label: "Features", link: "/#features", isPage: false },      // Home page scroll ke liye / lagaya
                { label: "How It Works", link: "/#how-it-works", isPage: false },
                { label: "For Salons", link: "/for-salons", isPage: true },
                { label: "FAQ", link: "/#faq", isPage: false }
              ].map((item) => (
                <li key={item.label}>
                  {item.isPage ? (
                    /* Alag pages ke liye <Link> component */
                    <Link
                      to={item.link}
                      className="text-sm transition-colors duration-200 block"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.5)", textDecoration: 'none' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#E8B4B8")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    /* Home page sections ke scroll ke liye anchor tag */
                    <a
                      href={item.link}
                      className="text-sm transition-colors duration-200 block"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.5)", textDecoration: 'none' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#E8B4B8")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact & App Badges */}
          <div>
            <p
              className="mb-4 text-xs uppercase tracking-widest"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: "rgba(255,255,255,0.3)" }}
            >
              Contact
            </p>
            <ul className="space-y-3 p-0 list-none">
              <li>
                <a
                  href="mailto:info@digisaloon.in"
                  className="text-sm flex items-center gap-2 transition-colors duration-200"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.5)", textDecoration: 'none' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#E8B4B8")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                >
                  <Mail className="w-3.5 h-3.5" />
                  info@digisaloon.in
                </a>
              </li>
              <li>
                <a
                  href="tel:8809972414"
                  className="text-sm flex items-center gap-2 transition-colors duration-200"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.5)", textDecoration: 'none' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#E8B4B8")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                >
                  <Phone className="w-3.5 h-3.5" />
                  +91-8809972414
                </a>
              </li>

              {/* App Stores */}
              <div className="mt-6">
                <p className="text-xs text-gray-400 mb-3">
                  Coming Soon On
                </p>
                <div className="flex flex-col gap-3">
                  <div className="relative w-fit">
                    <img src="/google-play.png" alt="Google Play" className="h-10" />
                    <span className="absolute -top-2 -right-3 bg-red-600 text-white text-[10px] px-2 py-1 rounded-full">Soon</span>
                  </div>
                  <div className="relative w-fit">
                    <img src="/app-store.png" alt="App Store" className="h-10" />
                    <span className="absolute -top-2 -right-3 bg-red-600 text-white text-[10px] px-2 py-1 rounded-full">Soon</span>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>

        {/* 4. Bottom Footer Bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.3)" }}>
            © 2026 DigiSaloon. All rights reserved. 🇮🇳 Proudly Built in India
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: "Privacy Policy", href: "https://policies.digisaloon.in/" },
              { label: "Terms of Service", href: "https://policies.digisaloon.in/#section3" },
              { label: "Cookie Policy", href: "https://policies.digisaloon.in/#section5" }
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs transition-colors duration-200"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.3)", textDecoration: 'none' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#E8B4B8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}