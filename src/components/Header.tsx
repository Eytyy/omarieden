import DesktopNav from './desktop-navigation/DesktopNav';
import MobileNav from './mobile-navigation/MobileNav';

export default function Header() {
  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
}
