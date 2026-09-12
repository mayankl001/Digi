import React from "react";

export const ContentPolicy: React.FC = () => {
  return (
    <div className="text-slate-700 antialiased space-y-10">
      
      {/* Header Section - Matched with Payment Policy Layout */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Content Policy
          </span>
          <span className="text-xs text-slate-400">Last Updated: 12 September 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          CONTENT POLICY
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
          This Content Policy explains what content may be uploaded, published, displayed or shared through DigiSaloon and the standards applicable to customers, salon partners, barbers, staff and other authorized users.
        </p>
      </div>

      {/* Sections with IDs for ScrollSpy */}
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        
        <section id="content-1" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">1. Purpose</h2>
          <p>DigiSaloon allows users and salon partners to provide content such as:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Salon information</li>
            <li>Service descriptions</li>
            <li>Salon photographs</li>
            <li>Service photographs</li>
            <li>Reviews and ratings</li>
            <li>Offers and promotional content</li>
            <li>Profile information</li>
            <li>Feedback</li>
            <li>Other platform-supported content</li>
          </ul>
          <p>This Policy is intended to keep DigiSaloon content accurate, respectful, useful and safe.</p>
        </section>

        <section id="content-2" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">2. Who This Policy Applies To</h2>
          <p>This Policy applies to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Customers</li>
            <li>Salon owners</li>
            <li>Salon partners</li>
            <li>Barbers and staff</li>
            <li>Authorized representatives</li>
            <li>Other users who submit content to DigiSaloon</li>
          </ul>
        </section>

        <section id="content-3" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">3. Content Requirements</h2>
          <p>Content submitted to DigiSaloon should be:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Accurate</li>
            <li>Relevant</li>
            <li>Respectful</li>
            <li>Lawful</li>
            <li>Appropriate for the intended audience</li>
            <li>Related to the salon, service or DigiSaloon experience</li>
          </ul>
        </section>

        <section id="content-4" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">4. Prohibited Content</h2>
          <p>Users must not upload, publish or submit content that:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Is illegal</li>
            <li>Is fraudulent or misleading</li>
            <li>Contains threats or harassment</li>
            <li>Promotes violence or dangerous wrongdoing</li>
            <li>Contains hateful or discriminatory abuse</li>
            <li>Contains sexually explicit material</li>
            <li>Contains pornography</li>
            <li>Exploits or sexualizes minors</li>
            <li>Contains malicious software or harmful code</li>
            <li>Attempts to scam or deceive users</li>
            <li>Contains unnecessary personal information</li>
            <li>Impersonates another person or business</li>
            <li>Violates another person's rights</li>
          </ul>
        </section>

        <section id="content-5" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">5. Misleading Information</h2>
          <p>Users and partners must not intentionally provide false or misleading information about:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Salon identity</li>
            <li>Services</li>
            <li>Prices</li>
            <li>Discounts</li>
            <li>Availability</li>
            <li>Qualifications</li>
            <li>Reviews</li>
            <li>Business ownership</li>
            <li>Booking status</li>
          </ul>
        </section>

        <section id="content-6" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">6. Salon Content</h2>
          <p>Salon partners are responsible for ensuring that information displayed on their profile is accurate. This includes:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Salon name</li>
            <li>Address</li>
            <li>Contact information</li>
            <li>Operating hours</li>
            <li>Services</li>
            <li>Prices</li>
            <li>Service duration</li>
            <li>Images</li>
            <li>Promotional information</li>
          </ul>
          <p>Partners should promptly update information that is no longer accurate.</p>
        </section>

        <section id="content-7" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">7. Images and Videos</h2>
          <p>Images and videos uploaded to DigiSaloon should:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Relate to the salon or service</li>
            <li>Be legally obtained</li>
            <li>Not infringe copyright</li>
            <li>Not contain prohibited material</li>
            <li>Not unnecessarily expose personal information</li>
          </ul>
          <p>Partners should have appropriate permission to use photographs or other media they upload.</p>
        </section>

        <section id="content-8" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">8. Customer Reviews</h2>
          <p>Reviews should reflect a genuine customer experience. Users must not submit:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Fake reviews</li>
            <li>Reviews for services they did not experience</li>
            <li>Reviews created in exchange for improper benefits</li>
            <li>Reviews intended to unfairly manipulate ratings</li>
            <li>Multiple reviews intended to artificially influence a salon's rating</li>
          </ul>
        </section>

        <section id="content-9" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">9. Review Manipulation</h2>
          <p>Salon partners and their staff must not:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Create fake customer accounts</li>
            <li>Post fake positive reviews</li>
            <li>Ask people to post dishonest reviews</li>
            <li>Threaten customers over negative reviews</li>
            <li>Intentionally manipulate ratings</li>
          </ul>
          <p>DigiSaloon may restrict or remove content that appears to involve review manipulation.</p>
        </section>

        <section id="content-10" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">10. Personal Information</h2>
          <p>Users must not publicly post unnecessary personal information about another person. Examples include:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Phone numbers</li>
            <li>Email addresses</li>
            <li>Home addresses</li>
            <li>Identification documents</li>
            <li>Financial information</li>
            <li>Private conversations</li>
            <li>Authentication credentials</li>
          </ul>
          <p>Users should avoid sharing sensitive personal information in reviews or comments.</p>
        </section>

        <section id="content-11" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">11. Copyright and Intellectual Property</h2>
          <p>Users must only upload content that they have the right to use. Users must not upload another person's:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Photograph</li>
            <li>Video</li>
            <li>Logo</li>
            <li>Artwork</li>
            <li>Written content</li>
            <li>Trademark</li>
            <li>Other copyrighted material</li>
          </ul>
          <p>without appropriate authorization.</p>
        </section>

        <section id="content-12" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">12. Impersonation</h2>
          <p>Users must not impersonate:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Another customer</li>
            <li>Salon owner</li>
            <li>Barber</li>
            <li>Staff member</li>
            <li>DigiSaloon employee</li>
            <li>Government official</li>
            <li>Another business or organization</li>
          </ul>
        </section>

        <section id="content-13" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">13. Promotional Content</h2>
          <p>Salon partners may publish legitimate promotional content where supported by DigiSaloon. Promotional content must accurately state applicable:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Prices</li>
            <li>Discounts</li>
            <li>Eligibility</li>
            <li>Validity periods</li>
            <li>Terms and conditions</li>
          </ul>
          <p>False or misleading promotional claims are prohibited.</p>
        </section>

        <section id="content-14" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">14. Spam</h2>
          <p>Users must not use DigiSaloon to distribute:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Unwanted advertisements</li>
            <li>Repeated promotional messages</li>
            <li>Irrelevant content</li>
            <li>Mass unsolicited communications</li>
            <li>Malicious links</li>
          </ul>
        </section>

        <section id="content-15" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">15. External Links</h2>
          <p>Content containing external links must not direct users to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Malware</li>
            <li>Phishing pages</li>
            <li>Fraudulent services</li>
            <li>Illegal services</li>
            <li>Other harmful content</li>
          </ul>
          <p>DigiSaloon may remove unsafe or inappropriate links.</p>
        </section>

        <section id="content-16" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">16. Customer-Salon Communication</h2>
          <p>Communication relating to a booking or service should remain professional and relevant. Harassment, threats, abusive language or misuse of customer contact information is not permitted.</p>
        </section>

        <section id="content-17" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">17. Content Moderation</h2>
          <p>DigiSaloon may review content where reasonably necessary to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Enforce this Policy</li>
            <li>Investigate complaints</li>
            <li>Prevent fraud</li>
            <li>Protect users</li>
            <li>Address security concerns</li>
            <li>Comply with applicable law</li>
          </ul>
          <p>Not all content may be reviewed before publication.</p>
        </section>

        <section id="content-18" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">18. Content Removal</h2>
          <p>DigiSaloon may remove, restrict or disable access to content that:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Violates this Policy</li>
            <li>Violates applicable law</li>
            <li>Is fraudulent</li>
            <li>Is misleading</li>
            <li>Infringes intellectual property rights</li>
            <li>Creates a security risk</li>
            <li>Harms the integrity of the platform</li>
          </ul>
        </section>

        <section id="content-19" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">19. Account Action</h2>
          <p>Serious or repeated content violations may result in:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
            <li>Content removal</li>
            <li>Warning</li>
            <li>Feature restrictions</li>
            <li>Review restrictions</li>
            <li>Account suspension</li>
            <li>Partner suspension</li>
            <li>Account termination</li>
          </ul>
          <p>The action taken may depend on the seriousness and circumstances of the violation.</p>
        </section>

        <section id="content-20" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">20. Reporting Content</h2>
          <p>Users may report content that they believe violates this Policy, is fraudulent, infringes their rights, contains harmful material, contains misleading information, or creates a safety or security concern.</p>
          <p>Reports may be submitted to: <a href="mailto:support@digisaloon.in" className="text-red-700 font-semibold underline">support@digisaloon.in</a></p>
          <p>Where possible, a report should include the relevant content, account or booking details and an explanation of the concern.</p>
        </section>

        <section id="content-21" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">21. Copyright Complaints</h2>
          <p>Copyright or intellectual-property complaints may be submitted according to DigiSaloon's Intellectual Property & Copyright Policy.</p>
        </section>

        <section id="content-22" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">22. False Reports</h2>
          <p>Users must not knowingly submit false or malicious content complaints. Repeated abuse of the reporting process may result in appropriate account action.</p>
        </section>

        <section id="content-23" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">23. Content Ownership</h2>
          <p>Users and salon partners generally retain their rights in content they submit, subject to the permissions granted to DigiSaloon under applicable Terms and Policies. By submitting content, users grant DigiSaloon the permissions reasonably necessary to host, display, process and operate the relevant DigiSaloon service.</p>
        </section>

        <section id="content-24" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">24. DigiSaloon Platform Content</h2>
          <p>DigiSaloon's own logo, branding, software, website design, original graphics, original text, and platform materials may be protected by intellectual property rights. Unauthorized copying or commercial use is prohibited.</p>
        </section>

        <section id="content-25" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">25. Accuracy of Content</h2>
          <p>DigiSaloon does not guarantee that every user- or partner-submitted piece of content is accurate, complete or current. Users should use reasonable judgment when relying on information provided by other users or salons.</p>
        </section>

        <section id="content-26" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">26. Third-Party Content</h2>
          <p>DigiSaloon may display content provided by users, salon partners or third-party services. DigiSaloon does not necessarily endorse every opinion, statement or representation contained in user-generated content.</p>
        </section>

        <section id="content-27" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">27. Policy Enforcement</h2>
          <p>DigiSaloon may take reasonable action when content violates this Policy or applicable law by considering the severity of the violation, potential harm, repeated violations, user history, evidence available, and applicable legal requirements.</p>
        </section>

        <section id="content-28" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">28. Policy Updates</h2>
          <p>DigiSaloon may update this Content Policy to reflect changes in platform functionality, content standards, user-generated features, legal requirements, or security requirements. The latest version may be published on the DigiSaloon website.</p>
        </section>

        <section id="content-29" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">29. Relationship With Other Policies</h2>
          <p>This Content Policy should be read together with Terms & Conditions, Privacy Policy, Acceptable Use & Conduct Policy, Review & Rating Policy, Intellectual Property & Copyright Policy, Salon Partner Terms, and Security & Incident Response Policy.</p>
        </section>

        <section id="content-30" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">30. Contact</h2>
          <p>For content-related concerns or reports:</p>
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