import MenuBlock from './MenuBlock';
import { FaPlus, FaMinus } from 'react-icons/fa6';
export const ToggleMenuBtn = ({ onClick, isOpen }: { isOpen: boolean; onClick: () => void }) => (
  <MenuBlock
    className="col-span-2 items-start flex w-full uppercase cursor-pointer"
    as="button"
    aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
    title="Menu"
    onClick={onClick}
  >
    <div className="flex items-center gap-2">
      <span className="font-display">{isOpen ? <FaMinus size={25} /> : <FaPlus size={25} />}</span>
      <span>Menu</span>
    </div>
  </MenuBlock>
);
