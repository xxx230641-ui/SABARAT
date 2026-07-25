import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, TrendingUp, MonitorPlay } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';

export default function Home() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const container: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item: any = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  const services = [
    { icon: <TrendingUp className="w-8 h-8 text-cyan-500" />, title: t('digital_marketing'), desc: t('digital_marketing_desc') },
    { icon: <MonitorPlay className="w-8 h-8 text-blue-500" />, title: t('content_creation'), desc: t('content_creation_desc') },
    { icon: <Sparkles className="w-8 h-8 text-indigo-500" />, title: t('brand_strategy'), desc: t('brand_strategy_desc') },
  ];

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-cyan-50/50 dark:to-slate-950" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-cyan-100/50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-sm font-semibold mb-6 border border-cyan-200 dark:border-cyan-800/50 backdrop-blur-md">
              {t('tagline')}
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
              {t('hero_title')}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
              {t('hero_subtitle')}
            </p>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                to="/services"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-full overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(6,182,212,0.4)]"
              >
                <div className="absolute inset-0 w-0 bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative flex items-center gap-2 group-hover:text-white">
                  {t('get_started')} 
                  <ArrowRight className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              {t('our_services')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((srv, idx) => (
              <motion.div
                key={idx}
                variants={item}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/20 dark:border-white/5 rounded-3xl p-8 shadow-xl transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6 shadow-inner">
                  {srv.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {srv.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {srv.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
