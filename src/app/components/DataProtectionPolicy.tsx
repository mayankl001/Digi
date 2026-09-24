import React from "react";

export const DataProtectionPolicy: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Data Protection, Retention & Deletion Policy
          </span>
          <span className="text-xs text-slate-400">Last Updated: 21 September 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          DATA PROTECTION, RETENTION & DELETION POLICY
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          This Data Protection, Retention & Deletion Policy (“Policy”) explains how DigiSaloon collects, protects, uses, retains, and deletes information relating to customers, salon Partners, Staff, administrators, and visitors who interact with DigiSaloon's website, applications, Partner systems, Manage Web, Admin Panel, and related services.
        </p>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          This Policy should be read together with the DigiSaloon Privacy Policy, Terms & Conditions, Security Policy, User Account & Account Deletion Policy, and other applicable policies.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="data-policy-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. PURPOSE</h2>
          <p>The purpose of this Policy is to establish principles and procedures relating to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
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

        <section id="data-policy-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. SCOPE</h2>
          <p>This Policy applies to information processed through DigiSaloon systems, including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
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

        <section id="data-policy-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. TYPES OF INFORMATION</h2>
          <p>Depending on the service used, DigiSaloon may process information such as:</p>
          
          <div className="space-y-2 pt-2">
            <h3 className="font-semibold text-slate-800">Customer Information</h3>
            <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
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

          <div className="space-y-2 pt-2">
            <h3 className="font-semibold text-slate-800">Partner Information</h3>
            <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
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

          <div className="space-y-2 pt-2">
            <h3 className="font-semibold text-slate-800">Staff Information</h3>
            <p>Where applicable, DigiSaloon may process information relating to authorized salon Staff who use Partner or Manage Web systems.</p>
          </div>

          <div className="space-y-2 pt-2">
            <h3 className="font-semibold text-slate-800">Technical Information</h3>
            <p>DigiSaloon may also process information such as:</p>
            <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
              <li>IP address</li>
              <li>Device information</li>
              <li>Browser information</li>
              <li>Application information</li>
              <li>Login activity</li>
              <li>Security logs</li>
              <li>Error information</li>
              <li>Usage information</li>
            </ul>
          </div>
          <p className="pt-2">The exact information collected depends on the feature being used.</p>
        </section>

        <section id="data-policy-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. DATA COLLECTION PRINCIPLES</h2>
          <p>DigiSaloon aims to collect information that is reasonably necessary for legitimate purposes such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Creating accounts</li>
            <li>Providing booking services</li>
            <li>Managing appointments</li>
            <li>Processing payments</li>
            <li>Supporting customers and Partners</li>
            <li>Maintaining platform security</li>
            <li>Preventing fraud</li>
            <li>Improving services</li>
            <li>Meeting applicable legal or regulatory requirements</li>
          </ul>
          <p className="pt-2 font-medium text-slate-800">DigiSaloon does not intend to collect unnecessary information merely for storage.</p>
        </section>

        <section id="data-policy-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. DATA ACCURACY</h2>
          <p>Users and Partners are responsible for providing accurate information where required.</p>
          <p>Users should update information when necessary.</p>
          <p>DigiSaloon may correct, update, or request verification of information where reasonably necessary for:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Account security</li>
            <li>Booking accuracy</li>
            <li>Payment processing</li>
            <li>Partner verification</li>
            <li>Customer support</li>
            <li>Compliance</li>
          </ul>
        </section>

        <section id="data-policy-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. DATA USE</h2>
          <p>Information may be used for purposes including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Account management</li>
            <li>Booking and appointment processing</li>
            <li>Customer and Partner support</li>
            <li>Payment processing</li>
            <li>Refund processing</li>
            <li>Settlement processing</li>
            <li>Service communication</li>
            <li>Security monitoring</li>
            <li>Fraud prevention</li>
            <li>Reviews and ratings</li>
            <li>Platform administration</li>
            <li>Technical troubleshooting</li>
            <li>Legal and compliance requirements</li>
          </ul>
          <p className="pt-2">DigiSaloon will handle information in accordance with its applicable policies and legal requirements.</p>
        </section>

        <section id="data-policy-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. DATA PROTECTION</h2>
          <p>DigiSaloon may use reasonable technical and organizational safeguards to protect information against:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Unauthorized access</li>
            <li>Unauthorized disclosure</li>
            <li>Loss</li>
            <li>Misuse</li>
            <li>Alteration</li>
            <li>Destruction</li>
            <li>Security incidents</li>
          </ul>
          <p className="pt-2">Security measures may include appropriate access controls, authentication, system monitoring, secure communication, administrative controls, and other safeguards appropriate to the systems involved.</p>
        </section>

        <section id="data-policy-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. ACCESS CONTROL</h2>
          <p>Access to personal and business information is restricted according to operational requirements.</p>
          <p>For internal systems, DigiSaloon may use role-based access controls so that personnel receive access appropriate to their responsibilities.</p>
          <p>Administrative access is governed by the Admin Panel Access & Internal Security Policy.</p>
        </section>

        <section id="data-policy-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. CUSTOMER DATA ACCESS</h2>
          <p>DigiSaloon personnel should access customer information only when reasonably necessary for authorized purposes such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Booking support</li>
            <li>Account support</li>
            <li>Refund investigation</li>
            <li>Payment investigation</li>
            <li>Security</li>
            <li>Fraud prevention</li>
            <li>Legal or compliance purposes</li>
          </ul>
          <p className="pt-2 font-medium text-slate-800">Unauthorized access or use of customer information is prohibited.</p>
        </section>

        <section id="data-policy-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. PARTNER DATA ACCESS</h2>
          <p>Partner information may be accessed by authorized DigiSaloon personnel for purposes including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Partner onboarding</li>
            <li>Verification</li>
            <li>Booking management</li>
            <li>Settlement</li>
            <li>Customer support</li>
            <li>Account management</li>
            <li>Security</li>
            <li>Compliance</li>
          </ul>
          <p className="pt-2 font-medium text-slate-800">Partner information must not be used for unrelated personal purposes.</p>
        </section>

        <section id="data-policy-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. PAYMENT INFORMATION</h2>
          <p>Payment transactions may be processed through authorized third-party payment providers such as Razorpay.</p>
          <p>DigiSaloon may retain transaction-related information necessary for:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Payment reconciliation</li>
            <li>Booking records</li>
            <li>Refunds</li>
            <li>Settlement</li>
            <li>Dispute handling</li>
            <li>Accounting</li>
            <li>Security</li>
            <li>Legal or regulatory requirements</li>
          </ul>
          <p className="pt-2">DigiSaloon does not need to retain payment information beyond what is reasonably necessary for these purposes.</p>
        </section>

        <section id="data-policy-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. LOCATION INFORMATION</h2>
          <p>Where a user grants location permission, DigiSaloon may process location information for features such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Finding nearby salons</li>
            <li>Improving salon discovery</li>
            <li>Providing location-relevant services</li>
          </ul>
          <p className="pt-2">Location permissions can generally be controlled through the user's device settings.</p>
          <p>Location information is handled according to the Privacy Policy and applicable permissions.</p>
        </section>

        <section id="data-policy-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. REVIEWS AND RATINGS</h2>
          <p>Reviews and ratings submitted through DigiSaloon may be retained as part of the platform's records.</p>
          <p>They may remain associated with the relevant booking or service history where necessary for:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Review integrity</li>
            <li>Dispute resolution</li>
            <li>Platform moderation</li>
            <li>Fraud prevention</li>
            <li>Legal compliance</li>
          </ul>
          <p className="pt-2 font-medium text-slate-800">Deletion of a user account does not necessarily mean that every historical record can be immediately removed from all systems.</p>
        </section>

        <section id="data-policy-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. BOOKING RECORDS</h2>
          <p>Booking information may be retained for purposes such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Appointment history</li>
            <li>Customer support</li>
            <li>Partner operations</li>
            <li>Payment reconciliation</li>
            <li>Refund processing</li>
            <li>Dispute resolution</li>
            <li>Fraud prevention</li>
            <li>Accounting</li>
            <li>Legal or regulatory requirements</li>
          </ul>
        </section>

        <section id="data-policy-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. RETENTION PERIODS</h2>
          <p>DigiSaloon does not necessarily retain every category of information for the same period.</p>
          <p>Retention may depend on:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>The purpose for which information was collected</li>
            <li>Whether an account remains active</li>
            <li>Booking history</li>
            <li>Payment and settlement requirements</li>
            <li>Legal or regulatory obligations</li>
            <li>Dispute or investigation status</li>
            <li>Security requirements</li>
            <li>Accounting requirements</li>
            <li>Backup and system limitations</li>
          </ul>
          <p className="pt-2">Where information is no longer reasonably required and there is no continuing legal, security, dispute, or operational reason to retain it, DigiSaloon may delete or anonymize it.</p>
        </section>

        <section id="data-policy-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. ACCOUNT INFORMATION</h2>
          <p>While an account remains active, DigiSaloon may retain information required to operate the account and provide services.</p>
          <p>If a user requests account deletion, DigiSaloon may begin the applicable deletion process subject to verification and outstanding obligations.</p>
        </section>

        <section id="data-policy-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. ACCOUNT DELETION</h2>
          <p>Users may request deletion of their DigiSaloon account through the applicable account-deletion process or by contacting DigiSaloon support.</p>
          <p>Deletion requests may require reasonable verification to prevent unauthorized deletion of another person's account.</p>
        </section>

        <section id="data-policy-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. EFFECT OF ACCOUNT DELETION</h2>
          <p>Account deletion may result in removal or deactivation of information associated with the user's account where reasonably possible.</p>
          <p>Depending on the circumstances, deletion may affect:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Account access</li>
            <li>Booking history visibility</li>
            <li>Saved information</li>
            <li>Preferences</li>
            <li>Reviews or ratings</li>
            <li>Promotional benefits</li>
            <li>Other account features</li>
          </ul>
          <p className="pt-2">Certain information may be retained where necessary for legitimate purposes described in this Policy.</p>
        </section>

        <section id="data-policy-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. INFORMATION THAT MAY BE RETAINED</h2>
          <p>Even after account deletion, DigiSaloon may retain certain information where reasonably necessary for:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Legal compliance</li>
            <li>Tax or accounting records</li>
            <li>Payment reconciliation</li>
            <li>Refund processing</li>
            <li>Fraud prevention</li>
            <li>Security investigations</li>
            <li>Dispute resolution</li>
            <li>Enforcement of agreements</li>
            <li>Protection of legal rights</li>
            <li>Regulatory requirements</li>
          </ul>
          <p className="pt-2">Retained information will continue to be handled according to applicable privacy and security requirements.</p>
        </section>

        <section id="data-policy-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">20. ANONYMIZATION</h2>
          <p>Where appropriate, DigiSaloon may anonymize information instead of deleting it.</p>
          <p>Anonymized information is information that is processed so that it is no longer reasonably associated with an identifiable individual.</p>
          <p>Anonymized information may be used for purposes such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Analytics</li>
            <li>Service improvement</li>
            <li>Reporting</li>
            <li>Business analysis</li>
            <li>Platform development</li>
          </ul>
        </section>

        <section id="data-policy-21" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">21. BACKUPS</h2>
          <p>DigiSaloon systems may maintain backups for security, disaster recovery, and operational continuity.</p>
          <p>Deleted information may remain temporarily within backup systems until the relevant backup is overwritten or securely removed according to the applicable backup lifecycle.</p>
          <p>Backups are not ordinarily used to restore information that a user has validly requested to be deleted unless required for system recovery or another legitimate purpose.</p>
        </section>

        <section id="data-policy-22" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">22. DELETION FROM ACTIVE SYSTEMS</h2>
          <p>Where a valid deletion request is approved, DigiSaloon may remove or deactivate applicable information from active production systems.</p>
          <p>Deletion may not always be instantaneous because certain systems may require:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Verification</li>
            <li>Processing time</li>
            <li>Technical synchronization</li>
            <li>Payment reconciliation</li>
            <li>Backup lifecycle processing</li>
            <li>Investigation of outstanding matters</li>
          </ul>
        </section>

        <section id="data-policy-23" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">23. THIRD-PARTY SERVICE PROVIDERS</h2>
          <p>DigiSaloon may use third-party service providers for functions such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
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
          <p className="pt-2">Where applicable, relevant information may be processed by such providers according to their services and applicable agreements.</p>
          <p>DigiSaloon may request appropriate deletion or retention handling from service providers where reasonably required and technically available.</p>
        </section>

        <section id="data-policy-24" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">24. PAYMENT PROVIDER RECORDS</h2>
          <p>Payment providers may independently retain transaction records according to their own legal, regulatory, accounting, security, and operational requirements.</p>
          <p>Deleting a DigiSaloon account does not necessarily cause immediate deletion of records maintained independently by a payment provider.</p>
        </section>

        <section id="data-policy-25" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">25. PARTNER ACCOUNT DELETION</h2>
          <p>Salon Partners may request closure or deletion of their DigiSaloon Partner account.</p>
          <p>Before deletion or closure, DigiSaloon may need to address:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Pending bookings</li>
            <li>Pending refunds</li>
            <li>Outstanding settlements</li>
            <li>Payment disputes</li>
            <li>Chargebacks</li>
            <li>Legal or accounting records</li>
            <li>Customer complaints</li>
            <li>Other unresolved obligations</li>
          </ul>
          <p className="pt-2">Partner account closure does not automatically require immediate deletion of all historical business or transaction records.</p>
        </section>

        <section id="data-policy-26" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">26. STAFF ACCESS DELETION</h2>
          <p>When a Staff member no longer works with or is no longer authorized by a Partner, the Partner should remove their DigiSaloon access promptly.</p>
          <p>DigiSaloon may also disable Staff access where appropriate.</p>
          <p>Historical operational records may continue to be retained where necessary for security, auditing, dispute resolution, or other legitimate purposes.</p>
        </section>

        <section id="data-policy-27" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">27. DATA RETENTION FOR DISPUTES</h2>
          <p>Where there is an ongoing:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Customer dispute</li>
            <li>Partner dispute</li>
            <li>Payment dispute</li>
            <li>Refund issue</li>
            <li>Chargeback</li>
            <li>Fraud investigation</li>
            <li>Security investigation</li>
            <li>Legal matter</li>
          </ul>
          <p className="pt-2">DigiSaloon may retain relevant information until the matter is reasonably resolved or the information is no longer required.</p>
        </section>

        <section id="data-policy-28" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">28. SECURITY LOGS</h2>
          <p>Security and technical logs may be retained for a reasonable period to help DigiSaloon:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Detect unauthorized access</li>
            <li>Investigate incidents</li>
            <li>Prevent fraud</li>
            <li>Troubleshoot systems</li>
            <li>Maintain platform security</li>
            <li>Meet applicable obligations</li>
          </ul>
          <p className="pt-2">The retention period may vary depending on the type and purpose of the log.</p>
        </section>

        <section id="data-policy-29" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">29. ADMINISTRATIVE RECORDS</h2>
          <p>Administrative records may be retained to establish an audit trail for important actions such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Account changes</li>
            <li>Partner verification</li>
            <li>Booking adjustments</li>
            <li>Refund processing</li>
            <li>Settlement adjustments</li>
            <li>Security actions</li>
            <li>Content moderation</li>
            <li>Access management</li>
          </ul>
        </section>

        <section id="data-policy-30" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">30. DATA DELETION METHODS</h2>
          <p>Where appropriate, DigiSaloon may delete, anonymize, deactivate, or otherwise securely dispose of information using reasonable technical procedures.</p>
          <p>The exact deletion method may depend on:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Type of information</li>
            <li>Storage system</li>
            <li>Backup architecture</li>
            <li>Technical limitations</li>
            <li>Legal requirements</li>
            <li>Security requirements</li>
          </ul>
        </section>

        <section id="data-policy-31" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">31. USER DELETION REQUESTS</h2>
          <p>A deletion request should contain sufficient information for DigiSaloon to identify the relevant account and verify the requester.</p>
          <p>DigiSaloon may request additional information where reasonably necessary to protect account security.</p>
        </section>

        <section id="data-policy-32" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">32. DELETION REQUEST PROCESS</h2>
          <p>A deletion request may generally involve:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Request submission</li>
            <li>Identity/account verification</li>
            <li>Review of active bookings and outstanding matters</li>
            <li>Identification of information subject to retention</li>
            <li>Deletion or deactivation of eligible information</li>
            <li>Retention of information that must or may reasonably be retained</li>
            <li>Completion of the applicable account-deletion process</li>
          </ul>
        </section>

        <section id="data-policy-33" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">33. WHEN DELETION MAY BE DELAYED</h2>
          <p>Deletion may be delayed where necessary to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Complete an active booking</li>
            <li>Process a refund</li>
            <li>Complete settlement</li>
            <li>Resolve a dispute</li>
            <li>Investigate fraud</li>
            <li>Investigate a security incident</li>
            <li>Meet legal or regulatory requirements</li>
            <li>Complete accounting or financial reconciliation</li>
          </ul>
        </section>

        <section id="data-policy-34" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">34. INFORMATION THAT CANNOT BE IMMEDIATELY DELETED</h2>
          <p>Some information may need to remain available for a defined period because of:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
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
          <p className="pt-2">Such information should be limited to what is reasonably necessary for the applicable purpose.</p>
        </section>

        <section id="data-policy-35" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">35. DATA SHARING</h2>
          <p>DigiSaloon may share information where reasonably necessary with:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Payment providers</li>
            <li>Cloud/service providers</li>
            <li>Salon Partners for booking fulfillment</li>
            <li>Authorized Staff where required for appointments</li>
            <li>Security or fraud-prevention providers</li>
            <li>Professional advisers</li>
            <li>Government or law-enforcement authorities where legally required</li>
          </ul>
          <p className="pt-2">Data sharing should be limited to the applicable purpose and handled according to relevant privacy and security requirements.</p>
        </section>

        <section id="data-policy-36" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">36. INTERNAL DATA ACCESS</h2>
          <p>DigiSaloon personnel must access personal information only for authorized purposes.</p>
          <p>Internal access may be logged, monitored, restricted, or reviewed where appropriate.</p>
          <p>Unauthorized use or disclosure of personal information is prohibited.</p>
        </section>

        <section id="data-policy-37" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">37. DATA SECURITY INCIDENTS</h2>
          <p>If DigiSaloon becomes aware of a security incident affecting information, it may take appropriate steps including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Investigating the incident</li>
            <li>Restricting affected access</li>
            <li>Securing systems</li>
            <li>Assessing affected information</li>
            <li>Correcting security weaknesses</li>
            <li>Taking appropriate notification or remediation measures where required</li>
          </ul>
        </section>

        <section id="data-policy-38" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">38. USER RESPONSIBILITY</h2>
          <p>Users should protect their own account information by:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Using appropriate passwords</li>
            <li>Keeping authentication information confidential</li>
            <li>Avoiding unauthorized account sharing</li>
            <li>Keeping devices reasonably secure</li>
            <li>Reporting suspected unauthorized access</li>
          </ul>
        </section>

        <section id="data-policy-39" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">39. CHILDREN AND AGE REQUIREMENT</h2>
          <p>DigiSaloon services are intended for users aged 18 years and above.</p>
          <p>DigiSaloon does not intentionally provide its services to individuals below the minimum required age.</p>
          <p>If DigiSaloon becomes aware that an account was created in violation of the applicable age requirement, appropriate action may be taken, including account restriction or deletion, subject to applicable requirements.</p>
        </section>

        <section id="data-policy-40" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">40. INTERNATIONAL OR CROSS-BORDER PROCESSING</h2>
          <p>Where DigiSaloon or its service providers process information through infrastructure located outside the user's location, applicable safeguards and legal requirements may apply.</p>
          <p>The specific location of data processing may depend on the infrastructure and services used by DigiSaloon and its service providers.</p>
        </section>

        <section id="data-policy-41" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">41. POLICY RELATIONSHIP</h2>
          <p>This Policy should be read together with:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Privacy Policy</li>
            <li>Security Policy</li>
            <li>User Account & Account Deletion Policy</li>
            <li>Terms & Conditions</li>
            <li>Partner Terms & Conditions</li>
            <li>Admin Panel Access & Internal Security Policy</li>
            <li>Payment & Settlement Policy</li>
            <li>Cancellation & Refund Policy</li>
            <li>Booking & Appointment Policy</li>
            <li>Grievance Redressal & Contact Policy</li>
          </ul>
        </section>

        <section id="data-policy-42" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">42. POLICY CHANGES</h2>
          <p>DigiSaloon may update this Policy from time to time to reflect:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Changes in technology</li>
            <li>Changes in data practices</li>
            <li>New platform features</li>
            <li>Security improvements</li>
            <li>Operational changes</li>
            <li>Changes in legal or regulatory requirements</li>
          </ul>
          <p className="pt-2">The updated version may be published through the DigiSaloon website, applications, or other appropriate communication channels.</p>
        </section>

        <section id="data-policy-43" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">43. CONTACT INFORMATION</h2>
          <p>For questions or requests relating to data protection, retention, account deletion, or privacy:</p>
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