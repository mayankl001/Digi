import { Scissors, Instagram, Twitter, Facebook, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="py-12 lg:py-16"
      style={{ background: "#111827", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
  <img
      src="/logo.png"
      alt="DigiSaloon Logo"
      className="w-8 h-8 object-contain"
  />

  <div>
    <h3 className="text-xl font-bold text-white">
      Digi<span className="text-red-500">Saloon</span>
    </h3>

    <p className="text-xs text-gray-400 tracking-[3px] uppercase">
      Luxury You Aspire
    </p>
  </div>
</div>
            <p
              className="max-w-xs mb-6"
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
  className="inline-flex items-center gap-2 px-3 py-1 rounded-full mt-4 mb-5"
  style={{
    background: "rgba(34,197,94,0.15)",
    color: "#22C55E",
    fontSize: "12px",
    fontWeight: 600,
  }}
>
  🟢 Launching Soon in Ranchi
</div>

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

            <p
  className="mt-4 text-sm"
  style={{ color: "#9CA3AF" }}
>
  🚀 150+ Users • 50+ Salon Partners Joined
</p>
          </div>

          {/* Links */}
          <div>
            <p
              className="mb-4 text-xs uppercase tracking-widest"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: "rgba(255,255,255,0.3)" }}
            >
              Company
            </p>
            <ul className="space-y-3">
              {["About Us", "Features", "How It Works", "For Salons", "FAQ"].map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm transition-colors duration-200"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.5)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#E8B4B8")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p
              className="mb-4 text-xs uppercase tracking-widest"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: "rgba(255,255,255,0.3)" }}
            >
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@digisaloon.in"
                  className="text-sm flex items-center gap-2 transition-colors duration-200"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.5)" }}
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
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.5)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#E8B4B8")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                >
                  <Phone className="w-3.5 h-3.5" />
                  +91-8809972414
                </a>
              </li>

             <div className="mt-6">
  <p className="text-xs text-gray-400 mb-3">
    Coming Soon On
  </p>

  <div className="flex flex-col gap-3">
    <div className="relative w-fit">
      <img
        src="/google-play.png"
        alt="Google Play"
        className="h-10"
      />
      <span className="absolute -top-2 -right-3 bg-red-600 text-white text-[10px] px-2 py-1 rounded-full">
        Soon
      </span>
    </div>

    <div className="relative w-fit">
      <img
        src="/app-store.png"
        alt="App Store"
        className="h-10"
      />
      <span className="absolute -top-2 -right-3 bg-red-600 text-white text-[10px] px-2 py-1 rounded-full">
        Soon
      </span>
    </div>
  </div>
</div>
            </ul>
          </div>
        </div>

        

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p
            className="text-xs"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.3)" }}
          >
            © 2025 DigiSaloon. All rights reserved. 🇮🇳 Proudly Built in India
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
                className="text-xs transition-colors duration-200"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.3)" }}
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
