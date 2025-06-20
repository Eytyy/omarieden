'use client';
import { useContext } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ThemeContext } from '../providers/Theme';
import OmarIconApath from '../icons/OmarIconApath';
import OmerIconBpath from '../icons/OmerIconBpath';

export default function ThemeSwitcher() {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('ThemeSwitcher must be used within a ThemeProvider');
  }

  const { theme, setTheme } = themeContext;

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const { scrollYProgress } = useScroll();

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <button
      className="flex cursor-pointer"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {theme === 'dark' ? (
        <svg className="w-8 h-auto fill-white" viewBox="0 0 1000 1001">
          <motion.g style={{ rotate }} transition={{ duration: 0.5, ease: 'easeInOut' }}>
            <OmarIconApath />
          </motion.g>
        </svg>
      ) : (
        <svg className="w-8 h-auto xl:fill-white" viewBox="0 0 1000 1001">
          <motion.g
            clipPath="url(#clip0_630_1445)"
            style={{ rotate }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <OmerIconBpath />
          </motion.g>
          <defs>
            <clipPath id="clip0_630_1445">
              <rect width="1000" height="1000.51" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
    </button>
  );
}
