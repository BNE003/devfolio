import Link from "next/link";
import Image from "next/image";
import config from "@/config";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-base-100 to-base-200">
      <div className="max-w-7xl mx-auto px-8 py-12 lg:py-20">
        <div className="flex flex-col items-center text-center gap-8 lg:gap-12">
          {/* Badge */}
          <div className="badge badge-lg badge-primary badge-outline">
            🚀 Feature Request Management for iOS Apps
          </div>

          {/* Headline */}
          <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight max-w-4xl">
            Collect & Prioritize
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}Feature Requests{" "}
            </span>
            from Your Users
          </h1>

          {/* Subheadline */}
          <p className="text-lg lg:text-xl text-base-content/70 leading-relaxed max-w-2xl">
            Integrate FeatureFlow into your iOS app in minutes. Let users vote on features,
            leave feedback, and see what's being built — all in one beautiful interface.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/dashboard" className="btn btn-primary btn-lg">
              Get Started Free
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link href="#features" className="btn btn-outline btn-lg">
              Learn More
            </Link>
          </div>

          {/* Screenshots with Code Snippet Overlay */}
          <div className="mt-16 w-full max-w-6xl relative">
            <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
              {/* Dashboard Screenshot */}
              <div className="relative flex-1 max-w-3xl">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl"></div>
                <div className="relative rounded-2xl shadow-2xl border border-base-content/10 overflow-hidden">
                  <Image
                    src="/dashboard.png"
                    alt="FeatureFlow Dashboard"
                    width={1200}
                    height={675}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>

              {/* Phone Screenshot */}
              <div className="relative flex-shrink-0 -ml-0 lg:-ml-20 z-10">
                <div className="relative">
                  <Image
                    src="/phone.png"
                    alt="FeatureFlow Mobile App"
                    width={400}
                    height={800}
                    className="w-64 lg:w-80 h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Code Snippet Overlay */}
            <div className="absolute -top-8 left-4 lg:left-8 z-10">
              <div className="mockup-code bg-neutral text-neutral-content shadow-2xl text-left text-xs lg:text-sm">
                <pre data-prefix="1"><code>import FeatureFlow</code></pre>
                <pre data-prefix="2"><code></code></pre>
                <pre data-prefix="3"><code className="text-success">// Present the feature list with just one line of code.</code></pre>
                <pre data-prefix="4"><code>FeatureFlowView(appId: "your_app_id")</code></pre>
                <pre data-prefix="5"><code className="text-warning">// Let the magic happen ✨</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
