"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SparklesText } from "@/components/ui/sparkles-text";
import { ArrowRight, Check } from "lucide-react";

const CTAFeatureFlow = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-cyan-600/20 to-blue-700/20 animate-gradient-xy" />

      <div className="relative max-w-5xl mx-auto px-8 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <SparklesText
            className="text-4xl lg:text-5xl font-extrabold mb-6"
            sparklesCount={6}
            colors={{ first: "#0ea5e9", second: "#06b6d4" }}
          >
            Ready to Build What Users Want?
          </SparklesText>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-base-content/70 mb-10 max-w-2xl mx-auto"
        >
          Stop guessing what to build next. Let your users tell you. Start
          collecting, prioritizing, and shipping features that matter.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <Link
            href="/dashboard"
            className="group btn btn-lg btn-primary gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span>Get Started Free</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 text-base-content/60"
        >
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-green-500/30 flex items-center justify-center">
              <Check className="w-3 h-3 text-green-600" />
            </div>
            <span className="text-sm">7-day money-back guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-green-500/30 flex items-center justify-center">
              <Check className="w-3 h-3 text-green-600" />
            </div>
            <span className="text-sm">5 minute setup</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAFeatureFlow;
