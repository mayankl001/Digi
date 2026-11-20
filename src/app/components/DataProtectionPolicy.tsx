import React from "react";

export function DataProtectionPolicy() {
  return (
    <div className="max-w-4xl mx-auto text-slate-700 space-y-8 pb-16">
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6">
        <span className="inline-block px-3 py-1 bg-red-50 text-red-700 text-xs font-bold uppercase tracking-wider rounded-full mb-3">
          Data Protection & Retention Policy
        </span>
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3">
          DATA PROTECTION, RETENTION & DELETION POLICY
        </h1>
        <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-500">
          <p>Effective Date: 20 November 2026</p>
          <span>•</span>
          <p>Last Updated: 20 November 2026</p>
        </div>
        <div className="mt-4 space-y-3 text-sm md:text-base leading-relaxed text-slate-600">
          <p>
            This Data Protection, Retention & Deletion Policy (“Policy”) explains how DigiSaloon collects, protects, uses, retains, and deletes information relating to customers, salon Partners, Staff, administrators, and visitors who interact with DigiSaloon&apos;s website, applications, Partner systems, Manage Web, Admin Panel, and related services.
          </p>
          <p>
            This Policy should be read together with the DigiSaloon Privacy Policy, Terms & Conditions, Security & Incident Response Policy, User Account & Account Deletion Policy, and other applicable policies.
          </p>
        </div>
      </div>

      {/* Section 1 */}
      <section id="data-policy-1" className="scroll-mt-10 space-y-3">
        <h2 className="text-xl font-bold text-slate-900">1. Purpose</h2>
        <p className="text-sm leading-relaxed">
          The purpose of this Policy is to establish principles and procedures relating to:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-1.5 text-slate-600">
          <li>Data collection</li>
          <li>Data protection</li>
          <li>Data usage</li>
          <li>Data storage</li>
          <li>Data retention</li>
          <li>Data deletion</li>
          <li>Account deletion</li>
          <li>Backup handling</li>
          <li>Access controls</li>
          <li>Security incidents</li>
          <li>Legal and regulatory requirements</li>
        </ul>
      </section>

      {/* Section 2 */}
      <section id="data-policy-2" className="scroll-mt-10 space-y-3">
        <h2 className="text-xl font-bold text-slate-900">2. Scope</h2>
        <p className="text-sm leading-relaxed">
          This Policy applies to information processed through DigiSaloon systems, including:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-1.5 text-slate-600">
          <li>DigiSaloon Website</li>
          <li>Customer App</li>
          <li>Salon Partner App</li>
          <li>Partner Web App</li>
          <li>Manage Web</li>
          <li>Admin Panel</li>
          <li>Booking systems</li>
          <li>Payment and settlement systems</li>
          <li>Customer support systems</li>
          <li>Review and rating systems</li>
          <li>Notification systems</li>
          <li>Other authorized DigiSaloon services</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section id="data-policy-3" className="scroll-mt-10 space-y-4">
        <h2 className="text-xl font-bold text-slate-900">3. Types of Information</h2>
        <p className="text-sm leading-relaxed">
          Depending on the service used, DigiSaloon may process the following categories of information.
        </p>

        <div className="space-y-2">
          <h3 className="text-base font-bold text-slate-800">3.1 Customer Information</h3>
          <ul className="list-disc pl-5 text-sm space-y-1.5 text-slate-600">
            <li>Name</li>
            <li>Email address</li>
            <li>Mobile number</li>
            <li>Account information</li>
            <li>Location information where permission is provided</li>
            <li>Booking and appointment information</li>
            <li>Service selections</li>
            <li>Reviews and ratings</li>
            <li>Customer support communications</li>
            <li>Transaction-related information</li>
            <li>Notification preferences</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-bold text-slate-800">3.2 Partner Information</h3>
          <ul className="list-disc pl-5 text-sm space-y-1.5 text-slate-600">
            <li>Salon name</li>
            <li>Business information</li>
            <li>Owner/contact information</li>
            <li>Address</li>
            <li>Service information</li>
            <li>Operating information</li>
            <li>Bank/settlement information</li>
            <li>GST-related information where provided</li>
            <li>Booking information</li>
            <li>Partner account information</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-bold text-slate-800">3.3 Staff Information</h3>
          <p className="text-sm leading-relaxed text-slate-600">
            Where applicable, DigiSaloon may process information relating to authorized salon Staff who use Partner or Manage Web systems.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-bold text-slate-800">3.4 Technical Information</h3>
          <p className="text-sm leading-relaxed">DigiSaloon may also process information such as:</p>
          <ul className="list-disc pl-5 text-sm space-y-1.5 text-slate-600">
            <li>IP address</li>
            <li>Device information</li>
            <li>Browser information</li>
            <li>Application information</li>
            <li>Login activity</li>
            <li>Security logs</li>
            <li>Error information</li>
            <li>Usage information</li>
          </ul>
          <p className="text-sm leading-relaxed pt-1">
            The exact information collected depends on the feature being used.
          </p>
        </div>
      </section>

      {/* Section 4 */}
      <section id="data-policy-4" className="scroll-mt-10 space-y-3">
        <h2 className="text-xl font-bold text-slate-900">4. Purposes of Data Processing</h2>
        <p className="text-sm leading-relaxed">
          DigiSaloon may process information for legitimate platform and business purposes, including:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-1.5 text-slate-600">
          <li>Creating and managing accounts</li>
          <li>Providing booking and appointment services</li>
          <li>Connecting customers with salon Partners</li>
          <li>Processing online booking payments</li>
          <li>Managing refunds and settlements</li>
          <li>Providing customer support</li>
          <li>Sending relevant booking notifications</li>
          <li>Managing reviews and ratings</li>
          <li>Preventing fraud and unauthorized activity</li>
          <li>Maintaining platform security</li>
          <li>Improving system performance</li>
          <li>Maintaining operational records</li>
          <li>Meeting applicable legal requirements</li>
        </ul>
        <p className="text-sm leading-relaxed">
          Information should be used for purposes consistent with the applicable service, privacy notices, and legal requirements.
        </p>
      </section>

      {/* Section 5 */}
      <section id="data-policy-5" className="scroll-mt-10 space-y-3">
        <h2 className="text-xl font-bold text-slate-900">5. Data Minimization</h2>
        <p className="text-sm leading-relaxed">
          DigiSaloon aims to collect and process information reasonably necessary for the relevant platform feature or business purpose.
        </p>
        <p className="text-sm leading-relaxed">
          Users and Partners should provide only accurate information required for registration, bookings, service delivery, verification, payments, or other authorized activities.
        </p>
        <p className="text-sm leading-relaxed">
          DigiSaloon should avoid retaining personal information longer than reasonably necessary for its intended purpose, unless a longer retention period is required or permitted under applicable law.
        </p>
      </section>

      {/* Section 6 */}
      <section id="data-policy-6" className="scroll-mt-10 space-y-3">
        <h2 className="text-xl font-bold text-slate-900">6. Data Accuracy</h2>
        <p className="text-sm leading-relaxed">
          Users and Partners are responsible for keeping their account and business information accurate and updated.
        </p>
        <p className="text-sm leading-relaxed">
          Where appropriate, DigiSaloon may allow users or Partners to correct inaccurate information or may request clarification when information appears incomplete, inconsistent, or misleading.
        </p>
      </section>

      {/* Section 7 */}
      <section id="data-policy-7" className="scroll-mt-10 space-y-3">
        <h2 className="text-xl font-bold text-slate-900">7. Data Protection</h2>
        <p className="text-sm leading-relaxed">
          DigiSaloon aims to apply reasonable technical, organizational, and administrative safeguards to protect information against unauthorized access, disclosure, alteration, loss, or misuse. Safeguards may include:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-1.5 text-slate-600">
          <li>Access restrictions</li>
          <li>Authentication controls</li>
          <li>Appropriate permission management</li>
          <li>Security monitoring</li>
          <li>System maintenance</li>
          <li>Secure handling of credentials</li>
          <li>Incident investigation</li>
          <li>Staff awareness and operational procedures</li>
        </ul>
        <p className="text-sm leading-relaxed">
          No electronic system or transmission method can be guaranteed to be completely secure.
        </p>
      </section>

      {/* Section 8 */}
      <section id="data-policy-8" className="scroll-mt-10 space-y-3">
        <h2 className="text-xl font-bold text-slate-900">8. Access Control</h2>
        <p className="text-sm leading-relaxed">
          Access to personal, financial, operational, and account information should be limited to authorized individuals who require it for legitimate duties.
        </p>
        <p className="text-sm leading-relaxed">
          DigiSaloon may apply role-based permissions and other access controls to its administrative and operational systems.
        </p>
        <p className="text-sm leading-relaxed">
          Users, Partners, Staff, and administrators must not access information beyond their authorized responsibilities.
        </p>
      </section>

      {/* Section 9 */}
      <section id="data-policy-9" className="scroll-mt-10 space-y-3">
        <h2 className="text-xl font-bold text-slate-900">9. Confidentiality</h2>
        <p className="text-sm leading-relaxed">
          Individuals who receive access to DigiSaloon information through their role must handle it responsibly and confidentially. They must not disclose, copy, sell, misuse, or otherwise share personal information without appropriate authorization or a valid legal basis.
        </p>
      </section>

      {/* Section 10 */}
      <section id="data-policy-10" className="scroll-mt-10 space-y-3">
        <h2 className="text-xl font-bold text-slate-900">10. Data Sharing With Salon Partners</h2>
        <p className="text-sm leading-relaxed">
          DigiSaloon may share relevant booking information with the salon Partner responsible for fulfilling a customer&apos;s appointment. The information shared should be limited to what is reasonably necessary for booking administration and service delivery. Salon Partners are responsible for handling customer information securely and using it only for authorized purposes.
        </p>
      </section>

      {/* Section 11 */}
      <section id="data-policy-11" className="scroll-mt-10 space-y-3">
        <h2 className="text-xl font-bold text-slate-900">11. Data Storage</h2>
        <p className="text-sm leading-relaxed">
          DigiSaloon may store information using its own systems and authorized third-party service providers, depending on the platform architecture and services used. Storage locations, technical arrangements, and processing methods may vary between systems. DigiSaloon aims to apply appropriate safeguards to stored information and restrict access to authorized purposes.
        </p>
      </section>

      {/* Section 12 */}
      <section id="data-policy-12" className="scroll-mt-10 space-y-3">
        <h2 className="text-xl font-bold text-slate-900">12. Data Retention Principles</h2>
        <p className="text-sm leading-relaxed">
          DigiSaloon may retain information for as long as reasonably necessary for the purpose for which it was collected or processed. Retention periods may depend on:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-1.5 text-slate-600">
          <li>The type of information</li>
          <li>The purpose of processing</li>
          <li>The status of an account</li>
          <li>Active or upcoming bookings</li>
          <li>Pending refunds or settlements</li>
          <li>Legal and accounting requirements</li>
          <li>Security and fraud-prevention needs</li>
          <li>Disputes or legal proceedings</li>
          <li>Technical and backup requirements</li>
        </ul>
        <p className="text-sm leading-relaxed">
          Where information is no longer required and no valid retention reason applies, it may be deleted or anonymized using appropriate procedures.
        </p>
      </section>

      {/* Section 13 */}
      <section id="data-policy-13" className="scroll-mt-10 space-y-4">
        <h2 className="text-xl font-bold text-slate-900">13. User Account Deletion</h2>
        <p className="text-sm leading-relaxed">
          Users can request permanent deletion of their DigiSaloon account through the official account deletion page:
        </p>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Official Account Deletion URL</p>
          <a
            href="https://app.digisaloon.in/delete-account"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-red-700 hover:underline break-all"
          >
            https://app.digisaloon.in/delete-account
          </a>
        </div>
        <p className="text-sm leading-relaxed">
          Users may also access account deletion through the relevant in-app option where available.
        </p>

        <div className="space-y-2 pt-2">
          <h3 className="text-base font-bold text-slate-800">13.1 Account Deletion Steps</h3>
          <p className="text-sm leading-relaxed">Users should follow these steps:</p>
          <ol className="list-decimal pl-5 text-sm space-y-1.5 text-slate-600">
            <li>Open the official DigiSaloon account deletion page.</li>
            <li>Log in using the registered mobile number or Google account.</li>
            <li>Navigate to Profile / Settings, or continue directly on the deletion page after login.</li>
            <li>Select Delete Account and choose a reason for deletion.</li>
            <li>Verify identity through OTP.</li>
            <li>Review and confirm the permanent deletion request.</li>
          </ol>
          <p className="text-sm leading-relaxed">Users should follow the instructions displayed on the page to complete the process.</p>
        </div>

        <div className="space-y-2 pt-2">
          <h3 className="text-base font-bold text-slate-800">13.2 Information Deleted After Account Deletion</h3>
          <p className="text-sm leading-relaxed">
            Once a valid request has been verified and processed, the account and associated profile information, including the user&apos;s name, mobile number, email address, and login credentials, will be permanently deleted in accordance with the account deletion process.
          </p>
          <p className="text-sm leading-relaxed">
            The deleted account cannot be recovered through the normal account recovery process. The exact handling of information across connected systems may depend on technical requirements, applicable retention obligations, and the relevant service providers.
          </p>
        </div>

        <div className="space-y-2 pt-2">
          <h3 className="text-base font-bold text-slate-800">13.3 Historical Records</h3>
          <p className="text-sm leading-relaxed">
            Certain historical booking and transaction records may be anonymized by removing personal identifiers, such as the user&apos;s name and phone number. Some records may be retained where necessary for legal, tax, accounting, payment, fraud-prevention, security, or dispute-resolution purposes. Retained information should be limited to what is reasonably necessary for the relevant purpose.
          </p>
        </div>

        <div className="space-y-2 pt-2">
          <h3 className="text-base font-bold text-slate-800">13.4 Account Deletion Assistance</h3>
          <p className="text-sm leading-relaxed">
            If a user cannot access the deletion page or complete the process, they may contact:{" "}
            <a href="mailto:support@digisaloon.in" className="text-red-700 font-semibold hover:underline">
              support@digisaloon.in
            </a>
            . Reasonable identity verification may be required to prevent unauthorized deletion requests.
          </p>
        </div>
      </section>

      {/* Section 14 */}
      <section id="data-policy-14" className="scroll-mt-10 space-y-3">
        <h2 className="text-xl font-bold text-slate-900">14. Data Retention After Account Deletion</h2>
        <p className="text-sm leading-relaxed">
          Account deletion does not necessarily mean that every record associated with a user is immediately erased from all systems. DigiSaloon may retain certain information where reasonably necessary for:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-1.5 text-slate-600">
          <li>Compliance with applicable law</li>
          <li>Tax and accounting requirements</li>
          <li>Payment and transaction records</li>
          <li>Fraud prevention</li>
          <li>Security and abuse prevention</li>
          <li>Dispute resolution</li>
          <li>Enforcement of agreements</li>
          <li>Legal claims or proceedings</li>
          <li>Maintaining required business records</li>
        </ul>
        <p className="text-sm leading-relaxed">
          Where retention is required or otherwise permitted, the information will be handled in accordance with the Privacy Policy and applicable law.
        </p>
      </section>

      {/* Section 15 */}
      <section id="data-policy-15" className="scroll-mt-10 space-y-3">
        <h2 className="text-xl font-bold text-slate-900">15. Payment and Transaction Records</h2>
        <p className="text-sm leading-relaxed">
          Payment-related records may be retained after account deletion where necessary for legitimate business, accounting, payment, security, dispute, or legal purposes. This may include:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-1.5 text-slate-600">
          <li>Booking payments</li>
          <li>Refunds</li>
          <li>Payment status</li>
          <li>Transaction references</li>
          <li>Settlement records</li>
          <li>Payment gateway transactions</li>
        </ul>
        <p className="text-sm leading-relaxed">
          DigiSaloon may also rely on records maintained by authorized payment service providers for applicable transactions.
        </p>
      </section>

      {/* Section 16 */}
      <section id="data-policy-16" className="scroll-mt-10 space-y-3">
        <h2 className="text-xl font-bold text-slate-900">16. Booking History</h2>
        <p className="text-sm leading-relaxed">
          Booking and transaction records may be retained where necessary for legal, accounting, security, dispute-resolution, or other legitimate purposes. Deleting an account does not guarantee immediate deletion of every historical booking record from all systems. Where appropriate, personal identifiers may be removed or anonymized from retained records.
        </p>
      </section>

      {/* Section 17 */}
      <section id="data-policy-17" className="scroll-mt-10 space-y-3">
        <h2 className="text-xl font-bold text-slate-900">17. Reviews and Ratings</h2>
        <p className="text-sm leading-relaxed">
          Where a user has submitted reviews or ratings, account deletion may affect the way those contributions are displayed. Depending on the applicable system, legal requirements, and relevant policies, DigiSaloon may:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-1.5 text-slate-600">
          <li>Delete associated content</li>
          <li>Anonymize associated content</li>
          <li>Retain content without directly displaying the deleted account&apos;s personal information</li>
        </ul>
        <p className="text-sm leading-relaxed">
          This will be handled in accordance with the Review & Rating Policy and Privacy Policy.
        </p>
      </section>

      {/* Section 18 */}
      <section id="data-policy-18" className="scroll-mt-10 space-y-3">
        <h2 className="text-xl font-bold text-slate-900">18. Location and Device Information</h2>
        <p className="text-sm leading-relaxed">
          Where location or device permissions are used, DigiSaloon may process relevant information to support applicable features, security, service delivery, or technical functionality. Users can manage device permissions through their device settings where available. Turning off a permission may affect features that depend on that information. The collection and retention of such information remain subject to the Privacy Policy and applicable requirements.
        </p>
      </section>

      {/* Section 19 */}
      <section id="data-policy-19" className="scroll-mt-10 space-y-3">
        <h2 className="text-xl font-bold text-slate-900">19. Notification and Communication Data</h2>
        <p className="text-sm leading-relaxed">
          DigiSaloon may process contact and notification-related information to send booking updates, account-related communications, service notifications, and other permitted messages. After account deletion, normal account-based promotional communications should generally stop where associated with the deleted account. Certain transaction-related, security, refund, legal, or other necessary communications may still be sent where appropriate and permitted.
        </p>
      </section>

      {/* Section 20 */}
      <section id="data-policy-20" className="scroll-mt-10 space-y-3">
        <h2 className="text-xl font-bold text-slate-900">20. Anonymization</h2>
        <p className="text-sm leading-relaxed">
          Where appropriate, DigiSaloon may anonymize information instead of deleting the underlying record. Anonymized information is information processed so that it is no longer reasonably associated with an identifiable individual. Anonymized information may be used for purposes such as:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-1.5 text-slate-600">
          <li>Analytics</li>
          <li>Service improvement</li>
          <li>Reporting</li>
          <li>Business analysis</li>
          <li>Platform development</li>
        </ul>
        <p className="text-sm leading-relaxed">
          DigiSaloon should not describe information as anonymized if it remains reasonably identifiable.
        </p>
      </section>

      {/* Section 21 */}
      <section id="data-policy-21" className="scroll-mt-10 space-y-3">
        <h2 className="text-xl font-bold text-slate-900">21. Backups</h2>
        <p className="text-sm leading-relaxed">
          DigiSaloon systems may maintain backups for security, disaster recovery, and operational continuity. Deleted information may remain temporarily within backup systems until the relevant backup is overwritten or securely removed according to the applicable backup lifecycle. Backups are not ordinarily used to restore information that a user has validly requested to be deleted unless required for system recovery or another legitimate purpose.
        </p>
      </section>

      {/* Section 22 */}
      <section id="data-policy-22" className="scroll-mt-10 space-y-3">
        <h2 className="text-xl font-bold text-slate-900">22. Deletion From Active Systems</h2>
        <p className="text-sm leading-relaxed">
          Where a valid deletion request is approved, DigiSaloon may remove or deactivate applicable information from active production systems. Deletion may not always be instantaneous because certain systems may require:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-1.5 text-slate-600">
          <li>Verification</li>
          <li>Processing time</li>
          <li>Technical synchronization</li>
          <li>Payment reconciliation</li>
          <li>Backup lifecycle processing</li>
          <li>Investigation of outstanding matters</li>
        </ul>
        <p className="text-sm leading-relaxed">
          DigiSaloon aims to handle valid deletion requests within a reasonable period, subject to applicable legal and operational requirements.
        </p>
      </section>

      {/* Section 23 */}
      <section id="data-policy-23" className="scroll-mt-10 space-y-3">
        <h2 className="text-xl font-bold text-slate-900">23. Third-Party Service Providers</h2>
        <p className="text-sm leading-relaxed">
          DigiSaloon may use third-party service providers for functions such as:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-1.5 text-slate-600">
          <li>Payment processing</li>
          <li>Cloud hosting</li>
          <li>Database services</li>
          <li>Authentication</li>
          <li>Email</li>
          <li>Notifications</li>
          <li>Analytics</li>
          <li>Security</li>
          <li>Customer support</li>
        </ul>
        <p className="text-sm leading-relaxed">
          Where applicable, relevant information may be processed by such providers according to their services and applicable agreements. DigiSaloon may request appropriate deletion or retention handling from service providers where reasonably required and technically available.
        </p>
      </section>

      {/* Section 24 */}
      <section id="data-policy-24" className="scroll-mt-10 space-y-3">
        <h2 className="text-xl font-bold text-slate-900">24. Payment Provider Records</h2>
        <p className="text-sm leading-relaxed">
          Payment providers may independently retain transaction records according to their own legal, regulatory, accounting, security, and operational requirements. Deleting a DigiSaloon account does not necessarily cause immediate deletion of records maintained independently by a payment provider. Users may need to contact the relevant provider regarding information maintained independently by that provider.
        </p>
      </section>

      {/* Section 25 */}
      <section id="data-policy-25" className="scroll-mt-10 space-y-3">
        <h2 className="text-xl font-bold text-slate-900">25. Partner Account Deletion</h2>
        <p className="text-sm leading-relaxed">
          Salon Partners may request closure or deletion of their DigiSaloon Partner account through the applicable support or account-management process. Before deletion or closure, DigiSaloon may need to address:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-1.5 text-slate-600">
          <li>Pending bookings</li>
          <li>Pending refunds</li>
          <li>Outstanding settlements</li>
          <li>Payment disputes</li>
          <li>Chargebacks</li>
          <li>Legal or accounting records</li>
          <li>Customer complaints</li>
          <li>Other unresolved obligations</li>
        </ul>
        <p className="text-sm leading-relaxed">
          Partner account closure does not automatically require immediate deletion of all historical business or transaction records. Partner account deletion is separate from the customer account deletion process described in Section 13.
        </p>
      </section>

      {/* Section 26 */}
      <section id="data-policy-26" className="scroll-mt-10 space-y-3">
        <h2 className="text-xl font-bold text-slate-900">26. Staff Access Deletion</h2>
        <p className="text-sm leading-relaxed">
          When a Staff member no longer works with or is no longer authorized by a Partner, the Partner should remove their DigiSaloon access promptly where the system permits. DigiSaloon may also disable Staff access where appropriate. Historical operational records may continue to be retained where necessary for security, auditing, dispute resolution, or other legitimate purposes.
        </p>
      </section>

      {/* Section 27 */}
      <section id="data-policy-27" className="scroll-mt-10 space-y-3">
        <h2 className="text-xl font-bold text-slate-900">27. Data Retention for Disputes</h2>
        <p className="text-sm leading-relaxed">
          Where there is an ongoing:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-1.5 text-slate-600">
          <li>Customer dispute</li>
          <li>Partner dispute</li>
          <li>Payment dispute</li>
          <li>Refund issue</li>
          <li>Chargeback</li>
          <li>Fraud investigation</li>
          <li>Security investigation</li>
          <li>Legal matter</li>
        </ul>
        <p className="text-sm leading-relaxed">
          DigiSaloon may retain relevant information until the matter is reasonably resolved or the information is no longer required.
        </p>
      </section>

      {/* Section 28 */}
      <section id="data-policy-28" className="scroll-mt-10 space-y-3">
        <h2 className="text-xl font-bold text-slate-900">28. Security Logs</h2>
        <p className="text-sm leading-relaxed">
          Security and technical logs may be retained for a reasonable period to help DigiSaloon:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-1.5 text-slate-600">
          <li>Detect unauthorized access</li>
          <li>Investigate incidents</li>
          <li>Prevent fraud</li>
          <li>Troubleshoot systems</li>
          <li>Maintain platform security</li>
          <li>Meet applicable obligations</li>
        </ul>
        <p className="text-sm leading-relaxed">
          The retention period may vary depending on the type and purpose of the log.
        </p>
      </section>

      {/* Section 29 */}
      <section id="data-policy-29" className="scroll-mt-10 space-y-3">
        <h2 className="text-xl font-bold text-slate-900">29. Administrative Records</h2>
        <p className="text-sm leading-relaxed">
          Administrative records may be retained to establish an audit trail for important actions such as:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-1.5 text-slate-600">
          <li>Account changes</li>
          <li>Partner verification</li>
          <li>Booking adjustments</li>
          <li>Refund processing</li>
          <li>Settlement adjustments</li>
          <li>Security actions</li>
          <li>Content moderation</li>
          <li>Access management</li>
        </ul>
        <p className="text-sm leading-relaxed">
          Access to such records should be restricted to authorized purposes.
        </p>
      </section>

      {/* Section 30 */}
      <section id="data-policy-30" className="scroll-mt-10 space-y-3">
        <h2 className="text-xl font-bold text-slate-900">30. Data Deletion Methods</h2>
        <p className="text-sm leading-relaxed">
          Where appropriate, DigiSaloon may delete, anonymize, deactivate, or otherwise securely dispose of information using reasonable technical procedures. The exact deletion method may depend on:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-1.5 text-slate-600">
          <li>Type of information</li>
          <li>Storage system</li>
          <li>Backup architecture</li>
          <li>Technical limitations</li>
          <li>Legal requirements</li>
          <li>Security requirements</li>
        </ul>
      </section>

      {/* Section 31 */}
      <section id="data-policy-31" className="scroll-mt-10 space-y-3">
        <h2 className="text-xl font-bold text-slate-900">31. User Deletion Requests</h2>
        <p className="text-sm leading-relaxed">
          A deletion request should contain sufficient information for DigiSaloon to identify the relevant account and verify the requester. The primary account deletion route is:{" "}
          <a
            href="https://app.digisaloon.in/delete-account"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-700 font-semibold hover:underline"
          >
            https://app.digisaloon.in/delete-account
          </a>
        </p>
        <p className="text-sm leading-relaxed">
          DigiSaloon may request additional information where reasonably necessary to protect account security. Users should not send passwords or OTPs through email or unofficial communication channels.
        </p>
      </section>

      {/* Section 32 */}
      <section id="data-policy-32" className="scroll-mt-10 space-y-3">
        <h2 className="text-xl font-bold text-slate-900">32. Deletion Request Process</h2>
        <p className="text-sm leading-relaxed">
          A deletion request may generally involve:
        </p>
        <ol className="list-decimal pl-5 text-sm space-y-1.5 text-slate-600">
          <li>Request submission through the official account deletion page.</li>
          <li>Account login and identity verification.</li>
          <li>Review of active bookings and outstanding matters where relevant.</li>
          <li>Identification of information subject to retention.</li>
          <li>Deletion of eligible account and profile information.</li>
          <li>Anonymization or retention of records where required or otherwise permitted.</li>
          <li>Completion of the applicable account deletion process.</li>
        </ol>
        <p className="text-sm leading-relaxed">
          The actual processing time may vary depending on the circumstances and technical requirements.
        </p>
      </section>

      {/* Section 33 */}
      <section id="data-policy-33" className="scroll-mt-10 space-y-3">
        <h2 className="text-xl font-bold text-slate-900">33. When Deletion May Be Delayed</h2>
        <p className="text-sm leading-relaxed">
          Deletion or removal of certain records may be delayed where necessary to:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-1.5 text-slate-600">
          <li>Complete an active booking</li>
          <li>Process a refund</li>
          <li>Complete settlement</li>
          <li>Resolve a dispute</li>
          <li>Investigate fraud</li>
          <li>Investigate a security incident</li>
          <li>Meet legal or regulatory requirements</li>
          <li>Complete accounting or financial reconciliation</li>
        </ul>
        <p className="text-sm leading-relaxed">
          These circumstances do not automatically mean that all account and profile information will remain active. DigiSaloon should distinguish information that can be deleted from records that must or may reasonably be retained.
        </p>
      </section>

      {/* Section 34 */}
      <section id="data-policy-34" className="scroll-mt-10 space-y-3">
        <h2 className="text-xl font-bold text-slate-900">34. Information That Cannot Be Immediately Deleted</h2>
        <p className="text-sm leading-relaxed">
          Some information may need to remain available for a defined period because of:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-1.5 text-slate-600">
          <li>Legal requirements</li>
          <li>Accounting requirements</li>
          <li>Tax requirements</li>
          <li>Payment-provider requirements</li>
          <li>Fraud prevention</li>
          <li>Security</li>
          <li>Dispute resolution</li>
          <li>Legal claims</li>
          <li>Regulatory requests</li>
        </ul>
        <p className="text-sm leading-relaxed">
          Such information should be limited to what is reasonably necessary for the applicable purpose and handled according to relevant privacy and security requirements.
        </p>
      </section>

      {/* Section 35 */}
      <section id="data-policy-35" className="scroll-mt-10 space-y-3">
        <h2 className="text-xl font-bold text-slate-900">35. Data Sharing</h2>
        <p className="text-sm leading-relaxed">
          DigiSaloon may share information where reasonably necessary with:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-1.5 text-slate-600">
          <li>Payment providers</li>
          <li>Cloud/service providers</li>
          <li>Salon Partners for booking fulfillment</li>
          <li>Authorized Staff where required for appointments</li>
          <li>Security or fraud-prevention providers</li>
          <li>Professional advisers</li>
          <li>Government or law-enforcement authorities where legally required</li>
        </ul>
        <p className="text-sm leading-relaxed">
          Data sharing should be limited to the applicable purpose and handled according to relevant privacy and security requirements.
        </p>
      </section>

      {/* Section 36 */}
      <section id="data-policy-36" className="scroll-mt-10 space-y-3">
        <h2 className="text-xl font-bold text-slate-900">36. Internal Data Access</h2>
        <p className="text-sm leading-relaxed">
          DigiSaloon personnel must access personal information only for authorized purposes. Internal access may be logged, monitored, restricted, or reviewed where appropriate. Unauthorized use or disclosure of personal information is prohibited.
        </p>
      </section>

      {/* Section 37 */}
      <section id="data-policy-37" className="scroll-mt-10 space-y-3">
        <h2 className="text-xl font-bold text-slate-900">37. Data Security Incidents</h2>
        <p className="text-sm leading-relaxed">
          If DigiSaloon becomes aware of a security incident affecting information, it may take appropriate steps, including:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-1.5 text-slate-600">
          <li>Investigating the incident</li>
          <li>Restricting affected access</li>
          <li>Securing systems</li>
          <li>Assessing affected information</li>
          <li>Correcting security weaknesses</li>
          <li>Taking appropriate notification or remediation measures where required</li>
        </ul>
        <p className="text-sm leading-relaxed">
          Any applicable notification will be handled according to relevant legal requirements and the Security & Incident Response Policy.
        </p>
      </section>

      {/* Section 38 */}
      <section id="data-policy-38" className="scroll-mt-10 space-y-3">
        <h2 className="text-xl font-bold text-slate-900">38. User Responsibility</h2>
        <p className="text-sm leading-relaxed">
          Users should protect their own account information by:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-1.5 text-slate-600">
          <li>Using appropriate passwords</li>
          <li>Keeping authentication information confidential</li>
          <li>Avoiding unauthorized account sharing</li>
          <li>Keeping devices reasonably secure</li>
          <li>Reporting suspected unauthorized access</li>
        </ul>
        <p className="text-sm leading-relaxed">
          Users should use only the official DigiSaloon account deletion page when requesting deletion online.
        </p>
      </section>

      {/* Section 39 */}
      <section id="data-policy-39" className="scroll-mt-10 space-y-3">
        <h2 className="text-xl font-bold text-slate-900">39. Children and Age Requirement</h2>
        <p className="text-sm leading-relaxed">
          DigiSaloon services are intended for users aged 18 years and above. DigiSaloon does not intentionally provide its services to individuals below the minimum required age. If DigiSaloon becomes aware that an account was created in violation of the applicable age requirement, appropriate action may be taken, including account restriction or deletion, subject to applicable requirements.
        </p>
      </section>

      {/* Section 40 */}
      <section id="data-policy-40" className="scroll-mt-10 space-y-3">
        <h2 className="text-xl font-bold text-slate-900">40. International or Cross-Border Processing</h2>
        <p className="text-sm leading-relaxed">
          Where DigiSaloon or its service providers process information through infrastructure located outside the user&apos;s location, applicable safeguards and legal requirements may apply. The specific location of data processing may depend on the infrastructure and services used by DigiSaloon and its service providers.
        </p>
      </section>

      {/* Section 41 */}
      <section id="data-policy-41" className="scroll-mt-10 space-y-3">
        <h2 className="text-xl font-bold text-slate-900">41. Policy Relationship</h2>
        <p className="text-sm leading-relaxed">
          This Policy should be read together with:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-1.5 text-slate-600">
          <li>Privacy Policy</li>
          <li>Security & Incident Response Policy</li>
          <li>User Account & Account Deletion Policy</li>
          <li>Terms & Conditions</li>
          <li>Partner Terms & Conditions</li>
          <li>Admin Panel Access & Internal Security Policy</li>
          <li>Payment & Settlement Policy</li>
          <li>Cancellation & Refund Policy</li>
          <li>Booking & Appointment Policy</li>
          <li>Third-Party Services & Payment Provider Policy</li>
          <li>Grievance Redressal & Contact Policy</li>
        </ul>
        <p className="text-sm leading-relaxed">
          Where policies address the same subject, they should be interpreted consistently wherever possible, subject to applicable law.
        </p>
      </section>

      {/* Section 42 */}
      <section id="data-policy-42" className="scroll-mt-10 space-y-3">
        <h2 className="text-xl font-bold text-slate-900">42. Policy Changes</h2>
        <p className="text-sm leading-relaxed">
          DigiSaloon may update this Policy from time to time to reflect:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-1.5 text-slate-600">
          <li>Changes in technology</li>
          <li>Changes in data practices</li>
          <li>New platform features</li>
          <li>Security improvements</li>
          <li>Operational changes</li>
          <li>Changes in legal or regulatory requirements</li>
        </ul>
        <p className="text-sm leading-relaxed">
          The updated version may be published through the DigiSaloon website, applications, or other appropriate communication channels. The Last Updated date should reflect the date on which the policy is actually revised and published.
        </p>
      </section>

      {/* Section 43 - Contact Information */}
      <section id="data-policy-43" className="scroll-mt-10 space-y-3">
        <h2 className="text-xl font-bold text-slate-900">43. Contact Information</h2>
        <p className="text-sm leading-relaxed">
          For questions or requests relating to data protection, retention, account deletion, or privacy, contact:
        </p>

        <div className="bg-slate-900 text-slate-200 p-6 rounded-2xl space-y-3 text-sm shadow-md">
          <p className="font-extrabold text-white text-base tracking-wide">DigiSaloon</p>
          <p className="flex items-center gap-2">
            <span className="font-semibold text-slate-400">Email:</span>{" "}
            <a href="mailto:support@digisaloon.in" className="text-red-400 hover:underline font-medium">
              support@digisaloon.in
            </a>
          </p>
          <p className="flex items-center gap-2">
            <span className="font-semibold text-slate-400">Phone:</span>{" "}
            <a href="tel:8893588201" className="text-red-400 hover:underline font-medium">
              8893588201
            </a>
          </p>
          <p className="flex items-center gap-2">
            <span className="font-semibold text-slate-400">Address:</span> Angara, Ranchi, Jharkhand 835103
          </p>
          <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 pt-1">
            <span className="font-semibold text-slate-400">Official Account Deletion Page:</span>{" "}
            <a
              href="https://app.digisaloon.in/delete-account"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:underline break-all font-medium"
            >
              https://app.digisaloon.in/delete-account
            </a>
          </p>
        </div>

        <p className="text-xs text-slate-500 pt-2 leading-relaxed">
          Users should provide sufficient information to help DigiSaloon identify and process their requests. Users should not send passwords or OTPs through email or unofficial communication channels.
        </p>
      </section>
    </div>
  );
}