import React from "react";

export const CancellationPolicy: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Cancellation & Refund Policy
          </span>
          <span className="text-xs text-slate-400">Last Updated: 21 September 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          CANCELLATION & REFUND POLICY
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          This Cancellation & Refund Policy explains the cancellation and refund rules applicable to bookings made through DigiSaloon.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="cancel-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. Overview</h2>
          <p>DigiSaloon provides salon appointment booking services through its platform. Customers are required to pay a booking amount of ₹50.19 at the time of booking.</p>
          <p>The remaining service amount is payable directly to the salon after the service is completed.</p>
          <p>The payment gateway/payment processing fee included in the booking payment is ₹1.19.</p>
          <p>Accordingly:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Booking Amount Paid Through DigiSaloon: ₹50.19</li>
            <li>Payment Gateway Fee: ₹1.19</li>
            <li>Refundable Booking Amount, where applicable: ₹49.00</li>
          </ul>
        </section>

        <section id="cancel-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. Live Booking Cancellation</h2>
          <p>For Live Bookings, cancellation by the customer is not allowed after the booking has been confirmed.</p>
          <p>Therefore:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Customer cannot cancel a confirmed Live Booking.</li>
            <li>No refund will be provided for customer cancellation of a Live Booking.</li>
            <li>The customer is expected to visit the salon and use the booked service according to the booking details.</li>
          </ul>
          <p className="pt-2">If the salon cancels a confirmed Live Booking, the customer may be eligible for a refund of the applicable booking amount paid through DigiSaloon, subject to the circumstances and payment processing conditions.</p>
        </section>

        <section id="cancel-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. Schedule Booking Cancellation</h2>
          <p>For Schedule Bookings, customers may cancel their booking if there is at least 1 hour remaining before the scheduled appointment time.</p>
          <p>For an eligible cancellation:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Booking amount paid: ₹50.19</li>
            <li>Payment gateway fee: ₹1.19</li>
            <li>Refund amount: ₹49.00</li>
          </ul>
          <p className="pt-2">The refund will generally be processed to the original payment method.</p>
        </section>

        <section id="cancel-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. Cancellation Less Than 1 Hour Before Appointment</h2>
          <p>If less than 1 hour remains before the scheduled appointment:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Cancellation is not allowed.</li>
            <li>No refund will be provided for customer cancellation.</li>
            <li>The booking amount of ₹50.19 will not be refunded.</li>
          </ul>
        </section>

        <section id="cancel-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. Salon Cancellation</h2>
          <p>If a salon cancels a confirmed booking, DigiSaloon may process a refund of the applicable booking amount paid by the customer through the platform.</p>
          <p>The refund amount and processing may depend on the payment gateway, transaction status, and circumstances of the cancellation.</p>
        </section>

        <section id="cancel-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. Refund Processing Time</h2>
          <p>Where a refund is applicable, DigiSaloon will initiate the refund through the applicable payment gateway.</p>
          <p>Refunds generally take 5–7 working days to reflect in the customer's original payment method, depending on the bank, card issuer, UPI provider, or payment service provider.</p>
          <p>DigiSaloon does not control the final crediting time after the refund has been initiated.</p>
        </section>

        <section id="cancel-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. Payment Gateway Charges</h2>
          <p>The payment gateway may deduct applicable transaction or processing charges.</p>
          <p>For the standard DigiSaloon booking payment of ₹50.19:</p>
          <p className="font-semibold text-slate-800">₹50.19 − ₹1.19 = ₹49.00</p>
          <p>Therefore, where the applicable refund is processed under the standard cancellation rules, the customer will receive ₹49.00 rather than ₹50.19.</p>
        </section>

        <section id="cancel-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. Service Amount Paid to Salon</h2>
          <p>The remaining service amount is paid directly to the salon.</p>
          <p>For example, if a salon service costs ₹200:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Amount paid through DigiSaloon: ₹50.19</li>
            <li>Payment gateway fee: ₹1.19</li>
            <li>Refundable booking amount, if eligible: ₹49.00</li>
            <li>Remaining service amount payable to salon: ₹151.00</li>
            <li>Total amount paid by customer when the service is completed: ₹201.19</li>
          </ul>
          <p className="pt-2">The final service price shown at the time of booking will be applicable, subject to any additional services or charges accepted by the customer at the salon.</p>
        </section>

        <section id="cancel-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. No-Show</h2>
          <p>If a customer does not visit the salon for a confirmed booking without cancelling within the permitted cancellation period:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>The booking may be treated as a no-show.</li>
            <li>The booking amount may not be refundable.</li>
            <li>The salon may mark the booking as a no-show through the DigiSaloon partner system.</li>
          </ul>
        </section>

        <section id="cancel-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. Duplicate or Failed Transactions</h2>
          <p>If a customer is charged more than once for the same booking due to a technical or payment-processing issue, DigiSaloon will review the transaction.</p>
          <p>Where a duplicate payment is confirmed, the applicable excess amount may be refunded to the original payment method after verification.</p>
          <p>For failed transactions where money has been debited from the customer's account but the booking is not successfully confirmed, the amount will generally be handled according to the payment gateway and banking settlement process.</p>
        </section>

        <section id="cancel-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. Refund Method</h2>
          <p>Approved refunds will normally be made to the original payment method used by the customer.</p>
          <p>DigiSaloon will not normally provide cash refunds or refunds to an unrelated payment account.</p>
        </section>

        <section id="cancel-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. Refund Status</h2>
          <p>Customers may contact DigiSaloon support if an eligible refund has not been received within the expected processing period.</p>
          <p>When contacting support, customers should provide relevant booking or transaction details so that DigiSaloon can verify the payment.</p>
        </section>

        <section id="cancel-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. Service Quality Issues</h2>
          <p>Issues relating to the quality, outcome, or satisfaction of a salon service should first be reported to DigiSaloon support with the relevant booking details.</p>
          <p>DigiSaloon may review the matter with the concerned salon and determine the appropriate resolution based on the circumstances.</p>
        </section>

        <section id="cancel-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. Changes to a Booking</h2>
          <p>Any changes to a booking may be subject to availability and the applicable booking rules.</p>
          <p>Customers should contact DigiSaloon support as soon as possible if they need assistance with a confirmed booking.</p>
        </section>

        <section id="cancel-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. Policy Changes</h2>
          <p>DigiSaloon may update this Cancellation & Refund Policy from time to time to reflect changes in its services, payment processes, business operations, or applicable requirements.</p>
          <p>The updated policy will be published on the DigiSaloon website or application with the revised effective date.</p>
        </section>

        <section id="cancel-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. Contact Us</h2>
          <p>For cancellation, refund, or booking-related assistance, please contact:</p>
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
          <p className="pt-2">By making a booking through DigiSaloon, the customer acknowledges and agrees to the cancellation and refund terms described in this policy.</p>
        </section>

      </div>
    </div>
  );
};