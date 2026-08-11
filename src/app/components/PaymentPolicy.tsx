import React from "react";

export const PaymentPolicy: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Payment Policy
          </span>
          <span className="text-xs text-slate-400">Last Updated: 11 August 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          PAYMENT & SETTLEMENT POLICY
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          This Payment & Settlement Policy explains how payments, refunds, transaction processing and salon settlements are handled through DigiSaloon.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="pay-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. Scope</h2>
          <p>This policy applies to payment-related activities through:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>DigiSaloon User App</li>
            <li>DigiSaloon website</li>
            <li>Partner App</li>
            <li>Partner Web App</li>
            <li>Booking and appointment systems</li>
            <li>Authorized payment interfaces</li>
            <li>Salon settlement systems</li>
          </ul>
        </section>

        <section id="pay-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. Payment Options</h2>
          <p>Depending on the salon and booking configuration, customers may have the option to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Make full payment online at the time of booking; or</li>
            <li>Choose Pay-at-Salon, where available.</li>
          </ul>
          <p>The availability of a payment method may vary by salon and booking.</p>
        </section>

        <section id="pay-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. Online Payment</h2>
          <p>When a customer chooses online payment, the applicable payment interface may be provided through DigiSaloon's authorized payment provider.</p>
          <p>The booking should be considered successfully paid only after the applicable payment status has been confirmed.</p>
          <p>Opening a payment page or attempting a transaction does not itself guarantee successful payment.</p>
        </section>

        <section id="pay-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. Razorpay</h2>
          <p>DigiSaloon may use Razorpay as an authorized payment service provider.</p>
          <p>Razorpay may process payment-related information according to its applicable terms, privacy practices, security procedures and legal requirements.</p>
          <p>DigiSaloon may use Razorpay's merchant dashboard and related tools for legitimate business purposes, including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Transaction verification</li>
            <li>Payment monitoring</li>
            <li>Refund processing</li>
            <li>Settlement tracking</li>
            <li>Reconciliation</li>
            <li>Payment dispute management</li>
          </ul>
        </section>

        <section id="pay-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. Payment Information</h2>
          <p>DigiSaloon may receive transaction information such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Transaction ID</li>
            <li>Payment reference</li>
            <li>Amount</li>
            <li>Payment status</li>
            <li>Refund status</li>
            <li>Settlement information</li>
          </ul>
          <p className="font-semibold text-slate-900">DigiSaloon does not intend to collect or store confidential payment authentication credentials such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>UPI PIN</li>
            <li>Card PIN</li>
            <li>Banking passwords</li>
            <li>OTPs</li>
          </ul>
          <p className="text-xs text-slate-500">Customers should never share such information with DigiSaloon employees, salon staff or other persons.</p>
        </section>

        <section id="pay-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. Pay-at-Salon</h2>
          <p>Where available, customers may select Pay-at-Salon.</p>
          <p>For such bookings:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Payment is made directly to the salon.</li>
            <li>DigiSaloon does not process or hold that payment.</li>
            <li>The salon is responsible for collecting the applicable amount.</li>
            <li>The customer should pay the amount applicable to the confirmed booking/service.</li>
          </ul>
        </section>

        <section id="pay-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. Salon Commission</h2>
          <p>Under DigiSaloon's current commercial arrangement, DigiSaloon does not charge commission on salon bookings.</p>
          <p>This arrangement may be changed in the future subject to applicable partner agreements and notice requirements.</p>
        </section>

        <section id="pay-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. Salon Settlement</h2>
          <p>For eligible online-paid bookings, the applicable amount may be settled to the participating salon on a same-day or next-day basis.</p>
          <p>Settlement timing may depend on:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Successful payment confirmation</li>
            <li>Booking status</li>
            <li>Cancellation status</li>
            <li>Refund status</li>
            <li>Reconciliation</li>
            <li>Payment-provider processing</li>
            <li>Banking timelines</li>
            <li>Technical or operational circumstances</li>
          </ul>
        </section>

        <section id="pay-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. Settlement Account</h2>
          <p>Salon partners are responsible for providing accurate bank or settlement information where required.</p>
          <p>DigiSaloon is not responsible for delays resulting from incorrect or incomplete settlement information provided by the salon partner.</p>
        </section>

        <section id="pay-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. Refunds</h2>
          <p>Refunds are governed by DigiSaloon's Cancellation & Refund Policy.</p>
          <p>Where a salon cancels a qualifying paid booking, the customer is entitled to a 100% refund of the amount paid.</p>
          <p>For customer cancellations:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>First five eligible cancellations: No cancellation fee</li>
            <li>From the sixth eligible cancellation onward: 3% cancellation charge may apply</li>
          </ul>
        </section>

        <section id="pay-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. Refund Processing</h2>
          <p>Eligible refunds may be initiated through the applicable payment provider.</p>
          <p>After DigiSaloon initiates a refund, the actual time for the amount to appear in the customer's bank account or payment instrument may depend on:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Bank</li>
            <li>UPI provider</li>
            <li>Card network</li>
            <li>Payment provider</li>
            <li>Other financial institutions</li>
          </ul>
        </section>

        <section id="pay-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. Failed Payments</h2>
          <p>If a payment fails, the booking may not be confirmed.</p>
          <p>If money appears to have been deducted despite a failed payment, DigiSaloon may verify the transaction with the payment provider before determining the appropriate resolution.</p>
        </section>

        <section id="pay-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. Duplicate Payments</h2>
          <p>If a customer is charged more than once for the same booking and the duplicate transaction is verified, DigiSaloon may process the applicable excess amount for refund.</p>
        </section>

        <section id="pay-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. Booking Confirmation</h2>
          <p>A payment attempt, pending transaction or bank debit does not automatically mean that a booking has been confirmed.</p>
          <p>The booking status generated by DigiSaloon determines whether the booking is confirmed.</p>
        </section>

        <section id="pay-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. Cancellation by Salon</h2>
          <p>If a salon cancels a confirmed paid booking:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>The customer is eligible for a 100% refund of the amount paid.</li>
            <li>DigiSaloon may initiate the refund through the applicable payment provider.</li>
            <li>The salon may be subject to partner-level review for repeated cancellations.</li>
          </ul>
        </section>

        <section id="pay-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. Cancellation by Customer</h2>
          <p>Customer cancellation and applicable charges are governed by the Cancellation & Refund Policy.</p>
          <p>The cancellation history may be maintained by DigiSaloon to determine the applicable cancellation rule.</p>
        </section>

        <section id="pay-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. Payment Disputes</h2>
          <p>Customers may contact DigiSaloon regarding:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Incorrect payment status</li>
            <li>Failed payment</li>
            <li>Duplicate payment</li>
            <li>Refund issue</li>
            <li>Incorrect transaction amount</li>
            <li>Other payment-related concerns</li>
          </ul>
          <p className="text-xs text-slate-500">Customers should provide the booking ID or transaction reference where available.</p>
        </section>

        <section id="pay-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. Chargebacks</h2>
          <p>If a customer raises a chargeback or payment dispute through a bank, card network, UPI provider or other payment institution, DigiSaloon may provide relevant transaction and booking information to the applicable payment provider or financial institution, subject to applicable law.</p>
        </section>

        <section id="pay-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. Fraud Prevention</h2>
          <p>DigiSaloon may review transactions for suspected:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm mb-2">
            <li>Payment fraud</li>
            <li>Unauthorized transactions</li>
            <li>Refund abuse</li>
            <li>Duplicate transactions</li>
            <li>Promotional abuse</li>
            <li>Other suspicious activity</li>
          </ul>
          <p>DigiSaloon may restrict or suspend transactions or accounts where reasonably necessary for investigation and security.</p>
        </section>

        <section id="pay-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">20. Taxes and Other Charges</h2>
          <p>Applicable taxes, statutory charges or other transaction-related amounts may apply according to applicable law and the relevant transaction.</p>
          <p>Where applicable, such amounts may be reflected in the booking or payment information.</p>
        </section>

        <section id="pay-21" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">21. Third-Party Payment Services</h2>
          <p>DigiSaloon may rely on third-party providers for payment processing, banking, settlement and refunds.</p>
          <p>DigiSaloon is not responsible for delays or failures caused solely by third-party financial infrastructure outside its reasonable control.</p>
        </section>

        <section id="pay-22" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">22. Payment Records</h2>
          <p>DigiSaloon may retain payment and settlement records for purposes including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Accounting</li>
            <li>Reconciliation</li>
            <li>Refund processing</li>
            <li>Customer support</li>
            <li>Fraud prevention</li>
            <li>Dispute resolution</li>
            <li>Legal compliance</li>
          </ul>
        </section>

        <section id="pay-23" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">23. Security</h2>
          <p>DigiSaloon may implement reasonable security measures to protect payment-related information.</p>
          <p>Customers and partners must also protect their account credentials and confidential authentication information.</p>
        </section>

        <section id="pay-24" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">24. Partner Responsibilities</h2>
          <p>Salon partners must:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Provide accurate settlement information</li>
            <li>Maintain valid business/payment information</li>
            <li>Cooperate with transaction verification where reasonably required</li>
            <li>Not manipulate booking or payment status</li>
            <li>Not misuse refund processes</li>
          </ul>
        </section>

        <section id="pay-25" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">25. Policy Updates</h2>
          <p>DigiSaloon may update this Payment & Settlement Policy to reflect changes in:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Payment providers</li>
            <li>Settlement arrangements</li>
            <li>Refund procedures</li>
            <li>Platform functionality</li>
            <li>Commercial arrangements</li>
            <li>Applicable requirements</li>
          </ul>
        </section>

        <section id="pay-26" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">26. Contact</h2>
          <p>For payment or settlement-related concerns:</p>
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