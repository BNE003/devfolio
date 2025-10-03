import Link from "next/link";

const CTAFeatureFlow = () => {
  return (
    <section className="bg-gradient-to-br from-primary to-secondary py-24">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-primary-content mb-6">
          Ready to Build What Users Want?
        </h2>
        <p className="text-xl text-primary-content/90 mb-8 max-w-2xl mx-auto">
          Join developers who are building better products by listening to their
          users. Start collecting feature requests today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/dashboard"
            className="btn btn-lg bg-base-100 text-base-content hover:bg-base-200 border-none"
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
            href="/signin"
            className="btn btn-lg btn-outline text-primary-content border-primary-content hover:bg-primary-content hover:text-primary"
          >
            View Demo
          </Link>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-primary-content/80">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            <span>5 min setup</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAFeatureFlow;
