import { useState, useEffect } from "react";
import { Shield, FileText, Cookie, RefreshCcw, CreditCard, AlertCircle, LifeBuoy, Calendar, Star, Tag, User, MapPin, ShieldCheck, Store, UserCheck, CalendarCheck, Wallet, Users, ShieldAlert, Database, AlertTriangle, Share2, ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { GuidelinesPolicy } from "./GuidelinesPolicy";
import { PrivacyPolicy } from "./PrivacyPolicy";
import { TermsOfService } from "./TermsOfService";
import { CookiePolicy } from "./CookiePolicy";
import { CancellationPolicy } from "./CancellationPolicy";
import { PaymentPolicy } from "./PaymentPolicy";
import { ContentPolicy } from "./ContentPolicy";
import { LegalDisclaimer } from "./LegalDisclaimer";
import { GrievancePolicy } from "./GrievancePolicy";
import { BookingPolicy } from "./BookingPolicy";
import { ReviewPolicy } from "./ReviewPolicy";
import { OffersPolicy } from "./OffersPolicy";
import { UserAccountPolicy } from "./UserAccountPolicy";
import { LocationNotificationPolicy } from "./LocationNotificationPolicy";
import { AcceptableUsePolicy } from "./AcceptableUsePolicy";
import { SalonPartnerTerms } from "./SalonPartnerTerms";
import { PartnerOnboardingPolicy } from "./PartnerOnboardingPolicy";
import { PartnerServicePolicy } from "./PartnerServicePolicy";
import { PartnerPayoutPolicy } from "./PartnerPayoutPolicy";
import { StaffPolicy } from "./StaffPolicy";
import { AdminSecurityPolicy } from "./AdminSecurityPolicy";
import { DataProtectionPolicy } from "./DataProtectionPolicy";
import { SecurityIncidentPolicy } from "./SecurityIncidentPolicy";
import { ThirdPartyPolicy } from "./ThirdPartyPolicy";

type PolicyType = 
  | "Guidlines" | "privacy" | "terms" | "cookie" | "cancellation" | "payment" | "content"
  | "disclaimer" | "grievance" | "booking" | "review" | "offers" 
  | "user" | "location" | "acceptable" | "partner" | "onboarding" 
  | "partnerservice" | "partnerpayout" | "staff" | "adminsecurity" 
  | "dataprotection" | "incidentresponse" | "thirdparty";

export function PolicyHub() {
  const { policyType } = useParams<{ policyType?: string }>();
  const navigate = useNavigate();
  
  const activeTab: PolicyType = (policyType as PolicyType) || "privacy";
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);

  const handleTabChange = (tab: PolicyType) => {
    navigate(`/policy/${tab}`);
    setIsMobileTocOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getHighlights = () => {
    switch (activeTab) {
      case "Guidlines":
        return Array.from({ length: 14 }, (_, i) => ({
          id: `sec-gp-${i + 1}`,
          label: `${i + 1}. ${
            [
              "Purpose of This Page", "Customer & User Policies", "Salon Partner Policies", "Barber, Staff & Manage Web Policies",
              "Admin & Internal Policies", "Content & Intellectual Property", "Payment & Third-Party Services", "Legal & Compliance Policies",
              "Customer Support", "Policy Acceptance", "Policy Updates", "Policy Priority", "Important Payment Summary", "Contact Information"
            ][i]
          }`
        }));
        
        case "privacy":
    return Array.from({ length: 25 }, (_, i) => ({
      id: `privacy-${i + 1}`,
      label: `${i + 1}. ${
        [
          "About DigiSaloon","Information We Collect","Booking Payment Information","Device and Technical Information","How We Use Your Information","Communications","Sharing of Information",
          "Information Shared With Salon Partners","Payment Service Providers","Reviews and Ratings","Cookies and Similar Technologies","Data Storage",
          "Data Retention","Data Security","Account Security","Children's Privacy","Third-Party Services","Legal Disclosures","Business Transfers",
          "Your Privacy Rights","Location Permission","Marketing Communications","Changes to This Privacy Policy","Contact Us","Acceptance"
        ][i]
      }`
    }));
      
        case "terms":
    return Array.from({ length: 27 }, (_, i) => ({
      id: `terms-${i + 1}`,
      label: `${i + 1}. ${
        [
          "About DigiSaloon","Eligibility","User Account","Salon Information","Bookings","Booking Payment","Remaining Service Payment","Payment Gateway","Payment Confirmation",
          "Cancellation & Refund","Salon Cancellation","Salon Services","Customer Responsibilities","Salon Partner Responsibilities","Reviews and Ratings",
          "Prohibited Activities","Intellectual Property","Third-Party Services","Platform Availability","Limitation of Liability","Indemnification",
          "Account Suspension or Termination","Privacy","Changes to These Terms","Governing Law","Contact Us","Acceptance of Terms"
        ][i]
      }`
    }));
      
        case "cookie":
    return Array.from({ length: 15 }, (_, i) => ({
      id: `cookie-${i + 1}`,
      label: `${i + 1}. ${
        [
          "What Are Cookies?","Why DigiSaloon Uses Cookies","Types of Cookies We May Use","Third-Party Services",
          "Payment Services","Mobile Applications","Location-Related Technologies","How Long Cookies Remain","Managing Cookies",
          "Do-Not-Track Signals","Information Collected Through Cookies","Cookie Security","Privacy Policy","Changes to This Cookie Policy","Contact Us"
        ][i]
      }`
    }));
     
        case "cancellation":
    return Array.from({ length: 16 }, (_, i) => ({
      id: `cancel-${i + 1}`,
      label: `${i + 1}. ${
        [
          "Overview","Live Booking Cancellation","Schedule Booking Cancellation","Cancellation Less Than 1 Hour Before Appointment",
          "Salon Cancellation","Refund Processing Time","Payment Gateway Charges","Service Amount Paid to Salon","No-Show",
          "Duplicate or Failed Transactions","Refund Method","Refund Status","Service Quality Issues","Changes to a Booking","Policy Changes","Contact Us"
        ][i]
      }`
    }));
      
        case "payment":
    return Array.from({ length: 27 }, (_, i) => ({
      id: `pay-${i + 1}`,
      label: `${i + 1}. ${
        [
          "Overview","Booking Payment","Payment Calculation Example","Payment Gateway","Payment Confirmation","Salon Booking Amount","Salon Settlement",
          "Settlement Example","Remaining Service Amount","DigiSaloon Commission","Payment Gateway Charges","Refunds","Live Booking Cancellation",
          "Schedule Booking Cancellation","Salon Cancellation and Settlement","Failed, Pending, or Reversed Payments","Duplicate Payments",
          "No-Show Bookings","Settlement Account","Settlement Holds","Transaction Records","Taxes and Applicable Charges","Payment Disputes",
          "Settlement Disputes for Salon Partners","Payment and Settlement Responsibility","Changes to Payment & Settlement Policy","Contact Us"
        ][i]
      }`
    }));
      
        case "content":
    return Array.from({ length: 24 }, (_, i) => ({
      id: `content-${i + 1}`,
      label: `${i + 1}. ${
        [
          "Scope","General Content Standards","Reviews and Ratings","Honest and Relevant Reviews","Prohibited Content","Harassment and Abuse","Hate and Discrimination",
          "False or Misleading Information","Promotional and Commercial Content","Images and Media","Personal Information and Privacy","Intellectual Property",
          "Spam and Manipulation","Platform and Booking Abuse","Salon Partner Responsibilities","Customer Responsibilities","Content Moderation","Removal or Restriction of Content",
          "Account Restrictions","Reporting Content","Appeals and Clarifications","Legal and Regulatory Compliance","Changes to This Policy","Contact Us"
        ][i]
      }`
    }));
      
        case "disclaimer":
    return Array.from({ length: 23 }, (_, i) => ({
      id: `disclaimer-${i + 1}`,
      label: `${i + 1}. ${
        [
          "About DigiSaloon","Independent Salon Partners","Service Information","No Guarantee of Service Availability","Booking Platform","Payment Disclaimer",
          "Salon Service Disclaimer","Reviews and Ratings","Third-Party Services","External Links","Website and Application Availability","Technical Information",
          "No Professional Advice","Health and Beauty Services","Pricing and Offers","Intellectual Property","User-Generated Content",
          "Limitation of Responsibility","Force Majeure","No Guarantee","Changes to This Disclaimer","Related Policies","Contact Us"
        ][i]
      }`
    }));
      
        case "grievance":
    return Array.from({ length: 20 }, (_, i) => ({
      id: `grievance-${i + 1}`,
      label: `${i + 1}. ${
        [
          "Purpose","Who Can Raise a Grievance","How to Contact DigiSaloon","Information to Include in a Complaint",
          "Types of Grievances","Complaint Acknowledgement","Review and Investigation","Resolution","Salon Partner Grievances",
          "Customer Grievances Regarding Salon Services","Privacy of Complaints","Supporting Documents","Urgent Security Concerns","Escalation","Response Time",
          "Fraudulent or Abusive Complaints","Legal and Regulatory Matters","Policy Relationship","Changes to This Policy","Contact Details"
        ][i]
      }`
    }));
      
        case "booking":
    return Array.from({ length: 28 }, (_, i) => ({
      id: `booking-${i + 1}`,
      label: `${i + 1}. ${
        [
          "About DigiSaloon Bookings","Eligibility to Make a Booking","Selecting a Salon and Service","Live Booking","Schedule Booking","Booking Payment",
          "Example of Booking Payment","Booking Confirmation","Booking Details","Appointment Timing","Customer No-Show","Cancellation of Live Booking",
          "Cancellation of Schedule Booking","Cancellation Less Than 1 Hour Before Appointment","Salon Cancellation","Changes to Appointments",
          "Service Availability","Service Duration","Additional Services","Booking and Payment Records","Technical Issues","Duplicate Bookings",
          "Customer Responsibilities","Salon Partner Responsibilities","Booking Disputes","Policy Relationship","Changes to This Policy","Contact Us"
        ][i]
      }`
    }));
      
        case "review":
    return Array.from({ length: 27 }, (_, i) => ({
      id: `review-${i + 1}`,
      label: `${i + 1}. ${
        [
          "Purpose","Who Can Submit a Review or Rating","Genuine Experience Requirement","Honest and Accurate Reviews","Ratings",
          "Review Content Guidelines","Prohibited Review Content","Reviews Must Not Be Used for Extortion","Reviews and Refunds",
          "Salon Partner Responses","Personal Information","Intellectual Property","Review Moderation","Removal or Restriction of Reviews",
          "Honest Negative Reviews","Positive Reviews","Conflicts of Interest","Review Editing","Review Reporting","Disputes About Reviews",
          "No Guarantee of Review Accuracy","Rating Calculations","Manipulation and Abuse","Account Restrictions","Privacy","Changes to This Policy","Contact Us"
        ][i]
      }`
    }));
      
        case "offers":
    return Array.from({ length: 32 }, (_, i) => ({
      id: `offer-${i + 1}`,
      label: `${i + 1}. ${
        [
          "About Offers and Coupons","Eligibility","Coupon Validity","Coupon Application","One Coupon Per Booking","Minimum Booking Value",
          "Maximum Discount","Salon-Specific Offers","Service-Specific Offers","Booking Type Restrictions","New Customer Offers",
          "Promotional and Referral Offers","Coupon and Booking Payment","Offers and Cancellation","Expired Coupons","Non-Transferable Offers",
          "Cash Conversion","Coupon Misuse","Incorrectly Applied Offers","Offer Changes","No Guaranteed Availability","Salon Promotions",
          "Taxes and Charges","Refunds After Use of an Offer","Coupon Restoration After Cancellation","Technical Issues","Promotional Communication",
          "Fraudulent or Unauthorized Promotions","Disputes Regarding Offers","Relationship With Other Policies","Changes to This Policy","Contact Us"
        ][i]
      }`
    }));
      
        case "user":
    return Array.from({ length: 36 }, (_, i) => ({
      id: `account-${i + 1}`,
      label: `${i + 1}. ${
        [
          "About User Accounts","User Eligibility","Account Information","Accuracy of Information","Account Security","Unauthorized Account Access","Account Usage","Duplicate or Multiple Accounts",
          "Bookings Before Account Deletion","Outstanding Transactions","How to Request Account Deletion","Identity and Account Verification",
          "Effect of Account Deletion","Data Retention After Deletion","Payment and Transaction Records","Booking History","Reviews and Ratings","Account Deletion and Refunds",
          "Account Deletion and Active Bookings","Account Suspension or Restriction","Termination of Accounts","Recreating an Account","Promotional Benefits After Deletion",
          "Notifications After Account Deletion","Privacy and Account Deletion","Data Backup and System Copies","Security and Fraud Prevention",
          "Third-Party Services","Deletion Request Processing","Failed or Incomplete Deletion Requests","Consequences of Account Deletion",
          "Reconsidering Account Deletion","No Circumvention","Relationship With Other Policies","Changes to This Policy","Contact Us"
        ][i]
      }`
    }));
      
        case "location":
    return Array.from({ length: 28 }, (_, i) => ({
      id: `loc-notif-${i + 1}`,
      label: `${i + 1}. ${
        [
          "Purpose of This Policy","Location Permission","How DigiSaloon May Use Location Information","User-Controlled Location Access","Manual Location Selection",
          "Location Accuracy","Background Location","Location and Salon Discovery","Location Data and Privacy","Notification Permission",
          "Types of Notifications","Transactional vs Promotional Notifications","Managing Notifications","Important Service Notifications","Promotional Notifications",
          "Notification Accuracy and Timing","Third-Party Notification Services","Notification Content","Device and Operating-System Controls",
          "Disabling Location or Notifications","Children and Minimum Age","Location and Notification Security","Changes to Location Features",
          "Changes to Notification Features","Relationship With Privacy Policy","Relationship With Other Policies","Changes to This Policy","Contact Us"
        ][i]
      }`
    }));
      
        case "acceptable":
    return Array.from({ length: 38 }, (_, i) => ({
      id: `acc-use-${i + 1}`,
      label: `${i + 1}. ${
        [
          "Purpose of This Policy","Appropriate Use of DigiSaloon","Customer Responsibilities","Respectful Conduct","Prohibited Booking Activities","Live Bookings",
          "Schedule Bookings","No-Show Conduct","Late Arrival","Salon Rules","Payment Conduct","Payment Disputes","Reviews and Ratings",
          "False or Misleading Information","Coupon and Offer Misuse","Account Misuse","Personal Information","Photography and Recording",
          "Harassment and Abuse","Discrimination and Hate","Illegal Activities","Platform and System Security","Automated or Abusive Use",
          "Spam and Unwanted Communication","Intellectual Property","Content Standards","Customer-Salon Disputes","Customer Support Conduct","Reporting Misconduct",
          "Investigation and Enforcement","Emergency or Serious Safety Concerns","No Retaliation for Genuine Reports","Account Restrictions",
          "Responsibility for Account Activity","No Circumvention","Relationship With Other Policies","Changes to This Policy","Contact Us"
        ][i]
      }`
    }));
      
        case "partner":
    return Array.from({ length: 56 }, (_, i) => ({
      id: `partner-terms-${i + 1}`,
      label: `${i + 1}. ${
        [
          "About DigiSaloon","Partner Eligibility","Partner Account",
          "Accurate Salon Information","Salon Services","Service Pricing","Booking Types","Booking Acceptance","Salon Availability",
          "Salon Cancellation","Customer Cancellation","Booking Payment Model","Example of Booking Payment","Salon Settlement","Remaining Service Amount",
          "DigiSaloon Commission","Refunds","Salon Responsibility for Customer Payments","Customer Service Standards","Service Quality",
          "Salon Staff","Health, Safety and Hygiene","Licenses and Registrations","Tax and GST Information","Bank Account and Settlement Information","Customer Information",
          "Privacy and Data Protection","Reviews and Ratings","Salon Content","Intellectual Property","Use of Salon Name and Content","Promotions and Offers",
          "Prohibited Partner Conduct","Unauthorized Payments","No Unauthorized Charges","Booking Changes","Customer No-Show","Salon Closure","Partner Support",
          "Technical Requirements","Partner Account Security","Monitoring and Verification","Suspension or Restriction","Termination","Effect of Termination",
          "Outstanding Settlements","Indemnification","Independent Business Relationship","Service Responsibility","Disputes","Confidentiality",
          "Compliance With Law","Force Majeure","Changes to Partner Terms","Relationship With Other DigiSaloon Policies","Contact DigiSaloon"
        ][i]
      }`
    }));
      
        case "onboarding":
    return Array.from({ length: 42 }, (_, i) => ({
      id: `onboarding-policy-${i + 1}`,
      label: `${i + 1}. ${
        [
          "Purpose of Partner Onboarding","Who Can Apply","Partner Application","Accurate Information Requirement",
          "Identity Verification","Business Verification","Salon Address Verification","Contact Information Verification","Bank Account Verification","GST and Tax Information",
          "Salon Service Verification","Pricing Verification","Salon Images and Content","Operating Hours","Booking Availability Verification",
          "Verification Process","Additional Information Requests","Verification Time","Approval Is Not Automatic","Provisional or Conditional Approval",
          "Rejection of Application","Re-Application","Verification of Existing Partners","Changes to Partner Information","Bank Account Changes",
          "GSTIN Changes","Verification and Payment Settlement","Verification and Customer Trust","False or Fraudulent Information",
          "Unauthorized Representation","Security and Fraud Prevention","Partner Data and Privacy","Third-Party Verification Services",
          "Document Retention","Verification Failure","Partner Account Suspension During Review","Partner Responsibility After Approval",
          "No Guarantee of Continuous Listing","Partner Onboarding Fees","Relationship With Salon Partner Terms","Changes to This Policy","Contact Us"
        ][i]
      }`
    }));
      
    case "partnerservice":
    return Array.from({ length: 26 }, (_, i) => ({
      id: `sec-psp-${i + 1}`,
      label: `${i + 1}. ${
        [
          "Purpose","Service Information","Service Availability","Service Pricing","Price Changes","Taxes and Other Charges","Customer Booking Amount",
          "Service Delivery","Appointment Confirmation","Partner-Initiated Cancellation","Customer Refund When Partner Cancels","Customer Cancellation",
          "Partner No-Show","Delayed Service","Service Modification","Offers and Discounts","Customer Communication","Pricing Disputes","False or Misleading Pricing",
          "Repeated Cancellations","Settlement After Cancellation","Partner Responsibilities","Policy Violations","Policy Updates","Related Policies","Contact Information"
        ][i]
      }`
    }));
        
        case "partnerpayout":
    return Array.from({ length: 33 }, (_, i) => ({
      id: `payout-terms-${i + 1}`,
      label: `${i + 1}. ${
        [
          "Purpose","Current Booking Payment Model","Partner Payout Calculation","Service Amount Paid Directly to Salon",
          "DigiSaloon Commission","Settlement Timing","Settlement Account","Bank Account Changes","Payment Gateway Processing",
          "Refunds and Settlement Adjustments","Live Booking Cancellation","Salon-Cancelled Bookings","Failed Payments","Pending Transactions",
          "Reversed or Charged-Back Transactions","Duplicate Payments","Settlement Holds","Fraud and Risk Review","Taxes and Statutory Obligations",
          "GST Information","Partner Service Collections","No Unauthorized Customer Charges","Settlement Reconciliation","Settlement Disputes",
          "Records and Transaction History","Third-Party Payment Provider","Platform Errors and Corrections","Partner Responsibilities",
          "Suspension or Termination","No Guarantee of Fixed Settlement Time","Policy Changes","Relationship with Other Policies","Contact Information"
        ][i]
      }`
    }));
      
        case "staff":
    return Array.from({ length: 42 }, (_, i) => ({
      id: `staff-policy-${i + 1}`,
      label: `${i + 1}. ${
        [
          "Purpose","Who This Policy Applies To","Manage Web","Partner Responsibility","Staff Account Access","Staff Role and Permissions",
          "Staff Onboarding","Booking Management","Live Bookings","Schedule Bookings","Appointment Status","Staff Assignment","Customer Information",
          "Customer Privacy","Customer Contact","Customer Service Responsibility","Service Information","Payment Information","Unauthorized Charges",
          "Manage Web Security","Shared Devices","Unauthorized Access","System Manipulation","Reviews and Ratings","Customer Photos and Media",
          "Prohibited Conduct","Software and Automation","Staff Offboarding","Lost or Stolen Device","Security Incident Reporting","Monitoring and Audit",
          "Partner Responsibility for Staff Actions","Account Restrictions","Customer-Salon Disputes","Data Retention","Confidentiality",
          "Training and Responsible Use","Policy Violations","No Transfer of Access","Changes to This Policy","Related Policies","Contact Information"
        ][i]
      }`
    }));
      
        case "adminsecurity":
    return Array.from({ length: 47 }, (_, i) => ({
      id: `admin-policy-${i + 1}`,
      label: `${i + 1}. ${
        [
          "Purpose","Scope","Authorized Access Only","Admin Account","Role-Based Access Control","Principle of Least Privilege",
          "Administrator Responsibilities","Password Security","Multi-Factor Authentication","Admin Panel Access From Devices","Network Security",
          "Customer Data Access","Partner Data Access","Payment and Financial Information","Payment Gateway Access","Refund Access","Booking Management",
          "Customer Account Management","Partner Account Management","Content and Review Moderation","Admin Action Logging","No Unauthorized Data Export",
          "Data Minimization","Confidential Information","Admin API and Technical Credentials","Database Access","Production System Access",
          "Admin Panel Changes","Security Monitoring","Suspicious Activity","Security Incident Response","Lost or Stolen Admin Device",
          "Admin Account Suspension","Employee and Contractor Offboarding","Third-Party Access","Security of Third-Party Services",
          "Backups and Recovery","Internal Security Testing","Prohibited Administrative Activities","Conflict of Interest","Internal Communication",
          "Security Awareness","Policy Violations","Security and Privacy","Changes to This Policy","Related Policies","Contact Information"
        ][i]
      }`
    }));
      
        case "dataprotection":
    return Array.from({ length: 43 }, (_, i) => ({
      id: `data-policy-${i + 1}`,
      label: `${i + 1}. ${
        [
          "Purpose","Scope","Types of Information",
          "Data Collection Principles","Data Accuracy","Data Use","Data Protection","Access Control","Customer Data Access","Partner Data Access",
          "Payment Information","Location Information","Reviews and Ratings","Booking Records","Retention Periods","Account Information",
          "Account Deletion","Effect of Account Deletion","Information That May Be Retained","Anonymization","Backups","Deletion from Active Systems",
          "Third-Party Service Providers","Payment Provider Records","Partner Account Deletion","Staff Access Deletion","Data Retention for Disputes","Security Logs",
          "Administrative Records","Data Deletion Methods","User Deletion Requests","Deletion Request Process","When Deletion May Be Delayed",
          "Information That Cannot Be Immediately Deleted","Data Sharing","Internal Data Access","Data Security Incidents","User Responsibility",
          "Children and Age Requirement","International or Cross-Border Processing","Policy Relationship","Policy Changes","Contact Information"
        ][i]
      }`
    }));
        case "incidentresponse":
    return Array.from({ length: 47 }, (_, i) => ({
      id: `sec-policy-${i + 1}`,
      label: `${i + 1}. ${
        [
          "Purpose","Scope","Security Principles","Access Control","Administrative Access","Account Security","Authentication",
          "Data Security","Secure Communication","Payment Security","Payment Gateway Credentials","API Security","Database Security",
          "Application Security","Admin Panel Security","Partner System Security","Staff Security","Security Monitoring","Security Logs","Security Updates",
          "Vulnerability Management","What Is a Security Incident?","Incident Detection","Incident Reporting","Incident Response Process","Incident Containment",
          "Account Compromise","Data Security Incident","Customer Notification","Regulatory or Legal Reporting","Payment Security Incidents",
          "Third-Party Security Incidents","Business Continuity","Backup and Recovery","Post-Incident Review","Employee and Administrator Responsibilities",
          "Partner Responsibilities","Customer Responsibilities","Prohibited Security Activities","Responsible Security Reporting","Security Research",
          "Confidentiality During Incidents","Incident Records","No Guarantee of Complete Security","Policy Changes","Related Policies","Contact Information"
        ][i]
      }`
    }));
        
     case "thirdparty":
    return Array.from({ length: 43 }, (_, i) => ({
      id: `sec-tp-${i + 1}`,
      label: `${i + 1}. ${
        [
          "Purpose","Scope","Third-Party Service Providers","Payment Provider","Customer Booking Payment","Payment Example",
          "Payment Gateway Fees","Payment Information","Payment Credentials","Payment Security","Payment Success and Booking Confirmation",
          "Failed Payments","Pending Payments","Refunds","Refund Processing Time","Payment Reversals","Chargebacks and Disputes","Partner Settlement",
          "Settlement Delays","Third-Party Terms","Third-Party Data Processing","Cloud and Hosting Providers","Email, SMS and Notification Services",
          "Maps and Location Services","Analytics and Monitoring","Authentication Services","Third-Party Service Availability","Third-Party Service Changes",
          "Replacement of Providers","Third-Party Links","Third-Party Security","Third-Party Security Incidents","Payment Fraud Prevention",
          "Partner Responsibilities","Customer Responsibilities","Administrator Responsibilities","No Guarantee of Third-Party Services",
          "Data Retention by Third Parties","Privacy","Taxes and Payment Records","Policy Changes","Related Policies","Contact Information"
        ][i]
      }`
    }));
      default:
        return [];
    }
  };

  const highlights = getHighlights();

  useEffect(() => {
    const handleScroll = () => {
      const sections = highlights.map(h => document.getElementById(h.id));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(highlights[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeTab, highlights]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileTocOpen(false);
    }
  };

  const renderPolicyComponent = () => {
    switch (activeTab) {
      case "Guidlines": return <GuidelinesPolicy />;
      case "privacy": return <PrivacyPolicy />;
      case "terms": return <TermsOfService />;
      case "cookie": return <CookiePolicy />;
      case "cancellation": return <CancellationPolicy />;
      case "payment": return <PaymentPolicy />;
      case "content": return <ContentPolicy />;
      case "disclaimer": return <LegalDisclaimer />;
      case "grievance": return <GrievancePolicy />;
      case "booking": return <BookingPolicy />;
      case "review": return <ReviewPolicy />;
      case "offers": return <OffersPolicy />;
      case "user": return <UserAccountPolicy />;
      case "location": return <LocationNotificationPolicy />;
      case "acceptable": return <AcceptableUsePolicy />;
      case "partner": return <SalonPartnerTerms />;
      case "onboarding": return <PartnerOnboardingPolicy />;
      case "partnerservice": return <PartnerServicePolicy />;
      case "partnerpayout": return <PartnerPayoutPolicy />;
      case "staff": return <StaffPolicy />;
      case "adminsecurity": return <AdminSecurityPolicy />;
      case "dataprotection": return <DataProtectionPolicy />;
      case "incidentresponse": return <SecurityIncidentPolicy />;
      case "thirdparty": return <ThirdPartyPolicy />;
      default: return <PrivacyPolicy />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans flex flex-col">
      
      {/* Top Header Navigation Bar */}
      <div className="border-b border-slate-200 px-4 md:px-6 py-4 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-50 shadow-xs">
        <div className="flex items-center gap-4">
          <a href="/" className="text-lg md:text-xl font-black tracking-tight text-slate-900 hover:opacity-85 transition-opacity no-underline">
            Digi<span className="text-red-700">Saloon</span> <span className="text-[11px] font-normal text-slate-400 block md:inline">| Policies & Guidelines</span>
          </a>
        </div>
      </div>

      {/* 📱 Improved Mobile View Controls (Visible only on small screens) */}
      <div className="block md:hidden bg-slate-50 border-b border-slate-200 p-3 sticky top-[65px] z-40 space-y-2 shadow-sm">
        {/* Policy Selector Dropdown */}
        <div className="relative">
          <select
            value={activeTab}
            onChange={(e) => handleTabChange(e.target.value as PolicyType)}
            className="w-full bg-white border border-slate-300 text-slate-800 text-sm rounded-xl p-3 shadow-xs focus:outline-none focus:ring-2 focus:ring-red-700 font-bold appearance-none pr-10"
          >
            <option value="Guidlines"> Master Guidelines & Policies</option>
            <option value="privacy"> Privacy Policy</option>
            <option value="terms"> Terms of Service</option>
            <option value="cookie"> Cookie Policy</option>
            <option value="cancellation"> Cancellation & Refund Policy</option>
            <option value="payment"> Payment Policy</option>
            <option value="content"> Content Policy</option>
            <option value="disclaimer"> Legal Disclaimer</option>
            <option value="grievance"> Grievance Redressal</option>
            <option value="booking"> Booking Policy</option>
            <option value="review"> Review Policy</option>
            <option value="offers"> Offers & Discounts Policy</option>
            <option value="user"> User Account Policy</option>
            <option value="location"> Location & Notification Policy</option>
            <option value="acceptable"> Acceptable Use Policy</option>
            <option value="partner"> Partner Terms</option>
            <option value="onboarding"> Partner Onboarding Policy</option>
            <option value="partnerservice"> Partner Service & Pricing</option>
            <option value="partnerpayout"> Partner Payout Terms</option>
            <option value="staff"> Staff Policy</option>
            <option value="adminsecurity"> Admin Security Policy</option>
            <option value="dataprotection"> Data Protection Policy</option>
            <option value="incidentresponse"> Security Incident Response</option>
            <option value="thirdparty"> Third-Party Services Policy</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>

        {/* Mobile Table of Contents Accordion Toggle */}
        <button
          onClick={() => setIsMobileTocOpen(!isMobileTocOpen)}
          className="w-full flex items-center justify-between bg-white border border-slate-300 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 shadow-xs active:scale-[0.99] transition-all"
        >
          <span className="flex items-center gap-2">
            <Menu className="w-4 h-4 text-red-700" /> Jump to Section ({highlights.length} sections)
          </span>
          {isMobileTocOpen ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
        </button>

        {/* Collapsible Table of Contents List for Mobile */}
        {isMobileTocOpen && (
          <div className="bg-white border border-slate-200 rounded-xl p-2 max-h-64 overflow-y-auto space-y-1 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
            {highlights.map((h) => (
              <button
                key={h.id}
                onClick={() => scrollToSection(h.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all block truncate ${
                  activeSection === h.id
                    ? "text-red-700 font-bold bg-red-50"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {h.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main 3-Column Layout (Left & Right col-span-2, Center col-span-8) */}
      <div className="w-full grid grid-cols-1 md:grid-cols-12 flex-1">
        
        {/* 1. Left Sidebar (col-span-2) */}
        <aside className="hidden md:block md:col-span-2 border-r border-slate-200 p-4 space-y-1.5 bg-slate-50/50 sticky top-[73px] h-[calc(100vh-73px)] overflow-y-auto">
          <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-3 px-2">
            Policies
          </p>
          
          <button
            onClick={() => handleTabChange("Guidlines")}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all text-left cursor-pointer ${
              activeTab === "Guidlines"
                ? "bg-red-50 text-red-700 border-l-4 border-red-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span className="flex items-center gap-2">
              <FileText className="w-3.5 h-3.5" /> Master Guidelines
            </span>
          </button>

          <button
            onClick={() => handleTabChange("privacy")}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all text-left cursor-pointer ${
              activeTab === "privacy"
                ? "bg-red-50 text-red-700 border-l-4 border-red-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span className="flex items-center gap-2">
              <Shield className="w-3.5 h-3.5" /> Privacy Policy
            </span>
          </button>

          <button
            onClick={() => handleTabChange("terms")}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all text-left cursor-pointer ${
              activeTab === "terms"
                ? "bg-red-50 text-red-700 border-l-4 border-red-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span className="flex items-center gap-2">
              <FileText className="w-3.5 h-3.5" /> Terms of Service
            </span>
          </button>

          <button
            onClick={() => handleTabChange("cookie")}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all text-left cursor-pointer ${
              activeTab === "cookie"
                ? "bg-red-50 text-red-700 border-l-4 border-red-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span className="flex items-center gap-2">
              <Cookie className="w-3.5 h-3.5" /> Cookie Policy
            </span>
          </button>

          <button
            onClick={() => handleTabChange("cancellation")}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all text-left cursor-pointer ${
              activeTab === "cancellation"
                ? "bg-red-50 text-red-700 border-l-4 border-red-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span className="flex items-center gap-2">
              <RefreshCcw className="w-3.5 h-3.5" /> Cancellation & Refund
            </span>
          </button>

          <button
            onClick={() => handleTabChange("payment")}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all text-left cursor-pointer ${
              activeTab === "payment"
                ? "bg-red-50 text-red-700 border-l-4 border-red-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span className="flex items-center gap-2">
              <CreditCard className="w-3.5 h-3.5" /> Payment Policy
            </span>
          </button>

          <button
            onClick={() => handleTabChange("content")}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all text-left cursor-pointer ${
              activeTab === "content"
                ? "bg-red-50 text-red-700 border-l-4 border-red-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span className="flex items-center gap-2">
              <FileText className="w-3.5 h-3.5" /> Content Policy
            </span>
          </button>

          <button
            onClick={() => handleTabChange("disclaimer")}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all text-left cursor-pointer ${
              activeTab === "disclaimer"
                ? "bg-red-50 text-red-700 border-l-4 border-red-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span className="flex items-center gap-2">
              <AlertCircle className="w-3.5 h-3.5" /> Legal Disclaimer
            </span>
          </button>

          <button
            onClick={() => handleTabChange("grievance")}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all text-left cursor-pointer ${
              activeTab === "grievance"
                ? "bg-red-50 text-red-700 border-l-4 border-red-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span className="flex items-center gap-2">
              <LifeBuoy className="w-3.5 h-3.5" /> Grievance Redressal
            </span>
          </button>

          <button
            onClick={() => handleTabChange("booking")}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all text-left cursor-pointer ${
              activeTab === "booking"
                ? "bg-red-50 text-red-700 border-l-4 border-red-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5" /> Booking Policy
            </span>
          </button>

          <button
            onClick={() => handleTabChange("review")}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all text-left cursor-pointer ${
              activeTab === "review"
                ? "bg-red-50 text-red-700 border-l-4 border-red-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span className="flex items-center gap-2">
              <Star className="w-3.5 h-3.5" /> Review Policy
            </span>
          </button>

          <button
            onClick={() => handleTabChange("offers")}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all text-left cursor-pointer ${
              activeTab === "offers"
                ? "bg-red-50 text-red-700 border-l-4 border-red-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span className="flex items-center gap-2">
              <Tag className="w-3.5 h-3.5" /> Offers & Discounts
            </span>
          </button>

          <button
            onClick={() => handleTabChange("user")}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all text-left cursor-pointer ${
              activeTab === "user"
                ? "bg-red-50 text-red-700 border-l-4 border-red-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span className="flex items-center gap-2">
              <User className="w-3.5 h-3.5" /> User Account Policy
            </span>
          </button>

          <button
            onClick={() => handleTabChange("location")}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all text-left cursor-pointer ${
              activeTab === "location"
                ? "bg-red-50 text-red-700 border-l-4 border-red-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" /> Location & Notification
            </span>
          </button>

          <button
            onClick={() => handleTabChange("acceptable")}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all text-left cursor-pointer ${
              activeTab === "acceptable"
                ? "bg-red-50 text-red-700 border-l-4 border-red-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5" /> Acceptable Use
            </span>
          </button>

          <button
            onClick={() => handleTabChange("partner")}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all text-left cursor-pointer ${
              activeTab === "partner"
                ? "bg-red-50 text-red-700 border-l-4 border-red-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span className="flex items-center gap-2">
              <Store className="w-3.5 h-3.5" /> Partner Terms
            </span>
          </button>

          <button
            onClick={() => handleTabChange("onboarding")}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all text-left cursor-pointer ${
              activeTab === "onboarding"
                ? "bg-red-50 text-red-700 border-l-4 border-red-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span className="flex items-center gap-2">
              <UserCheck className="w-3.5 h-3.5" /> Partner Onboarding
            </span>
          </button>

          <button
            onClick={() => handleTabChange("partnerservice")}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all text-left cursor-pointer ${
              activeTab === "partnerservice"
                ? "bg-red-50 text-red-700 border-l-4 border-red-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span className="flex items-center gap-2">
              <CalendarCheck className="w-3.5 h-3.5" /> Partner Service & Pricing
            </span>
          </button>

          <button
            onClick={() => handleTabChange("partnerpayout")}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all text-left cursor-pointer ${
              activeTab === "partnerpayout"
                ? "bg-red-50 text-red-700 border-l-4 border-red-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span className="flex items-center gap-2">
              <Wallet className="w-3.5 h-3.5" /> Partner Payout Terms
            </span>
          </button>

          <button
            onClick={() => handleTabChange("staff")}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all text-left cursor-pointer ${
              activeTab === "staff"
                ? "bg-red-50 text-red-700 border-l-4 border-red-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span className="flex items-center gap-2">
              <Users className="w-3.5 h-3.5" /> Staff Policy
            </span>
          </button>

          <button
            onClick={() => handleTabChange("adminsecurity")}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all text-left cursor-pointer ${
              activeTab === "adminsecurity"
                ? "bg-red-50 text-red-700 border-l-4 border-red-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span className="flex items-center gap-2">
              <ShieldAlert className="w-3.5 h-3.5" /> Admin Security Policy
            </span>
          </button>

          <button
            onClick={() => handleTabChange("dataprotection")}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all text-left cursor-pointer ${
              activeTab === "dataprotection"
                ? "bg-red-50 text-red-700 border-l-4 border-red-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span className="flex items-center gap-2">
              <Database className="w-3.5 h-3.5" /> Data Protection Policy
            </span>
          </button>

          <button
            onClick={() => handleTabChange("incidentresponse")}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all text-left cursor-pointer ${
              activeTab === "incidentresponse"
                ? "bg-red-50 text-red-700 border-l-4 border-red-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span className="flex items-center gap-2">
              <AlertTriangle className="w-3.5 h-3.5" /> Security Incident Response
            </span>
          </button>

          <button
            onClick={() => handleTabChange("thirdparty")}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all text-left cursor-pointer ${
              activeTab === "thirdparty"
                ? "bg-red-50 text-red-700 border-l-4 border-red-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span className="flex items-center gap-2">
              <Share2 className="w-3.5 h-3.5" /> Third-Party Services
            </span>
          </button>
        </aside>

        {/* 2. Center Content Area (col-span-8 - Expanded Width) */}
        <main className="col-span-1 md:col-span-8 p-6 md:p-12">
          {renderPolicyComponent()}
        </main>

        {/* 3. Right Sidebar (col-span-2) */}
        <aside className="hidden md:block md:col-span-2 border-l border-slate-200 p-4 space-y-2 bg-slate-50/50 sticky top-[73px] h-[calc(100vh-73px)] overflow-y-auto">
          <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-4 px-2">
            Table of Contents
          </p>
          <div className="space-y-1">
            {highlights.map((h) => (
              <button
                key={h.id}
                onClick={() => scrollToSection(h.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all block truncate cursor-pointer ${
                  activeSection === h.id
                    ? "text-red-700 font-bold bg-red-50 border-l-2 border-red-700"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {h.label}
              </button>
            ))}
          </div>
        </aside>

      </div>
    </div>
  );
}