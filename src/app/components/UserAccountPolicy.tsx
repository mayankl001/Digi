import React from "react";

export const UserAccountPolicy: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            User Account & Account Deletion Policy
          </span>
          <span className="text-xs text-slate-400">Last Updated: 21 September 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          USER ACCOUNT & ACCOUNT DELETION POLICY
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          This User Account & Account Deletion Policy explains the rules relating to creating, maintaining, using, securing, and deleting a user account on DigiSaloon.
        </p>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          By creating or using a DigiSaloon account, you agree to this Policy along with the DigiSaloon Terms & Conditions, Privacy Policy, Booking & Appointment Policy, Cancellation & Refund Policy, Payment & Settlement Policy, and other applicable policies.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="account-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. About User Accounts</h2>
          <p>A DigiSaloon account allows eligible users to access and use applicable DigiSaloon features and services.</p>
          <p>Depending on the user's role, an account may be used to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Browse salons and services</li>
            <li>View salon and service information</li>
            <li>Make Live Bookings</li>
            <li>Make Schedule Bookings</li>
            <li>Manage bookings</li>
            <li>View booking history</li>
            <li>Receive booking-related notifications</li>
            <li>Submit eligible reviews and ratings</li>
            <li>Manage account information</li>
            <li>Access other features made available by DigiSaloon</li>
          </ul>
        </section>

        <section id="account-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. User Eligibility</h2>
          <p>DigiSaloon accounts are intended for users who meet the minimum eligibility requirements specified by DigiSaloon.</p>
          <p>The minimum age for using DigiSaloon services is 18 years.</p>
          <p>By creating an account, the user confirms that the information provided is accurate and that the user meets the applicable eligibility requirements.</p>
        </section>

        <section id="account-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. Account Information</h2>
          <p>Users may be required to provide certain information when creating or using an account, such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Name</li>
            <li>Mobile number</li>
            <li>Email address</li>
            <li>Account credentials or authentication information</li>
            <li>Booking-related information</li>
            <li>Other information required for the relevant DigiSaloon feature</li>
          </ul>
          <p className="pt-2">Users are responsible for providing accurate and updated information.</p>
        </section>

        <section id="account-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. Accuracy of Information</h2>
          <p>Users should ensure that the information associated with their account is:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Accurate</li>
            <li>Complete</li>
            <li>Current</li>
            <li>Not misleading</li>
          </ul>
          <p className="pt-2">DigiSaloon may request clarification or correction where information appears inaccurate, incomplete, or inconsistent with platform requirements.</p>
        </section>

        <section id="account-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. Account Security</h2>
          <p>Users are responsible for maintaining the security of their account and authentication information.</p>
          <p>Users should:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Keep login credentials confidential</li>
            <li>Avoid sharing authentication information with others</li>
            <li>Use secure passwords where passwords are applicable</li>
            <li>Log out from shared or public devices</li>
            <li>Notify DigiSaloon if they suspect unauthorized account access</li>
          </ul>
          <p className="pt-2">DigiSaloon will not normally ask users to disclose passwords, authentication codes, or other confidential security information through unofficial channels.</p>
        </section>

        <section id="account-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. Unauthorized Account Access</h2>
          <p>If a user believes that their account has been accessed or used without authorization, they should contact DigiSaloon as soon as reasonably possible.</p>
          <p>DigiSaloon may investigate suspicious activity and may take reasonable security measures, including temporarily restricting account access where necessary.</p>
        </section>

        <section id="account-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. Account Usage</h2>
          <p>Users must use their DigiSaloon account only for lawful and legitimate purposes.</p>
          <p>Users must not use an account to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Commit fraud</li>
            <li>Misuse coupons or promotional offers</li>
            <li>Create fake or duplicate accounts for improper benefits</li>
            <li>Manipulate bookings</li>
            <li>Submit false reviews</li>
            <li>Harass salons, customers, or DigiSaloon personnel</li>
            <li>Circumvent platform restrictions</li>
            <li>Attempt unauthorized access to DigiSaloon systems</li>
            <li>Interfere with the operation of the platform</li>
            <li>Engage in any activity prohibited by applicable law or DigiSaloon policies</li>
          </ul>
        </section>

        <section id="account-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. Duplicate or Multiple Accounts</h2>
          <p>DigiSaloon may restrict the creation or use of multiple accounts where multiple accounts are created for fraudulent, abusive, promotional, referral, or other unauthorized purposes.</p>
          <p>Having more than one account is not automatically considered misuse if DigiSaloon expressly permits such account arrangements.</p>
        </section>

        <section id="account-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. Bookings Before Account Deletion</h2>
          <p>Users should review their active and upcoming bookings before requesting account deletion.</p>
          <p>Deleting an account does not automatically cancel or modify an existing booking unless DigiSaloon confirms otherwise.</p>
          <p>Applicable cancellation and refund rules will continue to apply to eligible bookings.</p>
        </section>

        <section id="account-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. Outstanding Transactions</h2>
          <p>Before deleting an account, users should resolve any relevant:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Pending bookings</li>
            <li>Refunds</li>
            <li>Payment issues</li>
            <li>Booking disputes</li>
            <li>Other outstanding account matters</li>
          </ul>
          <p className="pt-2">Account deletion does not automatically eliminate valid financial obligations, transaction records, or rights and responsibilities that arose before deletion.</p>
        </section>

        <section id="account-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. How to Request Account Deletion</h2>
          <p>Users may request deletion of their DigiSaloon account through the account deletion option made available within the DigiSaloon application or through another deletion method provided by DigiSaloon.</p>
          <p>Where an in-app deletion option is available, users should follow the instructions displayed in the application.</p>
          <p>If the available deletion mechanism does not work, users may contact DigiSaloon at:</p>
          <p><strong>Email:</strong> <a href="mailto:support@digisaloon.in" className="text-red-500 hover:underline">support@digisaloon.in</a></p>
          <p>The user may be required to provide sufficient information to verify that the deletion request relates to the relevant account.</p>
        </section>

        <section id="account-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. Identity and Account Verification</h2>
          <p>DigiSaloon may take reasonable steps to verify an account deletion request before processing it.</p>
          <p>This may be necessary to prevent unauthorized individuals from deleting another person's account.</p>
          <p>DigiSaloon will request only information reasonably necessary for verification and processing of the request.</p>
        </section>

        <section id="account-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. Effect of Account Deletion</h2>
          <p>After a valid account deletion request is processed, the account may no longer be available for normal login or use.</p>
          <p>Depending on applicable legal, operational, security, and financial requirements, certain information associated with the account may be deleted, anonymized, or retained for a limited period.</p>
        </section>

        <section id="account-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. Data Retention After Deletion</h2>
          <p>Account deletion does not necessarily mean that every record associated with the user is immediately erased from all systems.</p>
          <p>DigiSaloon may retain certain information where reasonably necessary for purposes such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
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
          <p className="pt-2">Where retention is required, DigiSaloon will handle the information in accordance with its Privacy Policy and applicable law.</p>
        </section>

        <section id="account-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. Payment and Transaction Records</h2>
          <p>Payment-related records may be retained after account deletion where required for legitimate business, accounting, payment, security, dispute, or legal purposes.</p>
          <p>This may include information relating to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Booking payments</li>
            <li>Refunds</li>
            <li>Payment status</li>
            <li>Transaction references</li>
            <li>Settlement records</li>
            <li>Payment gateway transactions</li>
          </ul>
          <p className="pt-2">DigiSaloon may also rely on records maintained by authorized payment service providers for applicable transactions.</p>
        </section>

        <section id="account-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. Booking History</h2>
          <p>Booking and transaction records may be retained where necessary for legal, accounting, security, dispute-resolution, or other legitimate purposes.</p>
          <p>Deleting an account does not guarantee immediate deletion of every historical booking record from all systems.</p>
        </section>

        <section id="account-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. Reviews and Ratings</h2>
          <p>Where a user has submitted reviews or ratings, account deletion may affect the way those contributions are displayed.</p>
          <p>Depending on the applicable system and legal requirements, DigiSaloon may:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Delete associated content</li>
            <li>Anonymize associated content</li>
            <li>Retain content without directly displaying the deleted account's personal account information</li>
          </ul>
          <p className="pt-2">This will be handled in accordance with the Review & Rating Policy and Privacy Policy.</p>
        </section>

        <section id="account-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. Account Deletion and Refunds</h2>
          <p>Deleting an account does not automatically create a right to a refund.</p>
          <p>Any refund will be processed according to the applicable Cancellation & Refund Policy, Payment & Settlement Policy, and the terms applicable to the relevant transaction.</p>
          <p>If a valid refund is already being processed, DigiSaloon may continue processing the refund using the applicable payment and transaction records.</p>
        </section>

        <section id="account-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. Account Deletion and Active Bookings</h2>
          <p>If an account has an upcoming booking, DigiSaloon may require the user to address the booking before completing deletion where necessary for booking administration or customer support.</p>
          <p>Where account deletion proceeds despite an active booking, the booking may remain subject to the applicable booking terms.</p>
          <p>Users should contact DigiSaloon support if they need assistance with an active booking before deleting their account.</p>
        </section>

        <section id="account-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">20. Account Suspension or Restriction</h2>
          <p>DigiSaloon may temporarily suspend or restrict an account where reasonably necessary to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Protect platform security</li>
            <li>Investigate suspected fraud</li>
            <li>Prevent unauthorized activity</li>
            <li>Investigate policy violations</li>
            <li>Protect users or salon partners</li>
            <li>Comply with legal requirements</li>
          </ul>
          <p className="pt-2">Account restriction does not necessarily constitute permanent account deletion.</p>
        </section>

        <section id="account-21" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">21. Termination of Accounts</h2>
          <p>DigiSaloon may suspend or terminate an account where permitted by applicable law and its Terms & Conditions, including in circumstances involving:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Fraudulent activity</li>
            <li>Serious or repeated policy violations</li>
            <li>Unauthorized access attempts</li>
            <li>Abuse of promotional programs</li>
            <li>Booking manipulation</li>
            <li>Misuse of the platform</li>
            <li>Illegal activity</li>
            <li>Conduct that creates a significant security or safety concern</li>
          </ul>
          <p className="pt-2">Where appropriate, DigiSaloon may provide notice or information regarding the applicable action, subject to security, legal, or operational considerations.</p>
        </section>

        <section id="account-22" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">22. Recreating an Account</h2>
          <p>After deleting an account, a user may create a new account only if permitted by DigiSaloon and applicable eligibility requirements.</p>
          <p>Previous account deletion, suspension, or restriction may affect eligibility for certain promotional offers or benefits.</p>
          <p>Creating a new account to bypass an account restriction or promotional limitation may be treated as misuse.</p>
        </section>

        <section id="account-23" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">23. Promotional Benefits After Deletion</h2>
          <p>Deleting an account does not preserve or transfer unused promotional benefits, coupons, referral benefits, or other account-specific rewards unless DigiSaloon expressly permits it.</p>
          <p>Promotional eligibility may be reassessed if a user creates a new account.</p>
        </section>

        <section id="account-24" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">24. Notifications After Account Deletion</h2>
          <p>After account deletion, users should generally no longer receive normal account-based promotional communications associated with the deleted account.</p>
          <p>Certain communications relating to transactions, legal obligations, security, refunds, or other necessary matters may still be sent where appropriate.</p>
        </section>

        <section id="account-25" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">25. Privacy and Account Deletion</h2>
          <p>The handling of personal information associated with an account is governed by the DigiSaloon Privacy Policy.</p>
          <p>Users may have additional rights regarding their personal information under applicable law.</p>
          <p>Requests relating specifically to personal information may be reviewed separately from an account deletion request where required.</p>
        </section>

        <section id="account-26" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">26. Data Backup and System Copies</h2>
          <p>DigiSaloon may maintain limited copies of information in secure backups or disaster-recovery systems for a reasonable period.</p>
          <p>Such information may not be immediately removed from backup systems when the account deletion request is completed.</p>
          <p>Where retained in backups, the information will remain subject to applicable security and retention controls and will generally be removed or overwritten according to applicable backup cycles.</p>
        </section>

        <section id="account-27" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">27. Security and Fraud Prevention</h2>
          <p>Certain information may be retained after account deletion where necessary to detect, investigate, prevent, or respond to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Fraud</li>
            <li>Abuse</li>
            <li>Unauthorized transactions</li>
            <li>Security incidents</li>
            <li>Platform manipulation</li>
            <li>Other prohibited activity</li>
          </ul>
          <p className="pt-2">Such retention will be handled in accordance with applicable law and DigiSaloon's Privacy Policy.</p>
        </section>

        <section id="account-28" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">28. Third-Party Services</h2>
          <p>DigiSaloon may use authorized third-party service providers for functions such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Payment processing</li>
            <li>Authentication</li>
            <li>Hosting</li>
            <li>Notifications</li>
            <li>Analytics</li>
            <li>Security</li>
            <li>Customer support</li>
          </ul>
          <p className="pt-2">Account deletion from DigiSaloon does not necessarily cause immediate deletion of information independently maintained by such third parties.</p>
          <p>Where applicable, users may need to contact the relevant third-party provider regarding information maintained directly by that provider.</p>
        </section>

        <section id="account-29" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">29. Deletion Request Processing</h2>
          <p>DigiSaloon will process valid account deletion requests within a reasonable period, subject to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Account verification</li>
            <li>Active transactions</li>
            <li>Legal requirements</li>
            <li>Security investigations</li>
            <li>Technical requirements</li>
            <li>Required data retention</li>
            <li>Other legitimate operational requirements</li>
          </ul>
          <p className="pt-2">The actual processing time may vary depending on the circumstances of the request.</p>
        </section>

        <section id="account-30" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">30. Failed or Incomplete Deletion Requests</h2>
          <p>If an account deletion request cannot be completed because required information is missing, the request cannot be verified, or another legitimate restriction applies, DigiSaloon may contact the user or provide appropriate instructions where possible.</p>
          <p>Users may contact support if they require clarification regarding the status of a deletion request.</p>
        </section>

        <section id="account-31" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">31. Consequences of Account Deletion</h2>
          <p>After account deletion, the user may lose access to account-related features, including where applicable:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Booking history</li>
            <li>Saved account information</li>
            <li>Account preferences</li>
            <li>Reviews and ratings management</li>
            <li>Promotional benefits</li>
            <li>Other account-specific features</li>
          </ul>
          <p className="pt-2">Users should save any information they are legally entitled to retain before requesting deletion.</p>
        </section>

        <section id="account-32" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">32. Reconsidering Account Deletion</h2>
          <p>Once an account deletion request has been processed, DigiSaloon may not be able to restore the deleted account or associated information.</p>
          <p>If a user changes their mind, they should contact DigiSaloon as soon as possible before the deletion is completed.</p>
        </section>

        <section id="account-33" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">33. No Circumvention</h2>
          <p>Users must not attempt to circumvent account restrictions, deletion controls, security measures, or platform limitations through unauthorized methods.</p>
          <p>Any such activity may result in further account restrictions or other action permitted under DigiSaloon policies and applicable law.</p>
        </section>

        <section id="account-34" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">34. Relationship With Other Policies</h2>
          <p>This Policy should be read together with the DigiSaloon:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Booking & Appointment Policy</li>
            <li>Cancellation & Refund Policy</li>
            <li>Payment & Settlement Policy</li>
            <li>Offers & Coupon Policy</li>
            <li>Review & Rating Policy</li>
            <li>Content Policy & Community Guidelines</li>
            <li>Security Policy</li>
            <li>Grievance Redressal & Contact Policy</li>
            <li>Legal Disclaimer</li>
          </ul>
          <p className="pt-2">In the event of a conflict, the applicable specific policy or legally required provision may govern the relevant matter.</p>
        </section>

        <section id="account-35" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">35. Changes to This Policy</h2>
          <p>DigiSaloon may update this User Account & Account Deletion Policy from time to time to reflect changes in its platform, account features, legal requirements, security practices, or business operations.</p>
          <p>The updated version will be made available through the DigiSaloon website, application, or other appropriate channels.</p>
        </section>

        <section id="account-36" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">36. Contact Us</h2>
          <p>For account-related questions, account deletion requests, or assistance regarding account access, please contact:</p>
          <div className="bg-slate-900 text-slate-200 p-5 rounded-xl space-y-3 text-xs md:text-sm">
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
          <p className="pt-2">Users should include sufficient account or booking information to help DigiSaloon identify and process the request.</p>
        </section>

      </div>
    </div>
  );
};