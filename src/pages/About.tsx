import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import PageWrapper from '../components/PageWrapper';

export default function About() {
  const { t } = useTranslation();

  return (
    <PageWrapper className="justify-center">
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ rotateY: 180, scale: 0.8 }}
            animate={{ rotateY: 0, scale: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="mb-12 flex items-center justify-center"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              <img src="/logo.jpg" alt="SABARAT Logo" className="w-full h-full object-cover scale-[1.02]" />
            </div>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-8">
            {t('about_title')}
          </h1>
          
          <div className="space-y-6 text-lg md:text-2xl text-slate-600 dark:text-slate-300 font-light leading-relaxed">
            <p>
              {t('about_p1')}
            </p>
            <p>
              {t('about_p2')}
            </p>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
