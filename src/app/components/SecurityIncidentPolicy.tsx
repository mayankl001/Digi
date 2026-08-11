import React from "react";

export const SecurityIncidentPolicy: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Incident Response Policy
          </span>
          <span className="text-xs text-slate-400">Last Updated: 12 August 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          SECURITY & INCIDENT RESPONSE POLICY
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          This Security & Incident Response Policy establishes the principles and procedures DigiSaloon may follow to protect its systems, information, users and partners from security incidents.
        </p>
        <div className="inline-block bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-md mt-2">
          Document Classification: Internal Policy + Public Summary
        </div>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="sir-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. Purpose</h2>
          <p>The purpose of this Policy is to establish a framework for:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Preventing security incidents</li>
            <li>Detecting suspicious activity</li>
            <li>Responding to security incidents</li>
            <li>Containing security threats</li>
            <li>Recovering affected systems</li>
            <li>Reducing future security risks</li>
          </ul>
        </section>

        <section id="sir-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. Scope</h2>
          <p>This Policy applies to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>DigiSaloon User App, DigiSaloon website, Partner App, Partner Web App</li>
            <li>Manage Web, Admin Panel, APIs, Databases</li>
            <li>Cloud infrastructure, Internal systems, Authorized third-party services</li>
          </ul>
        </section>

        <section id="sir-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. Security Responsibilities</h2>
          <p>DigiSaloon personnel with access to systems or information should follow applicable security procedures and protect confidential information.</p>
          <p>System administrators and technical personnel may have additional security responsibilities according to their roles.</p>
        </section>

        <section id="sir-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. Security Controls</h2>
          <p>DigiSaloon may use reasonable security controls such as:</p>
          <ul className="list-disc pl-5 space-y-1 mb-2">
            <li>Authentication, Access controls, Role-based permissions, Encryption where appropriate</li>
            <li>Secure development practices, System monitoring, Logging, Backup procedures</li>
            <li>Vulnerability management, Security updates</li>
          </ul>
          <p className="text-xs text-slate-500">The specific controls may change as the platform develops.</p>
        </section>

        <section id="sir-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. Types of Security Incidents</h2>
          <p>A security incident may include:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Unauthorized account access, Credential compromise, Data exposure, Malware</li>
            <li>Unauthorized system modification, Suspicious login activity, API abuse, Database exposure</li>
            <li>Denial-of-service activity, Payment-related security issues</li>
            <li>Other events that may affect confidentiality, integrity or availability</li>
          </ul>
        </section>

        <section id="sir-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. Incident Detection</h2>
          <p>Security incidents may be identified through:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>System monitoring, Security logs, Automated alerts, Employee reports</li>
            <li>Partner reports, Customer reports, Third-party notifications, Security researchers</li>
          </ul>
        </section>

        <section id="sir-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. Incident Reporting</h2>
          <p>Employees, partners and authorized users should promptly report suspected security incidents through DigiSaloon's designated security/technical reporting channel.</p>
          <p>For general security concerns: <a href="mailto:support@digisaloon.in" className="text-red-700 hover:underline">support@digisaloon.in</a></p>
          <p className="text-xs font-semibold text-slate-900 mt-1">Do not include unnecessary passwords, OTPs, UPI PINs or other confidential authentication credentials in a report.</p>
        </section>

        <section id="sir-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. Initial Assessment</h2>
          <p>When an incident is reported, DigiSaloon may assess:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>What happened, Which system is affected, Whether unauthorized access occurred</li>
            <li>What information may be affected, Potential impact, Whether immediate containment is required</li>
          </ul>
        </section>

        <section id="sir-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. Containment</h2>
          <p>Depending on the circumstances, DigiSaloon may take steps such as:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Restricting affected accounts, Revoking credentials, Disabling compromised access</li>
            <li>Blocking suspicious traffic, Isolating affected systems, Temporarily disabling affected functionality</li>
          </ul>
        </section>

        <section id="sir-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. Investigation</h2>
          <p>DigiSaloon may investigate incidents using available system logs, access records, account information, transaction records, security alerts, and technical evidence.</p>
          <p className="text-xs text-slate-500">Investigation activities should be limited to what is reasonably necessary.</p>
        </section>

        <section id="sir-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. Data Protection</h2>
          <p>If an incident may involve personal information, DigiSaloon may assess what information was affected, which individuals may be affected, the potential risk, and applicable notification requirements.</p>
        </section>

        <section id="sir-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. Notification</h2>
          <p>Where required by applicable law or reasonably appropriate, DigiSaloon may notify affected users, salon partners, service providers, regulators, law-enforcement authorities, and other relevant parties.</p>
          <p className="text-xs text-slate-500">The content and timing of any notification may depend on the circumstances and applicable requirements.</p>
        </section>

        <section id="sir-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. Recovery</h2>
          <p>Following containment and investigation, DigiSaloon may take reasonable steps to restore affected services, including restoring systems, resetting credentials, applying security patches, recovering data from backups, and monitoring affected systems.</p>
        </section>

        <section id="sir-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. Post-Incident Review</h2>
          <p>After a significant incident, DigiSaloon may conduct a review to identify root cause, security weaknesses, response effectiveness, required improvements, and preventive measures.</p>
        </section>

        <section id="sir-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. Security Vulnerabilities</h2>
          <p>Suspected security vulnerabilities should be responsibly reported rather than exploited. Reports may be submitted to: <a href="mailto:support@digisaloon.in" className="text-red-700 hover:underline">support@digisaloon.in</a></p>
          <p className="text-xs text-slate-500">Further rules are provided in DigiSaloon's Security & Responsible Disclosure Policy.</p>
        </section>

        <section id="sir-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. Account Security</h2>
          <p>Users and partners are responsible for protecting their own account credentials. They should use strong passwords, protect authentication information, avoid sharing OTPs, report suspicious activity, and secure devices used to access DigiSaloon.</p>
        </section>

        <section id="sir-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. Confidential Authentication Information</h2>
          <p>DigiSaloon does not require users to provide confidential authentication credentials such as UPI PIN, card PIN, or banking password.</p>
          <p className="text-xs font-semibold text-slate-900">Users should never disclose such information to DigiSaloon employees, salon staff or third parties claiming to represent DigiSaloon.</p>
        </section>

        <section id="sir-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. Third-Party Security Incidents</h2>
          <p>If a security incident occurs at a third-party provider used by DigiSaloon, DigiSaloon may work with the provider to understand the incident, assess potential impact, implement appropriate measures, obtain relevant information, and meet applicable obligations.</p>
        </section>

        <section id="sir-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. Backup and Recovery</h2>
          <p>Where technically appropriate, DigiSaloon may maintain backups to support service recovery. Backups may be subject to separate retention and security controls.</p>
        </section>

        <section id="sir-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">20. Business Continuity</h2>
          <p>DigiSaloon may maintain reasonable measures intended to reduce service disruption caused by technical failures, security incidents, infrastructure problems, third-party outages, or other unexpected events.</p>
        </section>

        <section id="sir-21" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">21. Internal Access</h2>
          <p>Administrative and technical access should be limited according to job responsibilities. Access may be reviewed, modified or revoked when no longer required.</p>
        </section>

        <section id="sir-22" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">22. Employee Responsibilities</h2>
          <p>Employees and authorized personnel must protect confidential information, follow security procedures, use authorized systems, report suspected incidents, avoid unauthorized access, and complete applicable security requirements.</p>
        </section>

        <section id="sir-23" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">23. Partner Responsibilities</h2>
          <p>Salon partners must protect their DigiSaloon accounts, manage staff access appropriately, report suspicious activity, protect customer information, and follow applicable partner security requirements.</p>
        </section>

        <section id="sir-24" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">24. Security Limitations</h2>
          <p>DigiSaloon takes reasonable measures to protect its services, but no online system can be guaranteed to be completely secure. Security controls may reduce risk but cannot eliminate every possible threat.</p>
        </section>

        <section id="sir-25" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">25. Public Summary</h2>
          <p>DigiSaloon aims to protect user and partner information, monitor for security threats, investigate reported incidents, contain security problems, restore affected services, improve security after incidents, and meet applicable notification requirements.</p>
        </section>

        <section id="sir-26" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">26. Policy Violations</h2>
          <p>Unauthorized access, security testing without permission, credential misuse, data theft or intentional system disruption may result in account restriction, access removal, partner restriction, investigation, termination of access, or legal action where appropriate.</p>
        </section>

        <section id="sir-27" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">27. Policy Review</h2>
          <p>DigiSaloon may periodically review this Policy based on security incidents, platform changes, technology changes, new threats, third-party risks, and applicable legal requirements.</p>
        </section>

        <section id="sir-28" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">28. Policy Updates</h2>
          <p>DigiSaloon may update this Policy when its security practices, systems or applicable requirements change.</p>
          <div className="bg-slate-900 text-slate-200 p-5 rounded-xl space-y-2 text-xs md:text-sm mt-4">
            <p className="font-bold text-white text-base">DigiSaloon</p>
            <p><strong>Document Classification:</strong> Internal Use + Public Summary</p>
            <p><strong>Support Email:</strong> <a href="mailto:support@digisaloon.in" className="text-red-400 hover:underline font-mono">support@digisaloon.in</a></p>
            <p><strong>Website:</strong> digisaloon.in</p>
          </div>
        </section>

      </div>
    </div>
  );
};