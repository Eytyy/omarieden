import { useApp } from '@/shared/providers/useApp';
import { cn } from '../../../lib/utils';

type Props = {
  href: string;
  label: string;
};

export default function ShopAllLink({ href, label }: Props) {
  const { lang } = useApp();
  const localizedLabel = lang === 'en' ? `Shop All ${label}` : `تسوق ${label}`;

  return (
    <li className="relative text-lg rtl:text-xl rtl:font-display-ar font-display mb-2 ">
      <a href={href} className={cn('flex items-center gap-2')}>
        <div>{localizedLabel}</div>
      </a>
    </li>
  );
}
