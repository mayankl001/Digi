import React from "react";

export const PaymentPolicy: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Payment & Settlement Policy
          </span>
          <span className="text-xs text-slate-400">Last Updated: 21 September 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          PAYMENT & SETTLEMENT POLICY
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          This Payment & Settlement Policy explains how payments, booking amounts, payment gateway charges, salon settlements, refunds, and transaction processing are handled on the DigiSaloon platform.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="pay-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. Overview</h2>
          <p>DigiSaloon is a salon appointment booking platform that allows customers to discover salons, select services, and make appointments through the DigiSaloon platform.</p>
          <p>For each booking, the customer is required to pay a booking amount of ₹50.19 through DigiSaloon.</p>
          <p>The remaining service amount is paid directly to the salon after the service is completed.</p>
          <p>The ₹50.19 booking payment is processed through the applicable payment gateway. After deduction of the applicable ₹1.19 payment gateway fee, the net ₹49.00 booking amount is attributable to the concerned salon.</p>
        </section>

        <section id="pay-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. Booking Payment</h2>
          <p>For a confirmed booking:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Customer pays ₹50.19 through DigiSaloon.</li>
            <li>The payment is processed through the applicable payment gateway.</li>
            <li>Applicable payment gateway fee: ₹1.19.</li>
            <li>Net booking amount attributable to the salon: ₹49.00.</li>
            <li>The remaining service amount is payable directly to the salon after the service.</li>
            <li>The booking payment is separate from the remaining service amount payable at the salon.</li>
          </ul>
        </section>

        <section id="pay-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. Payment Calculation Example</h2>
          <p>If the selected salon service costs ₹200:</p>
          
          <div className="overflow-x-auto pt-2">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-900">
                  <th className="p-2.5 border border-slate-200 font-bold">Description</th>
                  <th className="p-2.5 border border-slate-200 font-bold">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2.5 border border-slate-200">Service Price</td>
                  <td className="p-2.5 border border-slate-200">₹200</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-2.5 border border-slate-200">Booking Amount Paid Through DigiSaloon</td>
                  <td className="p-2.5 border border-slate-200">₹50.19</td>
                </tr>
                <tr>
                  <td className="p-2.5 border border-slate-200">Payment Gateway Fee</td>
                  <td className="p-2.5 border border-slate-200">₹1.19</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-2.5 border border-slate-200">Net Booking Amount for Salon</td>
                  <td className="p-2.5 border border-slate-200">₹49.00</td>
                </tr>
                <tr>
                  <td className="p-2.5 border border-slate-200">Remaining Service Amount Payable at Salon</td>
                  <td className="p-2.5 border border-slate-200">₹151.00</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-2.5 border border-slate-200 font-bold">Total Customer Outflow</td>
                  <td className="p-2.5 border border-slate-200 font-bold">₹201.19</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="pt-2">Therefore, in this example, the customer pays:</p>
          <p className="font-semibold text-slate-800">₹50.19 through DigiSaloon + ₹151.00 at the salon = ₹201.19</p>
          <p>The ₹1.19 payment gateway fee is included in the DigiSaloon booking payment.</p>
        </section>

        <section id="pay-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. Payment Gateway</h2>
          <p>DigiSaloon may use third-party payment service providers, including Razorpay, to process online payments.</p>
          <p>Payment transactions may be subject to the payment gateway's terms, policies, processing procedures, and applicable charges.</p>
          <p>DigiSaloon may receive transaction-related information from the payment gateway for purposes such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Payment confirmation</li>
            <li>Booking confirmation</li>
            <li>Transaction reconciliation</li>
            <li>Refund processing</li>
            <li>Settlement</li>
            <li>Dispute resolution</li>
            <li>Fraud prevention</li>
            <li>Customer support</li>
          </ul>
        </section>

        <section id="pay-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. Payment Confirmation</h2>
          <p>A booking will be considered successfully paid only after DigiSaloon receives confirmation of the payment from the applicable payment gateway.</p>
          <p>If a payment is unsuccessful, pending, or not confirmed:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>The booking may not be confirmed.</li>
            <li>The customer may be required to make the payment again.</li>
            <li>Any amount debited but not reflected in the booking may require reconciliation with the payment gateway or banking institution.</li>
          </ul>
        </section>

        <section id="pay-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. Salon Booking Amount</h2>
          <p>The ₹49.00 net booking amount after deduction of the ₹1.19 payment gateway fee is attributable to the salon associated with the booking.</p>
          <p>DigiSaloon will maintain transaction and booking records to identify the applicable salon and corresponding settlement amount.</p>
          <p>The ₹49.00 amount is not treated as DigiSaloon's commission.</p>
        </section>

        <section id="pay-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. Salon Settlement</h2>
          <p>DigiSaloon will settle the applicable ₹49.00 net booking amount to the concerned salon's registered settlement account.</p>
          <p>Settlement will generally be processed:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Same day, where the transaction and reconciliation are completed within the applicable settlement cycle; or</li>
            <li>Next working day, where same-day settlement is not possible.</li>
          </ul>
          <p className="pt-2">The actual settlement time may depend on:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Payment gateway processing</li>
            <li>Bank processing</li>
            <li>Transaction reconciliation</li>
            <li>Settlement cycles</li>
            <li>Weekends and bank holidays</li>
            <li>Technical issues</li>
            <li>Payment status</li>
            <li>Refund or dispute status</li>
            <li>Other operational circumstances</li>
          </ul>
        </section>

        <section id="pay-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. Settlement Example</h2>
          <p>For a successfully completed booking where the customer pays ₹50.19:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Customer Payment: ₹50.19</li>
            <li>Payment Gateway Fee: ₹1.19</li>
            <li>Salon Settlement: ₹49.00</li>
          </ul>
          <p className="pt-2">Therefore:</p>
          <p className="font-semibold text-slate-800">₹50.19 − ₹1.19 = ₹49.00</p>
          <p>The ₹49.00 will generally be settled to the concerned salon on the same day or next working day, subject to successful payment confirmation, reconciliation, and applicable settlement conditions.</p>
        </section>

        <section id="pay-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. Remaining Service Amount</h2>
          <p>The remaining service amount is paid directly by the customer to the salon.</p>
          <p>For example, for a ₹200 service:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Booking amount through DigiSaloon: ₹50.19</li>
            <li>Remaining amount at salon: ₹151.00</li>
            <li>Salon receives ₹49.00 through DigiSaloon settlement.</li>
            <li>Salon receives ₹151.00 directly from the customer.</li>
          </ul>
          <p className="pt-2">The remaining ₹151.00 is not processed or settled by DigiSaloon.</p>
          <p>Any additional service selected by the customer at the salon may be charged separately by the salon.</p>
        </section>

        <section id="pay-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. DigiSaloon Commission</h2>
          <p>DigiSaloon currently does not charge a commission on the salon's service amount.</p>
          <p>The ₹49.00 net booking amount belongs to the concerned salon and is settled to the salon according to the applicable settlement cycle.</p>
          <p>Any future platform fee, subscription fee, promotional fee, service fee, or other commercial charge introduced by DigiSaloon will be communicated through the applicable agreement, dashboard, booking information, or platform terms.</p>
        </section>

        <section id="pay-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. Payment Gateway Charges</h2>
          <p>The applicable payment gateway fee for the standard ₹50.19 booking payment is currently ₹1.19.</p>
          <p>Accordingly:</p>
          <p className="font-semibold text-slate-800">₹50.19 − ₹1.19 = ₹49.00</p>
          <p>Payment gateway charges may change based on the payment provider, payment method, transaction type, applicable taxes, commercial arrangements, or other applicable conditions.</p>
          <p>If the applicable payment gateway charges change, DigiSaloon may update the payment structure accordingly.</p>
        </section>

        <section id="pay-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. Refunds</h2>
          <p>Refunds will be handled according to the DigiSaloon Cancellation & Refund Policy.</p>
          <p>For an eligible schedule booking cancellation:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Amount paid through DigiSaloon: ₹50.19</li>
            <li>Payment gateway fee: ₹1.19</li>
            <li>Refund amount: ₹49.00</li>
          </ul>
          <p className="pt-2">The applicable refund will generally be processed to the customer's original payment method.</p>
          <p>Refunds generally take 5–7 working days to reflect in the customer's account, depending on the bank, card issuer, UPI provider, or payment service provider.</p>
        </section>

        <section id="pay-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. Live Booking Cancellation</h2>
          <p>For Live Bookings, customer cancellation is not permitted after confirmation.</p>
          <p>Therefore, the customer is generally not entitled to a refund for customer cancellation of a confirmed Live Booking.</p>
          <p>If a salon cancels a confirmed Live Booking, the customer may be eligible for the applicable refund according to the DigiSaloon Cancellation & Refund Policy.</p>
        </section>

        <section id="pay-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. Schedule Booking Cancellation</h2>
          <p>For Schedule Bookings, cancellation is permitted when at least 1 hour remains before the scheduled appointment time.</p>
          <p>For an eligible cancellation, the applicable refund is:</p>
          <p className="font-semibold text-slate-800">₹50.19 − ₹1.19 = ₹49.00</p>
          <p>If less than 1 hour remains before the appointment, customer cancellation is not permitted and the booking amount is generally non-refundable.</p>
        </section>

        <section id="pay-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. Salon Cancellation and Settlement</h2>
          <p>If a salon cancels a confirmed booking, DigiSaloon may stop or reverse the applicable salon settlement associated with that booking where the settlement has not yet been completed.</p>
          <p>If the amount has already been settled, DigiSaloon may reconcile the transaction with the salon in accordance with the applicable refund, adjustment, or settlement process.</p>
          <p>Any customer refund will be processed according to the Cancellation & Refund Policy.</p>
        </section>

        <section id="pay-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. Failed, Pending, or Reversed Payments</h2>
          <p>A payment may be classified as failed, pending, reversed, or otherwise unresolved by the payment gateway.</p>
          <p>If money has been debited from the customer's account but the booking has not been successfully confirmed, DigiSaloon may wait for the payment gateway's final transaction status before taking further action.</p>
          <p>Where necessary, DigiSaloon may reconcile the transaction with the payment gateway or banking institution.</p>
        </section>

        <section id="pay-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. Duplicate Payments</h2>
          <p>If a customer makes multiple payments for the same booking due to a technical or payment-processing issue, DigiSaloon may verify the transactions.</p>
          <p>Once a duplicate payment is confirmed, the applicable excess amount may be refunded to the original payment method.</p>
        </section>

        <section id="pay-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. No-Show Bookings</h2>
          <p>If a customer does not attend a confirmed booking without cancelling within the permitted cancellation period, the booking may be treated as a No-Show.</p>
          <p>In such cases:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>The booking amount may not be refundable.</li>
            <li>The salon may mark the booking as a No-Show.</li>
            <li>The applicable settlement may be processed or adjusted according to the booking and settlement status.</li>
          </ul>
        </section>

        <section id="pay-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. Settlement Account</h2>
          <p>Salon partners must provide accurate and valid bank account or other approved settlement details to DigiSaloon.</p>
          <p>The salon is responsible for ensuring that:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Account details are correct.</li>
            <li>Account holder information is accurate.</li>
            <li>Bank details are updated when required.</li>
            <li>The account is capable of receiving settlements.</li>
          </ul>
          <p className="pt-2">DigiSaloon will not be responsible for delays caused by incorrect or outdated settlement information provided by the salon.</p>
        </section>

        <section id="pay-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">20. Settlement Holds</h2>
          <p>DigiSaloon may temporarily hold, delay, or review a settlement where reasonably necessary due to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Payment verification</li>
            <li>Failed or reversed transactions</li>
            <li>Refund processing</li>
            <li>Duplicate transactions</li>
            <li>Fraud or security checks</li>
            <li>Customer disputes</li>
            <li>Technical reconciliation issues</li>
            <li>Incorrect salon information</li>
            <li>Legal or regulatory requirements</li>
          </ul>
          <p className="pt-2">Once the relevant issue is resolved, the applicable amount may be released or adjusted accordingly.</p>
        </section>

        <section id="pay-21" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">21. Transaction Records</h2>
          <p>DigiSaloon may maintain records relating to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Booking ID</li>
            <li>Payment ID</li>
            <li>Salon ID</li>
            <li>Customer transaction details</li>
            <li>Booking amount</li>
            <li>Payment gateway fee</li>
            <li>Net salon settlement</li>
            <li>Settlement status</li>
            <li>Refund status</li>
            <li>Transaction date and time</li>
            <li>Payment method</li>
            <li>Reconciliation information</li>
          </ul>
          <p className="pt-2">These records may be used for accounting, reconciliation, customer support, dispute resolution, fraud prevention, security, and legal or regulatory purposes.</p>
        </section>

        <section id="pay-22" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">22. Taxes and Applicable Charges</h2>
          <p>Applicable taxes, government charges, payment processing charges, or other legally required charges may apply to transactions depending on the nature of the transaction and applicable laws.</p>
          <p>Where applicable, such charges may be reflected in the relevant invoice, receipt, booking information, or transaction record.</p>
          <p>DigiSaloon and salon partners are responsible for complying with their respective applicable tax and legal obligations.</p>
        </section>

        <section id="pay-23" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">23. Payment Disputes</h2>
          <p>If a customer identifies:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>An incorrect payment</li>
            <li>Duplicate payment</li>
            <li>Unauthorized transaction</li>
            <li>Missing refund</li>
            <li>Incorrect booking amount</li>
            <li>Other payment-related issue</li>
          </ul>
          <p className="pt-2">the customer should contact DigiSaloon support with the relevant booking and transaction details.</p>
          <p>DigiSaloon may investigate the issue using its internal records and information received from the applicable payment gateway.</p>
        </section>

        <section id="pay-24" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">24. Settlement Disputes for Salon Partners</h2>
          <p>If a salon partner believes that a settlement amount is incorrect or missing, the salon should contact DigiSaloon support and provide the relevant booking, transaction, or settlement details.</p>
          <p>DigiSaloon may verify the matter against its booking records, payment gateway records, and settlement records.</p>
        </section>

        <section id="pay-25" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">25. Payment and Settlement Responsibility</h2>
          <p>DigiSaloon is responsible for processing and reconciling payments made through its platform according to the applicable payment gateway and platform procedures.</p>
          <p>The salon remains responsible for collecting the remaining service amount directly from the customer and for issuing applicable bills, invoices, receipts, or tax documents as required by applicable law.</p>
        </section>

        <section id="pay-26" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">26. Changes to Payment & Settlement Policy</h2>
          <p>DigiSaloon may update this Payment & Settlement Policy from time to time due to changes in:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Payment gateways</li>
            <li>Banking arrangements</li>
            <li>Settlement procedures</li>
            <li>Business operations</li>
            <li>Platform fees</li>
            <li>Payment methods</li>
            <li>Applicable laws or regulations</li>
          </ul>
          <p className="pt-2">The latest version published on the DigiSaloon platform will apply from its stated effective date.</p>
        </section>

        <section id="pay-27" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">27. Contact Us</h2>
          <p>For payment, settlement, refund, or transaction-related assistance, please contact:</p>
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
          <p className="pt-2">By using DigiSaloon, making a booking, or registering as a salon partner, the applicable user or salon partner acknowledges and agrees to the payment and settlement terms described in this policy.</p>
        </section>

      </div>
    </div>
  );
};