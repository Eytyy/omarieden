import { useApp } from '../../providers/useApp';
import FooterMenu from './FooterMenu';
import FooterLogo from './Logo';
import Newsletter from './Newsletter';

export default function Footer() {
  const { lang } = useApp();
  return (
    <div className="bg-white relative lg:min-h-screen flex flex-col justify-end dark:bg-black">
      <div className="p-4 py-8 lg:p-0 lg:py-0 lg:pt-[172px]">
        <FooterLogo />
      </div>
      <div className="lg:p-8 pt-0 flex justify-between lg:gap-8 text-sm flex-wrap">
        <FooterMenu lang={lang} />
        <Newsletter lang={lang} />
      </div>
    </div>
  );
}
