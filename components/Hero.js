import Link from "next/link";
import Image from "next/image";
import config from "@/config";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-base-100 to-base-200">
      <div className="max-w-7xl mx-auto px-8 py-12 lg:py-20">
        <div className="flex flex-col items-center text-center gap-8 lg:gap-12">
          {/* Badge */}
          <div className="badge badge-md lg:badge-lg badge-primary badge-outline px-3 lg:px-4">
            <span className="text-xs lg:text-base">🚀 Feature Request Management for iOS Apps</span>
          </div>

          {/* Headline */}
          <h1 className="font-extrabold text-3xl lg:text-6xl tracking-tight max-w-4xl">
            Collect & Prioritize
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}Feature Requests{" "}
            </span>
            from Your Users
          </h1>

          {/* Subheadline */}
          <p className="text-lg lg:text-xl text-base-content/70 leading-relaxed max-w-2xl">
          Capture what your users really want — from feature ideas to detailed feedback — all in one simple place.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-0 lg:mt-4">
            <Link
              href="/dashboard"
              className="btn btn-primary btn-md lg:btn-lg"
              data-fast-goal="get_started_clicked"
              data-fast-goal-source="hero"
            >
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
            <Link
              href="#features"
              className="btn btn-outline btn-lg hidden lg:inline-flex"
              data-fast-goal="learn_more_clicked"
            >
              Learn More
            </Link>
          </div>

          {/* Hero Screenshot */}
          <div className="mt-8 lg:mt-16 w-full max-w-6xl relative">
            <div className="relative">
              <Image
                src="/hero.png"
                alt="FeatureFlow Dashboard and Mobile App"
                width={1400}
                height={788}
                className="w-full h-auto scale-125 lg:scale-100"
                priority
              />
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
