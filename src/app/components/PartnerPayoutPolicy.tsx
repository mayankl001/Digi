import React from "react";

export const PartnerPayoutPolicy: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Partner Payout & Settlement Terms
          </span>
          <span className="text-xs text-slate-400">Last Updated: 21 September 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          PARTNER PAYOUT & SETTLEMENT TERMS
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          These Partner Payout & Settlement Terms (“Terms”) explain how DigiSaloon processes, calculates, and settles booking-related amounts payable to participating salon partners (“Partner”, “Salon”, “you”, or “your”).
        </p>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          By registering as a DigiSaloon Partner and accepting bookings through the DigiSaloon platform, you agree to these Terms.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="payout-terms-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. PURPOSE</h2>
          <p>These Terms establish the framework for:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Booking-related payments collected through DigiSaloon</li>
            <li>Payment gateway deductions</li>
            <li>Partner payout calculations</li>
            <li>Settlement timing</li>
            <li>Refund and cancellation adjustments</li>
            <li>Failed, reversed, or disputed transactions</li>
            <li>Partner settlement account requirements</li>
            <li>Settlement holds and adjustments</li>
            <li>Transaction records and reconciliation</li>
          </ul>
          <p className="pt-2">These Terms should be read together with the DigiSaloon Partner Terms & Conditions, Payment & Settlement Policy, Cancellation & Refund Policy, Booking & Appointment Policy, and other applicable DigiSaloon policies.</p>
        </section>

        <section id="payout-terms-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. CURRENT BOOKING PAYMENT MODEL</h2>
          <p>For bookings made through DigiSaloon:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>The customer pays a fixed ₹50.19 booking amount through DigiSaloon at the time of booking.</li>
            <li>A ₹1.19 payment gateway/processing fee may be deducted from this booking amount.</li>
            <li>The resulting ₹49 net amount is attributable to the concerned salon booking and is subject to the applicable settlement process.</li>
            <li>The remaining service amount is paid by the customer directly to the salon after the service.</li>
            <li>DigiSaloon does not collect the remaining service amount on behalf of the salon under this booking model.</li>
          </ul>
        </section>

        <section id="payout-terms-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. PARTNER PAYOUT CALCULATION</h2>
          <p>The standard booking payout is calculated as follows:</p>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-1 my-2 font-mono text-xs md:text-sm">
            <p>Customer Booking Payment: ₹50.19</p>
            <p>Payment Gateway Fee: ₹1.19</p>
            <p className="font-bold text-slate-900 border-t border-slate-200 pt-1">Net Booking Amount for Partner: ₹49.00</p>
          </div>
          <p>Accordingly:</p>
          <p className="font-mono text-xs md:text-sm bg-slate-100 p-2 rounded">₹50.19 − ₹1.19 = ₹49.00</p>
          <p className="pt-2">The ₹49 amount is the net booking-related amount attributable to the salon, subject to successful payment processing, applicable refunds, reversals, disputes, adjustments, and reconciliation.</p>
        </section>

        <section id="payout-terms-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. SERVICE AMOUNT PAID DIRECTLY TO SALON</h2>
          <p>The remaining service amount is collected directly by the salon from the customer after the service.</p>
          <p>For example, if the selected salon service price is ₹200:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Customer pays ₹50.19 through DigiSaloon.</li>
            <li>₹1.19 is deducted as the applicable payment gateway fee.</li>
            <li>₹49 remains attributable to the salon from the DigiSaloon booking payment.</li>
            <li>The customer pays the remaining ₹151 directly to the salon.</li>
            <li>The customer's total out-of-pocket payment is ₹201.19.</li>
          </ul>
          <p className="pt-2">DigiSaloon does not settle the ₹151 directly-paid service amount to the salon because that amount is collected by the salon itself.</p>
        </section>

        <section id="payout-terms-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. DIGISALOON COMMISSION</h2>
          <p>Under the current standard model, DigiSaloon does not separately deduct a commission from the salon's service amount unless a different commercial arrangement has been agreed with the Partner.</p>
          <p>The payment gateway fee and other applicable transaction-related deductions may nevertheless apply to the booking payment.</p>
          <p>Any separately agreed commercial charges will be communicated to the Partner through applicable agreements, onboarding documents, or other official communication.</p>
        </section>

        <section id="payout-terms-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. SETTLEMENT TIMING</h2>
          <p>The standard ₹49 net booking amount may be settled to the Partner's registered settlement account:</p>
          <p className="font-semibold text-slate-900">Same day or the next working day, subject to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Successful payment confirmation</li>
            <li>Payment gateway processing</li>
            <li>Reconciliation</li>
            <li>Bank processing</li>
            <li>Correct Partner account information</li>
            <li>No applicable refund, reversal, dispute, fraud review, or settlement hold</li>
          </ul>
          <p className="pt-2">Actual credit time may vary depending on payment gateway and banking processes.</p>
        </section>

        <section id="payout-terms-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. SETTLEMENT ACCOUNT</h2>
          <p>Partners must provide valid and accurate bank account information for receiving settlements.</p>
          <p>The Partner is responsible for ensuring that:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Account holder information is accurate</li>
            <li>Bank account number is correct</li>
            <li>IFSC information is correct</li>
            <li>The account is active</li>
            <li>The account belongs to or is authorized for the Partner</li>
            <li>Updated banking information is promptly provided to DigiSaloon</li>
          </ul>
          <p className="pt-2">DigiSaloon is not responsible for delays caused by incorrect or outdated banking information supplied by the Partner.</p>
        </section>

        <section id="payout-terms-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. BANK ACCOUNT CHANGES</h2>
          <p>If a Partner wants to change its registered settlement account, DigiSaloon may require verification before processing the change.</p>
          <p>DigiSaloon may temporarily hold settlements while updated bank information is being verified.</p>
          <p>Partners should not provide another person's bank account without appropriate authorization.</p>
        </section>

        <section id="payout-terms-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. PAYMENT GATEWAY PROCESSING</h2>
          <p>DigiSaloon may use third-party payment service providers, including Razorpay or another authorized payment processor, to process customer payments.</p>
          <p>Payment processing may involve:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Transaction processing fees</li>
            <li>Payment gateway deductions</li>
            <li>Refund processing</li>
            <li>Payment reversals</li>
            <li>Settlement processing</li>
            <li>Fraud and risk checks</li>
            <li>Banking delays</li>
          </ul>
          <p className="pt-2">Applicable third-party processing charges may affect the net amount available for settlement.</p>
        </section>

        <section id="payout-terms-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. REFUNDS AND SETTLEMENT ADJUSTMENTS</h2>
          <p>If a customer becomes eligible for a refund under DigiSaloon's Cancellation & Refund Policy, the relevant booking amount may be refunded to the customer.</p>
          <p>For eligible Schedule Booking cancellations made at least 1 hour before the appointment:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Customer booking payment: ₹50.19</li>
            <li>Payment gateway fee: ₹1.19</li>
            <li>Refund amount: ₹49</li>
          </ul>
          <p className="pt-2">The ₹49 amount may therefore not be settled to the Partner, or may be adjusted/reversed if it has already been included in a settlement process.</p>
        </section>

        <section id="payout-terms-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. LIVE BOOKING CANCELLATION</h2>
          <p>Live Bookings generally cannot be cancelled by the customer after confirmation.</p>
          <p>Accordingly, customer cancellation of a confirmed Live Booking does not normally create a refund entitlement.</p>
          <p>Any cancellation by the salon may be handled according to the applicable DigiSaloon cancellation, refund, and partner policies.</p>
        </section>

        <section id="payout-terms-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. SALON-CANCELLED BOOKINGS</h2>
          <p>If a Partner cancels a confirmed booking, DigiSaloon may:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Stop the related settlement where possible</li>
            <li>Reverse or adjust a pending payout</li>
            <li>Process an applicable customer refund</li>
            <li>Recover amounts already settled where appropriate</li>
            <li>Review the Partner's account for repeated cancellations</li>
          </ul>
          <p className="pt-2">Repeated or unreasonable cancellations may result in account review or other action under applicable Partner policies.</p>
        </section>

        <section id="payout-terms-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. FAILED PAYMENTS</h2>
          <p>If a customer's payment fails or is not successfully confirmed:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>No settlement is due for that failed transaction.</li>
            <li>The booking may not be treated as confirmed.</li>
            <li>Any temporary payment hold or pending transaction may be resolved according to the payment provider's process.</li>
          </ul>
          <p className="pt-2">Partners should rely on the booking status displayed through the authorized DigiSaloon Partner system rather than treating an unconfirmed payment as a completed booking.</p>
        </section>

        <section id="payout-terms-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. PENDING TRANSACTIONS</h2>
          <p>A transaction marked as pending may be subject to payment gateway or banking confirmation.</p>
          <p>DigiSaloon may wait for final confirmation before:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Confirming the booking</li>
            <li>Releasing the payout</li>
            <li>Processing a refund</li>
            <li>Completing settlement</li>
          </ul>
          <p className="pt-2">Partners should not assume that a pending transaction has been successfully settled.</p>
        </section>

        <section id="payout-terms-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. REVERSED OR CHARGED-BACK TRANSACTIONS</h2>
          <p>If a payment is reversed, disputed, charged back, or otherwise determined to be invalid, DigiSaloon may:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Hold the related settlement</li>
            <li>Reverse an unpaid payout</li>
            <li>Adjust future settlements</li>
            <li>Recover amounts already paid where permitted</li>
            <li>Request supporting information from the Partner</li>
          </ul>
          <p className="pt-2">The Partner agrees to cooperate with reasonable payment investigations.</p>
        </section>

        <section id="payout-terms-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. DUPLICATE PAYMENTS</h2>
          <p>If a customer payment is accidentally processed more than once, DigiSaloon may investigate the duplicate transaction and make the appropriate refund or settlement adjustment.</p>
          <p>Any resulting adjustment may be reflected in the Partner's settlement records.</p>
        </section>

        <section id="payout-terms-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. SETTLEMENT HOLDS</h2>
          <p>DigiSaloon may temporarily hold a settlement where reasonably necessary due to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Payment verification</li>
            <li>Refund processing</li>
            <li>Transaction reconciliation</li>
            <li>Suspected fraudulent activity</li>
            <li>Chargeback or dispute</li>
            <li>Incorrect bank details</li>
            <li>Account verification</li>
            <li>Regulatory or legal requirements</li>
            <li>Technical reconciliation issues</li>
            <li>Material disagreement concerning the transaction</li>
          </ul>
          <p className="pt-2">Where appropriate, DigiSaloon may notify the Partner about the reason for the hold.</p>
        </section>

        <section id="payout-terms-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. FRAUD AND RISK REVIEW</h2>
          <p>DigiSaloon may conduct transaction and account reviews to protect customers, Partners, and the platform.</p>
          <p>Where suspicious activity is identified, DigiSaloon may temporarily delay settlement while the relevant transaction is reviewed.</p>
        </section>

        <section id="payout-terms-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. TAXES AND STATUTORY OBLIGATIONS</h2>
          <p>Partners are responsible for their own applicable tax and statutory obligations relating to amounts received from customers and/or DigiSaloon.</p>
          <p>Where applicable, Partners may be required to provide valid GST, PAN, bank, or other business information.</p>
          <p>DigiSaloon may request or verify such information where reasonably necessary for business, accounting, tax, compliance, or settlement purposes.</p>
        </section>

        <section id="payout-terms-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">20. GST INFORMATION</h2>
          <p>Where a Partner provides GST details to DigiSaloon, the Partner is responsible for ensuring that the information supplied is accurate and valid.</p>
          <p>DigiSaloon may verify GST-related information before using it for applicable platform, billing, settlement, or compliance processes.</p>
          <p>Nothing in these Terms should be treated as tax advice. Partners should obtain appropriate professional advice regarding their own GST and tax obligations.</p>
        </section>

        <section id="payout-terms-21" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">21. PARTNER SERVICE COLLECTIONS</h2>
          <p>The remaining service amount paid directly by the customer to the salon is the Partner's responsibility to collect and record.</p>
          <p>The Partner should:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Clearly communicate applicable service prices</li>
            <li>Provide appropriate bills/receipts where required</li>
            <li>Avoid unauthorized charges</li>
            <li>Collect only applicable amounts</li>
            <li>Follow applicable tax requirements</li>
            <li>Maintain accurate transaction records</li>
          </ul>
          <p className="pt-2">DigiSaloon is not responsible for amounts independently collected by the Partner outside the DigiSaloon payment flow.</p>
        </section>

        <section id="payout-terms-22" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">22. NO UNAUTHORIZED CUSTOMER CHARGES</h2>
          <p>Partners must not use the DigiSaloon booking system to impose unauthorized booking-related charges on customers.</p>
          <p>Any additional service, upgrade, product, or other charge should be clearly communicated to the customer before payment and should be consistent with applicable DigiSaloon policies and applicable law.</p>
        </section>

        <section id="payout-terms-23" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">23. SETTLEMENT RECONCILIATION</h2>
          <p>Partners should regularly review their settlement records and compare them with:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Completed bookings</li>
            <li>Booking IDs</li>
            <li>Customer payments</li>
            <li>Refunds</li>
            <li>Cancellations</li>
            <li>Adjustments</li>
            <li>Settlement amounts</li>
            <li>Bank credits</li>
          </ul>
          <p className="pt-2">If a discrepancy is identified, the Partner should contact DigiSaloon support with the relevant booking or transaction information.</p>
        </section>

        <section id="payout-terms-24" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">24. SETTLEMENT DISPUTES</h2>
          <p>If a Partner believes that a settlement amount is incorrect, the Partner should provide:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Booking ID</li>
            <li>Transaction ID, where available</li>
            <li>Booking date</li>
            <li>Customer/service details relevant to the dispute</li>
            <li>Expected amount</li>
            <li>Amount received</li>
            <li>Description of the discrepancy</li>
            <li>Supporting documents, where applicable</li>
          </ul>
          <p className="pt-2">DigiSaloon may review its transaction records and payment-provider information before resolving the issue.</p>
        </section>

        <section id="payout-terms-25" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">25. RECORDS AND TRANSACTION HISTORY</h2>
          <p>DigiSaloon may maintain records relating to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Customer booking payments</li>
            <li>Payment gateway transactions</li>
            <li>Partner payouts</li>
            <li>Refunds</li>
            <li>Cancellations</li>
            <li>Settlement adjustments</li>
            <li>Bank settlement information</li>
            <li>Disputes and chargebacks</li>
          </ul>
          <p className="pt-2">Records may be retained in accordance with applicable laws and DigiSaloon's Privacy Policy and Data Retention practices.</p>
        </section>

        <section id="payout-terms-26" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">26. THIRD-PARTY PAYMENT PROVIDER</h2>
          <p>Where a third-party payment provider is used, certain payment processing and settlement activities may be governed by that provider's applicable terms and procedures.</p>
          <p>DigiSaloon is not responsible for delays caused solely by external banking, payment gateway, or financial infrastructure beyond its reasonable control.</p>
        </section>

        <section id="payout-terms-27" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">27. PLATFORM ERRORS AND CORRECTIONS</h2>
          <p>If a technical, accounting, or reconciliation error results in an incorrect settlement, DigiSaloon may correct the error.</p>
          <p>This may include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Additional settlement</li>
            <li>Settlement adjustment</li>
            <li>Recovery from future settlements</li>
            <li>Refund correction</li>
            <li>Transaction reversal</li>
          </ul>
          <p className="pt-2">DigiSaloon will use reasonable records to determine the appropriate correction.</p>
        </section>

        <section id="payout-terms-28" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">28. PARTNER RESPONSIBILITIES</h2>
          <p>The Partner must:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Maintain accurate account and bank information</li>
            <li>Accept and fulfill confirmed bookings appropriately</li>
            <li>Provide the booked service as agreed</li>
            <li>Maintain accurate service prices</li>
            <li>Follow cancellation and booking rules</li>
            <li>Cooperate with payment investigations</li>
            <li>Maintain applicable tax and business records</li>
            <li>Report settlement discrepancies promptly</li>
            <li>Protect customer and platform information</li>
          </ul>
        </section>

        <section id="payout-terms-29" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">29. SUSPENSION OR TERMINATION</h2>
          <p>If a Partner account is suspended or terminated, DigiSaloon may continue to process legitimate outstanding transactions and applicable refunds or adjustments.</p>
          <p>Pending settlements may be temporarily held where reasonably necessary to complete reconciliation, resolve disputes, or comply with applicable requirements.</p>
        </section>

        <section id="payout-terms-30" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">30. NO GUARANTEE OF FIXED SETTLEMENT TIME</h2>
          <p>Although DigiSaloon generally aims to settle the standard ₹49 net booking amount on the same day or next working day, settlement timing is not guaranteed in every situation.</p>
          <p>Bank holidays, payment gateway delays, transaction reviews, refunds, disputes, technical problems, incorrect account details, and other circumstances may affect settlement timing.</p>
        </section>

        <section id="payout-terms-31" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">31. POLICY CHANGES</h2>
          <p>DigiSaloon may update these Partner Payout & Settlement Terms from time to time to reflect changes in:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Payment systems</li>
            <li>Settlement procedures</li>
            <li>Business operations</li>
            <li>Third-party payment providers</li>
            <li>Legal or regulatory requirements</li>
            <li>Platform features</li>
          </ul>
          <p className="pt-2">Updated Terms will be published or communicated through appropriate DigiSaloon channels.</p>
        </section>

        <section id="payout-terms-32" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">32. RELATIONSHIP WITH OTHER POLICIES</h2>
          <p>These Terms should be read together with:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Partner Terms & Conditions</li>
            <li>Partner Onboarding & Verification Policy</li>
            <li>Payment & Settlement Policy</li>
            <li>Cancellation & Refund Policy</li>
            <li>Booking & Appointment Policy</li>
            <li>Privacy Policy</li>
            <li>Security Policy</li>
            <li>Grievance Redressal & Contact Policy</li>
            <li>Other applicable DigiSaloon policies</li>
          </ul>
          <p className="pt-2">If a specific policy contains more detailed rules for a particular transaction or process, those specific rules may apply to that situation.</p>
        </section>

        <section id="payout-terms-33" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">33. CONTACT INFORMATION</h2>
          <p>For payout, settlement, refund, payment, or transaction-related queries:</p>
          <div className="bg-slate-900 text-slate-200 p-5 rounded-xl space-y-3 text-xs md:text-sm mt-3">
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
          <p className="pt-2 text-xs text-slate-500">Partners should include the relevant booking ID or transaction ID when contacting DigiSaloon regarding a settlement issue.</p>
          <p className="pt-2 text-xs text-slate-400 font-medium">© DigiSaloon. All Rights Reserved.</p>
        </section>

      </div>
    </div>
  );
};