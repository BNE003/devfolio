"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";

const features = [
  {
    title: "No backend needed",
    description:
      "SDK connects directly to our database. Zero server setup, zero maintenance. Just plug and play.",
    styles: "bg-neutral text-neutral-content",
    demo: (
      <div className="overflow-hidden h-full flex items-center justify-center px-6">
        <div className="flex items-center gap-8 w-full max-w-md">
          {/* iOS App Icon */}
          <div className="flex flex-col items-center gap-3 opacity-100 group-hover:scale-110 transition-all duration-300">
            <div className="w-16 h-16 bg-neutral-content/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-neutral-content/30">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                <path d="M12 18h.01"/>
              </svg>
            </div>
            <p className="text-sm font-medium opacity-90">Your App</p>
          </div>

          {/* Arrow with animation */}
          <div className="flex-1 flex flex-col items-center gap-2">
            <div className="w-full h-[2px] bg-neutral-content/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-neutral-content/80 animate-[slideRight_1.5s_ease-in-out_infinite]"></div>
            </div>
            <p className="text-xs opacity-70 whitespace-nowrap">SDK Request</p>
          </div>

          {/* Database Icon */}
          <div className="flex flex-col items-center gap-3 opacity-100 group-hover:scale-110 transition-all duration-300">
            <div className="w-16 h-16 bg-neutral-content/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-neutral-content/30 relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3"/>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>
              </svg>
              {/* Pulse animation */}
              <div className="absolute inset-0 rounded-2xl bg-neutral-content/20 animate-ping opacity-0 group-hover:opacity-100"></div>
            </div>
            <p className="text-sm font-medium opacity-90">Our DB</p>
          </div>
        </div>

        <style jsx>{`
          @keyframes slideRight {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
        `}</style>
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
    title: "Manage from web dashboard",
    description: "Track all apps in one place. Update status, analyze feedback, and prioritize your roadmap.",
    styles: "bg-neutral text-neutral-content",
    demo: (
      <div className="text-neutral-content px-6 py-4 space-y-3">
        <div className="bg-neutral-content/10 rounded-box p-4 border border-neutral-content/20">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-content font-bold">
                M
              </div>
              <div>
                <p className="font-semibold">MyApp iOS</p>
                <p className="text-sm opacity-70">3 apps • 247 requests</p>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-50">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </div>
          <div className="grid grid-cols-4 gap-2 text-center text-sm">
            <div>
              <p className="text-2xl font-bold">23</p>
              <p className="opacity-60">Open</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-400">12</p>
              <p className="opacity-60">Planned</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-orange-400">8</p>
              <p className="opacity-60">Progress</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-400">31</p>
              <p className="opacity-60">Done</p>
            </div>
          </div>
        </div>
        <div className="bg-neutral-content/10 rounded-box p-4 border border-neutral-content/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-neutral-content/20 flex items-center justify-center text-neutral-content font-bold">
                N
              </div>
              <div>
                <p className="font-semibold">Notes macOS</p>
                <p className="text-sm opacity-70">89 requests</p>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-50">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </div>
        </div>
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
                className={`${feature.styles} rounded-3xl flex flex-col gap-6 w-full h-[22rem] lg:h-[25rem] pt-6 ${feature.overflowVisible ? 'overflow-visible' : 'overflow-hidden'} group`}
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