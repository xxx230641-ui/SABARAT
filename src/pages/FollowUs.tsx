import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

export default function FollowUs() {
  const { t } = useTranslation();

  return (
    <PageWrapper className="justify-center">
      <div className="max-w-xl mx-auto px-4 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t('follow_us')}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center text-center group hover:border-cyan-500/50 transition-colors duration-500"
        >
          {/* Decorative blur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-colors duration-500" />
          
          <a
            href="https://www.instagram.com/sabaratye/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 flex flex-col items-center gap-6 p-8 rounded-3xl hover:bg-white/5 dark:hover:bg-white/5 transition-colors"
          >
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-xl shadow-cyan-500/30 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300">
              <Instagram size={48} strokeWidth={1.5} />
            </div>
            <span className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">
              {t('sabarat')}
            </span>
          </a>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
