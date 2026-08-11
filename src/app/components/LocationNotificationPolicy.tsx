import React from "react";

export const LocationNotificationPolicy: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Location & Notification
          </span>
          <span className="text-xs text-slate-400">Last Updated: 11 August 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          LOCATION & NOTIFICATION POLICY
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          This Location & Notification Policy explains how DigiSaloon may use location information and send notifications through its applications and services.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="loc-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. Scope</h2>
          <p>This Policy applies to DigiSaloon:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>User App</li>
            <li>Partner App</li>
            <li>Partner Web App</li>
            <li>Manage Web App</li>
            <li>Website and other supported services</li>
          </ul>
        </section>

        <section id="loc-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. Location Services</h2>
          <p>DigiSaloon may use location information to provide location-based features.</p>
          <p>Location may help users:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Find nearby salons</li>
            <li>View salons based on location</li>
            <li>Calculate approximate distance</li>
            <li>View salon locations</li>
            <li>Get directions</li>
            <li>Improve location-based search</li>
          </ul>
        </section>

        <section id="loc-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. Location Permission</h2>
          <p>Where location access is required, the application may request permission through the device's operating system.</p>
          <p>Users can choose whether to grant location permission, subject to the functionality of the application.</p>
        </section>

        <section id="loc-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. If Location Permission Is Denied</h2>
          <p>If location permission is denied, certain location-based features may not work correctly.</p>
          <p>Users may still be able to search for salons manually or use other available features where supported.</p>
        </section>

        <section id="loc-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. Location Accuracy</h2>
          <p>Location information may not always be completely accurate.</p>
          <p>Accuracy may be affected by:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>GPS availability, Device settings, Network connection</li>
            <li>Indoor environments, Mapping services, Device capabilities</li>
          </ul>
          <p>Users should independently verify important directions and locations where necessary.</p>
        </section>

        <section id="loc-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. Background Location</h2>
          <p>DigiSaloon does not intend to continuously track a user's location in the background unless a specific feature requires such functionality and the applicable permission and legal requirements are satisfied.</p>
        </section>

        <section id="loc-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. Use of Location Information</h2>
          <p>Location information may be used for:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Nearby salon discovery, Search functionality, Distance calculation</li>
            <li>Map functionality, Directions, Improving location-based services</li>
          </ul>
          <p>Location information will be handled according to DigiSaloon's Privacy Policy.</p>
        </section>

        <section id="loc-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. Notifications</h2>
          <p>DigiSaloon may send notifications through:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Push notifications, SMS, Email, WhatsApp</li>
            <li>In-app notifications</li>
          </ul>
          <p>depending on the available communication channels and applicable service functionality.</p>
        </section>

        <section id="loc-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. Service Notifications</h2>
          <p>Service-related notifications may include:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Booking confirmation, Appointment reminders, Booking changes</li>
            <li>Cancellation notifications, Payment status, Refund updates</li>
            <li>Account and security alerts, Important service information</li>
          </ul>
          <p>These communications may be necessary to provide the requested service.</p>
        </section>

        <section id="loc-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. Promotional Notifications</h2>
          <p>Where permitted and applicable, DigiSaloon may send promotional communications relating to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Offers, Discounts, New services</li>
            <li>Salon promotions, DigiSaloon campaigns</li>
          </ul>
          <p>Users may be provided with options to manage promotional communications.</p>
        </section>

        <section id="loc-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. Managing Notifications</h2>
          <p>Users may be able to manage notification permissions through:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Device settings</li>
            <li>Application settings</li>
            <li>Communication preference controls</li>
          </ul>
          <p>Disabling notifications may prevent users from receiving certain timely updates.</p>
        </section>

        <section id="loc-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. Partner Notifications</h2>
          <p>Salon partners and authorized staff may receive operational notifications relating to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>New bookings, Booking changes, Cancellations</li>
            <li>Appointment reminders, Payment or settlement information</li>
            <li>Partner account information</li>
          </ul>
        </section>

        <section id="loc-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. Manage Web Notifications</h2>
          <p>Authorized staff using the Manage Web App may receive notifications or alerts related to appointment management and salon operations.</p>
        </section>

        <section id="loc-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. Communication Providers</h2>
          <p>DigiSaloon may use third-party providers to deliver communications through:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>SMS, WhatsApp, Email, Push notification infrastructure</li>
          </ul>
          <p>Such providers may process the information required to deliver the communication.</p>
        </section>

        <section id="loc-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. Security Notifications</h2>
          <p>DigiSaloon may send security-related notifications concerning:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Account access, Suspicious activity</li>
            <li>Password or authentication events, Important security changes</li>
          </ul>
          <p>Users should review such notifications promptly.</p>
        </section>

        <section id="loc-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. Personal Information</h2>
          <p>Location and communication-related information may be associated with a user's account or device.</p>
          <p>Such information will be handled according to DigiSaloon's Privacy Policy and applicable requirements.</p>
        </section>

        <section id="loc-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. No Guarantee of Delivery</h2>
          <p>DigiSaloon cannot guarantee that every notification will be delivered immediately or successfully.</p>
          <p>Delivery may be affected by:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Internet connectivity, Device settings, Operating system restrictions</li>
            <li>Mobile network, Email service, SMS provider</li>
            <li>WhatsApp service, Push notification infrastructure, Other third-party systems</li>
          </ul>
        </section>

        <section id="loc-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. Third-Party Services</h2>
          <p>DigiSaloon may rely on third-party services for:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Maps, Location, Push notifications</li>
            <li>SMS, WhatsApp, Email, Analytics</li>
          </ul>
          <p>Third-party services may have their own terms and privacy policies.</p>
        </section>

        <section id="loc-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. Policy Updates</h2>
          <p>DigiSaloon may update this Policy when its location functionality, notification systems, communication providers or applicable requirements change.</p>
          <p>The latest version may be published on the DigiSaloon website or application.</p>
        </section>

        <section id="loc-20" className="space-y-3 scroll-mt-24">
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