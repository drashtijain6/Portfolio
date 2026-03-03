"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Briefcase, Calendar, MapPin } from "lucide-react";

type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  certificate?: string | null;
  offerLetter?: string | null;
};

const experiences: ExperienceItem[] = [
  {
    title: "Software Developer Engineer (Android/Native) Intern",
    company: "Compozent",
    location: "Remote",
    period: "Dec 2024 – Jan 2025",
    description: [
      "Developed and tested Android/Native modules",
      "Worked on real-time application features and debugging",
      "Collaborated remotely with tech team",
      "Strengthened understanding of mobile architecture and deployment",
    ],
    certificate: "certificates/Internships/Compozent Andoid Native  8-2-25.jpg",
    offerLetter: "certificates/Internships/Compozent Offer letter  08-12-24.jpg",
  },
  {
    title: "Trainee – Junior Server In Charge",
    company: "Aptech Ltd",
    location: "Mumbai, India",
    period: "Jan 2026",
    description: [
      "Assisted in server configuration and maintenance",
      "Gained practical exposure to Networking concepts",
      "Worked with SQL databases for data handling",
      "Demonstrated strong learning ability and technical adaptability",
    ],
    certificate: "certificates/Internships/Aptech_internship.pdf",
    offerLetter: null,
  },
  {
    title: "Python Developer Intern (Participation)",
    company: "Unstop Tech Fair 2025 – Geeks Kepler",
    location: "Remote",
    period: "2025",
    description: [
      "Applied Python fundamentals to problem-solving tasks",
      "Strengthened understanding of backend logic and scripting",
      "Engaged in structured development activities",
    ],
    certificate: "certificates/Internships/Python Developer Internship of Unstop Tech.pdf",
    offerLetter: null,
  },
  {
    title: "Software Development Intern (Participation)",
    company: "Unstop Tech Fair 2025 – Geeks Kepler",
    location: "Remote",
    period: "2025",
    description: [
      "Worked on logic building and application structure",
      "Gained exposure to development workflows",
      "Improved debugging and analytical skills",
    ],
    // ✅ fixed Windows backslashes
    certificate: "certificates/Internships/Software development internship.pdf",
    offerLetter: null,
  },
  {
    title: "IR & KE with Deep Learning Using Python",
    company: "Shree L. R. Tiwari College of Engineering",
    location: "Mumbai, India",
    period: "Dec 2024 – Jan 2025",
    description: [
      "Explored Information Retrieval concepts",
      "Applied Knowledge Engineering techniques",
      "Implemented Python-based deep learning models",
    ],
    // ✅ fixed Windows backslashes
    certificate: "certificates/Internships/Python Cert 14-1-25.pdf",
    offerLetter: null,
  },
  {
    title: "Pyverse – Application Creation Using Python",
    company: "Shree L. R. Tiwari College of Engineering",
    location: "Mumbai, India",
    period: "June 2025",
    description: [
      "Built Python-based applications",
      "Learned practical implementation strategies",
      "Strengthened application design fundamentals",
    ],
    certificate: "certificates/Internships/PYVERSE 16-6-25.pdf",
    offerLetter: null,
  },
  {
    title: "Product Data Management Intern",
    company: "ToolBuy.com",
    location: "Mumbai, Maharashtra",
    period: "2024",
    description: [
      "Managed and updated product listings, including prices and stock.",
      "Ensured accuracy based on market changes and maintained clean digital records to keep website data reliable.",
    ],
    certificate: null,
    offerLetter: null,
  },
];

function getCertificateLabel(path: string) {
  const p = path.toLowerCase();
  if (p.includes("compozent")) return "View Internship Certificate";
  if (p.includes("aptech")) return "View Internship Certificate";
  if (p.includes("pyverse")) return "View Program Certificate";
  if (p.includes("python")) return "View Certificate";
  if (p.includes("software")) return "View Certificate";
  return "View Certificate";
}

