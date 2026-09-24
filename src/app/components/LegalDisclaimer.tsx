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
          <span className="text-xs text-slate-400">Last Updated: 21 September 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          LEGAL DISCLAIMER
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          This Legal Disclaimer explains the nature, scope, and limitations of the information and services provided by DigiSaloon through its website, mobile applications, partner platforms, and other digital services.
        </p>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          By accessing or using DigiSaloon, you acknowledge and agree to the terms described in this Legal Disclaimer.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="disclaimer-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. About DigiSaloon</h2>
          <p>DigiSaloon is a salon appointment booking platform that connects customers with participating salons and helps customers discover salons, view available services, and make appointments.</p>
          <p>DigiSaloon generally acts as a technology and booking platform and does not directly provide the salon services listed by independent salon partners.</p>
          <p>The actual salon service is provided by the respective salon.</p>
        </section>

        <section id="disclaimer-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. Independent Salon Partners</h2>
          <p>Salons listed on DigiSaloon are independent businesses or service providers.</p>
          <p>DigiSaloon does not own, operate, or control every salon listed on the platform unless expressly stated otherwise.</p>
          <p>Each salon is responsible for:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Its services</li>
            <li>Service quality</li>
            <li>Pricing</li>
            <li>Staff</li>
            <li>Availability</li>
            <li>Operating hours</li>
            <li>Hygiene and safety practices</li>
            <li>Licences and permissions applicable to its business</li>
            <li>Customer service</li>
            <li>Applicable taxes and invoices</li>
            <li>Information provided about its services</li>
          </ul>
          <p className="pt-2">Customers should contact the respective salon for matters relating specifically to the delivery or quality of salon services.</p>
        </section>

        <section id="disclaimer-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. Service Information</h2>
          <p>DigiSaloon attempts to display accurate and up-to-date information about salons and their services.</p>
          <p>However, information such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Prices</li>
            <li>Service descriptions</li>
            <li>Availability</li>
            <li>Operating hours</li>
            <li>Offers</li>
            <li>Images</li>
            <li>Service duration</li>
            <li>Salon information</li>
          </ul>
          <p className="pt-2">may be provided or updated by salon partners and may change from time to time.</p>
          <p>DigiSaloon does not guarantee that all information will always be complete, accurate, current, or error-free.</p>
        </section>

        <section id="disclaimer-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. No Guarantee of Service Availability</h2>
          <p>Displaying a salon or service on DigiSaloon does not guarantee that the service will always be available.</p>
          <p>Availability may change because of:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Existing bookings</li>
            <li>Salon operating hours</li>
            <li>Staff availability</li>
            <li>Temporary closure</li>
            <li>Technical issues</li>
            <li>Changes made by the salon</li>
          </ul>
          <p className="pt-2">A booking is considered confirmed only when the applicable booking confirmation is successfully generated through DigiSaloon.</p>
        </section>

        <section id="disclaimer-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. Booking Platform</h2>
          <p>DigiSaloon provides technology that facilitates salon appointment bookings.</p>
          <p>DigiSaloon does not guarantee that every booking will occur exactly as planned because circumstances outside DigiSaloon's direct control may affect a booking.</p>
          <p>These circumstances may include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Salon closure</li>
            <li>Staff unavailability</li>
            <li>Technical problems</li>
            <li>Internet or network problems</li>
            <li>Incorrect information provided by a salon</li>
            <li>Customer no-show</li>
            <li>Force majeure events</li>
            <li>Payment processing issues</li>
          </ul>
        </section>

        <section id="disclaimer-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. Payment Disclaimer</h2>
          <p>Online booking payments made through DigiSaloon may be processed by third-party payment service providers such as Razorpay.</p>
          <p>DigiSaloon does not control the banking or payment-processing systems operated by third-party providers.</p>
          <p>Payment processing may be affected by:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Bank systems</li>
            <li>UPI networks</li>
            <li>Card networks</li>
            <li>Payment gateways</li>
            <li>Internet connectivity</li>
            <li>Technical failures</li>
            <li>Banking holidays</li>
            <li>Other third-party systems</li>
          </ul>
          <p className="pt-2">The applicable Payment & Settlement Policy and Cancellation & Refund Policy govern payment and refund matters.</p>
        </section>

        <section id="disclaimer-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. Salon Service Disclaimer</h2>
          <p>DigiSaloon does not provide, supervise, or guarantee the actual salon service performed by an independent salon partner.</p>
          <p>The salon is responsible for performing its services appropriately and professionally.</p>
          <p>Any complaint concerning the actual salon service may be reported to DigiSaloon, and DigiSaloon may assist in communicating with the concerned salon where appropriate.</p>
          <p>However, DigiSaloon does not guarantee a particular service result or outcome.</p>
        </section>

        <section id="disclaimer-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. Reviews and Ratings</h2>
          <p>Reviews and ratings displayed on DigiSaloon may be submitted by customers or other permitted users.</p>
          <p>Reviews represent the experiences or opinions of the users who submitted them and do not necessarily represent the views of DigiSaloon.</p>
          <p>DigiSaloon may moderate or remove content that violates its Content Policy & Community Guidelines.</p>
        </section>

        <section id="disclaimer-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. Third-Party Services</h2>
          <p>DigiSaloon may use third-party services and technologies, including payment processors, cloud services, analytics services, communication services, mapping or location services, and other technology providers.</p>
          <p>DigiSaloon is not responsible for the independent operation, availability, policies, or practices of third-party services.</p>
          <p>Users should review the applicable terms and privacy policies of third-party providers where appropriate.</p>
        </section>

        <section id="disclaimer-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. External Links</h2>
          <p>DigiSaloon may provide links or references to third-party websites, applications, or services.</p>
          <p>Such links are provided for convenience or functionality.</p>
          <p>DigiSaloon does not necessarily endorse or control third-party websites or services and is not responsible for their:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Content</li>
            <li>Accuracy</li>
            <li>Availability</li>
            <li>Security</li>
            <li>Privacy practices</li>
            <li>Terms</li>
            <li>Products or services</li>
          </ul>
          <p className="pt-2">Users access third-party websites and services at their own discretion.</p>
        </section>

        <section id="disclaimer-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. Website and Application Availability</h2>
          <p>DigiSaloon aims to maintain reliable access to its website and applications.</p>
          <p>However, continuous or uninterrupted availability cannot be guaranteed.</p>
          <p>The platform may occasionally become unavailable because of:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Maintenance</li>
            <li>Updates</li>
            <li>Technical problems</li>
            <li>Server or cloud-service issues</li>
            <li>Network problems</li>
            <li>Security incidents</li>
            <li>Third-party service failures</li>
            <li>Circumstances beyond DigiSaloon's reasonable control</li>
          </ul>
        </section>

        <section id="disclaimer-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. Technical Information</h2>
          <p>Information displayed through DigiSaloon may occasionally contain technical errors, delays, inaccuracies, or interruptions.</p>
          <p>DigiSaloon may correct, modify, update, or remove information without prior notice where reasonably necessary.</p>
        </section>

        <section id="disclaimer-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. No Professional Advice</h2>
          <p>Information provided through DigiSaloon is intended primarily for general platform, salon, service, and booking purposes.</p>
          <p>Unless expressly stated otherwise, DigiSaloon does not provide:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Medical advice</li>
            <li>Dermatological advice</li>
            <li>Legal advice</li>
            <li>Financial advice</li>
            <li>Professional health advice</li>
          </ul>
          <p className="pt-2">Customers should consult an appropriately qualified professional for specialized advice.</p>
        </section>

        <section id="disclaimer-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. Health and Beauty Services</h2>
          <p>Some salon services may involve products, treatments, cosmetics, or procedures that may not be suitable for every individual.</p>
          <p>Customers should inform the salon about relevant allergies, sensitivities, or other concerns before receiving a service.</p>
          <p>The respective salon is responsible for providing appropriate information about its services and products.</p>
          <p>DigiSaloon does not guarantee that a particular salon service or product will be suitable for every customer.</p>
        </section>

        <section id="disclaimer-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. Pricing and Offers</h2>
          <p>Prices and promotional offers displayed on DigiSaloon may be provided by salon partners.</p>
          <p>DigiSaloon does not guarantee that a promotional offer will remain available for a particular period unless expressly stated.</p>
          <p>The applicable price and booking terms displayed at the time of booking will generally apply to the booking.</p>
        </section>

        <section id="disclaimer-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. Intellectual Property</h2>
          <p>The DigiSaloon name, branding, logos, website content, application interface, software, designs, graphics, and other proprietary materials may be protected by applicable intellectual-property laws.</p>
          <p>Users may not reproduce, copy, distribute, modify, or commercially exploit DigiSaloon's proprietary content without appropriate authorization, except where permitted by law.</p>
          <p>Third-party trademarks and logos remain the property of their respective owners.</p>
        </section>

        <section id="disclaimer-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. User-Generated Content</h2>
          <p>Users may submit reviews, ratings, images, comments, or other content to DigiSaloon.</p>
          <p>Users are responsible for ensuring that their submitted content is lawful and does not violate another person's rights.</p>
          <p>DigiSaloon may moderate, remove, or restrict content in accordance with its Content Policy & Community Guidelines.</p>
        </section>

        <section id="disclaimer-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. Limitation of Responsibility</h2>
          <p>To the extent permitted by applicable law, DigiSaloon is not responsible for losses or issues arising solely from matters outside its reasonable control, including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Actions or omissions of independent salons</li>
            <li>Incorrect information provided by salon partners</li>
            <li>Service quality or service outcomes</li>
            <li>Third-party payment failures</li>
            <li>Bank or UPI processing issues</li>
            <li>Internet or network failures</li>
            <li>Third-party service interruptions</li>
            <li>Events beyond DigiSaloon's reasonable control</li>
          </ul>
          <p className="pt-2">Nothing in this Disclaimer is intended to exclude or limit any liability that cannot legally be excluded or limited under applicable law.</p>
        </section>

        <section id="disclaimer-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. Force Majeure</h2>
          <p>DigiSaloon will not be responsible for delays or failures caused by circumstances beyond its reasonable control.</p>
          <p>Such circumstances may include natural disasters, government actions, public emergencies, infrastructure failures, widespread network outages, cyber incidents, strikes, or other events beyond reasonable control.</p>
        </section>

        <section id="disclaimer-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">20. No Guarantee</h2>
          <p>DigiSaloon does not guarantee that:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>The platform will always operate without interruption.</li>
            <li>All information will always be error-free.</li>
            <li>Every salon will remain available.</li>
            <li>Every salon service will meet a customer's expectations.</li>
            <li>Every booking will be completed without unexpected circumstances.</li>
            <li>Third-party services will always remain available.</li>
          </ul>
          <p className="pt-2">DigiSaloon will make reasonable efforts to maintain and improve its platform and services.</p>
        </section>

        <section id="disclaimer-21" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">21. Changes to This Disclaimer</h2>
          <p>DigiSaloon may update this Legal Disclaimer from time to time to reflect changes in its services, business operations, technology, or applicable legal requirements.</p>
          <p>The updated version will be published on the DigiSaloon website or application with the revised effective date.</p>
        </section>

        <section id="disclaimer-22" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">22. Related Policies</h2>
          <p>This Legal Disclaimer should be read together with DigiSaloon's other applicable policies, including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Cancellation & Refund Policy</li>
            <li>Payment & Settlement Policy</li>
            <li>Cookie Policy</li>
            <li>Content Policy & Community Guidelines</li>
            <li>Security Policy</li>
            <li>Other applicable DigiSaloon policies</li>
          </ul>
        </section>

        <section id="disclaimer-23" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">23. Contact Us</h2>
          <p>For questions or concerns regarding this Legal Disclaimer, please contact:</p>
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
          <p className="pt-2">By accessing or using DigiSaloon, you acknowledge that you have read and understood this Legal Disclaimer and agree to the applicable terms described herein.</p>
        </section>

      </div>
    </div>
  );
};