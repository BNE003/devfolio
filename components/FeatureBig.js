import React from "react";
import Image from "next/image";

const FeatureBig = () => {
  return (
    <section className="relative overflow-hidden bg-base-100 py-20 lg:py-32" style={{
      backgroundImage: `
        linear-gradient(to right, rgb(0 0 0 / 0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgb(0 0 0 / 0.05) 1px, transparent 1px)
      `,
      backgroundSize: '40px 40px'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section - Text and Screenshot */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6 lg:w-2/5 flex-shrink-0 order-1 text-center lg:text-left">
            <h2 className="font-black text-3xl sm:text-4xl lg:text-6xl tracking-tight text-base-content">
              Interact with Your Users
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-base-content/70 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Engage directly with your community through comments and discussions. Keep users informed about feature progress and gather valuable insights.
            </p>
          </div>

          {/* Right Side - Screenshot */}
          <div className="relative w-full max-w-md mx-auto lg:max-w-none lg:w-auto lg:ml-0 lg:flex-1 lg:-mr-8 order-2">
            <div className="relative z-10 p-8" style={{ filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))' }}>
              <Image
                src="/comments.2.png"
                alt="Comments and User Interaction Screenshot"
                width={2000}
                height={1333}
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default FeatureBig;
