import { FaMinus, FaPlus } from 'react-icons/fa6';
import type { MenuItemType } from '../../../data/main-menu';

type Props = {
  item: MenuItemType;
  onClick: (id: string) => void;
  activeMenu: string | null;
};

export default function MenuButton({ item, activeMenu, onClick }: Props) {
  const active = activeMenu === item.id;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick(item.id);
  };

  return (
    <li className="relative group flex flex-col">
      <button className="cursor-pointer text-lg flex items-center gap-2" onClick={handleClick}>
        <div className="flex justify-center font-display">
          {active ? <FaMinus size={20} /> : <FaPlus size={20} />}
        </div>
        <div className="uppercase">{item.label}</div>
      </button>
    </li>
  );
}
