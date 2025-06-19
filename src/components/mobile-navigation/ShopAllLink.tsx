import { cn } from '../../lib/utils';

type Props = {
  href: string;
  label: string;
  hide: boolean;
};

export default function ShopAllLink({ href, label, hide }: Props) {
  return (
    <li
      className={cn(
        'relative group border-t bg-black/5 dark:bg-white/10',
        hide ? 'hidden' : 'block'
      )}
    >
      <a href={href} className={cn('flex items-center justify-between gap-2 p-4')}>
        <div>Shop All {label}</div>
      </a>
    </li>
  );
}
