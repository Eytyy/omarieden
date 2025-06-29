import { useApp } from '@/shared/providers/useApp';
import { cn } from '../../../lib/utils';

type Props = {
  href: string;
  label: string;
  hide: boolean;
};

export default function ShopAllLink({ href, label, hide }: Props) {
  const { lang } = useApp();
  const localizedLabel = lang === 'en' ? `Shop All ${label}` : `تسوق الجميع`;

  return (
    <li
      className={cn(
        'relative group border-t font-display rtl:font-display-ar rtl:text-lg',
        hide ? 'hidden' : 'block'
      )}
    >
      <a href={href} className={cn('flex items-center justify-between gap-2 p-4')}>
        <div>{localizedLabel}</div>
      </a>
    </li>
  );
}
