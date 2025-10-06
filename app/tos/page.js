import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Contact information: marc@shipfa.st
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - Ownership: when buying a package, users can download code to create apps. They own the code but they do not have the right to resell it. They can ask for a full refund within 7 day after the purchase.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://shipfa.st/privacy-policy
// - Governing Law: France
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
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
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Terms and Conditions for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last Updated: January 10, 2025

Welcome to VoteFlow!

These Terms of Service ("Terms") govern your use of the VoteFlow service and the services provided by VoteFlow. By using our service, you agree to these Terms.

1. Description of VoteFlow

VoteFlow is a feature request and feedback management system for iOS/macOS applications. It enables app users to submit feature requests, vote on them, and engage in discussions, while providing developers with tools to track, manage, and prioritize user feedback.

2. Ownership and Usage Rights

When you purchase VoteFlow, you gain the right to integrate our SDK into your applications and use our dashboard to manage feature requests. You may use VoteFlow for an unlimited number of applications. We offer a full refund within 7 days of purchase, as specified in our refund policy.

3. User Data and Privacy

We collect and store user data, including name, email, and payment information, as necessary to provide our services. Additionally, VoteFlow collects feature requests, votes, and comments submitted by your app users. For details on how we handle your data, please refer to our Privacy Policy.

4. Non-Personal Data Collection

We use web cookies to collect non-personal data for the purpose of improving our services and user experience.

5. Service Availability

We strive to maintain service availability but cannot guarantee uninterrupted access. VoteFlow is provided "as is" without warranties of any kind.

6. Governing Law

These Terms are governed by the laws of Germany.

7. Updates to the Terms

We may update these Terms from time to time. Users will be notified of any changes via email.

For any questions or concerns regarding these Terms of Service, please contact us at bene-held@web.de.

Service Provider:
Benedikt Held
Rotkelchenweg 12
85591 Vaterstetten
Germany
Email: bene-held@web.de
Phone: +49 017657501141

Thank you for using VoteFlow!`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
