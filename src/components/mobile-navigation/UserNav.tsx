import { FaBagShopping, FaHeart, FaUser } from 'react-icons/fa6';
import MenuBlock from './MenuBlock';
import ThemeSwitcher from '../ui/ThemeSwitcher';

const UserNav = () => {
  return (
    <div className="grid grid-cols-4 h-full">
      <MenuBlock href="/" as="a" className="relative">
        <FaBagShopping size={24} />
        <span className="text-xs absolute top-4 right-4 translate-x-full -translate-y-1/2">0</span>
      </MenuBlock>
      <MenuBlock as="a" href="/">
        <FaHeart size={24} />
      </MenuBlock>
      <MenuBlock as="a" href="/">
        <FaUser size={24} />
      </MenuBlock>
      <MenuBlock className="ltr:border-r-0 rtl:border-l-0">
        <ThemeSwitcher />
      </MenuBlock>
    </div>
  );
};

export default UserNav;
