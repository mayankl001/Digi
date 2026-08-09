import React from "react";

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-slate-50 text-slate-700 antialiased min-h-screen py-10 md:py-16">
      
      {/* 🔙 Back to Home Navigation Button */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 mb-6">
        <a 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-red-700 transition-colors bg-white border border-slate-200 px-4 py-2 rounded-full shadow-xs"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </a>
      </div>

      <main className="max-w-4xl mx-auto px-4 md:px-8 space-y-12">
        
        {/* Header Section */}
        <div className="border-b border-slate-200 pb-8 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
              Comprehensive Legal Documentation
            </span>
            <span className="text-xs text-slate-400">Effective Date: June 2026</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Privacy Policy & Data Protection
          </h1>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
            At DigiSaloon ("We", "Our", "Us"), operated in Ranchi, Jharkhand, India, we are committed to upholding your privacy rights and protecting your personal information. This Privacy Policy details the policies and procedures on the collection, use, disclosure, transfer, and safeguarding of your data when you access or use our mobile application, web services, and merchant booking platform.
          </p>
        </div>

        {/* Extended Clauses Block */}
        <div className="space-y-12">
          
          {/* 1. Introduction & Acceptance */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              1. INTRODUCTION AND ACCEPTANCE OF TERMS
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              By downloading, installing, or using the DigiSaloon Mobile Application ("App") or accessing our platform services, you acknowledge that you have read, understood, and agreed to be bound by the terms outlined in this Privacy Policy. If you do not agree with any part of this policy, you must immediately cease accessing or using our services.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              This policy is drafted in accordance with applicable data protection laws in India, including the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the Digital Personal Data Protection (DPDP) Act.
            </p>
          </section>

          {/* 2. Detailed Data Collection */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              2. INFORMATION WE COLLECT
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We collect information to deliver efficient salon booking experiences, manage customer-partner communications, and continuously improve platform services.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                <strong className="text-sm text-slate-900 block">2.1 Personal Identification Information</strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Full name, mobile phone number, email address, gender, date of birth, and profile picture provided during account setup or OTP verification.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                <strong className="text-sm text-slate-900 block">2.2 Appointment & Transaction Details</strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Services chosen, preferred stylists, slot timings, booking status, payment receipts, order history, and feedback/ratings left for salon partners.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                <strong className="text-sm text-slate-900 block">2.3 Device & Technical Logs</strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  IP address, unique device identifiers (IMEI/UUID), app crash reports, device brand and model, operating system version, and mobile network info.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                <strong className="text-sm text-slate-900 block">2.4 Location & GPS Data</strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Precise GPS coordinates collected with your permission while the app is in use to list nearby salons, calculate distances, and recommend local deals.
                </p>
              </div>
            </div>
          </section>

          {/* 3. How We Use Your Data */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              3. HOW WE USE YOUR INFORMATION
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Your data is utilized strictly for legitimately defined business purposes, including but not limited to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
              <li>Generating and authenticating your account via One-Time Passwords (OTP).</li>
              <li>Facilitating seamless appointment scheduling and passing necessary booking details to partner salons.</li>
              <li>Sending automated WhatsApp/SMS alerts for booking confirmations, slot reminders, and reschedule alerts.</li>
              <li>Processing online payment transactions via secure, PCI-DSS compliant third-party payment gateways.</li>
              <li>Providing real-time customer support, troubleshooting technical glitches, and resolving dispute claims.</li>
              <li>Delivering personalized promotional discounts, salon offers, and loyalty rewards (opt-out available).</li>
              <li>Analyzing app performance, user trends, and UI navigation flow to upgrade software quality.</li>
            </ul>
          </section>

          {/* 4. Disclosure & Third-Party Sharing */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              4. DISCLOSURE AND DATA SHARING
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We strictly enforce a policy against selling or renting your personal information to third parties. Data sharing is limited to the following operational scenarios:
            </p>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="bg-white p-4 rounded-xl border border-slate-200/80">
                <strong className="text-slate-900">Salon Partners:</strong> We share your name, phone number, and selected service details with the specific salon where you booked an appointment solely to fulfill your service request.
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200/80">
                <strong className="text-slate-900">Authorized Infrastructure Providers:</strong> Data is hosted on secure cloud platforms (e.g., Firebase, AWS, Render) and processed by verification APIs (Razorpay, Stripe, SMS Gateways).
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200/80">
                <strong className="text-slate-900">Legal Enforcement:</strong> We may disclose information if required by court orders, government authorities, law enforcement investigations, or to protect the safety and rights of DigiSaloon users.
              </div>
            </div>
          </section>

          {/* 5. Payments & Security Standard */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              5. FINANCIAL DATA & PAYMENT SECURITY
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              DigiSaloon does NOT store or record your full Credit/Debit card numbers, UPI PINs, or banking passwords on our servers.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              All financial transactions are redirected and encrypted through RBI-approved Payment Aggregators (such as Razorpay or Cashfree) adhering to stringent PCI-DSS (Payment Card Industry Data Security Standard) guidelines. End-to-end SSL/TLS encryption shields your checkout sessions.
            </p>
          </section>

          {/* 6. Location Permissions */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              6. LOCATION PERMISSIONS & TRACKING
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              To discover salons nearby, DigiSaloon requests access to your mobile device's foreground location services. You retain full control over location access and can disable GPS permissions via your device settings at any time. However, disabling location services may require you to manually enter your city or PIN code to find salons.
            </p>
          </section>

          {/* 7. Cookies & Local Storage */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              7. COOKIES AND LOCAL STORAGE
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our web applications and mobile webviews utilize essential cookies and local browser storage to maintain active session tokens, remember preferences, and analyze web traffic using standard tools like Google Analytics. You can instruct your web browser to block all cookies, though certain interactive features may cease functioning properly.
            </p>
          </section>

          {/* 8. Data Security Protocol */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              8. DATA SECURITY AND RETENTION
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We employ administrative, technical, and physical safeguards (including database firewalling, encrypted tokens, and strict access controls) to prevent unauthorized access, loss, or alteration of your information.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              We retain your personal data only for as long as your account remains active or as required to comply with Indian accounting, tax, and legal obligations.
            </p>
          </section>

          {/* 9. User Rights & Account Deletion */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              9. YOUR DATA RIGHTS & ACCOUNT DELETION
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Under Indian DPDP laws, you possess distinct rights regarding your personal data:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
              <li><strong>Right to Access & Review:</strong> You can request a copy of the personal information stored in our system.</li>
              <li><strong>Right to Correction:</strong> You can update incomplete or inaccurate information directly through the App Profile settings.</li>
              <li><strong>Right to Account Erasure:</strong> You can request complete deletion of your account and purge active data records at any time.</li>
            </ul>
            <div className="bg-red-50 border border-red-200 p-4 rounded-xl text-xs md:text-sm text-red-900 mt-2">
              <strong>Account Erasure Method:</strong> Navigate to App Settings &gt; Profile &gt; Delete Account, or send an email request with your registered mobile number to <span className="font-mono underline">support@digisaloon.in</span>. Data will be purged from active databases within 7-14 business days.
            </div>
          </section>

          {/* 10. Children's Privacy */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              10. CHILDREN'S PRIVACY
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              DigiSaloon services are not directed at individuals under 13 years of age. We do not knowingly collect personal identifiable information from children. If a parent or guardian discovers that a child has created an account without consent, please contact us immediately for account termination.
            </p>
          </section>

          {/* 11. Policy Modifications */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              11. CHANGES TO THIS PRIVACY POLICY
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We reserve the right to revise or update this Privacy Policy as our features evolve or legal guidelines change. Updates will be published on this page with a refreshed "Effective Date". Continued use of DigiSaloon services following any updates signifies acceptance of the amended policy.
            </p>
          </section>

          {/* 12. Grievance Officer & Contact */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              12. GRIEVANCE OFFICER & CONTACT INFORMATION
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              In accordance with the Information Technology Act 2000 and rules made thereunder, the contact details of the Grievance Redressal Cell for DigiSaloon are provided below:
            </p>
            <div className="bg-slate-900 text-slate-200 p-6 rounded-2xl space-y-3 text-sm">
              <p className="font-bold text-white text-base">DigiSaloon Support & Grievance Cell</p>
              <p><strong>Email:</strong> <a href="mailto:support@digisaloon.in" className="text-red-400 hover:underline font-mono">support@digisaloon.in</a></p>
              <p><strong>Helpline:</strong> +91-99734 99471</p>
              <p><strong>Address:</strong> Angara, Ranchi, Jharkhand - 835103, India.</p>
              <p className="text-xs text-slate-400 pt-2 border-t border-slate-800">
                We endeavor to address and resolve any privacy complaints within 30 days of official receipt.
              </p>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};