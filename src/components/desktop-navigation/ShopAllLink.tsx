import { cn } from '../../lib/utils';

type Props = {
  href: string;
  label: string;
};

export default function ShopAllLink({ href, label }: Props) {
  return (
    <li className="relative text-lg mb-2 ">
      <a href={href} className={cn('flex items-center gap-2')}>
        <div>Shop All {label}</div>
      </a>
    </li>
  );
}
