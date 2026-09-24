import React from "react";

export const OffersPolicy: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Offers & Coupon Policy
          </span>
          <span className="text-xs text-slate-400">Last Updated: 21 September 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          OFFERS & COUPON POLICY
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          This Offers & Coupon Policy explains the rules governing promotional offers, discounts, coupons, promotional codes, cashback, and other benefits made available by DigiSaloon through its website, mobile application, partner platforms, or other authorized channels.
        </p>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          By using an offer or coupon provided by DigiSaloon, you agree to this Policy along with the DigiSaloon Terms & Conditions, Privacy Policy, Cancellation & Refund Policy, Payment & Settlement Policy, and Booking & Appointment Policy.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="offer-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. About Offers and Coupons</h2>
          <p>DigiSaloon may periodically provide offers, discounts, promotional codes, coupons, cashback, referral benefits, or other promotional benefits to eligible customers.</p>
          <p>Offers may be provided through:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>DigiSaloon mobile application</li>
            <li>DigiSaloon website</li>
            <li>Promotional campaigns</li>
            <li>Referral programs</li>
            <li>Partner promotions</li>
            <li>Notifications, emails, SMS, or other authorized communication channels</li>
            <li>Social media or other official DigiSaloon channels</li>
          </ul>
          <p className="pt-2">Each offer may have its own eligibility requirements, validity period, usage limits, and terms.</p>
        </section>

        <section id="offer-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. Eligibility</h2>
          <p>Offers and coupons may be available only to customers who meet the eligibility conditions specified for the particular promotion.</p>
          <p>Eligibility may depend on factors including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>New or existing customer status</li>
            <li>Specific salon or service</li>
            <li>Booking type</li>
            <li>Minimum booking value</li>
            <li>Specific location</li>
            <li>Specific campaign</li>
            <li>Coupon validity period</li>
            <li>Previous use of the same or similar offer</li>
            <li>Account or booking history</li>
            <li>Other conditions stated with the offer</li>
          </ul>
          <p className="pt-2">DigiSaloon may restrict an offer to selected users or accounts where the offer terms specify such restrictions.</p>
        </section>

        <section id="offer-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. Coupon Validity</h2>
          <p>Every coupon or promotional code may have a specified:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Start date</li>
            <li>Expiry date</li>
            <li>Minimum booking value</li>
            <li>Maximum discount amount</li>
            <li>Maximum number of uses</li>
            <li>Applicable salons or services</li>
            <li>Applicable booking type</li>
            <li>Customer eligibility requirements</li>
          </ul>
          <p className="pt-2">A coupon cannot be used after its expiry date unless DigiSaloon expressly extends its validity.</p>
        </section>

        <section id="offer-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. Coupon Application</h2>
          <p>Where applicable, customers must enter or apply the valid coupon code during the booking process.</p>
          <p>The applicable discount or benefit will be displayed before the customer completes the booking, subject to the applicable offer terms.</p>
          <p>Customers are responsible for checking that the intended discount or benefit has been applied before completing the booking.</p>
        </section>

        <section id="offer-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. One Coupon Per Booking</h2>
          <p>Unless specifically stated otherwise, only one promotional coupon or discount code may be applied to a single booking.</p>
          <p>Coupons generally cannot be combined with other coupons, promotional codes, or offers unless DigiSaloon expressly permits such combination.</p>
        </section>

        <section id="offer-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. Minimum Booking Value</h2>
          <p>Some offers may require a minimum eligible booking value.</p>
          <p>If a minimum booking value is specified, the customer must satisfy that requirement before the coupon can be applied.</p>
          <p>Taxes, fees, booking amounts, or other charges may or may not be included in determining the minimum booking value, depending on the specific offer terms.</p>
        </section>

        <section id="offer-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. Maximum Discount</h2>
          <p>Certain coupons may have a maximum discount limit.</p>
          <p>For example, an offer may provide a percentage discount subject to a maximum discount amount specified in the promotion.</p>
          <p>The customer will receive only the discount applicable under the published terms of that offer.</p>
        </section>

        <section id="offer-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. Salon-Specific Offers</h2>
          <p>Some offers may be applicable only to selected salons.</p>
          <p>Such offers cannot be used for bookings at salons that are not included in the relevant promotion.</p>
          <p>DigiSaloon may identify applicable salons within the app, website, or promotional communication.</p>
        </section>

        <section id="offer-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. Service-Specific Offers</h2>
          <p>Some coupons may apply only to specific services, categories, or service types.</p>
          <p>If a coupon is restricted to a particular service, it will not necessarily apply to other services booked from the same salon.</p>
        </section>

        <section id="offer-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. Booking Type Restrictions</h2>
          <p>An offer may be limited to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Live Bookings</li>
            <li>Schedule Bookings</li>
            <li>Specific booking categories</li>
            <li>Specific campaigns</li>
          </ul>
          <p className="pt-2">The applicable booking type will be specified in the relevant offer terms.</p>
        </section>

        <section id="offer-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. New Customer Offers</h2>
          <p>DigiSaloon may provide special offers for new customers.</p>
          <p>A new-customer offer may be limited to one use per customer, account, device, phone number, or other eligibility criteria specified by DigiSaloon.</p>
          <p>Creating multiple accounts or using other methods to obtain the same new-customer benefit may result in the offer being cancelled or the associated booking being reviewed.</p>
        </section>

        <section id="offer-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. Promotional and Referral Offers</h2>
          <p>DigiSaloon may provide promotional or referral benefits from time to time.</p>
          <p>Referral or promotional benefits may have additional conditions, including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Eligible referral activity</li>
            <li>Minimum booking requirements</li>
            <li>Validity periods</li>
            <li>Maximum benefits</li>
            <li>Restrictions on self-referrals</li>
            <li>Restrictions on duplicate or fraudulent accounts</li>
          </ul>
          <p className="pt-2">The specific terms displayed with the referral or promotional campaign will apply.</p>
        </section>

        <section id="offer-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. Coupon and Booking Payment</h2>
          <p>DigiSaloon currently collects a fixed booking amount of ₹50.19 through the platform for applicable bookings.</p>
          <p>Where an offer affects the service price, the customer will be shown the applicable payment information before completing the booking.</p>
          <p>The remaining applicable service amount, after accounting for any valid promotional adjustment, is payable directly to the salon according to the booking and payment terms.</p>
        </section>

        <section id="offer-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. Offers and Cancellation</h2>
          <p>The use of a coupon does not automatically change the applicable cancellation rules.</p>
          <p>The DigiSaloon Cancellation & Refund Policy will continue to apply unless the specific promotional offer expressly provides different terms.</p>
          <p>For Schedule Bookings:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Cancellation at least 1 hour before the appointment may qualify for the applicable refund.</li>
            <li>The ₹1.19 payment gateway fee may be deducted where applicable.</li>
            <li>The applicable refund amount may therefore be ₹49 from a ₹50.19 booking payment.</li>
          </ul>
          <p className="pt-2">Refunds are generally processed within 5–7 working days after eligibility and processing requirements are completed.</p>
          <p>For Live Bookings, cancellation is generally not permitted and the booking payment is non-refundable, subject to applicable exceptions stated by DigiSaloon.</p>
        </section>

        <section id="offer-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. Expired Coupons</h2>
          <p>Expired coupons cannot normally be redeemed.</p>
          <p>DigiSaloon is not obligated to extend an expired coupon unless DigiSaloon expressly approves an extension.</p>
        </section>

        <section id="offer-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. Non-Transferable Offers</h2>
          <p>Unless specifically stated otherwise, coupons and promotional benefits are intended for the eligible customer or account to which they are issued.</p>
          <p>Coupons may not be sold, transferred, exchanged, or distributed for commercial purposes without written authorization from DigiSaloon.</p>
        </section>

        <section id="offer-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. Cash Conversion</h2>
          <p>Coupons, discounts, cashback, or promotional benefits generally cannot be exchanged for cash unless expressly stated otherwise in the applicable offer.</p>
        </section>

        <section id="offer-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. Coupon Misuse</h2>
          <p>DigiSaloon may cancel or restrict an offer where it reasonably identifies:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Coupon misuse</li>
            <li>Multiple-account abuse</li>
            <li>Fake or duplicate accounts</li>
            <li>Self-referral</li>
            <li>Fraudulent transactions</li>
            <li>Automated or unauthorized coupon use</li>
            <li>Manipulation of promotional systems</li>
            <li>Repeated exploitation of promotional errors</li>
            <li>Other activity intended to obtain an unauthorized promotional benefit</li>
          </ul>
          <p className="pt-2">Where appropriate, DigiSaloon may also cancel or review the associated booking or account activity.</p>
        </section>

        <section id="offer-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. Incorrectly Applied Offers</h2>
          <p>If a coupon or offer is displayed incorrectly due to a technical, system, or communication error, DigiSaloon may review the transaction and take appropriate corrective action.</p>
          <p>This may include correcting the promotional benefit, cancelling an incorrectly generated coupon, or communicating the correct applicable terms to the customer.</p>
        </section>

        <section id="offer-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">20. Offer Changes</h2>
          <p>DigiSaloon may modify, suspend, extend, replace, or discontinue an offer or coupon campaign at any time, subject to applicable law and the specific terms communicated for that promotion.</p>
          <p>Any changes will generally apply from the time they are communicated or made available, unless otherwise specified.</p>
        </section>

        <section id="offer-21" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">21. No Guaranteed Availability</h2>
          <p>Offers and coupons may be available only for a limited period or limited number of users.</p>
          <p>The availability of a particular offer is not guaranteed unless DigiSaloon expressly states otherwise.</p>
        </section>

        <section id="offer-22" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">22. Salon Promotions</h2>
          <p>Salons may participate in DigiSaloon promotional campaigns subject to applicable partner terms.</p>
          <p>A salon-specific promotion may be subject to additional conditions communicated to the salon and/or customer.</p>
          <p>DigiSaloon may display promotional information provided by participating salons, but the applicable promotional terms will determine the actual benefit available to the customer.</p>
        </section>

        <section id="offer-23" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">23. Taxes and Charges</h2>
          <p>Any taxes, fees, or charges applicable to a booking will be handled according to the applicable pricing, tax, payment, and billing terms.</p>
          <p>A coupon or discount does not automatically remove or alter applicable taxes unless the specific offer expressly provides otherwise.</p>
        </section>

        <section id="offer-24" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">24. Refunds After Use of an Offer</h2>
          <p>Where a customer receives a refund for a booking in which a coupon or promotional benefit was used, the value of the promotional benefit may not be refundable in cash.</p>
          <p>The final refund amount may depend on:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>The original booking amount</li>
            <li>Promotional discount applied</li>
            <li>Payment gateway charges</li>
            <li>Applicable cancellation rules</li>
            <li>The specific coupon terms</li>
          </ul>
          <p className="pt-2">The customer will receive only the amount they are eligible to receive under the applicable policies and offer terms.</p>
        </section>

        <section id="offer-25" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">25. Coupon Restoration After Cancellation</h2>
          <p>A used coupon is not automatically restored after cancellation.</p>
          <p>DigiSaloon may, at its discretion and subject to the particular offer terms, restore a coupon where a booking is cancelled or fails due to circumstances attributable to DigiSaloon or the participating salon.</p>
          <p>Expired coupons will generally not be restored.</p>
        </section>

        <section id="offer-26" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">26. Technical Issues</h2>
          <p>If a coupon cannot be applied due to a technical issue, customers should contact DigiSaloon support before completing the booking where reasonably possible.</p>
          <p>DigiSaloon may review the issue and determine the appropriate resolution based on the available transaction and system records.</p>
        </section>

        <section id="offer-27" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">27. Promotional Communication</h2>
          <p>DigiSaloon may communicate offers through authorized communication channels, including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>In-app notifications</li>
            <li>Email</li>
            <li>SMS</li>
            <li>Website</li>
            <li>Mobile application</li>
            <li>Social media</li>
            <li>Other promotional channels</li>
          </ul>
          <p className="pt-2">Customers should verify that promotional communications originate from an authorized DigiSaloon source before sharing account or payment information.</p>
        </section>

        <section id="offer-28" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">28. Fraudulent or Unauthorized Promotions</h2>
          <p>Customers should not rely on coupons or promotional codes obtained from unauthorized sources if the authenticity of the offer cannot be verified.</p>
          <p>DigiSaloon is not responsible for unauthorized promotional codes or fraudulent offers circulated by third parties.</p>
        </section>

        <section id="offer-29" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">29. Disputes Regarding Offers</h2>
          <p>If a customer believes an eligible offer was not correctly applied, the customer may contact DigiSaloon support with relevant details such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Registered account information</li>
            <li>Booking ID</li>
            <li>Coupon code</li>
            <li>Date and time of booking</li>
            <li>Screenshot of the offer, where available</li>
            <li>Relevant payment information</li>
          </ul>
          <p className="pt-2">DigiSaloon may review the available records and determine the applicable resolution.</p>
        </section>

        <section id="offer-30" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">30. Relationship With Other Policies</h2>
          <p>This Policy should be read together with the DigiSaloon:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Cancellation & Refund Policy</li>
            <li>Payment & Settlement Policy</li>
            <li>Booking & Appointment Policy</li>
            <li>Review & Rating Policy</li>
            <li>Content Policy & Community Guidelines</li>
            <li>Legal Disclaimer</li>
            <li>Grievance Redressal & Contact Policy</li>
          </ul>
          <p className="pt-2">If a specific promotional campaign contains additional terms, those campaign-specific terms will apply to the relevant offer.</p>
        </section>

        <section id="offer-31" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">31. Changes to This Policy</h2>
          <p>DigiSaloon may update this Offers & Coupon Policy from time to time to reflect changes in its promotional programs, platform features, legal requirements, or business practices.</p>
          <p>The updated version will be made available through the DigiSaloon website or other appropriate channels.</p>
        </section>

        <section id="offer-32" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">32. Contact Us</h2>
          <p>For questions, complaints, or clarification regarding offers, coupons, or promotional benefits, please contact:</p>
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
          <p className="pt-2">By using a DigiSaloon offer or coupon, you acknowledge that you have read and understood the applicable promotional terms and agree to comply with this Policy.</p>
        </section>

      </div>
    </div>
  );
};