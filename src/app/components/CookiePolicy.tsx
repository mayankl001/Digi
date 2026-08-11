import React from "react";

export const CookiePolicy: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Cookie Policy
          </span>
          <span className="text-xs text-slate-400">Last Updated: 11 August 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          COOKIE POLICY
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          This Cookie Policy explains how DigiSaloon ("DigiSaloon", "we", "us" or "our") may use cookies and similar technologies when you access or use our website and web-based services.
        </p>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          This Policy should be read together with DigiSaloon's Privacy Policy and Terms & Conditions.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="cookie-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. What Are Cookies?</h2>
          <p>Cookies are small text files that may be stored on your device when you visit a website.</p>
          <p>Cookies help websites perform essential functions, remember preferences, maintain user sessions and understand how users interact with online services.</p>
        </section>

        <section id="cookie-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. Where We May Use Cookies</h2>
          <p>DigiSaloon may use cookies and similar technologies on:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>DigiSaloon website</li>
            <li>Partner Web App</li>
            <li>Manage Web App</li>
            <li>Other authorized DigiSaloon web services</li>
          </ul>
          <p>Mobile applications may use similar technologies such as local storage, SDKs and device identifiers where applicable.</p>
        </section>

        <section id="cookie-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. Why DigiSaloon Uses Cookies</h2>
          <p>DigiSaloon may use cookies and similar technologies for purposes including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Authentication</li>
            <li>Login and session management</li>
            <li>Security</li>
            <li>Website functionality</li>
            <li>User preferences</li>
            <li>Performance</li>
            <li>Analytics</li>
            <li>Service improvement</li>
          </ul>
        </section>

        <section id="cookie-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. Essential Cookies</h2>
          <p>Essential cookies may be necessary for the website or web application to function properly.</p>
          <p>They may support:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Login</li>
            <li>Authentication</li>
            <li>Session management</li>
            <li>Security</li>
            <li>Access control</li>
            <li>Basic application functionality</li>
          </ul>
          <p>If essential cookies are blocked, certain features may not work correctly.</p>
        </section>

        <section id="cookie-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. Authentication and Session Cookies</h2>
          <p>DigiSaloon may use cookies to maintain an authenticated session after a user logs in.</p>
          <p>These technologies may help ensure that users remain logged in while navigating between authorized pages.</p>
          <p>They may also help prevent unauthorized access to protected areas.</p>
        </section>

        <section id="cookie-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. Security Cookies</h2>
          <p>Cookies or similar technologies may be used to support security functions, including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Detecting suspicious activity</li>
            <li>Preventing unauthorized access</li>
            <li>Protecting sessions</li>
            <li>Supporting fraud prevention</li>
            <li>Maintaining platform security</li>
          </ul>
        </section>

        <section id="cookie-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. Preference Cookies</h2>
          <p>Where applicable, DigiSaloon may use cookies to remember certain settings or preferences.</p>
          <p>This can help improve the user's experience by reducing the need to repeatedly enter the same information.</p>
        </section>

        <section id="cookie-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. Analytics Technologies</h2>
          <p>DigiSaloon may use analytics tools or similar technologies to understand how its website and services are used.</p>
          <p>Analytics information may help us understand:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Website traffic</li>
            <li>Frequently used features</li>
            <li>General usage patterns</li>
            <li>Technical performance</li>
            <li>Errors</li>
            <li>User experience</li>
          </ul>
          <p>Analytics providers may process information according to their own privacy policies.</p>
        </section>

        <section id="cookie-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. Performance and Technical Monitoring</h2>
          <p>DigiSaloon may use technologies to monitor technical performance and identify problems such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Application errors</li>
            <li>Slow-loading pages</li>
            <li>Technical failures</li>
            <li>Compatibility issues</li>
          </ul>
          <p>This information may be used to improve the reliability and performance of DigiSaloon services.</p>
        </section>

        <section id="cookie-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. Third-Party Services</h2>
          <p>Some cookies or similar technologies may be provided by third-party services used by DigiSaloon.</p>
          <p>These may include providers supporting:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Analytics</li>
            <li>Security</li>
            <li>Payments</li>
            <li>Maps</li>
            <li>Authentication</li>
            <li>Communications</li>
            <li>Hosting</li>
            <li>Other website functionality</li>
          </ul>
          <p>Third-party providers may have their own privacy and cookie policies.</p>
        </section>

        <section id="cookie-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. Payment-Related Technologies</h2>
          <p>When online payment functionality is used, third-party payment providers may use cookies or similar technologies as part of their payment and security processes.</p>
          <p>Payment providers may process such information according to their applicable terms and privacy policies.</p>
        </section>

        <section id="cookie-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. Mobile Applications</h2>
          <p>DigiSaloon mobile applications may not use traditional browser cookies in the same way as a website.</p>
          <p>Instead, the applications may use similar technologies, including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Local storage</li>
            <li>Software development kits (SDKs)</li>
            <li>Device identifiers</li>
            <li>Authentication tokens</li>
            <li>Application analytics technologies</li>
          </ul>
          <p>These technologies may be used for authentication, security, analytics, functionality and service improvement.</p>
        </section>

        <section id="cookie-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. Personal Information</h2>
          <p>Some cookies or similar technologies may be associated with information that can identify or relate to a user.</p>
          <p>Where this occurs, the information will be handled according to DigiSaloon's Privacy Policy and applicable requirements.</p>
        </section>

        <section id="cookie-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. Cookie Duration</h2>
          <p>Cookies may generally be classified as:</p>
          <div className="space-y-2 pt-1">
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
              <strong className="text-slate-900 block font-semibold">Session Cookies</strong>
              <p className="text-xs">These are temporary cookies that may expire when the browsing session ends or the browser is closed.</p>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
              <strong className="text-slate-900 block font-semibold">Persistent Cookies</strong>
              <p className="text-xs">These may remain on the device for a defined period or until they are manually deleted. The duration depends on the purpose and configuration of the particular cookie or technology.</p>
            </div>
          </div>
        </section>

        <section id="cookie-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. Managing Cookies</h2>
          <p>Most modern browsers allow users to manage cookie settings.</p>
          <p>Depending on the browser, users may be able to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>View cookies</li>
            <li>Delete cookies</li>
            <li>Block cookies</li>
            <li>Allow only certain cookies</li>
            <li>Disable third-party cookies</li>
            <li>Clear stored website data</li>
          </ul>
          <p>Users should refer to their browser's settings or help documentation for specific instructions.</p>
        </section>

        <section id="cookie-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. Effect of Disabling Cookies</h2>
          <p>Disabling certain cookies may affect the functionality of DigiSaloon's website or web applications.</p>
          <p>For example, disabling essential cookies may prevent:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Login</li>
            <li>Authentication</li>
            <li>Session management</li>
            <li>Certain secure features</li>
          </ul>
          <p>from working correctly.</p>
        </section>

        <section id="cookie-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. Do Not Track Signals</h2>
          <p>Browser "Do Not Track" settings may not always be supported or recognized by all technologies used by DigiSaloon or its third-party service providers.</p>
          <p>Where applicable, DigiSaloon will handle such settings according to available technical functionality and applicable requirements.</p>
        </section>

        <section id="cookie-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. Changes to Cookies</h2>
          <p>DigiSaloon may introduce, remove or modify cookies and similar technologies as its services develop.</p>
          <p>The types and purposes of technologies used may therefore change over time.</p>
        </section>

        <section id="cookie-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. Changes to This Cookie Policy</h2>
          <p>DigiSaloon may update this Cookie Policy to reflect changes in:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Website functionality</li>
            <li>Web applications</li>
            <li>Mobile applications</li>
            <li>Analytics tools</li>
            <li>Third-party services</li>
            <li>Security technologies</li>
            <li>Applicable legal requirements</li>
          </ul>
          <p>The updated version may be published on the DigiSaloon website.</p>
        </section>

        <section id="cookie-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">20. Contact Us</h2>
          <p>If you have questions regarding this Cookie Policy or DigiSaloon's use of cookies and similar technologies, contact:</p>
          <div className="bg-slate-900 text-slate-200 p-5 rounded-xl space-y-2 text-xs md:text-sm">
            <p className="font-bold text-white text-base">DigiSaloon</p>
            <p><strong>Email:</strong> support@digisaloon.in</p>
            <p><strong>Phone:</strong> 9973499471</p>
            <p><strong>Address:</strong> Angara, Ranchi, Jharkhand – 835103</p>
            <p><strong>Website:</strong> digisaloon.in</p>
          </div>
        </section>

      </div>
    </div>
  );
};