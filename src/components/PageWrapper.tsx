import { motion } from 'motion/react';

export default function PageWrapper({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`min-h-screen pt-24 pb-12 flex flex-col ${className}`}
    >
      {children}
    </motion.div>
  );
}