export function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const current = useMemo(() => experiences[currentIndex], [currentIndex]);

  const nextCard = () => {
    setDirection('next');
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
  };
  const prevCard = () => {
    setDirection('prev');
    setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  };
  const goToCard = (index: number) => {
    setDirection(index > currentIndex ? 'next' : 'prev');
    setCurrentIndex(index);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prevCard();
    } else if (e.key === 'ArrowRight') {
      nextCard();
    }
  };

  return (
    <section className="py-20 relative z-10" id="experience" onKeyDown={handleKeyDown} tabIndex={0}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#00f3ff]/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#bd00ff]/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f3ff] to-[#bd00ff]">
              Experience
            </span>
          </motion.h2>
        </motion.div>

        {/* Horizontal Card Container */}
        <div className="relative">
          {/* Current Experience Card */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ 
                  opacity: 0, 
                  x: direction === 'next' ? 300 : -300, 
                  scale: 0.8 
                }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ 
                  opacity: 0, 
                  x: direction === 'next' ? -300 : 300, 
                  scale: 0.8 
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md hover:border-[#00f3ff]/50 transition-all relative max-w-4xl mx-auto shadow-2xl"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0, 243, 255, 0.3)"
                }}
              >
                {/* Glowing Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00f3ff]/10 to-[#bd00ff]/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                
                {/* Header */}
                <div className="flex flex-col mb-6 gap-3 relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-10 h-10 bg-gradient-to-r from-[#00f3ff] to-[#bd00ff] rounded-full flex items-center justify-center"
                    >
                      <Briefcase className="w-5 h-5 text-white" />
                    </motion.div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white transition-colors">
                      {current.title}
                    </h3>
                  </div>

                  <div className="flex flex-col gap-2 ml-13">
                    <p className="text-[#bd00ff] font-medium text-lg">{current.company}</p>

                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-gray-400">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{current.location}</span>
                      </div>
                      <span className="opacity-50">•</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span className="font-mono text-[#00ff9d]">{current.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <motion.ul 
                  className="list-disc list-inside space-y-3 text-gray-300 mb-7 relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, staggerChildren: 0.1 }}
                >
                  {current.description.map((desc, i) => (
                    <motion.li 
                      key={i} 
                      className="text-base leading-relaxed"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                    >
                      {desc}
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Links */}
                <motion.div 
                  className="flex flex-wrap gap-3 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {current.certificate ? (
                    <motion.a
                      href={current.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00f3ff] to-[#bd00ff] text-white rounded-lg font-medium hover:shadow-lg hover:shadow-[#00f3ff]/25 transition-all"
                    >
                      <span>{getCertificateLabel(current.certificate)}</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  ) : null}

                  {current.offerLetter ? (
                    <motion.a
                      href={current.offerLetter}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#bd00ff] to-[#00f3ff] text-white rounded-lg font-medium hover:shadow-lg hover:shadow-[#bd00ff]/25 transition-all"
                    >
                      <span>View Offer Letter</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  ) : null}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            type="button"
            onClick={prevCard}
            tabIndex={0}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/20 backdrop-blur-md hover:bg-[#00f3ff]/20 hover:border-[#00f3ff]/50 transition-all group z-10 focus:outline-none focus:ring-2 focus:ring-[#00f3ff]/50"
            aria-label="Previous experience"
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
          </motion.button>

          <motion.button
            type="button"
            onClick={nextCard}
            tabIndex={0}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/20 backdrop-blur-md hover:bg-[#00f3ff]/20 hover:border-[#00f3ff]/50 transition-all group z-10 focus:outline-none focus:ring-2 focus:ring-[#00f3ff]/50"
            aria-label="Next experience"
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
          </motion.button>
        </div>

        {/* Card Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {experiences.map((_, index) => (
            <motion.button
              key={index}
              type="button"
              onClick={() => goToCard(index)}
              className={[
                "h-2 rounded-full transition-all",
                index === currentIndex ? "w-6 bg-[#00f3ff]" : "w-2 bg-[#00f3ff]/30 hover:bg-[#00f3ff]/50",
              ].join(" ")}
              aria-label={`Go to experience ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}