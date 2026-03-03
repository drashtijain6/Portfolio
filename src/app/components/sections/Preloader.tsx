import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [lines, setLines] = useState<string[]>([]);
  
  const bootSequence = [
    "> Initializing kernel...",
    "> Loading modules: React, Vite, TailwindCSS...",
    "> Verifying security handshake (IPSec)...",
    "> Establishing secure connection...",
    "> Access granted.",
    "> Welcome, User."
  ];

  useEffect(() => {
    let delay = 0;
    bootSequence.forEach((line, index) => {
      setTimeout(() => {
        setLines(prev => [...prev, line]);
        if (index === bootSequence.length - 1) {
          setTimeout(onComplete, 800);
        }
      }, delay);
      delay += Math.random() * 300 + 100;
    });
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-background flex items-center justify-center font-mono text-sm md:text-base"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-lg p-6">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-primary mb-1"
          >
            <span className="text-emerald-400 mr-2">$</span>
            {line}
          </motion.div>
        ))}
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-2 h-4 bg-emerald-400 ml-1"
        />
      </div>
    </motion.div>
  );
};

export default Preloader;
