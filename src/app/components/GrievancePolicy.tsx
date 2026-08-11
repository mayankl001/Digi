import React from "react";

export const GrievancePolicy: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Support Policy
          </span>
          <span className="text-xs text-slate-400">Last Updated: 11 August 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          GRIEVANCE REDRESSAL & CONTACT POLICY
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          DigiSaloon is committed to providing a clear channel for customers, salon partners and authorized users to raise questions, complaints and service-related concerns.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="g-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. Purpose</h2>
          <p>This Policy explains how users can contact DigiSaloon and how complaints may be submitted and reviewed.</p>
        </section>

        <section id="g-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. Who Can Contact DigiSaloon</h2>
          <p>Support may be requested by:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Customers</li>
            <li>Salon partners</li>
            <li>Authorized salon owners</li>
            <li>Authorized salon staff or barbers</li>
            <li>Other authorized DigiSaloon users</li>
          </ul>
        </section>

        <section id="g-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. Types of Complaints</h2>
          <p>Users may contact DigiSaloon regarding:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Booking issues</li>
            <li>Appointment issues</li>
            <li>Cancellation</li>
            <li>Refunds</li>
            <li>Payment issues</li>
            <li>Salon cancellation</li>
            <li>Incorrect booking status</li>
            <li>Account problems</li>
            <li>Technical issues</li>
            <li>Reviews and ratings</li>
            <li>Partner-related concerns</li>
            <li>Security concerns</li>
            <li>Privacy-related concerns</li>
            <li>Other DigiSaloon service issues</li>
          </ul>
        </section>

        <section id="g-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. How to Contact DigiSaloon</h2>
          <p>Users may contact DigiSaloon through the available support channels.</p>
          <div className="bg-slate-900 text-slate-200 p-5 rounded-xl space-y-2 text-xs md:text-sm">
            <p className="font-bold text-white text-base">DigiSaloon Support Channels</p>
            <p><strong>Email:</strong> <a href="mailto:support@digisaloon.in" className="text-red-400 hover:underline font-mono">support@digisaloon.in</a></p>
            <p><strong>Phone:</strong> 9973499471</p>
            <p><strong>Address:</strong> Angara, Ranchi, Jharkhand – 835103</p>
            <p><strong>Website:</strong> digisaloon.in</p>
          </div>
        </section>

        <section id="g-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. Information to Include</h2>
          <p>To help DigiSaloon investigate a complaint, users should provide relevant information such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-3">
            <li>Name</li>
            <li>Registered mobile number or email</li>
            <li>Booking ID</li>
            <li>Salon name</li>
            <li>Appointment date and time</li>
            <li>Transaction/reference ID</li>
            <li>Description of the issue</li>
            <li>Relevant screenshots or documents, where appropriate</li>
          </ul>
          <div className="bg-amber-50 border border-amber-200 p-3 rounded-lg text-xs text-amber-900 font-mono space-y-1">
            <p className="font-bold">Users should never send:</p>
            <p>Passwords, OTPs, UPI PINs, Card PINs, Banking passwords, or other confidential authentication credentials.</p>
          </div>
        </section>

        <section id="g-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. Complaint Review</h2>
          <p>DigiSaloon may review the information provided and may request additional information where reasonably necessary.</p>
          <p>Depending on the issue, DigiSaloon may communicate with:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Customer</li>
            <li>Salon partner</li>
            <li>Authorized salon staff</li>
            <li>Payment provider</li>
            <li>Technical service provider</li>
            <li>Other relevant third party</li>
          </ul>
        </section>

        <section id="g-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. Booking Complaints</h2>
          <p>For booking-related complaints, DigiSaloon may review available records, including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Booking status</li>
            <li>Appointment information</li>
            <li>Cancellation records</li>
            <li>Payment status</li>
            <li>Relevant system records</li>
          </ul>
        </section>

        <section id="g-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. Payment and Refund Complaints</h2>
          <p>For payment or refund complaints, DigiSaloon may need to verify the transaction with the applicable payment provider.</p>
          <p>Resolution may depend on payment providers, banks, UPI systems, card networks or other financial institutions.</p>
        </section>

        <section id="g-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. Salon Service Complaints</h2>
          <p>The salon is responsible for the actual salon service provided to the customer.</p>
          <p>DigiSaloon may review complaints regarding salon services and may take appropriate platform-level action where reasonably necessary.</p>
        </section>

        <section id="g-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. Partner Complaints</h2>
          <p>Salon partners may contact DigiSaloon regarding:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Booking problems</li>
            <li>Settlement issues</li>
            <li>Payment issues</li>
            <li>Partner account problems</li>
            <li>Technical issues</li>
            <li>Customer disputes</li>
            <li>Staff access</li>
            <li>Other partner-related matters</li>
          </ul>
        </section>

        <section id="g-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. Privacy and Data Complaints</h2>
          <p>Privacy-related concerns may be submitted through: <a href="mailto:support@digisaloon.in" className="text-red-700 font-mono hover:underline">support@digisaloon.in</a></p>
          <p>DigiSaloon may request reasonable information to verify the identity of the person making the request before providing account-specific information.</p>
        </section>

        <section id="g-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. Security Reports</h2>
          <p>Users should promptly report suspected unauthorized access, fraud, suspicious transactions, security vulnerabilities, or misuse of account information to DigiSaloon.</p>
          <p className="text-xs font-semibold text-slate-900">Users should not attempt to exploit or disrupt a suspected security vulnerability.</p>
        </section>

        <section id="g-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. Response and Resolution</h2>
          <p>DigiSaloon aims to review support requests within a reasonable period.</p>
          <p>The actual resolution time may vary depending on:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Complexity of the complaint</li>
            <li>Information available</li>
            <li>Need for additional verification</li>
            <li>Third-party service providers</li>
            <li>Payment or banking processes</li>
            <li>Technical investigation</li>
            <li>Other relevant circumstances</li>
          </ul>
        </section>

        <section id="g-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. Escalation</h2>
          <p>If a complaint cannot be resolved through normal support, DigiSaloon may escalate the matter internally for further review.</p>
          <p>Users may provide additional information if they believe the initial response does not fully address their concern.</p>
        </section>

        <section id="g-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. Abusive Support Requests</h2>
          <p>Support channels must not be used for:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Threats</li>
            <li>Harassment</li>
            <li>Spam</li>
            <li>Fraudulent claims</li>
            <li>Impersonation</li>
            <li>Repeated abusive communications</li>
          </ul>
          <p>DigiSaloon may restrict abusive communications while continuing to address legitimate concerns.</p>
        </section>

        <section id="g-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. Third-Party Issues</h2>
          <p>Where a complaint relates primarily to a third-party provider, DigiSaloon may assist with verification or coordination where reasonably possible.</p>
          <p>However, DigiSaloon cannot guarantee the actions or timelines of independent third-party providers.</p>
        </section>

        <section id="g-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. No Waiver of Legal Rights</h2>
          <p>Using DigiSaloon's internal complaint process does not remove or limit any rights or remedies available under applicable law.</p>
        </section>

        <section id="g-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. Policy Updates</h2>
          <p>DigiSaloon may update this Policy to reflect changes in its support procedures, services, technology or applicable requirements.</p>
          <p>The latest version may be published on the DigiSaloon website.</p>
        </section>

        <section id="g-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. Contact</h2>
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