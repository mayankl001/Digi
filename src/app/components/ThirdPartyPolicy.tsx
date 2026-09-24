import React from "react";

export const ThirdPartyPolicy: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Third-Party Services & Payment Provider Policy
          </span>
          <span className="text-xs text-slate-400">Last Updated: 21 September 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          THIRD-PARTY SERVICES & PAYMENT PROVIDER POLICY
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          This Third-Party Services & Payment Provider Policy (“Policy”) explains how DigiSaloon may use third-party service providers, technology providers, payment processors, communication providers, cloud platforms, analytics services, and other external services in connection with its website, applications, Partner systems, Manage Web, Admin Panel, and related services.
        </p>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          By using DigiSaloon services, users, Partners, and other authorized persons acknowledge that certain features may depend on third-party services.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="sec-tp-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. PURPOSE</h2>
          <p>The purpose of this Policy is to explain:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>DigiSaloon's use of third-party services</li>
            <li>Payment provider involvement</li>
            <li>Payment processing</li>
            <li>Payment gateway fees</li>
            <li>Refund processing</li>
            <li>Settlement processing</li>
            <li>Third-party data processing</li>
            <li>External service availability</li>
            <li>Third-party terms and policies</li>
            <li>Security considerations</li>
            <li>Third-party service changes</li>
          </ul>
        </section>

        <section id="sec-tp-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. SCOPE</h2>
          <p>This Policy applies to third-party services used in connection with:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>DigiSaloon Website</li>
            <li>Customer App</li>
            <li>Salon Partner App</li>
            <li>Partner Web App</li>
            <li>Manage Web</li>
            <li>Admin Panel</li>
            <li>Booking systems</li>
            <li>Payment systems</li>
            <li>Notifications</li>
            <li>Authentication</li>
            <li>Cloud infrastructure</li>
            <li>Databases</li>
            <li>Analytics</li>
            <li>Customer support</li>
            <li>Security and monitoring</li>
            <li>Other DigiSaloon platform functions</li>
          </ul>
        </section>

        <section id="sec-tp-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. THIRD-PARTY SERVICE PROVIDERS</h2>
          <p>DigiSaloon may use third-party providers for services such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Payment processing</li>
            <li>Cloud hosting</li>
            <li>Database infrastructure</li>
            <li>Authentication</li>
            <li>Email delivery</li>
            <li>SMS or messaging</li>
            <li>Push notifications</li>
            <li>Analytics</li>
            <li>Security monitoring</li>
            <li>Error monitoring</li>
            <li>Customer support</li>
            <li>Maps and location services</li>
            <li>Other technical or operational services</li>
          </ul>
          <p className="pt-2">The specific providers used by DigiSaloon may change over time.</p>
        </section>

        <section id="sec-tp-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. PAYMENT PROVIDER</h2>
          <p>DigiSaloon may use a third-party payment service provider such as Razorpay to process customer payments.</p>
          <p>The payment provider may facilitate:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Payment collection</li>
            <li>Payment authorization</li>
            <li>Transaction processing</li>
            <li>Payment status updates</li>
            <li>Refund processing</li>
            <li>Payment reconciliation</li>
            <li>Settlement-related processing</li>
            <li>Fraud and risk controls</li>
          </ul>
          <p className="pt-2">Payment processing may be subject to the payment provider's own terms, policies, and applicable requirements.</p>
        </section>

        <section id="sec-tp-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. CUSTOMER BOOKING PAYMENT</h2>
          <p>Under DigiSaloon's current booking model:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Customer pays ₹50.19 at the time of booking through DigiSaloon's payment system.</li>
            <li>A ₹1.19 payment gateway/processing fee may be deducted.</li>
            <li>The resulting ₹49 net booking amount is attributable to the concerned salon, subject to successful processing and applicable adjustments.</li>
            <li>The remaining service amount is paid directly by the customer to the salon.</li>
          </ul>
        </section>

        <section id="sec-tp-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. PAYMENT EXAMPLE</h2>
          <p>For a service priced at ₹200:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Booking payment through DigiSaloon: <strong>₹50.19</strong></li>
            <li>Payment gateway fee: <strong>₹1.19</strong></li>
            <li>Net booking amount attributable to salon: <strong>₹49</strong></li>
            <li>Remaining service amount paid directly to salon: <strong>₹151</strong></li>
            <li>Customer's total payment: <strong>₹201.19</strong></li>
          </ul>
          <p className="pt-2">The ₹151 is collected directly by the salon and is not processed or settled by DigiSaloon.</p>
        </section>

        <section id="sec-tp-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. PAYMENT GATEWAY FEES</h2>
          <p>Payment processing may involve fees charged by the applicable payment provider.</p>
          <p>Under the current DigiSaloon booking example, the payment gateway deduction is ₹1.19 from the ₹50.19 booking payment.</p>
          <p>Applicable payment processing charges may change based on the provider's applicable pricing, transaction type, payment method, or other circumstances.</p>
        </section>

        <section id="sec-tp-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. PAYMENT INFORMATION</h2>
          <p>Payment transactions may involve information required to process the payment.</p>
          <p>Depending on the payment method and provider, this may include transaction-related information such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Transaction ID</li>
            <li>Payment status</li>
            <li>Amount</li>
            <li>Currency</li>
            <li>Payment method</li>
            <li>Refund status</li>
            <li>Settlement status</li>
            <li>Relevant customer or booking reference</li>
          </ul>
          <p className="pt-2">DigiSaloon may not directly receive or store all sensitive payment credentials used by customers.</p>
        </section>

        <section id="sec-tp-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. PAYMENT CREDENTIALS</h2>
          <p>Customers should never share:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>UPI PIN</li>
            <li>ATM PIN</li>
            <li>Card PIN</li>
            <li>OTP</li>
            <li>Internet banking password</li>
            <li>Payment-provider password</li>
            <li>Authentication codes</li>
          </ul>
          <p className="pt-1">with DigiSaloon personnel, salon Staff, or any other person claiming to represent DigiSaloon.</p>
          <p className="font-medium text-slate-800">DigiSaloon will not intentionally request such confidential authentication information through ordinary customer support channels.</p>
        </section>

        <section id="sec-tp-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. PAYMENT SECURITY</h2>
          <p>Payment transactions may be processed through the payment provider's security infrastructure.</p>
          <p>DigiSaloon may use reasonable technical and organizational safeguards around its own systems and payment integrations.</p>
          <p>However, payment processing may also depend on the payment provider, banks, card networks, UPI infrastructure, and other external systems.</p>
        </section>

        <section id="sec-tp-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. PAYMENT SUCCESS AND BOOKING CONFIRMATION</h2>
          <p>A booking should generally be treated as payment-confirmed only after DigiSaloon receives appropriate confirmation from its payment system or payment provider.</p>
          <p>A payment that appears:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Pending</li>
            <li>Failed</li>
            <li>Cancelled</li>
            <li>Reversed</li>
            <li>Unconfirmed</li>
          </ul>
          <p className="pt-1">may not be treated as a completed booking payment until the relevant status is confirmed.</p>
        </section>

        <section id="sec-tp-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. FAILED PAYMENTS</h2>
          <p>If a payment fails:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>The booking may not be confirmed.</li>
            <li>No Partner payout is normally due for the failed transaction.</li>
            <li>The payment provider may handle any applicable reversal or release process.</li>
            <li>DigiSaloon may update the transaction status after receiving confirmation.</li>
          </ul>
          <p className="pt-2">Customers should avoid repeatedly making payments for the same booking without checking the transaction status where possible.</p>
        </section>

        <section id="sec-tp-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. PENDING PAYMENTS</h2>
          <p>A payment may remain pending because of:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Bank processing</li>
            <li>Payment-provider processing</li>
            <li>UPI or banking delays</li>
            <li>Network issues</li>
            <li>Technical problems</li>
            <li>Other external processing conditions</li>
          </ul>
          <p className="pt-2">DigiSaloon may wait for final confirmation before confirming the booking or processing a refund or settlement.</p>
        </section>

        <section id="sec-tp-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. REFUNDS</h2>
          <p>Eligible refunds are processed according to DigiSaloon's Cancellation & Refund Policy.</p>
          <p>For an eligible Schedule Booking cancellation made at least 1 hour before the appointment:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Original booking payment: ₹50.19</li>
            <li>Payment gateway fee: ₹1.19</li>
            <li>Refund amount: ₹49</li>
          </ul>
          <p className="pt-2">Refund processing may be initiated through the applicable payment provider.</p>
        </section>

        <section id="sec-tp-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. REFUND PROCESSING TIME</h2>
          <p>Eligible refunds are generally expected to be credited within 5–7 working days, subject to payment-provider and banking processing.</p>
          <p>Actual credit time may vary depending on:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Payment method</li>
            <li>Bank</li>
            <li>Payment provider</li>
            <li>Transaction status</li>
            <li>Holidays</li>
            <li>Technical processing</li>
          </ul>
        </section>

        <section id="sec-tp-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. PAYMENT REVERSALS</h2>
          <p>A payment may be reversed due to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Failed processing</li>
            <li>Bank reversal</li>
            <li>Payment-provider action</li>
            <li>Duplicate payment</li>
            <li>Technical error</li>
            <li>Fraud or risk review</li>
            <li>Other transaction circumstances</li>
          </ul>
          <p className="pt-2">DigiSaloon may update the related booking and settlement records after receiving appropriate confirmation.</p>
        </section>

        <section id="sec-tp-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. CHARGEBACKS AND DISPUTES</h2>
          <p>Customers may have certain payment-dispute or chargeback rights depending on their payment method and applicable provider rules.</p>
          <p>Where a chargeback or payment dispute occurs, DigiSaloon may:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Review the transaction</li>
            <li>Provide relevant records to the payment provider</li>
            <li>Temporarily hold related settlements</li>
            <li>Adjust Partner payouts where applicable</li>
            <li>Take other appropriate measures</li>
          </ul>
        </section>

        <section id="sec-tp-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. PARTNER SETTLEMENT</h2>
          <p>Under the current booking model, the standard net booking amount attributable to the salon is ₹49 after the ₹1.19 gateway deduction from the ₹50.19 booking payment.</p>
          <p>The ₹49 amount may generally be settled to the Partner's registered settlement account on the same day or next working day, subject to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Successful transaction confirmation</li>
            <li>Reconciliation</li>
            <li>Payment-provider processing</li>
            <li>Bank processing</li>
            <li>No applicable refund</li>
            <li>No payment dispute</li>
            <li>No settlement hold</li>
          </ul>
        </section>

        <section id="sec-tp-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. SETTLEMENT DELAYS</h2>
          <p>Settlement may be delayed because of:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Bank processing</li>
            <li>Payment-provider delays</li>
            <li>Public holidays</li>
            <li>Incorrect bank details</li>
            <li>Payment reconciliation</li>
            <li>Refunds</li>
            <li>Chargebacks</li>
            <li>Fraud reviews</li>
            <li>Technical issues</li>
            <li>Other circumstances outside DigiSaloon's reasonable control</li>
          </ul>
        </section>

        <section id="sec-tp-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">20. THIRD-PARTY TERMS</h2>
          <p>Third-party service providers may have their own:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Terms of service</li>
            <li>Privacy policies</li>
            <li>Payment rules</li>
            <li>Refund procedures</li>
            <li>Security practices</li>
            <li>Service limitations</li>
          </ul>
          <p className="pt-2">Users and Partners may be subject to those third-party terms when using the relevant third-party service.</p>
        </section>

        <section id="sec-tp-21" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">21. THIRD-PARTY DATA PROCESSING</h2>
          <p>Third-party providers may process certain information on DigiSaloon's behalf or as part of providing their services.</p>
          <p>Examples may include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Payment information</li>
            <li>Transaction references</li>
            <li>Account information</li>
            <li>Device information</li>
            <li>Technical information</li>
            <li>Notification information</li>
            <li>Support information</li>
          </ul>
          <p className="pt-2">DigiSaloon aims to use third-party services in a manner consistent with its applicable privacy and security requirements.</p>
        </section>

        <section id="sec-tp-22" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">22. CLOUD AND HOSTING PROVIDERS</h2>
          <p>DigiSaloon may use third-party cloud or hosting providers for:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Website hosting</li>
            <li>Application infrastructure</li>
            <li>Backend services</li>
            <li>Databases</li>
            <li>Storage</li>
            <li>Authentication</li>
            <li>Backups</li>
            <li>Other technical infrastructure</li>
          </ul>
          <p className="pt-2">Availability and performance may depend partly on those providers.</p>
        </section>

        <section id="sec-tp-23" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">23. EMAIL, SMS AND NOTIFICATION SERVICES</h2>
          <p>DigiSaloon may use third-party providers for:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Email delivery</li>
            <li>SMS</li>
            <li>Push notifications</li>
            <li>OTP delivery</li>
            <li>Transactional communications</li>
            <li>Service notifications</li>
          </ul>
          <p className="pt-2">Such providers may process the information necessary to deliver the relevant communication.</p>
        </section>

        <section id="sec-tp-24" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">24. MAPS AND LOCATION SERVICES</h2>
          <p>DigiSaloon may use third-party mapping or location services to support features such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Salon discovery</li>
            <li>Location-based search</li>
            <li>Maps</li>
            <li>Directions</li>
            <li>Location display</li>
          </ul>
          <p className="pt-2">The availability and accuracy of location information may depend on the relevant third-party service.</p>
        </section>

        <section id="sec-tp-25" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">25. ANALYTICS AND MONITORING</h2>
          <p>DigiSaloon may use third-party analytics, monitoring, or error-reporting services to understand:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Application performance</li>
            <li>Website performance</li>
            <li>Technical errors</li>
            <li>Usage patterns</li>
            <li>System reliability</li>
            <li>Security events</li>
          </ul>
          <p className="pt-2">The use of such services is subject to applicable privacy practices and configurations.</p>
        </section>

        <section id="sec-tp-26" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">26. AUTHENTICATION SERVICES</h2>
          <p>DigiSaloon may use third-party authentication or identity services to support:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Login</li>
            <li>Account verification</li>
            <li>OTP</li>
            <li>Authentication</li>
            <li>Account security</li>
          </ul>
          <p className="pt-2">Authentication information may be processed through the applicable service provider.</p>
        </section>

        <section id="sec-tp-27" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">27. THIRD-PARTY SERVICE AVAILABILITY</h2>
          <p>DigiSaloon cannot guarantee uninterrupted availability of third-party services.</p>
          <p>An external provider outage may affect:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Payments</li>
            <li>Booking confirmation</li>
            <li>Notifications</li>
            <li>Login</li>
            <li>Maps</li>
            <li>Website functionality</li>
            <li>App functionality</li>
            <li>Settlement processing</li>
          </ul>
          <p className="pt-2">DigiSaloon may take reasonable steps to restore affected functionality.</p>
        </section>

        <section id="sec-tp-28" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">28. THIRD-PARTY SERVICE CHANGES</h2>
          <p>A third-party provider may change:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Pricing</li>
            <li>APIs</li>
            <li>Features</li>
            <li>Technical requirements</li>
            <li>Security requirements</li>
            <li>Availability</li>
            <li>Terms</li>
            <li>Service limits</li>
          </ul>
          <p className="pt-2">Such changes may require DigiSaloon to modify, replace, or discontinue a particular integration.</p>
        </section>

        <section id="sec-tp-29" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">29. REPLACEMENT OF PROVIDERS</h2>
          <p>DigiSaloon may replace a third-party service provider where reasonably necessary because of:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Pricing</li>
            <li>Security</li>
            <li>Reliability</li>
            <li>Business requirements</li>
            <li>Technical compatibility</li>
            <li>Legal or regulatory considerations</li>
            <li>Provider discontinuation</li>
          </ul>
          <p className="pt-2">Users may not always receive advance notice of every technical provider change where it does not materially affect the service.</p>
        </section>

        <section id="sec-tp-30" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">30. THIRD-PARTY LINKS</h2>
          <p>DigiSaloon may provide links or references to third-party websites or services.</p>
          <p>DigiSaloon does not control third-party websites and is not responsible for their independent:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Content</li>
            <li>Privacy practices</li>
            <li>Security</li>
            <li>Terms</li>
            <li>Availability</li>
          </ul>
          <p className="pt-2">Users should review the relevant third-party policies before using external services.</p>
        </section>

        <section id="sec-tp-31" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">31. THIRD-PARTY SECURITY</h2>
          <p>DigiSaloon may take reasonable steps when selecting and using third-party service providers.</p>
          <p>However, DigiSaloon cannot guarantee the security, availability, or performance of systems operated independently by third parties.</p>
        </section>

        <section id="sec-tp-32" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">32. THIRD-PARTY SECURITY INCIDENTS</h2>
          <p>If DigiSaloon becomes aware of a security incident involving a third-party provider that may affect DigiSaloon services or information, DigiSaloon may:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Investigate the potential impact</li>
            <li>Contact the provider</li>
            <li>Restrict the affected integration</li>
            <li>Take protective measures</li>
            <li>Assess affected transactions or information</li>
            <li>Notify affected users or Partners where appropriate</li>
          </ul>
        </section>

        <section id="sec-tp-33" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">33. PAYMENT FRAUD PREVENTION</h2>
          <p>Payment providers may use their own fraud-prevention and risk-management systems.</p>
          <p>A transaction may therefore be:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Delayed</li>
            <li>Declined</li>
            <li>Held</li>
            <li>Reversed</li>
            <li>Subject to additional verification</li>
          </ul>
          <p className="pt-2">DigiSaloon may rely on payment-provider transaction status when determining whether a payment has been successfully completed.</p>
        </section>

        <section id="sec-tp-34" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">34. PARTNER RESPONSIBILITIES</h2>
          <p>Partners must:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Maintain accurate settlement information</li>
            <li>Cooperate with payment investigations</li>
            <li>Not manipulate payment records</li>
            <li>Not request unauthorized DigiSaloon payments</li>
            <li>Follow applicable refund and cancellation rules</li>
            <li>Maintain accurate customer-facing pricing</li>
            <li>Report payment discrepancies promptly</li>
          </ul>
        </section>

        <section id="sec-tp-35" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">35. CUSTOMER RESPONSIBILITIES</h2>
          <p>Customers should:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Verify the payment amount before completing payment</li>
            <li>Use only official DigiSaloon payment flows</li>
            <li>Avoid sharing payment credentials</li>
            <li>Keep transaction records</li>
            <li>Report suspicious transactions promptly</li>
            <li>Avoid making duplicate payments without checking the transaction status</li>
          </ul>
        </section>

        <section id="sec-tp-36" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">36. ADMINISTRATOR RESPONSIBILITIES</h2>
          <p>Authorized DigiSaloon personnel must protect third-party service credentials, including:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Payment dashboard credentials</li>
            <li>API keys</li>
            <li>Authentication tokens</li>
            <li>Cloud credentials</li>
            <li>Notification-service credentials</li>
            <li>Other service secrets</li>
          </ul>
          <p className="pt-2">Such credentials must not be publicly exposed or shared without authorization.</p>
        </section>

        <section id="sec-tp-37" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">37. NO GUARANTEE OF THIRD-PARTY SERVICES</h2>
          <p>DigiSaloon does not guarantee that every third-party service will always be:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Available</li>
            <li>Error-free</li>
            <li>Secure</li>
            <li>Compatible</li>
            <li>Uninterrupted</li>
            <li>Free from delays</li>
          </ul>
          <p className="pt-2">DigiSaloon will take reasonable steps to manage third-party dependencies but may not control external failures.</p>
        </section>

        <section id="sec-tp-38" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">38. DATA RETENTION BY THIRD PARTIES</h2>
          <p>Third-party providers may retain information according to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Their own retention policies</li>
            <li>Legal requirements</li>
            <li>Regulatory requirements</li>
            <li>Security requirements</li>
            <li>Contractual requirements</li>
          </ul>
          <p className="pt-2">Deleting a DigiSaloon account does not necessarily cause immediate deletion of information independently retained by third-party providers.</p>
        </section>

        <section id="sec-tp-39" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">39. PRIVACY</h2>
          <p>Information processed through third-party services is also subject to DigiSaloon's Privacy Policy and Data Protection, Retention & Deletion Policy, where applicable.</p>
          <p>Users should also review the relevant third-party provider's privacy policy where appropriate.</p>
        </section>

        <section id="sec-tp-40" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">40. TAXES AND PAYMENT RECORDS</h2>
          <p>Payment and transaction records may be retained by DigiSaloon and/or payment providers for accounting, tax, reconciliation, dispute, security, and other legitimate purposes.</p>
          <p>Applicable tax responsibilities remain subject to the relevant user or Partner's circumstances and applicable law.</p>
        </section>

        <section id="sec-tp-41" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">41. POLICY CHANGES</h2>
          <p>DigiSaloon may update this Policy from time to time to reflect:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>New third-party services</li>
            <li>Payment-provider changes</li>
            <li>Technical changes</li>
            <li>New integrations</li>
            <li>Security improvements</li>
            <li>Business requirements</li>
            <li>Legal or regulatory requirements</li>
          </ul>
          <p className="pt-2">The updated version may be published through appropriate DigiSaloon channels.</p>
        </section>

        <section id="sec-tp-42" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">42. RELATED POLICIES</h2>
          <p>This Policy should be read together with:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Payment & Settlement Policy</li>
            <li>Partner Payout & Settlement Terms</li>
            <li>Cancellation & Refund Policy</li>
            <li>Booking & Appointment Policy</li>
            <li>Security & Incident Response Policy</li>
            <li>Data Protection, Retention & Deletion Policy</li>
            <li>Admin Panel Access & Internal Security Policy</li>
            <li>Partner Terms & Conditions</li>
            <li>Grievance Redressal & Contact Policy</li>
          </ul>
        </section>

        <section id="sec-tp-43" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">43. CONTACT INFORMATION</h2>
          <p>For payment, third-party service, transaction, or integration-related concerns:</p>
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
          <p className="pt-2 text-xs text-slate-400 font-medium">© DigiSaloon. All Rights Reserved.</p>
        </section>

      </div>
    </div>
  );
};