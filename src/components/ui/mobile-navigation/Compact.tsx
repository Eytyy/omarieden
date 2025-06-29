import { useState } from 'react';

import MenuBlock from './MenuBlock';
import MainNav from './MainNav';
import { FaArrowUp, FaBagShopping, FaHeart, FaUser } from 'react-icons/fa6';
import { ToggleMenuBtn } from './ToggleMenuBtn';
import { menu } from '../../../data/main-menu';

export default function Compact() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="max-h-dvh overflow-auto overscroll-y-contain" data-lenis-prevent>
      <nav className="grid grid-cols-6 w-full">
        <MenuBlock
          as="button"
          className="col-span-1 cursor-pointer"
          onClick={scrollToTop}
          aria-label="Scroll to Top"
          title="Scroll to Top"
          data-testid="scroll-to-top-button"
        >
          <FaArrowUp size={24} />
        </MenuBlock>
        <div className="flex flex-col h-full col-span-5">
          <div className="grid grid-cols-5 ">
            <ToggleMenuBtn onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
            <MenuBlock href="/" as="a" className="relative">
              <FaBagShopping size={24} />
              <span className="text-xs absolute top-4 right-4 translate-x-full -translate-y-1/2">
                0
              </span>
            </MenuBlock>
            <MenuBlock as="a" href="/">
              <FaHeart size={24} />
            </MenuBlock>
            <MenuBlock as="a" href="/" className="ltr:border-r-0 rtl:border-l-0">
              <FaUser size={24} />
            </MenuBlock>
          </div>
        </div>
      </nav>
      {isOpen ? <MainNav menu={menu} /> : null}
    </div>
  );
}
