import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const { t } = useTranslation();
  const { theme, toggleTheme, language, toggleLanguage } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: '/', label: t('home') },
    { to: '/about', label: t('about') },
    { to: '/services', label: t('services') },
    { to: '/join', label: t('join') },
    { to: '/follow', label: t('follow_us') },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 drop-shadow-sm">
                <img src="/logo.jpg" alt="SABARAT Logo" className="w-full h-full object-cover scale-[1.02]" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-slate-900 dark:text-white">
                {t('sabarat')}
              </span>
            </NavLink>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group overflow-hidden',
                      isActive
                        ? 'text-cyan-600 dark:text-cyan-400'
                        : 'text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400'
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10">{link.label}</span>
                      {isActive && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute inset-0 bg-cyan-100 dark:bg-cyan-900/30 rounded-full"
                          initial={false}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-cyan-100 dark:hover:bg-cyan-900/50 transition-colors"
              aria-label="Toggle Language"
            >
              <Globe size={18} />
              <span className="sr-only">{language === 'ar' ? 'English' : 'عربي'}</span>
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-cyan-100 dark:hover:bg-cyan-900/50 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full text-slate-700 dark:text-slate-200"
            >
              <Globe size={20} />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-700 dark:text-slate-200"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    cn(
                      'block px-4 py-3 rounded-xl text-base font-medium transition-colors',
                      isActive
                        ? 'bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
