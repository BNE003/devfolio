import Image from "next/image";
import marcImg from "@/app/blog/_assets/images/authors/marc.png";
import introducingSupabaseImg from "@/public/blog/introducing-supabase/header.png";
import collectUserFeedbackImg from "@/public/blog/collect-user-feedback-ios/header.png";
import leanStartupFeatureVotingImg from "@/public/blog/lean-startup-feature-voting/header.png";

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
    slug: "lean-startup-feature-voting",
    title: "Lean Startup & Feature Voting: Why User Feedback Beats Your Gut Feeling",
    description:
      "Learn how feature voting accelerates the Build-Measure-Learn loop and helps startups avoid building features nobody wants. Lean Startup methodology meets modern product development.",
    categories: [
      categories.find((category) => category.slug === categorySlugs.feature),
    ],
    author: authors.find((author) => author.slug === authorSlugs.benedikt),
    publishedAt: "2025-10-07",
    image: {
      src: leanStartupFeatureVotingImg,
      urlRelative: "/blog/lean-startup-feature-voting/header.png",
      alt: "Lean Startup methodology and feature voting for product development",
    },
    content: (
      <>
        <section>
          <h2 className={styles.h2}>The $1 Million Question Every Founder Faces</h2>
          <p className={styles.p}>
            You have an idea. Your co-founder thinks it&apos;s brilliant. Your team is ready to build.
            But here&apos;s the uncomfortable truth: <strong>70% of startups fail because they build products nobody wants.</strong>
          </p>
          <p className={styles.p}>
            Not because the code was bad. Not because the design was ugly. But because they built features
            based on gut feeling instead of user feedback. They spent months building in the dark,
            only to launch to crickets.
          </p>
          <p className={styles.p}>
            Eric Ries coined the term &quot;Lean Startup&quot; in 2011 to solve exactly this problem.
            The core idea? <em>Build-Measure-Learn</em> as fast as possible. Ship an MVP, measure user behavior,
            learn what they actually want, and iterate. Simple in theory. Brutal in practice.
          </p>
          <p className={styles.p}>
            In this post, we&apos;ll explore how <strong>feature voting systems</strong> supercharge the Lean Startup
            methodology—turning the Build-Measure-Learn loop from weeks into days, and gut feelings into data-driven decisions.
          </p>
        </section>

        <section>
          <h2 className={styles.h2}>The Lean Startup Methodology: A Quick Refresher</h2>
          <p className={styles.p}>
            Before we dive into feature voting, let&apos;s revisit the core principles of Lean Startup:
          </p>

          <h3 className={styles.h3}>1. Build-Measure-Learn Loop</h3>
          <p className={styles.p}>
            The fundamental cycle of Lean Startup. Build a minimal version of your idea, measure how users respond,
            learn from the data, and iterate. The goal isn&apos;t to build the perfect product—it&apos;s to learn the fastest.
          </p>

          <h3 className={styles.h3}>2. Minimum Viable Product (MVP)</h3>
          <p className={styles.p}>
            Ship the smallest version of your product that lets you start learning. Not a prototype—a real product
            that solves a real problem, but with the absolute minimum feature set. Think Dropbox&apos;s explainer video
            before they wrote a line of code.
          </p>

          <h3 className={styles.h3}>3. Validated Learning</h3>
          <p className={styles.p}>
            Every feature, every decision should teach you something about your customers. The question isn&apos;t
            &quot;Can we build this?&quot; It&apos;s &quot;Should we build this?&quot; Validation comes from user behavior, not opinions.
          </p>

          <h3 className={styles.h3}>4. Innovation Accounting</h3>
          <p className={styles.p}>
            Traditional metrics (revenue, downloads) lie in the early stages. Instead, track actionable metrics:
            activation rate, retention, referral rate. Numbers that tell you if you&apos;re actually solving a problem.
          </p>

          <h3 className={styles.h3}>5. Pivot or Persevere</h3>
          <p className={styles.p}>
            Based on validated learning, decide: keep going (persevere) or change direction (pivot).
            Most successful startups pivot at least once. Instagram started as a check-in app called Burbn.
            Twitter was a podcasting platform. Slack was a gaming company.
          </p>
        </section>

        <section>
          <h2 className={styles.h2}>The Problem with Traditional Lean Startup Implementation</h2>
          <p className={styles.p}>
            Lean Startup is brilliant in theory. But here&apos;s where most teams struggle:
          </p>

          <h3 className={styles.h3}>Problem 1: The Build-Measure-Learn Loop is Too Slow</h3>
          <p className={styles.p}>
            You ship an MVP. Wait for users to try it. Send surveys. Schedule interviews. Parse feedback from support emails.
            Analyze analytics. By the time you &quot;learn,&quot; 6 weeks have passed. Your runway just got 6 weeks shorter.
          </p>

          <h3 className={styles.h3}>Problem 2: Feedback is Scattered</h3>
          <p className={styles.p}>
            Feature requests arrive via email, Twitter DMs, support tickets, App Store reviews, random Slack messages.
            There&apos;s no single source of truth. No way to see patterns. No prioritization framework.
          </p>

          <h3 className={styles.h3}>Problem 3: You Don&apos;t Know What to Build Next</h3>
          <p className={styles.p}>
            Five users want dark mode. Three want iPad support. Two want automation features. Your co-founder wants AI.
            Your designer wants animations. Who&apos;s right? How do you prioritize when everything feels important?
          </p>

          <h3 className={styles.h3}>Problem 4: Silent Majority vs. Vocal Minority</h3>
          <p className={styles.p}>
            The loudest users aren&apos;t always representative. One angry email can bias your entire roadmap.
            Meanwhile, 10,000 silent users might desperately need a different feature but never speak up.
          </p>
        </section>

        <section>
          <h2 className={styles.h2}>Enter Feature Voting: Lean Startup on Steroids</h2>
          <p className={styles.p}>
            Feature voting systems solve every problem we just outlined. Here&apos;s how:
          </p>

          <h3 className={styles.h3}>Accelerates the Build-Measure-Learn Loop</h3>
          <p className={styles.p}>
            Instead of waiting weeks for feedback, you get it instantly. Users browse features, vote on what matters,
            and comment in real-time. You can see trends emerge within hours, not months.
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}><strong>Build:</strong> Ship MVP with feature voting integrated</li>
            <li className={styles.li}><strong>Measure:</strong> Track votes, comments, patterns instantly</li>
            <li className={styles.li}><strong>Learn:</strong> See top-voted features ranked by demand</li>
            <li className={styles.li}><strong>Repeat:</strong> Ship the winner, mark as &quot;Completed,&quot; users see progress</li>
          </ul>

          <h3 className={styles.h3}>Centralizes All Feedback in One Place</h3>
          <p className={styles.p}>
            No more scattered emails or lost DMs. Every feature request lives in your voting board. Users can search,
            upvote existing requests, or submit new ones. You get a single source of truth for your roadmap.
          </p>

          <h3 className={styles.h3}>Democratic Prioritization</h3>
          <p className={styles.p}>
            Votes don&apos;t lie. If 500 users want Feature A and 10 want Feature B, the decision is obvious.
            You&apos;re not guessing—you&apos;re responding to quantified demand. This is validated learning in its purest form.
          </p>

          <h3 className={styles.h3}>Surfaces the Silent Majority</h3>
          <p className={styles.p}>
            Voting is low-friction. Users who&apos;d never write an email can tap an upvote button.
            Suddenly, you hear from the 99% who don&apos;t send feedback—but still have opinions.
          </p>
        </section>

        <section>
          <h2 className={styles.h2}>Real-World Example: How Buffer Used Feedback to Validate Product-Market Fit</h2>
          <p className={styles.p}>
            Joel Gascoigne, founder of Buffer, is a Lean Startup legend. Before building Buffer, he created a landing page
            with a &quot;Plans &amp; Pricing&quot; button. Clicked it? You&apos;d see a message: &quot;You&apos;re a little early—leave your email.&quot;
          </p>
          <p className={styles.p}>
            That two-page MVP validated demand in 7 days. Once he had emails, Joel built a basic product—but kept
            the feedback loop tight. He added a feature request board where users could vote. The result?
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>Buffer knew exactly which integrations to build (Twitter, Facebook, LinkedIn—in that order)</li>
            <li className={styles.li}>They skipped features with low votes, saving months of wasted dev time</li>
            <li className={styles.li}>Users felt heard, turning early adopters into evangelists</li>
            <li className={styles.li}>Buffer reached $1M ARR within 12 months</li>
          </ul>
          <p className={styles.p}>
            Key takeaway: <strong>Buffer didn&apos;t guess. They asked. And users told them exactly what to build.</strong>
          </p>
        </section>

        <section>
          <h2 className={styles.h2}>Case Study: How Dropbox Validated Demand Before Writing Code</h2>
          <p className={styles.p}>
            Drew Houston faced a problem: building Dropbox would take months. Syncing files across devices was technically hard.
            What if he built it and nobody wanted it?
          </p>
          <p className={styles.p}>
            Instead of building first, Drew made a 3-minute explainer video showing how Dropbox would work.
            He posted it on Hacker News. Overnight, the beta waitlist went from 5,000 to 75,000 people.
          </p>
          <p className={styles.p}>
            That video was an MVP. It didn&apos;t sync files—it validated demand. Once users signed up, Dropbox sent surveys
            asking which features mattered most. File sharing? Version history? Mobile sync? Users voted with their feedback.
          </p>
          <p className={styles.p}>
            Dropbox built the top-voted features first. Everything else waited. The result? Product-market fit on launch day.
          </p>
          <p className={styles.p}>
            Lesson: <strong>Feature voting can start before your product even exists.</strong> Use it to validate your roadmap pre-launch.
          </p>
        </section>

        <section>
          <h2 className={styles.h2}>How to Integrate Feature Voting into Your Lean Startup Process</h2>

          <h3 className={styles.h3}>Phase 1: Pre-Launch Validation</h3>
          <p className={styles.p}>
            Before you build anything, create a landing page with a feature voting board. List potential features.
            Ask early signups: &quot;Which of these would you use?&quot; Let them vote. Build the MVP around the winners.
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>Set up a simple voting board (VoteFlow, Canny, or custom)</li>
            <li className={styles.li}>List 10-15 potential features</li>
            <li className={styles.li}>Drive traffic via Product Hunt, Twitter, Reddit</li>
            <li className={styles.li}>Analyze top votes—those become your MVP scope</li>
          </ul>

          <h3 className={styles.h3}>Phase 2: MVP Launch with Voting Built-In</h3>
          <p className={styles.p}>
            Ship your MVP with feature voting integrated from day one. In your onboarding or settings, add a
            &quot;Request Features&quot; tab. Users can submit ideas and vote on others.
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>For iOS/macOS apps: Integrate VoteFlow SDK (5 minutes)</li>
            <li className={styles.li}>For web apps: Embed a voting widget or dedicated page</li>
            <li className={styles.li}>Announce it: &quot;Your feedback shapes our roadmap&quot;</li>
          </ul>

          <h3 className={styles.h3}>Phase 3: Build-Measure-Learn Sprints</h3>
          <p className={styles.p}>
            Run 2-week sprints. At the start of each sprint, pick the top-voted feature. Build it. Ship it.
            Mark it as &quot;Completed&quot; in the voting board. Notify users who voted for it. Repeat.
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>Monday: Review voting board, pick top feature</li>
            <li className={styles.li}>Week 1-2: Build and test</li>
            <li className={styles.li}>Friday: Ship to production</li>
            <li className={styles.li}>Saturday: Update voting board status to &quot;Completed&quot;</li>
            <li className={styles.li}>Send push notification: &quot;Your requested feature is live!&quot;</li>
          </ul>

          <h3 className={styles.h3}>Phase 4: Close the Feedback Loop</h3>
          <p className={styles.p}>
            This is where most teams fail. Don&apos;t just collect votes—show users you listened.
            When you ship a feature, celebrate it. Tag users who requested it. Write a changelog. Make them feel heard.
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>In-app announcements: &quot;New: Dark Mode (requested by you!)&quot;</li>
            <li className={styles.li}>Email updates to voters</li>
            <li className={styles.li}>Public changelog showing features shipped</li>
            <li className={styles.li}>Social proof: &quot;We shipped 12 user-requested features this quarter&quot;</li>
          </ul>
        </section>

        <section>
          <h2 className={styles.h2}>Feature Voting Metrics: Innovation Accounting for Lean Startups</h2>
          <p className={styles.p}>
            Eric Ries talks about innovation accounting—tracking the right metrics to measure progress.
            Here&apos;s how feature voting gives you actionable metrics:
          </p>

          <h3 className={styles.h3}>1. Vote Velocity</h3>
          <p className={styles.p}>
            How fast are votes accumulating? If a feature gets 50 votes in 2 days, it&apos;s urgent.
            If it gets 5 votes in 3 months, it&apos;s not a priority. Track velocity to spot trends early.
          </p>

          <h3 className={styles.h3}>2. Engagement Rate</h3>
          <p className={styles.p}>
            What percentage of users vote or comment? If 40% of your users engage with the voting board,
            they&apos;re invested in your product. If it&apos;s 2%, you have a discoverability problem.
          </p>

          <h3 className={styles.h3}>3. Request Diversity</h3>
          <p className={styles.p}>
            Are all requests about one area (e.g., performance) or spread across features? Clustering reveals
            pain points. If 80% of requests are about bugs, you have a quality issue, not a feature gap.
          </p>

          <h3 className={styles.h3}>4. Time-to-Ship</h3>
          <p className={styles.p}>
            How long from top-voted feature to shipped feature? Lean Startup is about speed. If it takes 3 months,
            you&apos;re not iterating fast enough. Aim for 2-4 weeks max.
          </p>

          <h3 className={styles.h3}>5. Completion Rate Impact</h3>
          <p className={styles.p}>
            When you ship a top-voted feature, do retention and engagement improve? Measure before/after.
            If a feature with 200 votes doesn&apos;t move metrics, something&apos;s wrong with your voting audience.
          </p>
        </section>

        <section>
          <h2 className={styles.h2}>Common Mistakes: When Feature Voting Fails</h2>

          <h3 className={styles.h3}>Mistake 1: Building Every Top-Voted Feature</h3>
          <p className={styles.p}>
            Votes are data, not orders. Just because 1,000 users want a feature doesn&apos;t mean you should build it.
            Consider technical debt, strategic fit, and opportunity cost. Sometimes the answer is &quot;no.&quot;
          </p>

          <h3 className={styles.h3}>Mistake 2: Ignoring Low-Vote, High-Impact Features</h3>
          <p className={styles.p}>
            The inverse problem: a feature with 10 votes might unlock a new market or prevent churn in your best customers.
            Use votes as input, not gospel. Combine with qualitative feedback and business strategy.
          </p>

          <h3 className={styles.h3}>Mistake 3: No Transparency</h3>
          <p className={styles.p}>
            If users vote but never see progress, they&apos;ll stop voting. Update status religiously:
            &quot;Planned,&quot; &quot;In Progress,&quot; &quot;Completed.&quot; Show your work. Build trust.
          </p>

          <h3 className={styles.h3}>Mistake 4: Voting Without Context</h3>
          <p className={styles.p}>
            Users vote based on their narrow experience. They don&apos;t see the big picture. Your job is to connect dots.
            If 100 users request &quot;better performance&quot; across 10 different features, the real issue might be architecture.
          </p>

          <h3 className={styles.h3}>Mistake 5: Feature Voting as Busywork</h3>
          <p className={styles.p}>
            Don&apos;t add voting to seem user-centric. If you&apos;re not committed to acting on feedback, don&apos;t collect it.
            Nothing kills trust faster than ignored feedback.
          </p>
        </section>

        <section>
          <h2 className={styles.h2}>Pivot or Persevere: Using Votes to Make the Call</h2>
          <p className={styles.p}>
            The hardest decision in Lean Startup: when to pivot. Feature voting gives you a signal.
          </p>

          <h3 className={styles.h3}>Signs You Should Pivot (Based on Voting Data)</h3>
          <ul className={styles.ul}>
            <li className={styles.li}><strong>No clear winner:</strong> Votes are evenly spread across 20 features—no consensus means no product-market fit</li>
            <li className={styles.li}><strong>Votes contradict your vision:</strong> You&apos;re building an AI tool, but users vote for manual export features</li>
            <li className={styles.li}><strong>Low engagement:</strong> Fewer than 5% of users vote—they don&apos;t care enough to guide your roadmap</li>
            <li className={styles.li}><strong>Votes cluster around one use case:</strong> You built a general tool, but all votes are from one niche—time to niche down</li>
          </ul>

          <h3 className={styles.h3}>Signs You Should Persevere</h3>
          <ul className={styles.ul}>
            <li className={styles.li}><strong>Strong voting momentum:</strong> 30%+ of users vote regularly—they&apos;re invested</li>
            <li className={styles.li}><strong>Clear top 3 features:</strong> Consensus emerges—you know what to build</li>
            <li className={styles.li}><strong>Shipped features drive retention:</strong> When you build top-voted features, users stick around</li>
            <li className={styles.li}><strong>Votes align with your vision:</strong> Users want what you want to build—perfect fit</li>
          </ul>
        </section>

        <section>
          <h2 className={styles.h2}>Real Talk: When Your Gut Feeling Still Matters</h2>
          <p className={styles.p}>
            Data-driven doesn&apos;t mean gut-blind. Some of the best product decisions ignore the crowd.
          </p>
          <p className={styles.p}>
            Steve Jobs famously said, &quot;People don&apos;t know what they want until you show it to them.&quot;
            If Apple had used feature voting, we&apos;d never have gotten the iPhone (users wanted better Blackberries).
          </p>
          <p className={styles.p}>
            So when do you override the votes?
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}><strong>Strategic bets:</strong> You see a market shift users don&apos;t—bet on your vision</li>
            <li className={styles.li}><strong>Technical foundation:</strong> Users want features, but you need to fix debt first</li>
            <li className={styles.li}><strong>Differentiation:</strong> Votes might lead to commoditization—sometimes unique beats popular</li>
            <li className={styles.li}><strong>Long-term vs. short-term:</strong> Users vote for quick wins, but you need to build for scale</li>
          </ul>
          <p className={styles.p}>
            The balance: Use voting to validate demand, but reserve 20-30% of your roadmap for strategic bets.
            Let users guide you, but don&apos;t let them steer.
          </p>
        </section>

        <section>
          <h2 className={styles.h2}>Getting Started: Add Feature Voting to Your Startup Today</h2>

          <h3 className={styles.h3}>For iOS/macOS Apps</h3>
          <p className={styles.p}>
            Integrate VoteFlow SDK in under 5 minutes. Your users can submit, vote, and comment—all native, no web views.
          </p>
          <pre className={styles.code}>
            <code>{`import SwiftUI
import VoteFlow

struct SettingsView: View {
    var body: some View {
        NavigationLink("Feature Requests") {
            FeatureFlowView(appId: "your-app-id")
        }
    }
}`}</code>
          </pre>

          <h3 className={styles.h3}>For Web Apps</h3>
          <p className={styles.p}>
            Use tools like Canny, Feature Upvote, or build your own with Supabase + Next.js.
            Add a dedicated /feedback page or embed a widget in your dashboard.
          </p>

          <h3 className={styles.h3}>For Pre-Launch Products</h3>
          <p className={styles.p}>
            Create a landing page with a voting board. Use it to validate your MVP scope before you write code.
            Tools: Typeform + Airtable, or a simple Notion page with reaction voting.
          </p>
        </section>

        <section>
          <h2 className={styles.h2}>Conclusion: Lean Startup Meets Modern Product Development</h2>
          <p className={styles.p}>
            Eric Ries gave us the framework. Feature voting gives us the tools to execute it at speed.
          </p>
          <p className={styles.p}>
            The Build-Measure-Learn loop doesn&apos;t have to take months. With feature voting, you can:
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>Build what users actually want (validated learning)</li>
            <li className={styles.li}>Measure demand in real-time (innovation accounting)</li>
            <li className={styles.li}>Learn faster than your competition (speed advantage)</li>
            <li className={styles.li}>Pivot or persevere with confidence (data-driven decisions)</li>
          </ul>
          <p className={styles.p}>
            The startups that win aren&apos;t the ones with the best first idea. They&apos;re the ones that learn fastest.
            Feature voting is your shortcut to learning. Use it.
          </p>
          <p className={styles.p}>
            Ready to let your users guide your roadmap? Try{" "}
            <a href="https://github.com/BNE003/VoteFlow" className="link link-primary">
              VoteFlow
            </a>{" "}
            —built for founders who ship fast and listen faster.
          </p>
        </section>
      </>
    ),
  },
  {
    slug: "how-to-collect-user-feedback-ios-apps",
    title: "How to Collect User Feedback in iOS Apps (2025 Guide)",
    description:
      "Complete guide to collecting user feedback in iOS apps. Learn the best methods, tools, and implementation strategies for feature requests, bug reports, and user insights.",
    categories: [
      categories.find((category) => category.slug === categorySlugs.tutorial),
    ],
    author: authors.find((author) => author.slug === authorSlugs.benedikt),
    publishedAt: "2025-10-07",
    image: {
      src: collectUserFeedbackImg,
      urlRelative: "/blog/collect-user-feedback-ios/header.png",
      alt: "iOS app user feedback collection guide",
    },
    content: (
      <>
        <section>
          <h2 className={styles.h2}>Why User Feedback Matters for iOS Apps</h2>
          <p className={styles.p}>
            Building a successful iOS app isn&apos;t just about writing great code—it&apos;s about understanding what your users actually need.
            According to a 2024 study by App Annie, apps that actively collect and implement user feedback see 3.2x higher retention rates
            compared to those that don&apos;t.
          </p>
          <p className={styles.p}>
            Whether you&apos;re building an indie app or working on a product for millions of users, feedback is your roadmap.
            It tells you which features to prioritize, which bugs are critical, and how users actually interact with your app.
          </p>
          <p className={styles.p}>
            In this comprehensive guide, we&apos;ll cover everything you need to know about collecting user feedback in iOS apps—from
            choosing the right methods to implementing feedback systems that users actually want to use.
          </p>
        </section>

        <section>
          <h2 className={styles.h2}>Types of User Feedback You Should Collect</h2>

          <h3 className={styles.h3}>1. Feature Requests</h3>
          <p className={styles.p}>
            Feature requests are goldmines for product development. They tell you exactly what users want next.
            The best feature request systems allow users to:
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>Submit new ideas with descriptions</li>
            <li className={styles.li}>Vote on existing requests (democratizing your roadmap)</li>
            <li className={styles.li}>Comment and discuss with other users</li>
            <li className={styles.li}>See status updates (planned, in progress, completed)</li>
          </ul>

          <h3 className={styles.h3}>2. Bug Reports</h3>
          <p className={styles.p}>
            Users are your best QA team. Make it easy for them to report bugs with:
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>Screenshot or screen recording capture</li>
            <li className={styles.li}>Device info (iOS version, model, app version)</li>
            <li className={styles.li}>Steps to reproduce</li>
            <li className={styles.li}>Severity classification</li>
          </ul>

          <h3 className={styles.h3}>3. General Feedback & Ratings</h3>
          <p className={styles.p}>
            Sometimes users just want to share thoughts. Enable:
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>In-app rating prompts (at the right moment)</li>
            <li className={styles.li}>Open-ended feedback forms</li>
            <li className={styles.li}>NPS (Net Promoter Score) surveys</li>
            <li className={styles.li}>Quick emoji reactions</li>
          </ul>
        </section>

        <section>
          <h2 className={styles.h2}>Best Methods to Collect Feedback in iOS Apps</h2>

          <h3 className={styles.h3}>Method 1: In-App Feedback Forms</h3>
          <p className={styles.p}>
            The most direct approach. Add a feedback tab or button in your settings screen.
          </p>
          <p className={styles.p}>
            <strong>Pros:</strong> Full control over UI/UX, no third-party dependencies, user stays in-app
          </p>
          <p className={styles.p}>
            <strong>Cons:</strong> Requires backend infrastructure, more development time
          </p>

          <h3 className={styles.h3}>Method 2: Feature Voting Systems</h3>
          <p className={styles.p}>
            Let users submit and vote on feature requests. This democratizes your product roadmap and shows users you&apos;re listening.
          </p>
          <p className={styles.p}>
            Tools like VoteFlow provide ready-to-use SwiftUI components that integrate in minutes. Users can:
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>Browse all feature requests sorted by votes</li>
            <li className={styles.li}>Upvote features they want</li>
            <li className={styles.li}>Add comments and discussions</li>
            <li className={styles.li}>See which features are planned or in progress</li>
          </ul>

          <h3 className={styles.h3}>Method 3: Email Integration</h3>
          <p className={styles.p}>
            Simple but effective—add a &quot;Contact Support&quot; button that opens Mail.app with pre-filled device info.
          </p>
          <pre className={styles.code}>
            <code>{`import MessageUI

let email = "feedback@yourapp.com"
let subject = "Feedback - MyApp v\\(appVersion)"
let body = """
iOS Version: \\(UIDevice.current.systemVersion)
Device: \\(UIDevice.current.model)
App Version: \\(appVersion)

---
Your feedback here:
"""

if MFMailComposeViewController.canSendMail() {
    let mail = MFMailComposeViewController()
    mail.setToRecipients([email])
    mail.setSubject(subject)
    mail.setMessageBody(body, isHTML: false)
    present(mail, animated: true)
}`}</code>
          </pre>

          <h3 className={styles.h3}>Method 4: App Store Reviews (with Smart Prompts)</h3>
          <p className={styles.p}>
            Use <span className={styles.codeInline}>StoreKit</span> to prompt for reviews at the right moment:
          </p>
          <pre className={styles.code}>
            <code>{`import StoreKit

// Prompt after positive actions
if userCompletedTask && !hasPromptedRecently {
    if let scene = UIApplication.shared.connectedScenes.first as? UIWindowScene {
        SKStoreReviewController.requestReview(in: scene)
    }
}`}</code>
          </pre>
          <p className={styles.p}>
            <strong>Pro tip:</strong> Only prompt after positive experiences (task completion, milestone reached), never on first launch.
          </p>

          <h3 className={styles.h3}>Method 5: Analytics + Session Recordings</h3>
          <p className={styles.p}>
            Sometimes feedback is implicit. Use tools like:
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>Firebase Analytics for event tracking</li>
            <li className={styles.li}>Mixpanel for user behavior analysis</li>
            <li className={styles.li}>Hotjar/UXCam for session replays</li>
          </ul>
        </section>

        <section>
          <h2 className={styles.h2}>Implementation Guide: Adding Feature Voting to Your iOS App</h2>
          <p className={styles.p}>
            Let&apos;s walk through adding a complete feature voting system using VoteFlow—the fastest way to
            get user feedback flowing.
          </p>

          <h3 className={styles.h3}>Step 1: Install VoteFlow SDK</h3>
          <p className={styles.p}>
            Add the package in Xcode: <span className={styles.codeInline}>File → Add Package Dependencies</span>
          </p>
          <pre className={styles.code}>
            <code>https://github.com/BNE003/VoteFlow</code>
          </pre>

          <h3 className={styles.h3}>Step 2: Get Your App ID</h3>
          <p className={styles.p}>
            Create a free account at the FeatureFlow dashboard and create your app. You&apos;ll get an App ID like{" "}
            <span className={styles.codeInline}>my-app-123</span>.
          </p>

          <h3 className={styles.h3}>Step 3: Add to Your App</h3>
          <p className={styles.p}>
            Drop the pre-built view into your settings or main navigation:
          </p>
          <pre className={styles.code}>
            <code>{`import SwiftUI
import VoteFlow

struct SettingsView: View {
    var body: some View {
        NavigationStack {
            List {
                Section("App") {
                    // Your settings...
                }

                Section("Feedback") {
                    NavigationLink {
                        FeatureFlowView(appId: "your-app-id")
                    } label: {
                        Label("Feature Requests", systemImage: "lightbulb")
                    }
                }
            }
            .navigationTitle("Settings")
        }
    }
}`}</code>
          </pre>

          <p className={styles.p}>
            That&apos;s it! Users can now submit features, vote, and comment—all with zero backend work on your end.
          </p>
        </section>

        <section>
          <h2 className={styles.h2}>Best Practices for User Feedback Collection</h2>

          <h3 className={styles.h3}>1. Make It Easy to Access</h3>
          <p className={styles.p}>
            Don&apos;t bury feedback options 5 levels deep in settings. Add prominent CTAs:
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>Tab bar item (for apps with &lt;5 tabs)</li>
            <li className={styles.li}>Settings section with clear label</li>
            <li className={styles.li}>Floating action button on main screen</li>
            <li className={styles.li}>Contextual prompts (&quot;Enjoying this feature? Request more!&quot;)</li>
          </ul>

          <h3 className={styles.h3}>2. Show You&apos;re Listening</h3>
          <p className={styles.p}>
            The fastest way to kill user engagement? Never respond to feedback. Instead:
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>Update feature request status (planned → in progress → completed)</li>
            <li className={styles.li}>Send push notifications when requested features ship</li>
            <li className={styles.li}>Add a changelog section in-app</li>
            <li className={styles.li}>Thank users who submit valuable feedback</li>
          </ul>

          <h3 className={styles.h3}>3. Don&apos;t Over-Prompt</h3>
          <p className={styles.p}>
            Respect your users&apos; time. Rules of thumb:
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>Never prompt on first launch</li>
            <li className={styles.li}>Wait at least 3-5 app sessions before asking for ratings</li>
            <li className={styles.li}>Limit prompts to once per version</li>
            <li className={styles.li}>Only prompt after positive actions</li>
          </ul>

          <h3 className={styles.h3}>4. Close the Loop</h3>
          <p className={styles.p}>
            When you ship a requested feature, let the user know! Use:
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>Push notifications: &quot;Your requested feature &apos;Dark Mode&apos; is now live!&quot;</li>
            <li className={styles.li}>In-app announcements or modals</li>
            <li className={styles.li}>Release notes that mention user requests</li>
          </ul>
        </section>

        <section>
          <h2 className={styles.h2}>Common Mistakes to Avoid</h2>

          <h3 className={styles.h3}>❌ Mistake 1: Collecting Feedback You Can&apos;t Act On</h3>
          <p className={styles.p}>
            Don&apos;t ask &quot;What feature would you pay $1000 for?&quot; if you&apos;re a solo dev with limited time.
            Be realistic about what you can deliver.
          </p>

          <h3 className={styles.h3}>❌ Mistake 2: No Prioritization System</h3>
          <p className={styles.p}>
            You&apos;ll get hundreds of requests. Use voting systems to surface the most wanted features.
            Don&apos;t just build the latest request—build what most users want.
          </p>

          <h3 className={styles.h3}>❌ Mistake 3: Feedback Goes to a Black Hole</h3>
          <p className={styles.p}>
            If feedback emails go to an inbox you never check, or a database you never query, you&apos;re wasting users&apos; time.
            Set up proper workflows (e.g., feedback → Linear/GitHub Issues → roadmap).
          </p>

          <h3 className={styles.h3}>❌ Mistake 4: Only Collecting Negative Feedback</h3>
          <p className={styles.p}>
            Bugs and complaints are important, but don&apos;t forget to ask what users <em>love</em>.
            Understanding your strengths is as valuable as fixing weaknesses.
          </p>
        </section>

        <section>
          <h2 className={styles.h2}>Real-World Example: How Indie Apps Use Feedback</h2>
          <p className={styles.p}>
            Let&apos;s look at how successful indie iOS apps handle feedback:
          </p>

          <h3 className={styles.h3}>Case Study: Things 3</h3>
          <p className={styles.p}>
            Cultured Code&apos;s Things 3 uses email for direct feedback but also has a public forum where users discuss features.
            They famously take years to ship requested features—but when they do, they&apos;re polished.
            Key takeaway: Quality over speed, but always communicate status.
          </p>

          <h3 className={styles.h3}>Case Study: Apollo for Reddit</h3>
          <p className={styles.p}>
            Christian Selig built Apollo with a dedicated subreddit for feedback. He actively responded to users,
            implemented top-voted features, and announced updates in the community. Result? One of the most beloved iOS apps.
            Key takeaway: Meet users where they are (Reddit, Discord, etc.).
          </p>
        </section>

        <section>
          <h2 className={styles.h2}>Tools & Resources</h2>

          <h3 className={styles.h3}>Feature Voting & Feedback Platforms</h3>
          <ul className={styles.ul}>
            <li className={styles.li}><strong>VoteFlow</strong> - Native iOS SDK for feature requests with voting (quickest to integrate)</li>
            <li className={styles.li}><strong>Canny</strong> - Web-based feature request board (requires webview in iOS)</li>
            <li className={styles.li}><strong>UserVoice</strong> - Enterprise feedback platform</li>
          </ul>

          <h3 className={styles.h3}>Bug Reporting Tools</h3>
          <ul className={styles.ul}>
            <li className={styles.li}><strong>Instabug</strong> - Shake-to-report bugs with screenshots</li>
            <li className={styles.li}><strong>Sentry</strong> - Automatic crash reporting with context</li>
            <li className={styles.li}><strong>TestFlight</strong> - Built-in feedback for beta testers</li>
          </ul>

          <h3 className={styles.h3}>Analytics & Session Recording</h3>
          <ul className={styles.ul}>
            <li className={styles.li}><strong>Firebase Analytics</strong> - Free, comprehensive event tracking</li>
            <li className={styles.li}><strong>Mixpanel</strong> - Advanced cohort analysis</li>
            <li className={styles.li}><strong>UXCam</strong> - Session replays to see user struggles</li>
          </ul>
        </section>

        <section>
          <h2 className={styles.h2}>Next Steps: Building a Feedback-Driven App</h2>
          <p className={styles.p}>
            Now that you understand the landscape, here&apos;s your action plan:
          </p>

          <h3 className={styles.h3}>Week 1: Set Up Basic Feedback Collection</h3>
          <ul className={styles.ul}>
            <li className={styles.li}>Add a &quot;Feedback&quot; section in your settings</li>
            <li className={styles.li}>Integrate VoteFlow or set up email feedback</li>
            <li className={styles.li}>Add basic analytics (Firebase)</li>
          </ul>

          <h3 className={styles.h3}>Week 2: Optimize Feedback Flow</h3>
          <ul className={styles.ul}>
            <li className={styles.li}>Add contextual prompts in key areas</li>
            <li className={styles.li}>Set up App Store review prompts (with smart timing)</li>
            <li className={styles.li}>Create a feedback workflow (Notion/Linear/GitHub)</li>
          </ul>

          <h3 className={styles.h3}>Week 3: Close the Loop</h3>
          <ul className={styles.ul}>
            <li className={styles.li}>Implement one top-voted feature</li>
            <li className={styles.li}>Send update to users who requested it</li>
            <li className={styles.li}>Add in-app changelog</li>
          </ul>

          <h3 className={styles.h3}>Ongoing: Build in Public</h3>
          <ul className={styles.ul}>
            <li className={styles.li}>Share roadmap updates on Twitter/LinkedIn</li>
            <li className={styles.li}>Write blog posts about features users inspired</li>
            <li className={styles.li}>Celebrate user contributions in release notes</li>
          </ul>
        </section>

        <section>
          <h2 className={styles.h2}>Conclusion</h2>
          <p className={styles.p}>
            Collecting user feedback isn&apos;t just a nice-to-have—it&apos;s essential for building apps people love.
            The best apps don&apos;t just listen to users; they build systems that make feedback effortless to give and act upon.
          </p>
          <p className={styles.p}>
            Start small: Add a single feedback mechanism today. Whether it&apos;s an email button, a feature voting system,
            or a simple in-app form—the important thing is to start listening. Your users have the answers to your product questions.
            You just need to ask.
          </p>
          <p className={styles.p}>
            Want to add feature voting to your iOS app in under 5 minutes? Try{" "}
            <a href="https://github.com/BNE003/VoteFlow" className="link link-primary">
              VoteFlow
            </a>{" "}
            —the fastest way to let your users guide your roadmap.
          </p>
        </section>
      </>
    ),
  },
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
