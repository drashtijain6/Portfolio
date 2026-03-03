import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { User, Code, Briefcase } from "lucide-react";

export default function Modal({ modalSize = "lg", isOpen = false, onClose }: { modalSize?: "sm" | "lg"; isOpen?: boolean; onClose?: () => void }) {
  const [internalIsOpen, setInternalIsOpen] = useState(isOpen);
  
  const cn = (...classes: (string | undefined | null | false)[]) => {
    return classes.filter(Boolean).join(' ');
  };

  const handleClose = () => {
    setInternalIsOpen(false);
    onClose?.();
  };

  useEffect(() => {
    setInternalIsOpen(isOpen);
  }, [isOpen]);
  
  return (
    <AnimatePresence>
      {internalIsOpen && (
        <div
          onClick={handleClose}
          className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center overflow-y-scroll bg-slate-900/20 p-8 backdrop-blur"
        >
          <motion.div
            initial={{ scale: 0, rotate: "180deg" }}
            animate={{
              scale: 1,
              rotate: "0deg",
              transition: {
                type: "spring",
                bounce: 0.25,
              },
            }}
            exit={{ scale: 0, rotate: "180deg" }}
            onClick={(e) => e.stopPropagation()}
            className={cn(
              "relative w-full max-w-lg cursor-default overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 p-6 text-white shadow-2xl",
              modalSize === "sm" && "max-w-sm"
            )}
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-center gap-3">
                <User className="text-white" size={36} />
                <h3 className={cn("text-center text-3xl font-bold", modalSize === "sm" && "text-2xl")}>
                  About me!
                </h3>
              </div>
              <div className="space-y-3 text-center">
                <p className="leading-relaxed">
                  IT Engineering student crafting <span className="font-bold text-white">clean</span>, <span className="font-bold text-white">scalable</span>, and <span className="font-bold text-white">user-focused</span> digital solutions.
                </p>
                <p className="leading-relaxed">
                  I build <span className="font-bold text-white">real-world projects</span> — from <span className="font-bold text-white">smart farming systems</span> to <span className="font-bold text-white">full-stack applications</span> — combining <span className="font-bold text-white">strong programming fundamentals</span> with <span className="font-bold text-white">practical execution</span>.
                </p>
                <p className="leading-relaxed">
                  Driven by <span className="font-bold text-white">curiosity</span>, <span className="font-bold text-white">problem-solving</span>, and a constant desire to <span className="font-bold text-white">improve</span>, I aim to create technology that is <span className="font-bold text-white">efficient</span>, <span className="font-bold text-white">impactful</span>, and <span className="font-bold text-white">meaningful</span>.
                </p>
              </div>
              <div className="flex gap-2 pt-2">
                <button
                  onClick={handleClose}
                  className="w-full rounded bg-transparent py-2 font-semibold text-white transition-colors hover:bg-white/30"
                >
                  Close
                </button>
                <button
                  onClick={handleClose}
                  className="w-full rounded bg-white py-2 font-semibold text-indigo-600 transition-opacity hover:opacity-80"
                >
                  Explore More
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
