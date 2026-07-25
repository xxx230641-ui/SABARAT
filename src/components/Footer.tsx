import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur-md relative z-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <NavLink to="/" className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 drop-shadow-sm">
                <img src="/logo.jpg" alt="SABARAT Logo" className="w-full h-full object-cover scale-[1.02]" />
              </div>
              <span className="font-bold text-xl text-slate-900 dark:text-white">
                {t('sabarat')}
              </span>
            </NavLink>
            <p className="text-slate-600 dark:text-slate-400 max-w-sm mb-6">
              {t('tagline')}
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/sabaratye/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-500 transition-colors"><Instagram size={24} /></a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Links</h3>
            <ul className="space-y-2">
              <li><NavLink to="/about" className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition-colors">{t('about')}</NavLink></li>
              <li><NavLink to="/services" className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition-colors">{t('services')}</NavLink></li>
              <li><NavLink to="/join" className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition-colors">{t('join')}</NavLink></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500">
          © {currentYear} {t('sabarat')}. {t('all_rights_reserved')}
        </div>
      </div>
    </footer>
  );
}
