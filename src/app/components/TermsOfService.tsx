import React from "react";

export const TermsOfService: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Terms & Conditions
          </span>
          <span className="text-xs text-slate-400">Last Updated: 21 September 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          TERMS & CONDITIONS
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          Welcome to DigiSaloon!
        </p>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          These Terms & Conditions (“Terms”) govern your access to and use of the DigiSaloon website, mobile application, salon partner applications, partner web platform, and related services.
        </p>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          By accessing or using DigiSaloon, you acknowledge that you have read, understood, and agreed to these Terms.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="terms-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. ABOUT DIGISALOON</h2>
          <p>DigiSaloon is a technology platform that connects customers with participating salon partners.</p>
          <p>Customers can use DigiSaloon to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Discover salons.</li>
            <li>View salon services.</li>
            <li>View service prices and details.</li>
            <li>Check available appointment slots.</li>
            <li>Make Live Bookings.</li>
            <li>Make Schedule Bookings.</li>
            <li>Manage bookings.</li>
            <li>Submit eligible ratings and reviews.</li>
          </ul>
          <p className="pt-2">DigiSaloon does not directly provide salon or beauty services. The actual services are provided by independent salon partners.</p>
        </section>

        <section id="terms-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. ELIGIBILITY</h2>
          <p>DigiSaloon services are available only to users who are 18 years of age or older.</p>
          <p>By using DigiSaloon, you confirm that:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>You are at least 18 years old.</li>
            <li>The information provided by you is accurate.</li>
            <li>You will use DigiSaloon only for lawful purposes.</li>
            <li>You will comply with these Terms and applicable laws.</li>
          </ul>
        </section>

        <section id="terms-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. USER ACCOUNT</h2>
          <p>Certain DigiSaloon features may require an account.</p>
          <p>You are responsible for:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Providing accurate information.</li>
            <li>Keeping your account information updated.</li>
            <li>Maintaining the confidentiality of your login credentials.</li>
            <li>All activities carried out through your account.</li>
          </ul>
          <p className="pt-2">You should contact DigiSaloon if you believe your account has been accessed without authorization.</p>
        </section>

        <section id="terms-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. SALON INFORMATION</h2>
          <p>DigiSaloon displays information about participating salons, including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Salon name.</li>
            <li>Location.</li>
            <li>Services.</li>
            <li>Service prices.</li>
            <li>Service duration.</li>
            <li>Available appointment slots.</li>
            <li>Images.</li>
            <li>Ratings and reviews.</li>
          </ul>
          <p className="pt-2">Salon information may be provided or updated by salon partners.</p>
          <p>While DigiSaloon aims to maintain accurate information, prices, availability, services, images, and other details may change from time to time.</p>
        </section>

        <section id="terms-5" className="space-y-4 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. BOOKINGS</h2>
          <p>DigiSaloon may provide two types of bookings:</p>
          
          <div className="space-y-4 pt-2">
            <div className="p-4 border border-slate-200 rounded-lg bg-slate-50/50 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">Live Booking</h3>
              <p>Live Booking is intended for immediate or near-immediate services.</p>
              <p>Once a Live Booking is confirmed:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
                <li>Customer cancellation is not allowed.</li>
                <li>No refund is provided for customer-initiated cancellation.</li>
              </ul>
            </div>

            <div className="p-4 border border-slate-200 rounded-lg bg-slate-50/50 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">Schedule Booking</h3>
              <p>Schedule Booking allows customers to select a future appointment date and time.</p>
              <p>Customers may cancel a Schedule Booking 1 hour or more before the appointment, subject to the Cancellation & Refund Policy.</p>
              <p>If less than 1 hour remains before the appointment, cancellation is not allowed.</p>
            </div>
          </div>
        </section>

        <section id="terms-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. BOOKING PAYMENT</h2>
          <p>DigiSaloon requires the customer to pay the applicable booking amount through the platform at the time of booking.</p>
          <p>The applicable booking amount may be ₹50.19, subject to the service and booking terms displayed on the platform.</p>
          <p>The booking payment does not necessarily represent the complete price of the salon service.</p>
        </section>

        <section id="terms-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. REMAINING SERVICE PAYMENT</h2>
          <p>Where the total service price is higher than the booking amount paid through DigiSaloon, the remaining amount must be paid directly to the salon after the service is provided.</p>
          <p>For example:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Service Price: ₹200</li>
            <li>Paid through DigiSaloon: ₹50.19</li>
            <li>Remaining amount payable at salon: ₹151</li>
            <li>Total customer payment: ₹201.19</li>
          </ul>
          <p className="pt-2">The final amount payable at the salon may vary if the customer selects additional services or changes the services requested.</p>
        </section>

        <section id="terms-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. PAYMENT GATEWAY</h2>
          <p>Online booking payments may be processed through Razorpay or another payment service provider integrated with DigiSaloon.</p>
          <p>Payment processing is subject to the applicable payment provider's terms and policies.</p>
          <p>DigiSaloon does not intend to store complete payment card details such as full card numbers or CVV details on its own servers.</p>
        </section>

        <section id="terms-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. PAYMENT CONFIRMATION</h2>
          <p>A booking is considered confirmed only after the required booking and payment confirmation is successfully received by DigiSaloon.</p>
          <p>A deduction from a customer's bank account does not necessarily mean that the booking has been successfully confirmed.</p>
          <p>If a payment is deducted but the booking is not created, DigiSaloon may verify the transaction and process the applicable refund or reversal.</p>
        </section>

        <section id="terms-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. CANCELLATION & REFUND</h2>
          <p>Cancellation and refund rules are governed by the DigiSaloon Cancellation & Refund Policy.</p>
          <p>The current rules include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Live Booking: Customer cancellation is not allowed and no refund is provided.</li>
            <li>Schedule Booking: Cancellation is allowed 1 hour or more before the appointment.</li>
            <li>Eligible Schedule Booking cancellation: ₹50.19 booking amount → ₹1.19 payment gateway fee → ₹49 refund.</li>
            <li>Refund is generally credited within 5–7 working days.</li>
            <li>Schedule Booking cancellation with less than 1 hour remaining: No cancellation and no refund.</li>
          </ul>
          <p className="pt-2">The complete rules are provided in the Cancellation & Refund Policy.</p>
        </section>

        <section id="terms-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. SALON CANCELLATION</h2>
          <p>If a salon cancels a confirmed booking, the customer may be eligible for a refund of the applicable booking amount paid through DigiSaloon.</p>
          <p>The refund will be processed through the applicable payment method or payment gateway.</p>
        </section>

        <section id="terms-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. SALON SERVICES</h2>
          <p>The actual salon services are provided by the respective salon partner.</p>
          <p>DigiSaloon is not the service provider and does not directly control:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Service quality.</li>
            <li>Salon staff.</li>
            <li>Salon operations.</li>
            <li>Hygiene practices.</li>
            <li>Service results.</li>
            <li>Availability of individual salon staff.</li>
            <li>Additional services requested directly by customers.</li>
          </ul>
          <p className="pt-2">Customers should contact the relevant salon regarding service-specific concerns.</p>
        </section>

        <section id="terms-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. CUSTOMER RESPONSIBILITIES</h2>
          <p>Customers agree to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Provide accurate booking information.</li>
            <li>Select the correct salon, service, date, and time.</li>
            <li>Arrive at the salon according to the confirmed appointment.</li>
            <li>Follow reasonable salon rules.</li>
            <li>Pay the remaining service amount directly to the salon.</li>
            <li>Not create fraudulent bookings.</li>
            <li>Not misuse promotional offers.</li>
            <li>Not provide false information.</li>
            <li>Not interfere with DigiSaloon's systems or services.</li>
          </ul>
        </section>

        <section id="terms-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. SALON PARTNER RESPONSIBILITIES</h2>
          <p>Salon partners are responsible for:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Providing accurate salon information.</li>
            <li>Maintaining accurate service information.</li>
            <li>Maintaining accurate availability.</li>
            <li>Honouring confirmed bookings.</li>
            <li>Providing the booked services.</li>
            <li>Communicating applicable service prices.</li>
            <li>Updating service information when necessary.</li>
            <li>Following applicable laws and regulations.</li>
          </ul>
        </section>

        <section id="terms-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. REVIEWS AND RATINGS</h2>
          <p>Customers who have completed eligible bookings may be permitted to submit ratings and reviews.</p>
          <p>Reviews must be genuine and based on the customer's actual experience.</p>
          <p>Users must not:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Submit fake reviews.</li>
            <li>Submit reviews on behalf of another person.</li>
            <li>Manipulate ratings.</li>
            <li>Post misleading information.</li>
            <li>Post abusive or unlawful content.</li>
            <li>Publish another person's private information.</li>
          </ul>
          <p className="pt-2">DigiSaloon may remove content that violates its guidelines, these Terms, or applicable law.</p>
        </section>

        <section id="terms-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. PROHIBITED ACTIVITIES</h2>
          <p>You must not use DigiSaloon to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Commit or facilitate illegal activities.</li>
            <li>Create fraudulent bookings.</li>
            <li>Create fake accounts.</li>
            <li>Attempt unauthorized access.</li>
            <li>Introduce malware or harmful code.</li>
            <li>Scrape or copy platform data without permission.</li>
            <li>Manipulate reviews or ratings.</li>
            <li>Abuse promotional offers.</li>
            <li>Interfere with platform security.</li>
            <li>Misrepresent your identity.</li>
            <li>Reverse engineer or attempt to obtain unauthorized access to DigiSaloon's software or systems.</li>
          </ul>
        </section>

        <section id="terms-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. INTELLECTUAL PROPERTY</h2>
          <p>The DigiSaloon name, logo, trademarks, website, application interface, software, graphics, text, design, content, and other materials are owned by or licensed to DigiSaloon and are protected by applicable intellectual property laws.</p>
          <p>You may not copy, reproduce, modify, distribute, sell, or commercially exploit DigiSaloon's intellectual property without prior written permission.</p>
        </section>

        <section id="terms-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. THIRD-PARTY SERVICES</h2>
          <p>DigiSaloon may use or integrate third-party services such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Razorpay.</li>
            <li>Firebase.</li>
            <li>Google services.</li>
            <li>Mapping services.</li>
            <li>Analytics services.</li>
            <li>Cloud infrastructure providers.</li>
            <li>Communication services.</li>
          </ul>
          <p className="pt-2">Third-party services may have separate terms and privacy policies.</p>
          <p>DigiSaloon is not responsible for policies or services controlled independently by third-party providers.</p>
        </section>

        <section id="terms-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. PLATFORM AVAILABILITY</h2>
          <p>DigiSaloon aims to maintain reliable and continuous access to its services but does not guarantee that the platform will always be available or error-free.</p>
          <p>The platform may become temporarily unavailable because of:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Maintenance.</li>
            <li>Technical problems.</li>
            <li>Server issues.</li>
            <li>Network failures.</li>
            <li>Security incidents.</li>
            <li>Third-party service interruptions.</li>
            <li>Circumstances beyond DigiSaloon's reasonable control.</li>
          </ul>
        </section>

        <section id="terms-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">20. LIMITATION OF LIABILITY</h2>
          <p>To the extent permitted by applicable law, DigiSaloon shall not be responsible for indirect, incidental, special, consequential, or similar losses arising from:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Use or inability to use the platform.</li>
            <li>Actions of salon partners.</li>
            <li>Quality of salon services.</li>
            <li>Delays caused by third-party payment providers.</li>
            <li>Bank or payment processing delays.</li>
            <li>Information provided by independent salon partners.</li>
          </ul>
          <p className="pt-2">Nothing in these Terms excludes or limits liability that cannot legally be excluded or limited under applicable law.</p>
        </section>

        <section id="terms-21" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">21. INDEMNIFICATION</h2>
          <p>To the extent permitted by applicable law, you agree to be responsible for claims, losses, liabilities, damages, or expenses arising from:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Your violation of these Terms.</li>
            <li>Your misuse of DigiSaloon.</li>
            <li>Fraudulent activity associated with your account.</li>
            <li>Violation of another person's rights.</li>
            <li>Violation of applicable laws.</li>
          </ul>
        </section>

        <section id="terms-22" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">22. ACCOUNT SUSPENSION OR TERMINATION</h2>
          <p>DigiSaloon may suspend, restrict, or terminate an account where reasonably necessary, including in cases involving:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Fraudulent activity.</li>
            <li>Misuse of the platform.</li>
            <li>Violation of these Terms.</li>
            <li>Security concerns.</li>
            <li>Illegal activity.</li>
            <li>Repeated abuse of the platform.</li>
          </ul>
          <p className="pt-2">Any applicable refund will be handled according to the relevant refund policy and applicable law.</p>
        </section>

        <section id="terms-23" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">23. PRIVACY</h2>
          <p>Your use of DigiSaloon is also subject to the DigiSaloon Privacy Policy.</p>
          <p>The Privacy Policy explains how DigiSaloon collects, uses, stores, and protects personal information.</p>
        </section>

        <section id="terms-24" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">24. CHANGES TO THESE TERMS</h2>
          <p>DigiSaloon may update these Terms from time to time.</p>
          <p>Updated Terms will be published on the DigiSaloon platform with a revised “Last Updated” date.</p>
          <p>Your continued use of DigiSaloon after an update may constitute acceptance of the revised Terms, to the extent permitted by applicable law.</p>
        </section>

        <section id="terms-25" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">25. GOVERNING LAW</h2>
          <p>These Terms shall be governed by the applicable laws of India.</p>
          <p>Any dispute arising in connection with these Terms shall be subject to the jurisdiction of the competent courts having jurisdiction over DigiSaloon's applicable place of business, subject to applicable law.</p>
        </section>

        <section id="terms-26" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">26. CONTACT US</h2>
          <p>For questions, concerns, or support regarding these Terms, contact:</p>
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
            <p>
              <strong>Website:</strong>{" "}
              <a href="https://digisaloon.in" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline">
                digisaloon.in
              </a>
            </p>
          </div>
        </section>

        <section id="terms-27" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">27. ACCEPTANCE OF TERMS</h2>
          <p>By accessing or using DigiSaloon, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.</p>
        </section>

      </div>
    </div>
  );
};