import React from "react";

export const LocationNotificationPolicy: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Location & Notification Policy
          </span>
          <span className="text-xs text-slate-400">Last Updated: 21 September 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          LOCATION & NOTIFICATION POLICY
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          This Location & Notification Policy explains how DigiSaloon may use location-related information and send notifications when users access or use the DigiSaloon website, mobile application, and related services.
        </p>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          By using DigiSaloon services and enabling applicable permissions, you acknowledge the practices described in this Policy.
        </p>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          This Policy should be read together with the DigiSaloon Privacy Policy, Terms & Conditions, User Account & Account Deletion Policy, Booking & Appointment Policy, and other applicable policies.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="loc-notif-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. Purpose of This Policy</h2>
          <p>DigiSaloon may use location and notification features to improve the booking experience and provide relevant service-related information.</p>
          <p>These features may help DigiSaloon with:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Showing relevant salons</li>
            <li>Providing location-based salon information</li>
            <li>Supporting booking-related communication</li>
            <li>Sending appointment reminders</li>
            <li>Sending booking status updates</li>
            <li>Communicating important account information</li>
            <li>Providing promotional communications where permitted</li>
          </ul>
        </section>

        <section id="loc-notif-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. Location Permission</h2>
          <p>The DigiSaloon mobile application may request access to the device's location information where a location-based feature requires it.</p>
          <p>Location permission is controlled through the user's device settings.</p>
          <p>Users may choose whether to grant or deny location permission, subject to the functionality of the relevant DigiSaloon feature.</p>
        </section>

        <section id="loc-notif-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. How DigiSaloon May Use Location Information</h2>
          <p>Where location access is enabled, DigiSaloon may use location information for purposes such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Identifying salons near the user's selected location</li>
            <li>Improving salon discovery</li>
            <li>Providing location-relevant search results</li>
            <li>Supporting location-based features</li>
            <li>Improving the accuracy of applicable platform functionality</li>
            <li>Detecting or preventing certain location-related misuse where reasonably necessary</li>
          </ul>
          <p className="pt-2">DigiSaloon will use location information for legitimate purposes consistent with this Policy and the Privacy Policy.</p>
        </section>

        <section id="loc-notif-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. User-Controlled Location Access</h2>
          <p>Users can generally manage location permissions through their device's operating-system settings.</p>
          <p>Depending on the device and operating system, users may be able to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Allow location access</li>
            <li>Deny location access</li>
            <li>Allow access only while using the application</li>
            <li>Change location permissions later</li>
          </ul>
          <p className="pt-2">Changing or disabling location permission may affect features that depend on location information.</p>
        </section>

        <section id="loc-notif-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. Manual Location Selection</h2>
          <p>Where available, users may be able to select or enter a location manually instead of relying on device location.</p>
          <p>The availability of manual location selection may depend on the DigiSaloon application version and features available at the relevant time.</p>
        </section>

        <section id="loc-notif-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. Location Accuracy</h2>
          <p>Location information obtained from a device may not always be completely accurate.</p>
          <p>Factors such as GPS availability, network connectivity, device settings, indoor environments, and operating-system limitations may affect location accuracy.</p>
          <p>Users should verify salon location and other important booking details before making an appointment.</p>
        </section>

        <section id="loc-notif-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. Background Location</h2>
          <p>DigiSaloon does not intend to use continuous background location access unless a specific feature requires such functionality and the applicable permission and disclosures are provided.</p>
          <p>If a feature requires background location access in the future, DigiSaloon may provide appropriate information and request the applicable permission before using such functionality.</p>
        </section>

        <section id="loc-notif-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. Location and Salon Discovery</h2>
          <p>Location information may be used to help users discover salons based on proximity or selected location.</p>
          <p>The displayed results may also depend on:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Salon availability</li>
            <li>Service availability</li>
            <li>Search filters</li>
            <li>User-selected preferences</li>
            <li>Platform data</li>
            <li>Network or technical conditions</li>
          </ul>
          <p className="pt-2">Location-based results should not be interpreted as a guarantee of salon availability.</p>
        </section>

        <section id="loc-notif-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. Location Data and Privacy</h2>
          <p>The collection and handling of location information is subject to the DigiSaloon Privacy Policy.</p>
          <p>DigiSaloon will seek to use location information only for legitimate and disclosed purposes and will apply reasonable safeguards to protect information handled through its services.</p>
        </section>

        {/* Notification Policy Section Header */}
        <div className="pt-6 border-t border-slate-200">
          <h2 className="text-xl font-extrabold text-slate-900">NOTIFICATION POLICY</h2>
        </div>

        <section id="loc-notif-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. Notification Permission</h2>
          <p>The DigiSaloon mobile application may request permission to send notifications to the user's device.</p>
          <p>Users may choose whether to allow notifications, subject to the notification controls provided by their device and operating system.</p>
        </section>

        <section id="loc-notif-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. Types of Notifications</h2>
          <p>DigiSaloon may send different types of notifications, including:</p>
          
          <div className="space-y-3 pt-2">
            <h3 className="font-semibold text-slate-800">A. Booking Notifications</h3>
            <p>These may include:</p>
            <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
              <li>Booking confirmation</li>
              <li>Booking status</li>
              <li>Booking acceptance or rejection</li>
              <li>Booking cancellation</li>
              <li>Booking changes</li>
              <li>Other booking-related updates</li>
            </ul>

            <h3 className="font-semibold text-slate-800 pt-2">B. Appointment Notifications</h3>
            <p>These may include:</p>
            <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
              <li>Upcoming appointment reminders</li>
              <li>Appointment timing information</li>
              <li>Important appointment updates</li>
              <li>Schedule-related reminders</li>
            </ul>

            <h3 className="font-semibold text-slate-800 pt-2">C. Payment Notifications</h3>
            <p>Where applicable, notifications may relate to:</p>
            <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
              <li>Booking payment status</li>
              <li>Payment confirmation</li>
              <li>Payment failure</li>
              <li>Refund status</li>
              <li>Other payment-related information</li>
            </ul>

            <h3 className="font-semibold text-slate-800 pt-2">D. Account and Security Notifications</h3>
            <p>These may include:</p>
            <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
              <li>Account-related updates</li>
              <li>Security alerts</li>
              <li>Important account activity</li>
              <li>Authentication or verification-related information</li>
            </ul>

            <h3 className="font-semibold text-slate-800 pt-2">E. Service Notifications</h3>
            <p>DigiSaloon may send notifications relating to important changes or information about the platform, services, or applicable policies.</p>

            <h3 className="font-semibold text-slate-800 pt-2">F. Promotional Notifications</h3>
            <p>Where permitted and subject to applicable user preferences, DigiSaloon may send:</p>
            <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
              <li>Offers</li>
              <li>Coupons</li>
              <li>Discounts</li>
              <li>Promotional campaigns</li>
              <li>New feature announcements</li>
              <li>Other marketing communications</li>
            </ul>
          </div>
        </section>

        <section id="loc-notif-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. Transactional vs Promotional Notifications</h2>
          <p>Not all notifications are promotional.</p>
          <p>Transactional or service-related notifications may be necessary to provide a requested service, such as booking confirmation, appointment updates, payment status, or security alerts.</p>
          <p>Promotional notifications may be subject to applicable communication preferences and device settings.</p>
        </section>

        <section id="loc-notif-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. Managing Notifications</h2>
          <p>Users can generally manage notification permissions through:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>DigiSaloon application settings, where available</li>
            <li>Device notification settings</li>
            <li>Operating-system settings</li>
          </ul>
          <p className="pt-2">Disabling notifications may prevent users from receiving certain timely updates.</p>
          <p>Users remain responsible for checking their bookings and appointments even if notifications are disabled.</p>
        </section>

        <section id="loc-notif-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. Important Service Notifications</h2>
          <p>DigiSaloon may continue to send certain important service, transaction, security, or account-related communications where reasonably necessary, even if a user has disabled promotional notifications.</p>
          <p>Examples may include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Security alerts</li>
            <li>Booking-related communications</li>
            <li>Payment-related communications</li>
            <li>Refund-related communications</li>
            <li>Account-related notices</li>
            <li>Important policy or service information</li>
          </ul>
        </section>

        <section id="loc-notif-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. Promotional Notifications</h2>
          <p>Promotional notifications may include information about:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Offers</li>
            <li>Coupons</li>
            <li>Discounts</li>
            <li>Salon promotions</li>
            <li>New DigiSaloon features</li>
            <li>Promotional campaigns</li>
          </ul>
          <p className="pt-2">Users may be able to manage or opt out of promotional communications through available settings or communication controls.</p>
        </section>

        <section id="loc-notif-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. Notification Accuracy and Timing</h2>
          <p>Notification delivery may depend on:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Internet connectivity</li>
            <li>Device settings</li>
            <li>Operating-system restrictions</li>
            <li>Application permissions</li>
            <li>Notification service availability</li>
            <li>Technical issues</li>
            <li>Third-party notification infrastructure</li>
          </ul>
          <p className="pt-2">DigiSaloon does not guarantee that every notification will be delivered instantly or without interruption.</p>
          <p>Users should not rely solely on notifications for critical appointment or payment information.</p>
        </section>

        <section id="loc-notif-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. Third-Party Notification Services</h2>
          <p>DigiSaloon may use third-party technology or service providers to deliver notifications.</p>
          <p>Such services may process limited technical information required to deliver the notification.</p>
          <p>DigiSaloon will seek to use appropriate service providers and safeguards consistent with its Privacy Policy.</p>
        </section>

        <section id="loc-notif-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. Notification Content</h2>
          <p>Notifications may contain limited information necessary to communicate the relevant event.</p>
          <p>For security and privacy reasons, DigiSaloon may avoid displaying sensitive information in notifications where reasonably appropriate.</p>
          <p>Users should also protect access to notifications displayed on their devices, particularly on shared or unlocked devices.</p>
        </section>

        <section id="loc-notif-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. Device and Operating-System Controls</h2>
          <p>Notification and location functionality may vary depending on the user's:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Device</li>
            <li>Operating system</li>
            <li>Application version</li>
            <li>Permission settings</li>
            <li>Network connection</li>
            <li>Device security settings</li>
          </ul>
          <p className="pt-2">DigiSaloon cannot control all device-level restrictions imposed by third-party operating systems.</p>
        </section>

        <section id="loc-notif-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">20. Disabling Location or Notifications</h2>
          <p>Users may disable location or notification permissions at any time through their device settings, subject to available controls.</p>
          <p>Disabling these permissions may affect certain DigiSaloon features.</p>
          <p>For example, disabling location access may affect location-based salon discovery, while disabling notifications may prevent appointment reminders or booking updates from appearing as push notifications.</p>
        </section>

        <section id="loc-notif-21" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">21. Children and Minimum Age</h2>
          <p>DigiSaloon services are intended for users who meet the minimum age requirement specified by DigiSaloon.</p>
          <p>The minimum user age for DigiSaloon is 18 years.</p>
          <p>DigiSaloon does not intentionally design its location and notification features for users below the applicable minimum age.</p>
        </section>

        <section id="loc-notif-22" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">22. Location and Notification Security</h2>
          <p>DigiSaloon uses reasonable technical and organizational safeguards to protect information handled through its services.</p>
          <p>However, no electronic system, network, device, or method of transmission can be guaranteed to be completely secure.</p>
          <p>Users should keep their devices, operating systems, and DigiSaloon accounts appropriately secured.</p>
        </section>

        <section id="loc-notif-23" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">23. Changes to Location Features</h2>
          <p>DigiSaloon may introduce, modify, or discontinue location-based features from time to time.</p>
          <p>If a new feature requires additional permissions or materially changes how location information is used, DigiSaloon may provide appropriate information and request permissions where required.</p>
        </section>

        <section id="loc-notif-24" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">24. Changes to Notification Features</h2>
          <p>DigiSaloon may modify its notification categories, communication methods, or notification settings as its platform develops.</p>
          <p>The availability of particular notification controls may vary between application versions and devices.</p>
        </section>

        <section id="loc-notif-25" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">25. Relationship With Privacy Policy</h2>
          <p>The DigiSaloon Privacy Policy provides additional information about the collection, use, storage, protection, and sharing of personal information, including applicable location-related information.</p>
          <p>In case of any conflict relating specifically to personal data handling, the applicable provisions of the Privacy Policy and applicable law will govern.</p>
        </section>

        <section id="loc-notif-26" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">26. Relationship With Other Policies</h2>
          <p>This Policy should be read together with the DigiSaloon:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>User Account & Account Deletion Policy</li>
            <li>Booking & Appointment Policy</li>
            <li>Cancellation & Refund Policy</li>
            <li>Payment & Settlement Policy</li>
            <li>Offers & Coupon Policy</li>
            <li>Security Policy</li>
            <li>Grievance Redressal & Contact Policy</li>
            <li>Legal Disclaimer</li>
          </ul>
        </section>

        <section id="loc-notif-27" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">27. Changes to This Policy</h2>
          <p>DigiSaloon may update this Location & Notification Policy from time to time to reflect changes in:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Platform features</li>
            <li>Device and operating-system requirements</li>
            <li>Notification functionality</li>
            <li>Location functionality</li>
            <li>Legal or regulatory requirements</li>
            <li>Security practices</li>
            <li>Business operations</li>
          </ul>
          <p className="pt-2">The updated version will be made available through the DigiSaloon website, application, or other appropriate channels.</p>
        </section>

        <section id="loc-notif-28" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">28. Contact Us</h2>
          <p>For questions, concerns, or requests relating to location permissions, notifications, or this Policy, please contact:</p>
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
          <p className="pt-2">By using DigiSaloon services, users acknowledge that location and notification features may operate according to the permissions and settings selected on their device.</p>
        </section>

      </div>
    </div>
  );
};