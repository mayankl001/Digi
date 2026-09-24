import React from "react";

export const StaffPolicy: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Barber/Staff & Manage Web Policy
          </span>
          <span className="text-xs text-slate-400">Last Updated: 21 September 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          BARBER/STAFF & MANAGE WEB POLICY
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          This Barber/Staff & Manage Web Policy (“Policy”) establishes the rules and responsibilities governing salon owners, managers, barbers, beauticians, employees, and other authorized staff members (“Staff”) who access or use DigiSaloon's Partner App, Manage Web, Partner Web App, or other authorized salon-management interfaces (“Manage Web/System”).
        </p>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          This Policy is intended to ensure secure, responsible, and appropriate use of DigiSaloon systems by salon Partners and their authorized Staff.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="staff-policy-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. PURPOSE</h2>
          <p>The purpose of this Policy is to establish rules relating to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Staff account access</li>
            <li>Manage Web access</li>
            <li>Staff permissions and responsibilities</li>
            <li>Booking management</li>
            <li>Customer information</li>
            <li>Appointment handling</li>
            <li>Service management</li>
            <li>Staff assignment</li>
            <li>Payment and settlement information</li>
            <li>Security and confidentiality</li>
            <li>Unauthorized access</li>
            <li>Staff conduct</li>
            <li>Account suspension and termination</li>
          </ul>
        </section>

        <section id="staff-policy-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. WHO THIS POLICY APPLIES TO</h2>
          <p>This Policy applies to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Salon owners</li>
            <li>Salon managers</li>
            <li>Barbers</li>
            <li>Beauticians</li>
            <li>Hair stylists</li>
            <li>Receptionists</li>
            <li>Front-desk staff</li>
            <li>Appointment coordinators</li>
            <li>Other salon employees</li>
            <li>Contractors or authorized representatives</li>
            <li>Any person granted access to the DigiSaloon Manage Web/System by a Partner</li>
          </ul>
          <p className="pt-2 font-medium text-slate-800">The salon Partner remains responsible for Staff members who are given access to DigiSaloon systems.</p>
        </section>

        <section id="staff-policy-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. MANAGE WEB</h2>
          <p>DigiSaloon may provide a Manage Web or similar management interface that allows authorized salon personnel to manage salon operations and DigiSaloon bookings.</p>
          <p>Depending on the permissions provided, the system may allow Staff to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>View bookings</li>
            <li>Accept or manage appointments</li>
            <li>View appointment details</li>
            <li>Manage booking status</li>
            <li>Assign Staff to appointments</li>
            <li>View relevant customer information</li>
            <li>Manage services</li>
            <li>Update availability</li>
            <li>View operational information</li>
            <li>Communicate booking-related information</li>
            <li>Access other features made available by DigiSaloon</li>
          </ul>
          <p className="pt-2">Features and permissions may vary depending on the Partner account and DigiSaloon system configuration.</p>
        </section>

        <section id="staff-policy-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. PARTNER RESPONSIBILITY</h2>
          <p>The salon Partner is responsible for ensuring that only authorized Staff members receive access to the Manage Web/System.</p>
          <p>The Partner must:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Give access only to trusted Staff</li>
            <li>Provide appropriate permissions</li>
            <li>Remove access when Staff leave the salon</li>
            <li>Keep login credentials secure</li>
            <li>Monitor Staff use of the system</li>
            <li>Report unauthorized access</li>
            <li>Ensure Staff follow this Policy</li>
          </ul>
        </section>

        <section id="staff-policy-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. STAFF ACCOUNT ACCESS</h2>
          <p>Each Staff member should use only the account or access credentials assigned to them.</p>
          <p>Staff must not:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Share passwords unnecessarily</li>
            <li>Share authentication codes</li>
            <li>Allow unauthorized persons to use their account</li>
            <li>Use another person's account</li>
            <li>Attempt to access restricted features</li>
            <li>Circumvent access controls</li>
          </ul>
          <p className="pt-2">DigiSaloon may implement different permission levels depending on the Staff role.</p>
        </section>

        <section id="staff-policy-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. STAFF ROLE AND PERMISSIONS</h2>
          <p>A Partner may provide different levels of access to different Staff members. For example:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Owner/Administrator</li>
            <li>Manager</li>
            <li>Receptionist</li>
            <li>Barber</li>
            <li>Beautician</li>
            <li>Appointment Staff</li>
            <li>Other authorized operational roles</li>
          </ul>
          <p className="pt-2">Access should be limited to information and functions reasonably required for the Staff member's role.</p>
        </section>

        <section id="staff-policy-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. STAFF ONBOARDING</h2>
          <p>Before granting system access, the Partner should ensure that the Staff member:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Is authorized to work for the salon</li>
            <li>Understands their responsibilities</li>
            <li>Understands basic account security requirements</li>
            <li>Understands customer privacy requirements</li>
            <li>Uses the system only for legitimate salon activities</li>
          </ul>
          <p className="pt-2">DigiSaloon may require additional verification or information where reasonably necessary.</p>
        </section>

        <section id="staff-policy-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. BOOKING MANAGEMENT</h2>
          <p>Authorized Staff may be permitted to manage DigiSaloon bookings on behalf of the salon. Depending on their permissions, Staff may:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>View booking information</li>
            <li>Accept bookings</li>
            <li>Update booking status</li>
            <li>Prepare for appointments</li>
            <li>Assign a suitable Staff member</li>
            <li>Mark applicable appointment stages</li>
            <li>Handle operational booking information</li>
          </ul>
          <p className="pt-2 font-medium text-slate-800">Staff must not intentionally manipulate booking information for personal benefit.</p>
        </section>

        <section id="staff-policy-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. LIVE BOOKINGS</h2>
          <p>For Live Bookings, authorized Staff should promptly monitor and respond to booking requests according to the salon's actual availability.</p>
          <p>Staff should not accept a booking when the salon cannot reasonably provide the selected service.</p>
          <p>Repeated acceptance followed by unnecessary cancellation may result in Partner review.</p>
        </section>

        <section id="staff-policy-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. SCHEDULE BOOKINGS</h2>
          <p>For Schedule Bookings, Staff should:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Review the appointment date and time</li>
            <li>Confirm service availability</li>
            <li>Ensure appropriate Staff availability</li>
            <li>Prepare for the appointment</li>
            <li>Avoid unnecessary cancellations</li>
            <li>Keep booking information accurate</li>
          </ul>
          <p className="pt-2">If the salon cannot fulfill a scheduled appointment, Staff should follow the applicable DigiSaloon cancellation procedure.</p>
        </section>

        <section id="staff-policy-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. APPOINTMENT STATUS</h2>
          <p>Staff must update booking status accurately. Staff must not falsely mark an appointment as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Accepted</li>
            <li>Completed</li>
            <li>Cancelled</li>
            <li>No-show</li>
            <li>In-progress</li>
            <li>Any other status</li>
          </ul>
          <p className="pt-2">unless the relevant event has actually occurred.</p>
        </section>

        <section id="staff-policy-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. STAFF ASSIGNMENT</h2>
          <p>Where DigiSaloon provides Staff assignment functionality, the salon may assign an appropriate barber, beautician, stylist, or other Staff member to a booking.</p>
          <p>The salon is responsible for ensuring that the assigned Staff member:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Is available</li>
            <li>Has appropriate skills for the selected service</li>
            <li>Is authorized by the salon</li>
            <li>Can reasonably provide the service</li>
          </ul>
        </section>

        <section id="staff-policy-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. CUSTOMER INFORMATION</h2>
          <p>Manage Web may display limited customer information necessary for fulfilling bookings. Such information may include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Customer name</li>
            <li>Booking details</li>
            <li>Appointment date and time</li>
            <li>Selected service</li>
            <li>Relevant booking status</li>
            <li>Contact information where necessary</li>
            <li>Other information required for appointment management</li>
          </ul>
          <p className="pt-2 font-medium text-slate-800">Staff must use customer information only for legitimate salon and booking-related purposes.</p>
        </section>

        <section id="staff-policy-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. CUSTOMER PRIVACY</h2>
          <p>Staff must not:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Copy customer information for personal use</li>
            <li>Sell customer information</li>
            <li>Share customer information with unauthorized persons</li>
            <li>Use customer contact information for unrelated marketing</li>
            <li>Contact customers for personal purposes</li>
            <li>Publish customer information without appropriate authorization</li>
            <li>Misuse customer photographs or other personal information</li>
          </ul>
          <p className="pt-2">Customer information must be handled responsibly and confidentially.</p>
        </section>

        <section id="staff-policy-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. CUSTOMER CONTACT</h2>
          <p>Where customer contact functionality is provided through DigiSaloon, Staff should use it only for legitimate purposes such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Appointment coordination</li>
            <li>Service clarification</li>
            <li>Arrival instructions</li>
            <li>Booking-related communication</li>
            <li>Necessary operational updates</li>
          </ul>
          <p className="pt-2 font-medium text-slate-800">Staff must not use DigiSaloon customer information to engage in harassment, spam, or unrelated personal communication.</p>
        </section>

        <section id="staff-policy-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. CUSTOMER SERVICE RESPONSIBILITY</h2>
          <p>Staff are responsible for providing appropriate customer service within the salon. Staff should:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Treat customers respectfully</li>
            <li>Provide the booked service appropriately</li>
            <li>Follow salon procedures</li>
            <li>Communicate relevant service information</li>
            <li>Handle reasonable customer questions</li>
            <li>Avoid misleading statements</li>
          </ul>
        </section>

        <section id="staff-policy-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. SERVICE INFORMATION</h2>
          <p>Staff must not intentionally provide false information about:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Service availability</li>
            <li>Service duration</li>
            <li>Service price</li>
            <li>Staff availability</li>
            <li>Appointment availability</li>
            <li>Salon facilities</li>
            <li>Promotions</li>
            <li>Booking status</li>
          </ul>
          <p className="pt-2">Changes to service information should be made only by authorized personnel.</p>
        </section>

        <section id="staff-policy-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. PAYMENT INFORMATION</h2>
          <p>Staff may have access to limited payment or booking-related information depending on their role. Staff must not:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Alter payment records without authorization</li>
            <li>Misrepresent payment status</li>
            <li>Claim a failed payment was successful</li>
            <li>Mark an unpaid service as paid without authorization</li>
            <li>Manipulate settlement information</li>
            <li>Request unauthorized DigiSaloon booking payments</li>
          </ul>
          <p className="pt-2">The salon remains responsible for amounts collected directly from customers at the salon.</p>
        </section>

        <section id="staff-policy-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. UNAUTHORIZED CHARGES</h2>
          <p>Staff must not impose unauthorized charges on customers by misrepresenting DigiSaloon fees, booking payments, or salon service prices.</p>
          <p>Any additional service or charge should be communicated clearly to the customer before payment.</p>
        </section>

        <section id="staff-policy-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">20. MANAGE WEB SECURITY</h2>
          <p>Staff must maintain the security of the devices and accounts used to access Manage Web. Recommended security practices include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Use strong passwords</li>
            <li>Keep login information private</li>
            <li>Lock devices when unattended</li>
            <li>Keep browsers and devices updated</li>
            <li>Avoid accessing accounts on unsafe shared devices</li>
            <li>Sign out when appropriate</li>
            <li>Report suspicious activity</li>
          </ul>
        </section>

        <section id="staff-policy-21" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">21. SHARED DEVICES</h2>
          <p>If Manage Web is accessed from a shared salon computer or tablet, Staff should take reasonable steps to prevent unauthorized access. This may include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Locking the device</li>
            <li>Signing out of the account when necessary</li>
            <li>Avoiding password saving where inappropriate</li>
            <li>Restricting physical access</li>
            <li>Using individual Staff accounts where available</li>
          </ul>
        </section>

        <section id="staff-policy-22" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">22. UNAUTHORIZED ACCESS</h2>
          <p>Staff must not attempt to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Access another salon's information</li>
            <li>Access another Staff member's account</li>
            <li>Bypass permission controls</li>
            <li>Access administrative systems without authorization</li>
            <li>Modify technical configurations without permission</li>
            <li>Access databases or systems outside their assigned functions</li>
          </ul>
          <p className="pt-2 text-red-600 font-medium">Unauthorized access may result in account restrictions and other appropriate action.</p>
        </section>

        <section id="staff-policy-23" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">23. SYSTEM MANIPULATION</h2>
          <p>Staff must not intentionally:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Manipulate bookings</li>
            <li>Create fake bookings</li>
            <li>Create duplicate accounts for abuse</li>
            <li>Manipulate customer records</li>
            <li>Manipulate reviews or ratings</li>
            <li>Manipulate payment information</li>
            <li>Circumvent booking restrictions</li>
            <li>Interfere with DigiSaloon's technical systems</li>
          </ul>
        </section>

        <section id="staff-policy-24" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">24. REVIEWS AND RATINGS</h2>
          <p>Staff must not create fake customer reviews or ratings for the salon. Staff must also not:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Ask customers to provide misleading reviews</li>
            <li>Threaten customers over negative reviews</li>
            <li>Offer unauthorized benefits in exchange for reviews</li>
            <li>Manipulate ratings</li>
            <li>Create multiple accounts to influence ratings</li>
          </ul>
          <p className="pt-2">Reviews and ratings must comply with DigiSaloon's Review & Rating Policy.</p>
        </section>

        <section id="staff-policy-25" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">25. CUSTOMER PHOTOS AND MEDIA</h2>
          <p>Staff must not photograph, record, store, or publish customer images, videos, or recordings for unrelated purposes without appropriate authorization. Particular care should be taken with:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Before/after photographs</li>
            <li>Personal conversations</li>
            <li>Identity documents</li>
            <li>Payment information</li>
            <li>Private customer communications</li>
          </ul>
        </section>

        <section id="staff-policy-26" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">26. PROHIBITED CONDUCT</h2>
          <p>Staff must not use DigiSaloon systems for:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Harassment</li>
            <li>Threats</li>
            <li>Abuse</li>
            <li>Discrimination</li>
            <li>Fraud</li>
            <li>Impersonation</li>
            <li>Spam</li>
            <li>Unauthorized advertising</li>
            <li>Illegal activities</li>
            <li>Privacy violations</li>
            <li>Security attacks</li>
            <li>Data theft</li>
            <li>Unauthorized commercial activity</li>
          </ul>
        </section>

        <section id="staff-policy-27" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">27. SOFTWARE AND AUTOMATION</h2>
          <p>Staff must not use unauthorized scripts, bots, automated tools, or software intended to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Create fake bookings</li>
            <li>Overload DigiSaloon systems</li>
            <li>Circumvent platform restrictions</li>
            <li>Extract customer information</li>
            <li>Manipulate booking availability</li>
            <li>Interfere with platform functionality</li>
          </ul>
        </section>

        <section id="staff-policy-28" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">28. STAFF OFFBOARDING</h2>
          <p>When a Staff member leaves the salon, changes role, is suspended, is no longer authorized, or loses access permission, the Partner should promptly remove or disable their DigiSaloon access.</p>
          <p>The Partner should also ensure that former Staff cannot continue accessing customer or booking information.</p>
        </section>

        <section id="staff-policy-29" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">29. LOST OR STOLEN DEVICE</h2>
          <p>If a device containing an active DigiSaloon session is lost or stolen, the Partner or Staff member should immediately:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Secure the account where possible.</li>
            <li>Sign out or revoke access where available.</li>
            <li>Change relevant credentials where necessary.</li>
            <li>Contact DigiSaloon support if unauthorized access may have occurred.</li>
          </ul>
        </section>

        <section id="staff-policy-30" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">30. SECURITY INCIDENT REPORTING</h2>
          <p>Staff and Partners should promptly report suspected unauthorized account access, password compromise, customer data exposure, suspicious bookings, payment manipulation, fraud, lost/stolen devices, security vulnerabilities, or unauthorized Staff access to DigiSaloon.</p>
        </section>

        <section id="staff-policy-31" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">31. MONITORING AND AUDIT</h2>
          <p>DigiSaloon may maintain technical records relating to the use of its systems, including relevant account activity, booking actions, and security events, subject to applicable law and DigiSaloon's Privacy Policy. Such records may be used for security, fraud prevention, troubleshooting, dispute resolution, platform improvement, and policy enforcement.</p>
        </section>

        <section id="staff-policy-32" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">32. PARTNER RESPONSIBILITY FOR STAFF ACTIONS</h2>
          <p>The Partner is responsible for managing Staff access and ensuring that Staff members understand applicable DigiSaloon rules.</p>
          <p>Where appropriate, actions performed through a Partner's authorized Staff access may be associated with that Partner account.</p>
        </section>

        <section id="staff-policy-33" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">33. ACCOUNT RESTRICTIONS</h2>
          <p>DigiSaloon may restrict, suspend, or disable Staff or Partner access where there is reasonable concern regarding security, fraud, unauthorized access, customer privacy, repeated policy violations, manipulation of bookings, misuse of platform features, or other prohibited conduct.</p>
        </section>

        <section id="staff-policy-34" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">34. CUSTOMER-SALON DISPUTES</h2>
          <p>Staff should not attempt to resolve serious disputes through threats, harassment, or unauthorized actions.</p>
          <p>Where a booking or payment dispute cannot be resolved directly, the Partner or customer may contact DigiSaloon support through the applicable grievance or support process.</p>
        </section>

        <section id="staff-policy-35" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">35. DATA RETENTION</h2>
          <p>Customer and booking information accessed through Manage Web may be retained according to DigiSaloon's applicable data-retention practices and legal requirements.</p>
          <p>Staff must not independently create unauthorized copies or personal databases containing DigiSaloon customer information.</p>
        </section>

        <section id="staff-policy-36" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">36. CONFIDENTIALITY</h2>
          <p>Information accessed through DigiSaloon systems may be confidential. Staff must protect customer information, booking information, partner information, payment-related information, business information, login credentials, and internal platform information. Confidential information must not be disclosed to unauthorized persons.</p>
        </section>

        <section id="staff-policy-37" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">37. TRAINING AND RESPONSIBLE USE</h2>
          <p>Partners are encouraged to provide Staff with appropriate instructions regarding Manage Web usage, booking management, customer privacy, account security, payment handling, service standards, and DigiSaloon policies.</p>
        </section>

        <section id="staff-policy-38" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">38. POLICY VIOLATIONS</h2>
          <p>Violation of this Policy may result in a warning, removal of Staff access, temporary suspension, permanent access restriction, partner account review, booking restrictions, or other appropriate action. Serious matters may also be handled in accordance with applicable law.</p>
        </section>

        <section id="staff-policy-39" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">39. NO TRANSFER OF ACCESS</h2>
          <p>Staff access must not be transferred or sold to another person. If another Staff member requires access, the Partner should provide authorized access through the appropriate DigiSaloon process.</p>
        </section>

        <section id="staff-policy-40" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">40. CHANGES TO THIS POLICY</h2>
          <p>DigiSaloon may update this Policy from time to time to reflect new Manage Web features, security improvements, operational changes, changes to Partner workflows, or legal/regulatory requirements. Updated versions may be published through DigiSaloon's website, Partner App, Manage Web, or other official communication channels.</p>
        </section>

        <section id="staff-policy-41" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">41. RELATED POLICIES</h2>
          <p>This Policy should be read together with:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Partner Terms & Conditions</li>
            <li>Partner Payout & Settlement Terms</li>
            <li>Partner Onboarding & Verification Policy</li>
            <li>Payment & Settlement Policy</li>
            <li>Booking & Appointment Policy</li>
            <li>Cancellation & Refund Policy</li>
            <li>Privacy Policy</li>
            <li>Security Policy</li>
            <li>Content Policy & Community Guidelines</li>
            <li>Review & Rating Policy</li>
            <li>Acceptable Use & Customer Conduct Policy</li>
            <li>Grievance Redressal & Contact Policy</li>
          </ul>
        </section>

        <section id="staff-policy-42" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">42. CONTACT INFORMATION</h2>
          <p>For Staff access, Manage Web, security, booking, or account-related concerns:</p>
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