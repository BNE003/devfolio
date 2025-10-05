import React from "react";
import Image from "next/image";

const FeatureShowcase = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-400 via-green-400 to-teal-400 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-8">
        {/* First Section - Text and Screenshot */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 items-center mb-8">
          {/* Left Side - Text Content */}
          <div className="space-y-6 lg:w-2/5 flex-shrink-0 order-1">
            <h2 className="font-black text-4xl lg:text-6xl tracking-tight text-white">
              Capture User Feedback
            </h2>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-xl">
              Collect ideas from your users and customers - and let the most voted
              idea surface to the top.
            </p>
          </div>

          {/* Right Side - Screenshot */}
          <div className="relative w-[150%] ml-[2%] lg:w-auto lg:ml-0 lg:flex-1 lg:-mr-8 order-2">
            <div className="relative z-10">
              <Image
                src="/feature1.png?v=2"
                alt="Feature Requests App Screenshot"
                width={2000}
                height={1333}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>

        {/* Second Section - Video and Dashboard Text */}
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-8 mb-16 lg:mb-24">
          {/* Dashboard Text - Mobile first */}
          <div className="relative space-y-6 lg:w-3/5 lg:pl-24 lg:-mr-8 order-1 lg:order-2">
            <h2 className="font-black text-4xl lg:text-6xl tracking-tight text-white">
              Manage & Prioritize
            </h2>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-xl">
              Track feature requests in your dashboard. Label features, update their status, and prioritize based on user votes.
            </p>
          </div>

          {/* Video */}
          <div className="relative z-10 w-full lg:w-2/5 lg:ml-0 flex-shrink-0 order-2 lg:order-1">
            <video
              className="w-full h-auto rounded-lg border-4 border-white shadow-xl"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/Bildschirmaufnahme 2025-10-04 um 18.22.05.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Third Section - Setup Code Snippet */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6 lg:w-2/5 flex-shrink-0">
            <h2 className="font-black text-4xl lg:text-6xl tracking-tight text-white">
              Set Up in 2 Minutes
            </h2>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-xl">
              Add FeatureFlow to your iOS app with just a few lines of code
            </p>
          </div>

          {/* Right Side - Code Snippet */}
          <div className="relative w-full lg:w-auto lg:ml-0 flex-1 lg:-mr-8">
            <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-xl p-4 lg:p-6 text-left shadow-2xl border border-white/10">
              <div className="flex items-center gap-2 mb-3 lg:mb-4 pb-2 lg:pb-3 border-b border-white/10">
                <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-white/60 text-xs lg:text-sm">ContentView.swift</span>
              </div>
              <pre className="text-xs lg:text-base overflow-x-auto">
                <code className="text-emerald-300">
{`import SwiftUI
import FeatureFlow

struct ContentView: View {
    var body: some View {
        FeatureFlowView(appId: "your-app-id")
    }
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
