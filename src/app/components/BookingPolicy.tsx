import React from "react";

export const BookingPolicy: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Booking & Appointment Policy
          </span>
          <span className="text-xs text-slate-400">Last Updated: 21 September 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          BOOKING & APPOINTMENT POLICY
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          This Booking & Appointment Policy explains the rules and procedures applicable to bookings and appointments made through DigiSaloon.
        </p>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          DigiSaloon provides a platform that allows customers to discover participating salons, view available services, and book appointments.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="booking-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. About DigiSaloon Bookings</h2>
          <p>DigiSaloon facilitates appointment bookings between customers and participating salons.</p>
          <p>A booking made through DigiSaloon may be either:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Live Booking – an appointment intended to be taken immediately or according to the salon's current live availability.</li>
            <li>Schedule Booking – an appointment booked in advance for a selected future date and time.</li>
          </ul>
        </section>

        <section id="booking-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. Eligibility to Make a Booking</h2>
          <p>To make a booking through DigiSaloon:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>The customer must meet the minimum age requirement applicable to the DigiSaloon platform.</li>
            <li>The customer must provide accurate booking information.</li>
            <li>The customer must provide the information required to process the booking.</li>
            <li>The customer must agree to the applicable DigiSaloon policies.</li>
          </ul>
          <p className="pt-2">The minimum user age for DigiSaloon is 18 years.</p>
        </section>

        <section id="booking-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. Selecting a Salon and Service</h2>
          <p>Customers may select a salon based on available information displayed on DigiSaloon.</p>
          <p>Depending on the salon, customers may be able to view:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Salon name</li>
            <li>Location</li>
            <li>Services</li>
            <li>Service prices</li>
            <li>Service duration</li>
            <li>Available booking slots</li>
            <li>Salon information</li>
            <li>Ratings and reviews</li>
            <li>Other available information</li>
          </ul>
          <p className="pt-2">Service availability and information may vary between salons.</p>
        </section>

        <section id="booking-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. Live Booking</h2>
          <p>A Live Booking allows a customer to book an available service based on the salon's current availability.</p>
          <p>Once the booking is successfully confirmed:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>The customer should proceed to the salon according to the booking information.</li>
            <li>The salon may accept and manage the booking through its DigiSaloon partner system.</li>
            <li>The customer cannot cancel a confirmed Live Booking.</li>
            <li>The booking amount is generally non-refundable for customer cancellation.</li>
          </ul>
          <p className="pt-2">If the salon cancels the booking, the customer may be eligible for the applicable refund according to the Cancellation & Refund Policy.</p>
        </section>

        <section id="booking-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. Schedule Booking</h2>
          <p>A Schedule Booking allows a customer to select an available future date and time.</p>
          <p>After successful confirmation:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>The selected date and time are reserved according to the salon's availability.</li>
            <li>The customer should arrive at the salon at or before the scheduled appointment time.</li>
            <li>The customer may cancel the booking if at least 1 hour remains before the scheduled appointment.</li>
            <li>If less than 1 hour remains, customer cancellation is not permitted and the booking amount is generally non-refundable.</li>
          </ul>
        </section>

        <section id="booking-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. Booking Payment</h2>
          <p>For each confirmed booking, the customer pays a booking amount of:</p>
          <p className="font-semibold text-slate-800">₹50.19</p>
          <p>The payment is processed through the applicable payment gateway.</p>
          <p>The current payment calculation is:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Customer payment: ₹50.19</li>
            <li>Payment gateway fee: ₹1.19</li>
            <li>Net booking amount for salon: ₹49.00</li>
          </ul>
          <p className="pt-2">The remaining service amount is paid directly to the salon after the service.</p>
        </section>

        <section id="booking-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. Example of Booking Payment</h2>
          <p>If the selected service costs ₹200:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Amount paid through DigiSaloon: ₹50.19</li>
            <li>Payment gateway fee: ₹1.19</li>
            <li>Net booking amount attributable to salon: ₹49.00</li>
            <li>Remaining amount payable directly to salon: ₹151.00</li>
            <li>Total customer outflow: ₹201.19</li>
          </ul>
          <p className="pt-2">The final amount may vary if the customer purchases additional services or products at the salon.</p>
        </section>

        <section id="booking-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. Booking Confirmation</h2>
          <p>A booking is considered confirmed only when the DigiSaloon system successfully records the booking and the applicable payment has been successfully confirmed.</p>
          <p>A payment attempt alone does not guarantee that a booking has been confirmed.</p>
          <p>Customers should check their booking confirmation details before visiting the salon.</p>
        </section>

        <section id="booking-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. Booking Details</h2>
          <p>A confirmed booking may contain information such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Booking ID</li>
            <li>Salon name</li>
            <li>Service name</li>
            <li>Date</li>
            <li>Time</li>
            <li>Booking type</li>
            <li>Booking amount</li>
            <li>Customer details</li>
            <li>Other applicable booking information</li>
          </ul>
          <p className="pt-2">Customers should verify these details after receiving confirmation.</p>
        </section>

        <section id="booking-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. Appointment Timing</h2>
          <p>Customers should arrive at the salon according to the confirmed booking time.</p>
          <p>Arriving late may affect the availability or completion of the booked service, particularly where the salon has other appointments scheduled.</p>
          <p>The salon may adjust, reschedule, or decline the service where the customer's delay materially affects the appointment schedule.</p>
        </section>

        <section id="booking-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. Customer No-Show</h2>
          <p>If a customer does not attend a confirmed appointment without cancelling within the permitted cancellation period, the booking may be treated as a No-Show.</p>
          <p>In such cases:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>The booking amount may not be refundable.</li>
            <li>The salon may mark the booking as a No-Show.</li>
            <li>The customer may need to create a new booking for a future appointment.</li>
            <li>Repeated misuse of bookings or repeated No-Shows may result in appropriate account restrictions.</li>
          </ul>
        </section>

        <section id="booking-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. Cancellation of Live Booking</h2>
          <p>A confirmed Live Booking cannot be cancelled by the customer.</p>
          <p>Accordingly:</p>
          <p className="font-semibold text-slate-800">Live Booking → No Customer Cancellation → No Customer Refund</p>
          <p>If the salon cancels the booking, the customer may be eligible for a refund according to the applicable cancellation and refund rules.</p>
        </section>

        <section id="booking-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. Cancellation of Schedule Booking</h2>
          <p>A Schedule Booking may be cancelled by the customer when at least 1 hour remains before the scheduled appointment.</p>
          <p>For an eligible cancellation:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Booking amount paid: ₹50.19</li>
            <li>Payment gateway fee: ₹1.19</li>
            <li>Refund amount: ₹49.00</li>
          </ul>
          <p className="pt-2">The refund will generally be processed to the original payment method.</p>
        </section>

        <section id="booking-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. Cancellation Less Than 1 Hour Before Appointment</h2>
          <p>If less than 1 hour remains before a Schedule Booking:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Customer cancellation is not permitted.</li>
            <li>The booking amount is generally non-refundable.</li>
            <li>The customer may not be entitled to a refund for the cancellation.</li>
          </ul>
        </section>

        <section id="booking-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. Salon Cancellation</h2>
          <p>A salon may cancel a booking in circumstances where it is unable to provide the booked service.</p>
          <p>Where a salon cancels a confirmed booking, DigiSaloon may process the applicable customer refund according to the Cancellation & Refund Policy.</p>
          <p>Repeated or inappropriate cancellation by a salon may be reviewed by DigiSaloon.</p>
        </section>

        <section id="booking-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. Changes to Appointments</h2>
          <p>Customers who need to change an appointment should do so as early as possible.</p>
          <p>Changes may depend on:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Salon availability</li>
            <li>Service availability</li>
            <li>Date and time</li>
            <li>Booking type</li>
            <li>Applicable cancellation rules</li>
          </ul>
          <p className="pt-2">A new booking may be required where the requested change cannot be accommodated.</p>
        </section>

        <section id="booking-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. Service Availability</h2>
          <p>Booking slots displayed on DigiSaloon are based on information and availability provided through the platform.</p>
          <p>Availability may change due to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Other bookings</li>
            <li>Salon operating conditions</li>
            <li>Staff availability</li>
            <li>Service duration</li>
            <li>Technical issues</li>
            <li>Changes made by the salon</li>
          </ul>
          <p className="pt-2">DigiSaloon does not guarantee that a particular service or salon will remain available at all times.</p>
        </section>

        <section id="booking-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. Service Duration</h2>
          <p>The estimated service duration displayed on DigiSaloon is intended to help customers plan their appointments.</p>
          <p>Actual service duration may vary depending on:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Service type</li>
            <li>Customer requirements</li>
            <li>Salon procedures</li>
            <li>Staff availability</li>
            <li>Additional services</li>
            <li>Other reasonable circumstances</li>
          </ul>
        </section>

        <section id="booking-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. Additional Services</h2>
          <p>If a customer requests additional services at the salon that were not included in the original booking, those services may be charged separately by the salon.</p>
          <p>The customer should confirm the applicable price with the salon before receiving additional services.</p>
        </section>

        <section id="booking-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">20. Booking and Payment Records</h2>
          <p>DigiSaloon may maintain records relating to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Booking ID</li>
            <li>Customer information</li>
            <li>Salon information</li>
            <li>Service information</li>
            <li>Payment status</li>
            <li>Cancellation status</li>
            <li>Refund status</li>
            <li>Appointment date and time</li>
            <li>No-Show status</li>
            <li>Settlement information</li>
          </ul>
          <p className="pt-2">These records may be used for booking management, customer support, payment reconciliation, dispute resolution, fraud prevention, and legal or regulatory purposes.</p>
        </section>

        <section id="booking-21" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">21. Technical Issues</h2>
          <p>DigiSaloon aims to provide reliable booking functionality but cannot guarantee uninterrupted operation.</p>
          <p>Bookings may be affected by:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Internet connectivity</li>
            <li>Server or cloud-service issues</li>
            <li>Payment gateway problems</li>
            <li>Application errors</li>
            <li>Device-related issues</li>
            <li>Third-party service interruptions</li>
            <li>Maintenance or updates</li>
          </ul>
          <p className="pt-2">If a technical issue prevents a booking from being successfully confirmed, customers should contact DigiSaloon support.</p>
        </section>

        <section id="booking-22" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">22. Duplicate Bookings</h2>
          <p>Customers should avoid making multiple bookings for the same service and time unless intentionally required.</p>
          <p>If duplicate bookings are created accidentally, the customer should contact DigiSaloon as soon as possible.</p>
          <p>Applicable cancellation and refund rules may apply.</p>
        </section>

        <section id="booking-23" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">23. Customer Responsibilities</h2>
          <p>Customers are responsible for:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Providing accurate information</li>
            <li>Selecting the correct salon and service</li>
            <li>Selecting the correct date and time</li>
            <li>Completing the required booking payment</li>
            <li>Arriving on time</li>
            <li>Following the salon's reasonable service rules</li>
            <li>Reviewing booking details before visiting</li>
            <li>Cancelling eligible bookings within the permitted time</li>
          </ul>
        </section>

        <section id="booking-24" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">24. Salon Partner Responsibilities</h2>
          <p>Salon partners are responsible for:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Keeping salon information accurate</li>
            <li>Maintaining correct service prices</li>
            <li>Updating service availability</li>
            <li>Managing appointments through the applicable DigiSaloon partner system</li>
            <li>Honouring confirmed bookings where reasonably possible</li>
            <li>Providing the booked service</li>
            <li>Informing customers of relevant service requirements</li>
            <li>Managing the remaining service payment directly with the customer</li>
            <li>Maintaining applicable business and legal compliance</li>
          </ul>
        </section>

        <section id="booking-25" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">25. Booking Disputes</h2>
          <p>If a customer or salon partner believes there is an issue with a booking, they should contact DigiSaloon support with the relevant Booking ID and supporting information.</p>
          <p>DigiSaloon may review the booking, payment, cancellation, and related records to determine the appropriate action.</p>
        </section>

        <section id="booking-26" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">26. Policy Relationship</h2>
          <p>This Booking & Appointment Policy should be read together with DigiSaloon's:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Cancellation & Refund Policy</li>
            <li>Payment & Settlement Policy</li>
            <li>Content Policy & Community Guidelines</li>
            <li>Legal Disclaimer</li>
            <li>Security Policy</li>
            <li>Other applicable DigiSaloon policies</li>
          </ul>
        </section>

        <section id="booking-27" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">27. Changes to This Policy</h2>
          <p>DigiSaloon may update this Booking & Appointment Policy from time to time to reflect changes in its booking system, services, business operations, technology, or applicable requirements.</p>
          <p>The latest version published on the DigiSaloon platform will apply from its stated effective date.</p>
        </section>

        <section id="booking-28" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">28. Contact Us</h2>
          <p>For booking and appointment-related assistance, please contact:</p>
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
          <p className="pt-2">By making or using a booking through DigiSaloon, customers and salon partners acknowledge and agree to the applicable booking and appointment terms described in this policy.</p>
        </section>

      </div>
    </div>
  );
};