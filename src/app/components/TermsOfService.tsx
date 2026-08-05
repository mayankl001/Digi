import React from "react";

export const TermsOfService: React.FC = () => {
  return (
    <div className="bg-slate-50 text-slate-700 antialiased min-h-screen py-10 md:py-16">
      <main className="max-w-4xl mx-auto px-4 md:px-8 space-y-12">
        
        {/* Header Section */}
        <div className="border-b border-slate-200 pb-8 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
              Legal Framework & User Agreement
            </span>
            <span className="text-xs text-slate-400">Effective Date: June 2026</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Terms of Service
          </h1>
          <div className="bg-amber-50 border border-amber-200/80 p-4 rounded-xl text-xs text-amber-900 font-mono leading-relaxed mt-4">
            THIS IS AN ELECTRONIC RECORD IN TERMS OF THE INFORMATION TECHNOLOGY ACT, 2000 AND RULES THEREUNDER. THIS DOCUMENT IS PUBLISHED IN ACCORDANCE WITH THE PROVISIONS OF RULE 3 (1) OF THE INFORMATION TECHNOLOGY (INTERMEDIARIES GUIDELINES AND DIGITAL MEDIA ETHICS CODE) RULES, 2011.
          </div>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
            Welcome to DigiSaloon. By downloading, registering, accessing, or using our mobile application ("App"), website, or backend services, you agree to be legally bound by these Terms of Service ("Terms"). Please read them carefully before making any service bookings.
          </p>
        </div>

        {/* Extended Terms Clauses */}
        <div className="space-y-12">
          
          {/* 1. Definitions */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              1. DEFINITIONS AND INTERPRETATION
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                <strong className="text-sm text-slate-900 block">1.1 Company / Platform</strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Refers to DigiSaloon, its parent entities, subsidiaries, mobile applications, websites, and technical infrastructure.
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                <strong className="text-sm text-slate-900 block">1.2 Partner / Merchant</strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Refers to third-party independent salons, beauty parlors, spas, barbershops, and stylists listed on the platform.
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                <strong className="text-sm text-slate-900 block">1.3 User / Customer</strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Refers to any individual registering, searching, or booking salon appointments through DigiSaloon.
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                <strong className="text-sm text-slate-900 block">1.4 Services</strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Refers to the digital booking enablement, queue estimation, and payment processing tools provided by DigiSaloon.
                </p>
              </div>
            </div>
          </section>

          {/* 2. Intermediary Status */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              2. ROLE OF DIGISALOON (AGGREGATOR INTERMEDIARY)
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              DigiSaloon operates strictly as a technology marketplace aggregator connecting Users with independent Partner salons.
            </p>
            <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
              <div className="bg-white p-4 rounded-xl border border-slate-200/80">
                <strong className="text-slate-900">Non-Service Provider:</strong> DigiSaloon does not operate salons, employ barbers or stylists, or directly render grooming and beauty treatments.
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200/80">
                <strong className="text-slate-900">Independent Contract:</strong> Any agreement for service fulfillment, quality guarantee, or pricing is executed directly between the User and the respective Salon Partner.
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200/80">
                <strong className="text-slate-900">Intermediary Protection:</strong> DigiSaloon claims safe harbor protection under Section 79 of the Information Technology Act, 2000 for third-party merchant content and listings.
              </div>
            </div>
          </section>

          {/* 3. Account Security */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              3. ACCOUNT ELIGIBILITY AND SECURITY
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600 leading-relaxed">
              <li><strong>Age Limit:</strong> You must be at least 18 years of age to register an account. Minors may use the platform solely under direct parental or legal guardian supervision.</li>
              <li><strong>OTP Authentication:</strong> Registration requires a valid Indian mobile number verified via One-Time Password (OTP). You are solely responsible for all activities under your account.</li>
              <li><strong>Information Accuracy:</strong> You agree to provide current, full, and accurate personal details (Name, Gender, Email). Accounts with falsified identities may be terminated immediately.</li>
              <li><strong>Account Non-Transferability:</strong> Account credentials and promotional reward balances cannot be sold, transferred, or shared with third parties.</li>
            </ul>
          </section>

          {/* 4. Booking & Slot Rules */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              4. APPOINTMENT SCHEDULING AND ARRIVAL TIMELINES
            </h2>
            <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
              <p>
                <strong>Booking Confirmation:</strong> A booking is finalized only upon receipt of an in-app confirmation banner and confirmation SMS/WhatsApp notification.
              </p>
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 space-y-3">
                <p>
                  <strong>Grace Period (Late Arrival):</strong> Users are requested to arrive at the salon 5 to 10 minutes prior to the booked slot. Salons maintain a mandatory 15-minute grace period. Arriving more than 15 minutes late empowers the salon partner to reassign or cancel the slot for walk-in clients.
                </p>
                <p>
                  <strong>Service Variations:</strong> If a user requests additional services at the salon counter beyond the original booking, availability and additional charges remain entirely at the salon manager's discretion.
                </p>
              </div>
            </div>
          </section>

          {/* 5. Cancellation & Refunds */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              5. CANCELLATION, RESCHEDULING, AND REFUND POLICY
            </h2>
            <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-xl border border-slate-200/80">
                  <strong className="text-slate-900 block mb-1">Free Cancellation Window</strong>
                  <p className="text-xs text-slate-600">
                    Bookings cancelled up to <strong>2 hours prior</strong> to the appointment time qualify for a 100% full refund of any online advance payments made.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-200/80">
                  <strong className="text-slate-900 block mb-1">Late Cancellation / No-Show</strong>
                  <p className="text-xs text-slate-600">
                    Cancellations made within 2 hours of the slot, or failure to arrive at the salon without notice (No-Show), may result in forfeiture of advance payments or a convenience penalty.
                  </p>
                </div>
              </div>
              <p>
                <strong>Partner Cancellations:</strong> If a salon partner cancels a booking due to emergency closures, power outages, or unavailability, DigiSaloon will process a complete 100% refund back to the original source account within 5-7 business days.
              </p>
            </div>
          </section>

          {/* 6. Pricing & Payments */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              6. PRICING, CONVENIENCE FEES, AND PAYMENT GATEWAYS
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600 leading-relaxed">
              <li><strong>Merchant Autonomy:</strong> Service rates, haircut charges, and spa package pricing displayed on the App are set autonomously by Partner salons.</li>
              <li><strong>Convenience Fee:</strong> DigiSaloon reserves the right to levy a nominal platform convenience fee per booking to maintain technology infrastructure.</li>
              <li><strong>Payment Encryption:</strong> Online payments are processed securely through PCI-DSS compliant payment aggregators (e.g., Razorpay/Stripe). DigiSaloon never records or stores full card numbers, net banking passwords, or UPI PINs.</li>
            </ul>
          </section>

          {/* 7. Prohibited Acts */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              7. USER CONDUCT AND PROHIBITED PLATFORM MISUSE
            </h2>
            <p className="text-sm text-slate-600 mb-2">You explicitly agree NOT to engage in any of the following activities:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm">
              <div className="bg-white p-4 rounded-xl border border-slate-200/80">
                <strong className="text-red-700 block mb-1">Harassment & Abuse</strong>
                Verbally abusing, threatening, or harassing salon staff, stylists, or customer support representatives.
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200/80">
                <strong className="text-red-700 block mb-1">Fake Bookings</strong>
                Creating multiple fake accounts or non-genuine bookings to occupy slots and disrupt salon business.
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200/80">
                <strong className="text-red-700 block mb-1">Code Extraction</strong>
                Decompiling, reverse engineering, scraping, or extracting source code or database schemas from the App.
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200/80">
                <strong className="text-red-700 block mb-1">Defamatory Content</strong>
                Posting fake, malicious, or unverified reviews designed to intentionally damage a salon's reputational standing.
              </div>
            </div>
          </section>

          {/* 8. Service Quality Disclaimer */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              8. SALON HYGIENE AND SERVICE QUALITY DISCLAIMER
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              While DigiSaloon conducts onboarding checks for partner salons, we do not directly supervise salon operations.
            </p>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 space-y-2 text-sm text-slate-600">
              <p>
                <strong>Health & Allergic Reactions:</strong> DigiSaloon is not liable for skin sensitivities, chemical hair dye reactions, cuts, or physical injuries resulting from salon treatments. Users should communicate health conditions or chemical allergies directly to the stylist beforehand.
              </p>
              <p>
                <strong>Personal Belongings:</strong> Users are solely responsible for their personal valuables (wallets, phones, jewelry) brought to partner premises.
              </p>
            </div>
          </section>

          {/* 9. Intellectual Property */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              9. INTELLECTUAL PROPERTY RIGHTS
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              All materials, brand logos, user interface designs, software code, graphic elements, and trademarks associated with DigiSaloon remain the exclusive intellectual property of DigiSaloon. You are granted a limited, non-transferable, revocable license to access the App strictly for personal, non-commercial use.
            </p>
          </section>

          {/* 10. Limitation of Liability */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              10. DISCLAIMER OF WARRANTIES AND LIMITATION OF LIABILITY
            </h2>
            <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
              <p>
                <strong>AS IS Basis:</strong> The platform services are provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, whether express or implied.
              </p>
              <p>
                <strong>Liability Cap:</strong> To the maximum extent permitted by Indian law, DigiSaloon’s maximum aggregate liability for any claims arising from a booking dispute shall not exceed the actual booking fee paid by the user for that specific appointment.
              </p>
            </div>
          </section>

          {/* 11. Indemnification */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              11. INDEMNIFICATION
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              You agree to indemnify, defend, and hold harmless DigiSaloon, its officers, directors, employees, and agents from any claims, losses, damages, penalties, or legal fees resulting from your breach of these Terms, illegal acts, or violation of third-party rights.
            </p>
          </section>

          {/* 12. Governing Law */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              12. GOVERNING LAW AND JURISDICTION
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              These Terms shall be governed by, interpreted, and construed in accordance with the laws of India. Any legal action, suit, or proceeding arising out of or related to these Terms shall be subject to the exclusive jurisdiction of competent courts located in Ranchi, Jharkhand, India.
            </p>
          </section>

          {/* 13. Modifications */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              13. MODIFICATIONS TO TERMS OF SERVICE
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              DigiSaloon reserves the right to modify, amend, or update these Terms at any time. Updated versions will be posted on this page with an updated "Effective Date". Your continued use of the platform following the posting of updates constitutes your binding acceptance of the revised Terms.
            </p>
          </section>

          {/* 14. Grievance Redressal */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              14. GRIEVANCE REDRESSAL MECHANISM
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              In accordance with the Information Technology Act, 2000 and rules made thereunder, any user grievances or policy inquiries may be addressed to our designated Grievance Officer:
            </p>
            <div className="bg-slate-900 text-slate-200 p-6 rounded-2xl space-y-3 text-sm">
              <p className="font-bold text-white text-base">Grievance Officer: Rishabh Kumar</p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:support@digisaloon.in" className="text-red-400 hover:underline font-mono">
                  support@digisaloon.in
                </a>
              </p>
              <p><strong>Helpline:</strong> +91-99734 99471</p>
              <p><strong>Address:</strong> Angara, Ranchi, Jharkhand - 835103, India.</p>
              <p className="text-xs text-slate-400 pt-2 border-t border-slate-800">
                Official grievance complaints will be acknowledged within 36 hours and resolved within 30 days of receipt.
              </p>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};