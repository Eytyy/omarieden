import { useState } from 'react';
import type { menu } from '../data/main-menu';
import { motion, type Variants } from 'framer-motion';
import { cn } from '../lib/utils';

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};
export const SubNav = ({ items }: { items: (typeof menu)[0]['subMenu'] }) => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const onClick = (id: number) => {
    setActiveMenu((prev) => (prev === id ? null : id));
  };

  const subMenu = items.find((item) => item.id === activeMenu)?.subMenu || null;

  return (
    <>
      <ul className="px-8 flex w-full lg:w-[33.333vw] 2xl:w-[25vw] pl-[106px] md:pl-8 flex-col py-4 lg:py-8 uppercase border-b md:border-b-0 lg:border-r border-black dark:border-white  lg:h-full">
        {items.map((item, index) => (
          <motion.li
            key={item.id}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            className={cn(index === 0 && 'font-display')}
          >
            <a
              href={item.href}
              className="text-lg flex items-center gap-2"
              onClick={(e) => {
                if (item.subMenu) {
                  e.preventDefault();
                  onClick(item.id);
                }
              }}
            >
              {item.subMenu ? (
                <div className="font-display text-3xl w-5 flex justify-center">
                  {activeMenu === item.id ? '-' : '+'}
                </div>
              ) : null}
              <div>{item.label}</div>
            </a>
          </motion.li>
        ))}
      </ul>

      {subMenu && <SubNav items={subMenu} />}
    </>
  );
};
