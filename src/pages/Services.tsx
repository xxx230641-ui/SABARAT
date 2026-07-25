import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { TrendingUp, MonitorPlay, Sparkles, Megaphone, Video, PenTool } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    { icon: <TrendingUp className="w-10 h-10 text-cyan-500" />, title: t('digital_marketing'), desc: t('digital_marketing_desc') },
    { icon: <MonitorPlay className="w-10 h-10 text-blue-500" />, title: t('content_creation'), desc: t('content_creation_desc') },
    { icon: <Sparkles className="w-10 h-10 text-indigo-500" />, title: t('brand_strategy'), desc: t('brand_strategy_desc') },
    { icon: <Megaphone className="w-10 h-10 text-purple-500" />, title: t('social_media'), desc: t('social_media_desc') },
    { icon: <Video className="w-10 h-10 text-rose-500" />, title: t('video_production'), desc: t('video_production_desc') },
    { icon: <PenTool className="w-10 h-10 text-amber-500" />, title: t('copywriting'), desc: t('copywriting_desc') },
  ];

  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-4 w-full">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
            {t('our_services')}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/20 dark:border-white/5 rounded-[2rem] p-8 shadow-lg overflow-hidden"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative z-10">
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 shadow-sm border border-white/50 dark:border-white/10">
                  {srv.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {srv.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {srv.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
