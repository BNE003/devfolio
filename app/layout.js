import { Inter } from "next/font/google";
import PlausibleProvider from "next-plausible";
import Script from "next/script";
import { getSEOTags } from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import config from "@/config";
import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const viewport = {
  // Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
  themeColor: config.colors.main,
  width: "device-width",
  initialScale: 1,
};

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
export const metadata = getSEOTags();

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme={config.colors.theme} className={font.className}>
      {config.domainName && (
        <head>
          <PlausibleProvider domain={config.domainName} />
          <script
            id="datafast-queue"
            dangerouslySetInnerHTML={{
              __html: `
                window.datafast = window.datafast || function() {
                  window.datafast.q = window.datafast.q || [];
                  window.datafast.q.push(arguments);
                };
              `
            }}
          />
        </head>
      )}
      <body>
        {/* ClientLayout contains all the client wrappers (Crisp chat support, toast messages, tooltips, etc.) */}
        <ClientLayout>{children}</ClientLayout>

        <Script
          src="https://datafa.st/js/script.js"
          data-website-id="dfid_gRcEwQUw2RBgBveo0cPdT"
          data-domain="voteflow.dev"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
