import React from "react";
import Image from "next/image";

const FeatureBig = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section - Text and Screenshot */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6 lg:w-2/5 flex-shrink-0 order-1">
            <h2 className="font-black text-4xl lg:text-6xl tracking-tight text-white">
              Interact with Your Users
            </h2>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-xl">
              Engage directly with your community through comments and discussions. Keep users informed about feature progress and gather valuable insights.
            </p>
          </div>

          {/* Right Side - Screenshot */}
          <div className="relative w-[140%] -ml-[10%] lg:w-auto lg:ml-0 lg:flex-1 lg:-mr-8 order-2">
            <div className="relative z-10">
              <Image
                src="/comments.2.png"
                alt="Comments and User Interaction Screenshot"
                width={2000}
                height={1333}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default FeatureBig;
