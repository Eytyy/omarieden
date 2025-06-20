import { FaBagShopping, FaHeart, FaUser } from 'react-icons/fa6';
import ThemeSwitcher from '../ui/ThemeSwitcher';
import { useLang } from '../providers/LangProvider';
import { cn } from '../../lib/utils';

export default function UserNav() {
  const { lang, setLang } = useLang();

  return (
    <nav className="hidden userNav xl:flex gap-10 fixed rtl:left-0 ltr:right-0 top-0 p-8 z-[44] text-white dark:text-white mix-blend-difference dark:mix-blend-normal uppercase text-lg items-center w-auto ">
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
        <div>
          <button
            className={cn('cursor-pointer', lang === 'en' ? 'font-display' : 'font-sans')}
            onClick={() => setLang('en')}
            aria-label="Change Language to English"
            title="Change Language to English"
          >
            EN
          </button>
          <span>/</span>
          <button
            className={cn('cursor-pointer', lang === 'ar' ? 'font-display-ar' : 'font-sans-ar')}
            onClick={() => setLang('ar')}
            aria-label="Change Language to Arabic"
            title="Change Language to Arabic"
          >
            ع
          </button>
        </div>
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
