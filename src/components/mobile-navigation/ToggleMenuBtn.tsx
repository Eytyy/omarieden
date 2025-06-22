import MenuBlock from './MenuBlock';

export const ToggleMenuBtn = ({ onClick, isOpen }: { isOpen: boolean; onClick: () => void }) => (
  <MenuBlock
    className="col-span-2 items-start flex w-full uppercase cursor-pointer"
    as="button"
    aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
    title="Menu"
    onClick={onClick}
  >
    <div className="flex items-center gap-2 ">
      <span className="font-display text-3xl w-5 ">{isOpen ? '-' : '+'}</span>
      <span>Menu</span>
    </div>
  </MenuBlock>
);
