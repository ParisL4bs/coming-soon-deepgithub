import React from "react";
import { motion } from "framer-motion";

export const SonarPing = () => (
  <div className="fixed bottom-6 left-6 z-50">
    <motion.div
      className="relative flex items-center justify-center"
      initial={{ scale: 0.8, opacity: 0.7 }}
      animate={{
        scale: [0.8, 1.2, 0.8],
        opacity: [0.7, 0.2, 0.7],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <span className="absolute w-8 h-8 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 opacity-30 blur"></span>
      <span className="w-3 h-3 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 shadow-lg"></span>
    </motion.div>
  </div>
);