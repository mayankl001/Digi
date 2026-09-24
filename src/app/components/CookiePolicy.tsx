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
          <span className="text-xs text-slate-400">Last Updated: 21 September 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          COOKIE POLICY
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          This Cookie Policy explains how DigiSaloon (“DigiSaloon”, “we”, “us”, or “our”) uses cookies and similar technologies on our website and related online services.
        </p>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          By using the DigiSaloon website, you acknowledge the practices described in this Cookie Policy.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="cookie-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. WHAT ARE COOKIES?</h2>
          <p>Cookies are small text files that may be stored on your device when you visit a website.</p>
          <p>Cookies help websites remember information about your visit, maintain functionality, improve user experience, and understand how the website is used.</p>
          <p>DigiSaloon may also use technologies similar to cookies, such as local storage, pixels, SDKs, and device identifiers.</p>
        </section>

        <section id="cookie-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. WHY DIGISALOON USES COOKIES</h2>
          <p>DigiSaloon may use cookies and similar technologies to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Keep the website functioning properly.</li>
            <li>Maintain login and session information.</li>
            <li>Remember user preferences.</li>
            <li>Improve website performance.</li>
            <li>Understand how visitors use the website.</li>
            <li>Improve navigation and user experience.</li>
            <li>Detect and prevent security issues.</li>
            <li>Analyze website traffic and performance.</li>
            <li>Support certain website features.</li>
          </ul>
        </section>

        <section id="cookie-3" className="space-y-4 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. TYPES OF COOKIES WE MAY USE</h2>
          
          <div className="space-y-4 pt-2">
            <div className="p-4 border border-slate-200 rounded-lg bg-slate-50/50 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">3.1 Essential Cookies</h3>
              <p>These cookies are necessary for basic website functionality.</p>
              <p>They may be used for:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
                <li>Login sessions.</li>
                <li>Authentication.</li>
                <li>Security.</li>
                <li>Session management.</li>
                <li>Basic website functionality.</li>
              </ul>
              <p className="pt-2">Because these cookies may be necessary for the operation of the website, they may not always be disabled through the website.</p>
            </div>

            <div className="p-4 border border-slate-200 rounded-lg bg-slate-50/50 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">3.2 Functional Cookies</h3>
              <p>Functional cookies help remember choices and preferences made by users.</p>
              <p>For example, they may help remember:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
                <li>Language preferences.</li>
                <li>User preferences.</li>
                <li>Certain interface settings.</li>
                <li>Session-related information.</li>
              </ul>
            </div>

            <div className="p-4 border border-slate-200 rounded-lg bg-slate-50/50 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">3.3 Analytics Cookies</h3>
              <p>DigiSaloon may use analytics technologies to understand how visitors interact with the website.</p>
              <p>These technologies may help us understand:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
                <li>Number of visitors.</li>
                <li>Frequently visited pages.</li>
                <li>Website performance.</li>
                <li>General user interaction.</li>
                <li>Technical errors.</li>
              </ul>
              <p className="pt-2">Analytics information may be aggregated or otherwise processed to improve our services.</p>
            </div>

            <div className="p-4 border border-slate-200 rounded-lg bg-slate-50/50 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">3.4 Security Cookies</h3>
              <p>Security-related cookies and similar technologies may be used to:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
                <li>Detect suspicious activity.</li>
                <li>Protect user accounts.</li>
                <li>Prevent fraudulent activity.</li>
                <li>Maintain platform security.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="cookie-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. THIRD-PARTY SERVICES</h2>
          <p>DigiSaloon may use third-party services that may place or access cookies or similar technologies.</p>
          <p>These services may include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Google services.</li>
            <li>Firebase.</li>
            <li>Analytics providers.</li>
            <li>Payment-related services.</li>
            <li>Security services.</li>
            <li>Other technology providers integrated into DigiSaloon.</li>
          </ul>
          <p className="pt-2">Third-party providers may have their own privacy and cookie policies.</p>
          <p>DigiSaloon does not control the cookie practices of independent third-party providers.</p>
        </section>

        <section id="cookie-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. PAYMENT SERVICES</h2>
          <p>DigiSaloon may use third-party payment providers such as Razorpay for processing online booking payments.</p>
          <p>Payment providers may use cookies or similar technologies for purposes such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Payment processing.</li>
            <li>Fraud prevention.</li>
            <li>Security.</li>
            <li>Transaction verification.</li>
          </ul>
          <p className="pt-2">Payment processing is subject to the applicable payment provider's terms and policies.</p>
        </section>

        <section id="cookie-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. MOBILE APPLICATIONS</h2>
          <p>The DigiSaloon mobile application may use technologies similar to cookies, including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>SDKs.</li>
            <li>Local storage.</li>
            <li>Device identifiers.</li>
            <li>Session identifiers.</li>
            <li>Analytics technologies.</li>
          </ul>
          <p className="pt-2">These technologies may be used for authentication, functionality, security, analytics, and improving the application.</p>
        </section>

        <section id="cookie-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. LOCATION-RELATED TECHNOLOGIES</h2>
          <p>DigiSaloon may use location-related technologies when the user provides the required device permission.</p>
          <p>Location information may be used to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Find nearby salons.</li>
            <li>Display relevant salon listings.</li>
            <li>Provide location-based features.</li>
            <li>Improve the user experience.</li>
          </ul>
          <p className="pt-2">Location permissions can be controlled through the device settings.</p>
        </section>

        <section id="cookie-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. HOW LONG COOKIES REMAIN</h2>
          <p>Cookies may be either:</p>
          <p><strong>Session Cookies:</strong> These are generally deleted when the browser session ends.</p>
          <p><strong>Persistent Cookies:</strong> These may remain on your device for a defined period or until they are manually deleted.</p>
          <p>The retention period depends on the purpose of the cookie and the technology being used.</p>
        </section>

        <section id="cookie-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. MANAGING COOKIES</h2>
          <p>You may control or delete cookies through your browser settings.</p>
          <p>Most browsers allow you to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>View stored cookies.</li>
            <li>Delete cookies.</li>
            <li>Block cookies.</li>
            <li>Allow cookies only from selected websites.</li>
            <li>Receive notifications before cookies are stored.</li>
          </ul>
          <p className="pt-2">Disabling certain cookies may affect the functionality or performance of the DigiSaloon website.</p>
        </section>

        <section id="cookie-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. DO-NOT-TRACK SIGNALS</h2>
          <p>Some browsers and devices provide “Do Not Track” or similar privacy settings.</p>
          <p>Because there is no universally accepted technical standard for responding to all such signals, DigiSaloon may not respond to every browser or device signal in the same manner.</p>
        </section>

        <section id="cookie-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. INFORMATION COLLECTED THROUGH COOKIES</h2>
          <p>Depending on the technology used, information collected may include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>IP address.</li>
            <li>Browser type.</li>
            <li>Device type.</li>
            <li>Operating system.</li>
            <li>Pages visited.</li>
            <li>Approximate visit time.</li>
            <li>Session information.</li>
            <li>Website interaction information.</li>
            <li>Technical information.</li>
          </ul>
          <p className="pt-2">Cookies generally do not directly identify you by name unless the information is associated with information you have provided to DigiSaloon.</p>
        </section>

        <section id="cookie-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. COOKIE SECURITY</h2>
          <p>DigiSaloon takes reasonable measures to protect information collected through cookies and similar technologies.</p>
          <p>However, no internet-based technology can guarantee complete security.</p>
          <p>Users should also take reasonable steps to protect their devices, browsers, and account credentials.</p>
        </section>

        <section id="cookie-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. PRIVACY POLICY</h2>
          <p>Cookies and similar technologies may collect or process information that is also covered by the DigiSaloon Privacy Policy.</p>
          <p>For more information about how DigiSaloon collects, uses, stores, and protects personal information, please refer to our Privacy Policy.</p>
        </section>

        <section id="cookie-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. CHANGES TO THIS COOKIE POLICY</h2>
          <p>DigiSaloon may update this Cookie Policy from time to time.</p>
          <p>Any updated version will be published on the DigiSaloon platform with a revised “Last Updated” date.</p>
          <p>Users are encouraged to review this page periodically.</p>
        </section>

        <section id="cookie-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. CONTACT US</h2>
          <p>If you have questions or concerns about this Cookie Policy, contact:</p>
          <div className="bg-slate-900 text-slate-200 p-5 rounded-xl space-y-3 text-xs md:text-sm">
            <p className="font-bold text-white text-base">DigiSaloon</p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:support@digisaloon.in" className="text-red-400 hover:underline">
                support@digisaloon.in
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:9973499471" className="text-red-400 hover:underline">
                9973499471
              </a>
            </p>
            <p><strong>Address:</strong> Angara, Ranchi, Jharkhand 835103</p>
            <p>
              <strong>Website:</strong>{" "}
              <a href="https://digisaloon.in" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline">
                digisaloon.in
              </a>
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};