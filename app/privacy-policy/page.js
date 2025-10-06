import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple privacy policy for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: Order processing
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email
// - Contact information: marc@shipfa.st

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Privacy Policy | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Privacy Policy for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last Updated: January 10, 2025

Thank you for using VoteFlow ("we," "us," or "our"). This Privacy Policy outlines how we collect, use, and protect your personal and non-personal information when you use our service.

By accessing or using VoteFlow, you agree to the terms of this Privacy Policy. If you do not agree with the practices described in this policy, please do not use the service.

1. Information We Collect

1.1 Personal Data (Developer Accounts)

We collect the following personal information from developers who use VoteFlow:

Name: We collect your name to personalize your experience and communicate with you effectively.
Email: We collect your email address to send you important information regarding your subscription, updates, and communication.
Payment Information: We collect payment details to process your subscription securely. However, we do not store your payment information on our servers. Payments are processed by trusted third-party payment processors (Stripe).

1.2 User-Generated Content (App Users)

VoteFlow collects and stores the following data submitted by your app users through the SDK:
- Feature requests (title, description)
- Votes (associated with device identifiers)
- Comments (author name, text)
- Device identifiers (for preventing duplicate voting)

This data is stored on behalf of the app developer and is accessible through the developer's dashboard.

1.3 Non-Personal Data

We may use web cookies and similar technologies to collect non-personal information such as your IP address, browser type, device information, and browsing patterns. This information helps us to enhance your browsing experience, analyze trends, and improve our services.

2. Purpose of Data Collection

We collect and use personal data for:
- Account management and authentication
- Order processing and subscription management
- Providing the VoteFlow service and SDK functionality
- Customer support
- Service improvements and analytics

User-generated content is collected to enable the core functionality of VoteFlow: allowing app users to submit, vote on, and discuss feature requests.

3. Data Sharing

We do not share your personal data with any third parties except as required for service operation (e.g., sharing your information with payment processors). We do not sell, trade, or rent your personal information to others.

App developers have full access to the feature requests, votes, and comments submitted by their app users through the VoteFlow dashboard.

4. Data Storage and Security

All data is stored securely using Supabase infrastructure with encryption at rest and in transit. We implement industry-standard security measures to protect your information.

5. Children's Privacy

VoteFlow is not intended for children under the age of 13. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us at the email address provided below.

6. Your Rights (GDPR Compliance)

As a user in the European Union, you have the right to:
- Access your personal data
- Request correction of inaccurate data
- Request deletion of your data
- Object to processing of your data
- Request data portability

To exercise these rights, please contact us at bene-held@web.de.

7. Updates to the Privacy Policy

We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any updates will be posted on this page, and we may notify you via email about significant changes.

8. Contact Information

If you have any questions, concerns, or requests related to this Privacy Policy, you can contact us at:

Service Provider:
Benedikt Held
Rotkelchenweg 12
85591 Vaterstetten
Germany
Email: bene-held@web.de
Phone: +49 017657501141

By using VoteFlow, you consent to the terms of this Privacy Policy.`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
