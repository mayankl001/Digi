import React from "react";

export const LegalDisclaimer: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Legal Disclaimer
          </span>
          <span className="text-xs text-slate-400">Last Updated: 11 August 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          LEGAL DISCLAIMER
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          This Legal Disclaimer explains the limitations applicable to DigiSaloon's website, applications and related services.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="legal-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. Platform Role</h2>
          <p>DigiSaloon is a technology platform that helps customers discover participating salons and make appointments.</p>
          <p>DigiSaloon generally acts as a platform connecting customers with independent salon partners.</p>
          <p>Unless expressly stated otherwise, DigiSaloon does not directly provide the salon services booked through the platform.</p>
        </section>

        <section id="legal-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. Salon Responsibility</h2>
          <p>Each salon partner is responsible for the services it provides, including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Service quality</li>
            <li>Hygiene and safety practices</li>
            <li>Staff and barber conduct</li>
            <li>Service availability</li>
            <li>Pricing</li>
            <li>Business information</li>
            <li>Appointment fulfillment</li>
            <li>Compliance with applicable laws</li>
          </ul>
          <p>DigiSaloon does not guarantee the quality, suitability or outcome of every service provided by an independent salon.</p>
        </section>

        <section id="legal-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. Salon Information</h2>
          <p>Salon information displayed on DigiSaloon may be provided or updated by salon partners.</p>
          <p>Although DigiSaloon may take reasonable steps to maintain accurate information, we do not guarantee that all information will always be:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Complete</li>
            <li>Accurate</li>
            <li>Current</li>
            <li>Error-free</li>
          </ul>
          <p>Customers should verify important details where necessary.</p>
        </section>

        <section id="legal-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. Prices and Offers</h2>
          <p>Prices, services, availability and promotional offers may change.</p>
          <p>DigiSaloon does not guarantee that a salon's information will remain unchanged after it has been displayed.</p>
          <p>The price and service information shown for a confirmed booking should generally apply to that booking, subject to the applicable booking terms.</p>
        </section>

        <section id="legal-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. Appointment Availability</h2>
          <p>Appointment availability depends on the salon's operating schedule and booking capacity.</p>
          <p>DigiSaloon does not guarantee that a particular salon, service or time slot will always be available.</p>
        </section>

        <section id="legal-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. Platform Availability</h2>
          <p>DigiSaloon aims to provide reliable services but does not guarantee uninterrupted or error-free operation.</p>
          <p>The platform may temporarily become unavailable because of:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Maintenance</li>
            <li>Technical problems</li>
            <li>Internet or network failures</li>
            <li>Cloud-service issues</li>
            <li>Payment-provider issues</li>
            <li>Security incidents</li>
            <li>Other circumstances beyond reasonable control</li>
          </ul>
        </section>

        <section id="legal-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. Payment Services</h2>
          <p>Online payments may be processed through third-party payment providers such as Razorpay.</p>
          <p>DigiSaloon does not control the operation of external banking systems, payment networks, card networks or UPI infrastructure.</p>
          <p>Payment processing may therefore be subject to third-party delays or failures.</p>
        </section>

        <section id="legal-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. Refunds</h2>
          <p>Eligible refunds are handled according to DigiSaloon's Cancellation & Refund Policy and Payment & Settlement Policy.</p>
          <p>Once a refund has been initiated, the time required for the amount to reach the customer's account may depend on the applicable payment provider or financial institution.</p>
        </section>

        <section id="legal-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. Location Information</h2>
          <p>Location information may not always be completely accurate.</p>
          <p>Accuracy may depend on:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>GPS</li>
            <li>Device settings</li>
            <li>Internet connectivity</li>
            <li>Mapping providers</li>
            <li>Network conditions</li>
          </ul>
          <p>Users should verify important location and travel information independently.</p>
        </section>

        <section id="legal-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. Reviews and Ratings</h2>
          <p>Reviews and ratings are submitted by users and represent their individual experiences or opinions.</p>
          <p>DigiSaloon does not necessarily endorse or verify every statement contained in a review.</p>
          <p>DigiSaloon may moderate or remove content that violates its policies.</p>
        </section>

        <section id="legal-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. Third-Party Services</h2>
          <p>DigiSaloon may use or integrate third-party services including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Payment providers</li>
            <li>Mapping services</li>
            <li>Communication providers</li>
            <li>Analytics services</li>
            <li>Cloud services</li>
            <li>Authentication providers</li>
            <li>Security services</li>
          </ul>
          <p>DigiSaloon is not responsible for independent third-party services outside its reasonable control.</p>
          <p>Users should review applicable third-party terms and privacy policies where appropriate.</p>
        </section>

        <section id="legal-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. External Links</h2>
          <p>DigiSaloon may provide links or references to third-party websites or services.</p>
          <p>Such links do not necessarily mean that DigiSaloon endorses or guarantees those third-party services.</p>
          <p>Users access external services at their own discretion.</p>
        </section>

        <section id="legal-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. User Responsibility</h2>
          <p>Users are responsible for:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Providing accurate information</li>
            <li>Maintaining account security</li>
            <li>Reviewing booking information</li>
            <li>Selecting appropriate services</li>
            <li>Following salon rules</li>
            <li>Following applicable laws</li>
            <li>Protecting confidential credentials</li>
          </ul>
        </section>

        <section id="legal-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. Salon Partner Responsibility</h2>
          <p>Salon partners are responsible for ensuring that their business, services, pricing, staff information and other information supplied to DigiSaloon are accurate and lawful.</p>
          <p>Partners are also responsible for complying with applicable laws and regulations relating to their business.</p>
        </section>

        <section id="legal-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. No Professional Advice</h2>
          <p>Information provided through DigiSaloon is generally intended for platform and service-related purposes.</p>
          <p>Unless expressly stated otherwise, DigiSaloon does not provide professional medical, legal, financial or other specialized advice.</p>
          <p>Users should seek appropriate qualified professional advice where required.</p>
        </section>

        <section id="legal-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. Security Disclaimer</h2>
          <p>DigiSaloon takes reasonable measures to protect its systems, but no online platform can guarantee absolute security.</p>
          <p>Users should maintain appropriate security practices and immediately report suspected unauthorized access.</p>
        </section>

        <section id="legal-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. Limitation of Responsibility</h2>
          <p>To the extent permitted by applicable law, DigiSaloon is not responsible for losses arising solely from circumstances outside its reasonable control, including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Independent salon actions or omissions</li>
            <li>Third-party payment failures</li>
            <li>Banking or network failures</li>
            <li>Third-party service outages</li>
            <li>Incorrect information supplied by users or salons</li>
            <li>Unauthorized activity occurring outside DigiSaloon's reasonable control</li>
          </ul>
          <p>Nothing in this Disclaimer is intended to exclude liability that cannot legally be excluded.</p>
        </section>

        <section id="legal-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. Changes to Information</h2>
          <p>DigiSaloon may update or modify platform information, features, services, pricing displays, availability and other content at any time.</p>
        </section>

        <section id="legal-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. Relationship With Other Policies</h2>
          <p>This Disclaimer should be read together with DigiSaloon's:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Cancellation & Refund Policy</li>
            <li>Payment & Settlement Policy</li>
            <li>Review & Rating Policy</li>
            <li>Other applicable policies</li>
          </ul>
        </section>

        <section id="legal-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">20. Governing Law</h2>
          <p>This Disclaimer is governed by the applicable laws of India.</p>
          <p>Subject to applicable law, disputes may be subject to the jurisdiction of the appropriate courts in Ranchi, Jharkhand, India.</p>
        </section>

        <section id="legal-21" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">21. Contact</h2>
          <p>For questions regarding this Legal Disclaimer:</p>
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