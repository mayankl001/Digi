import React from "react";

export const PartnerPayoutPolicy: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Payout & Settlement Terms
          </span>
          <span className="text-xs text-slate-400">Last Updated: 12 August 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          PARTNER PAYOUT & SETTLEMENT TERMS
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          These Partner Payout & Settlement Terms explain how DigiSaloon handles payments, settlements and payouts relating to eligible salon bookings.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="payt-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. Scope</h2>
          <p>These Terms apply to DigiSaloon salon partners using:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Partner App</li>
            <li>Partner Web App</li>
            <li>Manage Web App, where applicable</li>
            <li>DigiSaloon booking and payment services</li>
          </ul>
        </section>

        <section id="payt-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. Payment Methods</h2>
          <p>Depending on the booking and platform functionality, customers may pay through:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Online payment</li>
            <li>Pay-at-Salon</li>
          </ul>
          <p>The payment method applicable to a booking will be displayed through the relevant DigiSaloon interface.</p>
        </section>

        <section id="payt-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. Online Payments</h2>
          <p>For online-paid bookings, the customer pays the applicable booking amount through the supported payment process.</p>
          <p>The payment may be processed through an authorized payment provider.</p>
        </section>

        <section id="payt-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. Pay-at-Salon</h2>
          <p>For Pay-at-Salon bookings, the customer pays the applicable amount directly to the salon.</p>
          <p>The salon is responsible for collecting the applicable payment from the customer.</p>
          <p>DigiSaloon does not collect the Pay-at-Salon amount on behalf of the salon unless the platform specifically states otherwise.</p>
        </section>

        <section id="payt-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. DigiSaloon Commission</h2>
          <p>Under DigiSaloon's current commercial arrangement, DigiSaloon does not charge commission on salon bookings.</p>
          <p>Any future commercial change will be communicated through the applicable partner terms or agreement.</p>
        </section>

        <section id="payt-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. Settlement Eligibility</h2>
          <p>Eligible online-paid booking amounts may be settled to the registered salon settlement account after the applicable transaction conditions are satisfied.</p>
          <p>Settlement may depend on:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Successful payment confirmation</li>
            <li>Booking status</li>
            <li>Refund status</li>
            <li>Transaction reconciliation</li>
            <li>Payment-provider confirmation</li>
            <li>Accurate partner banking information</li>
          </ul>
        </section>

        <section id="payt-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. Settlement Timeline</h2>
          <p>DigiSaloon's intended settlement cycle for eligible online-paid bookings is same-day or next-day settlement.</p>
          <p>The actual settlement time may vary due to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Payment-provider processing</li>
            <li>Banking systems</li>
            <li>Weekends or bank holidays</li>
            <li>Refund or dispute processing</li>
            <li>Technical issues</li>
            <li>Account verification</li>
            <li>Other circumstances outside DigiSaloon's reasonable control</li>
          </ul>
        </section>

        <section id="payt-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. Bank Account Information</h2>
          <p>Partners must provide accurate settlement information.</p>
          <p>This may include:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Account holder name</li>
            <li>Bank account number</li>
            <li>IFSC</li>
            <li>Other information reasonably required for settlement</li>
          </ul>
          <p>Partners are responsible for ensuring that the information is correct.</p>
        </section>

        <section id="payt-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. Incorrect Bank Information</h2>
          <p>If incorrect or incomplete banking information is provided, settlement may be delayed or unsuccessful.</p>
          <p>DigiSaloon may request updated or verified information before processing further settlements.</p>
        </section>

        <section id="payt-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. Change of Bank Account</h2>
          <p>Partners must notify DigiSaloon through the applicable process when changing settlement account details.</p>
          <p>DigiSaloon may temporarily hold or restrict settlements while updated banking information is verified.</p>
        </section>

        <section id="payt-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. Refunds</h2>
          <p>Where a customer is eligible for a refund, DigiSaloon may adjust the applicable transaction or settlement amount accordingly.</p>
          <p>If a refund relates to a salon-cancelled online-paid booking, the customer is eligible for a 100% refund of the amount paid, subject to applicable payment-processing procedures.</p>
        </section>

        <section id="payt-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. Cancelled Bookings</h2>
          <p>A cancelled booking may affect settlement eligibility.</p>
          <p>Where an online-paid booking is cancelled before the service is provided, the applicable amount may be refunded or excluded from partner settlement according to the applicable cancellation rules.</p>
        </section>

        <section id="payt-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. No-Show Bookings</h2>
          <p>The treatment of a no-show booking may depend on the applicable booking and cancellation terms.</p>
          <p>Partners must accurately record no-show status and must not falsely mark bookings.</p>
        </section>

        <section id="payt-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. Transaction Reconciliation</h2>
          <p>DigiSaloon may reconcile:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Booking records</li>
            <li>Payment records</li>
            <li>Refunds</li>
            <li>Cancellations</li>
            <li>Settlement records</li>
          </ul>
          <p>to ensure that the appropriate amount is settled to the partner.</p>
        </section>

        <section id="payt-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. Settlement Statements</h2>
          <p>Where settlement reporting is available, partners may receive or view information such as:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Booking reference</li>
            <li>Transaction amount</li>
            <li>Refund adjustment</li>
            <li>Settlement amount</li>
            <li>Settlement date</li>
            <li>Transaction status</li>
          </ul>
        </section>

        <section id="payt-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. Payment Provider</h2>
          <p>DigiSaloon may use third-party payment providers to process online transactions.</p>
          <p>Payment providers may have their own terms, processing timelines and technical requirements.</p>
        </section>

        <section id="payt-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. Payment Processing Delays</h2>
          <p>DigiSaloon is not responsible for delays caused by circumstances outside its reasonable control, including:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Banking system failures</li>
            <li>Payment-provider outages</li>
            <li>Incorrect bank details</li>
            <li>Network failures</li>
            <li>Regulatory restrictions</li>
            <li>Technical interruptions</li>
          </ul>
        </section>

        <section id="payt-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. Disputed Transactions</h2>
          <p>If a transaction is disputed, DigiSaloon may temporarily hold or adjust the related settlement while the matter is reviewed.</p>
          <p>Partners should cooperate with reasonable transaction verification requests.</p>
        </section>

        <section id="payt-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. Fraud Prevention</h2>
          <p>DigiSaloon may delay, restrict or review settlements where there are reasonable concerns regarding:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Fraud</li>
            <li>Suspicious transactions</li>
            <li>Fake bookings</li>
            <li>Payment manipulation</li>
            <li>Account misuse</li>
            <li>Unauthorized activity</li>
          </ul>
        </section>

        <section id="payt-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">20. Taxes</h2>
          <p>Partners are responsible for their own applicable tax obligations arising from their salon business and income.</p>
          <p>DigiSaloon may provide transaction or settlement information where appropriate.</p>
        </section>

        <section id="payt-21" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">21. Settlement Records</h2>
          <p>DigiSaloon may retain transaction and settlement records for purposes including:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Accounting</li>
            <li>Reconciliation</li>
            <li>Customer support</li>
            <li>Fraud prevention</li>
            <li>Dispute resolution</li>
            <li>Legal compliance</li>
          </ul>
        </section>

        <section id="payt-22" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">22. Partner Responsibility</h2>
          <p>Partners are responsible for:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Providing accurate bank information</li>
            <li>Monitoring settlement records</li>
            <li>Reporting discrepancies promptly</li>
            <li>Maintaining account security</li>
            <li>Cooperating with payment investigations</li>
          </ul>
        </section>

        <section id="payt-23" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">23. Settlement Disputes</h2>
          <p>If a partner believes that a settlement is incorrect, the partner should contact DigiSaloon support with relevant information, such as:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Booking reference</li>
            <li>Transaction details</li>
            <li>Settlement date</li>
            <li>Expected amount</li>
            <li>Relevant supporting information</li>
          </ul>
        </section>

        <section id="payt-24" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">24. No Cash Payout From DigiSaloon</h2>
          <p>Unless specifically stated otherwise, DigiSaloon settlements are made to the verified partner settlement account.</p>
        </section>

        <section id="payt-25" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">25. Changes to Settlement Terms</h2>
          <p>DigiSaloon may update settlement procedures, payment methods or payout timelines where reasonably necessary.</p>
          <p>Material commercial changes may be communicated through the applicable partner agreement, platform or other appropriate channel.</p>
        </section>

        <section id="payt-26" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">26. Relationship With Other Policies</h2>
          <p>These Terms should be read together with:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Salon Partner Terms & Conditions</li>
            <li>Partner Onboarding & Verification Policy</li>
            <li>Partner Service, Pricing & Cancellation Policy</li>
            <li>Cancellation & Refund Policy</li>
            <li>Payment & Settlement Policy</li>
            <li>Third-Party Services & Payment Provider Policy</li>
          </ul>
        </section>

        <section id="payt-27" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">27. Policy Updates</h2>
          <p>DigiSaloon may update these Terms to reflect changes in payment systems, banking processes, partner arrangements or applicable requirements.</p>
        </section>

        <section id="payt-28" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">28. Contact</h2>
          <p>For payout and settlement-related concerns:</p>
          <div className="bg-slate-900 text-slate-200 p-5 rounded-xl space-y-2 text-xs md:text-sm">
            <p className="font-bold text-white text-base">DigiSaloon</p>
            <p><strong>Email:</strong> <a href="mailto:support@digisaloon.in" className="text-red-400 hover:underline font-mono">support@digisaloon.in</a></p>
            <p><strong>Phone:</strong> 9973499471</p>
            <p><strong>Address:</strong> Angara, Ranchi, Jharkhand – 835103</p>
            <p><strong>Website:</strong> digisaloon.in</p>
          </div>
        </section>

      </div>
    </div>
  );
};