import React from "react";

export const CookiePolicy: React.FC = () => {
  return (
    <div className="bg-slate-50 text-slate-700 antialiased min-h-screen py-10 md:py-16">
      <main className="max-w-4xl mx-auto px-4 md:px-8 space-y-12">
        
        {/* Header Section */}
        <div className="border-b border-slate-200 pb-8 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
              Digital Tracking & Data Policy
            </span>
            <span className="text-xs text-slate-400">Effective Date: June 2026</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Cookie & Tracking Technology Policy
          </h1>
          <div className="bg-amber-50 border border-amber-200/80 p-4 rounded-xl text-xs text-amber-900 font-mono leading-relaxed mt-4">
            THIS DOCUMENT EXPLAINS HOW DIGISALOON USES COOKIES, LOCAL STORAGE, DEVICE TOKENS, AND WEB BEACONS IN COMPLIANCE WITH THE INFORMATION TECHNOLOGY ACT, 2000 AND DIGITAL PERSONAL DATA PROTECTION (DPDP) ACT.
          </div>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
            This Cookie Policy governs the use of cookies and tracking technologies across the DigiSaloon mobile application, website, and digital booking ecosystem operated in Ranchi, Jharkhand, India. By accessing our platform, you consent to our use of cookies as outlined herein.
          </p>
        </div>

        {/* Extended Cookie Clauses */}
        <div className="space-y-12">
          
          {/* 1. What are Cookies */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              1. UNDERSTANDING COOKIES AND TRACKING TECHNOLOGIES
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Cookies are small text files or data packets placed on your computer, smartphone, or mobile device when you interact with web applications or mobile webviews. They allow our platform to recognize your device, maintain active login sessions, remember chosen salon filters, and safeguard transactions.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              In addition to standard cookies, DigiSaloon utilizes complementary web tracking technologies:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                <strong className="text-sm text-slate-900 block">HTML5 Local Storage</strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Stores persistent data directly in your browser or app sandbox (e.g., active cart items, selected salon branch) without expiring automatically on tab closure.
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                <strong className="text-sm text-slate-900 block">Session Storage</strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Maintains temporary data valid only for the duration of your active booking flow, purging as soon as you close the app session.
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                <strong className="text-sm text-slate-900 block">Firebase Authentication Tokens</strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Secure cryptographic keys stored on your device to keep you securely logged in via OTP without requesting authentication repeatedly.
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                <strong className="text-sm text-slate-900 block">Push Notification Tokens (FCM)</strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Unique device registration IDs used exclusively to send real-time appointment reminders, queue status updates, and booking confirmations.
                </p>
              </div>
            </div>
          </section>

          {/* 2. Categorization of Cookies */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              2. DETAILED CLASSIFICATION OF COOKIES WE USE
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We group the cookies and tracking tokens deployed across DigiSaloon into four main functional categories:
            </p>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <strong className="text-sm text-slate-900">2.1 Strictly Necessary / Essential Cookies</strong>
                  <span className="text-[10px] font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">Always Active</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  These cookies are mandatory for core system functionality, security protocols, and checkout operations. They authenticate your account, prevent CSRF attacks, and enable payment gateway routing. You cannot disable essential cookies without breaking the app.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                <strong className="text-sm text-slate-900 block">2.2 Performance & Analytical Cookies</strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  These cookies help us collect aggregate, non-personally identifiable statistical data on how users navigate DigiSaloon. We measure page load speeds, screen crash occurrences, popular search keywords (e.g., "bridal hair Ranchi"), and drop-off points to optimize software efficiency.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                <strong className="text-sm text-slate-900 block">2.3 Functional & Preference Cookies</strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Functional cookies remember your custom choices and regional preferences—such as default city filters (Ranchi), price sorting, applied coupon codes, and UI color modes—providing a personalized experience on subsequent visits.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                <strong className="text-sm text-slate-900 block">2.4 Marketing & Promotional Tracking</strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Marketing identifiers allow us to deliver targeted salon discounts, promotional referral rewards, and seasonal package alerts based on your past service bookings.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Third-Party Vendor Ecosystem */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              3. THIRD-PARTY TRACKING INTEGRATIONS
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              DigiSaloon collaborates with vetted third-party service providers who may set cookies or access device identifiers to perform specific operations on our behalf:
            </p>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 space-y-1">
                <strong className="text-slate-900 block">Payment Gateways (Razorpay / Cashfree / Stripe):</strong>
                <p className="text-xs text-slate-600">
                  Deploy session cookies to handle encrypted PCI-DSS compliant checkout windows and tokenized UPI verification.
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 space-y-1">
                <strong className="text-slate-900 block">Google Analytics & Search Console:</strong>
                <p className="text-xs text-slate-600">
                  Generates anonymized IP logs to analyze regional user demographics, browser performance, and referral traffic.
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 space-y-1">
                <strong className="text-slate-900 block">Firebase & Cloud Infrastructure (Google Cloud / Render):</strong>
                <p className="text-xs text-slate-600">
                  Manages encrypted database sessions, real-time slot synchronization, and app error logging.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Session Duration */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              4. COOKIE RETENTION PERIODS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-600">
              <div className="bg-white p-5 rounded-xl border border-slate-200/80 space-y-2">
                <strong className="text-slate-900 block">Session Cookies (Transient)</strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Temporary data files stored in memory that are deleted automatically when you close your web browser or exit the mobile application.
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200/80 space-y-2">
                <strong className="text-slate-900 block">Persistent Cookies (Stored)</strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Data files that remain on your hard drive or app cache for a defined expiration period (ranging from 30 days to 1 year) or until manually cleared.
                </p>
              </div>
            </div>
          </section>

          {/* 5. Managing & Disabling */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              5. HOW TO CONTROL, DISABLE, OR CLEAR COOKIES
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              You retain total authority over cookie management and can alter your browser or device permissions at any time:
            </p>
            
            <div className="space-y-3 text-sm text-slate-600">
              <div className="bg-white p-4 rounded-xl border border-slate-200/80">
                <strong className="text-slate-900">Desktop / Web Browsers:</strong> You can block, reject, or purge stored cookies via settings in Google Chrome (Settings &gt; Privacy and Security), Apple Safari, Mozilla Firefox, or Microsoft Edge.
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200/80">
                <strong className="text-slate-900">Mobile Operating Systems (Android / iOS):</strong> You can reset advertising identifiers or restrict background location tracking via System Settings &gt; Privacy &gt; App Permissions.
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 p-4 rounded-xl text-xs md:text-sm text-red-900 mt-2">
              <strong>Impact of Blocking Cookies:</strong> Please note that if you completely block essential cookies or clear local storage, critical features such as keeping you logged in via OTP, saving appointment slots, and processing online payments will fail to function.
            </div>
          </section>

          {/* 6. Policy Updates */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              6. UPDATES TO THIS COOKIE POLICY
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              DigiSaloon reserves the right to modify or update this Cookie Policy periodically to reflect technological advances, infrastructure upgrades, or revised legal standards. Any modifications will be posted on this page with an updated "Effective Date".
            </p>
          </section>

          {/* 7. Contact Details */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              7. CONTACT US & TECHNICAL SUPPORT
            </h2>
            <p className="text-sm text-slate-600">
              For any questions or concerns regarding our cookie usage and data security protocols, please reach out to our team:
            </p>
            <div className="bg-slate-900 text-slate-200 p-6 rounded-2xl space-y-2 text-sm">
              <p className="font-bold text-white text-base">DigiSaloon Support & Data Protection Cell</p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:support@digisaloon.in" className="text-red-400 hover:underline font-mono">
                  support@digisaloon.in
                </a>
              </p>
              <p><strong>Phone:</strong> +91-99734 99471</p>
              <p><strong>Address:</strong> Angara, Ranchi, Jharkhand - 835103, India.</p>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};