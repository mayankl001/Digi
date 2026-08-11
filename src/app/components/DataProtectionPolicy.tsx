import React from "react";

export const DataProtectionPolicy: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Data Protection Policy
          </span>
          <span className="text-xs text-slate-400">Last Updated: 12 August 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          DATA PROTECTION, RETENTION & DELETION POLICY
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          This Data Protection, Retention & Deletion Policy explains how DigiSaloon manages, protects, retains and deletes information collected or processed through its services.
        </p>
        <div className="inline-block bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-md mt-2">
          Document Classification: Internal Policy + Public Summary
        </div>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="dp-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. Purpose</h2>
          <p>DigiSaloon aims to handle personal and business information responsibly and in accordance with applicable laws and reasonable security practices.</p>
          <p>This Policy establishes principles for:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Data collection</li>
            <li>Data use</li>
            <li>Data protection</li>
            <li>Data access</li>
            <li>Data retention</li>
            <li>Data deletion</li>
            <li>Data disposal</li>
          </ul>
        </section>

        <section id="dp-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. Scope</h2>
          <p>This Policy applies to information processed through:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>DigiSaloon User App</li>
            <li>DigiSaloon website</li>
            <li>Partner App</li>
            <li>Partner Web App</li>
            <li>Manage Web</li>
            <li>Admin Panel</li>
            <li>APIs</li>
            <li>Internal systems</li>
            <li>Other authorized DigiSaloon services</li>
          </ul>
        </section>

        <section id="dp-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. Types of Information</h2>
          <p>Depending on the service used, DigiSaloon may process information such as:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Account information, Contact information, Booking information</li>
            <li>Salon information, Service information, Payment and transaction information</li>
            <li>Reviews and ratings, Technical information, Device information</li>
            <li>Location information where permitted, Customer support information</li>
          </ul>
        </section>

        <section id="dp-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. Purpose of Data Processing</h2>
          <p>Information may be processed for purposes including:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Account creation, Appointment booking, Salon discovery, Booking management</li>
            <li>Payment processing, Refunds, Settlement, Customer support</li>
            <li>Security, Fraud prevention, Analytics and service improvement, Legal compliance</li>
          </ul>
        </section>

        <section id="dp-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. Data Minimization</h2>
          <p>DigiSaloon should collect and process information that is reasonably necessary for the relevant purpose.</p>
          <p>Unnecessary collection of personal information should be avoided.</p>
        </section>

        <section id="dp-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. Data Accuracy</h2>
          <p>Reasonable steps should be taken to maintain accurate information.</p>
          <p>Users and partners may be provided with functionality to update applicable account or business information.</p>
        </section>

        <section id="dp-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. Access Control</h2>
          <p>Access to personal or confidential information should be restricted based on legitimate business requirements.</p>
          <p>Internal personnel should receive only the access necessary for their assigned responsibilities.</p>
        </section>

        <section id="dp-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. Employee and Admin Access</h2>
          <p>Authorized employees and administrators may access information only when required for legitimate work purposes.</p>
          <p>Access may be monitored through system logs where technically available.</p>
        </section>

        <section id="dp-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. Partner Access</h2>
          <p>Salon partners may receive customer information necessary to manage bookings and provide requested services.</p>
          <p>Partners must not use customer information for unrelated or unauthorized purposes.</p>
        </section>

        <section id="dp-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. Data Security</h2>
          <p>DigiSaloon may implement reasonable technical and organizational measures to protect information against:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Unauthorized access, Unauthorized modification, Loss</li>
            <li>Misuse, Unauthorized disclosure, Destruction</li>
          </ul>
        </section>

        <section id="dp-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. Sensitive Authentication Information</h2>
          <p>DigiSaloon does not intend to collect or store confidential authentication credentials such as:</p>
          <ul className="list-disc pl-5 space-y-1 mb-2">
            <li>UPI PIN, Card PIN, Banking passwords</li>
          </ul>
          <p className="text-xs font-semibold text-slate-900">Users should never share such information with DigiSaloon staff or salon partners.</p>
        </section>

        <section id="dp-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. Third-Party Processing</h2>
          <p>DigiSaloon may use authorized third-party providers for services such as:</p>
          <ul className="list-disc pl-5 space-y-1 mb-2">
            <li>Cloud hosting, Payment processing, SMS, Email, WhatsApp</li>
            <li>Push notifications, Analytics, Security, Identity or verification services</li>
          </ul>
          <p>Third parties may process information only according to applicable arrangements and requirements.</p>
        </section>

        <section id="dp-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. Data Retention</h2>
          <p>DigiSaloon may retain information for as long as reasonably necessary for the purpose for which it was collected or for other legitimate purposes.</p>
          <p>Retention periods may vary depending on the type of information.</p>
        </section>

        <section id="dp-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. Transaction Records</h2>
          <p>Payment, booking and settlement information may be retained for purposes including:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Accounting, Reconciliation, Refund processing</li>
            <li>Fraud prevention, Dispute resolution, Legal compliance</li>
          </ul>
        </section>

        <section id="dp-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. Security Logs</h2>
          <p>Security and technical logs may be retained for a reasonable period to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Detect security incidents, Investigate suspicious activity</li>
            <li>Troubleshoot systems, Prevent fraud, Maintain platform security</li>
          </ul>
        </section>

        <section id="dp-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. Legal Retention</h2>
          <p>Certain information may need to be retained where required by:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Applicable law, Regulatory requirements, Court orders</li>
            <li>Tax requirements, Accounting obligations, Legal disputes</li>
          </ul>
        </section>

        <section id="dp-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. Account Deletion</h2>
          <p>Users may request deletion of their DigiSaloon account through the available account-deletion process.</p>
          <p>Account deletion may result in deletion or de-identification of information that is no longer required.</p>
        </section>

        <section id="dp-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. Information Retained After Deletion</h2>
          <p>Some information may continue to be retained after account deletion where reasonably necessary for:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Legal compliance, Financial records, Fraud prevention</li>
            <li>Security, Refunds, Dispute resolution, Legal claims</li>
          </ul>
        </section>

        <section id="dp-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. Data Deletion Process</h2>
          <p>When information is no longer required and there is no legitimate reason for continued retention, DigiSaloon may:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Delete the information</li>
            <li>Anonymize it</li>
            <li>De-identify it</li>
            <li>Securely dispose of it</li>
          </ul>
        </section>

        <section id="dp-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">20. Backups</h2>
          <p>Information may remain temporarily within system backups after deletion.</p>
          <p>Backup data may be deleted or overwritten according to the applicable backup cycle and technical processes.</p>
        </section>

        <section id="dp-21" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">21. Data Breach or Security Incident</h2>
          <p>Where DigiSaloon identifies a security incident affecting personal information, it may:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Investigate the incident, Contain the issue, Secure affected systems</li>
            <li>Assess potential impact, Take corrective measures</li>
            <li>Notify affected parties or authorities where required</li>
          </ul>
        </section>

        <section id="dp-22" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">22. Internal Data Handling</h2>
          <p>Employees and authorized personnel must:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Access information only when necessary</li>
            <li>Keep confidential information secure</li>
            <li>Avoid unnecessary copying</li>
            <li>Avoid unauthorized sharing</li>
            <li>Report suspected data exposure</li>
          </ul>
        </section>

        <section id="dp-23" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">23. Data Export</h2>
          <p>Internal export of customer, partner or transaction information should only occur for legitimate business purposes.</p>
          <p>Sensitive exports should be appropriately protected.</p>
        </section>

        <section id="dp-24" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">24. Data Sharing</h2>
          <p>DigiSaloon may share information where reasonably necessary with:</p>
          <ul className="list-disc pl-5 space-y-1 mb-2">
            <li>Payment providers, Service providers, Authorized salon partners</li>
            <li>Technical providers, Legal or regulatory authorities where required</li>
          </ul>
          <p className="text-xs text-slate-500">Information should not be shared unnecessarily.</p>
        </section>

        <section id="dp-25" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">25. User Rights and Requests</h2>
          <p>Subject to applicable law, users may have rights relating to their personal information, including applicable rights to:</p>
          <ul className="list-disc pl-5 space-y-1 mb-2">
            <li>Access information, Correct information, Request deletion, Raise privacy concerns</li>
          </ul>
          <p className="text-xs text-slate-500">Requests may be submitted through DigiSaloon's available support or privacy channels.</p>
        </section>

        <section id="dp-26" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">26. Data Protection Responsibilities</h2>
          <p>All DigiSaloon personnel with access to confidential or personal information are expected to follow applicable internal security and privacy procedures.</p>
        </section>

        <section id="dp-27" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">27. Policy Violations</h2>
          <p>Unauthorized access, disclosure, copying or misuse of information may result in:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Access removal, Internal disciplinary action, Partner restrictions</li>
            <li>Account suspension, Investigation, Legal action where appropriate</li>
          </ul>
        </section>

        <section id="dp-28" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">28. Policy Review</h2>
          <p>DigiSaloon should periodically review this Policy to ensure that it remains appropriate for:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Platform operations, Data practices, Security requirements</li>
            <li>Applicable laws, Third-party services</li>
          </ul>
        </section>

        <section id="dp-29" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">29. Relationship With Privacy Policy</h2>
          <p>This internal Policy should be read together with DigiSaloon's public Privacy Policy.</p>
          <p>Where applicable, the Privacy Policy explains data practices from the user's perspective, while this Policy establishes broader internal data-handling principles.</p>
        </section>

        <section id="dp-30" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">30. Public Summary</h2>
          <p>DigiSaloon aims to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Collect information responsibly, Use information for legitimate purposes</li>
            <li>Protect information using reasonable security measures, Limit unnecessary access</li>
            <li>Retain information only as reasonably necessary, Delete or de-identify information when appropriate</li>
            <li>Respect applicable privacy and data-protection requirements</li>
          </ul>
        </section>

        <section id="dp-31" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">31. Internal Reporting</h2>
          <p>Employees, partners or authorized personnel who identify a suspected data-protection issue should promptly report it through DigiSaloon's designated internal security/privacy reporting channel.</p>
          <div className="bg-slate-900 text-slate-200 p-5 rounded-xl space-y-2 text-xs md:text-sm mt-3">
            <p className="font-bold text-white text-base">DigiSaloon</p>
            <p><strong>Document Classification:</strong> Internal Use + Public Summary</p>
            <p><strong>Email Support:</strong> <a href="mailto:support@digisaloon.in" className="text-red-400 hover:underline font-mono">support@digisaloon.in</a></p>
            <p><strong>Website:</strong> digisaloon.in</p>
          </div>
        </section>

      </div>
    </div>
  );
};