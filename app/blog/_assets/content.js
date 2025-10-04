import Image from "next/image";
import marcImg from "@/app/blog/_assets/images/authors/marc.png";
import introducingSupabaseImg from "@/public/blog/introducing-supabase/header.png";

// ==================================================================================================================================================================
// BLOG CATEGORIES 🏷️
// ==================================================================================================================================================================

// These slugs are used to generate pages in the /blog/category/[categoryI].js. It's a way to group articles by category.
const categorySlugs = {
  feature: "feature",
  tutorial: "tutorial",
};

// All the blog categories data display in the /blog/category/[categoryI].js pages.
export const categories = [
  {
    // The slug to use in the URL, from the categorySlugs object above.
    slug: categorySlugs.feature,
    // The title to display the category title (h1), the category badge, the category filter, and more. Less than 60 characters.
    title: "New Features",
    // A short version of the title above, display in small components like badges. 1 or 2 words
    titleShort: "Features",
    // The description of the category to display in the category page. Up to 160 characters.
    description:
      "Here are the latest features we've added to ShipFast. I'm constantly improving our product to help you ship faster.",
    // A short version of the description above, only displayed in the <Header /> on mobile. Up to 60 characters.
    descriptionShort: "Latest features added to ShipFast.",
  },
  {
    slug: categorySlugs.tutorial,
    title: "How Tos & Tutorials",
    titleShort: "Tutorials",
    description:
      "Learn how to use ShipFast with these step-by-step tutorials. I'll show you how to ship faster and save time.",
    descriptionShort:
      "Learn how to use ShipFast with these step-by-step tutorials.",
  },
];

// ==================================================================================================================================================================
// BLOG AUTHORS 📝
// ==================================================================================================================================================================

// Social icons used in the author's bio.
const socialIcons = {
  twitter: {
    name: "Twitter",
    svg: (
      <svg
        version="1.1"
        id="svg5"
        x="0px"
        y="0px"
        viewBox="0 0 1668.56 1221.19"
        className="w-9 h-9"
        // Using a dark theme? ->  className="w-9 h-9 fill-white"
      >
        <g id="layer1" transform="translate(52.390088,-25.058597)">
          <path
            id="path1009"
            d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99   h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z"
          />
        </g>
      </svg>
    ),
  },
  linkedin: {
    name: "LinkedIn",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        // Using a dark theme? ->  className="w-6 h-6 fill-white"
        viewBox="0 0 24 24"
      >
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>
    ),
  },
  github: {
    name: "GitHub",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        // Using a dark theme? ->  className="w-6 h-6 fill-white"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
};

// These slugs are used to generate pages in the /blog/author/[authorId].js. It's a way to show all articles from an author.
const authorSlugs = {
  marc: "marc",
  benedikt: "benedikt",
};

// All the blog authors data display in the /blog/author/[authorId].js pages.
export const authors = [
  {
    // The slug to use in the URL, from the authorSlugs object above.
    slug: authorSlugs.marc,
    // The name to display in the author's bio. Up to 60 characters.
    name: "Marc Lou",
    // The job to display in the author's bio. Up to 60 characters.
    job: "Maker of ByeDispute",
    // The description of the author to display in the author's bio. Up to 160 characters.
    description:
      "Marc is a developer and an entrepreneur. He's built 20 startups in the last 3 years. 6 were profitable and 3 were acquired. He's currently building ByeDispute, the #1 Stripe Chargebacks Protection tool.",
    // The avatar of the author to display in the author's bio and avatar badge. It's better to use a local image, but you can also use an external image (https://...)
    avatar: marcImg,
    // A list of social links to display in the author's bio.
    socials: [
      {
        name: socialIcons.twitter.name,
        icon: socialIcons.twitter.svg,
        url: "https://twitter.com/marc_louvion",
      },
      {
        name: socialIcons.linkedin.name,
        icon: socialIcons.linkedin.svg,
        url: "https://www.linkedin.com/in/marclouvion/",
      },
      {
        name: socialIcons.github.name,
        icon: socialIcons.github.svg,
        url: "https://github.com/Marc-Lou-Org/ship-fast",
      },
    ],
  },
  {
    slug: authorSlugs.benedikt,
    name: "Benedikt Held",
    job: "Founder of FeatureFlow",
    description:
      "Benedikt is a developer and entrepreneur passionate about building tools that empower other developers. He created FeatureFlow and VoteFlow to make feature management and user feedback seamless for iOS and macOS apps.",
    avatar: marcImg, // TODO: Replace with benedikt's avatar
    socials: [
      {
        name: socialIcons.github.name,
        icon: socialIcons.github.svg,
        url: "https://github.com/BNE003",
      },
    ],
  },
];

