import { Scissors, Instagram, Twitter, Facebook, Linkedin, Mail } from "lucide-react";

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
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #991B1B 0%, #B91C1C 100%)" }}
              >
                <Scissors className="w-4.5 h-4.5 text-white" strokeWidth={2} />
              </div>
              <span
                className="text-xl tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, color: "#fff" }}
              >
                Digi<span style={{ color: "#E8B4B8" }}>Saloon</span>
              </span>
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
              The premium salon & spa booking platform for Ranchi. Connecting beauty enthusiasts with verified salon professionals.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Linkedin, href: "#" },
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
              {["About Us", "Careers", "Blog", "Press"].map((l) => (
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
                  hello@digisaloon.in
                </a>
              </li>
              <li>
                <a
                  href="mailto:partners@digisaloon.in"
                  className="text-sm flex items-center gap-2 transition-colors duration-200"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.5)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#E8B4B8")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                >
                  <Mail className="w-3.5 h-3.5" />
                  partners@digisaloon.in
                </a>
              </li>
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
            © 2025 DigiSaloon. All rights reserved. Made with ❤️ in Ranchi, India.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-xs transition-colors duration-200"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.3)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#E8B4B8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
