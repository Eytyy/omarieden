import React from 'react';
import Full from './Full';
import Compact from './Compact';
import { motion } from 'framer-motion';
import { useApp } from '../providers/useApp';

export default function MobileNav() {
  // set visibility state based on scroll position
  const { mobileMenu, setMobileMenu } = useApp();

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      setMobileMenu(scrollTop < window.innerHeight - 132 ? 'full' : 'compact');
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setMobileMenu]);

  return (
    <motion.div
      layout="position"
      className="mobile-nav fixed top-0 left-0 xl:hidden lg:text-lg col-span-full uppercase w-full border-b z-[100] bg-white dark:bg-black max-h-dvh overflow-auto overscroll-y-contain"
    >
      {mobileMenu == 'full' ? <Full /> : <Compact />}
    </motion.div>
  );
}
