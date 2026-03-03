import React from "react";
import { motion } from "motion/react";

export default function EducationCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.6,
      }}
      className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-[#0a0a1f]/80 backdrop-blur-md shadow-md border border-white/20"
      role="alert"
      aria-live="polite"
    >
      <div className="p-4">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 0.3,
          }}
          className="relative mb-4 flex items-center"
        >
          <div className="relative mr-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-r from-[#00f3ff] to-[#bd00ff] text-xl font-bold text-white">
              E
            </div>
          </div>

          <span className="text-lg font-semibold text-white">Education</span>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "calc(100% - 20px)" }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="absolute left-[19px] top-0 mt-3 w-1 bg-gradient-to-b from-[#00f3ff] to-[#bd00ff]"
          />

          {/* Animated Content Wrapper */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            whileInView={{ opacity: 1, height: "auto" }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.8,
              type: "tween",
            }}
            style={{ overflow: "hidden" }}
          >
            {/* Animated Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.6,
              }}
              className="mb-4 pl-12 text-gray-300"
            >
              <p className="text-white font-medium">
                Bachelor of Engineering – Information Technology
              </p>
              <p className="text-gray-400 mt-1">
                University of Mumbai
              </p>
              <p className="text-gray-400">
                Shree L.R. Tiwari College Of Engineering
              </p>
              <p className="text-gray-500 text-sm mt-2">
                2023 – 2027 | Mumbai, India
              </p>
            </motion.div>

            {/* Status Notification */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.6,
              }}
              className="ml-12 rounded-md p-3 bg-gradient-to-r from-[#00f3ff]/10 to-[#bd00ff]/10 border border-[#00f3ff]/20"
            >
              <div className="flex items-start">
                <p className="text-sm text-gray-300">
                  Currently pursuing 3rd year in IT Engineering
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
