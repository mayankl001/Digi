import React from "react";

export const OffersPolicy: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Offers Policy
          </span>
          <span className="text-xs text-slate-400">Last Updated: 11 August 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          OFFERS & COUPON POLICY
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          This Offers & Coupon Policy explains the terms applicable to promotional offers, discounts, coupons and promotional benefits provided through DigiSaloon.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="off-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. Scope</h2>
          <p>This Policy applies to offers and promotional benefits made available through:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>DigiSaloon User App</li>
            <li>DigiSaloon website</li>
            <li>Promotional campaigns</li>
            <li>Eligible salon-specific offers</li>
            <li>Coupons and discount codes</li>
          </ul>
        </section>

        <section id="off-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. Eligibility</h2>
          <p>Offers may be available only to users who meet the eligibility conditions specified for the particular offer.</p>
          <p>Eligibility may depend on factors such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>New or existing user status</li>
            <li>Booking history</li>
            <li>Salon</li>
            <li>Service</li>
            <li>Location</li>
            <li>Minimum booking amount</li>
            <li>Payment method</li>
            <li>Campaign period</li>
            <li>Other stated conditions</li>
          </ul>
        </section>

        <section id="off-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. Coupon Codes</h2>
          <p>Where DigiSaloon provides a coupon code, the user must enter the code correctly during the applicable booking process.</p>
          <p>A coupon may not work if:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>It has expired</li>
            <li>It is not valid for the selected salon or service</li>
            <li>The user does not meet the eligibility criteria</li>
            <li>The minimum booking amount is not met</li>
            <li>The coupon has already been used</li>
            <li>The campaign has ended</li>
            <li>The coupon has reached its usage limit</li>
          </ul>
        </section>

        <section id="off-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. One Offer Per Booking</h2>
          <p>Unless specifically stated otherwise, only one promotional coupon or discount may be applied to a booking.</p>
          <p>Different offers may not be combined.</p>
        </section>

        <section id="off-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. Minimum Booking Value</h2>
          <p>Some offers may require a minimum booking value.</p>
          <p>The applicable minimum value will be displayed with the relevant offer.</p>
        </section>

        <section id="off-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. Maximum Discount</h2>
          <p>Certain offers may have a maximum discount limit.</p>
          <p>For example, an offer may provide a percentage discount up to a specified maximum amount.</p>
          <p>The applicable discount will be displayed before the booking is completed where technically available.</p>
        </section>

        <section id="off-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. Salon-Specific Offers</h2>
          <p>Some promotions may be offered by individual salon partners.</p>
          <p>Such offers may be subject to additional conditions specified by the relevant salon.</p>
        </section>

        <section id="off-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. Offer Period</h2>
          <p>Every promotional offer may have a defined validity period.</p>
          <p>An offer cannot normally be used after its expiry date unless DigiSaloon expressly extends the offer.</p>
        </section>

        <section id="off-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. New User Offers</h2>
          <p>A new-user offer may be limited to eligible users who meet the applicable first-booking or registration conditions.</p>
          <p>Creating multiple accounts to obtain a new-user benefit is prohibited.</p>
        </section>

        <section id="off-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. Promotional Abuse</h2>
          <p>Users must not misuse offers by:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Creating multiple accounts</li>
            <li>Using fake information</li>
            <li>Creating fraudulent bookings</li>
            <li>Manipulating cancellations</li>
            <li>Sharing restricted coupons</li>
            <li>Circumventing eligibility requirements</li>
            <li>Using technical methods to bypass restrictions</li>
          </ul>
        </section>

        <section id="off-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. Cancellation of Discounted Bookings</h2>
          <p>If a booking made using a coupon is cancelled, the applicable refund will be determined according to DigiSaloon's Cancellation & Refund Policy and the specific promotional terms.</p>
          <p>A promotional discount may not necessarily be refundable as cash.</p>
        </section>

        <section id="off-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. Expired or Invalid Coupons</h2>
          <p>Expired, cancelled, suspended or invalid coupons cannot be redeemed.</p>
          <p>DigiSaloon is not required to honor a coupon that has been incorrectly generated, duplicated or made available due to a technical error.</p>
        </section>

        <section id="off-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. Coupon Transfer</h2>
          <p>Unless expressly stated otherwise, coupons are intended for the eligible user and may not be sold or transferred.</p>
        </section>

        <section id="off-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. Cash Conversion</h2>
          <p>Promotional discounts and coupons generally have no cash value and cannot be exchanged for cash unless expressly stated otherwise.</p>
        </section>

        <section id="off-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. Changes to Offers</h2>
          <p>DigiSaloon may:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Modify an offer</li>
            <li>Extend an offer</li>
            <li>Suspend an offer</li>
            <li>Withdraw an offer</li>
            <li>Change eligibility conditions</li>
          </ul>
          <p className="text-xs text-slate-500 pt-1">where reasonably necessary, subject to applicable law and the specific terms of the promotion.</p>
        </section>

        <section id="off-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. Technical Errors</h2>
          <p>If a promotional discount is applied due to an obvious technical or system error, DigiSaloon may correct or cancel the incorrectly applied benefit, subject to applicable law.</p>
        </section>

        <section id="off-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. Payment Methods</h2>
          <p>Some offers may be restricted to specific payment methods.</p>
          <p>The applicable payment requirement will be displayed with the relevant offer.</p>
        </section>

        <section id="off-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. Taxes and Charges</h2>
          <p>Where applicable, taxes, fees or other charges may be calculated according to the applicable transaction and legal requirements.</p>
        </section>

        <section id="off-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. No Guaranteed Availability</h2>
          <p>DigiSaloon does not guarantee that promotional offers will always be available.</p>
          <p>Offers may vary based on location, salon, service, user eligibility and campaign conditions.</p>
        </section>

        <section id="off-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">20. Relationship With Other Policies</h2>
          <p>This Policy should be read together with DigiSaloon's:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Terms & Conditions</li>
            <li>Cancellation & Refund Policy</li>
            <li>Payment & Settlement Policy</li>
            <li>Privacy Policy</li>
            <li>Booking & Appointment Policy</li>
          </ul>
        </section>

        <section id="off-21" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">21. Policy Updates</h2>
          <p>DigiSaloon may update this Offers & Coupon Policy to reflect changes in promotional campaigns, platform functionality or applicable requirements.</p>
        </section>

        <section id="off-22" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">22. Contact</h2>
          <p>For questions regarding an offer or coupon:</p>
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