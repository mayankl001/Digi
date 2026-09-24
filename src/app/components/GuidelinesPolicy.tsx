import React from "react";

export const GuidelinesPolicy: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            DigiSaloon Master Guidelines & Policies
          </span>
          <span className="text-xs text-slate-400">Last Updated: 21 September 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          DIGISALOON GUIDELINES & POLICIES
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          Welcome to DigiSaloon. This Guidelines & Policies page provides an overview of the rules, policies, terms, and guidelines that apply to the use of the DigiSaloon website, mobile application, partner applications, partner web applications, Manage Web, and related services.
        </p>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          By accessing or using DigiSaloon services, users, salon partners, barbers, staff members, and other authorized persons agree to follow the applicable policies and guidelines described below.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        {/* Section 1 */}
        <section id="sec-gp-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. PURPOSE OF THIS PAGE</h2>
          <p>The purpose of this page is to provide a central reference point for DigiSaloon's policies and guidelines.</p>
          <p>Different policies may apply depending on whether you are:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>A Customer/User</li>
            <li>A Salon Partner</li>
            <li>A Barber or Staff Member</li>
            <li>An Authorized Administrator</li>
            <li>A Visitor to the DigiSaloon website</li>
          </ul>
          <p className="pt-2">Users should review the policies relevant to their activities on the platform.</p>
        </section>

        {/* Section 2 */}
        <section id="sec-gp-2" className="space-y-4 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. CUSTOMER & USER POLICIES</h2>
          
          <div className="space-y-3 pl-2 border-l-2 border-slate-200">
            <div>
              <h3 className="font-bold text-slate-800 text-sm">2.1 Terms & Conditions</h3>
              <p className="text-xs md:text-sm">The Terms & Conditions explain the general rules governing the use of DigiSaloon's website, application, and services.</p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-sm">2.2 Privacy Policy</h3>
              <p className="text-xs md:text-sm">The Privacy Policy explains how DigiSaloon collects, uses, stores, processes, and protects personal information.</p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-sm">2.3 Cookie Policy</h3>
              <p className="text-xs md:text-sm">The Cookie Policy explains the use of cookies and similar technologies on DigiSaloon websites and web applications.</p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-sm">2.4 Booking & Appointment Policy</h3>
              <p className="text-xs md:text-sm">This policy explains:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm pt-1">
                <li>Live Bookings</li>
                <li>Schedule Bookings</li>
                <li>Appointment confirmation</li>
                <li>Booking availability</li>
                <li>Appointment timing</li>
                <li>Booking modifications</li>
                <li>No-show situations</li>
                <li>Customer responsibilities</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-sm">2.5 Cancellation & Refund Policy</h3>
              <p className="text-xs md:text-sm">This policy explains the applicable cancellation and refund rules.</p>
              <p className="font-semibold text-slate-800 text-xs pt-2">For Schedule Bookings:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
                <li>Cancellation is allowed when at least 1 hour before the appointment.</li>
                <li>The applicable refund is ₹49, after deduction of the ₹1.19 payment gateway fee from the ₹50.19 booking amount.</li>
                <li>Refunds are generally processed within 5–7 working days.</li>
              </ul>
              <p className="font-semibold text-slate-800 text-xs pt-2">For Live Bookings:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
                <li>Customer cancellation is not permitted.</li>
                <li>No refund is provided for customer cancellation.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-sm">2.6 Payment & Settlement Policy</h3>
              <p className="text-xs md:text-sm">This policy explains DigiSaloon's booking payment and salon settlement process.</p>
              <p className="text-xs md:text-sm pt-1">The customer pays a ₹50.19 booking amount online. From this amount:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm pt-1">
                <li>₹1.19 may be deducted as payment gateway/processing fee.</li>
                <li>₹49 is attributable to the salon as the net booking amount.</li>
                <li>The remaining service amount is paid directly by the customer to the salon.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-sm">2.7 Review & Rating Policy</h3>
              <p className="text-xs md:text-sm">This policy explains when and how customers may submit reviews and ratings for eligible salon bookings.</p>
              <p className="text-xs md:text-sm pt-1">Reviews must be genuine, relevant, respectful, and must not contain abusive, misleading, fraudulent, or unlawful content.</p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-sm">2.8 Offers & Coupon Policy</h3>
              <p className="text-xs md:text-sm">This policy governs promotional offers, discounts, coupons, eligibility requirements, expiry dates, usage restrictions, and cancellation/refund treatment for promotional transactions.</p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-sm">2.9 User Account & Account Deletion Policy</h3>
              <p className="text-xs md:text-sm">This policy explains account creation, account responsibilities, account security, suspension, termination, and account deletion requests.</p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-sm">2.10 Location & Notification Policy</h3>
              <p className="text-xs md:text-sm">This policy explains the use of location information and device notifications where such permissions are requested or enabled by the user.</p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-sm">2.11 Acceptable Use & Customer Conduct Policy</h3>
              <p className="text-xs md:text-sm">Users must use DigiSaloon responsibly and must not:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm pt-1">
                <li>Provide intentionally false information</li>
                <li>Create fraudulent bookings</li>
                <li>Abuse salon partners or staff</li>
                <li>Manipulate reviews or ratings</li>
                <li>Attempt unauthorized access</li>
                <li>Misuse promotional offers</li>
                <li>Interfere with platform operations</li>
                <li>Use DigiSaloon for unlawful purposes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section id="sec-gp-3" className="space-y-4 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. SALON PARTNER POLICIES</h2>
          
          <div className="space-y-3 pl-2 border-l-2 border-slate-200">
            <div>
              <h3 className="font-bold text-slate-800 text-sm">3.1 Salon Partner Terms & Conditions</h3>
              <p className="text-xs md:text-sm">These terms govern the relationship between DigiSaloon and salon partners using the platform.</p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-sm">3.2 Partner Onboarding & Verification Policy</h3>
              <p className="text-xs md:text-sm">This policy explains salon registration, information submission, verification, document requirements, service catalogue information, and account approval.</p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-sm">3.3 Partner Payout & Settlement Terms</h3>
              <p className="text-xs md:text-sm">This policy explains the settlement of applicable booking amounts to salon partners.</p>
              <p className="text-xs md:text-sm pt-1">The standard net booking amount attributable to the salon is ₹49 per booking, subject to successful payment, reconciliation, refunds, disputes, holds, or other applicable adjustments.</p>
              <p className="text-xs md:text-sm pt-1">Settlement may normally occur on the same day or next working day, subject to payment processing and reconciliation.</p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-sm">3.4 Partner Code of Conduct</h3>
              <p className="text-xs md:text-sm">Salon partners and their staff are expected to:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm pt-1">
                <li>Treat customers respectfully</li>
                <li>Provide services as listed</li>
                <li>Maintain professional conduct</li>
                <li>Avoid misleading information</li>
                <li>Protect customer information</li>
                <li>Maintain appropriate hygiene and service standards</li>
                <li>Follow applicable laws and regulations</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-sm">3.5 Partner Cancellation & No-Show Policy</h3>
              <p className="text-xs md:text-sm">This policy explains the responsibilities and consequences applicable when a salon partner cannot fulfill a confirmed appointment or when a customer does not attend an appointment.</p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-sm">3.6 Partner Service Standards Policy</h3>
              <p className="text-xs md:text-sm">Partners are expected to provide services consistently with the descriptions, prices, durations, and information displayed on DigiSaloon.</p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-sm">3.7 Partner Data & Privacy Policy</h3>
              <p className="text-xs md:text-sm">Salon partners must appropriately handle customer information received through DigiSaloon and must not misuse, disclose, sell, or unnecessarily retain customer information.</p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section id="sec-gp-4" className="space-y-4 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. BARBER, STAFF & MANAGE WEB POLICIES</h2>
          
          <div className="space-y-3 pl-2 border-l-2 border-slate-200">
            <div>
              <h3 className="font-bold text-slate-800 text-sm">4.1 Barber/Staff & Manage Web Policy</h3>
              <p className="text-xs md:text-sm">This policy governs the use of DigiSaloon's Manage Web and related tools by authorized salon staff.</p>
              <p className="text-xs md:text-sm pt-1">Staff members may use the system only for legitimate salon operations, including:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm pt-1">
                <li>Viewing applicable bookings</li>
                <li>Managing appointments</li>
                <li>Updating appointment status</li>
                <li>Managing assigned services</li>
                <li>Performing authorized operational tasks</li>
              </ul>
              <p className="text-xs md:text-sm pt-1 font-medium text-slate-800">Login credentials must not be shared with unauthorized persons.</p>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section id="sec-gp-5" className="space-y-4 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. ADMIN & INTERNAL POLICIES</h2>
          
          <div className="space-y-3 pl-2 border-l-2 border-slate-200">
            <div>
              <h3 className="font-bold text-slate-800 text-sm">5.1 Admin Panel Access & Internal Security Policy</h3>
              <p className="text-xs md:text-sm">This policy governs authorized access to DigiSaloon's administrative systems.</p>
              <p className="text-xs md:text-sm pt-1">Administrative access should be limited to authorized personnel based on their responsibilities.</p>
              <p className="text-xs md:text-sm pt-1">Unauthorized access, credential sharing, misuse of administrative privileges, and manipulation of platform data are prohibited.</p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-sm">5.2 Security & Incident Response Policy</h3>
              <p className="text-xs md:text-sm">This policy explains DigiSaloon's general approach to:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm pt-1">
                <li>Platform security</li>
                <li>Access control</li>
                <li>Security monitoring</li>
                <li>Incident identification</li>
                <li>Incident response</li>
                <li>Data protection</li>
                <li>Security improvements</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-sm">5.3 Data Protection, Retention & Deletion Policy</h3>
              <p className="text-xs md:text-sm">This policy explains how information may be retained, protected, deleted, or otherwise handled in accordance with operational, legal, security, and business requirements.</p>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section id="sec-gp-6" className="space-y-4 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. CONTENT & INTELLECTUAL PROPERTY POLICIES</h2>
          
          <div className="space-y-3 pl-2 border-l-2 border-slate-200">
            <div>
              <h3 className="font-bold text-slate-800 text-sm">6.1 Content Policy & Community Guidelines</h3>
              <p className="text-xs md:text-sm">Users and partners must not submit content that is:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm pt-1">
                <li>Illegal</li>
                <li>Threatening</li>
                <li>Abusive</li>
                <li>Harassing</li>
                <li>Fraudulent</li>
                <li>Misleading</li>
                <li>Infringing</li>
                <li>Harmful to the platform or its users</li>
              </ul>
              <p className="text-xs md:text-sm pt-1">DigiSaloon may take appropriate action against prohibited content.</p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-sm">6.2 Intellectual Property & Copyright Policy</h3>
              <p className="text-xs md:text-sm">DigiSaloon's name, branding, logos, software, website content, design elements, text, graphics, and other proprietary materials may be protected by applicable intellectual property laws.</p>
              <p className="text-xs md:text-sm pt-1">Unauthorized copying, reproduction, distribution, modification, or commercial use may be restricted.</p>
            </div>
          </div>
        </section>

        {/* Section 7 */}
        <section id="sec-gp-7" className="space-y-4 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. PAYMENT & THIRD-PARTY SERVICES</h2>
          
          <div className="space-y-3 pl-2 border-l-2 border-slate-200">
            <div>
              <h3 className="font-bold text-slate-800 text-sm">7.1 Third-Party Services & Payment Provider Policy</h3>
              <p className="text-xs md:text-sm">DigiSaloon may use third-party service providers for functions such as:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm pt-1">
                <li>Online payments</li>
                <li>Hosting</li>
                <li>Authentication</li>
                <li>Notifications</li>
                <li>Communication</li>
                <li>Analytics</li>
                <li>Maps/location services</li>
                <li>Other technical services</li>
              </ul>
              <p className="text-xs md:text-sm pt-1">Payment processing may be provided through Razorpay or another applicable payment provider.</p>
              <p className="text-xs md:text-sm pt-1">Third-party services may have their own terms, privacy policies, and processing practices.</p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-sm">7.2 Refund & Chargeback Policy</h3>
              <p className="text-xs md:text-sm">This policy explains how refunds, payment reversals, payment disputes, and chargeback-related matters may be handled.</p>
              <p className="text-xs md:text-sm pt-1">Customers should first contact DigiSaloon regarding a payment-related issue so that the transaction can be reviewed.</p>
            </div>
          </div>
        </section>

        {/* Section 8 */}
        <section id="sec-gp-8" className="space-y-4 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. LEGAL & COMPLIANCE POLICIES</h2>
          
          <div className="space-y-3 pl-2 border-l-2 border-slate-200">
            <div>
              <h3 className="font-bold text-slate-800 text-sm">8.1 Legal Disclaimer</h3>
              <p className="text-xs md:text-sm">The Legal Disclaimer explains the limitations of DigiSaloon's responsibility regarding information, third-party services, salon services, availability, technical interruptions, and other matters.</p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-sm">8.2 Grievance Redressal & Contact Policy</h3>
              <p className="text-xs md:text-sm">Customers and partners may contact DigiSaloon regarding complaints, grievances, disputes, account issues, payment concerns, privacy concerns, or other service-related matters.</p>
              <p className="text-xs md:text-sm pt-1">
                <strong>Email:</strong> <a href="mailto:support@digisaloon.in" className="text-red-600 hover:underline">support@digisaloon.in</a><br />
                <strong>Phone:</strong> <a href="tel:9973499471" className="text-red-600 hover:underline">9973499471</a>
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-sm">8.3 Dispute Resolution Policy</h3>
              <p className="text-xs md:text-sm">This policy explains the process for raising and resolving disputes between users, partners, and DigiSaloon where applicable.</p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-sm">8.4 Anti-Fraud Policy</h3>
              <p className="text-xs md:text-sm">DigiSaloon may take appropriate action against suspected fraudulent activities, including:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm pt-1">
                <li>Fake bookings</li>
                <li>Payment manipulation</li>
                <li>Coupon abuse</li>
                <li>Account misuse</li>
                <li>Fake reviews</li>
                <li>Identity misrepresentation</li>
                <li>Unauthorized access</li>
                <li>Other suspicious activities</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 9 */}
        <section id="sec-gp-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. CUSTOMER SUPPORT</h2>
          <p>DigiSaloon aims to provide support for issues relating to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Bookings</li>
            <li>Appointments</li>
            <li>Payments</li>
            <li>Refunds</li>
            <li>Salon partners</li>
            <li>Account access</li>
            <li>Reviews and ratings</li>
            <li>Technical issues</li>
            <li>Privacy concerns</li>
            <li>Complaints and grievances</li>
          </ul>
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-1 text-xs md:text-sm mt-2">
            <p className="font-bold text-slate-800">For assistance:</p>
            <p><strong>Email:</strong> <a href="mailto:support@digisaloon.in" className="text-red-600 hover:underline">support@digisaloon.in</a></p>
            <p><strong>Phone:</strong> <a href="tel:9973499471" className="text-red-600 hover:underline">9973499471</a></p>
          </div>
        </section>

        {/* Section 10 */}
        <section id="sec-gp-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. POLICY ACCEPTANCE</h2>
          <p>By using DigiSaloon's website, application, or services, users acknowledge that they are responsible for reviewing and following the policies applicable to their use of the platform.</p>
          <p>Salon partners and authorized staff members are also responsible for complying with the policies applicable to their roles.</p>
        </section>

        {/* Section 11 */}
        <section id="sec-gp-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. POLICY UPDATES</h2>
          <p>DigiSaloon may update, modify, replace, or introduce policies from time to time.</p>
          <p>Updated policies may be published on the DigiSaloon website, application, or other applicable platform.</p>
          <p>The Last Updated date shown on a policy page indicates when that policy was most recently updated.</p>
          <p>Users are encouraged to review applicable policies periodically.</p>
        </section>

        {/* Section 12 */}
        <section id="sec-gp-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. POLICY PRIORITY</h2>
          <p>Different policies may apply to different users, services, or activities.</p>
          <p>Where a specific policy addresses a particular subject, that policy should be read together with the general Terms & Conditions and other applicable DigiSaloon policies.</p>
        </section>

        {/* Section 13 */}
        <section id="sec-gp-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. IMPORTANT PAYMENT SUMMARY</h2>
          <p className="font-medium text-slate-800">For quick reference:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Online Booking Amount: <strong>₹50.19</strong></li>
            <li>Payment Gateway/Processing Fee: <strong>₹1.19</strong></li>
            <li>Net Booking Amount Attributable to Salon: <strong>₹49</strong></li>
            <li>Remaining Service Amount: Paid directly by the customer to the salon.</li>
          </ul>
          
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-2 mt-3 text-xs md:text-sm">
            <p className="font-bold text-slate-800">Example (For a service priced at ₹200):</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Online booking payment: <strong>₹50.19</strong></li>
              <li>Payment gateway fee: <strong>₹1.19</strong></li>
              <li>Net booking amount to salon: <strong>₹49</strong></li>
              <li>Remaining service amount paid at salon: <strong>₹151</strong></li>
              <li>Total amount paid by customer: <strong>₹201.19</strong></li>
            </ul>
            <p className="text-xs text-slate-500 pt-1">The ₹49 amount is not described as a separate DigiSaloon commission.</p>
          </div>
        </section>

        {/* Section 14 */}
        <section id="sec-gp-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. CONTACT INFORMATION</h2>
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
          <p className="pt-2">For policy-related questions, users may contact DigiSaloon through the above channels.</p>
          <p className="pt-2 text-xs text-slate-400 font-medium">© DigiSaloon. All Rights Reserved.</p>
        </section>

      </div>
    </div>
  );
};