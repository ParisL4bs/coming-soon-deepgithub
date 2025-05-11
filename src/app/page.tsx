"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { motion } from "framer-motion";
import { SonarPing } from "@/components/ui/SonarPing";

function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-background relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 relative flex flex-col items-center">
        {/* Animated Gradient Banner */}
        <div className="mb-8 w-full flex justify-center">
          <motion.div
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: "100% 50%" }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
            className="relative rounded-full"
            style={{
              background: "linear-gradient(90deg, #18CCFC, #6344F5, #AE48FF, #18CCFC, #00FF99)",
              backgroundSize: "300% 300%",
              padding: "1.5px"
            }}
          >
            <div className="bg-[#0a0a23] rounded-full px-4 py-1 flex items-center justify-center">
              <span className="text-white font-medium text-base">
                Supercharge your documentation.
              </span>
            </div>
          </motion.div>
        </div>
        <h1 className="relative z-10 text-lg md:text-7xl leading-[1.3] bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 via-70% to-muted-foreground text-center font-bold">
          Coming soon...
        </h1>
        <p></p>
        <p className="text-muted-foreground max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            We&apos;re building a seamless experience for exploring and connecting your code and docs with the community. 
            Welcome to the deep. 
        </p>
      </div>
      <BackgroundBeams />
      <SonarPing />
    </div>
  );
}

export default BackgroundBeamsDemo;