// ==================================================================================================================================================================
// BLOG ARTICLES 📚
// ==================================================================================================================================================================

// These styles are used in the content of the articles. When you update them, all articles will be updated.
const styles = {
  h2: "text-2xl lg:text-4xl font-bold tracking-tight mb-4 text-base-content",
  h3: "text-xl lg:text-2xl font-bold tracking-tight mb-2 text-base-content",
  p: "text-base-content/90 leading-relaxed",
  ul: "list-inside list-disc text-base-content/90 leading-relaxed",
  li: "list-item",
  // Altnernatively, you can use the library react-syntax-highlighter to display code snippets.
  code: "text-sm font-mono bg-neutral text-neutral-content p-6 rounded-box my-4 overflow-x-scroll select-all",
  codeInline:
    "text-sm font-mono bg-base-300 px-1 py-0.5 rounded-box select-all",
};

// All the blog articles data display in the /blog/[articleId].js pages.
export const articles = [
  {
    slug: "voteflow-tutorial",
    title: "VoteFlow Tutorial: Add Feature Voting to Your iOS App",
    description:
      "Learn how to integrate VoteFlow into your iOS or macOS app in under 5 minutes. Give your users a voice and prioritize features that matter.",
    categories: [
      categories.find((category) => category.slug === categorySlugs.tutorial),
    ],
    author: authors.find((author) => author.slug === authorSlugs.benedikt),
    publishedAt: "2025-10-04",
    image: {
      src: introducingSupabaseImg,
      urlRelative: "/blog/voteflow-tutorial/header.png",
      alt: "VoteFlow SDK integration tutorial",
    },
    content: (
      <>
        <section>
          <h2 className={styles.h2}>Introduction</h2>
          <p className={styles.p}>
            Building a successful app isn&apos;t just about shipping features—it&apos;s about shipping the <em>right</em> features.
            VoteFlow makes it dead simple to collect, prioritize, and manage feature requests directly from your iOS or macOS app users.
          </p>
          <p className={styles.p}>
            In this tutorial, you&apos;ll learn how to integrate VoteFlow into your app in under 5 minutes.
            Your users will be able to submit feature requests, vote on existing ideas, and discuss features—all with just a few lines of code.
          </p>
        </section>

        <section>
          <h2 className={styles.h2}>What You&apos;ll Build</h2>
          <p className={styles.p}>
            By the end of this tutorial, your app will have:
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>A complete feature request system with voting</li>
            <li className={styles.li}>Comment threads for user discussions</li>
            <li className={styles.li}>Automatic vote counting and ranking</li>
            <li className={styles.li}>Status badges (Open, Planned, In Progress, Completed)</li>
            <li className={styles.li}>Native SwiftUI interface that fits seamlessly into your app</li>
          </ul>
        </section>

        <section>
          <h2 className={styles.h2}>Prerequisites</h2>
          <p className={styles.p}>
            Before we start, make sure you have:
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>Xcode 14.0 or later</li>
            <li className={styles.li}>iOS 16.0+ or macOS 13.0+ deployment target</li>
            <li className={styles.li}>A FeatureFlow account (sign up at FeatureFlow dashboard)</li>
          </ul>
        </section>

        <section>
          <h2 className={styles.h2}>Step 1: Get Your App ID</h2>
          <p className={styles.p}>
            First, you need to create an app in the FeatureFlow dashboard to get your unique App ID.
          </p>

          <h3 className={styles.h3}>1.1 Sign Up & Create Your App</h3>
          <ul className={styles.ul}>
            <li className={styles.li}>Visit the FeatureFlow dashboard</li>
            <li className={styles.li}>Create an account or sign in</li>
            <li className={styles.li}>Click &ldquo;New App&rdquo; and give it a name</li>
            <li className={styles.li}>Copy your generated App ID (e.g., <span className={styles.codeInline}>my-awesome-app-123</span>)</li>
          </ul>

          <p className={styles.p}>
            Keep this App ID handy—you&apos;ll need it in the next step!
          </p>
        </section>

        <section>
          <h2 className={styles.h2}>Step 2: Install VoteFlow SDK</h2>

          <h3 className={styles.h3}>2.1 Add the Package Dependency</h3>
          <p className={styles.p}>
            In Xcode, go to <span className={styles.codeInline}>File → Add Package Dependencies</span> and enter:
          </p>

          <pre className={styles.code}>
            <code>https://github.com/BNE003/VoteFlow</code>
          </pre>

          <p className={styles.p}>
            Select the latest version and click <strong>Add Package</strong>.
          </p>

          <h3 className={styles.h3}>2.2 Alternative: Package.swift</h3>
          <p className={styles.p}>
            If you&apos;re using Swift Package Manager in a Package.swift file:
          </p>

          <pre className={styles.code}>
            <code>{`dependencies: [
    .package(url: "https://github.com/BNE003/VoteFlow", from: "1.0.0")
]`}</code>
          </pre>
        </section>

        <section>
          <h2 className={styles.h2}>Step 3: Integrate VoteFlow View</h2>

          <h3 className={styles.h3}>3.1 The Quick Way (Recommended)</h3>
          <p className={styles.p}>
            The easiest way to integrate VoteFlow is to use the pre-built{" "}
            <span className={styles.codeInline}>FeatureFlowView</span>.
            It includes everything: feature list, voting, comments, and submission form.
          </p>

          <pre className={styles.code}>
            <code>{`import SwiftUI
import VoteFlow

struct ContentView: View {
    var body: some View {
        TabView {
            // Your main app content
            HomeView()
                .tabItem {
                    Label("Home", systemImage: "house")
                }

            // VoteFlow integration - that's it!
            FeatureFlowView(appId: "my-awesome-app-123")
                .tabItem {
                    Label("Feature Requests", systemImage: "lightbulb")
                }
        }
    }
}`}</code>
          </pre>

          <p className={styles.p}>
            The key line is{" "}
            <span className={styles.codeInline}>FeatureFlowView(appId: &quot;my-awesome-app-123&quot;)</span>
            {" "}— replace{" "}
            <span className={styles.codeInline}>my-awesome-app-123</span> with your actual App ID from Step 1.
          </p>

          <h3 className={styles.h3}>3.2 The Custom Way</h3>
          <p className={styles.p}>
            If you want more control over the UI, you can use individual components like{" "}
            <span className={styles.codeInline}>FeatureListView</span>,{" "}
            <span className={styles.codeInline}>SubmitFeatureView</span>, and{" "}
            <span className={styles.codeInline}>SupabaseClient</span>:
          </p>

          <pre className={styles.code}>
            <code>{`import SwiftUI
import VoteFlow

struct FeaturesTab: View {
    @StateObject private var client = SupabaseClient()

    var body: some View {
        NavigationStack {
            FeatureListView(client: client, appId: "my-awesome-app-123")
                .navigationTitle("Feature Requests")
                .toolbar {
                    ToolbarItem(placement: .primaryAction) {
                        NavigationLink {
                            SubmitFeatureView(client: client, appId: "my-awesome-app-123")
                        } label: {
                            Image(systemName: "plus")
                        }
                    }
                }
        }
    }
}`}</code>
          </pre>
        </section>

        <section>
          <h2 className={styles.h2}>Step 4: Run Your App!</h2>
          <p className={styles.p}>
            That&apos;s it! Build and run your app. You should now see:
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>A list of all feature requests for your app</li>
            <li className={styles.li}>Upvote buttons with vote counts</li>
            <li className={styles.li}>Comment sections on each feature</li>
            <li className={styles.li}>A form to submit new feature requests</li>
            <li className={styles.li}>Status badges showing feature progress</li>
          </ul>
        </section>

        <section>
          <h2 className={styles.h2}>How It Works Behind the Scenes</h2>

          <h3 className={styles.h3}>User Voting System</h3>
          <p className={styles.p}>
            VoteFlow uses a device-specific identifier to track votes. Each user can vote once per feature.
            The SDK automatically handles vote state persistence using UserDefaults.
          </p>

          <h3 className={styles.h3}>Real-time Updates</h3>
          <p className={styles.p}>
            All data is powered by Supabase, which means:
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>Votes are counted automatically via database triggers</li>
            <li className={styles.li}>Features are sorted by vote count in real-time</li>
            <li className={styles.li}>Comments appear instantly for all users</li>
          </ul>

          <h3 className={styles.h3}>Status Workflow</h3>
          <p className={styles.p}>
            From the FeatureFlow dashboard, you can update feature status:
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}><strong>Open</strong> - New feature requests (gray badge)</li>
            <li className={styles.li}><strong>Planned</strong> - Approved for development (blue badge)</li>
            <li className={styles.li}><strong>In Progress</strong> - Currently being built (orange badge)</li>
            <li className={styles.li}><strong>Completed</strong> - Shipped! (green badge)</li>
          </ul>
        </section>

        <section>
          <h2 className={styles.h2}>Managing Features from the Dashboard</h2>
          <p className={styles.p}>
            While your users submit and vote on features in-app, you can manage everything from the web dashboard:
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>View all features sorted by vote count</li>
            <li className={styles.li}>Change feature status (move features through your workflow)</li>
            <li className={styles.li}>Read user comments and feedback</li>
            <li className={styles.li}>See statistics: total features, votes, and comments</li>
            <li className={styles.li}>Identify which features to prioritize based on user demand</li>
          </ul>
        </section>

        <section>
          <h2 className={styles.h2}>Advanced Customization</h2>

          <h3 className={styles.h3}>Custom User Identifiers</h3>
          <p className={styles.p}>
            By default, VoteFlow uses device IDs. If you have user authentication, you can pass custom identifiers:
          </p>

          <pre className={styles.code}>
            <code>{`// Future feature - custom user IDs
// Currently uses automatic device identification`}</code>
          </pre>

          <h3 className={styles.h3}>Styling & Theming</h3>
          <p className={styles.p}>
            VoteFlow uses native SwiftUI components, which means it automatically adapts to:
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>Light and dark mode</li>
            <li className={styles.li}>Dynamic type (accessibility)</li>
            <li className={styles.li}>Your app&apos;s accent color</li>
          </ul>
        </section>

        <section>
          <h2 className={styles.h2}>Next Steps</h2>
          <p className={styles.p}>
            Now that you&apos;ve integrated VoteFlow, here&apos;s what you can do:
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>Customize the UI to match your app&apos;s design</li>
            <li className={styles.li}>Add the feature request tab to your settings screen</li>
            <li className={styles.li}>Set up notifications for new feature requests</li>
            <li className={styles.li}>Ship features users actually want!</li>
          </ul>
        </section>

        <section>
          <h2 className={styles.h2}>Conclusion</h2>
          <p className={styles.p}>
            VoteFlow makes user feedback management effortless. With just a few lines of code,
            you&apos;ve given your users a direct channel to influence your product roadmap.
            No more guessing what to build next—let your users guide you!
          </p>
          <p className={styles.p}>
            Questions or feedback? Open an issue on{" "}
            <a href="https://github.com/BNE003/VoteFlow" className="link link-primary">
              GitHub
            </a>{" "}
            or reach out to the FeatureFlow team.
          </p>
        </section>
      </>
    ),
  },
];
