import React from "react";

export const UserAccountPolicy: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Account Policy
          </span>
          <span className="text-xs text-slate-400">Last Updated: 11 August 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          USER ACCOUNT & ACCOUNT DELETION POLICY
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          This User Account & Account Deletion Policy explains how DigiSaloon user accounts are created, maintained, secured, restricted and deleted.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="user-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. Scope</h2>
          <p>This Policy applies to customer accounts created through:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>DigiSaloon User App</li>
            <li>DigiSaloon website</li>
            <li>Other authorized DigiSaloon customer services</li>
          </ul>
        </section>

        <section id="user-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. Account Creation</h2>
          <p>Certain DigiSaloon features may require users to create an account. Users may be required to provide information such as:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Name</li>
            <li>Mobile number</li>
            <li>Email address</li>
            <li>Other information required for account functionality</li>
          </ul>
          <p>Users are responsible for providing accurate information.</p>
        </section>

        <section id="user-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. Eligibility</h2>
          <p>DigiSaloon customer accounts are intended for individuals aged 18 years or older.</p>
          <p>By creating an account, the user confirms that they meet the applicable age requirement.</p>
        </section>

        <section id="user-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. Account Security</h2>
          <p>Users are responsible for maintaining the security of their account.</p>
          <p>Users should:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Keep login information confidential</li>
            <li>Use their own account</li>
            <li>Avoid sharing authentication information</li>
            <li>Log out from shared devices where appropriate</li>
            <li>Report suspected unauthorized access</li>
          </ul>
          <p>Users must not share: <strong>OTPs, Passwords, UPI PINs, Card PINs, or Banking passwords</strong> with anyone claiming to represent DigiSaloon.</p>
        </section>

        <section id="user-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. Accurate Information</h2>
          <p>Users should ensure that their account information remains accurate and updated.</p>
          <p>DigiSaloon may request verification where reasonably necessary for security, support or account-related purposes.</p>
        </section>

        <section id="user-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. Multiple Accounts</h2>
          <p>Users should not create multiple accounts for the purpose of:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Obtaining new-user offers repeatedly</li>
            <li>Avoiding restrictions</li>
            <li>Manipulating reviews</li>
            <li>Abusing cancellation rules</li>
            <li>Conducting fraudulent activity</li>
          </ul>
          <p>DigiSaloon may restrict accounts involved in such activity.</p>
        </section>

        <section id="user-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. Account Use</h2>
          <p>An account should be used only by the person to whom it belongs, unless DigiSaloon expressly permits another arrangement.</p>
          <p>Users are responsible for activity conducted through their account, subject to applicable law and circumstances involving unauthorized access.</p>
        </section>

        <section id="user-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. Account Suspension</h2>
          <p>DigiSaloon may temporarily suspend or restrict an account where reasonably necessary due to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Fraud, Suspicious activity, Security concerns</li>
            <li>Payment abuse, Fake bookings, Review manipulation</li>
            <li>Policy violations, Unauthorized access, Unlawful activity</li>
          </ul>
        </section>

        <section id="user-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. Account Termination</h2>
          <p>DigiSaloon may terminate an account where reasonably necessary due to serious or repeated violations of applicable Terms or policies.</p>
          <p>Where appropriate, DigiSaloon may provide notice before termination, subject to security, legal and operational considerations.</p>
        </section>

        <section id="user-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. Account Deletion</h2>
          <p>Users may request deletion of their DigiSaloon account through the available account-deletion functionality.</p>
          <p>Where an in-app deletion option is provided, users should follow the instructions displayed in the application.</p>
        </section>

        <section id="user-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. Effect of Account Deletion</h2>
          <p>Account deletion may result in loss of access to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Account information</li>
            <li>Booking history</li>
            <li>Saved preferences</li>
            <li>Other account-related features</li>
          </ul>
          <p>Users should review any important information they may need before deleting their account.</p>
        </section>

        <section id="user-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. Retention After Deletion</h2>
          <p>Deleting an account does not necessarily require DigiSaloon to immediately delete every record. Certain information may be retained where reasonably necessary for:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Legal compliance, Accounting, Payment records</li>
            <li>Refunds, Fraud prevention, Security</li>
            <li>Dispute resolution, Enforcement of agreements</li>
          </ul>
        </section>

        <section id="user-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. Pending Bookings</h2>
          <p>Where a user has upcoming bookings, DigiSaloon may require the user to review or resolve applicable booking matters before account deletion.</p>
          <p>Deletion does not automatically cancel every booking unless the applicable system expressly provides for such cancellation.</p>
        </section>

        <section id="user-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. Refunds After Account Deletion</h2>
          <p>If a user has an eligible refund pending at the time of account deletion, DigiSaloon may retain the information necessary to process and verify the refund.</p>
          <p>The user may be contacted through available transaction or contact information where reasonably necessary.</p>
        </section>

        <section id="user-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. Unauthorized Account Access</h2>
          <p>If a user believes that their account has been accessed without authorization, they should contact: <strong>support@digisaloon.in</strong></p>
          <p>Users should provide relevant information but must not share passwords, OTPs, UPI PINs or other confidential authentication credentials.</p>
        </section>

        <section id="user-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. Account Recovery</h2>
          <p>Where account recovery functionality is available, users may be required to complete reasonable verification steps.</p>
          <p>DigiSaloon may refuse recovery where sufficient verification cannot be completed.</p>
        </section>

        <section id="user-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. Privacy</h2>
          <p>Information relating to user accounts is processed according to DigiSaloon's Privacy Policy.</p>
        </section>

        <section id="user-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. Relationship With Other Policies</h2>
          <p>This Policy should be read together with:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Terms & Conditions, Privacy Policy</li>
            <li>Cancellation & Refund Policy</li>
            <li>Booking & Appointment Policy</li>
            <li>Acceptable Use Policy, Security Policy</li>
          </ul>
        </section>

        <section id="user-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. Policy Updates</h2>
          <p>DigiSaloon may update this Policy to reflect changes in account functionality, security practices or applicable requirements.</p>
        </section>

        <section id="user-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">20. Contact</h2>
          <div className="bg-slate-900 text-slate-200 p-5 rounded-xl space-y-2 text-xs md:text-sm">
            <p className="font-bold text-white text-base">DigiSaloon</p>
            <p><strong>Email:</strong> support@digisaloon.in</p>
            <p><strong>Phone:</strong> 9973499471</p>
            <p><strong>Address:</strong> Angara, Ranchi, Jharkhand – 835103</p>
            <p><strong>Website:</strong> digisaloon.in</p>
          </div>
        </section>

      </div>
    </div>
  );
};