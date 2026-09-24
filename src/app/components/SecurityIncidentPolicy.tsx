import React from "react";

export const SecurityIncidentPolicy: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Security & Incident Response Policy
          </span>
          <span className="text-xs text-slate-400">Last Updated: 21 September 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          SECURITY & INCIDENT RESPONSE POLICY
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          This Security & Incident Response Policy (“Policy”) describes the security practices and incident-response procedures applicable to DigiSaloon's website, applications, Partner systems, Manage Web, Admin Panel, backend infrastructure, databases, payment integrations, and related services.
        </p>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          DigiSaloon aims to use reasonable technical and organizational measures to protect its systems and information against unauthorized access, misuse, loss, alteration, disruption, and other security risks.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="sec-policy-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. PURPOSE</h2>
          <p>The purpose of this Policy is to establish a framework for:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Information security</li>
            <li>System security</li>
            <li>Access control</li>
            <li>Account protection</li>
            <li>Data protection</li>
            <li>Payment security</li>
            <li>Security monitoring</li>
            <li>Incident detection</li>
            <li>Incident reporting</li>
            <li>Incident investigation</li>
            <li>Incident response</li>
            <li>Recovery and corrective action</li>
          </ul>
        </section>

        <section id="sec-policy-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. SCOPE</h2>
          <p>This Policy applies to DigiSaloon's systems and services, including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>DigiSaloon Website</li>
            <li>Customer App</li>
            <li>Salon Partner App</li>
            <li>Partner Web App</li>
            <li>Manage Web</li>
            <li>Admin Panel</li>
            <li>Backend services</li>
            <li>APIs</li>
            <li>Databases</li>
            <li>Cloud infrastructure</li>
            <li>Authentication systems</li>
            <li>Payment integrations</li>
            <li>Notification systems</li>
            <li>Internal administrative systems</li>
            <li>Other authorized DigiSaloon technology systems</li>
          </ul>
        </section>

        <section id="sec-policy-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. SECURITY PRINCIPLES</h2>
          <p>DigiSaloon aims to protect information and systems using appropriate measures based on the nature and sensitivity of the information involved.</p>
          <p>Security measures may address:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Confidentiality</li>
            <li>Integrity</li>
            <li>Availability</li>
            <li>Authentication</li>
            <li>Authorization</li>
            <li>Monitoring</li>
            <li>Backup and recovery</li>
            <li>Incident response</li>
          </ul>
        </section>

        <section id="sec-policy-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. ACCESS CONTROL</h2>
          <p>Access to DigiSaloon systems should be restricted to authorized users and personnel.</p>
          <p>DigiSaloon may use:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Individual user accounts</li>
            <li>Role-based permissions</li>
            <li>Authentication controls</li>
            <li>Administrative access restrictions</li>
            <li>Session management</li>
            <li>Access monitoring</li>
            <li>Other appropriate security controls</li>
          </ul>
          <p className="pt-2">Access should generally be limited according to the user's or administrator's role.</p>
        </section>

        <section id="sec-policy-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. ADMINISTRATIVE ACCESS</h2>
          <p>Administrative systems may contain sensitive customer, Partner, booking, payment, and technical information.</p>
          <p>Administrative access should therefore be restricted to authorized personnel.</p>
          <p>Administrative access is additionally governed by the Admin Panel Access & Internal Security Policy.</p>
        </section>

        <section id="sec-policy-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. ACCOUNT SECURITY</h2>
          <p>Users, Partners, Staff, and administrators are responsible for protecting their account credentials.</p>
          <p>They should:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Use strong passwords</li>
            <li>Keep passwords confidential</li>
            <li>Avoid sharing authentication codes</li>
            <li>Avoid unauthorized account sharing</li>
            <li>Secure devices used to access DigiSaloon</li>
            <li>Report suspected account compromise</li>
          </ul>
        </section>

        <section id="sec-policy-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. AUTHENTICATION</h2>
          <p>DigiSaloon may use authentication mechanisms appropriate to the relevant system.</p>
          <p>Depending on the service, authentication may include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Passwords</li>
            <li>One-time verification codes</li>
            <li>Session authentication</li>
            <li>Multi-factor authentication</li>
            <li>Other appropriate authentication mechanisms</li>
          </ul>
          <p className="pt-2">The availability of specific authentication methods may vary by system.</p>
        </section>

        <section id="sec-policy-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. DATA SECURITY</h2>
          <p>DigiSaloon may use reasonable safeguards to protect personal, business, booking, payment-related, and technical information.</p>
          <p>Security measures may include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Access controls</li>
            <li>Authentication</li>
            <li>Secure communications</li>
            <li>Monitoring</li>
            <li>Logging</li>
            <li>Backup and recovery mechanisms</li>
            <li>Security updates</li>
            <li>Administrative controls</li>
          </ul>
          <p className="pt-2 font-medium text-slate-800">No internet-connected system can be guaranteed to be completely secure.</p>
        </section>

        <section id="sec-policy-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. SECURE COMMUNICATION</h2>
          <p>Where technically supported, DigiSaloon may use encrypted communication protocols such as HTTPS/TLS to protect information transmitted between users and DigiSaloon systems.</p>
          <p>Users should use official DigiSaloon applications and websites and should avoid providing sensitive information through unofficial channels.</p>
        </section>

        <section id="sec-policy-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. PAYMENT SECURITY</h2>
          <p>DigiSaloon may use authorized third-party payment providers, such as Razorpay, to process customer payments.</p>
          <p>Payment processing may be subject to the security systems, procedures, and requirements of the applicable payment provider.</p>
          <p>DigiSaloon personnel should not request unnecessary payment credentials from customers.</p>
          <p className="font-medium text-slate-800">Users should never share payment PINs, OTPs, passwords, or other confidential authentication information with DigiSaloon personnel or salon Staff.</p>
        </section>

        <section id="sec-policy-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. PAYMENT GATEWAY CREDENTIALS</h2>
          <p>Access to payment-provider dashboards, API keys, credentials, and related technical information must be restricted to authorized personnel.</p>
          <p>Payment credentials must not be:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Publicly exposed</li>
            <li>Published in source-code repositories</li>
            <li>Shared through unauthorized channels</li>
            <li>Included in public screenshots</li>
            <li>Stored insecurely</li>
          </ul>
        </section>

        <section id="sec-policy-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. API SECURITY</h2>
          <p>DigiSaloon may use APIs to connect its applications, backend systems, payment services, databases, and other components.</p>
          <p>DigiSaloon may use reasonable controls such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Authentication</li>
            <li>Authorization</li>
            <li>Input validation</li>
            <li>Rate limiting</li>
            <li>Access restrictions</li>
            <li>Error handling</li>
            <li>Monitoring</li>
            <li>Logging</li>
          </ul>
          <p className="pt-2">API credentials and tokens should be protected against unauthorized access.</p>
        </section>

        <section id="sec-policy-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. DATABASE SECURITY</h2>
          <p>Access to DigiSaloon databases should be restricted to authorized systems and personnel.</p>
          <p>Where reasonably possible, database access should use:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Authentication</li>
            <li>Permission controls</li>
            <li>Restricted network access</li>
            <li>Logging</li>
            <li>Backup procedures</li>
            <li>Other appropriate safeguards</li>
          </ul>
          <p className="pt-2 font-medium text-slate-800">Unauthorized database access is prohibited.</p>
        </section>

        <section id="sec-policy-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. APPLICATION SECURITY</h2>
          <p>DigiSaloon may implement security practices during application development and maintenance, including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Input validation</li>
            <li>Authentication controls</li>
            <li>Authorization checks</li>
            <li>Secure configuration</li>
            <li>Dependency updates</li>
            <li>Error handling</li>
            <li>Security testing</li>
            <li>Vulnerability remediation</li>
          </ul>
          <p className="pt-2">Security practices may evolve as the platform develops.</p>
        </section>

        <section id="sec-policy-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. ADMIN PANEL SECURITY</h2>
          <p>The DigiSaloon Admin Panel should be protected through appropriate access controls and administrative security measures.</p>
          <p>Sensitive functions may require additional authorization. Examples may include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Refund management</li>
            <li>Partner account management</li>
            <li>Settlement management</li>
            <li>User restrictions</li>
            <li>Security settings</li>
            <li>Administrative configuration</li>
            <li>Data access</li>
          </ul>
        </section>

        <section id="sec-policy-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. PARTNER SYSTEM SECURITY</h2>
          <p>The Partner App, Partner Web App, and Manage Web may contain customer and booking information.</p>
          <p>Partners and Staff are responsible for:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Protecting their accounts</li>
            <li>Preventing unauthorized access</li>
            <li>Securing devices</li>
            <li>Removing access for former Staff</li>
            <li>Reporting security incidents</li>
          </ul>
        </section>

        <section id="sec-policy-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. STAFF SECURITY</h2>
          <p>Salon Partners should provide DigiSaloon access only to authorized Staff.</p>
          <p>When a Staff member leaves the salon or no longer requires access, the Partner should promptly remove or disable their access.</p>
        </section>

        <section id="sec-policy-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. SECURITY MONITORING</h2>
          <p>DigiSaloon may monitor relevant system activity for purposes including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Security</li>
            <li>Fraud prevention</li>
            <li>Troubleshooting</li>
            <li>System reliability</li>
            <li>Abuse detection</li>
            <li>Incident investigation</li>
          </ul>
          <p className="pt-2">Monitoring may include relevant login activity, system events, administrative actions, or security logs, subject to applicable law and DigiSaloon's Privacy Policy.</p>
        </section>

        <section id="sec-policy-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. SECURITY LOGS</h2>
          <p>DigiSaloon may maintain security and technical logs that help identify and investigate:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Unauthorized access</li>
            <li>Failed authentication</li>
            <li>Suspicious activity</li>
            <li>Administrative actions</li>
            <li>System errors</li>
            <li>Security incidents</li>
          </ul>
          <p className="pt-2">Log retention may vary depending on the type and purpose of the information.</p>
        </section>

        <section id="sec-policy-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">20. SECURITY UPDATES</h2>
          <p>DigiSaloon may apply security updates and patches to its software, infrastructure, dependencies, and systems where reasonably appropriate.</p>
          <p>Users and Partners are also responsible for keeping their devices and applications reasonably updated.</p>
        </section>

        <section id="sec-policy-21" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">21. VULNERABILITY MANAGEMENT</h2>
          <p>DigiSaloon may identify and address vulnerabilities through:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Internal testing</li>
            <li>Monitoring</li>
            <li>Software updates</li>
            <li>Security reviews</li>
            <li>Third-party assessments where appropriate</li>
            <li>User or researcher reports</li>
          </ul>
          <p className="pt-2">The priority and timing of remediation may depend on the nature and severity of the vulnerability.</p>
        </section>

        {/* INCIDENT RESPONSE */}
        <div className="pt-4 border-t border-slate-200">
          <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">INCIDENT RESPONSE</h3>
        </div>

        <section id="sec-policy-22" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">22. WHAT IS A SECURITY INCIDENT?</h2>
          <p>A security incident may include an event that could compromise or threaten the confidentiality, integrity, or availability of DigiSaloon systems or information.</p>
          <p>Examples may include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Unauthorized account access</li>
            <li>Data exposure</li>
            <li>Credential compromise</li>
            <li>Malware</li>
            <li>Unauthorized administrative activity</li>
            <li>Payment-related security issues</li>
            <li>Database compromise</li>
            <li>System intrusion</li>
            <li>Denial-of-service activity</li>
            <li>Accidental disclosure</li>
            <li>Loss or theft of a device containing sensitive access information</li>
          </ul>
        </section>

        <section id="sec-policy-23" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">23. INCIDENT DETECTION</h2>
          <p>Security incidents may be identified through:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Automated monitoring</li>
            <li>Security logs</li>
            <li>Internal reports</li>
            <li>User reports</li>
            <li>Partner reports</li>
            <li>Staff reports</li>
            <li>Payment-provider notifications</li>
            <li>Third-party reports</li>
            <li>Security testing</li>
          </ul>
        </section>

        <section id="sec-policy-24" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">24. INCIDENT REPORTING</h2>
          <p>Users, Partners, Staff, administrators, and other authorized persons should report suspected security incidents as soon as reasonably possible.</p>
          <p>Reports should preferably include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Name/contact information</li>
            <li>Description of the issue</li>
            <li>Relevant account or booking information</li>
            <li>Approximate date and time</li>
            <li>Screenshots or evidence where appropriate</li>
            <li>Steps already taken</li>
            <li>Any known affected system</li>
          </ul>
          <p className="pt-2 font-medium text-red-700 bg-red-50 p-3 rounded-lg border border-red-100">
            Do not include passwords, OTPs, API keys, or other confidential authentication credentials in the report.
          </p>
        </section>

        <section id="sec-policy-25" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">25. INCIDENT RESPONSE PROCESS</h2>
          <p>Depending on the incident, DigiSaloon may follow a process that includes:</p>
          <div className="space-y-3 pt-2">
            <div className="border-l-2 border-red-500 pl-3">
              <p className="font-semibold text-slate-800">Step 1 — Identification</p>
              <p className="text-xs">Identify and assess the reported or detected security event.</p>
            </div>
            <div className="border-l-2 border-red-500 pl-3">
              <p className="font-semibold text-slate-800">Step 2 — Containment</p>
              <p className="text-xs">Take reasonable steps to prevent further unauthorized activity or damage.</p>
            </div>
            <div className="border-l-2 border-red-500 pl-3">
              <p className="font-semibold text-slate-800">Step 3 — Investigation</p>
              <p className="text-xs">Review relevant logs, systems, accounts, transactions, and other available information.</p>
            </div>
            <div className="border-l-2 border-red-500 pl-3">
              <p className="font-semibold text-slate-800">Step 4 — Remediation</p>
              <p className="text-xs">Address the underlying security issue and apply appropriate corrective measures.</p>
            </div>
            <div className="border-l-2 border-red-500 pl-3">
              <p className="font-semibold text-slate-800">Step 5 — Recovery</p>
              <p className="text-xs">Restore affected systems or services where necessary.</p>
            </div>
            <div className="border-l-2 border-red-500 pl-3">
              <p className="font-semibold text-slate-800">Step 6 — Review</p>
              <p className="text-xs">Evaluate the incident and identify measures that may reduce the risk of recurrence.</p>
            </div>
          </div>
        </section>

        <section id="sec-policy-26" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">26. INCIDENT CONTAINMENT</h2>
          <p>Depending on the circumstances, DigiSaloon may:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Disable compromised accounts</li>
            <li>Revoke sessions</li>
            <li>Reset credentials</li>
            <li>Restrict administrative access</li>
            <li>Block suspicious activity</li>
            <li>Temporarily disable affected functionality</li>
            <li>Isolate affected systems</li>
            <li>Contact relevant service providers</li>
          </ul>
        </section>

        <section id="sec-policy-27" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">27. ACCOUNT COMPROMISE</h2>
          <p>If a customer, Partner, Staff, or administrator account is suspected of being compromised, DigiSaloon may take protective measures such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Temporary account restriction</li>
            <li>Credential reset</li>
            <li>Session termination</li>
            <li>Additional verification</li>
            <li>Security review</li>
          </ul>
          <p className="pt-2">The affected user may be required to verify account ownership.</p>
        </section>

        <section id="sec-policy-28" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">28. DATA SECURITY INCIDENT</h2>
          <p>If an incident potentially affects personal or business information, DigiSaloon may assess:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>What information was involved</li>
            <li>Which systems were affected</li>
            <li>The nature of the incident</li>
            <li>The potential impact</li>
            <li>Whether containment has been achieved</li>
            <li>Whether notification or other action is required</li>
          </ul>
        </section>

        <section id="sec-policy-29" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">29. CUSTOMER NOTIFICATION</h2>
          <p>Where appropriate and where required by applicable law or regulation, DigiSaloon may notify affected users or Partners about a security incident.</p>
          <p>The method and timing of any notification may depend on:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Nature of the incident</li>
            <li>Available information</li>
            <li>Legal requirements</li>
            <li>Security considerations</li>
            <li>Investigation status</li>
          </ul>
        </section>

        <section id="sec-policy-30" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">30. REGULATORY OR LEGAL REPORTING</h2>
          <p>Where applicable, DigiSaloon may report security incidents to relevant authorities, regulators, law-enforcement agencies, payment providers, or other organizations as required or reasonably appropriate.</p>
        </section>

        <section id="sec-policy-31" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">31. PAYMENT SECURITY INCIDENTS</h2>
          <p>If a security incident involves payment processing, DigiSaloon may coordinate with the applicable payment provider and relevant internal personnel.</p>
          <p>Possible actions may include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Reviewing affected transactions</li>
            <li>Restricting suspicious activity</li>
            <li>Suspending affected payment functions</li>
            <li>Investigating unauthorized transactions</li>
            <li>Coordinating refunds or reversals where applicable</li>
          </ul>
        </section>

        <section id="sec-policy-32" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">32. THIRD-PARTY SECURITY INCIDENTS</h2>
          <p>If an incident occurs at a third-party service provider used by DigiSaloon, DigiSaloon may:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Request relevant information from the provider</li>
            <li>Assess potential impact</li>
            <li>Take appropriate protective measures</li>
            <li>Restrict affected integrations where necessary</li>
            <li>Communicate with affected users where appropriate</li>
          </ul>
        </section>

        <section id="sec-policy-33" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">33. BUSINESS CONTINUITY</h2>
          <p>DigiSaloon may maintain reasonable measures to support continued operation or recovery following:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>System failures</li>
            <li>Infrastructure problems</li>
            <li>Security incidents</li>
            <li>Data loss</li>
            <li>Service outages</li>
            <li>Other disruptive events</li>
          </ul>
          <p className="pt-2">These measures may include backups, recovery procedures, alternative infrastructure, and system restoration processes where available.</p>
        </section>

        <section id="sec-policy-34" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">34. BACKUP AND RECOVERY</h2>
          <p>DigiSaloon may maintain backups of important systems and information for operational continuity and recovery.</p>
          <p>Backups may be protected through appropriate access restrictions and security controls.</p>
          <p>Backup recovery procedures may vary depending on the affected system.</p>
        </section>

        <section id="sec-policy-35" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">35. POST-INCIDENT REVIEW</h2>
          <p>After a significant security incident, DigiSaloon may conduct a review to determine:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>What happened</li>
            <li>How the incident occurred</li>
            <li>What systems were affected</li>
            <li>What controls worked</li>
            <li>What improvements are appropriate</li>
            <li>Whether additional monitoring is required</li>
          </ul>
        </section>

        <section id="sec-policy-36" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">36. EMPLOYEE AND ADMINISTRATOR RESPONSIBILITIES</h2>
          <p>Authorized DigiSaloon personnel must:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Follow applicable security procedures</li>
            <li>Protect credentials</li>
            <li>Use systems only for authorized purposes</li>
            <li>Report suspicious activity</li>
            <li>Protect customer and Partner information</li>
            <li>Cooperate with incident investigations</li>
          </ul>
        </section>

        <section id="sec-policy-37" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">37. PARTNER RESPONSIBILITIES</h2>
          <p>Salon Partners must:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Protect Partner credentials</li>
            <li>Secure devices used to access DigiSaloon</li>
            <li>Control Staff access</li>
            <li>Remove former Staff access</li>
            <li>Report suspected account compromise</li>
            <li>Protect customer information</li>
            <li>Follow DigiSaloon security requirements</li>
          </ul>
        </section>

        <section id="sec-policy-38" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">38. CUSTOMER RESPONSIBILITIES</h2>
          <p>Customers should:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Protect their account credentials</li>
            <li>Avoid sharing OTPs or authentication codes</li>
            <li>Use official DigiSaloon services</li>
            <li>Keep their device reasonably secure</li>
            <li>Report suspicious account activity</li>
          </ul>
        </section>

        <section id="sec-policy-39" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">39. PROHIBITED SECURITY ACTIVITIES</h2>
          <p>Unauthorized security activities against DigiSaloon systems are prohibited, including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Unauthorized penetration testing</li>
            <li>Vulnerability exploitation</li>
            <li>Credential attacks</li>
            <li>Data extraction</li>
            <li>System disruption</li>
            <li>Malware deployment</li>
            <li>Unauthorized scanning</li>
            <li>Denial-of-service attacks</li>
            <li>Bypassing access controls</li>
          </ul>
          <p className="pt-2 font-medium text-slate-800">Security testing should only be performed with explicit authorization from DigiSaloon.</p>
        </section>

        <section id="sec-policy-40" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">40. RESPONSIBLE SECURITY REPORTING</h2>
          <p>If a person identifies a potential security vulnerability, they should report it responsibly to DigiSaloon rather than exploiting it or accessing information beyond what is necessary to demonstrate the issue.</p>
          <p>Reports should not contain unnecessary personal or confidential information.</p>
        </section>

        <section id="sec-policy-41" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">41. SECURITY RESEARCH</h2>
          <p>DigiSaloon may establish or communicate separate procedures for authorized security researchers.</p>
          <p>Unless expressly authorized, security testing or exploitation of DigiSaloon systems is not permitted.</p>
        </section>

        <section id="sec-policy-42" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">42. CONFIDENTIALITY DURING INCIDENTS</h2>
          <p>Information obtained during a security investigation may be confidential.</p>
          <p>Employees, Partners, Staff, contractors, and other authorized persons must not disclose incident-related information to unauthorized parties.</p>
        </section>

        <section id="sec-policy-43" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">43. INCIDENT RECORDS</h2>
          <p>DigiSaloon may maintain records relating to security incidents, including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Incident reports</li>
            <li>Investigation information</li>
            <li>Security logs</li>
            <li>Actions taken</li>
            <li>Recovery activities</li>
            <li>Communications</li>
            <li>Corrective measures</li>
          </ul>
          <p className="pt-2">Such records may be retained according to DigiSaloon's Data Protection, Retention & Deletion Policy and applicable requirements.</p>
        </section>

        <section id="sec-policy-44" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">44. NO GUARANTEE OF COMPLETE SECURITY</h2>
          <p>DigiSaloon takes reasonable measures to protect its systems and information, but no website, application, network, database, or online service can be guaranteed to be completely secure.</p>
          <p>Security risks may arise from:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Cyberattacks</li>
            <li>User error</li>
            <li>Third-party services</li>
            <li>Device compromise</li>
            <li>Software vulnerabilities</li>
            <li>Infrastructure failures</li>
            <li>Other events outside reasonable control</li>
          </ul>
        </section>

        <section id="sec-policy-45" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">45. POLICY CHANGES</h2>
          <p>DigiSaloon may update this Policy to reflect:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Security improvements</li>
            <li>New technology</li>
            <li>New platform features</li>
            <li>Changes in infrastructure</li>
            <li>New security risks</li>
            <li>Changes in third-party services</li>
            <li>Legal or regulatory requirements</li>
          </ul>
          <p className="pt-2">The updated version may be published through appropriate DigiSaloon channels.</p>
        </section>

        <section id="sec-policy-46" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">46. RELATED POLICIES</h2>
          <p>This Policy should be read together with:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Privacy Policy</li>
            <li>Data Protection, Retention & Deletion Policy</li>
            <li>Admin Panel Access & Internal Security Policy</li>
            <li>Partner Terms & Conditions</li>
            <li>Partner Onboarding & Verification Policy</li>
            <li>Partner Payout & Settlement Terms</li>
            <li>Booking & Appointment Policy</li>
            <li>Payment & Settlement Policy</li>
            <li>Cancellation & Refund Policy</li>
            <li>User Account & Account Deletion Policy</li>
            <li>Content Policy & Community Guidelines</li>
            <li>Grievance Redressal & Contact Policy</li>
          </ul>
        </section>

        <section id="sec-policy-47" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">47. CONTACT INFORMATION</h2>
          <p>For security concerns or suspected security incidents:</p>
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
            <p className="text-red-300 text-xs pt-2 border-t border-slate-800">
              When reporting a security issue, do not send passwords, OTPs, API keys, or other confidential authentication credentials.
            </p>
          </div>
          <p className="pt-2 text-xs text-slate-400 font-medium">© DigiSaloon. All Rights Reserved.</p>
        </section>

      </div>
    </div>
  );
};