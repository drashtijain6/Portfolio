import { motion } from "motion/react";

export function Navbar() {
  const links = [
    { name: "About", href: "#hero" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Status", href: "#status" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 2.2 }} // Wait for preloader
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg"
    >
      <ul className="flex items-center gap-6">
        {links.map((link) => (
          <li key={link.name}>
            <motion.a
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-[#00f3ff] transition-colors inline-block"
              whileHover={{
                y: -4,
                scale: 1.05,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }
              }}
              whileTap={{
                scale: 0.95,
                transition: {
                  duration: 0.1
                }
              }}
            >
              {link.name}
            </motion.a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
