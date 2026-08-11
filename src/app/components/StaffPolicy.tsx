import React from "react";

export const StaffPolicy: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Staff & Manage Web Policy
          </span>
          <span className="text-xs text-slate-400">Last Updated: 12 August 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          BARBER/STAFF & MANAGE WEB POLICY
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          This Barber/Staff & Manage Web Policy governs access and use of DigiSaloon's Manage Web platform by authorized salon owners, managers, barbers and staff members.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="staff-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. Purpose</h2>
          <p>The Manage Web platform may be used by authorized salon personnel to manage salon operations, including:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Appointments</li>
            <li>Customers</li>
            <li>Services</li>
            <li>Staff</li>
            <li>Salon availability</li>
            <li>Booking status</li>
            <li>Other authorized salon functions</li>
          </ul>
        </section>

        <section id="staff-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. Authorized Access</h2>
          <p>Only persons authorized by the salon owner or administrator may access the Manage Web platform.</p>
          <p>Access must not be provided to unauthorized individuals.</p>
        </section>

        <section id="staff-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. Staff Accounts</h2>
          <p>Where individual staff accounts are supported, each staff member should use their assigned account.</p>
          <p>Staff members must not:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Share login credentials</li>
            <li>Use another staff member's account</li>
            <li>Allow unauthorized persons to access their account</li>
          </ul>
        </section>

        <section id="staff-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. Role-Based Access</h2>
          <p>Different staff members may have different permissions depending on their assigned role.</p>
          <p>Access may include or be limited to:</p>
          <ul className="list-disc pl-5 space-y-1 mb-2">
            <li>Viewing appointments</li>
            <li>Managing appointments</li>
            <li>Viewing customer information</li>
            <li>Managing services</li>
            <li>Managing availability</li>
            <li>Managing staff information</li>
          </ul>
          <p className="text-xs text-slate-500">Staff must only use the permissions provided to them.</p>
        </section>

        <section id="staff-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. Owner Responsibility</h2>
          <p>The salon owner or authorized administrator is responsible for:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Creating or approving staff access</li>
            <li>Assigning appropriate roles</li>
            <li>Reviewing staff permissions</li>
            <li>Removing access when staff leave</li>
            <li>Protecting salon account information</li>
          </ul>
        </section>

        <section id="staff-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. Staff Responsibility</h2>
          <p>Authorized staff must use Manage Web only for legitimate salon operations.</p>
          <p>Staff must:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Follow salon instructions</li>
            <li>Maintain confidentiality</li>
            <li>Protect customer information</li>
            <li>Keep login credentials secure</li>
            <li>Report suspicious activity</li>
          </ul>
        </section>

        <section id="staff-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. Appointment Management</h2>
          <p>Authorized staff may manage appointments according to their assigned permissions.</p>
          <p>This may include:</p>
          <ul className="list-disc pl-5 space-y-1 mb-2">
            <li>Viewing bookings</li>
            <li>Confirming bookings</li>
            <li>Updating booking status</li>
            <li>Marking completed appointments</li>
            <li>Recording no-shows</li>
            <li>Managing cancellations</li>
          </ul>
          <p className="text-xs text-slate-500">Staff must enter accurate information.</p>
        </section>

        <section id="staff-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. No False Booking Updates</h2>
          <p>Staff must not intentionally:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Mark a cancelled booking as completed</li>
            <li>Mark a customer as a no-show when they attended</li>
            <li>Create fake bookings</li>
            <li>Modify booking information for fraudulent purposes</li>
            <li>Manipulate appointment records</li>
          </ul>
        </section>

        <section id="staff-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. Customer Information</h2>
          <p>Staff may have access to customer information necessary to provide salon services and manage appointments.</p>
          <p>Customer information must be:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Used only for legitimate purposes</li>
            <li>Kept confidential</li>
            <li>Not sold</li>
            <li>Not unnecessarily copied</li>
            <li>Not shared with unauthorized persons</li>
          </ul>
        </section>

        <section id="staff-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. Customer Communication</h2>
          <p>Staff may communicate with customers regarding legitimate appointment matters.</p>
          <p>Communication should remain professional and relevant to the booking or salon service.</p>
          <p>Harassment, threats or misuse of customer contact information is prohibited.</p>
        </section>

        <section id="staff-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. Customer Privacy</h2>
          <p>Staff must not disclose unnecessary customer information to:</p>
          <ul className="list-disc pl-5 space-y-1 mb-2">
            <li>Other customers</li>
            <li>Unauthorized staff</li>
            <li>External persons</li>
            <li>Unrelated businesses</li>
          </ul>
          <p className="text-xs text-slate-500">Staff should only access information necessary for their assigned responsibilities.</p>
        </section>

        <section id="staff-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. Service Management</h2>
          <p>Authorized staff may manage salon services where their role permits.</p>
          <p>Changes should accurately reflect the salon's actual:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Services</li>
            <li>Prices</li>
            <li>Duration</li>
            <li>Availability</li>
          </ul>
        </section>

        <section id="staff-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. Staff Availability</h2>
          <p>Where the platform supports staff scheduling, authorized personnel should maintain accurate staff availability.</p>
          <p>Unavailable staff should not be shown as available where doing so could create booking conflicts.</p>
        </section>

        <section id="staff-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. Booking Conflicts</h2>
          <p>Staff should monitor appointment schedules and promptly address conflicts.</p>
          <p>Staff must not intentionally create overlapping bookings that cannot reasonably be fulfilled.</p>
        </section>

        <section id="staff-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. No-Show Management</h2>
          <p>Staff may mark an appointment as a no-show only where the customer genuinely failed to attend according to the applicable booking rules.</p>
          <p>False no-show records are prohibited.</p>
        </section>

        <section id="staff-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. Cancellation Management</h2>
          <p>Staff may process cancellations according to DigiSaloon's applicable cancellation rules.</p>
          <p>Staff must not intentionally prevent a legitimate cancellation or manipulate cancellation records.</p>
        </section>

        <section id="staff-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. Payment Information</h2>
          <p>Staff may have access to limited payment or transaction information required for salon operations.</p>
          <p>Staff must not request or store:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Customer UPI PIN</li>
            <li>Card PIN</li>
            <li>Banking password</li>
            <li>OTP</li>
          </ul>
        </section>

        <section id="staff-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. Account Security</h2>
          <p>Staff must:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Keep passwords confidential</li>
            <li>Protect devices used to access Manage Web</li>
            <li>Avoid using unauthorized devices where reasonably possible</li>
            <li>Log out when appropriate</li>
            <li>Report unauthorized access</li>
          </ul>
        </section>

        <section id="staff-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. Staff Leaving the Salon</h2>
          <p>When a staff member leaves or is no longer authorized to access salon systems, the salon owner or administrator should promptly disable or remove the staff member's access.</p>
        </section>

        <section id="staff-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">20. Prohibited Activities</h2>
          <p>Staff must not:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Access another salon's account</li>
            <li>Modify unauthorized information</li>
            <li>Copy customer databases</li>
            <li>Export customer information without authorization</li>
            <li>Manipulate bookings</li>
            <li>Manipulate reviews</li>
            <li>Misuse payment information</li>
            <li>Circumvent security controls</li>
            <li>Attempt unauthorized system access</li>
            <li>Use the platform for unlawful purposes</li>
          </ul>
        </section>

        <section id="staff-21" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">21. Monitoring and Logs</h2>
          <p>DigiSaloon may maintain technical and activity logs relating to Manage Web usage for purposes including:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Security, Fraud prevention, Troubleshooting</li>
            <li>Service improvement, Dispute resolution, Legal compliance</li>
          </ul>
        </section>

        <section id="staff-22" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">22. Security Incidents</h2>
          <p>Staff should immediately report suspected account compromise, unauthorized access, data exposure, suspicious activity, or security vulnerabilities to the salon administrator and/or DigiSaloon.</p>
          <p>Email: <a href="mailto:support@digisaloon.in" className="text-red-700 hover:underline">support@digisaloon.in</a></p>
        </section>

        <section id="staff-23" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">23. Suspension of Staff Access</h2>
          <p>DigiSaloon or the salon administrator may restrict staff access where reasonably necessary due to security concerns, policy violations, unauthorized activity, fraud, or misuse of customer information.</p>
        </section>

        <section id="staff-24" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">24. Salon Responsibility</h2>
          <p>The salon remains responsible for managing its authorized staff and ensuring that staff use DigiSaloon systems appropriately.</p>
        </section>

        <section id="staff-25" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">25. Relationship With Partner Terms</h2>
          <p>This Policy should be read together with Salon Partner Terms & Conditions, Partner Onboarding & Verification Policy, Partner Service, Pricing & Cancellation Policy, Partner Payout & Settlement Terms, Security & Responsible Disclosure Policy, and Privacy Policy.</p>
        </section>

        <section id="staff-26" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">26. Policy Updates</h2>
          <p>DigiSaloon may update this Policy to reflect changes in Manage Web functionality, staff roles, security requirements, booking systems, or applicable legal requirements.</p>
        </section>

        <section id="staff-27" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">27. Contact</h2>
          <p>For Manage Web or staff-access concerns:</p>
          <div className="bg-slate-900 text-slate-200 p-5 rounded-xl space-y-2 text-xs md:text-sm">
            <p className="font-bold text-white text-base">DigiSaloon</p>
            <p><strong>Email:</strong> <a href="mailto:support@digisaloon.in" className="text-red-400 hover:underline font-mono">support@digisaloon.in</a></p>
            <p><strong>Phone:</strong> 9973499471</p>
            <p><strong>Address:</strong> Angara, Ranchi, Jharkhand – 835103</p>
            <p><strong>Website:</strong> digisaloon.in</p>
          </div>
        </section>

      </div>
    </div>
  );
};