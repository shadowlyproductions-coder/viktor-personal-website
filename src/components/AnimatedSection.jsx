import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AnimatedSection({ id, className = "", children }) {
  return (
    <motion.section
      id={id}
      className={`section-padding scroll-mt-24 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
      variants={reveal}
    >
      {children}
    </motion.section>
  );
}
