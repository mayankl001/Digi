import React from "react";

export const AdminSecurityPolicy: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Admin Panel Access & Internal Security Policy
          </span>
          <span className="text-xs text-slate-400">Last Updated: 21 September 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          ADMIN PANEL ACCESS & INTERNAL SECURITY POLICY
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          This Admin Panel Access & Internal Security Policy (“Policy”) establishes the rules, responsibilities, access controls, and security practices governing DigiSaloon's internal administrative systems, dashboards, databases, management interfaces, and other authorized internal tools (“Admin Systems”).
        </p>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          This Policy applies to DigiSaloon employees, administrators, technical personnel, support personnel, authorized contractors, and other individuals who are granted access to DigiSaloon's internal systems.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="admin-policy-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. PURPOSE</h2>
          <p>The purpose of this Policy is to establish appropriate controls for:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Admin Panel access</li>
            <li>Internal system security</li>
            <li>Role-based permissions</li>
            <li>Customer information</li>
            <li>Salon Partner information</li>
            <li>Booking information</li>
            <li>Payment and settlement information</li>
            <li>Staff and account management</li>
            <li>Security monitoring</li>
            <li>Administrative actions</li>
            <li>Data protection</li>
            <li>Incident response</li>
            <li>Access termination</li>
          </ul>
        </section>

        <section id="admin-policy-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. SCOPE</h2>
          <p>This Policy applies to DigiSaloon internal systems, including where applicable:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Admin Panel</li>
            <li>Admin dashboard</li>
            <li>Partner management systems</li>
            <li>Customer management systems</li>
            <li>Booking management systems</li>
            <li>Payment and settlement management systems</li>
            <li>Support management systems</li>
            <li>Content moderation systems</li>
            <li>Review and rating management</li>
            <li>Internal reporting systems</li>
            <li>Database and backend administration interfaces</li>
            <li>Other authorized internal tools</li>
          </ul>
          <p className="pt-2">The exact systems and features available may change as DigiSaloon develops its platform.</p>
        </section>

        <section id="admin-policy-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. AUTHORIZED ACCESS ONLY</h2>
          <p>Access to DigiSaloon Admin Systems is restricted to authorized personnel who require access for legitimate business, operational, technical, security, support, or administrative purposes.</p>
          <p>No person may access an Admin System without appropriate authorization.</p>
          <p>Admin access must not be:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Shared</li>
            <li>Sold</li>
            <li>Transferred</li>
            <li>Borrowed</li>
            <li>Used for unauthorized purposes</li>
          </ul>
        </section>

        <section id="admin-policy-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. ADMIN ACCOUNT</h2>
          <p>Each authorized administrator should use an individual account wherever the system supports individual accounts.</p>
          <p>Administrators should not share:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Passwords</li>
            <li>Authentication codes</li>
            <li>Login sessions</li>
            <li>Security credentials</li>
            <li>API keys</li>
            <li>Access tokens</li>
            <li>Other authentication information</li>
          </ul>
          <p className="pt-2">Individual accounts help DigiSaloon identify and review administrative activity.</p>
        </section>

        <section id="admin-policy-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. ROLE-BASED ACCESS CONTROL</h2>
          <p>DigiSaloon may provide different levels of administrative access depending on a person's role.</p>
          <p>Possible roles may include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Super Administrator</li>
            <li>Operations Administrator</li>
            <li>Customer Support Administrator</li>
            <li>Partner Management Administrator</li>
            <li>Finance/Settlement Administrator</li>
            <li>Content Moderator</li>
            <li>Technical Administrator</li>
            <li>Security Administrator</li>
            <li>Other authorized roles</li>
          </ul>
          <p className="pt-2">Not every administrator should have access to every system or type of information.</p>
          <p>Access should be limited to what is reasonably required for the person's assigned responsibilities.</p>
        </section>

        <section id="admin-policy-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. PRINCIPLE OF LEAST PRIVILEGE</h2>
          <p>DigiSaloon should provide the minimum level of access reasonably required for an individual's role.</p>
          <p>Where appropriate:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Read-only access may be provided instead of editing access.</li>
            <li>Operational access may be separated from financial access.</li>
            <li>Support access may be separated from technical administration.</li>
            <li>Database access may be restricted to authorized technical personnel.</li>
            <li>High-risk administrative functions may require additional authorization.</li>
          </ul>
        </section>

        <section id="admin-policy-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. ADMINISTRATOR RESPONSIBILITIES</h2>
          <p>Every administrator is responsible for:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Protecting their credentials</li>
            <li>Using access only for authorized purposes</li>
            <li>Protecting customer and Partner information</li>
            <li>Following DigiSaloon security procedures</li>
            <li>Reporting suspicious activity</li>
            <li>Avoiding unauthorized data access</li>
            <li>Keeping administrative actions accurate</li>
            <li>Logging out when appropriate</li>
          </ul>
        </section>

        <section id="admin-policy-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. PASSWORD SECURITY</h2>
          <p>Administrators should use strong and unique passwords.</p>
          <p>Administrators should not:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Reuse passwords from unrelated services</li>
            <li>Share passwords</li>
            <li>Store passwords insecurely</li>
            <li>Send passwords through ordinary chat or email</li>
            <li>Write passwords where unauthorized persons can access them</li>
          </ul>
          <p className="pt-2">Where supported, DigiSaloon may require additional authentication controls.</p>
        </section>

        <section id="admin-policy-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. MULTI-FACTOR AUTHENTICATION</h2>
          <p>DigiSaloon may require or implement multi-factor authentication (“MFA”) for sensitive administrative systems.</p>
          <p>MFA may include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Authentication applications</li>
            <li>One-time codes</li>
            <li>Security keys</li>
            <li>Other approved authentication methods</li>
          </ul>
          <p className="pt-2">Administrators must not share authentication codes or approve authentication requests they did not initiate.</p>
        </section>

        <section id="admin-policy-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. ADMIN PANEL ACCESS FROM DEVICES</h2>
          <p>Administrators should access internal systems only through reasonably secure devices.</p>
          <p>Administrators should:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Keep operating systems updated</li>
            <li>Use updated browsers</li>
            <li>Use appropriate device security</li>
            <li>Lock devices when unattended</li>
            <li>Avoid unauthorized software</li>
            <li>Report compromised devices</li>
          </ul>
          <p className="pt-2">Access from public or shared devices should be avoided where reasonably possible.</p>
        </section>

        <section id="admin-policy-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. NETWORK SECURITY</h2>
          <p>Administrative access should be performed through trusted network connections where reasonably possible.</p>
          <p>Administrators should avoid using unsecured public networks for sensitive administrative activities unless appropriate security controls are in place.</p>
          <p>DigiSaloon may implement additional network restrictions for sensitive systems.</p>
        </section>

        <section id="admin-policy-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. CUSTOMER DATA ACCESS</h2>
          <p>Admin Systems may contain customer information required for legitimate business operations.</p>
          <p>Depending on role and permissions, this may include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Name</li>
            <li>Contact information</li>
            <li>Booking information</li>
            <li>Appointment details</li>
            <li>Account information</li>
            <li>Review and rating information</li>
            <li>Relevant transaction information</li>
            <li>Support-related information</li>
          </ul>
          <p className="pt-2 font-medium text-slate-800">Administrators must access customer information only when required for an authorized purpose.</p>
        </section>

        <section id="admin-policy-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. PARTNER DATA ACCESS</h2>
          <p>Admin Systems may contain Partner information such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Salon information</li>
            <li>Business details</li>
            <li>Contact information</li>
            <li>Service information</li>
            <li>Booking information</li>
            <li>Settlement information</li>
            <li>Verification information</li>
            <li>Bank-related information where applicable</li>
            <li>GST-related information where applicable</li>
          </ul>
          <p className="pt-2 font-medium text-slate-800">Such information must be accessed and handled only for legitimate authorized purposes.</p>
        </section>

        <section id="admin-policy-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. PAYMENT AND FINANCIAL INFORMATION</h2>
          <p>Access to payment and settlement information must be restricted to authorized personnel.</p>
          <p>Administrators must not:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Alter payment records without authorization</li>
            <li>Manipulate settlement amounts</li>
            <li>Create unauthorized refunds</li>
            <li>Misrepresent payment status</li>
            <li>Access payment information for personal purposes</li>
            <li>Share sensitive payment information unnecessarily</li>
          </ul>
          <p className="pt-2">Where payment processing is handled by a third-party provider, DigiSaloon personnel should use the provider's authorized systems and permissions.</p>
        </section>

        <section id="admin-policy-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. PAYMENT GATEWAY ACCESS</h2>
          <p>Where DigiSaloon uses a payment provider such as Razorpay, access to the relevant payment dashboard should be limited to authorized personnel.</p>
          <p>Payment-provider credentials must be protected separately from ordinary Admin Panel credentials.</p>
          <p>Administrative personnel must not share payment-provider login credentials or API credentials without authorization.</p>
        </section>

        <section id="admin-policy-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. REFUND ACCESS</h2>
          <p>Refund functionality should be restricted to authorized personnel.</p>
          <p>Where refunds are available through an Admin System, administrators should:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Verify the relevant transaction</li>
            <li>Confirm the applicable refund policy</li>
            <li>Confirm the reason for the refund</li>
            <li>Avoid unauthorized refunds</li>
            <li>Maintain appropriate records</li>
          </ul>
        </section>

        <section id="admin-policy-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. BOOKING MANAGEMENT</h2>
          <p>Authorized administrators may manage booking-related information for legitimate operational purposes.</p>
          <p>Administrative actions may include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Viewing bookings</li>
            <li>Reviewing booking status</li>
            <li>Supporting customers</li>
            <li>Supporting salon Partners</li>
            <li>Reviewing cancellations</li>
            <li>Investigating booking disputes</li>
            <li>Handling technical issues</li>
          </ul>
          <p className="pt-2 font-medium text-slate-800">Administrators must not manipulate bookings for personal benefit.</p>
        </section>

        <section id="admin-policy-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. CUSTOMER ACCOUNT MANAGEMENT</h2>
          <p>Authorized administrators may assist with customer accounts when reasonably necessary.</p>
          <p>Actions may include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Reviewing account information</li>
            <li>Handling support requests</li>
            <li>Investigating account issues</li>
            <li>Managing account restrictions where authorized</li>
            <li>Supporting account deletion requests</li>
          </ul>
          <p className="pt-2 font-medium text-slate-800">Administrative access must not be used to access accounts without a legitimate reason.</p>
        </section>

        <section id="admin-policy-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. PARTNER ACCOUNT MANAGEMENT</h2>
          <p>Authorized administrators may manage Partner accounts for legitimate purposes, including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Onboarding review</li>
            <li>Verification</li>
            <li>Account support</li>
            <li>Booking support</li>
            <li>Service information</li>
            <li>Suspension or restriction</li>
            <li>Settlement-related support</li>
          </ul>
          <p className="pt-2">Administrative actions should be consistent with applicable DigiSaloon policies.</p>
        </section>

        <section id="admin-policy-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">20. CONTENT AND REVIEW MODERATION</h2>
          <p>Authorized personnel may access content, reviews, ratings, or other user-generated information for moderation and support purposes.</p>
          <p>Moderation actions should be based on applicable DigiSaloon policies and should not be used for personal retaliation or favoritism.</p>
        </section>

        <section id="admin-policy-21" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">21. ADMIN ACTION LOGGING</h2>
          <p>Where technically available, DigiSaloon may maintain logs of administrative activity.</p>
          <p>Logs may include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Administrator identity</li>
            <li>Login activity</li>
            <li>Access time</li>
            <li>Relevant administrative actions</li>
            <li>System changes</li>
            <li>Security events</li>
            <li>Account changes</li>
          </ul>
          <p className="pt-2">Logs may be used for security, troubleshooting, auditing, dispute resolution, and incident investigation.</p>
        </section>

        <section id="admin-policy-22" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">22. NO UNAUTHORIZED DATA EXPORT</h2>
          <p>Administrators must not export, download, copy, or transfer DigiSaloon data unless authorized.</p>
          <p>Unauthorized data transfers may include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Copying customer lists</li>
            <li>Downloading Partner databases</li>
            <li>Exporting payment records</li>
            <li>Copying internal reports</li>
            <li>Taking unnecessary screenshots</li>
            <li>Sending internal information to personal accounts</li>
          </ul>
        </section>

        <section id="admin-policy-23" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">23. DATA MINIMIZATION</h2>
          <p>Administrators should access and retain only the information reasonably necessary for their assigned duties.</p>
          <p>Sensitive information should not be copied or retained unnecessarily.</p>
        </section>

        <section id="admin-policy-24" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">24. CONFIDENTIAL INFORMATION</h2>
          <p>Internal DigiSaloon information may be confidential, including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Customer information</li>
            <li>Partner information</li>
            <li>Payment information</li>
            <li>Settlement information</li>
            <li>Business information</li>
            <li>Internal reports</li>
            <li>Technical information</li>
            <li>Security information</li>
            <li>Administrative credentials</li>
            <li>System configurations</li>
          </ul>
          <p className="pt-2">Such information must not be disclosed to unauthorized persons.</p>
        </section>

        <section id="admin-policy-25" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">25. ADMIN API AND TECHNICAL CREDENTIALS</h2>
          <p>Technical personnel may have access to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>API keys</li>
            <li>Access tokens</li>
            <li>Service credentials</li>
            <li>Database credentials</li>
            <li>Cloud credentials</li>
            <li>Deployment credentials</li>
            <li>Other technical secrets</li>
          </ul>
          <p className="pt-2">These credentials must be protected and must not be publicly exposed.</p>
          <p>They must not be placed in:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Public repositories</li>
            <li>Public websites</li>
            <li>Public screenshots</li>
            <li>Unsecured documents</li>
            <li>Unapproved communication channels</li>
          </ul>
        </section>

        <section id="admin-policy-26" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">26. DATABASE ACCESS</h2>
          <p>Direct database access should be limited to authorized technical personnel.</p>
          <p>Where direct database access is necessary, personnel should:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Use authorized credentials</li>
            <li>Access only required information</li>
            <li>Avoid unnecessary modifications</li>
            <li>Maintain appropriate records</li>
            <li>Follow backup and recovery procedures</li>
          </ul>
          <p className="pt-2">Direct database modifications should be performed carefully because they may affect customer, Partner, booking, payment, or operational data.</p>
        </section>

        <section id="admin-policy-27" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">27. PRODUCTION SYSTEM ACCESS</h2>
          <p>Access to production systems should be restricted to personnel who require it for legitimate operational or technical purposes.</p>
          <p>Where reasonably possible, DigiSaloon may separate:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Development systems</li>
            <li>Testing systems</li>
            <li>Staging systems</li>
            <li>Production systems</li>
          </ul>
          <p className="pt-2">Production changes should follow appropriate review and deployment procedures.</p>
        </section>

        <section id="admin-policy-28" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">28. ADMIN PANEL CHANGES</h2>
          <p>Changes to important Admin Panel configurations should be performed only by authorized personnel.</p>
          <p>Depending on the nature of the change, additional approval or review may be required.</p>
          <p>Examples include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Payment configuration</li>
            <li>Settlement settings</li>
            <li>User permissions</li>
            <li>Partner status</li>
            <li>Booking configuration</li>
            <li>Security settings</li>
            <li>Database changes</li>
            <li>Production configuration</li>
          </ul>
        </section>

        <section id="admin-policy-29" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">29. SECURITY MONITORING</h2>
          <p>DigiSaloon may use reasonable technical and organizational measures to monitor and protect internal systems.</p>
          <p>Security monitoring may help identify:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Unauthorized login attempts</li>
            <li>Suspicious account activity</li>
            <li>Unusual access patterns</li>
            <li>System errors</li>
            <li>Security incidents</li>
            <li>Potential fraud</li>
            <li>Unauthorized administrative activity</li>
          </ul>
          <p className="pt-2">Monitoring should be conducted subject to applicable law and DigiSaloon's Privacy Policy.</p>
        </section>

        <section id="admin-policy-30" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">30. SUSPICIOUS ACTIVITY</h2>
          <p>Administrators must promptly report suspected:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Unauthorized access</li>
            <li>Credential compromise</li>
            <li>Data leakage</li>
            <li>Suspicious login activity</li>
            <li>Unauthorized account changes</li>
            <li>Payment manipulation</li>
            <li>Fraud</li>
            <li>Malware or device compromise</li>
            <li>Security vulnerabilities</li>
          </ul>
        </section>

        <section id="admin-policy-31" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">31. SECURITY INCIDENT RESPONSE</h2>
          <p>If a security incident occurs or is suspected, DigiSaloon may take appropriate steps such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Restricting affected accounts</li>
            <li>Revoking credentials</li>
            <li>Securing affected systems</li>
            <li>Investigating relevant logs</li>
            <li>Assessing affected information</li>
            <li>Correcting vulnerabilities</li>
            <li>Restoring affected systems</li>
            <li>Communicating with affected parties where appropriate</li>
            <li>Taking additional legal or operational measures where necessary</li>
          </ul>
        </section>

        <section id="admin-policy-32" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">32. LOST OR STOLEN ADMIN DEVICE</h2>
          <p>If an administrator's device containing an active administrative session or authentication information is lost or stolen, the administrator must report the incident as soon as reasonably possible.</p>
          <p>DigiSaloon may:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Revoke active sessions</li>
            <li>Reset credentials</li>
            <li>Disable access</li>
            <li>Review security logs</li>
            <li>Require additional verification</li>
          </ul>
        </section>

        <section id="admin-policy-33" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">33. ADMIN ACCOUNT SUSPENSION</h2>
          <p>DigiSaloon may temporarily suspend an administrator's access where necessary to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Protect the platform</li>
            <li>Investigate suspicious activity</li>
            <li>Prevent unauthorized access</li>
            <li>Investigate a security incident</li>
            <li>Protect customer or Partner information</li>
          </ul>
        </section>

        <section id="admin-policy-34" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">34. EMPLOYEE AND CONTRACTOR OFFBOARDING</h2>
          <p>When an employee, contractor, or other authorized administrator leaves DigiSaloon, changes role, no longer requires administrative access, or has access revoked, their Admin System access should be disabled or removed promptly.</p>
          <p>Where applicable, associated credentials, sessions, tokens, and permissions should also be revoked.</p>
        </section>

        <section id="admin-policy-35" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">35. THIRD-PARTY ACCESS</h2>
          <p>DigiSaloon may provide limited system access to authorized third-party service providers where necessary for legitimate business or technical purposes.</p>
          <p>Such access should be:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Authorized</li>
            <li>Limited to required functions</li>
            <li>Subject to appropriate contractual or operational controls</li>
            <li>Revoked when no longer required</li>
          </ul>
        </section>

        <section id="admin-policy-36" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">36. SECURITY OF THIRD-PARTY SERVICES</h2>
          <p>DigiSaloon may use third-party infrastructure and services for functions such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Cloud hosting</li>
            <li>Payment processing</li>
            <li>Authentication</li>
            <li>Database services</li>
            <li>Email</li>
            <li>Notifications</li>
            <li>Analytics</li>
            <li>Monitoring</li>
          </ul>
          <p className="pt-2">Security and privacy practices of such providers may be governed by their own applicable terms and policies.</p>
        </section>

        <section id="admin-policy-37" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">37. BACKUPS AND RECOVERY</h2>
          <p>DigiSaloon may maintain appropriate backups or recovery mechanisms for important systems and data.</p>
          <p>Backups may be used to support:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>System recovery</li>
            <li>Data restoration</li>
            <li>Business continuity</li>
            <li>Technical troubleshooting</li>
          </ul>
          <p className="pt-2">Access to backups should be restricted to authorized personnel.</p>
        </section>

        <section id="admin-policy-38" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">38. INTERNAL SECURITY TESTING</h2>
          <p>DigiSaloon may conduct or authorize security testing of its systems.</p>
          <p>Security testing must be performed only by authorized personnel or authorized security professionals.</p>
          <p>Unauthorized testing, scanning, penetration attempts, or disruption of DigiSaloon systems is prohibited.</p>
        </section>

        <section id="admin-policy-39" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">39. PROHIBITED ADMINISTRATIVE ACTIVITIES</h2>
          <p>Administrators must not:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Access data without authorization</li>
            <li>Sell or disclose internal information</li>
            <li>Manipulate records for personal benefit</li>
            <li>Create unauthorized administrator accounts</li>
            <li>Disable security controls without authorization</li>
            <li>Share credentials</li>
            <li>Circumvent access restrictions</li>
            <li>Download unnecessary sensitive data</li>
            <li>Modify production systems without authorization</li>
            <li>Use internal data for personal purposes</li>
            <li>Attempt to damage or disrupt DigiSaloon systems</li>
          </ul>
        </section>

        <section id="admin-policy-40" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">40. CONFLICT OF INTEREST</h2>
          <p>Administrators must not use internal access to provide an unfair advantage to themselves, friends, family members, salons, customers, or other parties.</p>
          <p>Potential conflicts involving administrative decisions should be disclosed to the appropriate DigiSaloon authority.</p>
        </section>

        <section id="admin-policy-41" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">41. INTERNAL COMMUNICATION</h2>
          <p>Sensitive administrative or security information should be communicated only through approved channels.</p>
          <p>Administrators should avoid sending sensitive information through unsecured or unauthorized platforms.</p>
        </section>

        <section id="admin-policy-42" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">42. SECURITY AWARENESS</h2>
          <p>DigiSaloon may provide internal guidance or training regarding:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Password security</li>
            <li>Phishing awareness</li>
            <li>Customer privacy</li>
            <li>Payment security</li>
            <li>Data handling</li>
            <li>Admin Panel security</li>
            <li>Incident reporting</li>
            <li>Access management</li>
          </ul>
          <p className="pt-2">Authorized personnel are expected to follow applicable security instructions.</p>
        </section>

        <section id="admin-policy-43" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">43. POLICY VIOLATIONS</h2>
          <p>Violation of this Policy may result in:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Warning</li>
            <li>Access restriction</li>
            <li>Account suspension</li>
            <li>Credential revocation</li>
            <li>Internal investigation</li>
            <li>Termination of authorization</li>
            <li>Contractual action</li>
            <li>Legal action where appropriate</li>
          </ul>
          <p className="pt-2">The response may depend on the nature and seriousness of the violation.</p>
        </section>

        <section id="admin-policy-44" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">44. SECURITY AND PRIVACY</h2>
          <p>This Policy should be read together with DigiSaloon's Privacy Policy and Security Policy.</p>
          <p>Security controls are intended to reduce risks, but no internet-connected system can be guaranteed to be completely secure.</p>
          <p>DigiSaloon will take reasonable measures appropriate to its systems and operational requirements to protect information and internal systems.</p>
        </section>

        <section id="admin-policy-45" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">45. CHANGES TO THIS POLICY</h2>
          <p>DigiSaloon may update this Policy from time to time to reflect:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>New technology</li>
            <li>New Admin Panel features</li>
            <li>Security improvements</li>
            <li>Operational changes</li>
            <li>Changes in third-party services</li>
            <li>Legal or regulatory requirements</li>
          </ul>
          <p className="pt-2">The updated version may be published or communicated through appropriate DigiSaloon channels.</p>
        </section>

        <section id="admin-policy-46" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">46. RELATED POLICIES</h2>
          <p>This Policy should be read together with:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Privacy Policy</li>
            <li>Security Policy</li>
            <li>Terms & Conditions</li>
            <li>Partner Terms & Conditions</li>
            <li>Partner Payout & Settlement Terms</li>
            <li>Partner Onboarding & Verification Policy</li>
            <li>Booking & Appointment Policy</li>
            <li>Payment & Settlement Policy</li>
            <li>Cancellation & Refund Policy</li>
            <li>Content Policy & Community Guidelines</li>
            <li>Review & Rating Policy</li>
            <li>Grievance Redressal & Contact Policy</li>
            <li>Data Retention Policy</li>
          </ul>
        </section>

        <section id="admin-policy-47" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">47. CONTACT INFORMATION</h2>
          <p>For administrative access, security, privacy, or internal-system concerns:</p>
          <div className="bg-slate-900 text-slate-200 p-5 rounded-xl space-y-3 text-xs md:text-sm mt-3">
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
          </div>
          <p className="pt-2 text-xs text-slate-400 font-medium">© DigiSaloon. All Rights Reserved.</p>
        </section>

      </div>
    </div>
  );
};