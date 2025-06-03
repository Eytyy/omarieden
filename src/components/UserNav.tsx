import { FaBagShopping, FaHeart, FaUser } from 'react-icons/fa6';
import ThemeSwitcher from './ThemeSwitcher';

export default function UserNav() {
  return (
    <nav className="flex flex-col gap-4 lg:flex-row lg:gap-10 sticky lg:fixed right-0 top-0 p-4 lg:p-8 z-50 text-white dark:text-white mix-blend-difference dark:mix-blend-normal uppercase text-lg items-center lg:w-auto w-full">
      <div className="flex gap-10 items-center w-full justify-between">
        <a href="/" className="relative">
          <FaBagShopping size={24} />
          <span className="text-xs absolute top-0 right-0 translate-x-full -translate-y-1/2">
            0
          </span>
        </a>
        <a href="/">
          <FaHeart size={24} />
        </a>
        <a href="/">
          <FaUser size={24} />
        </a>
      </div>
      <div className="flex gap-10 items-center w-full justify-between">
        <a href="/">
          <span className="font-display">EN</span>
          <span>/</span>
          <span>AR</span>
        </a>
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
