import { useState, useEffect } from "react";
import { Shield, FileText, Cookie, RefreshCcw, CreditCard, AlertCircle, LifeBuoy, Calendar, Star, Tag, User, MapPin, ShieldCheck, Store, UserCheck, CalendarCheck, Wallet, Users, ShieldAlert, Database, AlertTriangle, Share2 } from "lucide-react";
import { PrivacyPolicy } from "./PrivacyPolicy";
import { TermsOfService } from "./TermsOfService";
import { CookiePolicy } from "./CookiePolicy";
import { CancellationPolicy } from "./CancellationPolicy";
import { PaymentPolicy } from "./PaymentPolicy";
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

export function PolicyHub() {
const [activeTab, setActiveTab] = useState<"privacy" | "terms" | "cookie" | "cancellation" | "payment" | "disclaimer" | "grievance" | "booking" | "review" | "offers" | "user" | "location" | "acceptable" | "partner" | "onboarding" | "partnerservice" | "partnerpayout" | "staff" | "adminsecurity" | "dataprotection" | "incidentresponse" | "thirdparty">("privacy");  const [activeSection, setActiveSection] = useState<string>("");

  const getHighlights = () => {
    switch (activeTab) {
      case "privacy":
        return Array.from({ length: 24 }, (_, i) => ({
          id: `sec-${i + 1}`,
          label: `${i + 1}. ${
            [
              "About DigiSaloon", "Information We Collect", "Partner Information", "How We Use Information",
              "Booking and Appointment", "Customer Info & Partners", "Payment Providers", "Communication Providers",
              "Notifications", "Location Information", "Cookies & Technologies", "Analytics",
              "How We Share Info", "Legal & Security Disclosures", "Data Security", "Data Retention",
              "Account Deletion", "Children's Privacy", "Data Rights & Requests", "Security Requests",
              "Third-Party Services", "International Processing", "Changes to Policy", "Contact Us"
            ][i]
          }`
        }));
      case "terms":
        return Array.from({ length: 36 }, (_, i) => ({
          id: `t-${i + 1}`,
          label: `${i + 1}. ${
            [
              "About DigiSaloon", "Eligibility", "Account Registration", "Customer Services",
              "Salon Services", "Salon Information", "Booking and Appointment", "Customer Cancellation",
              "Salon Cancellation", "Payments", "Salon Commission", "Salon Settlement",
              "Refunds", "Reviews and Ratings", "User Content", "Prohibited Activities",
              "Partner and Staff Access", "Customer Information", "Location Services", "Notifications and Communications",
              "Intellectual Property", "Third-Party Services", "Razorpay and Payment Processing", "Platform Availability",
              "Account Suspension or Termination", "Account Deletion", "Privacy", "Disclaimer",
              "Limitation of Liability", "Indemnification", "Changes to Services", "Changes to These Terms",
              "Governing Law", "Severability", "Entire Agreement", "Contact Us"
            ][i]
          }`
        }));
      case "cookie":
        return Array.from({ length: 20 }, (_, i) => ({
          id: `cookie-${i + 1}`,
          label: `${i + 1}. ${
            [
              "What Are Cookies?", "Where We May Use Cookies", "Why DigiSaloon Uses Cookies", "Essential Cookies",
              "Authentication and Session Cookies", "Security Cookies", "Preference Cookies", "Analytics Technologies",
              "Performance and Technical Monitoring", "Third-Party Services", "Payment-Related Technologies", "Mobile Applications",
              "Personal Information", "Cookie Duration", "Managing Cookies", "Effect of Disabling Cookies",
              "Do Not Track Signals", "Changes to Cookies", "Changes to This Cookie Policy", "Contact Us"
            ][i]
          }`
        }));
      case "cancellation":
        return Array.from({ length: 24 }, (_, i) => ({
          id: `can-${i + 1}`,
          label: `${i + 1}. ${
            [
              "Scope", "Customer Cancellation", "First Five Cancellations", "Cancellation From Sixth",
              "Salon Cancellation", "Cancellation Before Payment", "Online Paid Bookings", "Pay-at-Salon Bookings",
              "Refunds", "Refund Amount", "Refund Processing", "Failed Payment",
              "Duplicate Payment", "Booking Status", "Cancellation by DigiSaloon", "Salon No-Show/Issue",
              "Customer No-Show", "Cancellation History", "Refund Abuse", "Payment Provider",
              "Taxes and Charges", "Contact for Refund Issues", "Policy Updates", "Contact"
            ][i]
          }`
        }));
      case "payment":
        return Array.from({ length: 26 }, (_, i) => ({
          id: `pay-${i + 1}`,
          label: `${i + 1}. ${
            [
              "Scope", "Payment Options", "Online Payment", "Razorpay", "Payment Information", "Pay-at-Salon",
              "Salon Commission", "Salon Settlement", "Settlement Account", "Refunds", "Refund Processing", "Failed Payments",
              "Duplicate Payments", "Booking Confirmation", "Cancellation by Salon", "Cancellation by Customer",
              "Payment Disputes", "Chargebacks", "Fraud Prevention", "Taxes and Other Charges", "Third-Party Payment Services",
              "Payment Records", "Security", "Partner Responsibilities", "Policy Updates", "Contact"
            ][i]
          }`
        }));
      case "disclaimer":
        return Array.from({ length: 21 }, (_, i) => ({
          id: `legal-${i + 1}`,
          label: `${i + 1}. ${
            [
              "Platform Role", "Salon Responsibility", "Salon Information", "Prices and Offers",
              "Appointment Availability", "Platform Availability", "Payment Services", "Refunds",
              "Location Information", "Reviews and Ratings", "Third-Party Services", "External Links",
              "User Responsibility", "Salon Partner Responsibility", "No Professional Advice", "Security Disclaimer",
              "Limitation of Responsibility", "Changes to Information", "Relationship With Other Policies", "Governing Law", "Contact"
            ][i]
          }`
        }));
      case "grievance":
        return Array.from({ length: 19 }, (_, i) => ({
          id: `g-${i + 1}`,
          label: `${i + 1}. ${
            [
              "Purpose", "Who Can Contact DigiSaloon", "Types of Complaints", "How to Contact DigiSaloon",
              "Information to Include", "Complaint Review", "Booking Complaints", "Payment and Refund Complaints",
              "Salon Service Complaints", "Partner Complaints", "Privacy and Data Complaints", "Security Reports",
              "Response and Resolution", "Escalation", "Abusive Support Requests", "Third-Party Issues",
              "No Waiver of Legal Rights", "Policy Updates", "Contact"
            ][i]
          }`
        }));
      case "booking":
        return Array.from({ length: 25 }, (_, i) => ({
          id: `book-${i + 1}`,
          label: `${i + 1}. ${
            [
              "Scope", "Making a Booking", "Booking Confirmation", "Booking Information",
              "Appointment Time", "Salon Responsibilities", "Customer Responsibilities", "Double Booking Prevention",
              "Booking Modification", "Customer Cancellation", "Salon Cancellation", "Customer No-Show",
              "Late Arrival", "Salon Unable to Provide Service", "Pay-at-Salon Bookings", "Online Paid Bookings",
              "Pricing", "Service Availability", "Booking Records", "Fraudulent or Abusive Bookings",
              "Technical Issues", "Third-Party Services", "Contact for Booking Issues", "Policy Updates", "Contact"
            ][i]
          }`
        }));
      case "review":
        return Array.from({ length: 21 }, (_, i) => ({
          id: `rev-${i + 1}`,
          label: `${i + 1}. ${
            [
              "Purpose", "Who Can Submit a Review", "Genuine Experience", "Prohibited Reviews",
              "Fake Reviews", "Rating Manipulation", "Salon Partner Conduct", "Review Content",
              "Right to Moderate", "No Guarantee of Publication", "Editing or Updating Reviews", "Complaints About Reviews",
              "Disputed Reviews", "No Guarantee of Accuracy", "Use of Reviews", "Intellectual Property",
              "Privacy", "Consequences of Abuse", "Legal Requests", "Policy Updates", "Contact"
            ][i]
          }`
        }));
      case "offers":
        return Array.from({ length: 22 }, (_, i) => ({
          id: `off-${i + 1}`,
          label: `${i + 1}. ${
            [
              "Scope", "Eligibility", "Coupon Codes", "One Offer Per Booking",
              "Minimum Booking Value", "Maximum Discount", "Salon-Specific Offers", "Offer Period",
              "New User Offers", "Promotional Abuse", "Cancellation of Discounted Bookings", "Expired or Invalid Coupons",
              "Coupon Transfer", "Cash Conversion", "Changes to Offers", "Technical Errors",
              "Payment Methods", "Taxes and Charges", "No Guaranteed Availability", "Relationship With Other Policies",
              "Policy Updates", "Contact"
            ][i]
          }`
        }));
        case "user":
  return Array.from({ length: 20 }, (_, i) => ({
    id: `user-${i + 1}`,
    label: `${i + 1}. ${
      [
        "Scope", "Account Creation", "Eligibility", "Account Security",
        "Accurate Information", "Multiple Accounts", "Account Use", "Account Suspension",
        "Account Termination", "Account Deletion", "Effect of Account Deletion", "Retention After Deletion",
        "Pending Bookings", "Refunds After Account Deletion", "Unauthorized Account Access", "Account Recovery",
        "Privacy", "Relationship With Other Policies", "Policy Updates", "Contact"
      ][i]
    }`
  }));
  case "location":
  return Array.from({ length: 20 }, (_, i) => ({
    id: `loc-${i + 1}`,
    label: `${i + 1}. ${
      [
        "Scope", "Location Services", "Location Permission", "If Location Permission Is Denied",
        "Location Accuracy", "Background Location", "Use of Location Information", "Notifications",
        "Service Notifications", "Promotional Notifications", "Managing Notifications", "Partner Notifications",
        "Manage Web Notifications", "Communication Providers", "Security Notifications", "Personal Information",
        "No Guarantee of Delivery", "Third-Party Services", "Policy Updates", "Contact"
      ][i]
    }`
  }));
  case "acceptable":
  return Array.from({ length: 24 }, (_, i) => ({
    id: `use-${i + 1}`,
    label: `${i + 1}. ${
      [
        "Scope", "Appropriate Use", "Accurate Information", "Respectful Conduct",
        "Prohibited Activities", "Fake Bookings", "Cancellation Abuse", "Payment Abuse",
        "Review and Rating Abuse", "Misuse of Offers", "Unauthorized Access", "Automated Access",
        "Harmful Content", "Personal Information", "Security Testing", "Platform Interference",
        "Customer-Salon Relationship", "Customer No-Show", "Consequences of Violation", "Emergency Restrictions",
        "Reporting Misuse", "Relationship With Other Policies", "Policy Updates", "Contact"
      ][i]
    }`
  }));
  case "partner":
  return Array.from({ length: 32 }, (_, i) => ({
    id: `part-${i + 1}`,
    label: `${i + 1}. ${
      [
        "Scope", "Partner Eligibility", "Salon Profile", "Services and Pricing", 
        "Appointment Availability", "Booking Responsibilities", "Salon Cancellation", 
        "Customer No-Show", "Customer Information", "Staff Access", "Manage Web App", 
        "Payments", "Commission", "Settlement", "Refund Cooperation", 
        "Reviews and Ratings", "Customer Conduct", "Business Compliance", 
        "Intellectual Property", "Partner Data", "Security Responsibilities", 
        "Prohibited Partner Activities", "Partner Account Suspension", 
        "Partner Account Termination", "Platform Availability", "Partner Support", 
        "Confidentiality", "Relationship Between DigiSaloon and Salon", 
        "Changes to Partner Services", "Changes to Partner Terms", "Governing Law", "Contact"
      ][i]
    }`
  }));
  case "onboarding":
  return Array.from({ length: 25 }, (_, i) => ({
    id: `onb-${i + 1}`,
    label: `${i + 1}. ${
      [
        "Purpose", "Eligibility", "Partner Registration", "Authorized Representative",
        "Business Information", "Verification Information", "Document Verification", "Bank and Settlement Verification",
        "Partner Approval", "Verification Failure", "Account Activation", "Profile Accuracy",
        "Changes in Ownership", "Changes in Bank Information", "Partner Staff", "Duplicate Salon Accounts",
        "Verification Re-check", "Suspension During Verification", "Fraudulent Information", "Data Handling",
        "Third-Party Verification", "No Guarantee of Approval", "Partner Responsibilities After Approval", "Policy Updates", "Contact"
      ][i]
    }`
  }));
  case "partnerservice":
  return Array.from({ length: 28 }, (_, i) => ({
    id: `ps-${i + 1}`,
    label: `${i + 1}. ${
      [
        "Purpose", "Service Listing", "Service Accuracy", "Pricing",
        "Price Changes", "Additional Charges", "Service Availability", "Operating Hours",
        "Appointment Acceptance", "Partner Cancellation", "Customer Refund for Salon Cancellation", "Pay-at-Salon Bookings",
        "Repeated Cancellations", "Customer Cancellation", "Customer No-Show", "Booking Time",
        "Service Substitution", "Service Quality", "Hygiene and Safety", "Offers and Discounts",
        "Reviews and Ratings", "Booking Conflicts", "Unauthorized Price or Service Changes", "Partner Responsibility",
        "Violations", "Relationship With Other Policies", "Policy Updates", "Contact"
      ][i]
    }`
  }));
  case "partnerpayout":
  return Array.from({ length: 28 }, (_, i) => ({
    id: `payt-${i + 1}`,
    label: `${i + 1}. ${
      [
        "Scope", "Payment Methods", "Online Payments", "Pay-at-Salon",
        "DigiSaloon Commission", "Settlement Eligibility", "Settlement Timeline", "Bank Account Information",
        "Incorrect Bank Information", "Change of Bank Account", "Refunds", "Cancelled Bookings",
        "No-Show Bookings", "Transaction Reconciliation", "Settlement Statements", "Payment Provider",
        "Payment Processing Delays", "Disputed Transactions", "Fraud Prevention", "Taxes",
        "Settlement Records", "Partner Responsibility", "Settlement Disputes", "No Cash Payout From DigiSaloon",
        "Changes to Settlement Terms", "Relationship With Other Policies", "Policy Updates", "Contact"
      ][i]
    }`
  }));
  case "staff":
  return Array.from({ length: 27 }, (_, i) => ({
    id: `staff-${i + 1}`,
    label: `${i + 1}. ${
      [
        "Purpose", "Authorized Access", "Staff Accounts", "Role-Based Access",
        "Owner Responsibility", "Staff Responsibility", "Appointment Management", "No False Booking Updates",
        "Customer Information", "Customer Communication", "Customer Privacy", "Service Management",
        "Staff Availability", "Booking Conflicts", "No-Show Management", "Cancellation Management",
        "Payment Information", "Account Security", "Staff Leaving the Salon", "Prohibited Activities",
        "Monitoring and Logs", "Security Incidents", "Suspension of Staff Access", "Salon Responsibility",
        "Relationship With Partner Terms", "Policy Updates", "Contact"
      ][i]
    }`
  }));
  case "adminsecurity":
  return Array.from({ length: 29 }, (_, i) => ({
    id: `as-${i + 1}`,
    label: `${i + 1}. ${
      [
        "Purpose", "Authorized Access Only", "Individual Admin Accounts", "Role-Based Access",
        "Principle of Least Privilege", "Authentication", "Password Security", "Sensitive Information",
        "Customer Data Access", "Partner Data Access", "Payment Information", "Database Access",
        "Data Export", "Admin Activity Logs", "Unauthorized Changes", "Production Environment",
        "Software and System Changes", "Admin Device Security", "Public Exposure", "API and Credential Security",
        "Staff Changes", "Security Incident Reporting", "Incident Response", "Confidentiality",
        "Internal Use Only", "Policy Violations", "Third-Party Administrators", "Policy Updates", "Internal Contact"
      ][i]
    }`
  }));
  case "dataprotection":
  return Array.from({ length: 31 }, (_, i) => ({
    id: `dp-${i + 1}`,
    label: `${i + 1}. ${
      [
        "Purpose", "Scope", "Types of Information", "Purpose of Data Processing",
        "Data Minimization", "Data Accuracy", "Access Control", "Employee and Admin Access",
        "Partner Access", "Data Security", "Sensitive Authentication Information", "Third-Party Processing",
        "Data Retention", "Transaction Records", "Security Logs", "Legal Retention",
        "Account Deletion", "Information Retained After Deletion", "Data Deletion Process", "Backups",
        "Data Breach or Security Incident", "Internal Data Handling", "Data Export", "Data Sharing",
        "User Rights and Requests", "Data Protection Responsibilities", "Policy Violations", "Policy Review",
        "Relationship With Privacy Policy", "Public Summary", "Internal Reporting"
      ][i]
    }`
  }));
  case "incidentresponse":
  return Array.from({ length: 28 }, (_, i) => ({
    id: `sir-${i + 1}`,
    label: `${i + 1}. ${
      [
        "Purpose", "Scope", "Security Responsibilities", "Security Controls",
        "Types of Security Incidents", "Incident Detection", "Incident Reporting", "Initial Assessment",
        "Containment", "Investigation", "Data Protection", "Notification",
        "Recovery", "Post-Incident Review", "Security Vulnerabilities", "Account Security",
        "Confidential Authentication Information", "Third-Party Security Incidents", "Backup and Recovery", "Business Continuity",
        "Internal Access", "Employee Responsibilities", "Partner Responsibilities", "Security Limitations",
        "Public Summary", "Policy Violations", "Policy Review", "Policy Updates"
      ][i]
    }`
  }));
  case "thirdparty":
  return Array.from({ length: 30 }, (_, i) => ({
    id: `tp-${i + 1}`,
    label: `${i + 1}. ${
      [
        "Purpose", "Scope", "Third-Party Providers", "Payment Providers",
        "Payment Processing", "Payment Authentication", "Payment Confirmation", "Payment Failures",
        "Refunds Through Payment Providers", "Salon Settlements", "Cloud and Infrastructure Providers", "Communication Providers",
        "Maps and Location Services", "Analytics Services", "Authentication and Verification Services", "Security Providers",
        "Data Protection", "Third-Party Privacy Policies", "Data Sharing", "Internal Third-Party Management",
        "Third-Party Changes", "Service Availability", "Third-Party Security Incidents", "User Responsibility",
        "Partner Responsibility", "No Guarantee of Third-Party Services", "Relationship With Other Policies", "Policy Updates",
        "Public Summary", "Internal Management"
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
  }, [activeTab]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans flex flex-col">
      
      {/* Top Header Navigation Bar */}
      <div className="border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 bg-white z-50 shadow-xs">
        <div className="flex items-center gap-4">
          <a href="/" className="text-xl font-black tracking-tight text-slate-900 hover:opacity-85 transition-opacity no-underline">
            Digi<span className="text-red-700">Saloon</span> <span className="text-xs font-normal text-slate-400">| Policies & Guidelines</span>
          </a>
        </div>
      </div>

      {/* Main 3-Column Layout */}
      <div className="w-full grid grid-cols-1 md:grid-cols-12 flex-1">
        
        {/* 1. Left Sidebar (Fixed) */}
        <aside className="md:col-span-2 border-r border-slate-200 p-6 space-y-2 bg-slate-50/50 sticky top-[73px] h-[calc(100vh-73px)] overflow-y-auto">
          <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-4 px-2">
            Policies
          </p>
          
          <button
            onClick={() => { setActiveTab("privacy"); window.scrollTo(0, 0); }}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-all text-left cursor-pointer ${
              activeTab === "privacy"
                ? "bg-red-50 text-red-700 border-l-4 border-red-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4" /> Privacy
            </span>
          </button>

          <button
            onClick={() => { setActiveTab("terms"); window.scrollTo(0, 0); }}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-all text-left cursor-pointer ${
              activeTab === "terms"
                ? "bg-red-50 text-red-700 border-l-4 border-red-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span className="flex items-center gap-2">
              <FileText className="w-4 h-4" /> Terms
            </span>
          </button>

          <button
            onClick={() => { setActiveTab("cookie"); window.scrollTo(0, 0); }}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-all text-left cursor-pointer ${
              activeTab === "cookie"
                ? "bg-red-50 text-red-700 border-l-4 border-red-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span className="flex items-center gap-2">
              <Cookie className="w-4 h-4" /> Cookies
            </span>
          </button>

          <button
            onClick={() => { setActiveTab("cancellation"); window.scrollTo(0, 0); }}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-all text-left cursor-pointer ${
              activeTab === "cancellation"
                ? "bg-red-50 text-red-700 border-l-4 border-red-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span className="flex items-center gap-2">
              <RefreshCcw className="w-4 h-4" /> Cancellation
            </span>
          </button>

          <button
            onClick={() => { setActiveTab("payment"); window.scrollTo(0, 0); }}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-all text-left cursor-pointer ${
              activeTab === "payment"
                ? "bg-red-50 text-red-700 border-l-4 border-red-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span className="flex items-center gap-2">
              <CreditCard className="w-4 h-4" /> Payment
            </span>
          </button>

          <button
            onClick={() => { setActiveTab("disclaimer"); window.scrollTo(0, 0); }}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-all text-left cursor-pointer ${
              activeTab === "disclaimer"
                ? "bg-red-50 text-red-700 border-l-4 border-red-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4" /> Disclaimer
            </span>
          </button>

          <button
            onClick={() => { setActiveTab("grievance"); window.scrollTo(0, 0); }}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-all text-left cursor-pointer ${
              activeTab === "grievance"
                ? "bg-red-50 text-red-700 border-l-4 border-red-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span className="flex items-center gap-2">
              <LifeBuoy className="w-4 h-4" /> Grievance
            </span>
          </button>

          <button
            onClick={() => { setActiveTab("booking"); window.scrollTo(0, 0); }}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-all text-left cursor-pointer ${
              activeTab === "booking"
                ? "bg-red-50 text-red-700 border-l-4 border-red-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> Booking
            </span>
          </button>

          <button
            onClick={() => { setActiveTab("review"); window.scrollTo(0, 0); }}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-all text-left cursor-pointer ${
              activeTab === "review"
                ? "bg-red-50 text-red-700 border-l-4 border-red-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span className="flex items-center gap-2">
              <Star className="w-4 h-4" /> Review
            </span>
          </button>

          <button
            onClick={() => { setActiveTab("offers"); window.scrollTo(0, 0); }}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-all text-left cursor-pointer ${
              activeTab === "offers"
                ? "bg-red-50 text-red-700 border-l-4 border-red-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span className="flex items-center gap-2">
              <Tag className="w-4 h-4" /> Offers
            </span>
          </button>

          <button
  onClick={() => { setActiveTab("user"); window.scrollTo(0, 0); }}
  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-all text-left cursor-pointer ${
    activeTab === "user"
      ? "bg-red-50 text-red-700 border-l-4 border-red-700"
      : "text-slate-600 hover:bg-slate-100"
  }`}
>
  <span className="flex items-center gap-2">
    <User className="w-4 h-4" /> Account
  </span>
</button>
<button
  onClick={() => { setActiveTab("location"); window.scrollTo(0, 0); }}
  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-all text-left cursor-pointer ${
    activeTab === "location"
      ? "bg-red-50 text-red-700 border-l-4 border-red-700"
      : "text-slate-600 hover:bg-slate-100"
  }`}
>
  <span className="flex items-center gap-2">
    <MapPin className="w-4 h-4" /> Location
  </span>
</button>
<button
  onClick={() => { setActiveTab("acceptable"); window.scrollTo(0, 0); }}
  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-all text-left cursor-pointer ${
    activeTab === "acceptable"
      ? "bg-red-50 text-red-700 border-l-4 border-red-700"
      : "text-slate-600 hover:bg-slate-100"
  }`}
>
  <span className="flex items-center gap-2">
    <ShieldCheck className="w-4 h-4" /> Acceptable Use
  </span>
</button>
<button
  onClick={() => { setActiveTab("partner"); window.scrollTo(0, 0); }}
  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-all text-left cursor-pointer ${
    activeTab === "partner"
      ? "bg-red-50 text-red-700 border-l-4 border-red-700"
      : "text-slate-600 hover:bg-slate-100"
  }`}
>
  <span className="flex items-center gap-2">
    <Store className="w-4 h-4" /> Partner Terms
  </span>
</button>
<button
  onClick={() => { setActiveTab("onboarding"); window.scrollTo(0, 0); }}
  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-all text-left cursor-pointer ${
    activeTab === "onboarding"
      ? "bg-red-50 text-red-700 border-l-4 border-red-700"
      : "text-slate-600 hover:bg-slate-100"
  }`}
>
  <span className="flex items-center gap-2">
    <UserCheck className="w-4 h-4" /> Onboarding
  </span>
</button>
<button
  onClick={() => { setActiveTab("partnerservice"); window.scrollTo(0, 0); }}
  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-all text-left cursor-pointer ${
    activeTab === "partnerservice"
      ? "bg-red-50 text-red-700 border-l-4 border-red-700"
      : "text-slate-600 hover:bg-slate-100"
  }`}
>
  <span className="flex items-center gap-2">
    <CalendarCheck className="w-4 h-4" /> Service & Pricing
  </span>
</button>
<button
  onClick={() => { setActiveTab("partnerpayout"); window.scrollTo(0, 0); }}
  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-all text-left cursor-pointer ${
    activeTab === "partnerpayout"
      ? "bg-red-50 text-red-700 border-l-4 border-red-700"
      : "text-slate-600 hover:bg-slate-100"
  }`}
>
  <span className="flex items-center gap-2">
    <Wallet className="w-4 h-4" /> Partner Payout
  </span>
</button>
<button
  onClick={() => { setActiveTab("staff"); window.scrollTo(0, 0); }}
  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-all text-left cursor-pointer ${
    activeTab === "staff"
      ? "bg-red-50 text-red-700 border-l-4 border-red-700"
      : "text-slate-600 hover:bg-slate-100"
  }`}
>
  <span className="flex items-center gap-2">
    <Users className="w-4 h-4" /> Staff Policy
  </span>
</button>
<button
  onClick={() => { setActiveTab("adminsecurity"); window.scrollTo(0, 0); }}
  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-all text-left cursor-pointer ${
    activeTab === "adminsecurity"
      ? "bg-red-50 text-red-700 border-l-4 border-red-700"
      : "text-slate-600 hover:bg-slate-100"
  }`}
>
  <span className="flex items-center gap-2">
    <ShieldAlert className="w-4 h-4" /> Admin Security
  </span>
</button>
<button
  onClick={() => { setActiveTab("dataprotection"); window.scrollTo(0, 0); }}
  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-all text-left cursor-pointer ${
    activeTab === "dataprotection"
      ? "bg-red-50 text-red-700 border-l-4 border-red-700"
      : "text-slate-600 hover:bg-slate-100"
  }`}
>
  <span className="flex items-center gap-2">
    <Database className="w-4 h-4" /> Data Protection
  </span>
</button>
<button
  onClick={() => { setActiveTab("incidentresponse"); window.scrollTo(0, 0); }}
  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-all text-left cursor-pointer ${
    activeTab === "incidentresponse"
      ? "bg-red-50 text-red-700 border-l-4 border-red-700"
      : "text-slate-600 hover:bg-slate-100"
  }`}
