import React from "react";

export const ThirdPartyPolicy: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Third-Party Policy
          </span>
          <span className="text-xs text-slate-400">Last Updated: 12 August 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          THIRD-PARTY SERVICES & PAYMENT PROVIDER POLICY
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          This Third-Party Services & Payment Provider Policy explains how DigiSaloon may use external service providers to support its platform, payments, communications, infrastructure and other operational functions.
        </p>
        <div className="inline-block bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-md mt-2">
          Document Classification: Public Summary + Internal Policy
        </div>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="tp-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. Purpose</h2>
          <p>DigiSaloon may rely on trusted third-party providers to operate and improve its services.</p>
          <p>These providers may support functions such as:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Online payments, Cloud hosting, Database infrastructure</li>
            <li>SMS, Email, WhatsApp, Push notifications</li>
            <li>Maps and location services, Analytics, Authentication</li>
            <li>Security, Identity or business verification</li>
          </ul>
        </section>

        <section id="tp-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. Scope</h2>
          <p>This Policy applies to third-party services connected with:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>DigiSaloon User App, DigiSaloon website, Partner App, Partner Web App</li>
            <li>Manage Web, Admin Panel, APIs, Internal systems</li>
          </ul>
        </section>

        <section id="tp-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. Third-Party Providers</h2>
          <p>DigiSaloon may engage third-party providers where reasonably necessary for platform operations.</p>
          <p>The providers used may change over time based on:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Business requirements, Technical requirements, Security</li>
            <li>Pricing, Availability, Legal or regulatory requirements</li>
          </ul>
        </section>

        <section id="tp-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. Payment Providers</h2>
          <p>Online payments may be processed through authorized third-party payment providers.</p>
          <p>Payment providers may handle payment-related information required to process a transaction.</p>
        </section>

        <section id="tp-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. Payment Processing</h2>
          <p>Depending on the payment method, payment providers may process information such as:</p>
          <ul className="list-disc pl-5 space-y-1 mb-2">
            <li>Transaction amount, Transaction reference, Payment status</li>
            <li>Applicable payment details, Information required for fraud prevention</li>
          </ul>
          <p className="text-xs text-slate-500">The exact information processed may depend on the payment method and provider.</p>
        </section>

        <section id="tp-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. Payment Authentication</h2>
          <p>DigiSaloon does not intend to collect or store confidential payment authentication credentials such as:</p>
          <ul className="list-disc pl-5 space-y-1 mb-2">
            <li>UPI PIN, Card PIN, Banking password</li>
          </ul>
          <p className="text-xs font-semibold text-slate-900">Users should enter such information only within the secure interface provided by their payment provider or financial institution.</p>
        </section>

        <section id="tp-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. Payment Confirmation</h2>
          <p>DigiSaloon may receive transaction information from the payment provider to confirm payment, update booking status, process refunds, reconcile transactions, and process eligible salon settlements.</p>
        </section>

        <section id="tp-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. Payment Failures</h2>
          <p>A payment may fail or remain pending due to reasons including bank issues, payment-provider issues, network problems, incorrect payment information, security checks, or technical failures.</p>
          <p className="text-xs text-slate-500">DigiSaloon may rely on payment-provider confirmation before treating a transaction as successfully paid.</p>
        </section>

        <section id="tp-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. Refunds Through Payment Providers</h2>
          <p>Eligible refunds may be processed through the relevant payment provider.</p>
          <p>The time required for a refund to appear in a customer's account may depend on the payment provider, bank, payment method, transaction processing, or other external factors.</p>
        </section>

        <section id="tp-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. Salon Settlements</h2>
          <p>Eligible online-paid amounts may be settled to participating salons through the applicable payment or banking infrastructure.</p>
          <p>Under DigiSaloon's current commercial arrangement, DigiSaloon does not charge commission on salon bookings.</p>
          <p>Eligible online-paid bookings are intended to follow a same-day or next-day settlement cycle, subject to payment confirmation, reconciliation, refunds, banking processes and other applicable conditions.</p>
        </section>

        <section id="tp-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. Cloud and Infrastructure Providers</h2>
          <p>DigiSaloon may use third-party infrastructure providers for application hosting, databases, storage, backups, server infrastructure, and security services.</p>
          <p className="text-xs text-slate-500">Such providers may process information on behalf of DigiSaloon.</p>
        </section>

        <section id="tp-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. Communication Providers</h2>
          <p>DigiSaloon may use third-party providers for SMS, Email, WhatsApp, and Push notifications.</p>
          <p>These services may be used for OTP or authentication, booking confirmations, appointment reminders, cancellation updates, payment notifications, and promotional communications where permitted.</p>
        </section>

        <section id="tp-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. Maps and Location Services</h2>
          <p>DigiSaloon may use third-party mapping or location services to support salon location, nearby salon discovery, distance information, directions, and location-based functionality.</p>
          <p className="text-xs text-slate-500">Location information may be processed according to the applicable service and DigiSaloon's Privacy Policy.</p>
        </section>

        <section id="tp-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. Analytics Services</h2>
          <p>DigiSaloon may use analytics services to understand application usage, website traffic, feature performance, technical issues, and user interactions to help improve its services.</p>
        </section>

        <section id="tp-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. Authentication and Verification Services</h2>
          <p>DigiSaloon may use third-party providers for login authentication, OTP verification, identity verification, business verification, and fraud prevention.</p>
          <p className="text-xs text-slate-500">The information processed may depend on the particular service.</p>
        </section>

        <section id="tp-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. Security Providers</h2>
          <p>DigiSaloon may use third-party security services for threat detection, fraud prevention, monitoring, authentication, infrastructure security, and vulnerability protection.</p>
        </section>

        <section id="tp-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. Data Protection</h2>
          <p>DigiSaloon aims to select third-party providers that provide appropriate security and data-handling measures.</p>
          <p>Where appropriate, DigiSaloon may establish contractual requirements relating to confidentiality, security, data processing, access restrictions, data retention, and incident reporting.</p>
        </section>

        <section id="tp-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. Third-Party Privacy Policies</h2>
          <p>Third-party providers may have their own privacy policies and terms.</p>
          <p>Users should review the applicable third-party policies where appropriate.</p>
          <p className="text-xs text-slate-500">DigiSaloon is not responsible for independent processing activities carried out by third parties outside DigiSaloon's control.</p>
        </section>

        <section id="tp-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. Data Sharing</h2>
          <p>DigiSaloon may share information with third-party providers only to the extent reasonably necessary for the relevant service or legitimate business purpose.</p>
          <p className="text-xs font-semibold text-slate-900">DigiSaloon does not intend to sell personal information to third-party service providers merely for their independent marketing purposes.</p>
        </section>

        <section id="tp-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">20. Internal Third-Party Management</h2>
          <p>DigiSaloon may maintain an internal record of significant third-party providers and the services they provide.</p>
          <p>Relevant providers may be reviewed based on factors such as security, reliability, data protection, service performance, and business requirements.</p>
        </section>

        <section id="tp-21" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">21. Third-Party Changes</h2>
          <p>DigiSaloon may replace, add or remove third-party providers when reasonably necessary due to better technology, security requirements, cost, availability, performance, or legal requirements.</p>
        </section>

        <section id="tp-22" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">22. Service Availability</h2>
          <p>DigiSaloon cannot guarantee uninterrupted availability of third-party services.</p>
          <p>A third-party outage may affect payments, notifications, maps, authentication, hosting, or other DigiSaloon features.</p>
        </section>

        <section id="tp-23" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">23. Third-Party Security Incidents</h2>
          <p>If DigiSaloon becomes aware of a security incident involving a relevant third-party provider, DigiSaloon may investigate the issue, assess potential impact, work with the provider, implement appropriate security measures, and notify affected parties where required.</p>
        </section>

        <section id="tp-24" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">24. User Responsibility</h2>
          <p>Users should use secure payment interfaces, protect authentication credentials, avoid sharing OTPs, review payment confirmations, and report suspicious transactions.</p>
        </section>

        <section id="tp-25" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">25. Partner Responsibility</h2>
          <p>Salon partners should maintain accurate settlement information, monitor settlement records, report payment discrepancies, protect partner account credentials, and cooperate with payment verification when reasonably required.</p>
        </section>

        <section id="tp-26" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">26. No Guarantee of Third-Party Services</h2>
          <p>DigiSaloon does not guarantee the uninterrupted availability, performance or accuracy of third-party services.</p>
          <p className="text-xs text-slate-500">Third-party services may be subject to their own terms, limitations and technical conditions.</p>
        </section>

        <section id="tp-27" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">27. Relationship With Other Policies</h2>
          <p>This Policy should be read together with:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Terms & Conditions, Privacy Policy, Payment & Settlement Policy</li>
            <li>Partner Payout & Settlement Terms, Security & Incident Response Policy</li>
            <li>Data Protection, Retention & Deletion Policy, Location & Notification Policy</li>
          </ul>
        </section>

        <section id="tp-28" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">28. Policy Updates</h2>
          <p>DigiSaloon may update this Policy when third-party providers change, payment systems change, platform functionality changes, security requirements change, or applicable legal requirements change.</p>
          <p className="text-xs text-slate-500">The latest version may be published on the DigiSaloon website or relevant application.</p>
        </section>

        <section id="tp-29" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">29. Public Summary</h2>
          <p>DigiSaloon may use third-party providers to support payments, hosting, communications, maps, analytics, authentication and security.</p>
          <p>Such providers may process information necessary to provide their respective services.</p>
          <p>DigiSaloon aims to use reasonable measures to manage third-party risks and protect information.</p>
        </section>

        <section id="tp-30" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">30. Internal Management</h2>
          <p>Authorized DigiSaloon personnel should evaluate significant third-party services based on applicable security, operational, privacy and business requirements.</p>
          <p>Sensitive third-party credentials, API keys and access tokens must be protected and must not be publicly disclosed.</p>
          <div className="bg-slate-900 text-slate-200 p-5 rounded-xl space-y-2 text-xs md:text-sm mt-4">
            <p className="font-bold text-white text-base">DigiSaloon</p>
            <p><strong>Document Classification:</strong> Public Summary + Internal Use</p>
            <p><strong>Support Email:</strong> <a href="mailto:support@digisaloon.in" className="text-red-400 hover:underline font-mono">support@digisaloon.in</a></p>
            <p><strong>Website:</strong> digisaloon.in</p>
          </div>
        </section>

      </div>
    </div>
  );
};