import React from "react";

export const GrievancePolicy: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Grievance Redressal & Contact Policy
          </span>
          <span className="text-xs text-slate-400">Last Updated: 21 September 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          GRIEVANCE REDRESSAL & CONTACT POLICY
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          This Grievance Redressal & Contact Policy explains how customers, salon partners, and other users can contact DigiSaloon, submit complaints or grievances, and seek assistance regarding the DigiSaloon platform and its services.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="grievance-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. Purpose</h2>
          <p>DigiSaloon aims to provide a transparent and accessible process for receiving and addressing user complaints, concerns, and grievances.</p>
          <p>This policy provides a dedicated channel through which users can report issues relating to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Account and profile</li>
            <li>Salon listings</li>
            <li>Bookings</li>
            <li>Payments</li>
            <li>Refunds</li>
            <li>Cancellations</li>
            <li>Reviews and ratings</li>
            <li>Content</li>
            <li>Privacy</li>
            <li>Security</li>
            <li>Technical problems</li>
            <li>Salon partner issues</li>
            <li>Other DigiSaloon platform-related matters</li>
          </ul>
        </section>

        <section id="grievance-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. Who Can Raise a Grievance</h2>
          <p>A grievance may be submitted by:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Customers</li>
            <li>Salon partners</li>
            <li>Authorized representatives</li>
            <li>Other users of DigiSaloon</li>
          </ul>
          <p className="pt-2">A user may contact DigiSaloon regarding an issue connected with the platform, a booking, transaction, account, or other DigiSaloon-related service.</p>
        </section>

        <section id="grievance-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. How to Contact DigiSaloon</h2>
          <p>Users can submit their grievance or request assistance through the following contact details:</p>
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
          <p className="pt-2">For faster resolution, users should provide sufficient information about the issue.</p>
        </section>

        <section id="grievance-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. Information to Include in a Complaint</h2>
          <p>Where applicable, users should provide:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Full name</li>
            <li>Registered mobile number or email address</li>
            <li>Booking ID</li>
            <li>Salon name</li>
            <li>Date and time of booking</li>
            <li>Payment or transaction ID</li>
            <li>Description of the issue</li>
            <li>Relevant screenshots or supporting documents</li>
            <li>Any other information that may help DigiSaloon investigate the matter</li>
          </ul>
          <p className="pt-2">Users should avoid sending unnecessary sensitive personal or financial information.</p>
        </section>

        <section id="grievance-5" className="space-y-4 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. Types of Grievances</h2>
          <p>DigiSaloon may receive grievances relating to:</p>
          
          <div className="space-y-4 pt-2">
            <div className="p-4 border border-slate-200 rounded-lg bg-slate-50/50 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">A. Booking Issues</h3>
              <p>Examples include:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
                <li>Booking not confirmed</li>
                <li>Incorrect booking information</li>
                <li>Booking status issues</li>
                <li>Appointment availability issues</li>
                <li>Technical booking problems</li>
              </ul>
            </div>

            <div className="p-4 border border-slate-200 rounded-lg bg-slate-50/50 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">B. Cancellation and Refund Issues</h3>
              <p>Examples include:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
                <li>Eligible refund not received</li>
                <li>Incorrect refund amount</li>
                <li>Cancellation-related concerns</li>
                <li>Refund processing delays</li>
              </ul>
              <p className="pt-2">Refund matters will be handled according to the DigiSaloon Cancellation & Refund Policy.</p>
            </div>

            <div className="p-4 border border-slate-200 rounded-lg bg-slate-50/50 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">C. Payment Issues</h3>
              <p>Examples include:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
                <li>Failed payment</li>
                <li>Duplicate payment</li>
                <li>Payment deducted but booking not confirmed</li>
                <li>Incorrect transaction status</li>
                <li>Payment gateway-related issues</li>
              </ul>
            </div>

            <div className="p-4 border border-slate-200 rounded-lg bg-slate-50/50 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">D. Salon-Related Issues</h3>
              <p>Users may report concerns regarding:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
                <li>Salon information</li>
                <li>Service information</li>
                <li>Booking acceptance</li>
                <li>Salon cancellation</li>
                <li>Staff behaviour</li>
                <li>Service-related concerns</li>
              </ul>
              <p className="pt-2">Where an issue relates directly to an independent salon's service, DigiSaloon may coordinate with the concerned salon where appropriate.</p>
            </div>

            <div className="p-4 border border-slate-200 rounded-lg bg-slate-50/50 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">E. Content and Review Issues</h3>
              <p>Users may report:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
                <li>Fake reviews</li>
                <li>Misleading information</li>
                <li>Inappropriate content</li>
                <li>Copyright concerns</li>
                <li>Privacy concerns</li>
                <li>Harassment or abusive content</li>
              </ul>
              <p className="pt-2">Such complaints may be reviewed under DigiSaloon's Content Policy & Community Guidelines.</p>
            </div>

            <div className="p-4 border border-slate-200 rounded-lg bg-slate-50/50 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">F. Privacy and Security Issues</h3>
              <p>Users may report concerns involving:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
                <li>Unauthorized account access</li>
                <li>Privacy concerns</li>
                <li>Suspicious activity</li>
                <li>Security incidents</li>
                <li>Improper use of personal information</li>
              </ul>
              <p className="pt-2">Security-related reports should be submitted as soon as reasonably possible.</p>
            </div>
          </div>
        </section>

        <section id="grievance-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. Complaint Acknowledgement</h2>
          <p>DigiSaloon may acknowledge receipt of a grievance after it has been received through an appropriate communication channel.</p>
          <p>The acknowledgement may include, where appropriate:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Complaint reference number</li>
            <li>Summary of the reported issue</li>
            <li>Information required from the user</li>
            <li>Expected next steps</li>
          </ul>
        </section>

        <section id="grievance-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. Review and Investigation</h2>
          <p>DigiSaloon may review the complaint using information available through its systems and relevant third-party service providers.</p>
          <p>Depending on the nature of the grievance, DigiSaloon may review:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Booking records</li>
            <li>Payment records</li>
            <li>Transaction information</li>
            <li>Account information</li>
            <li>Communication records</li>
            <li>Review or content information</li>
            <li>Technical logs</li>
            <li>Salon partner information</li>
          </ul>
          <p className="pt-2">DigiSaloon may contact the concerned customer, salon partner, payment provider, or other relevant party where reasonably necessary.</p>
        </section>

        <section id="grievance-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. Resolution</h2>
          <p>DigiSaloon will make reasonable efforts to review and resolve valid grievances in a fair and appropriate manner.</p>
          <p>The resolution may include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Providing information or clarification</li>
            <li>Correcting account or booking information</li>
            <li>Assisting with an eligible refund</li>
            <li>Correcting a technical issue</li>
            <li>Reviewing or removing policy-violating content</li>
            <li>Coordinating with a salon partner</li>
            <li>Taking appropriate action under DigiSaloon policies</li>
          </ul>
          <p className="pt-2">The resolution will depend on the nature and circumstances of the complaint.</p>
        </section>

        <section id="grievance-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. Salon Partner Grievances</h2>
          <p>Salon partners may contact DigiSaloon regarding:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Booking settlements</li>
            <li>Payment issues</li>
            <li>Customer disputes</li>
            <li>Account issues</li>
            <li>Salon profile information</li>
            <li>Service listings</li>
            <li>Technical problems</li>
            <li>Platform-related concerns</li>
          </ul>
          <p className="pt-2">Salon partners should provide the relevant booking, transaction, or account information to help DigiSaloon investigate the matter.</p>
        </section>

        <section id="grievance-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. Customer Grievances Regarding Salon Services</h2>
          <p>DigiSaloon provides a platform for booking services offered by participating salons.</p>
          <p>Where a complaint concerns the actual salon service, DigiSaloon may communicate with the concerned salon and assist in facilitating communication.</p>
          <p>However, the salon remains responsible for the services it independently provides to customers.</p>
        </section>

        <section id="grievance-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. Privacy of Complaints</h2>
          <p>DigiSaloon may process information provided in a grievance for purposes including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Investigating the complaint</li>
            <li>Communicating with the user</li>
            <li>Resolving the issue</li>
            <li>Preventing fraud or abuse</li>
            <li>Improving platform services</li>
            <li>Maintaining records</li>
            <li>Complying with applicable legal requirements</li>
          </ul>
          <p className="pt-2">Personal information will be handled according to the DigiSaloon Privacy Policy.</p>
        </section>

        <section id="grievance-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. Supporting Documents</h2>
          <p>DigiSaloon may request additional information or documents where necessary to verify a complaint.</p>
          <p>Users should provide genuine and accurate information.</p>
          <p>Providing false information or submitting fraudulent complaints may result in appropriate action under applicable DigiSaloon policies.</p>
        </section>

        <section id="grievance-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. Urgent Security Concerns</h2>
          <p>Users who identify a suspected security vulnerability, unauthorized access, or other serious security concern should contact DigiSaloon as soon as possible.</p>
          <p>Users should provide sufficient details to allow DigiSaloon to understand and investigate the reported issue.</p>
          <p>Users should not attempt to exploit, access, damage, or disrupt DigiSaloon systems while reporting a security issue.</p>
        </section>

        <section id="grievance-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. Escalation</h2>
          <p>If a user is not satisfied with the initial response, the user may reply to the communication received from DigiSaloon or contact support again with the relevant complaint reference or previous communication details.</p>
          <p>DigiSaloon may review the matter further based on the information provided.</p>
        </section>

        <section id="grievance-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. Response Time</h2>
          <p>DigiSaloon aims to acknowledge and address grievances within a reasonable period.</p>
          <p>Actual resolution time may vary depending on:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Complexity of the complaint</li>
            <li>Information required</li>
            <li>Payment gateway or banking verification</li>
            <li>Salon partner response</li>
            <li>Technical investigation</li>
            <li>Third-party service providers</li>
            <li>Legal or regulatory requirements</li>
          </ul>
          <p className="pt-2">Some matters may therefore require additional time to resolve.</p>
        </section>

        <section id="grievance-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. Fraudulent or Abusive Complaints</h2>
          <p>DigiSaloon may take appropriate action against accounts that repeatedly submit knowingly false, fraudulent, threatening, or abusive complaints.</p>
          <p>This does not prevent users from making genuine complaints or reporting legitimate concerns.</p>
        </section>

        <section id="grievance-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. Legal and Regulatory Matters</h2>
          <p>Where a grievance involves a legal, regulatory, court, law-enforcement, or government matter, DigiSaloon may handle the matter in accordance with applicable laws and lawful requirements.</p>
          <p>DigiSaloon may provide information to authorized authorities where legally required.</p>
        </section>

        <section id="grievance-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. Policy Relationship</h2>
          <p>This Grievance Redressal & Contact Policy should be read together with other applicable DigiSaloon policies, including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Cancellation & Refund Policy</li>
            <li>Payment & Settlement Policy</li>
            <li>Cookie Policy</li>
            <li>Content Policy & Community Guidelines</li>
            <li>Security Policy</li>
            <li>Legal Disclaimer</li>
          </ul>
          <p className="pt-2">If a specific policy provides a dedicated process for a particular matter, that process may also apply.</p>
        </section>

        <section id="grievance-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. Changes to This Policy</h2>
          <p>DigiSaloon may update this Grievance Redressal & Contact Policy from time to time to reflect changes in its services, support processes, business operations, or applicable legal requirements.</p>
          <p>The updated version will be published on the DigiSaloon website or application with the revised effective date.</p>
        </section>

        <section id="grievance-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">20. Contact Details</h2>
          <p>For all general support, complaints, and grievances:</p>
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
          <p className="pt-2">Users are encouraged to contact DigiSaloon with complete and accurate information so that their concerns can be reviewed efficiently.</p>
        </section>

      </div>
    </div>
  );
};