>
  <span className="flex items-center gap-2">
    <AlertTriangle className="w-4 h-4" /> Incident Response
  </span>
</button>
<button
  onClick={() => { setActiveTab("thirdparty"); window.scrollTo(0, 0); }}
  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-all text-left cursor-pointer ${
    activeTab === "thirdparty"
      ? "bg-red-50 text-red-700 border-l-4 border-red-700"
      : "text-slate-600 hover:bg-slate-100"
  }`}
>
  <span className="flex items-center gap-2">
    <Share2 className="w-4 h-4" /> Third-Party Services
  </span>
</button>
        </aside>

        {/* 2. Center Content Area */}
        <main className="md:col-span-8 p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            {activeTab === "privacy" && <PrivacyPolicy />}
            {activeTab === "terms" && <TermsOfService />}
            {activeTab === "cookie" && <CookiePolicy />}
            {activeTab === "cancellation" && <CancellationPolicy />}
            {activeTab === "payment" && <PaymentPolicy />}
            {activeTab === "disclaimer" && <LegalDisclaimer />}
            {activeTab === "grievance" && <GrievancePolicy />}
            {activeTab === "booking" && <BookingPolicy />}
            {activeTab === "review" && <ReviewPolicy />}
            {activeTab === "offers" && <OffersPolicy />}
            {activeTab === "user" && <UserAccountPolicy />}
            {activeTab === "location" && <LocationNotificationPolicy />}
            {activeTab === "acceptable" && <AcceptableUsePolicy />}
            {activeTab === "partner" && <SalonPartnerTerms />}
            {activeTab === "onboarding" && <PartnerOnboardingPolicy />}
            {activeTab === "partnerservice" && <PartnerServicePolicy />}
            {activeTab === "partnerpayout" && <PartnerPayoutPolicy />}
            {activeTab === "staff" && <StaffPolicy />}
            {activeTab === "adminsecurity" && <AdminSecurityPolicy />}
            {activeTab === "dataprotection" && <DataProtectionPolicy />}
            {activeTab === "incidentresponse" && <SecurityIncidentPolicy />}
            {activeTab === "thirdparty" && <ThirdPartyPolicy />}
          </div>
        </main>

        {/* 3. Right Sidebar (Sticky Table of Contents with ScrollSpy) */}
        <aside className="hidden md:block md:col-span-2 border-l border-slate-200 p-6 sticky top-[73px] h-[calc(100vh-73px)] overflow-y-auto bg-white">
          <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-900 mb-4">
            On This Page
          </p>
          <ul className="space-y-3 text-xs font-medium border-l border-slate-200 pl-3">
            {highlights.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`cursor-pointer transition-colors duration-150 line-clamp-2 ${
                    isActive
                      ? "text-red-700 font-bold border-l-2 border-red-700 -ml-[13px] pl-3"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                </li>
              );
            })}
          </ul>
        </aside>

      </div>
    </div>
  );
}