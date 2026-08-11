import React from "react";

export const AdminSecurityPolicy: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Admin Security Policy
          </span>
          <span className="text-xs text-slate-400">Last Updated: 12 August 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          ADMIN PANEL ACCESS & INTERNAL SECURITY POLICY
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          This Admin Panel Access & Internal Security Policy establishes the rules governing access to DigiSaloon's internal administrative systems and security of internal platform information.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="as-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. Purpose</h2>
          <p>This Policy is intended to protect DigiSaloon's:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Admin Panel</li>
            <li>Internal dashboards</li>
            <li>Databases</li>
            <li>APIs</li>
            <li>Customer information</li>
            <li>Partner information</li>
            <li>Booking information</li>
            <li>Payment and settlement information</li>
            <li>Internal business information</li>
          </ul>
        </section>

        <section id="as-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. Authorized Access Only</h2>
          <p>Admin Panel access is limited to authorized DigiSaloon personnel whose job responsibilities require such access.</p>
          <p>No person may access the Admin Panel without proper authorization.</p>
        </section>

        <section id="as-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. Individual Admin Accounts</h2>
          <p>Where technically possible, each administrator should use an individual account.</p>
          <p>Admin credentials must not be:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Shared</li>
            <li>Transferred</li>
            <li>Posted publicly</li>
            <li>Stored insecurely</li>
          </ul>
        </section>

        <section id="as-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. Role-Based Access</h2>
          <p>Admin permissions should be assigned according to job responsibilities.</p>
          <p>Administrators should receive only the level of access reasonably required for their work.</p>
          <p>Possible roles may include:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Super Admin</li>
            <li>Operations Admin</li>
            <li>Support Admin</li>
            <li>Finance/Admin</li>
            <li>Technical Admin</li>
            <li>Other authorized roles</li>
          </ul>
        </section>

        <section id="as-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. Principle of Least Privilege</h2>
          <p>Administrative access should follow the principle of least privilege.</p>
          <p>An administrator should not receive access to information or functionality that is unnecessary for their assigned responsibilities.</p>
        </section>

        <section id="as-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. Authentication</h2>
          <p>DigiSaloon may require appropriate authentication mechanisms for administrative access, including:</p>
          <ul className="list-disc pl-5 space-y-1 mb-2">
            <li>Strong passwords</li>
            <li>OTP or multi-factor authentication where available</li>
            <li>Device verification</li>
            <li>Other security controls</li>
          </ul>
          <p className="text-xs text-slate-500">Administrators must follow all applicable authentication requirements.</p>
        </section>

        <section id="as-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. Password Security</h2>
          <p>Administrators must:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Use strong passwords</li>
            <li>Keep credentials confidential</li>
            <li>Avoid reusing administrative passwords</li>
            <li>Avoid storing passwords in unsecured locations</li>
            <li>Change credentials when compromise is suspected</li>
          </ul>
        </section>

        <section id="as-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. Sensitive Information</h2>
          <p>Admin users may have access to sensitive information.</p>
          <p>Such information must only be accessed when necessary for legitimate business purposes.</p>
          <p>Sensitive information may include:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Customer information</li>
            <li>Partner information</li>
            <li>Booking records</li>
            <li>Payment records</li>
            <li>Settlement information</li>
            <li>Internal credentials</li>
            <li>Business reports</li>
          </ul>
        </section>

        <section id="as-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. Customer Data Access</h2>
          <p>Customer information must only be accessed for legitimate purposes such as:</p>
          <ul className="list-disc pl-5 space-y-1 mb-2">
            <li>Customer support</li>
            <li>Booking management</li>
            <li>Refund investigation</li>
            <li>Fraud prevention</li>
            <li>Security</li>
            <li>Legal or compliance requirements</li>
          </ul>
          <p className="text-xs font-semibold text-slate-900">Administrators must not access customer information out of curiosity or for personal purposes.</p>
        </section>

        <section id="as-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. Partner Data Access</h2>
          <p>Partner information must only be accessed for legitimate business purposes.</p>
          <p>Administrators must not disclose partner information to unauthorized persons.</p>
        </section>

        <section id="as-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. Payment Information</h2>
          <p>Administrative users must follow appropriate controls when handling payment-related information.</p>
          <p>Administrators must never request or store customer authentication credentials such as:</p>
          <ul className="list-disc pl-5 space-y-1 mb-2">
            <li>UPI PIN</li>
            <li>Card PIN</li>
            <li>Banking password</li>
            <li>OTP</li>
          </ul>
          <p className="text-xs text-slate-500">unless a specific secure system legitimately processes such information without exposing it to administrators.</p>
        </section>

        <section id="as-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. Database Access</h2>
          <p>Direct database access must be restricted to authorized technical personnel.</p>
          <p>Administrators must not:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Modify production data without authorization</li>
            <li>Delete records without approval</li>
            <li>Copy databases unnecessarily</li>
            <li>Export sensitive information without authorization</li>
          </ul>
        </section>

        <section id="as-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. Data Export</h2>
          <p>Exporting customer, partner, booking or financial data must be limited to legitimate business requirements.</p>
          <p>Sensitive exports should be protected and deleted when no longer required.</p>
        </section>

        <section id="as-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. Admin Activity Logs</h2>
          <p>DigiSaloon may maintain administrative activity logs, which may record activities such as:</p>
          <ul className="list-disc pl-5 space-y-1 mb-2">
            <li>Login events</li>
            <li>Account changes</li>
            <li>Data modifications</li>
            <li>Permission changes</li>
            <li>Administrative actions</li>
            <li>Security events</li>
          </ul>
          <p className="text-xs text-slate-500">Logs may be used for security, auditing, troubleshooting and compliance purposes.</p>
        </section>

        <section id="as-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. Unauthorized Changes</h2>
          <p>Administrators must not make unauthorized changes to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>User accounts</li>
            <li>Partner accounts</li>
            <li>Booking records</li>
            <li>Payment records</li>
            <li>Settlement records</li>
            <li>System configuration</li>
            <li>Security settings</li>
          </ul>
        </section>

        <section id="as-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. Production Environment</h2>
          <p>Access to production systems should be limited to authorized personnel.</p>
          <p>Production changes should follow reasonable internal procedures, including testing and approval where appropriate.</p>
        </section>

        <section id="as-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. Software and System Changes</h2>
          <p>Technical administrators should follow appropriate change-management procedures for:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Code deployment</li>
            <li>Database changes</li>
            <li>Configuration changes</li>
            <li>API changes</li>
            <li>Security updates</li>
          </ul>
        </section>

        <section id="as-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. Admin Device Security</h2>
          <p>Administrators should use reasonably secure devices and environments when accessing internal systems.</p>
          <p>Where possible, administrators should:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Keep operating systems updated</li>
            <li>Use trusted networks</li>
            <li>Use appropriate endpoint protection</li>
            <li>Lock devices when unattended</li>
          </ul>
        </section>

        <section id="as-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. Public Exposure</h2>
          <p>Administrative credentials, API keys, database credentials and other internal security information must not be published in:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Public repositories</li>
            <li>Public websites</li>
            <li>Social media</li>
            <li>Screenshots</li>
            <li>Public documents</li>
          </ul>
        </section>

        <section id="as-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">20. API and Credential Security</h2>
          <p>Internal API keys, access tokens and credentials must be protected.</p>
          <p>If a credential is suspected to be exposed or compromised, it should be revoked or rotated as soon as reasonably possible.</p>
        </section>

        <section id="as-21" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">21. Staff Changes</h2>
          <p>When an employee, contractor or administrator no longer requires administrative access, access should be promptly:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Disabled</li>
            <li>Removed</li>
            <li>Downgraded</li>
            <li>Revoked</li>
          </ul>
          <p className="text-xs text-slate-500 pt-1">as appropriate.</p>
        </section>

        <section id="as-22" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">22. Security Incident Reporting</h2>
          <p>Administrators must promptly report suspected unauthorized access, credential compromise, data exposure, malware, suspicious activity, security vulnerabilities, or unauthorized system changes to the designated technical/security personnel.</p>
        </section>

        <section id="as-23" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">23. Incident Response</h2>
          <p>DigiSaloon may take appropriate steps following a security incident, including investigating the incident, restricting accounts, revoking credentials, isolating affected systems, restoring systems, reviewing logs, and notifying relevant parties where required.</p>
        </section>

        <section id="as-24" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">24. Confidentiality</h2>
          <p>Administrators must maintain confidentiality of internal information obtained through their work.</p>
          <p>Confidential information must not be disclosed to unauthorized persons.</p>
        </section>

        <section id="as-25" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">25. Internal Use Only</h2>
          <p>This Policy is intended for DigiSaloon internal use.</p>
          <p>It should not be publicly distributed where doing so could expose security-sensitive operational information.</p>
        </section>

        <section id="as-26" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">26. Policy Violations</h2>
          <p>Violations may result in:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Removal of administrative access</li>
            <li>Internal disciplinary action</li>
            <li>Contractual consequences</li>
            <li>Account termination</li>
            <li>Investigation</li>
            <li>Legal action where appropriate</li>
          </ul>
        </section>

        <section id="as-27" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">27. Third-Party Administrators</h2>
          <p>Where contractors or third-party service providers receive administrative access, DigiSaloon should provide only the access reasonably required for their authorized work.</p>
          <p>Appropriate confidentiality and security requirements may apply.</p>
        </section>

        <section id="as-28" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">28. Policy Updates</h2>
          <p>DigiSaloon may update this Policy as its infrastructure changes, security practices evolve, administrative systems change, or legal requirements change.</p>
        </section>

        <section id="as-29" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">29. Internal Contact</h2>
          <p>Security or Admin Panel concerns should be reported through the designated DigiSaloon internal security/technical channel.</p>
          <p>For general platform support:</p>
          <div className="bg-slate-900 text-slate-200 p-5 rounded-xl space-y-2 text-xs md:text-sm">
            <p className="font-bold text-white text-base">DigiSaloon</p>
            <p><strong>Email:</strong> <a href="mailto:support@digisaloon.in" className="text-red-400 hover:underline font-mono">support@digisaloon.in</a></p>
            <p><strong>Phone:</strong> 9973499471</p>
            <p><strong>Address:</strong> Angara, Ranchi, Jharkhand – 835103</p>
            <p><strong>Website:</strong> digisaloon.in</p>
          </div>
        </section>

      </div>
    </div>
  );
};