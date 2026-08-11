import React from "react";

export const CancellationPolicy: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Refund Policy
          </span>
          <span className="text-xs text-slate-400">Last Updated: 11 August 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          CANCELLATION & REFUND POLICY
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          This Cancellation & Refund Policy explains the cancellation, refund and related rules applicable to bookings made through DigiSaloon.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="can-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. Scope</h2>
          <p>This policy applies to bookings made through:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>DigiSaloon User App</li>
            <li>DigiSaloon website</li>
            <li>Other authorized DigiSaloon booking channels</li>
          </ul>
        </section>

        <section id="can-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. Customer Cancellation</h2>
          <p>Customers may cancel an eligible booking through the available cancellation functionality.</p>
          <p>The applicable cancellation charge depends on the customer's cancellation history under DigiSaloon's current cancellation rules.</p>
        </section>

        <section id="can-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. First Five Cancellations</h2>
          <p>For the customer's first five eligible cancellations, DigiSaloon does not charge a cancellation fee.</p>
        </section>

        <section id="can-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. Cancellation From the Sixth Cancellation</h2>
          <p>From the sixth eligible customer cancellation onward, a 3% cancellation charge may be deducted from the applicable refundable booking amount.</p>
          <p>The applicable cancellation count may be determined using DigiSaloon's booking records.</p>
        </section>

        <section id="can-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. Salon Cancellation</h2>
          <p>If a salon cancels a confirmed paid booking, the customer is entitled to a 100% refund of the amount paid for that booking, subject to successful payment verification and applicable payment-processing procedures.</p>
          <p>DigiSaloon may also review repeated or unreasonable salon cancellations and take appropriate action under its Partner Terms.</p>
        </section>

        <section id="can-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. Cancellation Before Payment</h2>
          <p>If a customer cancels a booking before any payment has been successfully collected, there may be no payment to refund.</p>
        </section>

        <section id="can-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. Online Paid Bookings</h2>
          <p>For bookings paid online, eligible refunds may be initiated through the applicable payment provider.</p>
          <p>The refund amount will be determined according to this policy and the applicable booking circumstances.</p>
        </section>

        <section id="can-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. Pay-at-Salon Bookings</h2>
          <p>For Pay-at-Salon bookings, DigiSaloon does not hold the customer's payment.</p>
          <p>Where a cancellation fee or other amount is applicable to a Pay-at-Salon booking, the applicable terms may be communicated separately.</p>
        </section>

        <section id="can-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. Refunds</h2>
          <p>Eligible refunds may arise from circumstances including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Salon cancellation</li>
            <li>Eligible customer cancellation</li>
            <li>Duplicate payment</li>
            <li>Verified payment error</li>
            <li>Other circumstances specifically approved by DigiSaloon</li>
          </ul>
        </section>

        <section id="can-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. Refund Amount</h2>
          <p>The refund amount may depend on:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Amount actually paid</li>
            <li>Cancellation circumstances</li>
            <li>Applicable cancellation charge</li>
            <li>Payment status</li>
            <li>Booking status</li>
            <li>Any other applicable adjustment</li>
          </ul>
        </section>

        <section id="can-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. Refund Processing</h2>
          <p>DigiSaloon may initiate an eligible refund through the relevant payment provider.</p>
          <p>Once initiated, the time required for the amount to appear in the customer's account may depend on:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Bank</li>
            <li>UPI provider</li>
            <li>Card network</li>
            <li>Payment service provider</li>
            <li>Other financial institutions</li>
          </ul>
          <p>DigiSaloon cannot guarantee the exact crediting time controlled by third-party financial institutions.</p>
        </section>

        <section id="can-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. Failed Payment</h2>
          <p>If a payment fails but an amount appears to have been deducted, DigiSaloon may first verify the transaction status with the applicable payment provider.</p>
          <p>The outcome may depend on the payment provider and banking system.</p>
        </section>

        <section id="can-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. Duplicate Payment</h2>
          <p>If a customer is charged more than once for the same booking and the duplicate transaction is verified, DigiSaloon may process the applicable excess amount for refund.</p>
        </section>

        <section id="can-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. Booking Status</h2>
          <p>A payment attempt does not automatically guarantee that a booking has been successfully confirmed.</p>
          <p>A booking should be considered confirmed only when the applicable booking status is successfully generated by DigiSaloon.</p>
        </section>

        <section id="can-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. Cancellation by DigiSaloon</h2>
          <p>In exceptional circumstances, DigiSaloon may cancel or restrict a booking where reasonably necessary due to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Technical issues</li>
            <li>Fraud or suspected fraud</li>
            <li>Payment problems</li>
            <li>Incorrect information</li>
            <li>Salon availability issues</li>
            <li>Security concerns</li>
            <li>Other legitimate operational reasons</li>
          </ul>
          <p>Where a paid booking is cancelled by DigiSaloon and a refund is applicable, the refund will be processed according to the circumstances.</p>
        </section>

        <section id="can-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. Salon No-Show or Service Issue</h2>
          <p>If a customer arrives for a confirmed booking but the salon is unable to provide the booked service, the customer should contact DigiSaloon support as soon as reasonably possible.</p>
          <p>DigiSaloon may investigate the booking and determine an appropriate resolution based on the available information.</p>
        </section>

        <section id="can-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. Customer No-Show</h2>
          <p>If a customer fails to attend a confirmed appointment without cancelling it, the booking may be treated as a no-show.</p>
          <p>Any applicable consequences may depend on DigiSaloon's booking rules and the circumstances of the booking.</p>
        </section>

        <section id="can-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. Cancellation History</h2>
          <p>DigiSaloon may maintain cancellation records to determine the number of eligible customer cancellations and to prevent misuse of the cancellation policy.</p>
        </section>

        <section id="can-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. Refund Abuse</h2>
          <p>DigiSaloon may investigate repeated or suspicious cancellation and refund activity.</p>
          <p>Where abuse or fraudulent activity is identified, DigiSaloon may:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Restrict cancellation privileges</li>
            <li>Restrict refunds where legally permitted</li>
            <li>Suspend an account</li>
            <li>Take other appropriate action</li>
          </ul>
        </section>

        <section id="can-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">20. Payment Provider</h2>
          <p>DigiSaloon may use third-party payment providers, including Razorpay, to process online payments and refunds.</p>
          <p>Payment processing may be subject to the applicable payment provider's terms and procedures.</p>
        </section>

        <section id="can-21" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">21. Taxes and Charges</h2>
          <p>Where applicable, taxes, payment-processing charges or other legally required adjustments may affect the final amount processed.</p>
          <p>Any applicable amount will be handled according to the relevant transaction and legal requirements.</p>
        </section>

        <section id="can-22" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">22. Contact for Refund Issues</h2>
          <p>For cancellation or refund-related concerns, customers should contact:</p>
          <p>Email: <a href="mailto:support@digisaloon.in" className="text-red-700 hover:underline">support@digisaloon.in</a></p>
          <p>Phone: 9973499471</p>
          <p className="text-xs text-slate-500">Customers should provide the relevant booking ID or transaction reference where available.</p>
        </section>

        <section id="can-23" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">23. Policy Updates</h2>
          <p>DigiSaloon may update this Cancellation & Refund Policy to reflect changes in its booking system, cancellation rules, payment providers or applicable requirements.</p>
        </section>

        <section id="can-24" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">24. Contact</h2>
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