import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, Shield, Activity } from "lucide-react";

interface TerminalLine {
  type: 'system' | 'success' | 'error' | 'warning' | 'info' | 'welcome';
  text: string;
  delay: number;
}

const terminalLines: TerminalLine[] = [
  { type: 'system', text: 'System initializing...', delay: 0 },
  { type: 'success', text: 'React components loaded successfully', delay: 500 },
  { type: 'system', text: 'Establishing secure connection...', delay: 1000 },
  { type: 'info', text: 'IPSec Phase 1: IKE SA established', delay: 1500 },
  { type: 'info', text: 'IPSec Phase 2: IPsec SA established', delay: 2000 },
  { type: 'success', text: 'Tunnel established successfully', delay: 2500 },
  { type: 'welcome', text: 'Welcome to Drashti\'s Portfolio', delay: 3000 },
];

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [visibleLines, setVisibleLines] = useState<TerminalLine[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentLineIndex < terminalLines.length) {
      const timer = setTimeout(() => {
        setVisibleLines(prev => [...prev, terminalLines[currentLineIndex]]);
        setCurrentLineIndex(prev => prev + 1);
      }, terminalLines[currentLineIndex].delay);
      return () => clearTimeout(timer);
    } else if (currentLineIndex === terminalLines.length) {
      const timer = setTimeout(() => {
        setIsComplete(true);
        setTimeout(onComplete, 1500);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, onComplete]);

  const getLineClass = (type: TerminalLine['type']) => {
    switch (type) {
      case 'success': return 'text-green-400';
      case 'error': return 'text-red-400';
      case 'warning': return 'text-yellow-400';
      case 'info': return 'text-blue-400';
      case 'welcome': return 'text-cyan-400 font-bold text-xl';
      default: return 'text-gray-300';
    }
  };

  const getLinePrefix = (type: TerminalLine['type']) => {
    switch (type) {
      case 'success': return '[✓]';
      case 'error': return '[✗]';
      case 'warning': return '[⚠]';
      case 'info': return '[ℹ]';
      case 'welcome': return '»';
      default: return '[$]';
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black z-[100] flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl w-full mx-auto px-6">
        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          {/* Terminal Header */}
          <div className="bg-gray-900 border border-gray-700 rounded-t-lg px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Terminal className="w-4 h-4" />
              <span className="font-mono">portfolio@drashti:~$</span>
            </div>
            <div className="w-16"></div>
          </div>

          {/* Terminal Body */}
          <div className="bg-black border border-t-0 border-gray-700 rounded-b-lg p-6 font-mono text-sm min-h-[400px]">
            {/* Terminal Output */}
            <div className="space-y-2">
              {visibleLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`${getLineClass(line.type)}`}
                >
                  <span className="text-gray-500 mr-2">{getLinePrefix(line.type)}</span>
                  {line.text}
                </motion.div>
              ))}

              {/* Blinking Cursor */}
              {currentLineIndex < terminalLines.length && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-cyan-400"
                >
                  █
                </motion.span>
              )}
            </div>

            {/* Connection Status */}
            {isComplete && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-8 pt-6 border-t border-gray-800"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-5 h-5 text-green-400" />
                      <span className="text-green-400">Secure Connection</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Activity className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-400">System Active</span>
                    </div>
                  </div>
                  <div className="text-gray-400 text-xs">
                    Status: <span className="text-green-400">ONLINE</span>
                  </div>
                </div>

                <div className="text-center text-cyan-400 text-sm">
                  Loading portfolio interface...
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
