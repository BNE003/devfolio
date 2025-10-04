/* eslint-disable @next/next/no-img-element */
import React from "react";

const features = [
  {
    title: "Collect feature requests",
    description:
      "Let your iOS and macOS users submit feature requests directly from your app.",
    styles: "bg-primary text-primary-content",
    demo: (
      <div className="overflow-hidden h-full flex items-stretch">
        <div className="w-full translate-x-12 bg-base-200 rounded-t-box h-full p-6">
          <p className="font-medium uppercase tracking-wide text-base-content/60 text-sm mb-3">
            Request a feature
          </p>
          <div
            className="relative textarea py-4 h-full mr-12 bg-base-200 group-hover:bg-base-100 group-hover:border-base-content/10 text-base-content"
            placeholder="Dark mode for the entire app"
          >
            <div className="absolute left-4 top-4 group-hover:hidden flex items-center ">
              <span>Dark M</span>
              <span className="w-[2px] h-6 bg-primary animate-pulse"></span>
            </div>
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              Dark mode support for the entire app
            </div>
            <div className="opacity-0 group-hover:opacity-100 duration-1000 flex items-center gap-0.5">
              <span>Would be great for night-time users</span>
              <span className="w-[2px] h-6 bg-primary animate-pulse"></span>
            </div>
            <button className="btn shadow-lg btn-primary absolute right-4 bottom-6 opacity-0 group-hover:opacity-100 duration-1000">
              Submit
            </button>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Prioritize with votes",
    description: "Users upvote features they want. See what matters most to your community.",
    styles: "md:col-span-2 bg-base-300 text-base-content",
    demo: (
      <div className="px-6 max-w-[600px] flex flex-col gap-4 overflow-hidden">
        {[
          {
            text: "Dark mode support",
            secondaryText: "Most wanted feature",
            votes: 127,
            transition: "group-hover:-mt-36 group-hover:md:-mt-28 duration-500",
          },
          {
            text: "Offline mode for saved items",
            secondaryText: "High priority",
            votes: 89,
          },
          {
            text: "Custom themes",
            secondaryText: "Nice to have",
            votes: 23,
          },
        ].map((feature, i) => (
          <div
            className={`p-4 bg-base-100 text-base-content rounded-box flex justify-between mb-2 gap-4 ${feature?.transition}`}
            key={i}
          >
            <div>
              <p className="font-semibold mb-1">{feature.text}</p>
              <p className="text-base-content-secondary">
                {feature.secondaryText}
              </p>
            </div>
            <button
              className={`px-4 py-2 rounded-box group text-center text-lg duration-150 border border-transparent bg-primary text-primary-content`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`w-5 h-5 ease-in-out duration-150 -translate-y-0.5 group-hover:translate-y-0`}
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
              {feature.votes}
            </button>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Track progress with status",
    description: "Update feature status from Open to Planned, In Progress, or Completed.",
    styles: "md:col-span-2 bg-base-100 text-base-content",
    demo: (
      <div className="flex left-0 w-full h-full pt-0 lg:pt-8 overflow-hidden -mt-4">
        <div className="-rotate-[8deg] flex min-w-max overflow-x-visible h-full lg:pt-4">
          {[
            {
              status: "Completed",
              statusColor: "bg-green-500 text-white",
              css: "-ml-1 rotate-[6deg] w-72 h-72 z-30 bg-base-200 text-base-content rounded-2xl group-hover:-ml-64 group-hover:opacity-0 group-hover:scale-75 transition-all duration-500 p-4",
            },
            {
              status: "In Progress",
              statusColor: "bg-orange-500 text-white",
              css: "rotate-[6deg] bg-base-200 text-base-content w-72 h-72 -mr-20 -ml-20 z-20 rounded-xl p-4",
            },
            {
              status: "Planned",
              statusColor: "bg-blue-500 text-white",
              css: "rotate-[6deg] bg-base-200 text-base-content z-10 w-72 h-72 rounded-xl p-4",
            },
            {
              status: "Open",
              statusColor: "bg-gray-400 text-white",
              css: "rotate-[6deg] bg-base-200 text-base-content w-72 h-72 -ml-20 rounded-xl p-4",
            },
            {
              status: "Completed",
              statusColor: "bg-green-500 text-white",
              css: "rotate-[6deg] bg-base-200 text-base-content w-72 h-72 -ml-10 -z-10 rounded-xl p-4 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300",
            },
          ].map((theme, i) => (
            <div className={theme.css} key={i}>
              <div className="font-medium uppercase tracking-wide text-base-content/60 text-sm mb-3">
                Feature Requests
              </div>
              <div className="space-y-2">
                <div className="p-4 bg-base-100 rounded-box">
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-semibold">Dark mode support</p>
                    <span className={`px-2 py-1 rounded-md text-xs font-medium ${theme.statusColor}`}>
                      {theme.status}
                    </span>
                  </div>
                  <p className="opacity-80 text-sm">Add dark theme to the app</p>
                  <div className="flex items-center gap-2 mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                    <span className="text-sm opacity-60">127 votes</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Engage your community",
    description: "Users can discuss features and share ideas through comments.",
    styles: "bg-neutral text-neutral-content",
    demo: (
      <div className="text-neutral-content px-6 space-y-4">
        {[
          {
            id: 1,
            text: "Would love to see dark mode in the next update!",
            userImg:
              "https://pbs.twimg.com/profile_images/1514863683574599681/9k7PqDTA_400x400.jpg",
            userName: "Sarah M.",
            createdAt: "2024-09-15T00:00:00Z",
          },
          {
            id: 2,
            text: "This would be perfect for using the app at night",
            userImg:
              "https://pbs.twimg.com/profile_images/1778434561556320256/knBJT1OR_400x400.jpg",
            userName: "Alex K.",
            createdAt: "2024-09-16T00:00:00Z",
            transition:
              "opacity-0 group-hover:opacity-100 duration-500 translate-x-1/4 group-hover:translate-x-0",
          },
        ]?.map((reply) => (
          <div
            key={reply.id}
            className={`px-6 py-4 bg-neutral-content text-neutral rounded-box ${reply?.transition}`}
          >
            <div className="mb-2 whitespace-pre-wrap">{reply.text}</div>
            <div className="text-neutral/80 flex items-center gap-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="avatar">
                  <div className="w-7 rounded-full">
                    <img src={reply.userImg} alt={reply.userName} />
                  </div>
                </div>
                <div className=""> {reply.userName} </div>
              </div>
              •
              <div>
                {new Date(reply.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
];
const FeaturesGrid = () => {
  return (
    <section className="flex justify-center items-center w-full bg-base-200/50 text-base-content py-20 lg:py-32">
      <div className="flex flex-col max-w-[82rem] gap-16 md:gap-20 px-4">
        <h2 className="max-w-3xl font-black text-4xl md:text-6xl tracking-[-0.01em]">
          Build features <br /> your users{" "}
          <span className="underline decoration-dashed underline-offset-8 decoration-base-300">
            actually need
          </span>
        </h2>
        <div className="flex flex-col w-full h-fit gap-4 lg:gap-10 text-text-default max-w-[82rem]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-10">
            {features.map((feature) => (
              <div
                key={feature.title}
                className={`${feature.styles} rounded-3xl flex flex-col gap-6 w-full h-[22rem] lg:h-[25rem] pt-6 overflow-hidden group`}
              >
                <div className="px-6 space-y-2">
                  <h3 className="font-bold text-xl lg:text-3xl tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="opacity-80">{feature.description}</p>
                </div>
                {feature.demo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;