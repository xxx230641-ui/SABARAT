import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Splash({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Sequence timing
    const t1 = setTimeout(() => setStage(1), 1000); // Show text after 1s
    const t2 = setTimeout(() => setStage(2), 3000); // Hold for 2s after text, then fade out
    const t3 = setTimeout(() => onComplete(), 3800); // Unmount

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {stage < 2 && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center overflow-hidden"
          dir="rtl"
        >
          {/* Background Ambient Lights */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center">
            <motion.div 
              initial={{ scale: 0.5, rotateY: 180, opacity: 0 }}
              animate={{ scale: 1, rotateY: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", type: "spring", bounce: 0.4 }}
              className="relative mb-8 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.4)]"
            >
               <img 
                 src="/logo.jpg" 
                 alt="SABARAT Logo" 
                 className="w-full h-full object-cover scale-[1.02]"
               />
            </motion.div>

            {/* Text Animation */}
            <div className="h-16 flex items-center justify-center overflow-visible px-4 py-2">
              <AnimatePresence>
                {stage >= 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-wide whitespace-nowrap"
                  >
                    سَبَرْت للتسويق وصناعة المحتوى
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
